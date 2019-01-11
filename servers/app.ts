/**
 * FileName    : app.ts
 * ProjectName : item5
 * Author      : terrorblade
 * Created Date: 2019-01-08 14:39:23
 * Description : 
 * -----
 * Last Modified: 2019-01-11 15:26:31
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as koa from 'koa';
import * as path from 'path';
import * as jsonBody from 'koa-json';
import * as kosLogger from 'koa-logger';
import * as koaStatic from 'koa-static';
import * as bodyparser from 'koa-bodyparser';
import * as session from 'koa-session';
import logger from './lib/logger';
import commonRouter from './server/router/common';
import blogRouter from './server/router/blog';
import wechatRouter from './server/router/wechat';
import historyApiFallback from './middleware/historyFillback';

class App {
    public koa:koa.Application;
    constructor(){
        this.koa = new koa();
        this.middleware();
        this.router();
        this.onerror();
    };
    private middleware():void{//中间件
        this.koa.use(historyApiFallback());//vue打包的history模式
        this.koa.use(koaStatic(path.join(__dirname,'./public')));//静态容器
        this.koa.use(kosLogger());//日志
        this.koa.use(jsonBody());//json解析
        this.koa.use(bodyparser({
            enableTypes:['json', 'form', 'text'],
            onerror(err:any, ctx:any) {
                logger.logRes(ctx,JSON.stringify(err));
                ctx.throw('body parse error', 422);
            }
        }));
        this.koa.key=['my Name is terrorblade'];
        const CONFIG = {
            'key': 'koa:terrorblade',
            'maxAge': 86400000,
            'autoCommit': true, 
            'overwrite': true, 
            'signed': true, 
            'rolling': false, 
            'renew': false
        };
        this.koa.use(session(CONFIG, this.koa))
    };
    private router():void{//路由
        this.koa.use(commonRouter.routes()).use(commonRouter.allowedMethods());//公共路由
        this.koa.use(blogRouter.routes()).use(blogRouter.allowedMethods());//博客路由
        this.koa.use(wechatRouter.routes()).use(wechatRouter.allowedMethods());//wechat路由
    };
    private onerror():void{//报错
        process.on('uncaughtException', (err:any):void=>{
            console.error(JSON.stringify(err.stack));
            logger.logError(JSON.stringify(err.stack),'uncaughtException');
        });
    };
}

export default new App().koa
