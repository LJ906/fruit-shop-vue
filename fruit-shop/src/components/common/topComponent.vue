<template>
  <div class="top-header">
    <mt-header :title="titleText">
      <div slot="left" v-if='isShowLeft' @click = 'goBack'>
        <mt-button icon="back">{{backText}}</mt-button>
      </div>
      <!--<mt-button icon="more" slot="right" v-if='isShowright' ></mt-button>-->
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: "topComponent",
    data () {
      return {
        titleText: '水果店',
        backText: '返回',
        isShowLeft: true
      }
    },
    // 父组件传值
    // pageTitle titleText
    // isShow  showLeft
    // 通过 this.$options.propsData.pageTitle 来获取 props 中的属性值
    props: ['pageTitle', 'showLeft' ],
    methods: {
      goBack(){
        this.$router.back()
      }
    },
    mounted () {
      // 父组件传了以传的为准
      if(this.$options.propsData.pageTitle !== undefined) {
        this.titleText = this.$options.propsData.pageTitle
      }
      if(this.$options.propsData.showLeft !== undefined) {
        this.isShowLeft = this.$options.propsData.showLeft
      }

    }
  }
</script>

<style scoped >
  .mint-header{
    height: 44px;
    font-size: 18px;
    /*color: #999;*/
    background-color: #8ac900;
  }
</style>
