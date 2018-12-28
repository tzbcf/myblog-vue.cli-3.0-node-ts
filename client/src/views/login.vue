/*
 * FileName    : login.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-26 16:26:37
 * Description :
 * -----
 * Last Modified: 2018-12-28 16:03:53
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
<template>
    <div class="login">
        {{Value}}
        <mceeditor v-model = "Value"></mceeditor>
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
      Value: ''
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
