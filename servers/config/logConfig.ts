export default {
    "appenders": {
        "rule-console": {
            "type": "console"
        },
        "errorLogger": {
            "type": "dateFile",
            "name":"error",
            "pattern": "-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "encoding": "utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path":"../logs/error/"
        },
        "resLogger": {
            "type": "dateFile",
            "name": "response",
            "pattern": "-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "encoding": "utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path":"../logs/res/"
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "rule-console"
            ],
            "level": "all"
        },
        "resLogger": {
            "appenders": [
                "resLogger"
            ],
            "level": "info"
        },
        "errorLogger": {
            "appenders": [
                "errorLogger"
            ],
            "level": "error"
        },
        "http": {
            "appenders": [
                "resLogger"
            ],
            "level": "info"
        }
    },
    "baseLogPath": "../logs"
}