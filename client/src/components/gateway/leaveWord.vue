/*
 * FileName    : leaveWord.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-17 09:52:27
 * Description : 
 * -----
 * Last Modified: 2019-01-17 16:38:40
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

<template>
    <div class="ct-leave">
        <div class="add-leave">
            <div class="user-hd">
                <img src="img/logo.png" alt="">
            </div>
            <div class="leave-push">
                <textarea range="262" v-model="leaveText"></textarea>
                <div class="leave-btn">
                    <div class="btn-box">
                        <div class="btn-face">
                            <div class="shade" @click="closeEmotion" v-if="showShade"></div>
                            <span @click="showEmotion()">
                                <i class="fa fa-smile-o"></i>
                                表情
                            </span>
                             <div class="emotion" v-if="showEmotionFlag">
                                <a v-for="item in emotionList"  href="javascript:;" @click="refer(item.key)">
                                    <img :src="item.url" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="btn-picture">
                            <form action="" enctype="multipart/form-data" method="post">
                                <label for="uploadFile">
                                    <i class="fa fa-picture-o"></i>
                                    图片
                                    <span>{{imgUrl}}</span>
                                </label>
                                <input type="file" id="uploadFile" accept="image/*" @change="tirggerFile($event)">
                            </form>
                        </div>
                    </div>
                    <div class="btn-submit">
                        <button class="" @click="submit">发布</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-leave" v-html="qqWechatEmotionParser(expression)"></div>
    </div>
</template>

<script>
const emotion = require('../../../config/emotions.json')
export default {
    data () {
        return {
            formData:new FormData(),
            imgUrl:"",
            expression:"",
            leaveText:"",
            showEmotionFlag:false,
            showShade:false,
            emotionList:[]
        }
    },
    methods:{
        tirggerFile(event){
            const self = this;
            const file = event.target.files[0]; 
            self.formData.append('file',file,file.name);
            self.imgUrl = file.name;
        },
        submit(){  
            const self = this;
            self.axios
                .post(self.apiJson.uploadApi, self.formData)
                .then(result => {
                    self.imgUrl = result.datas.url;
                })
                .catch(err => {
                    self.$store.commit("SET_TOAST_DATA", {
                        type: "msg-error",
                        msg: `${err.msg}`
                    });
                });
        },
        refer(val){
            this.leaveText += `${val}`;
        },
        showEmotion(){
            this.showShade = true;
            this.showEmotionFlag = true;
        },
        closeEmotion(){
            this.showShade = false;
            this.showEmotionFlag = false;
        },
        provideEmotion(){
            const self = this;
            for(const key in emotion){
                const obj = {
                    key : key,
                    url : emotion[key]
                }
                self.emotionList.push(obj);
            }
        }
    },
    created(){
        this.provideEmotion();
    }
}
</script>

<style lang="stylus" scoped>
.shade
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 0
.ct-leave
    width 1000px
    margin 0 auto
    .add-leave
        display flex
        justify-content space-between
        .user-hd
            width 80px
            height 80px
            img 
                display block
                max-width 100%
                border-radius 6px
                overflow hidden
        .leave-push
            width 900px
            border 1px solid #cccccc
            border-radius 6px
            box-sizing border-box
            textarea
                width 100%
                height 95px
                font-size 16px
                padding  10px
                color #333
                overflow hidden
                resize none
                border none
                border-radius 6px
                outline none
                box-sizing border-box
                z-index 9999
            .leave-btn
                display flex
                align-items center       
                justify-content space-between
                border-top 1px solid #cccccc
                .btn-box
                    display flex
                    align-items center
                    font-size 14px
                    padding 5px 10px
                    .btn-face
                        font-size 14px 
                        position relative
                        span 
                            cursor pointer
                        .emotion
                            position absolute
                            top 20px
                            left 0
                            width 380px
                            height 240px
                            padding 10px 0 10px 10px
                            box-sizing border-box
                            display flex
                            flex-wrap wrap
                            border 1px solid #cccccc
                            background #ffffff
                            border-radius 6px
                            z-index 9999
                            a
                                display inline-block
                                width 24px
                                height 24px
                                padding 2px 
                    .btn-face,.btn-picture
                        padding  0 10px
                    .btn-picture
                        position relative
                        label 
                            cursor pointer
                            top 0
                        input 
                            position absolute
                            clip: rect(0px 0px 0px 0px);
                            outline: 0; 
                            line-height: normal;
                .btn-submit
                    button 
                        outline none 
                        border none
                        cursor pointer      
                        display inline-block
                        line-height 30px  
                        width 80px

</style>