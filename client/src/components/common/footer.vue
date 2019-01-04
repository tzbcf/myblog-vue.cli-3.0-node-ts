/*
 * FileName    : footer.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 14:45:30
 * Description :
 * -----
 * Last Modified: 2019-01-04 17:10:51
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
<template>
    <div class="content-footer">
        <div class="footer">
            <h6>WEBSITE BY Terrorblade</h6>
            <p>© 2018. All RIGHT RESERVED.</p>
            <p>
                <a href="http://www.beian.gov.cn" target="_blank">备案/许可证编号为：粤ICP备18155633号-1</a>       
            </p>
            <div style="width:300px;margin:0 auto;">
			    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602003348" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                    <img src="img/bgicon.png" style="float:left;"/>
                    <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px">粤公网安备 44030602003348号</p>
                </a>
		    </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.content-footer
    overflow hidden
    .footer
        h6,p,a
            margin 0 0 14px;
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            letter-spacing: 1px;
</style>
