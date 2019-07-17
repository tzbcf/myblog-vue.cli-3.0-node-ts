import { Context } from 'vm';
/**
 * FileName : wechat.ts
 * ProjectName : myblog-vue.cli-3.0-node-ts
 * Author : terrorblade
 * Created Date: 2019-01-21 15:45:12
 * Description : 
 * -----
 * Last Modified: 2019-07-17 12:34:21
 * Modified By : 
 * -----
 * Copyright (c) 2019 XXX Corporation. All rights reserved.
 */
import * as fs from 'fs';
import * as path from 'path';
import * as sha1 from 'sha1';
import * as xml2js from 'xml2js';
import * as crypto from 'crypto';
import person from './common';
import config from '../config/wechatConfig';
import {USER_TOKEN} from '../interface/weChat';
const parseString = xml2js.parseString;
class Wechat {
  private waAppid: string;
  private sessionKey: string;
  constructor() {
    this.waAppid = config.weAppId;
    this.sessionKey = '';
  }
  /**
   * verifyWxReq 加密数据用于验证服务器来源
   */
  verifyWxReq(ctx: Context): string {
    const timestamp = ctx.query.timestamp || "",
      nonce = ctx.query.nonce || "",
      token = config.token || "";
    //字典排序
    const str = [token, timestamp, nonce].sort().join("");
    return sha1(str);
  }
  /**
   * wechat 获取token
   */
  async getAccessToken(): Promise<string> {
    const self = this;
    const filePath = path.resolve(__dirname, "../config/wechat.txt");
    try {
      const wechat_token = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (
        !wechat_token ||
        !wechat_token.access_token ||
        !wechat_token.expires_in
      ) {
        //如果其中不存在，获取access_token
        return await self.gainAccessToken();
      }
      const now = new Date().getTime();
      if (now > wechat_token.expires_in) {
        //如果时间过期，获取access_token
        return await self.gainAccessToken();
      } else {
        return wechat_token;
      }
    } catch (e) {
      //如果其中报错！从新获取access_token
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
      const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${
        config.appId
      }&secret=${config.appsecret}`;
      await person
        .ajax(url, "GET")
        .then(res => {
          const expires_in =
            new Date().getTime() + res.expires_in * 1000 - 20000;
          const filePath = path.resolve(__dirname, "../config/wechat.txt");
          const wechat_token = {
            access_token: res.access_token,
            expires_in: expires_in
          };
          fs.writeFileSync(filePath, JSON.stringify(wechat_token), "utf-8");
          resolve(wechat_token);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  /**
   *
   * @fn 解析xml为Json
   * @param
   */
  pareXMLtoJson(xml: any): Promise<any> {
    return new Promise((resolve, reject) => {
      parseString(
        xml,
        { trim: true, explicitArray: false, ignoreAttrs: true },
        (err, res) => {
          if (err) {
            reject();
          } else {
            resolve(res.xml);
          }
        }
      );
    });
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
        </xml>`;
  }
  /**
   *
   * @fn 获取微信access_token
   * @param
   */
  getCodeToken(code: string): Promise<USER_TOKEN> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/sns/oauth2/access_token?`+
            `appid=${config.appId}&secret=${config.appsecret}&code=${code}&grant_type=authorization_code`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
    /**
   *
   * @fn 验证微信access_token
   * @param
   */
  verifyToken(token: string, openid: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/sns/auth?access_token=${token}&openid=${openid}`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res1==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
      /**
   *
   * @fn 获取微信用户信息
   * @param
   */
  getUserInfo(token: string, openid: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${token}&openid=${openid}lang=zh_CN`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res2==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
   /**
   *
   * @fn 刷新token
   * @param
   */
  refreshToken(refreshToken: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${config.appId}&grant_type=refresh_token&refresh_token=${refreshToken}`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res3==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }

     /**
   *
   * @fn 小程序登陆
   * @param
   */
  weAppLogin(code: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.weAppId}&secret=${config.weAppSecret}&js_code=${code}&grant_type=authorization_code`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res3==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
    /**
   *
   * @fn 小程序获取token
   * @param
   */
  weGetAccessToken(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.weAppId}&secret=${config.weAppSecret}`;
      await person
        .ajax(url, "GET")
        .then(res => {
            resolve(res);
            console.log("========res3==",res)
        })
        .catch(err => {
          reject(err);
        });
    });
  }
    /**
   *
   * @fn 小程序解密数据
   * @param
   */
  decryptData(encryptedData: string, iv: string, sessionKeys: string): any {
    this.sessionKey = sessionKeys;
     // base64 decode
    const sessionKey = new Buffer(this.sessionKey, 'base64');
    const encryptedDatas = new Buffer(encryptedData, 'base64');
    const ivs = new Buffer(iv, 'base64');
    let decoded;
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, ivs);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);
      decoded = decipher.update(encryptedDatas, 'binary', 'utf8');
      decoded += decipher.final('utf8');
      
      decoded = JSON.parse(decoded);

    } catch (err) {
      throw new Error('Illegal Buffer');
    }

    if (decoded.watermark.appid !== this.waAppid) {
      throw new Error('Illegal Buffer')
    }

    return decoded
  }
}

export default new Wechat();