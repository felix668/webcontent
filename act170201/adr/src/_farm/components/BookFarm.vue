<template>
<div class="BookSpace rem_height"
@touchstart="handleClick">
  <img class="whale" :src="img+'/bg_cover_2.png'"/>
  <div class="to_enter_1123">点击进入书的世界</div>
  <div class="book"
  :style=" 'background-image:url('+img+'/cover.jpg);background-size:100% 100%;' "
  >
    <div class="page__" 
    v-for="(a,i) in pages"
    :class="a.state"
    :style=" 'z-index:'+(100-i) ">
      <div class="face front">
        <img class="tiny_cover" :src=" img+'/cover.png' "/>
        <cover-snow-confetti :change="change"></cover-snow-confetti>
      </div>
      <div class="face back">
      </div>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.BookSpace {
  position: relative;
  width: 100%; height: 100vh;
  perspective: 1000px;
  overflow: hidden;
  .whale {
    width: 100%;
  }
  .to_enter_1123 {
    position: absolute; left: 1.89rem; top: 10.71rem;
    font-size: 0.28rem; color: #d0cfce;
    z-index: 999;
  }
  .book {
    position: absolute; left: 0.77rem; top: 4.17rem;
    width: 4.62rem; height: 6.14rem;
    background: white;
    perspective: 1000px;
    .page__ {
      position: absolute; left: 0; top: 0;
      width: 100%; height: 100%;
      transition: transform 1s ease-in-out;
      transform-origin: 0 50%;
      transform-style: preserve-3d;
      &.turned {
        transform: rotateY(-180deg);
      }
    }
    .tiny_cover {
      width: 100%; height: 100%;
    }
    .front, .back {
      backface-visibility: hidden;
      position: absolute; left: 0; top: 0;
      width: 100%; height: 100%;
      //border-radius: 0.1rem;
      transform-style: preserve-3d;
      p {
        width: 3rem;
        margin: auto;
        text-align: center;
        background: red;
        font-size: 0.3rem;
        //transform: translate3d(0,1rem,1rem);
        //box-shadow: 0 0 1rem red;
      }
      /*
      img {
        width: 2rem;
        margin: auto;
        transform: translate3d(0,2rem,4rem);
      }
      */
    }
    .front {
      //background: orange;
      z-index: 2;
      //perspective: 1000px;
      transform-style: preserve-3d;
      overflow: hidden;
      &.two {
        //transform: rotateY(180deg);
      }
    }
    .back {
      background: #e5eefa;
      transform: rotateY(180deg);
      &.two {
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    img: {},
    change: {},
    dispatch: {}
  },
  components: {
    CoverSnowConfetti: require('./CoverSnowConfetti.vue')
  },
  data: function(){
    return {
      openedBefore: false,
      changing: false,
      state: '',
      pages: [{
        state: ''
      }],
      current: 0
    }
  },
  watch: {
    current: function(nv,ov){
      // this.pages.forEach((a,i)=>{
      //  if(ov===i){
      //    a.state = 'turned';
      //  }
      // })
      this.changing = true;
      setTimeout(()=>{
        this.changing = false;
      },1000)

      if( nv===1 ){
        this.pages[0].state = 'turned';
        setTimeout(()=>{
          this.dispatch({
            type: 'SWITCH',
            stage: 1
          })
        },600)
      }else{
        this.pages[0].state = '';
      }
    },
    'change.stage': function(nv){
      if( nv===0 ){
        this.current--;
      }
    }
  },
  mounted: function(){
    // setTimeout(()=>{
    //  if( this.openedBefore===false ){
    //    this.current++;
    //  };
    // },3000)
  },
  methods: {
    handleClick: function(){
      if( !this.changing ){
        document.querySelector('audio').play();
        this.openedBefore = true;
        this.current++;
      };
        
    }
  }
}

</script>