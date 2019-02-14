/**
 * FileName    : article.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:39:13
 * Description : 
 * -----
 * Last Modified: 2019-01-11 10:24:49
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import modelArticle from '../model/article';
import {ACTICLE_DETAILS,ACTICLE_LIST} from '../interface/article';
class ServiceArticle {
    constructor(){

    };
    async addArticle(data:ACTICLE_DETAILS){
        const result = await modelArticle.insertArticle(data);
        return result;
    };
    async getArticleList(data:ACTICLE_LIST){
        const result = await modelArticle.getArticleList(data);
        return result;
    };
};
export default new ServiceArticle();