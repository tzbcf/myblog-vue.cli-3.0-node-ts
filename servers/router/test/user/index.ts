/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-12 13:52:15
 * Description : 
 * -----
 * Last Modified: 2018-12-12 14:20:54
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */


const login = async(ctx)=>{
    ctx.body ='成功'
};

const server = [
    {
        'name':'login',
        'isEnable':true,
        'interface':login,
        'type':'get'
    }
]
export={
    'name':'user',
    'server':server,
    'describe':'用户'
}