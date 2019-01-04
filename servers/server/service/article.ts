/**
 * FileName    : article.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-03 16:19:11
 * Description : 
 * -----
 * Last Modified: 2019-01-04 15:50:20
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import modelArticle from '../mode/article'
class article {
    async addArticle(data){
        console.log(data)
        const result = await modelArticle.addArticle(data);
        return result;
    }
}
export default new article