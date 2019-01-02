/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-02 15:58:20
 * Description : 
 * -----
 * Last Modified: 2019-01-02 16:02:30
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

const addArticle = async(ctx)=>{
    ctx.body ='成功222'
};

const server = [
    {
        'name':'addArticle',
        'isEnable':true,
        'interface':addArticle,
        'type':'get'
    }
]
export={
    'name':'article',
    'server':server,
    'describe':'文章'
}
