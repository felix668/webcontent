<template>
  <div id="root">
    <mask-loading v-show=" page==='pending' "></mask-loading>
    <mask-over v-show=" page==='over' "></mask-over>
    
    <div class="main" v-show=" page==='ready' ">
      <div class="boiler">
        <img class="close" :src=" img+'/close.png' "
        @click="back"/>
        <p class="title__">{{boiler.title}}</p>
        <p class="p_" v-for="a in boiler.body">
          {{a}}
        </p>
        <div class="footer">
          更多精彩，3月23日新书正式震撼上线，届时千万不要错过！
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
  #root {
    position: relative;
    width: 100%;
    overflow: hidden;
    .main {
      position: relative;
      width: 100%;
      background: #d5c6ab;
      overflow: hidden;
      color: white;
      font-size: 16px;
      .boiler {
        position: relative;
        padding-top: 1.2rem;
        .close {
          position: absolute; right: 0.4rem; top: 0.4rem;
          width: 0.44rem;
        }
        .title__ {
          font-size: 0.4rem;
          color: #514129;
          font-weight: 600;
          text-align: center;
        }
        .p_ {
          padding: 0 0.4rem;
          margin: 0.25rem 0;
          font-size: 0.36rem; line-height: 0.6rem;
          color: #514129;
          text-indent: 0.6rem;
          text-align: justify;
        }
        .footer {
          padding: 0.4rem;
          font-size: 0.32rem; line-height: 0.48rem;
          text-align: justify; color: #b3ada1;
          background: #575146;
        }
      }
    }
  }
</style>

<script type="text/javascript">
  export default {
    components: {
      Debugger: require('../lib/Debugger.vue'),
      MaskLoading: require('lib/Mask/MaskLoading.vue'),
      MaskOver: require('lib/Mask/MaskOver.vue'),
    },
    data: function(){
      return {};
    },
    computed: {
      boiler(){
        return this.$store.state.boiler;
      },
      page(){
        return this.$store.state.page;
      },
      img(){
        return this.$store.state.img;
      },
    },
    watch: {
    },
    created: function(){
      
    },
    mounted: function(){
      this.$store.dispatch({type:'INIT_BOILER'});
    },
    methods: {
      back(){
        history.go(-1);
      },
      touchmove: function(e){
        e.preventDefault();
      }
    }
  }
</script>