import redis
import calendar
import datetime
import json
import re
import time
import pymongo

from utils.controller import Output, Configure


class Monger:
    """
    Use Pymongo
    """

    def __init__(self, file, year, month):
        self.mongo_host, self.mongo_port, self.mongo_auth, self.mongo_dbname, \
        self.mongo_collection, self.mongo_case, self.utc, \
        self.redis_host, self.redis_port, self.redis_auth = Configure(file).config()
        self.year = year
        self.month = month
        self.t1, self.t2 = [16, 0, 0], [15, 59, 59]
        # If month is December
        if month == 1:
            self.y1, self.y2 = year - 1, year
            self.m1, self.m2 = 12, 1
        else:
            self.y1, self.y2 = year, year
            self.m1, self.m2 = month - 1, month
        self.now = datetime.datetime.today() - datetime.timedelta(hours=8)
        self.maxTry = 0
        self.RDB = Rediser(self.redis_host, self.redis_port, self.redis_auth)

    def _conn(self):
        client = pymongo.MongoClient(self.mongo_host, self.mongo_port)
        db = client[self.mongo_dbname]
        db.authenticate(self.mongo_auth[0], self.mongo_auth[1])
        return db

    def _last_day(self, y, m, t):
        """
        :return: time
        """
        # Find when this month not pass yet
        if [y, m] == [self.now.year,
                      self.now.month]:
            return datetime.datetime(y, m, self.now.day, self.now.hour, self.now.minute, self.now.second)
        return datetime.datetime(y, m, calendar.monthrange(y, m)[1], t[0], t[1], t[2])

    def _time_transfer(self, t):
        """
        transfer utc to ur localtime
        :param t: time
        :return:
        """
        time_arr = datetime.datetime.strftime(t, "%Y-%m-%d %H:%M:%S")
        time_arr = time.strptime(time_arr, "%Y-%m-%d %H:%M:%S")
        time_utc = int(time.mktime(time_arr))
        timestamp = time_utc + self.utc * 60 * 60
        return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(timestamp))

    def _collection(self):
        """
        mon1 is start then mon2 is end,
        use pymongo find() data between $gte and $lte
        """

        dataset = None
        try:
            self._conn()
            Output("INFO", "MongoDB connection succeeded")
            Output("INFO", "Use '" + self.mongo_collection + "' as basic collection")
        except:
            Output("ERROR", "MongoDB connection failed")
        else:
            dataset = self._conn()[self.mongo_collection].find({
                self.mongo_case: {
                    '$gte': self._last_day(self.y1, self.m1, self.t1),
                    '$lte': self._last_day(self.y2, self.m2, self.t2)
                }
            })
        if dataset is None:
            Output("ERROR", "NO DATA")
        else:
            dset = []
            for data in dataset:
                dset.append(data)
            # data object
            return dset

    def index_data(self):
        """
        This is customized way to handle collection
        and extract info

        @TODO(data): long code
        """
        cache_name = 'cache' + str(self.year) + str(self.month)
        dataset = self.RDB.get_redis(cache_name)
        if dataset is not None:
            dataset = json.loads(dataset)
        else:
            dataset = []
            for line in self._collection():
                data = {
                    'name': line['name'],
                    'code': line['code'],
                    # 2021-05-05 00:00:00
                    'start': self._time_transfer(line['start']),
                    'end': self._time_transfer(line['end']),
                    'description': line['description'],
                }
                dataset.append(data)
            self.RDB.store_redis(json.dumps(dataset), cache_name)
        return dataset


class Rediser:
    """
    Store monthly data into redis
    """

    def __init__(self, host, port, auth):
        self.host = host
        self.port = port
        self.auth = auth

    def _conn(self):
        rdb = redis.StrictRedis(host=self.host, port=self.port, password=self.auth, decode_responses=True)
        return rdb

    def store_redis(self, data, name):
        # Cache data with year&month name
        self._conn().setex(name, 3600, data)

    def get_redis(self, name):
        return self._conn().get(name)
