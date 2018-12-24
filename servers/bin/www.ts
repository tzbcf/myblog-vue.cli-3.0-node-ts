/**
 * FileName    : www.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-11 10:49:42
 * Description : 
 * -----
 * Last Modified: 2018-12-24 18:22:08
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
const app: any = require('../app.ts');
const person: any = require('../lib/common');
const config: any = require('../config/config.json');
const debug: any = require('debug')('demo:server');
const http: any = require('http');

const port = person.normalizeNum(process.env.PORT || config.configuration.port);
const server = http.createServer(app.callback());

/**
 * 时间监听报错信息
 */

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
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
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
