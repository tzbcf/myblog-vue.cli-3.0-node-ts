/**
 * FileName    : wechat.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-18 11:14:34
 * Description : 
 * -----
 * Last Modified: 2019-01-21 17:58:01
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import config from '../../config/wechatConfig';
import { Context, createContext } from 'vm';
import status from '../../lib/status';
import wecaht from '../../lib/wechat';
import * as rawBody from 'raw-body';
class Wechat {
    constructor() {

    };
    async init(ctx: Context): Promise<void> {
        await wecaht.getAccessToken();
        const signature = ctx.query.signature || '';
        const result = wecaht.verifyWxReq(ctx);
        if (result === signature) {
            ctx.body = ctx.query.echostr;
        } else {
            ctx.body = status.unusual();
        }
    };
    async postInit(ctx: Context): Promise<void> {
        const signature = ctx.query.signature || '';
        const result = wecaht.verifyWxReq(ctx);
        if (result === signature) {//验证微信服务器
            const xml = await rawBody(ctx.req, {
                length: ctx.request.length,
                limit: '1mb',
                encoding: ctx.request.charset || 'utf-8'
            });
            const data = await wecaht.pareXMLtoJson(xml);//解析xml数据
            if (data.MsgType === 'text') {
                const resBody = wecaht.autoReply(data);
                ctx.status = 200;
                ctx.type = 'application/xml'
                ctx.body = resBody;
            }
            if(data.MsgType === 'event' && data.Event === 'subscribe'){
                const resBody = wecaht.autoReply(data);
                ctx.status = 200;
                ctx.type = 'application/xml'
                ctx.body = resBody;
            }
        } else {
            ctx.body = status.param4001();
        }
    }
}
export default new Wechat();