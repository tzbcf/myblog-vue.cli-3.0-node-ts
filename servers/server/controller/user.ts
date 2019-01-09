/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:01
 * Description : 
 * -----
 * Last Modified: 2019-01-09 09:28:44
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from 'vm';

class user{
    constructor(){

    };
    addBlogUser(ctx:Context):void{
        ctx.body='哈哈'
    };
    addWechatUser(ctx:Context):void{
        ctx.body='wechat'
    };
};
export default new user();
