/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 15:56:38
 * Description : 
 * -----
 * Last Modified: 2019-01-11 10:34:39
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import modelUser from '../model/user';
import {REGISTER_USER} from '../interface/user';
class ServiceUser {
    constructor(){

    };
    async addUser(data:REGISTER_USER):Promise<any>{
        const result = await modelUser.insertUser(data);
        return result;
    };
    async findSingleUser(userName:string):Promise<any>{
        const result = await modelUser.findSingleUser(userName);
        return result;
    }
};
export default new ServiceUser();
