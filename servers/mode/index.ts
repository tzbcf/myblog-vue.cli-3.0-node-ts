/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-02 15:42:54
 * Description : 
 * -----
 * Last Modified: 2019-01-02 15:55:58
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
const config = require('../config/config.json');
import * as mysql from 'mysql';
import {Logger} from '../lib/logger';
const log:any = new Logger();
const mysqlClient = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

exports.query = (sql, values) => {
    return new Promise((resolve, reject) => {
        mysqlClient.getConnection((err, connection) => {
            if (err) {
                reject(err);
                log.logError(JSON.stringify(err),'mysql');
            } else {
                connection.query(sql, values, (errs, rows) => {
                    if (errs) {
                        reject(errs);
                        log.logError(JSON.stringify(errs),'mysql');
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};

