<style lang="less" scoped>
  .Fog {
    position: absolute; left: 100%; top: 2.08rem;
    width: 67.5rem; height: 9.51rem;
    animation: 30s fog linear infinite;
    overflow: hidden;
    z-index: 99;
    .img {
      float: left;
      width: 60rem; height: 100%;
      margin-right: 7.5rem;
    }
    &.leave {
      transition: opacity 1s;
      opacity: 0;
    }
    &.hidden {
      display: none;
    }
  }
  @keyframes fog {
    0% {}
    100% {
      transform: translate3d(-100%,0,0);
    }
  }
</style>

<template>
  <div class="Fog"
  :class="class_">
    <div class="img"
    :style=" 'background-image:url('+img+'/fog.png); background-size:15rem auto;' "></div>
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
      'change.page': function(nv,ov){
        if( nv===3 ){
          this.class_ = 'leave';
          setTimeout(()=>{
            this.class_ = 'hidden';
          },1000)
        }else if( nv===2&&ov===3 ){
          this.class_ = '';
        }
      }
    }
  }
</script>