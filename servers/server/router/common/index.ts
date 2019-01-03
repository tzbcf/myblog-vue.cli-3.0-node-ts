/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2019-01-03 10:16:18
 * Description : 
 * -----
 * Last Modified: 2019-01-03 17:12:00
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */


const uploadPic = async (ctx) => {
    const obj={
        'code':0,
        'msg':'成功',
        'datas':{
            'url':`http://127.0.0.1:8000/uploads/${ctx.req.file.filename}`
        }
    }
    return obj;
};

const server = [
    {
        'name': 'uploadPic',
        'isEnable': true,
        'interface': uploadPic,
        'type': 'post'
    }
]
export ={
    'name': 'public',
    'server': server,
    'describe': '用户'
}