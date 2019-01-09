/*
 * FileName    : history
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 17:18:52
 * Description : 
 * -----
 * Last Modified: 
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as history from 'connect-history-api-fallback';
export default (opt?:any):any=>{
    const middleware = history(opt);
    const noop = () => {};
    return async (ctx, next) => {
        if(!ctx.path.includes('api')){
            middleware(ctx, null, noop);
        }
        await next();
    };
}




