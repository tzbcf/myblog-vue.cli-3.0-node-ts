/**
 * FileName    : status.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:58:30
 * Description : 
 * -----
 * Last Modified: 2019-01-09 16:07:56
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
interface API_STATUS{
    code:number,
    msg:string
}
class status{
    private code:number
    private msg:string
    constructor(){
        this.code = 0;
        this.msg = '成功';
    };
    success():API_STATUS{
        this.code = 0;
        this.msg = '成功';
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
}
export default new status();