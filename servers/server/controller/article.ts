/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:30:36
 * Description : 
 * -----
 * Last Modified: 2019-01-09 16:07:18
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import { Context } from 'vm';
import serviceArticle from '../service/article';
import person from '../../lib/common';
import status from './status';
class article{
    constructor(){

    };
    async addBlogArticle(ctx:Context):Promise<void>{
        const {userName,type,title,content} = ctx.request.body;
        if(!person.checkArgumentsSting(userName,type,title,content)){
            ctx.body = status.param401();
            return;
        }
        try{
            await serviceArticle.addArticle(ctx.request.body);
            ctx.body=status.success();
        }catch(e){
            ctx.body=status.mysqlErr(JSON.stringify(e));
        } 
    };
};
export default new article();
