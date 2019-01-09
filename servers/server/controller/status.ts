/**
 * FileName    : status.ts
 * ProjectName : koa-ts
 * Author      : terrorblade
 * Created Date: 2019-01-09 10:58:30
 * Description : 
 * -----
 * Last Modified: 2019-01-09 11:48:52
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
    mysqlErr():API_STATUS{
        this.code = -101,
        this.msg = '数据库未连接或插入语法错误';
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
}
export default new status();