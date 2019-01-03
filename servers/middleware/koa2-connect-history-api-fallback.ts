/**
 * FileName    : koa2-connect-history-api-fallback.js
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-28 17:10:26
 * Description : 
 * -----
 * Last Modified: 2019-01-03 15:08:47
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