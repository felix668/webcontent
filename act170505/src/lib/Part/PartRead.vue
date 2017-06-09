<style lang="less" scoped>
  .ReadPart {
    .title {
      width: 7.5rem;
      margin-bottom: 0.6rem;
    }
    .middle_part {
      position: relative;
      width: 100%; height: 2.84rem;
      overflow: hidden;
      .cover {
        position: absolute; left: 0.3rem; top: 0; 
        width: 2.06rem;
      }

      .right-1 {
        float: right;
        width: 4.58rem; margin-right: 0.3rem;
        .orange {
          margin-bottom: 0.17rem;
          font-size: 0.32rem; color: #deb158;
        }
        .text11 {
          font-size: 0.28rem; line-height: 0.42rem;
          color: #908c88;
        }
      }
    }
    .btn_to_boiler {
      width: 5.49rem; margin: auto;
      margin-bottom: 0.9rem;
    }
  }
</style>

<template>
  <div class="ReadPart">
    <img class="title" :src=" img+'/read_title.png' "/>
    <div class="middle_part">

      <img class="cover" :src=" img+'/cover.png' "/>
    
      <div class="right-1">
        <p class="orange">
          万界天尊
        </p>
        <p class="text11">
          天，高高在上，威严莫测！一只信念坚定的井底之蛙，一步一步走出混浊的深井，终将这周天万界一口吞下！这是一个有志者事竟成的故事！
        </p>
      </div>
    </div>
    <img class="btn_to_boiler" :src=" img+'/btn_to_boiler.png' "
    @click="$store.dispatch({type:'TO_BOILER'})"/>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      img(){
        return this.$store.state.img;
      }
    }
  }
</script>