/**
 * FileName    : wechat.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:43:08
 * Description : 
 * -----
 * Last Modified: 2019-01-09 10:31:41
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koaRouter from 'koa-router';
import user from '../controller/user';
const router = new koaRouter();
/**
 * @wechat 微信api接口
 */
router.post('/api/v1/wechat/user/addUser',user.addWechatUser);
export default router;