/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:39:24
 * Description : 
 * -----
 * Last Modified: 2019-05-05 14:34:26
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import {db} from './db';
import person from '../../lib/common';
import {ACTICLE_DETAILS,ACTICLE_LIST} from '../../interface/article';
class ModelArticle {
    constructor(){

    };
    async insertArticle(data:ACTICLE_DETAILS):Promise<any>{
        const isnertSql = `insert into users_article_details values 
        (null,'${data.userName}','${data.type}','${data.title}','${data.content}','${person.standardCurrDatetime()}','${person.standardCurrDatetime()}')`;
        return await db(isnertSql);
    }
    async getArticleList(data:ACTICLE_LIST):Promise<any>{
        const selSql = `select * from users_article_details where updateTime < '${data.startTime}' and 
                updateTime > '${data.endTime}' limit ${data.page},${data.pageIndex};`;
        return await db( selSql );        
    }
};
export default new ModelArticle();