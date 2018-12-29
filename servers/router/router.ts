
import * as koaRouter from 'koa-router';
const router = new koaRouter();
const routerConfig = require('./config.json').servers;//引入模块配置
//路由初始化
for(let i=0;i<routerConfig.length;i++){
    if(routerConfig[i].isEnable){//模块是否启用
        const interfaceFile = require(routerConfig[i].server);//引入该模块下的接口模块
        for(let j=0;j<interfaceFile.server.length;j++){
            if(interfaceFile.server[j].isEnable){//该接口模块是否启用
                switch(interfaceFile[j]){//接口类型
                    case 'post':
                        router.post(`/api/${routerConfig[i].versions}/${routerConfig[i].name}/${interfaceFile.name}/${interfaceFile.server[j].name}`,(ctx)=>{
                            interfaceFile.server[j].interface(ctx);
                        });
                        break;
                    default:
                        router.get(`/api/${routerConfig[i].versions}/${routerConfig[i].name}/${interfaceFile.name}/${interfaceFile.server[j].name}`,(ctx)=>{
                            interfaceFile.server[j].interface(ctx);
                        });
                        break;    
                }
            }
        }
    }
}

export {router};