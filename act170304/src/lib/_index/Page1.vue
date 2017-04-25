<style lang="less" scoped>
  .Page1 {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    .paper {
      position: absolute; left: 0.5rem; top: 0.3rem;
      width: 6.5rem;
      &.small {
        left: 0.75rem;
        width: 6rem;
      }
    }
    .btn_to_listen {
      position: absolute; left: 1.85rem; 
      // top: 10.3rem;
      bottom: 0.5rem;
      width: 3.8rem; height: 1.04rem;
    }
  }
</style>

<template>
  <div class="Page1">
    <img class="paper" :class="class_" :src=" img+'/paper.png' "/>
    <div class="btn_to_listen"
    :style=" 'background-image:url('+img+'/btn_to_listen.png);background-size:3.8rem 1.04rem;' "
    @click="$store.dispatch({type:'TO_LISTEN_BOOK'})">
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {

    },
    data: function(){
      return {
        class_: ''
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      }
    },
    watch: {

    },
    mounted: function(){
      window.addEventListener('DOMContentLoaded',()=>{
        var w = rem.w;
        var h = rem.h;
        var ratio = h/w;
        console.log(ratio);
        if( ratio<1.4 ){
          this.class_ = 'small';
        }
      });
    }
  }
</script>