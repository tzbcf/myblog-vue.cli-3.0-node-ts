/**
 * FileName    : logger.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-24 17:57:21
 * Description : 
 * -----
 * Last Modified: 2018-12-29 17:39:32
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as log4js from 'log4js';
import * as fsex from 'fs-extra';
import * as fs from 'fs';
import * as path from 'path';

const config: any = require('../config/config.json');
const logConfig: any = require('../config/logConfig.json');
//判断路径是否存在创建目录
const confirmPath = (pathStr: string): void => {
    if (!fs.existsSync(pathStr)) {
        fsex.mkdirSync(pathStr);
    }
}
//遍历创建目录
const initLogPath = (): void => {
    //创建log的根目录'logs'
    if (logConfig.baseLogPath) {
        confirmPath(path.resolve(__dirname,`${logConfig.baseLogPath}`))
        //根据不同的logType创建不同的文件目录
        for(const attr in logConfig.appenders){
            if(logConfig.appenders[attr].path){
                logConfig.appenders[attr].filename = path.resolve(__dirname,`${logConfig.appenders[attr].path}/${logConfig.appenders[attr].name}`);
                confirmPath(path.resolve(__dirname,`${logConfig.appenders[attr].path}`))
            }
        }
    }
}

initLogPath();

log4js.configure(logConfig);
const resLogger = log4js.getLogger("resLogger");
const errorLogger = log4js.getLogger("errorLogger");
const consoleLogger = log4js.getLogger();
export class Logger {
    constructor() { }
    replaceLinefeed(str:string):string{
        return str.replace(/\\n/g,'\r\n');
    }
    formatInfo (info:string,type:string):string{
        let logText = '';
        logText +=`\n  ${type} --- ${info} \n`;
        return logText;
    }
    formatRes (ctx:any,err?:any):string{
        let logText = '';
        logText += `\n req --- ${ctx.path} --- \n ${ctx.request} \n res --- ${ctx.body} \n --- ${err||'end'}`;
        return logText;
    }
    logError (error:string,type:string):void{
        if(error && type){
            errorLogger.error(this.formatInfo(error,type));
        }
    }
    logInfo (info:string,type:string):void{
        if(info && type){
            consoleLogger.error(this.formatInfo(info,type));
        }
    }
    logRes (ctx:any,err?:string):void{
        if (ctx) {
            resLogger.info(this.formatRes(ctx,err));
        }
    };
};