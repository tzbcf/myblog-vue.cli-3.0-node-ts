/**
 * FileName    : logger.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 17:23:22
 * Description : 
 * -----
 * Last Modified: 2019-01-08 17:46:45
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as log4js from 'log4js';
import * as path from 'path';
import person from './common';
import logConfig from '../config/logConfig';
class Logger {
    private logConfig:any;
    private resLogger:any;
    private errorLogger:any;
    private consoleLogger:any;
    constructor() { 
        this.logConfig = logConfig;
        this.initLogPath();
        log4js.configure(this.logConfig);
        this.resLogger = log4js.getLogger("resLogger");
        this.errorLogger = log4js.getLogger("errorLogger");
        this.resLogger = log4js.getLogger();
    };
    initLogPath():void{
        //创建log的根目录'logs'
        if (this.logConfig.baseLogPath) {
            person.confirmPath(path.resolve(__dirname,`${this.logConfig.baseLogPath}`))
            //根据不同的logType创建不同的文件目录
            for(const attr in this.logConfig.appenders){
                if(this.logConfig.appenders[attr].path){
                    this.logConfig.appenders[attr].filename = path.resolve(__dirname,`${this.logConfig.appenders[attr].path}/${this.logConfig.appenders[attr].name}`);
                    person.confirmPath(path.resolve(__dirname,`${this.logConfig.appenders[attr].path}`))
                }
            }
        }
    };
    replaceLinefeed(str:string):string{
        return str.replace(/\\n/g,'\r\n');
    };
    formatInfo (info:string,type:string):string{
        let logText = '';
        logText +=`\n  ${type} --- ${info} \n`;
        return logText;
    };
    formatRes (ctx:any,err?:any):string{
        let logText = '';
        logText += `\n req --- ${ctx.path} --- \n ${ctx.request} \n res --- ${ctx.body} \n --- ${err||'end'}`;
        return logText;
    };
    logError (error:string,type:string):void{
        if(error && type){
            this.errorLogger.error(this.formatInfo(error,type));
        }
    };
    logInfo (info:string,type:string):void{
        if(info && type){
            this.consoleLogger.error(this.formatInfo(info,type));
        }
    };
    logRes (ctx:any,err?:string):void{
        if (ctx) {
            this.resLogger.info(this.formatRes(ctx,err));
        }
    };
};
export default new Logger();

