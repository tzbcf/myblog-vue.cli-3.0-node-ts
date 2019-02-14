/**
 * FileName    : status.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:58:30
 * Description : 
 * -----
 * Last Modified: 2019-01-21 16:35:41
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
interface API_STATUS{
    code:number,
    msg:string,
    datas?:any
}
class Status{
    private code:number
    private msg:string
    constructor(){
        this.code = 0;
        this.msg = '成功';
    };
    success(datas:any=[]):API_STATUS{
        this.code = 0;
        this.msg = '成功';
        if(datas.length){
            return {'code':this.code,'msg':this.msg,'datas':datas}
        }
        return {'code':this.code,'msg':this.msg}
    };
    unusual():API_STATUS{
        this.code = -100,
        this.msg = `服务器异常`;
        return {'code':this.code,'msg':this.msg}
    };
    mysqlErr(e:string):API_STATUS{
        this.code = -101,
        this.msg = `数据库未连接或插入语法错误---${e}`;
        return {'code':this.code,'msg':this.msg}
    };
    param400():API_STATUS{
        this.code = -400,
        this.msg = '参数错误不合法，请检查参数';
        return {'code':this.code,'msg':this.msg}
    };
    param401():API_STATUS{
        this.code = -401,
        this.msg = '参数错误出现不是字符串的参数';
        return {'code':this.code,'msg':this.msg}
    };
    param410():API_STATUS{
        this.code = -410,
        this.msg = '缺少上传文件';
        return {'code':this.code,'msg':this.msg}
    };
    param500():API_STATUS{
        this.code = -500,
        this.msg = 'userName已经存在';
        return {'code':this.code,'msg':this.msg}
    };
    param501():API_STATUS{
        this.code = -501,
        this.msg = 'userName应该由数字英文单词组成';
        return {'code':this.code,'msg':this.msg}
    };
    param502():API_STATUS{
        this.code = -502,
        this.msg = 'email不合法';
        return {'code':this.code,'msg':this.msg}
    };
    param503():API_STATUS{
        this.code = -503,
        this.msg = 'password长度不够';
        return {'code':this.code,'msg':this.msg}
    };
    param504():API_STATUS{
        this.code = -504,
        this.msg = '账号不存在';
        return {'code':this.code,'msg':this.msg}
    };
    param505():API_STATUS{
        this.code = -505,
        this.msg = '密码不对';
        return {'code':this.code,'msg':this.msg}
    };
    param506():API_STATUS{
        this.code = -506,
        this.msg = 'token失效';
        return {'code':this.code,'msg':this.msg}
    };
    param507():API_STATUS{
        this.code = -507,
        this.msg = 'token不合法';
        return {'code':this.code,'msg':this.msg}
    };
    param4001():API_STATUS{
        this.code = -4001,
        this.msg = '服务器来源不合法';
        return {'code':this.code,'msg':this.msg}
    };
}
export default new Status();