/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:39:24
 * Description : 
 * -----
 * Last Modified: 2019-01-09 16:02:44
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import {db} from './db';
import person from '../../lib/common';
import {ACTICLE_DETAILS} from '../interface/article';
class modelArticle {
    constructor(){

    };
    async insertArticle(data:ACTICLE_DETAILS):Promise<any>{
        const isnertSql = `insert into users_article_details values 
        (null,'${data.userName}','${data.type}','${data.title}','${data.content}','${person.standardCurrDatetime()}',null)`;
        return await db(isnertSql);
    }
};
export default new modelArticle();