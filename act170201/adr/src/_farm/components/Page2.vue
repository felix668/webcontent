<style lang="less" scoped>
  .Page0 {
    position: relative;
    width: 100%; height: 100vh;
    perspective: 10rem;
    .t_2_0 {
      position: absolute; left: 1.55rem; top: 1.16rem;
      width: 0.58rem;
      opacity: 0;
    }
    .t_2_1 {
      position: absolute; left: 2.36rem; top: 2.37rem;
      width: 0.58rem;
      opacity: 0;
    }
    .t_2_2 {
      position: absolute; left: 3.50rem; top: 2.06rem;
      width: 0.43rem;
      opacity: 0;
    }
    .t_2_3 {
      position: absolute; left: 4.20rem; top: 1.40rem;
      width: 0.43rem;
      opacity: 0;
    }
    .t_2_4 {
      position: absolute; left: 4.88rem; top: 1.80rem;
      width: 0.42rem;
      opacity: 0;
    }
    .t_2_5 {
      position: absolute; left: 5.55rem; top: 1.35rem;
      width: 0.44rem;
      opacity: 0;
    }
  }
</style>

<template>
  <div class="Page0 rem_height">
    <img ref="t_2_0" class="t_2_0" :src=" img+'/t_2_0.png' "/>
    <img ref="t_2_1" class="t_2_1" :src=" img+'/t_2_1.png' "/>
    <img ref="t_2_2" class="t_2 t_2_2" :src=" img+'/t_2_2.png' "/>
    <img ref="t_2_3" class="t_2 t_2_3" :src=" img+'/t_2_3.png' "/>
    <img ref="t_2_4" class="t_2 t_2_4" :src=" img+'/t_2_4.png' "/>
    <img ref="t_2_5" class="t_2 t_2_5" :src=" img+'/t_2_5.png' "/>
  </div>
</template>

<script type="text/javascript">
  
  var tl;
  export default {
    props: {
      img: {},
      change: {},
      dispatch: {}
    },
    watch: {
      'change.page': function(nv){
        if( nv===2 ){
          tl.restart().pause();
          setTimeout(()=>{
            tl.play();
          },500);
        }
      }
    },
    mounted: function(){
      var self = this;

      var t_2_0 = this.$refs.t_2_0;
      var t_2_1 = this.$refs.t_2_1;
      var t_2_2 = this.$refs.t_2_2;
      var t_2_3 = this.$refs.t_2_3;
      var t_2_4 = this.$refs.t_2_4;
      var t_2_5 = this.$refs.t_2_5;

      tl = new TimelineMax();
      
      var duration = 2;
      var delay = -1.5;

      tl.fromTo( t_2_0,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo( t_2_1,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_2_2,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_2_3,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_2_4,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_2_5,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay,
        onComplete: function(){
          self.dispatch({type:'SWITCH_OVER'});
          if( self.change.page===2 ){
            $('.book112').turn('peel','br');
          };
        }
      }).pause();
    },
    methods: {
    }
  }
</script>