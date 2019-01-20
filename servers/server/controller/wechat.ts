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
import { Context, createContext } from 'vm';
import status from './status';
class Wechat {
    constructor() {

    };
    async init(ctx:Context):Promise<void>{
        await person.getAccessToken();
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
            ctx.body = status.unusual();
        }
    };
}
export default new Wechat();