/**
 * FileName    : config.prod.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 16:56:09
 * Description : 
 * -----
 * Last Modified: 2019-01-09 09:54:58
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */


export default {
    "name":"server",
    "author":"terrorblade",
    "versions":"0.1",
    "configuration":{
        "port":4000,
        "sysName":"blog"
    },
    "mysql":{
        "host"     : "127.0.0.1",
        "user"     : "root",
        "password" : "root",
        "database" : "blog"
    }
}