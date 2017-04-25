<style lang="less" scoped>
  .Incoming {
    position: absolute; left: 0; top: 0;
    width: 100%; height: 100%;
    transition-property: transform,opacity;
    transition-duration: 1s;
    opacity: 0;
    transform: scale(0.7);
    z-index: 20;
    &.active {
      opacity: 1;
      transform: scale(1);
    }
    .img_ {
      width: 100%;
    }
  }
</style>

<template>
  <div class="Incoming"
  :class="class_">
    <img class="img_" :src=" img+'/test/incoming.jpg' "/>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        class_: ''
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
      change(){
        return this.$store.state.change;
      }
    },
    watch: {
      'change.stage': function(nv){
        if( nv===1 ){
          this.class_ = 'active';
        }
      }
    }
  }
</script>
