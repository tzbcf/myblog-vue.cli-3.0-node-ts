/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 09:11:15
 * Description : 
 * -----
 * Last Modified: 2019-01-21 12:10:44
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import { Context } from "vm";
import status from './status';
const config = require(`../../config/config.${global['env']}`).default;
class Common{
    constructor(){
      
    };
    uploadImg(ctx:Context):void{
        try{
            const r = status.success();
            r.datas = {};
            r.datas.url = `${config.protocol}://${config.host}:${config.configuration.port}/uploads/${ctx.req.file.filename}`;
            ctx.body = r;
        }catch(e){
            ctx.body = status.param410();
        }

    };
};
export default new Common();
