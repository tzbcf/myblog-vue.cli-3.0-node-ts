/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 15:59:02
 * Description : 
 * -----
 * Last Modified: 2019-01-09 17:21:17
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import {db} from './db';
import person from '../../lib/common';
import {REGISTER_USER} from '../interface/user';
class modelUser{
    constructor(){
    };
    async insertUser(data:REGISTER_USER):Promise<any>{
        const isnertSql = `insert into users_details values 
        (null,'${data.userName}','${data.email}','${data.password}',${data.authority},'${person.standardCurrDatetime()}',null)`;
        return await db(isnertSql);
    };
}
export default new modelUser();