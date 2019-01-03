/**
 * FileName    : article.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-03 16:33:22
 * Description : 
 * -----
 * Last Modified: 2019-01-03 17:16:51
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import query from './index';
import {ACTICLE_DETAILS} from '../interface/article';
import person from '../lib/common';
class DbQuery{
    async insertArticle(data:ACTICLE_DETAILS){
        const isnertSql = `insert into users_article_details values 
        (null,'${data.userName}','${data.type}','${data.title}','${data.content}','${person.standardCurrDatetime()}')`;
        return await query(isnertSql);
    }
}
export default new DbQuery();
