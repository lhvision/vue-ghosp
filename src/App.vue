<template>
  <div>
    <!-- 路由视图 -->
    <router-view />
    <!-- 底部组件 -->
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 引入底部组件
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('autoLogin')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
