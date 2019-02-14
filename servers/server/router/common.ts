/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:38:21
 * Description : 
 * -----
 * Last Modified: 2019-01-09 10:31:46
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as koaRouter from 'koa-router';
import * as multer from 'koa-multer';
import common from '../controller/index';
const router = new koaRouter();
const storage = multer.diskStorage({
    //文件保存路径
    destination (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename (req, file, cb) {
        const fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
const upload = multer({ storage: storage });
/**
 * @common 公共api接口
 * 图片下载
 */
router.post('/api/v1/common/uploadImg',upload.single('file'),common.uploadImg);
export default router;