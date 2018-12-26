<template>
  <div class="app-container">
      <!-- 组件有两个属性 value 传入内容双向绑定 setting传入配置信息 -->
      {{editorValue}}
      <editor
        api-key='g1i0fci7zy2uondbkh7i6a4xwwfo1gpnzyu2yfvdvm9t3rg0'
        :init='editorInit'
        v-model='editorValue'
        ></editor>

  </div>
</template>
<script>
// import Editor from '@/components/tinymce.vue'
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'editor-demo',
  data: function () {
    return {
      editorValue: '',
      // tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
      editorInit: {
        selector: 'textarea', // change this value according to your HTML
        toolbar: 'image',
        imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
        plugins: 'wordcount image link code table lists contextmenu colorpicker textcolor imagetools'
      }
    }
  },
  components: {
    'editor': Editor
  }
}
</script>
<style scoped>
</style>
