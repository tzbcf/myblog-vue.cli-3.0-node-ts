<template>
  <div class="app-container">
    <!-- 组件有两个属性 value 传入内容双向绑定 setting传入配置信息 -->
    <mceeditor v-model="editorValue"></mceeditor>
  </div>
</template>
<script>
import mceeditor from '@/components/common/tinymce.vue';

export default {
  name: 'editor-demo',
  components: {
    mceeditor,
  },
  data() {
    return {
      editorValue: '',
    };
  },
};
</script>
<style scoped>
</style>