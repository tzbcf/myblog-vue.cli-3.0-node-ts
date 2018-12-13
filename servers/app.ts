/**
 * FileName    : app.ts
 * ProjectName : servers
 * Author      : terrorblade
 * Created Date: 2018-12-10 20:16:23
 * Description : 
 * -----
 * Last Modified: 2018-12-12 14:05:27
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koa from 'koa';
import * as path from 'path';
import * as koaStatic from 'koa-static';

const router = require('./router/router');
const app:any = new koa();
// 配置静态web服务的中间件
app.use(koaStatic(path.join(__dirname,'./public')));
// const router:any = new koaRouter();
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;

