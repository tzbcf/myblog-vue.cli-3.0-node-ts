/**
 * FileName    : blogRouter.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:42:54
 * Description : 
 * -----
 * Last Modified: 2019-01-11 14:17:09
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as koaRouter from 'koa-router';
import user from '../controller/user';
import article from '../controller/article';
const router = new koaRouter();
/**
 * @blog 博客api接口
 */

 /**
 * @param{
 *      userName:string,
 *      password:string,
 *      email:string
 * }
 */
router.post('/api/v1/blog/user/addUser',user.addBlogUser);

/**
 * @param{
 *      userName:string,
 *      type:string,
 *      title:string,
 *      content:string
 * }
 */
router.post('/api/v1/blog/article/addArticle',article.addBlogArticle);

/**
 * @param{
 *      userName:string,
 *      password:string,
 * }
 */

router.post('/api/v1/blog/user/login',user.blogLogin);
export default router;