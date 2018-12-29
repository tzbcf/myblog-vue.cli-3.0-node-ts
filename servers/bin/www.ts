/**
 * FileName    : www.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-11 10:49:42
 * Description : 
 * -----
 * Last Modified: 2018-12-29 17:40:19
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import {app} from '../app'
import {Person} from '../lib/common'
import * as http from 'http';
import {Logger} from '../lib/logger'; 
const config: any = require('../config/config.json');
const debug: any = require('debug')('demo:server');
const person:any = new Person();
const logger:any = new Logger();
const port = person.normalizeNum(process.env.PORT || config.configuration.port);
const server = http.createServer(app.callback());

/**
 * 时间监听报错信息
 */

const onError = (error) => {
    if (error.syscall !== 'listen') {
        logger.logError(JSON.stringify(error),'error')
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            logger.logError(JSON.stringify(error),'EACCES')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            logger.logError(JSON.stringify(error),'EADDRINUSE')
            process.exit(1);
            break;
        default:
            logger.logError(JSON.stringify(error),'onError')
            throw error;
    }
}

/**
 * http启动监听
 */

const onListening = () => {
    const addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    logger.logInfo('程序启动','onListening');
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
