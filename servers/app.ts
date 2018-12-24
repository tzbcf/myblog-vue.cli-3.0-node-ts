/**
 * FileName    : app.ts
 * ProjectName : servers
 * Author      : terrorblade
 * Created Date: 2018-12-10 20:16:23
 * Description : 
 * -----
 * Last Modified: 2018-12-24 18:36:23
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koa from 'koa';
import * as path from 'path';
import * as koaStatic from 'koa-static';
import * as jsonBody from 'koa-json';
import * as logger from 'koa-logger';
import * as bodyparser from 'koa-bodyparser';
import * as onerror from 'koa-onerror';

const router:any = require('./router/router');
const log:any = require('./lib/logger')
const app:any = new koa();

onerror(app);
// 配置静态web服务的中间件
app.use(koaStatic(path.join(__dirname,'./public')));
// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text'],
    onerror(err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));
//解析Json数据
app.use(jsonBody());
//日志输出
app.use(logger());
// const router:any = new koaRouter();
app.use(router.routes()).use(router.allowedMethods());

// 报错提示
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

process.on('uncaughtException', (err)=>{
    log.writeLog({
        'msg':JSON.stringify(err.stack),
        'type':'FATAL'
    })
});

module.exports = app;

