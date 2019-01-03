/**
 * FileName    : common.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-24 17:39:45
 * Description : 
 * -----
 * Last Modified: 2019-01-03 16:49:20
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

import * as moment from 'moment';
class Person {
    constructor() {
       
    }
    normalizeNum(val){
        const num = parseInt(val, 10);
        if(typeof num === 'number'){
            return num;
        }
        return false;
    }
    standardCurrDatetime(){
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
    standardParamDatetime(date){
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
}
export default new Person()
