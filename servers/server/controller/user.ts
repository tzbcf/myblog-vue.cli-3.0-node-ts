/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:01
 * Description : 
 * -----
 * Last Modified: 2019-01-18 15:17:32
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from 'vm';
import person from '../../lib/common';
import serviceUser from '../service/user';
import status from './status';

class User{
    private a:string;
    constructor(){
        this.a = '1231321';
    };
    async addBlogUser(ctx:Context):Promise<any>{
        const {userName,email,password} = ctx.request.body;
        if(!person.checkArgumentsSting(userName,email,password)){//检查类型
            ctx.body = status.param401();
            return;
        }
        //判断规则
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
            const slName = await serviceUser.findSingleUser( userName );//查询是否存在
            if(slName && !slName.length){//不存在注册
                await serviceUser.addUser(ctx.request.body);
                ctx.body=status.success();
            }else{
                ctx.body=status.param500();
            }
        }catch(e){
            ctx.body=status.mysqlErr(JSON.stringify(e));
        } 
    };
    async blogLogin(ctx:Context):Promise<any>{
        const {userName,password} = ctx.request.body;
        if(!person.checkArgumentsSting(userName,password)){
            ctx.body = status.param400();
            return;
        }
        try{
            const userData = await serviceUser.findSingleUser(userName);
            if(userData && !userData.length){
                ctx.body = status.param504();
                return;
            }
            if(password !== userData[0].password){
                ctx.body = status.param505();
                return;
            }
        }catch(e){
            ctx.body=status.mysqlErr(JSON.stringify(e));
            return;
        }
        const token =await person.getToken(ctx.request.body).catch(()=>false);//获取token
        if(!token){//获取失败报错
            ctx.body = status.unusual();
        }else{
            const code = JSON.parse(JSON.stringify(status.success()));
            code.token = token;
            ctx.append('token',token);
            ctx.body = code;
        }
    };
    async blogAuthorizedLogin(ctx:Context):Promise<any>{
        const token = ctx.request.header.token;
        if(!person.decodeToken(token.split(":")[1])){
            ctx.body = status.param507();
            return;
        }
        try{
            const flag =await person.verifyToken(token.split(":")[1]);
            if(Date.now() > flag.iat){
                ctx.body = status.param506();
                return
            }
            const user = JSON.parse(flag.user);
            const userData = await serviceUser.findSingleUser(user.userName);
            if(userData && !userData.length){
                ctx.body = status.param504();
                return;
            }
            if(user.password !== userData[0].password){
                ctx.body = status.param505();
                return;
            }
            ctx.body = status.success([user]);
        }catch(e){
            ctx.body = status.param507();
        }
    };
};
export default new User();
