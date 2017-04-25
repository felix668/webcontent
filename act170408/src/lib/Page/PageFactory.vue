<style lang="less" scoped>
  .PageFactory {
    position: absolute; left: 0; top: 0;
    width: 100%;
  }
</style>

<template>
  <div class="PageFactory rem_height" v-show=" change_main.stage==='factory' ">
    <swiper-cards></swiper-cards>
    <mask-done></mask-done>
    <!-- <img class="slogan" :src=" img+'main/slogan/'+pic.slogan+'.png' "/>
    <controls></controls> -->
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      SwiperCards: require('lib/_main/SwiperCards.vue'),
      CarouselCards: require('lib/_main/CarouselCards.vue'),
      Controls: require('lib/_main/Controls.vue'),
      MaskDone: require('./MaskDone.vue')
    },
    computed: {
      pic(){
        return this.$store.state.pic;
      },
      change_main(){
        return this.$store.state.change_main;
      },
      img(){
        return this.$store.state.img;
      }
    },
    methods: {
      share(){
      }
    }
  }
</script>