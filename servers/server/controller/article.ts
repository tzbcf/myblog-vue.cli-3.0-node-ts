/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:30:36
 * Description : 
 * -----
 * Last Modified: 2019-01-09 11:46:30
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import { Context } from 'vm';
import service from '../service/article';
import person from '../../lib/common';
import status from './status';
class article{
    constructor(){

    };
    async addBlogArticle(ctx:Context):Promise<void>{
        const {userName,type,title,content} = ctx.request.body;
        const paramFlag = person.checkArgumentsSting(userName,type,title,content);
        if(!paramFlag){
            ctx.body = status.param401();
            return;
        }
        try{
            await service.addArticle(ctx.request.body);
            ctx.body=status.success();
        }catch(e){
            ctx.body=status.mysqlErr();
        } 
    };
};
export default new article();
