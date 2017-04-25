<style lang="less" scoped>
  .Page0 {
    position: relative;
    width: 100%; height: 100vh;
    perspective: 10rem;
    .t_1_0 {
      position: absolute; left: 1.85rem; top: 1.25rem;
      width: 0.58rem;
      opacity: 0;
    }
    .t_1_1 {
      position: absolute; left: 3.20rem; top: 1.97rem;
      width: 0.43rem;
      opacity: 0;
    }
    .t_1_2 {
      position: absolute; left: 3.87rem; top: 1.41rem;
      width: 0.44rem;
      opacity: 0;
    }
    .t_1_3 {
      position: absolute; left: 4.58rem; top: 2.60rem;
      width: 0.45rem;
      opacity: 0;
    }
    .t_1_4 {
      position: absolute; left: 5.27rem; top: 1.31rem;
      width: 0.44rem;
      opacity: 0;
    }
  }
</style>

<template>
  <div class="Page0 rem_height">
    <img ref="t_1_0" class="t_1_0" :src=" img+'/t_1_0.png' "/>
    <img ref="t_1_1" class="t_1_1" :src=" img+'/t_1_1.png' "/>
    <img ref="t_1_2" class="t_1 t_1_2" :src=" img+'/t_1_2.png' "/>
    <img ref="t_1_3" class="t_1 t_1_3" :src=" img+'/t_1_3.png' "/>
    <img ref="t_1_4" class="t_1 t_1_4" :src=" img+'/t_1_4.png' "/>
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
      'change.page': function(nv,ov){
        if( nv===1 ){
          tl.restart().pause();
          setTimeout(()=>{
            tl.play();
          },500);
        }
      }
    },
    mounted: function(){
      var self = this;

      var t_1_0 = this.$refs.t_1_0;
      var t_1_1 = this.$refs.t_1_1;
      var t_1_2 = this.$refs.t_1_2;
      var t_1_3 = this.$refs.t_1_3;
      var t_1_4 = this.$refs.t_1_4;

      tl = new TimelineMax();
      
      var duration = 2;
      var delay = -1.5;

      tl.fromTo( t_1_0,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo( t_1_1,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_1_2,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_1_3,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_1_4,duration,{
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
          if( self.change.page===1 ){
            $('.book112').turn('peel','br');
          };
        }
      }).pause();
    },
    methods: {
    }
  }
</script>