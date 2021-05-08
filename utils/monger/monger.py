import pymongo
import yaml


class Monger:
    def __init__(self,
                 url,
                 port,
                 dbname,
                 auth):
        self.url = url
        self.port = port
        self.dbname = dbname
        self.auth = auth

    def _conn(self):
        client = pymongo.MongoClient(self.url, self.port)
        db = client[self.dbname]
        db.authenticate(self.auth[0], self.auth[1])
        return db




if __name__ == '__main__':
    with open('../../init.yaml') as f:
        mongoParam = yaml.load(f, Loader=yaml.FullLoader)

    paramDic = mongoParam['mongodb'][0]
    url = paramDic['url']
    port = paramDic['port']
    auth = paramDic['auth']
    dbname = paramDic['dbname']
    m = Monger(url, port, dbname, auth)
    print(paramDic)
    m._conn()
