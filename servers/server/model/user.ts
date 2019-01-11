/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 15:59:02
 * Description : 
 * -----
 * Last Modified: 2019-01-11 14:27:14
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import {db} from './db';
import person from '../../lib/common';
import {REGISTER_USER} from '../interface/user';
class ModelUser{
    constructor(){
    };
    async insertUser(data:REGISTER_USER):Promise<any>{
        const isnertSql = `insert into users_details values 
        (null,'${data.userName}','${data.email}','${data.password}',${data.authority},0,'${person.standardCurrDatetime()}',null);`;
        return await db(isnertSql);
    };
    async findSingleUser(userName:string):Promise<any>{
        const selectSql = `select * from users_details where userName = '${userName}';`;
        return await db(selectSql); 
    };
}
export default new ModelUser();