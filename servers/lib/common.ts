/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 17:22:20
 * Description : 
 * -----
 * Last Modified: 2019-01-11 15:50:57
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
import * as fs from 'fs';
import * as moment from 'moment';
import * as fsex from 'fs-extra';
import * as jwt from 'jsonwebtoken';
import {LOGIN_USER} from '../server/interface/user';
const config = require(`../config/config.${global['env']}`).default; 

class Person {
    constructor() {

    };
    confirmPath(pathStr: string): void {
        if (!fs.existsSync(pathStr)) {
            fsex.mkdirSync(pathStr);
        }
    };
    normalizeNum(val: string): number {
        const num = parseInt(val, 10);
        if (typeof num === 'number' && !isNaN(num)) {
            return num;
        }
        return NaN;
    };
    standardCurrDatetime(): string {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    };
    standardParamDatetime(date: Date): string {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };
    checkArgumentsSting(...args: any): boolean {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                return false;
            }
        }
        return true;
    };
    checkArgumentsNumber(...args:any):boolean{
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                return false;
            }
        }
        return true;
    };
    isNumberOrLetter(str: string): boolean {
        const regu = /^[0-9a-zA-Z]+$/;
        if (regu.test(str)) {
            return true;
        }
        return false;
    };
    isEmail(str: string): boolean {
        const myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/;
        if (myReg.test(str)) return true;
        return false;
    };
    getToken(data:LOGIN_USER):Promise<string>{
        return new Promise((resolve,reject)=>{
            const created = Math.floor(Date.now() / 1000);
            console.log("1--------",config.cert)
            jwt.sign({ 
                user: JSON.stringify(data),
                iat: created +3600*24 }, config.cert, { algorithm: 'HS256' }, (err, token)=> {
                if(err){
                    reject('')
                }else{
                    resolve(token)
                }
           
            });
           
        });
    };
}
export default new Person();
