/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:15
 * Description : 
 * -----
 * Last Modified: 2019-01-11 10:25:42
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from "vm";
class Common{
    constructor(){
      
    };
    uploadImg(ctx:Context):void{
        ctx.body='222312414'
    };
};
export default new Common();
