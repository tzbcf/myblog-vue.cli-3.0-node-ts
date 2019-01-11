/*
 * FileName    : toast.vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2019-01-10 09:23:12
 * Description : 
 * -----
 * Last Modified: 2019-01-11 10:17:38
 * Modified By  : 
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */

<template>
  <div class="container-toast">
    <div class="done-content" v-if="getType === 'loading' || getType === 'done'">
      <div class="done-toast">
        <div class="done-icon-toast">
          <i :class="getComputData.class"></i>
          <p>{{getComputData.msg}}</p>
        </div>
      </div>
    </div>
    <div class="msg-content" v-if="getType === 'msg'">
      <div class="msg-toast" :class="getComputData.name">
        <p>
          <i :class="getComputData.class"></i>
          {{getComputData.msg}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toastList: [
        {
          name: "done",
          msg: "已完成",
          class: "fa fa-check fa-inverse fa-2x"
        },
        {
          name: "loading",
          msg: "加载中",
          class: "fa fa-spinner fa-pulse fa-2x"
        },
        {
          name: "msg-success",
          msg: "加载中",
          class: "fa fa-check fa-inverse"
        },
        {
          name: "msg-error",
          msg: "加载中",
          class: "fa fa-close fa-inverse"
        }
      ]
    };
  },
  computed: {
    getComputData() {
      const self = this;
      const obj = self.$store.state.toast.toastObj;
      const data = self.libBase.findArrAttrData(
        self.toastList,
        "name",
        obj.type
      );
      if (obj.msg) {
        data.msg = obj.msg;
      }
      return data;
    },
    getType() {
      return this.$store.state.toast.toastType;
    }
  },
  methods: {},
  mounted() {
  }
};
</script>

<style lang="stylus" scoped>
.container-toast {
  .done-content {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    .done-toast {
      width: 7.6em;
      min-height: 7.6em;
      background: rgba(17, 17, 17, 0.7);
      text-align: center;
      border-radius: 5px;
      color: #FFFFFF;
      display: flex;
      align-items: center;

      .done-icon-toast {
        width: 100%;

        i {
          display: block;
          width: 100%;
          margin-bottom: 0.4rem;

          img {
            display: inline-block;
            height: 2em;
            max-width: 100%;
          }
        }
      }
    }
  }
}

.icon-animate {
  animation: rotating 1.2s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.msg-content {
  position: fixed;
  top: 0.8em;
  width: 100%;
  display: flex;
  justify-content: center;

  .msg-toast {
    background: rgba(17, 17, 17, 0.7);
    padding: 15px 30px 15px 10px;
    border-radius: 4px;
    color: #fff;
  }

  .msg-error {
    color: #a94442;
    border-color: #ebccd1;
    background: #f2dede;

    i {
      color: #a94442;
    }
  }
}
</style>



