/**
 * FileName    : article.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-03 16:19:11
 * Description : 
 * -----
 * Last Modified: 2019-01-03 17:40:14
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import modelArticle from '../mode/article'
import {ACTICLE_DETAILS} from '../interface/article'
class article {
    async addArticle(data:ACTICLE_DETAILS){
        console.log(data)
        const result = await modelArticle.addArticle(data);
        return result;
    }
}
export default new article