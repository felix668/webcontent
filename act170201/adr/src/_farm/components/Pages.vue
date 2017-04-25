<style lang="less" scoped>
  .Pages {
    position: absolute; left: 0; top: 0;
    width: 100%; height: 100vh;
    background: #e5eefa;
    opacity: 0;
    transform-origin: 30% 60%;
    transform: scale(0.5);
    transition-property: opacity transform;
    transition-duration: 1s;
    overflow: hidden;
    &.leave {
      opacity: 0;
      transform: scale(0.5);
    }
    &.hidden {
      display: none;
    }
    &.enter {
      opacity: 1;
      transform: scale(1);
    }
    
    .btn_next {
      position: absolute; right: 0; bottom: 0; 
      width: 1rem; height: 1rem;
      // border-radius: 1000px;
      // background: red;
      z-index: 1000;
    }
  }
</style>

<template>
  <div class="Pages rem_height"
  :class="class_"
  @touchstart="touchstart($event)"
  @touchmove="touchmove($event)"
  @touchend="touchend($evnet)">
    <flip-book :img="img" :change="change" :dispatch="dispatch"></flip-book>
    <!-- <fader :img="img" :current="change.page"></fader> -->
    <fog></fog>
    <snow-confetti :change="change"></snow-confetti>
    <div class="btn_next"
    @click="next"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      change: {},
      img: {},
      dispatch: {}
    },
    data: function(){
      return {
        class_: 'hidden',
        x0: null,
        x1: null,
        dx: 0
      }
    },
    components: {
      Fader: require('./Fader.vue'),
      FlipBook: require('./FlipBook.vue'),
      Fog: require('./Fog.vue'),
      SnowConfetti: require('./SnowConfetti.vue'),
    },
    watch: {
      'change.stage': function(nv){
        if(nv===1){
          this.class_ = '';
          setTimeout(()=>{
            this.class_ = 'enter';
          },50);
        }else if(nv===0){
          this.class_ = '';
          setTimeout(()=>{
            this.class_ = 'hidden';
          },1000);
        }
      }
    },
    methods: {
      touchstart: function(e){
        this.x0 = null;
        this.x1 = null;
        this.dx = 0;
        this.x0 = e.changedTouches[0].pageX;
      },
      touchmove: function(e){
        e.preventDefault();
        this.x1 = e.changedTouches[0].pageX;
        this.dx += this.x1-this.x0;
        this.x0 = e.changedTouches[0].pageX;
      },
      touchend: function(e){
        console.log(this.dx)
        if( this.dx<-4 ){
          this.next();
        }else if( this.dx>4 ){
          this.prev();
        }
      },
      next: function(){
        if( this.change.page<3 ){
          this.dispatch({
            type: 'SWITCH',
            page: this.change.page+1
          })
        };
      },
      prev(){
        if( this.change.page>0 ){
          console.log(this.change.page)
          this.dispatch({
            type: 'SWITCH',
            page: this.change.page-1
          })
        }else{
          this.dispatch({
            type: 'SWITCH',
            stage: 0
          })
        }
      }
    }
  }
</script>