import calendar
import datetime
import json
import re
import time
import pymongo
import redis


class Output:
    """Output information
    while using this program
    [SUMAMONTH][INFO]
    [SUMAMONTH][ERROR]
    [SUMAMONTH][WARN]
    """

    def __init__(self, tag, statement):
        self._time = time.strftime("%Y-%m-%d %H:%M:%S ",
                                   time.localtime())
        self._statement = statement
        self._tag = tag

        print("[SUMAMONTH][" + self._tag + "] " + self._time + self._statement)


class Monger:
    """
    Use Pymongo
    """

    def __init__(self,
                 url,
                 port,
                 dbname,
                 auth,
                 col_name,
                 case,
                 utc,
                 hostR,
                 portR,
                 authR):
        self.url = url
        self.port = port
        self.dbname = dbname
        self.auth = auth
        self.col = col_name
        self.case = case
        self.utc = utc
        self.hostR = hostR
        self.portR = portR
        self.authR = authR
        self.now = datetime.datetime.today() - datetime.timedelta(hours=8)
        self.maxTry = 0

    def _conn(self):
        client = pymongo.MongoClient(self.url, self.port)
        db = client[self.dbname]
        db.authenticate(self.auth[0], self.auth[1])
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
        timeArr = datetime.datetime.strftime(t, "%Y-%m-%d %H:%M:%S")
        timeArr = time.strptime(timeArr, "%Y-%m-%d %H:%M:%S")
        timeUTC = int(time.mktime(timeArr))
        timeStamp = timeUTC + self.utc * 60 * 60
        return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(timeStamp))

    def _collection(self, y, m):
        """
        mon1 is start then mon2 is end,
        use pymongo find() data between $gte and $lte
        """
        dataset = None
        try:
            self._conn()
            Output("INFO", "MongoDB connection succeeded")
            Output("INFO", "Use '" + self.col + "' as basic collection")
        except:
            Output("ERROR", "MongoDB connection failed")
        else:
            db = self._conn()
            col = db[self.col]
            t1, t2 = [16, 0, 0], [15, 59, 59]
            # If month is December
            if m == 1:
                y1, y2 = y - 1, y
                m1, m2 = 12, 1
            else:
                y1, y2 = y, y
                m1, m2 = m - 1, m
            dataset = col.find({self.case: {
                '$gte': self._last_day(y1, m1, t1),
                '$lte': self._last_day(y2, m2, t2)
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

    def display_data(self, y, m):
        """
        This is customized way to handle collection
        and extract info

        @TODO(data): Fixed dead code
        """
        RDB = RedisMonth(self.hostR, self.portR, self.authR)
        cacheName = str(y) + str(m)
        dataset = RDB.extract_redis(cacheName)
        if dataset is None:
            # Output("INFO", "No cache, reload from MongoDB")
            dataset = []
            for line in self._collection(y, m):
                if re.findall(r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b", line['group']):
                    continue
                data = {
                    'group': line['group'],
                    'code': line['code'],
                    'codeCmd': line['codeCmd'],
                    'query': line['queryCmd'],
                    # 2021-05-05 00:00:00
                    'start': self._time_transfer(line['alarmTime']),
                    'end': self._time_transfer(line['exitAlarmTime']),
                    'duration': round(line['alarmDuration'] / 60),
                    'description': line['description'],
                    'wiki': line['wikiContent'],
                }
                dataset.append(data)
            RDB.store_redis(json.dumps(dataset), cacheName)
        return dataset


class RedisMonth:
    """
    Store monthly data into redis
    """

    def __init__(self, host, port, auth):
        self.host = host
        self.port = port
        self.auth = auth

    def _conn(self):
        rdb = redis.StrictRedis(host=self.host, port=self.port, db=0, password=self.auth, decode_responses=True)
        return rdb

    def store_redis(self, data, name):
        # Cache data with year&month
        self._conn().setex('monthCache' + name, 10, data)

    def extract_redis(self, name):
        return self._conn().get('monthCache' + name)
