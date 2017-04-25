<style lang="less" scoped>
  .Page0 {
    position: relative;
    width: 100%; height: 100vh;
    perspective: 10rem;
    .t_0_0 {
      position: absolute; left: 1.85rem; top: 1.25rem;
      width: 0.58rem;
      opacity: 0;
    }
    .t_0_1 {
      position: absolute; left: 3.17rem; top: 2.25rem;
      width: 0.41rem;
      opacity: 0;
    }
    .t_0_2 {
      position: absolute; left: 3.89rem; top: 1.71rem;
      width: 0.42rem;
      opacity: 0;
    }
    .t_0_3 {
      position: absolute; left: 4.58rem; top: 3.03rem;
      width: 0.42rem;
      opacity: 0;
    }
    .t_0_4 {
      position: absolute; left: 5.27rem; top: 2.27rem;
      width: 0.42rem;
      opacity: 0;
    }
  }
</style>

<template>
  <div class="Page0 rem_height">
    <img ref="t_0_0" class="t_0_0" :src=" img+'/t_0_0.png' "/>
    <img ref="t_0_1" class="t_0_1" :src=" img+'/t_0_1.png' "/>
    <img ref="t_0_2" class="t_0 t_0_2" :src=" img+'/t_0_2.png' "/>
    <img ref="t_0_3" class="t_0 t_0_3" :src=" img+'/t_0_3.png' "/>
    <img ref="t_0_4" class="t_0 t_0_4" :src=" img+'/t_0_4.png' "/>
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
      'change.stage': function(nv){
        if( nv===1 ){
          setTimeout(()=>{
            tl.play();
          },1000);
        }else if(nv===0){
          setTimeout(()=>{
            tl.restart().pause();
          },500);
        }
      },
      'change.page': function(nv){
        if( nv===1 ){
          setTimeout(()=>{
            tl.restart().pause();
          },500);
        }
        if( nv===0 ){
          tl.play();
        }
      }
    },
    mounted: function(){
      var self = this;

      var t_0_0 = this.$refs.t_0_0;
      var t_0_1 = this.$refs.t_0_1;
      var t_0_2 = this.$refs.t_0_2;
      var t_0_3 = this.$refs.t_0_3;
      var t_0_4 = this.$refs.t_0_4;

      tl = new TimelineMax();
      
      var duration = 2;
      var delay = -1.5;

      tl.fromTo( t_0_0,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo( t_0_1,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_0_2,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_0_3,duration,{
        opacity: 0,
        rotationY: -90,
        x: '100%'
      },{
        opacity: 1,
        rotationY: 0,
        x: '0%',
        delay: delay
      }).fromTo( t_0_4,duration,{
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
          if( self.change.page===0 ){
            $('.book112').turn('peel','br');
          };
        }
      }).pause();
    },
    methods: {
      animate: function(){

        // tl.fromTo( penguin_0,0.6,{
        //  transformOrigin: '100% 100%',
        //  rotation: '50deg'
        // },{
        //  rotation: '0'
        // }).to( penguin_0,0.5,{
        //  x: '200%'
        // }).fromTo( penguin_1,0.6,{
        //  transformOrigin: '0% 100%',
        //  x: '-100%',
        //  rotation: '-50deg'
        // },{
        //  x: '0%',
        //  rotation: 0
        // }).to( penguin_1,0.5,{
        //  x: '-200%'
        // }).fromTo( penguin,0.5,{
        //  y: '50%'
        // },{
        //  y: '0%',
        //  onStart: function(){
        //  },
        //  ease: Elastic
        // }).fromTo( Focus,0.3,{
        //  opacity: 1
        // },{
        //  opacity: 0,
        //  delay: 0.3
        // }).to( Focus,0.5,{
        //  opacity: 0.7,
        //  onComplete: this.CHANGE_STAGE.bind(this)
        // })
      }
    }
  }
</script>