/**
 * FileName    : blogRouter.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:42:54
 * Description : 
 * -----
 * Last Modified: 2019-01-17 16:49:55
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as koaRouter from 'koa-router';
import user from '../controller/user';
import article from '../controller/article';
const router = new koaRouter();
/** --------------------------用户相关接口------------------- */
/**
 * @blog 博客api接口
 */

 /**
 * 增加用户接口
 * @param{
 *      userName:string,//必传，用户名
 *      password:string,//必传，密码
 *      email:string//必传，邮箱
 * }
 */
router.post('/api/v1/blog/user/addUser',user.addBlogUser);

/**
 * 用户登录接口
 * @param{
 *      userName:string,//必传，用户名
 *      password:string,//必传，密码
 * }
 */

router.post('/api/v1/blog/user/login',user.blogLogin);

/**
 * 自动登录接口
 * @param{
 *      totken:string,//必传，token登录态
 * }
 */
router.post('/api/v1/blog/user/authorizedLogin',user.blogAuthorizedLogin);

/** --------------------------文章相关接口------------------- */

/**
 * 增加文章接口
 * @param{
 *      userName:string,//必传，用户名
 *      type:string,//必传，文章类型
 *      title:string,//必传，文章标题
 *      content:string//必传，文章内容
 * }
 */
router.post('/api/v1/blog/article/addArticle',article.addBlogArticle);

/**
 * 获取文章列表接口
 * @param{
 *      page:number,//默认为10条，不必传
 *      pageIndex:number,//默认页数为1，不必传
 *      startTime:string,//默认开始时间最新时间，不必传
 *      endTime:string//默认结束时间为空，不必传
 * }
 */
router.post('/api/v1/blog/article/getArticleList',article.getBlogArticleList);
export default router;