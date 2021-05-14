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
        self.RDB = RedisMonth(self.hostR, self.portR, self.authR)

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

    def _month_data(self, y, m):
        """
        This is customized way to handle collection
        and extract info

        @TODO(data): Fixed dead code
        """
        cacheName = 'monthCache' + str(y) + str(m)
        dataset = self.RDB.extract_redis(cacheName)
        if dataset is not None:
            dataset = json.loads(dataset)
        else:
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
            self.RDB.store_redis(json.dumps(dataset), cacheName)
        return dataset

    def _summery_data(self, y, m):
        monthData = self._month_data(y, m)
        group, times, mins = [], [], []
        groupCodes, codes, groupContents, contents = [], [], [], []
        for i in range(len(monthData)):
            gName, dMins, cName, cmdName = monthData[i]['group'], monthData[i]['duration'], monthData[i]['code'], \
                                           monthData[i]['codeCmd']
            if gName not in group:
                group.append(gName)
                times.append(1)
                mins.append(dMins)
                codes.append([cName])
                contents.append([cmdName])
                groupCodes.append([1])
                groupContents.append([1])
            else:
                times[group.index(gName)] += 1
                mins[group.index(gName)] += dMins
                if cName not in codes[group.index(gName)]:
                    codes[group.index(gName)].append(cName)
                    groupCodes[group.index(gName)].append(1)
                else:
                    groupCodes[group.index(gName)][codes[group.index(gName)].index(cName)] += 1
                if cmdName not in contents[group.index(gName)]:
                    contents[group.index(gName)].append(cmdName)
                    groupContents[group.index(gName)].append(1)
                else:
                    groupContents[group.index(gName)][contents[group.index(gName)].index(cmdName)] += 1
        return group, times, mins, codes, contents, groupCodes, groupContents

    def index_data(self, y, m):
        group, times, mins, _, _, count1, count2 = self._summery_data(y, m)
        cacheName = 'indexCache' + str(y) + str(m)
        res = self.RDB.extract_redis(cacheName)
        if res is not None:
            res = json.loads(res)
        else:
            res = []
            for g in range(len(group)):
                dic = {
                    'group': group[g],
                    'times': times[g],
                    'mins': mins[g],
                    'codes': len(count1[g]),
                    'contents': len(count2[g])
                }
                res.append(dic)
            self.RDB.store_redis(json.dumps(res), cacheName)
        return res


class RedisMonth:
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
        # Cache data with year&month
        self._conn().setex(name, 60, data)
        # self._conn().execute_command('JSON.SET', name, '.', data)
        # self._conn().execute_command('JSON.DEL', 'monthCache' + name)

    def extract_redis(self, name):
        return self._conn().get(name)
        # return self._conn().execute_command('JSON.GET', name)
