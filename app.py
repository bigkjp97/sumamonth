import json
import os

import yaml
from flask import Flask, jsonify
from flask_cors import cross_origin

from utils import Monger

app = Flask(__name__)

with open(os.path.join(os.path.dirname(__file__), 'translation.json'), encoding='utf-8') as configFile:
    words = json.load(configFile)
    translation = words['locale']

with open('init.yaml') as f:
    mongoParam = yaml.load(f, Loader=yaml.FullLoader)
    param = mongoParam['mongodb'][0]
    url, port, auth, dbname, collection, case, utc = param['url'], param['port'], param['auth'], param['dbname'], param[
        'collection'], param['case'], param['utc']


@app.route('/')
def index():
    return "Hello World"


@app.route('/api/<year>/<month>', methods=['GET'])
def api(year, month):
    res = Monger(url, port, dbname, auth, collection, case, utc).display_data(translation[year], translation[month])
    return jsonify(res)


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
