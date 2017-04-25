<style lang="less" scoped>
  .PageEntry {
    position: fixed; left: 0; top: 0;
    width: 100%; height: 100%;
    background: white;
    z-index: 99;
    .text_entry {
      position: fixed; left: 0.24rem; bottom: 2rem;
      width: 7.02rem;
    }
    .btn_join {
      position: fixed; left: 2.1rem; bottom: 0.5rem;
      width: 3.31rem;
    }
  }
</style>

<template>
  <transition name="fade">
    <div class="PageEntry" v-if=" !meta.share&&done===false " v-show=" stage.current===0 "
    :style=" 'background-image:url('+img+'/main/bg_entry.png);background-size:100% auto;' ">

      <img class="text_entry" :src=" img+'/main/text_entry.png' "/>

      <img class="btn_join" :src=" img+'/main/btn_join.png' "
      @click="$store.dispatch({type:'CHANGE_MAIN',to:1})"/>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    computed: {
      done(){
        return this.$store.state.done;
      },
      img(){
        return this.$store.state.img;
      },
      meta(){
        return this.$store.state.meta;
      },
      stage(){
        return this.$store.state.stage;
      }
    },
    methods: {
      CHANGE_MAIN(){

      }
    }
  }
</script>