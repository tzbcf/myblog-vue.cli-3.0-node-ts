/**
 * FileName    : article.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-03 16:15:53
 * Description : 
 * -----
 * Last Modified: 2019-01-03 17:18:24
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import {ACTICLE_DETAILS} from '../interface/article';
import db from '../db/article';
class article {
    async addArticle(data:ACTICLE_DETAILS){
        const result = await db.insertArticle(data);
        return result;
    }
}
export default new article()
