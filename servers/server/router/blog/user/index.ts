/**
 * FileName    : index.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-12 13:49:12
 * Description : 
 * -----
 * Last Modified: 2019-01-02 16:02:39
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

const login = async(ctx)=>{
    ctx.body ='成功3333'
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
