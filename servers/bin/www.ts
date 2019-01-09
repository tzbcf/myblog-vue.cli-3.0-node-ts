/**
 * FileName    : www.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 15:47:13
 * Description : 
 * -----
 * Last Modified: 2019-01-09 11:13:48
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
const ENV_DEFAULT = 'dev';
const PORT_DEFAULT = 6060;
import * as http from 'http';
const debug: any = require('debug')('demo:server');
class Server {
    private port : number;//默认端口
    private server : any;
    private env : string;//默认环境
    private config : any;
    private app : any;
    constructor(){
        this.env = ENV_DEFAULT;
        this.port = PORT_DEFAULT;
        //package.json的scripts配置中，第三个元素输出为环境变量。如果有调整slice获取值也需要调整
        //标准输出例子'ts-node ./bin/www/ts dev'
        //对端口与环境进行默认以及命令设置时获取兼容
        if(process.argv.slice(2)[0]){
            this.env = process.argv.slice(2)[0];
        }
        if(typeof process.env.NODE_ENV !=='undefined'){
            this.env = process.env.NODE_ENV
        }
        this.config  = require(`../config/config.${this.env}`).default;

        //设置全局变量
        global['env'] = this.env;
        global['port'] = this.port = this.config.configuration.port;
        this.app = require('../app').default;
        this.start();
    };
    private start():void{
        this.createHttp();
        this.server.on('error',this.onerror);
        this.server.on('error',this.onListening);
    };
    private createHttp():void{
        this.server = http.createServer(this.app.callback());
        this.server.listen(this.port);
        console.info(`server start listen on ${this.port}`);
    };
    private onerror(error:any):void{
        const that=this;
        if (error.syscall !== 'listen') {
            //logger.logError(JSON.stringify(error),'error')
            throw error;
        }
    
        let bind = typeof that.port === 'string'
            ? 'Pipe ' + that.port
            : 'Port ' + that.port;
    
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                //logger.logError(JSON.stringify(error),'EACCES')
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                //logger.logError(JSON.stringify(error),'EADDRINUSE')
                process.exit(1);
                break;
            default:
                //logger.logError(JSON.stringify(error),'onError')
                throw error;
        }
    };
    private onListening ():void{
        const addr = this.server.address();
        let bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
        //logger.logInfo('程序启动','onListening');
    };
}
export const server =new Server();
