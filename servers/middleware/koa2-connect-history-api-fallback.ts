/**
 * FileName    : koa2-connect-history-api-fallback.js
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-28 17:10:26
 * Description : 
 * -----
 * Last Modified: 2018-12-28 17:29:28
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as history from 'connect-history-api-fallback';
module.exports = options => {
    const middleware = history(options);
    const noop = () => {};
    return async (ctx, next) => {
        middleware(ctx, null, noop);
        await next();
    };
};