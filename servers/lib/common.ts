/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 17:22:20
 * Description : 
 * -----
 * Last Modified: 2019-01-09 11:47:26
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as fs from 'fs';
import * as moment from 'moment';
import * as fsex from 'fs-extra';
class Person {
    constructor() {
       
    };
    confirmPath(pathStr:string):void{
        if (!fs.existsSync(pathStr)) {
            fsex.mkdirSync(pathStr);
        }
    };
    normalizeNum(val:string):number{
        const num = parseInt(val, 10);
        if(typeof num === 'number' && !isNaN(num)){
            return num;
        }
        return NaN;
    };
    standardCurrDatetime():string{
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    };
    standardParamDatetime(date:Date):string{
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };
    checkArgumentsSting(...args):boolean{
        for(let i=0;i<args.length;i++){
            if(typeof args[i] !== 'string'){
                return false;
            }
        }
        return true;
    };
}
export default new Person();
