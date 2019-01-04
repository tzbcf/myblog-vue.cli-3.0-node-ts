/*
 * FileName    : login.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:26:37
 * Description :
 * -----
 * Last Modified: 2019-01-04 15:51:13
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

    }
  },
  methods:{
    submit(){
      const self = this;
      self.axios.post().then(result=>{
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
