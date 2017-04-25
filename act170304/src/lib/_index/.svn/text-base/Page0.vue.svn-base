<style lang="less" scoped>
  .Page0 {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    .frame {
      position: fixed; left: 0.75rem; top: 7.2rem;
      width: 6rem; height: 1.2rem;
      background: rgba(228,221,193,0.6);
      border-radius: 0.1rem;
      &.below {
        background: transparent;
      }
    }
    .title_text {
      position: fixed; left: 1.175rem; 
      top: 7.35rem;
      width: 5.15rem;
      &.below {
        top: 10.5rem;
      }
    }
  }
</style>

<template>
  <div class="Page0">
    <div class="frame" :class="class_">
    </div>
    <img class="title_text" :class="class_" :src=" img+'/title_text.png' "/>
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
        if( ratio>1.5224 ){
          this.class_ = 'below';
        }

      });
    }
  }
</script>