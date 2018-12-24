/**
 * FileName    : logger.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-24 17:57:21
 * Description : 
 * -----
 * Last Modified: 2018-12-24 18:35:25
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as log4js from 'log4js';
import * as fs from 'fs';
const config = require('../config/config.json')
const logConfig:any = {
    "appenders": [
        {
            "type": "console",
            "category": "console"
        },
        {
            "type": "file",
            "filename": "./logs/file.log",
            "maxLogSize": 2097152,
            "backups": 10

        }
    ],
    "replaceConsole": false
}
class Logger {
    constructor() {}
    writeLog(data){
        log4js.configure(logConfig);
        const logger = log4js.getLogger(data.sysName || config.configuration.sysName);
        if (data.type === undefined) {
            logger.info(data.msg);
        } else {
            switch (data.type) {
                case "TRACE":
                    logger.trace(data.msg);
                    break;
                case "DEBUG":
                    logger.debug(data.msg);
                    break;
                case "INFO":
                    logger.info(data.msg);
                    break;
                case "WARN":
                    logger.warn(data.msg);
                    break;
                case "ERROR":
                    logger.error(data.msg);
                    break;
                case "FATAL":
                    logger.fatal(data.msg);
                    break;
            }
        }
    }
};
module.exports = new Logger();