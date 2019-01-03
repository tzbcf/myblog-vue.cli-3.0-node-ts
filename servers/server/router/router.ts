
import * as koaRouter from 'koa-router';
import * as multer from 'koa-multer';
const storage = multer.diskStorage({
    //文件保存路径
    destination (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename (req, file, cb) {
        const fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
const upload = multer({ storage: storage });
const router = new koaRouter();
const routerConfig = require('./config.json').servers;//引入模块配置
//路由初始化
for(let i=0;i<routerConfig.length;i++){
    if(routerConfig[i].isEnable){//模块是否启用
        const interfaceFile = require(routerConfig[i].server);//引入该模块下的接口模块
        for(let j=0;j<interfaceFile.server.length;j++){
            if(interfaceFile.server[j].isEnable){//该接口模块是否启用
                switch(interfaceFile.server[j].type){//接口类型
                    case 'post':
                        router.post(`/api/${routerConfig[i].versions}/${routerConfig[i].name}/${interfaceFile.name}/${interfaceFile.server[j].name}`,upload.single('file'),async (ctx)=>{
                            const result=await interfaceFile.server[j].interface(ctx);
                            ctx.body=result;
                        });
                        break;
                    default:
                        router.get(`/api/${routerConfig[i].versions}/${routerConfig[i].name}/${interfaceFile.name}/${interfaceFile.server[j].name}`,async(ctx)=>{
                            const result=await interfaceFile.server[j].interface(ctx);
                            ctx.body=result;
                        });
                        break;    
                }
            }
        }
    }
}

export default router;