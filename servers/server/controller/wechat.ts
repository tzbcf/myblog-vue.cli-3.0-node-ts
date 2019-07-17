/**
 * FileName    : wechat.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-18 11:14:34
 * Description : 
 * -----
 * Last Modified: 2019-07-17 12:41:47
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import config from '../../config/wechatConfig';
import { Context, createContext } from 'vm';
import status from '../../lib/status';
import wecaht from '../../lib/wechat';
import {USER_TOKEN} from '../../interface/weChat';
// import common from '../../lib/common';
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
    };
    async getUserInfo(ctx:Context):Promise<void> {
        const req = ctx.request.body;
        let codeTokenData: any = await wecaht.getCodeToken(req.code);
        const verifyToken =  await wecaht.verifyToken(codeTokenData.access_token, codeTokenData.openid);
        if (parseInt(verifyToken.errcode,10)) {
            codeTokenData = await wecaht.refreshToken(codeTokenData.refresh_token)
        }
        const userinfo = await wecaht.getUserInfo(codeTokenData.access_token, codeTokenData.openid);
        ctx.body = {
            code: 0,
            data: userinfo,
        };
    };
    async weAppLogin(ctx:Context):Promise<void> {
        const loginData = await wecaht.weAppLogin(ctx.header['x-wx-code']);
        const weToken = await wecaht.weGetAccessToken();
        const userinfo = wecaht.decryptData(ctx.header['x-wx-encrypted-data'], ctx.header['x-wx-iv'], loginData.session_key);
        delete userinfo.watermark;
        loginData.userinfo = userinfo;
        ctx.body = {
            code: 0,
            data: loginData,
            
        }
    }
}
export default new Wechat();