import { Context } from 'vm';
/**
 * FileName : wechat.ts
 * ProjectName : myblog-vue.cli-3.0-node-ts
 * Author : terrorblade
 * Created Date: 2019-01-21 15:45:12
 * Description : 
 * -----
 * Last Modified: 2019-01-21 17:54:34
 * Modified By : 
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */
import * as fs from 'fs';
import * as path from 'path';
import * as sha1 from 'sha1';
import * as xml2js from 'xml2js';
import person from './common';
import wechatConfig from '../config/wechatConfig';
import config from '../config/wechatConfig';
import { resolve } from 'dns';
const parseString = xml2js.parseString;
class Wechat {
    constructor() {

    };
    /**
    * verifyWxReq 加密数据用于验证服务器来源
    */
    verifyWxReq(ctx: Context): string {
        const timestamp = ctx.query.timestamp || '',
            nonce = ctx.query.nonce || '',
            token = config.token || '';
        //字典排序
        const str = [token, timestamp, nonce].sort().join('');
        return sha1(str);
    }
    /**
    * wechat 获取token
    */
    async getAccessToken(): Promise<string> {
        const self = this;
        const filePath = path.resolve(__dirname, '../config/wechat.txt');
        try {
            const wechat_token = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            if (!wechat_token || !wechat_token.access_token || !wechat_token.expires_in) {//如果其中不存在，获取access_token
                return await self.gainAccessToken();
            }
            const now = new Date().getTime();
            if (now > wechat_token.expires_in) {//如果时间过期，获取access_token
                return await self.gainAccessToken();
            } else {
                return wechat_token;
            }
        } catch (e) {//如果其中报错！从新获取access_token
            return await self.gainAccessToken();
        }
    }
    /**
    * 
    * @fn 获取微信access_token
    * @param 
    */
    gainAccessToken(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wechatConfig.appId}&secret=${wechatConfig.appsecret}`;
            await person.ajax(url, 'GET').then(res => {
                const expires_in = new Date().getTime() + res.expires_in * 1000 - 20000;
                const filePath = path.resolve(__dirname, '../config/wechat.txt')
                const wechat_token = {
                    "access_token": res.access_token,
                    "expires_in": expires_in
                };
                fs.writeFileSync(filePath, JSON.stringify(wechat_token), 'utf-8');
                resolve(wechat_token)
            }).catch(err => {
                reject(err)
            })
        })
    }
    /**
   * 
   * @fn 解析xml为Json
   * @param 
   */
    pareXMLtoJson(xml: any): Promise<any> {
        return new Promise((resolve, reject) => {
            parseString(xml, { trim: true, explicitArray: false, ignoreAttrs: true }, (err, res) => {
                if (err) {
                    reject();
                } else {
                    resolve(res.xml);
                }
            })
        })
    }
    /**
    * 
    * @fn 自动回复
    * @param 
    */
    autoReply(data: any) {
        return `<xml> 
        <ToUserName><![CDATA[${data.FromUserName}]]></ToUserName> 
        <FromUserName><![CDATA[${data.ToUserName}]]></FromUserName> 
        <CreateTime>${new Date().getTime()}</CreateTime> 
        <MsgType><![CDATA[text]]></MsgType> 
        <Content><![CDATA[你好啊]]></Content> 
        </xml>`
    }
}

export default new Wechat();