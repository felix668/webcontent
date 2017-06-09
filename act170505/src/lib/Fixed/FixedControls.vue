<style lang="less" scoped>
  .Controls {
    position: fixed; left: 0; bottom: 0;
    width: 100%;
    z-index: 100;
    .console_img {
      width: 100%;
    }
    .fp {
      position: absolute; left: 3.1rem; top: 0.1rem;
      width: 1.27rem;
      transition-property: transform;
      transition-duration: 0.3s;
      transform: scale(1);
      &.active {
        transform: scale(0.9);
      }
    }
    .wdw {
      position: absolute; top: 1.14rem;
      width: 0.51rem; height: 0.56rem;
      overflow: hidden;
      &.wdw1 {
        left: 1.08rem;
        .scroller {
          top: -45%;
        }
      }
      &.wdw2 {
        left: 2.04rem;
        .scroller {
          top: -170%;
        }
      }
      &.wdw3 {
        left: 4.95rem;
        .scroller {
          top: -230%;
        }
      }
      &.wdw4 {
        left: 5.86rem;
        .scroller {
          top: -295%;
        }
      }
      .scroller {
        position: absolute; left: 0;
        width: 100%;
        &.active {
          animation: scroll 1s linear infinite;
        }
        .chars {
          width: 0.42rem; margin: auto;
        }
      }
      .shadow {
        position: absolute; left: 0; top: 0;
        width: 100%;
      }
      @keyframes scroll {
        100% {
          transform: translate3d(0,-33.333333%,0);
        }
      }
    }
    p {
      position: absolute; left: 0; bottom: 0;
      width: 100%;
      line-height: 0.4rem;
      font-size: 0.24rem; color: #d1cfcf;
      text-align: center;
    }
  }
</style>

<template>
  <div class="Controls">
    <img class="console_img" :src=" img+'main/console.png' "/>
    <img class="fp" :src=" img+'main/fp.png' "
    :class="fp"
    @touchstart="touchstart($event)"
    @touchend="touchend($event)"
    @touchcancel="touchend($event)"/>
    <div class="wdw" v-for="i in 4"
    :class=" 'wdw'+i ">
      <div class="scroller"
      :class="class_">
        <img class="chars" :src="img+'/main/chars.jpg'"/>
        <img class="chars" :src="img+'/main/chars.jpg'"/>
        <img class="chars" :src="img+'/main/chars.jpg'"/>
      </div>
      <img class="shadow" :src=" img+'/main/shadow.png' "/>
    </div>
    <p>按下指纹选择你的阅读主义</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        fp: '',
        class_: ''
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      }
    },
    methods: {
      touchstart(e){
        e.stopPropagation();
        e.preventDefault();
        this.fp = 'active';
        this.class_ = 'active';
        this.$store.dispatch({type:'PLAY_SLOGAN'});
      },
      touchend(e){
        e.stopPropagation();
        this.fp = '';
        this.class_ = '';
        this.$store.dispatch({type:'STOP_SLOGAN'});
      }
    }
  }
</script>