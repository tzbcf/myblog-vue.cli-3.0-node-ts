/**
 * FileName    : user.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 15:56:38
 * Description : 
 * -----
 * Last Modified: 2019-01-09 16:04:53
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import modelUser from '../model/user';
import {REGISTER_USER} from '../interface/user';
class serviceUser {
    constructor(){

    };
    async addUser(data:REGISTER_USER){
        const result = await modelUser.insertUser(data);
        return result;
    };
};
export default new serviceUser();
