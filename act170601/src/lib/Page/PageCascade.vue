<style lang="less" scoped>
  .Page4 {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    .text_0, .text_1, .logo, .btn_share, .btn_replay {
      // transition-property: opacity, transform;
      // transition-duration: 200ms;
      opacity: 0;
    }
    .text_0 {
      width: 2.87rem;
      margin: auto; margin-top: 2.37rem; margin-bottom: 0.2rem;
      margin-top: 1.5rem;
    }
    .text_1 {
      width: 2.42rem;
      margin: auto; margin-bottom: 0.82rem;
    }
    .logo {
      width: 1.89rem;
      margin: auto; margin-bottom: 2.08rem;
      margin-bottom: 1.5rem;
    }

    .btn_share {
      width: 3.8rem;
      margin: auto; margin-bottom: 0.2rem;
    }
    .btn_replay {
      width: 3.8rem;
      margin: auto;
    }
  }
</style>

<template>
  <div class="Page4">
    <img class="text_0" :src=" img+'/text_0.png' "
    :class="text_0"/>
    <img class="text_1" :src=" img+'/text_1.png' "
    :class="text_1"/>
    <img class="logo" :src=" img+'/logo.png' "
    :class="logo"/>

    <img class="btn_share" :src=" img+'/btn_'+(meta.share?'to_app':'share')+'.png' "
    :class="btn"
    @click="$store.dispatch({type:'CLICK_BTN'})"/>
    
    <img class="btn_replay" :src="img+'/btn_replay.png'"
    :class="btn_replay"
    @click="$store.dispatch({type:'REPLAY'})"/>
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {

    },
    data: function(){
      return {
        text_0: '',
        text_1: '',
        logo: '',

        btn: '',
        btn_replay: ''
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
      meta(){
        return this.$store.state.meta;
      },
      change(){
        return this.$store.state.change;
      }
    },
    watch: {
      'change.stage': function(nv){
        if( nv===4 ){
          setTimeout(()=>{
            this.text_0 = 'enter-up';
          },500)
          setTimeout(()=>{
            this.text_1 = 'enter-up';
          },800)
          setTimeout(()=>{
            this.logo = 'enter-up';
          },1100)
          setTimeout(()=>{
            this.btn = 'enter-up';
          },1400)
          setTimeout(()=>{
            this.btn_replay = 'enter-up';
          },1700)
        }
      }
    }
  }
</script>