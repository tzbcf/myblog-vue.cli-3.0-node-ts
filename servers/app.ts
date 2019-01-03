/**
 * FileName    : app.ts
 * ProjectName : servers
 * Author      : terrorblade
 * Created Date: 2018-12-10 20:16:23
 * Description : 
 * -----
 * Last Modified: 2019-01-03 16:53:31
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koa from 'koa';
import * as path from 'path';
import * as koaStatic from 'koa-static';
import * as jsonBody from 'koa-json';
import * as kosLogger from 'koa-logger';
import * as bodyparser from 'koa-bodyparser';
import * as onerror from 'koa-onerror';
import logger from './server/lib/logger';
import router from './server/router/router';
import historyApiFallback from './middleware/koa2-connect-history-api-fallback';


const app:any = new koa();

app.use(historyApiFallback());
onerror(app);
// 配置静态web服务的中间件
app.use(koaStatic(path.join(__dirname,'./public')));
// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text'],
    onerror(err:any, ctx:any) {
        logger.logRes(ctx,JSON.stringify(err));
        ctx.throw('body parse error', 422);
    }
}));
//解析Json数据
app.use(jsonBody());
//日志输出
app.use(kosLogger());
//路由
app.use(router.routes()).use(router.allowedMethods());


// 报错提示
app.on('error', (err:any, ctx:any) => {
    logger.logRes(ctx,JSON.stringify(err));
});

process.on('uncaughtException', (err:any)=>{
    console.error(JSON.stringify(err.stack));
    logger.logError(JSON.stringify(err.stack),'uncaughtException');
});

export default app

