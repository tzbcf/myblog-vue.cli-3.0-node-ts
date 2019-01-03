/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-02 15:58:20
 * Description : 
 * -----
 * Last Modified: 2019-01-03 17:10:36
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import serviceArticle from '../../../service/article';
const addArticle = async(ctx:any)=>{
    const data = ctx.request.body;
    const {userName,type,title,content}= ctx.request.body;
    const result=await serviceArticle.addArticle(data);
    const obj={
        'code' : 0,
        'msg' : '成功',
        'datas' : {
            userName,type,title,content
        }
    }
    return obj;
};

const server = [
    {
        'name':'addArticle',
        'isEnable':true,
        'interface':addArticle,
        'type':'post'
    }
]
export={
    'name':'article',
    'server':server,
    'describe':'文章'
}
