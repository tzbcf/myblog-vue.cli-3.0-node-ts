/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:30:36
 * Description : 
 * -----
 * Last Modified: 2019-01-11 10:25:49
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import { Context } from 'vm';
import serviceArticle from '../service/article';
import person from '../../lib/common';
import status from '../../lib/status';
import logger from '../../lib/logger';
class Article{
    constructor(){

    };
    /**
     * @return{
     *     无数据返回
     * }
     */
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
    /**
     * @return{
     *      page:number,//返回数据数量
     *      pageIndex:number,//返回当前页数
     *      totalNum:number,//返回总数量,
     *      data:array//返回获取数据的数组
     * }
     */
    async getBlogArticleList(ctx:Context):Promise<void>{
        const {page=10,pageIndex=1,startTime=person.standardParamDatetime(new Date()),endTime=''} = ctx.request.body;
        try{
            if(!person.checkArgumentsNumber(page,pageIndex) || !person.checkArgumentsSting(startTime,endTime)){
                ctx.body = status.param401();
                return;
            }
            const data = await serviceArticle.getArticleList(ctx.request.body);
            ctx.body = status.success(data);
        }catch(e){
            ctx.body = status.unusual();
            logger.logError(JSON.stringify(e),'error')
        }
    };
};
export default new Article();
