import json
import os
import re

import yaml
from flask import Flask, jsonify, make_response, request
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


@app.route('/api/<year>/<month>', methods=['POST'])
@cross_origin()
# @TODO(code): fix this long code...
def api(year, month):
    data = Monger(url, port, dbname, auth, collection, case, utc, hostR, portR, authR, translation[year],
                  translation[month]).index_data()

    # Get form content

    def sort_display(arr, req, name):
        reverse = None
        if req.form.get(name) == 'DESC':
            reverse = True
        elif req.form.get(name) == 'ASC':
            reverse = False
        if reverse is not None:
            arr.sort(key=lambda x: x[name[5:]], reverse=reverse)

    def search_display(arr, name, attr):
        sTemp = []
        for a in arr:
            if re.match(name, a[attr]):
                sTemp.append(a)
        return sTemp

    sort_display(data, request, 'sort_times')
    cPage = int(request.form.get('cPage'))
    pSize = int(request.form.get('pSize'))
    res = data[(cPage - 1) * pSize: cPage * pSize]
    group = request.form.get('group')
    operators = request.form.get('operators')
    if group is not None and len(group) > 0:
        res = search_display(data, group, 'group')
    if operators is not None and len(operators) > 0:
        res = search_display(data, operators, 'operators')
    apiValue = {
        'status': 'success',
        'totals': len(data),
        'data': res
    }
    response = make_response(apiValue)
    return response


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
