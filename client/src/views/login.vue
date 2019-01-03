/*
 * FileName    : login.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:26:37
 * Description :
 * -----
 * Last Modified: 2019-01-03 16:53:03
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
<template>
    <div class="login">
        <div>{{value}}</div>
        <mceeditor v-model = "value"></mceeditor>
        <div>
          <button @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
import mceeditor from '@/components/common/tinymce.vue'
window.tinymce.baseURL = 'tinymce'
window.tinymce.suffix = '.min'
export default {
  components: {
    mceeditor
  },
  data () {
    return {
      value: ''
    }
  },
  methods:{
    submit(){
      const self = this;
      const data = {
        'userName':'terrorblade',
        'type' : '你好',
        'title' :'随便',
        'content':self.value
      }
      self.axios.post(self.apiJson.addArticle,data).then(result=>{
        console.log(result)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
