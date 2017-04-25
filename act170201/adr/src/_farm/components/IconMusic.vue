<style lang="less" scoped>
  .IconMusic {
    position: absolute; right: 0.64rem; top: 0.62rem;
    width: 0.46rem; height: 0.4rem;
    z-index: 1000;
    ._bar {
      position: absolute;
      width: 0.1rem; height: 0.4rem;
      background: #5e4b4b;
      transform-origin: 0% 100%;
      transform: scaleY(0.4);
      border-radius: 0.05rem;
      opacity: 0.6;
    }
    ._bar0 {
      &.active {
        animation: 1.2s jump226 infinite 0s;
      }
    }
    ._bar1 {
      left: 0.18rem;
      &.active {
        animation: 1.2s jump226 infinite 0.2s;
      }
    }
    ._bar2 {
      left: 0.36rem;
      &.active {
        animation: 1.2s jump226 infinite 0.4s;
      }
    }
    @keyframes jump226 {
      0% {
        transform: scaleY(0);
      }
      50% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0);
      }
    }
  }
</style>

<template>
  <div class="IconMusic"
  v-show="change.stage===1&&change.page<3"
  @click="$store.dispatch({type:'TURN_MUSIC'})">
    <div class="_bar _bar0"
    :class=" music.on?'active':'' "></div>
    <div class="_bar _bar1"
    :class=" music.on?'active':'' "></div>
    <div class="_bar _bar2"
    :class=" music.on?'active':'' "></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        show: false
      }
    },
    watch: {
      // 'change': function(nv){

      // }
    },
    computed: {
      change(){
        return this.$store.state.change;
      },
      music(){
        return this.$store.state.music;
      }
    }
  }
</script>