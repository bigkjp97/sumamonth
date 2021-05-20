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