/**
 * FileName    : config.dev.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 16:55:59
 * Description : 
 * -----
 * Last Modified: 2019-06-27 17:57:58
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

export default {
    "name":"server",//系统名称
    "author":"terrorblade",//作者
    "versions":"0.1",//版本
    "protocol":"http",
    "host":"127.0.0.1",
    "configuration":{//系统配置
        "port":8000,
        "sysName":"blog"
    },
    "mysql":{//mysql配置
        "host"     : "94.191.9.198",
        "user"     : "test",
        "password" : "test1234",
        "database" : "blog"
    },
    "cert":"my name is Terrorblade"
}
