/**
 * FileName    : common.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-08 17:22:20
 * Description : 
 * -----
 * Last Modified: 2019-01-18 15:20:33
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
const request = require('request').defaults({
    'pool': { 'maxSockets': 5000 }
});
class Person {
    constructor() {

    };
    /**
     * 
     * @fn 创建文件夹 
     * @param url路径
     */
    confirmPath(pathStr: string): void {
        if (!fs.existsSync(pathStr)) {
            fsex.mkdirSync(pathStr);
        }
    };
     /**
     * 
     * @fn 字符串变数字 
     * @param  字符串
     */
    normalizeNum(val: string): number {
        const num = parseInt(val, 10);
        if (typeof num === 'number' && !isNaN(num)) {
            return num;
        }
        return NaN;
    };
    /**
     * 
     * @fn 获取时间
     * @param 
     */
    standardCurrDatetime(): string {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    };
    /**
     * 
     * @fn 获取时间
     * @param 传递一个时间 时间格式或者字符串
     */
    standardParamDatetime(date: Date): string {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    };
    /**
     * 
     * @fn 检验参数是否是字符串
     * @param 传递一个参数
     */
    checkArgumentsSting(...args: any): boolean {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                return false;
            }
        }
        return true;
    };
    /**
     * 
     * @fn 检验参数是否是数字
     * @param 传递一个参数
     */
    checkArgumentsNumber(...args:any):boolean{
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                return false;
            }
        }
        return true;
    };
    /**
     * 
     * @fn 检验参数是否是字符
     * @param 传递一个字符串
     */
    isNumberOrLetter(str: string): boolean {
        const regu = /^[0-9a-zA-Z]+$/;
        if (regu.test(str)) {
            return true;
        }
        return false;
    };
    /**
     * 
     * @fn 检验参数是否是邮箱
     * @param 传递一个字符串
     */
    isEmail(str: string): boolean {
        const myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/;
        if (myReg.test(str)) return true;
        return false;
    };
    /**
     * 
     * @fn 获取token
     * @param 传递用户信息
     */
    getToken(data:LOGIN_USER):Promise<string>{
        return new Promise((resolve,reject)=>{
            const created = Math.floor(Date.now());
            jwt.sign({ 
                user: JSON.stringify(data),
                iat: created +3600*24*1000 }, config.cert, { algorithm: 'HS256' }, (err, token)=> {
                if(err){
                    reject('')
                }else{
                    resolve(token)
                }
           
            });
        });
    };
    /**
     * 
     * @fn 解析验证token
     * @param 传递token
     */
    verifyToken(str:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            jwt.verify(str,  config.cert,(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    };
    /**
     * 
     * @fn 解析验证token
     * @param 传递token
     */
    decodeToken(str:string):any{
        const decoded = jwt.decode(str, {complete: true});
        if(!decoded){
            return false;
        }
        return decoded;
    }
     /**
     * 
     * @fn http请求
     * @param {
     *          url路径:string,
     *          data:请求参数
     *          }
     */
    ajax(url:string,method:string,data?:any):Promise<any>{
        return new Promise((resolve,reject)=>{
            const opt = {
                'url':url,
                'method':method,
                'timeout': 5000,
                'pool':false,
                'headers': {
                    'content-type': 'application/json;charset=utf-8'
                },
                'body':data ? JSON.stringify(data) : ''
            }
            request(opt,(err,res,body)=>{
                console.log('3--------',err)
                console.log('4--------',res.statusCode)
                console.log('5--------',body)
                if(err){
                    console.log('7--------')
                    const r = {
                        'code':110,
                        'msg':'超时'+err
                    }
                    reject(r);
                }else if(res.statusCode && res.statusCode === 200){
                    console.log('6--------')
                    resolve(body)
                }else{
                    console.log('8--------')
                    const r = {
                        'code':100,
                        'msg':'服务器异常'
                    }
                    reject(r);
                }
            });
        });
    }
}
export default new Person();
