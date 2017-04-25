<style lang="less" scoped>
  .IconBroadcast {
    position: absolute; left: 0.92rem; top: 0.27rem;
    width: 0.4rem; height: 0.5rem;
    z-index: 1000;
    ._bar {
      position: absolute;
      transform-origin: 0% 100%;
      opacity: 0;
      &.active {
        opacity: 1;
      }
      &:nth-child(1) {
        left: 0; top: 0.15rem;
        width: 0.15rem; height: 0.2rem;
      }
      &:nth-child(2) {
        left: 0.14rem; top: 0.07rem;
        width: 0.13rem; height: 0.36rem;
      }
      &:nth-child(3) {
        left: 0.24rem;
        width: 0.15rem; height: 0.5rem;
      }
    }

  }
</style>

<template>
  <div class="IconBroadcast">
    <img class="_bar"
    v-for="(a,i) in bars"
    :src=" img+'/bc_'+i+'.png' "
    :class=" '_bar'+i+' '+a.class_ "/>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        id: null,
        bars: [{
          class_: 'active'
        },{
          class_: 'active'
        },{
          class_: 'active'
        }]
      }
    },
    watch: {
      // 'change': function(nv){

      // }
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
      audio(){
        return this.$store.state.audio;
      }
    },
    watch: {
      'audio.on': function(nv){
        if( nv===true ){
          this.play();
        }else{
          this.stop();
        }
      }
    },
    mounted: function(){
    },
    methods: {
      play(){
        this.bars[0].class_ = '';
        this.bars[1].class_ = '';
        this.bars[2].class_ = '';
        var tick = -1;
        this.id = setInterval(()=>{
          if( tick===-1 ){
            this.bars[0].class_ = '';
            this.bars[1].class_ = '';
            this.bars[2].class_ = '';
          }else{
            this.bars[tick].class_ = 'active';
          }
          if( tick<2 ){
            tick++;
          }else{
            tick = -1;
          }
        },500)
      },
      stop(){
        clearInterval(this.id);
        this.bars[0].class_ = 'active';
        this.bars[1].class_ = 'active';
        this.bars[2].class_ = 'active';
      }
    }
  }
</script>