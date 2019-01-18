/**
 * FileName    : wechat.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-18 11:14:34
 * Description : 
 * -----
 * Last Modified: 2019-01-18 16:06:00
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as sha1 from 'sha1';
import person from '../../lib/common';
import config from '../../config/wechatConfig';
import { Context } from 'vm';
class Wechat {
    constructor() {

    };
    init(ctx:Context):void{
        const signature = ctx.query.signature || '',
            timestamp = ctx.query.timestamp || '',
            nonce = ctx.query.nonce || '',
            token = config.token || '';
        //字典排序
        const str = [token, timestamp, nonce].sort().join('');
        const result = sha1(str);
        if (result === signature) {
            ctx.body = ctx.query.echostr;
        } else {
            ctx.body = {
                code: -1,
                msg: "fail"
            }
        }
    };
    async getAccessToken(ctx:Context):Promise<void>{
        const url = `https://api.weixin.qq.com/cgi-bin/token
            ?grant_type=client_credential&appid=${config.appId}&secret=${config.appsecret}`;
        await person.ajax(url,'GET').then(res=>{
            console.log("10---------",res)
            ctx.body = {
                'code':0,
                'token':res
            }
        }).catch(err=>{
            console.log("9---------",err)
            ctx.body = {
                'code':0,
                'token':err
            }
        })
    }
}
export default new Wechat();