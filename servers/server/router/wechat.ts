/**
 * FileName    : wechat.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:43:08
 * Description : 
 * -----
 * Last Modified: 2019-01-21 16:15:37
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koaRouter from 'koa-router';
import wechat from '../controller/wechat';
const router = new koaRouter();
/**
 * @wechat 微信api接口
 */
router.get('/api/v1/wechat/init',wechat.init);
router.post('/api/v1/wechat/init',wechat.postInit);
export default router;