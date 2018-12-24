/**
 * FileName    : common.ts
 * ProjectName : blog
 * Author      : terrorblade
 * Created Date: 2018-12-24 17:39:45
 * Description : 
 * -----
 * Last Modified: 2018-12-24 18:15:48
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */


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
}
module.exports = new Person();