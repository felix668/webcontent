<style lang="less" scoped>
  .Page2 {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    .syb {
      position: absolute; left: 0.385rem; bottom: 2rem;
      width: 6.73rem;
      // margin: auto; margin-top: 4.88rem;
      opacity: 0;
    }
    .btn_blog {
      position: absolute; left: 1.85rem; 
      // top: 10.3rem;
      bottom: 0.5rem;
      width: 3.8rem; height: 1.04rem;
    }
  }
</style>

<template>
  <div class="Page2">
    
    <img class="syb" :src=" img+'/syb.png' "
    :class="syb" />

    <div class="btn_blog"
    :style=" 'background-image:url('+img+'/btn_blog.png);background-size:3.8rem 1.04rem;' "
    @click="$store.dispatch({type:'TURN_AUDIO'})">
      <icon-broadcast></icon-broadcast>
      <audio-nine></audio-nine>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      IconBroadcast: require('./IconBroadcast.vue'),
      AudioNine: require('./AudioNine.vue')
    },
    data: function(){
      return {
        syb: ''
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      }
    },
    watch: {
      '$store.state.change.stage': function(nv){
        if( nv===2 ){
          setTimeout(()=>{
            this.syb = 'enter-up';
          },300);
        }
      }
    }
  }
</script>