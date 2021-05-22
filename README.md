# SUMAMONTH

This project is made of `MongoDB`+`Redis`+`Flask` 🎉</br>
[Sample click here](https://bigkjp97.github.io/sumamonth/)

### MongoDB

```python
class Monger:
```

#### Connect to a mongodb

```python
import pymongo


def conn(self):
    client = pymongo.MongoClient(self.host, self.port)
    db = client[self.dbname]
    db.authenticate(self.user, self.pwd)
    return db
```

#### Find data

you can use db.collection.find() or db.collection.aggregate() to extract a set of data:</br>
these will query the database and retrieve batches of raw BSON,</br>
specially, use datetime.datetime instead of ISODate in mongo shell

```python
import datetime


def data(self):
    return self.conn()[self.collection].find({
        'time': {
            '$gte': datetime.datetime(year1, month1, day1, hour1, minute1, second1),
            '$lte': datetime.datetime(year2, month2, day2, hour2, minute2, second2)
        }
    })
```

#### Data format

extract data again, and transfer data to the format that u want to get/post from flask api</br>
for example, the struct of my data in mongodb is:</br>

```json
{
  "name": "Windows",
  "code": "KJP97-12",
  "start": "2021-5-10 00:01:01",
  "end": "2021-5-21 00:00:00",
  "description": "Finish sumamonth project👌"
}
```

so I use dic to collect a json then `append` each to an array

```python
def json_data(self):
    dataset = []
    for data in self.data():
        dic = {
            'name': data['name'],
            'code': data['code'],
            'start': data['start'],
            'end': data['end'],
            'description': data['description']
        }
        dataset.append(dic)
    return dataset
```

### Redis

#### Use redis

stronger&faster, so this project use redis to store data temporarily

```python
class Rediser:
```

make a connection

```python
import redis


def conn(self):
    rdb = redis.StrictRedis(host=self.host, port=self.port, password=self.auth, decode_responses=True)
    return rdb
```

store/get data from redis db

```python
def store_redis(self, data, name):
    # Cache data with year&month name
    self._conn().setex(name, 3600, data)


def extract_redis(self, name):
    return self._conn().get(name)
```

If there is data in redis, get them directly with `get_redis` else get them from mongodb</br>
and store them again 👏

```python
import json


def index_data(self):
    cache_name = 'cache'
    dataset = self.RDB.get_redis(cache_name)
    if dataset is not None:
        dataset = json.loads(dataset)
    else:
        dataset = []
        for data in self._collection():
            dic = {
                'name': data['name'],
                'code': data['code'],
                # 2021-05-05 00:00:00
                'start': self._time_transfer(data['start']),
                'end': self._time_transfer(data['end']),
                'description': data['description'],
            }
            dataset.append(dic)
        self.RDB.store_redis(json.dumps(dataset), cache_name)
    return dataset
```

### Flask

```python
from flask import Flask, make_response
from utils import db

app = Flask(__name__)


@app.route("/api/<year>/<month>", methods=['POST'])
def api(year, month):
    data = db.Monger('init.yaml', year, month).index_data()
    api_value = {
        'status': 'success',
        'totals': len(data),
        'data': data
    }
    response = make_response(api_value)
    return response


if __name__ == '__main__':
    app.run('localhost', 5000, debug=True)
```

### _init.yaml_

```yaml
mongodb:
  - host: '127.0.0.1'
    port: 27017
    auth: [ 'mongodb','helloworld' ]
    dbname: 'system'
    collection: 'warning'
    case: 'time'
    utc: 8

redis:
  - host: '127.0.0.1'
    port: 6379
    auth: 'helloworld'
```