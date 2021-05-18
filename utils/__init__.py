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
                 authR,
                 year,
                 month):
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

    def _collection(self):
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
            dataset = self._conn()[self.col].find({
                self.case: {
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

    def _month_data(self):
        """
        This is customized way to handle collection
        and extract info

        @TODO(data): Fixed dead code
        """
        cacheName = 'monthCache' + str(self.year) + str(self.month)
        dataset = self.RDB.extract_redis(cacheName)
        if dataset is not None:
            dataset = json.loads(dataset)
        else:
            dataset = []
            for line in self._collection():
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

    def _summery_data(self):
        monthData = self._month_data()
        group, times, mins = [], [], []
        groupCodes, codes, groupContents, contents, groupMaxDuration, groupMaxAlarm = [], [], [], [], [], []
        for i in range(len(monthData)):
            gName, dMins, cName, cmdName, maxAlarm = monthData[i]['group'], monthData[i]['duration'], monthData[i][
                'code'], \
                                                     monthData[i]['codeCmd'], monthData[i]['start']
            if gName not in group:
                group.append(gName)
                times.append(1)
                mins.append(dMins)
                codes.append([cName])
                contents.append([cmdName])
                groupCodes.append([1])
                groupContents.append([1])
                groupMaxDuration.append(dMins)
                groupMaxAlarm.append(maxAlarm)
            else:
                times[group.index(gName)] += 1
                mins[group.index(gName)] += dMins
                if cName not in codes[group.index(gName)]:
                    codes[group.index(gName)].append(cName)
                    groupCodes[group.index(gName)].append(1)
                else:
                    groupCodes[group.index(gName)][codes[group.index(gName)].index(cName)] += 1
                if cmdName in contents[group.index(gName)]:
                    groupContents[group.index(gName)][contents[group.index(gName)].index(cmdName)] += 1
                else:
                    contents[group.index(gName)].append(cmdName)
                    groupContents[group.index(gName)].append(1)
                if groupMaxDuration[group.index(gName)] < dMins:
                    groupMaxDuration[group.index(gName)] = dMins
                    groupMaxAlarm[group.index(gName)] = maxAlarm
        return group, times, mins, codes, contents, groupCodes, groupContents, groupMaxDuration, groupMaxAlarm

    def _find_tag(self, group):
        """
        Use aggregate to find something
        """
        tagSet = self._conn()[self.col].aggregate(
            [{'$match': {
                self.case: {'$gte': self._last_day(self.y1, self.m1, self.t1),
                            '$lte': self._last_day(self.y2, self.m2, self.t2)},
                'group': group
            }},
                {'$unwind': '$targets'},
                {'$group': {'_id': '$targets', 'value': {'$sum': 1}}},
                {'$project': {'_id': 0, 'name': '$_id', 'value': 1}}
            ])
        aliasTag = "| "
        aliasIP = "| "
        for tag in tagSet:
            if tag['name'] is not None:
                if tag['name'][0:2] == "IP":
                    aliasIP += tag['name'][3:] + ' | '
                else:
                    aliasTag += tag['name'] + ' | '
        return aliasTag, aliasIP

    def _find_man(self, group):
        operators = self._conn()[self.col].aggregate(
            [{'$match': {
                self.case: {'$gte': self._last_day(self.y1, self.m1, self.t1),
                            '$lte': self._last_day(self.y2, self.m2, self.t2)},
                'group': group
            }},
                {'$unwind': '$targets'},
                {'$group': {'_id': '$wikiContent.contacts'}},
                {'$project': {'_id': 0, 'name': '$_id', 'value': 1}}
            ])
        aliasOpts = ""
        temp = []
        for man in operators:
            if man['name'] is not None:
                arr = man['name'].split(',')
                for a in arr:
                    if a not in temp:
                        temp.append(a)
        if len(temp) != 0:
            for opt in temp:
                aliasOpts += '、' + opt
        return aliasOpts[1:]

    def _find_last_month(self, group):
        def last_month(year, month):
            if month == 1:
                lastMonth = 12
                lastYear = year - 1
            else:
                lastMonth = month - 1
                lastYear = year
            return lastYear, lastMonth

        y1, m1 = last_month(self.y1, self.m1)
        y2, m2 = last_month(self.y2, self.m2)
        lastCount = self._conn()[self.col].find(
            {'alarmTime': {'$gte': self._last_day(y1, m1, self.t1),
                           '$lte': self._last_day(y2, m2, self.t2)},
             'group': group}).count()
        return lastCount

    def index_data(self):
        group, times, mins, _, _, count1, count2, maxDuration, maxAlarm = self._summery_data()
        cacheName = 'indexCache' + str(self.year) + str(self.month)
        res = self.RDB.extract_redis(cacheName)
        if res is not None:
            res = json.loads(res)
        else:
            res = []
            for g in range(len(group)):
                tag, IP = self._find_tag(group[g])
                operators = self._find_man(group[g])
                lastMonth = self._find_last_month(group[g])
                dic = {
                    'group': group[g],
                    'times': times[g],
                    'mins': mins[g],
                    'codes': len(count1[g]),
                    'contents': len(count2[g]),
                    'tag': tag,
                    'IP': IP,
                    'operators': operators,
                    'maxDuration': maxDuration[g],
                    'maxAlarm': maxAlarm[g],
                    'lastMonth': lastMonth
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
