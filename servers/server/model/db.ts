/**
 * FileName    : db.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:50:14
 * Description : 
 * -----
 * Last Modified: 2019-01-09 11:14:24
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

const config = require(`../../config/config.${global['env']}`).default;
import * as mysql from 'mysql';
import log from '../../lib/logger';
import { globalAgent } from 'https';
const mysqlClient = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});
export const db = (sql):Promise<any> => {
    return new Promise((resolve, reject) => {
        mysqlClient.getConnection((err, connection) => {
            if (err) {
                reject(err);
                log.logError(JSON.stringify(err),'mysql-connect');
            } else {
                connection.query(sql, (errs, rows) => {
                    if (errs) {
                        reject(errs);
                        log.logError(JSON.stringify(errs),'mysql-operate');
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};
