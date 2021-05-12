import calendar
import datetime
import time

import pymongo
import yaml

from utils import Output


class Monger:
    def __init__(self,
                 url,
                 port,
                 dbname,
                 auth,
                 col_name,
                 case):
        self.url = url
        self.port = port
        self.dbname = dbname
        self.auth = auth
        self.col = col_name
        self.case = case
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
        if [y, m] == [(datetime.datetime.today() - datetime.timedelta(hours=8)).year,
                      (datetime.datetime.today() - datetime.timedelta(hours=8)).month]:
            return datetime.datetime(y, m, (datetime.datetime.today() - datetime.timedelta(hours=8)).day,
                                     (datetime.datetime.today() - datetime.timedelta(hours=8)).hour,
                                     (datetime.datetime.today() - datetime.timedelta(hours=8)).minute,
                                     (datetime.datetime.today() - datetime.timedelta(hours=8)).second)
        return datetime.datetime(y, m, calendar.monthrange(y, m)[1], t[0], t[1], t[2])

    def collection(self, y, m):
        """
        mon1 is start then mon2 is end,
        use pymongo find() data between $gte and $lte
        """
        dataset = None
        try:
            self._conn()
            print(self._conn())
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
                print("It's a gap")
            else:
                y1, y2 = y, y
                m1, m2 = m - 1, m
            dataset = col.find({self.case: {
                '$gte': self._last_day(y1, m1, t1),
                '$lte': self._last_day(y2, m2, t2)
            }
            })
        for data in dataset:
            print(data)
        if dataset is None:
            Output("ERROR", "NO DATA")
        else:
            return dataset


if __name__ == '__main__':
    with open('../../init.yaml') as f:
        mongoParam = yaml.load(f, Loader=yaml.FullLoader)

    paramDic = mongoParam['mongodb'][0]
    url = paramDic['url']
    port = paramDic['port']
    auth = paramDic['auth']
    dbname = paramDic['dbname']
    collection = paramDic['collection']
    case = paramDic['case']
    m = Monger(url, port, dbname, auth, collection, case)
    print(paramDic)
    m.collection(2021, 5)
