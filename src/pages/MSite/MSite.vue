<template>
  <div class="on">
    <section class="msite">
      <!--首页头部-->
      <Header :title="address.name || '正在定位中...'">
        <router-link slot="search" to="/search" class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link slot="login" to="/login" class="header_login">
          <span class="header_login_text">{{user._id?(user.name?(user.name):(user.phone?user.phone:'登录|注册')):'登录|注册'}}</span>
        </router-link>
      </Header>user.name?:''
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="`https://fuss10.elemecdn.com`+ category.image_url" />
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!-- 附近商家 -->
      <ShopList />
    </section>
  </div>
</template>
<script>
import ShopList from '../../components/ShopList/ShopList'
// 引入Swiper
import Swiper from 'swiper'
// 引入Swiper的样式文件
import 'swiper/css/swiper.css'
// 引入vuex
import { mapState } from 'vuex'
export default {
  name: 'MSite',
  components: {
    ShopList
  },
  // 计算属性user
  computed: {
    // ...mapState(['address', 'categorys', 'user']),
    ...mapState({
      address: state => state.msite.address,
      categorys: state => state.msite.categorys,
      user: state => state.user.user
    }),
    // get操作
    categorysArr () {
      // 定义一个---数组接收---16个数据
      const { categorys } = this
      // 定义一个大数组,目的是放两个小数组
      let bigArr = []
      // 定义一个小数据,目的是放8个数据
      let smallArr = []
      categorys.forEach(category => {
        // 如果小数组没有数据,则把小数组添加到大的数组中
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        smallArr.push(category)
        // 如果小数组的lenght为8时,小数组数据已经够了
        if (smallArr.length === 8) {
          smallArr = []
        }
      })
      return bigArr
    }
  },
  // 界面显示之后
  async mounted () {
    this.$store.dispatch('getShops')
    await this.$store.dispatch('getCategorys')
    this.$nextTick(() => {
       new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
