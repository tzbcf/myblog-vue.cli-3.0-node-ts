/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:01
 * Description : 
 * -----
 * Last Modified: 2019-01-09 17:20:15
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from 'vm';
import person from '../../lib/common';
import serviceUser from '../service/user';
import status from './status';
class user{
    constructor(){

    };
    async addBlogUser(ctx:Context):Promise<any>{
        const {userName,email,password} = ctx.request.body;
        if(!person.checkArgumentsSting(userName,email,password)){
            ctx.body = status.param401();
            return;
        }
        if(typeof ctx.request.body.authority ==='undefined'){
            ctx.request.body.authority = 0;
        }
        if(!person.checkArgumentsNumber(ctx.request.body.authority)){
            ctx.body = status.param401();
            return;
        }
        if(!person.isNumberOrLetter(userName)){
            ctx.body = status.param501();
            return;
        }
        if(!person.isEmail(email)){
            ctx.body = status.param502();
            return;
        }
        if(password.length<6){
            ctx.body = status.param503();
            return;
        }
        try{
            await serviceUser.addUser(ctx.request.body);
            ctx.body=status.success();
        }catch(e){
            ctx.body=status.mysqlErr(JSON.stringify(e));
        } 
    };
    addWechatUser(ctx:Context):void{
        ctx.body='wechat'
    };
};
export default new user();
