/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:15
 * Description : 
 * -----
 * Last Modified: 2019-01-09 09:26:56
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from "vm";
class common{
    constructor(){
      
    };
    uploadImg(ctx:Context):void{
        ctx.body='222312414'
    };
};
export default new common();
