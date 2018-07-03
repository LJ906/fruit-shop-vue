<template>
    <div class="tab-bar-wrapper">
      <mt-tabbar v-model="selected" fixed value>
        <mt-tab-item id="首页">
          <img slot="icon" src="../../assets/images/icon-home.jpg">
          首页
        </mt-tab-item>
        <mt-tab-item id="分类">
          <img slot="icon" src="../../assets/images/icon-search.jpg">
          分类
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <img slot="icon" src="../../assets/images/icon-cart.jpg">
          购物车
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../../assets/images/icon-person.jpg">
          我的
        </mt-tab-item>
      </mt-tabbar>


    </div>

</template>

<script>
    export default {
        name: "tabBar",
        data() {
          return {
            selected: '首页'
          }
        }
    }
</script>

<style scoped>

</style>
