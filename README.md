# -------------持续更新-------------

***

> * 哈哈！各位大佬可以留下博客路口。大家互相增加
> * [作者博客官网](https://www.terrorblade.xyz ) [点击跳转](https://www.terrorblade.xyz )
> https://www.terrorblade.xyz    
> * (代码下载的模本，新的网站代码在这开发中-----个人开发感觉自己进度有点慢啊，效率下降了。。。)

***

> * #赠人星星，手有余香
> * #走过路过的各位大佬，看到留下star呗。这就是给程序员最好的鼓励了！

***

## myblog

---
### client----前端vue@cli3.0    
>   博客前端页面 --- [博客前端魔板页面](https://dfjcx.cn/ ) [点击跳转](https://dfjcx.cn/)
---
### servers---node后端页面ts

*  博客后端api代码

*  npm i 

*  npm run start

*  压缩打包(后续打算gulp【暂缺】)

*  支持直接vscode ts开发调试(其他调试开发工具不敢保证)
---
***
    #### blog.sql---数据库直接导入

    #### REST-Project-4-soapui-preject.xml---是api接口调试工具(SoapUI 5.2.1版)！直接导入
    ### 目前项目进度----

    *  注册---能跑通，前端能注册(后续逻辑还没完成)，后端注册完成

    *  下一阶段---loading和Toast弹窗开发以及登录(目前toast组件还不能通用。重复点击会有Bug,还需要维护修改。)
            
####  技术交流职业互推加微信好友


![微信](https://www.terrorblade.xyz/img/wxfd.png)

---
***

```
|-- project
    |-- .gitignore                                                   
    |-- blog.sql                                            //项目数据库
    |-- README.md
    |-- REST-Project-4-soapui-project.xml                   //接口测试工具soapui的文件
    |-- .vscode
    |   |-- settings.json                                  
    |-- client                                              //前端项目，vue.cli 3.0脚手架-----
    |   |-- .browserslistrc
    |   |-- .editorconfig
    |   |-- .eslintrc.js
    |   |-- .gitignore
    |   |-- babel.config.js
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- postcss.config.js
    |   |-- README.md
    |   |-- vue.config.js                                    //前端vue的配置文件
    |   |-- .vscode
    |   |   |-- settings.json
    |   |-- config                                           //项目配置文件夹
    |   |   |-- api.js                                       //接口配置文件
    |   |   |-- config.json                                  //项目配置文件
    |   |   |-- tinymce.js                                   //富文本编辑的配置文件
    |   |-- libs
    |   |   |-- base.js                                      //基础封装公用方法
    |   |-- public
    |   |   |-- index.html                                   //项目入口
    |   |   |-- fontAwesome                                  //字体图标文件夹
    |   |   |-- img                                          //图片文件夹
    |   |   |-- tinymce                                      //富文本编辑器的插件
    |   |-- src                                              
    |       |-- App.vue                                      //app组件
    |       |-- http.js                                      //axios封装文件
    |       |-- main.js                                      //页面入口Js
    |       |-- router.js                                    //路由js
    |       |-- store.js                                     //状态管理js
    |       |-- assets                         
    |       |-- components                                   //组件
    |       |   |-- HelloWorld.vue
    |       |   |-- common                                   //公用组件
    |       |       |-- footer.vue                           //页底组件
    |       |       |-- tinymce.vue                          //富文本组件
    |       |       |-- toast.vue                            //提示toast组件
    |       |-- store
    |       |   |-- common.js                                //公共数据管理
    |       |   |-- toast.js                                 //toast数据管理
    |       |-- views
    |           |-- 404.vue                                  //404组件
    |           |-- About.vue    
    |           |-- Home.vue                                 //home页组件
    |           |-- login.vue                                //登录组件
    |           |-- register.vue                             //注册组件
    |-- servers                                              //后端项目----------
        |-- app.ts
        |-- package-lock.json
        |-- package.json
        |-- tsconfig.json
        |-- tslint.json
        |-- .vscode
        |   |-- launch.json                                   //vscode后端调试文件
        |-- bin
        |   |-- www.ts                                        //启动文件
        |-- config                                            //项目配置文件
        |   |-- config.dev.ts
        |   |-- config.prod.ts
        |   |-- logConfig.json                                //日志配置文件
        |-- lib
        |   |-- common.ts                                     //公用封装方法
        |   |-- logger.ts                                     //日志封装方法
        |-- logs                                              //产生日志的文件夹
        |-- middleware                                        //中间件
        |   |-- historyFillback.ts                            //vue histroy模式下后端的设置
        |-- public                                            //后端供外部访问容器的文件夹
        |-- server                                            //业务逻辑代码
            |-- controller                                    //控制器
            |   |-- article.ts 
            |   |-- index.ts
            |   |-- status.ts
            |   |-- user.ts
            |-- interface                                     //接口
            |   |-- article.ts
            |   |-- user.ts
            |-- model                                         //数据库操作
            |   |-- article.ts
            |   |-- db.ts
            |   |-- user.ts
            |-- router                                         //路由代码
            |   |-- blog.ts                                    //博客接口
            |   |-- common.ts                                  //公共接口
            |   |-- wechat.ts                                  //未来微信接口
            |-- service                                        //逻辑ts
                |-- article.ts 
                |-- user.ts
```