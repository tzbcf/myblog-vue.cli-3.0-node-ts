<template>
  <div>
    <textarea :id='Id'></textarea>
  </div>
</template>
<script>
import 'tinymce';
import tinyConfig from '../../config/tinymce.js';
window.tinymce.baseURL = '/tinymce';
window.tinymce.suffix = '.min';
export default {
  name: 'mceeditor',
  data() {
    return {
      Id: Date.now(),
      Editor: null,
      DefaultConfig: tinyConfig,
    };
  },
  props: {
    value: {
      default: '',
      type: String,
    },
    config: {
      type: Object,
      default: () => {
        return {
          theme: 'modern',
          height: 300,
        };
      },
    },
    url: {
      default: '',
      type: String,
    },
    accept: {
      default: 'image/jpeg,image/png,image/jpg',
      type: String,
    },
    maxSize: {
      default: 2097152,
      type: Number,
    },
    withCredentials: {
      default: false,
      type: Boolean,
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // 销毁tinymce
    this.$emit('on-destroy');
    window.tinymce.remove(`$#{this.Id}`);
  },
  methods: {
    init() {
      const self = this;

      self.Editor = window.tinymce.init({
        // 默认配置
        ...self.DefaultConfig,

        // 图片上传
        images_upload_handler(blobInfo, success, failure) {
          if (blobInfo.blob().size > self.maxSize) {
            failure('文件体积过大');
          }

          if (self.accept.includes(blobInfo.blob().type)) {
            self.uploadPic(blobInfo, success, failure);
          } else {
            failure('图片格式错误');
          }
        },

        // prop内传入的的config
        ...self.config,

        // 挂载的DOM对象
        selector: `#${self.Id}`,
        setup: (editor) => {
          // 抛出 'on-ready' 事件钩子
          editor.on('init', () => {
            self.loading = false;
            self.$emit('on-ready');
            editor.setContent(self.value);
          });
          // 抛出 'input' 事件钩子，同步value数据
          editor.on('input change undo redo', () => {
            self.$emit('input', editor.getContent());
          });
        },
      });
    },
    uploadPic(blobInfo, success, failure) {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      // this.axios
      //   .post(this.apiJson.uploadApi, formData)
      //   .then(result => {
      //     success(result.datas.url);
      //   })
      //   .catch(err => {
      //     failure('上传失败');
      //   });
    },
  },
};
</script>