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
    params = yaml.load(f, Loader=yaml.FullLoader)
    paramM = params['mongodb'][0]
    paramR = params['redis'][0]
    url, port, auth, dbname, collection, case, utc = paramM['url'], paramM['port'], paramM['auth'], paramM['dbname'], \
                                                     paramM['collection'], paramM['case'], paramM['utc']
    hostR, portR, authR = paramR['host'], paramR['port'], paramR['auth']


@app.route('/')
def index():
    return "Hello World"


@app.route('/api/<year>/<month>', methods=['GET'])
def api(year, month):
    res = Monger(url, port, dbname, auth, collection, case, utc, hostR, portR, authR).display_data(translation[year],
                                                                                                   translation[month])
    return jsonify(res)


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
