import json
import os
import time


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


class Translate:
    def translation(self):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'translation.json'), encoding='utf-8') as configFile:
                data = json.load(configFile)
            res = data['locale']
        except Exception as e:
            print("Cannot find the Locale choosing default to locale language")
            res = data['locale']
        return res
