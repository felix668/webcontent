<style lang="less" scoped>
  .PartBatchTwo {
    overflow: hidden;
    .title {
      width: 100%;
      margin-bottom: 0.58rem;
    }
    .p0 {
      margin-bottom: 0.2rem;
      font-size: 0.28rem; color: #c55c36;
      text-align: center;
    }
    .btn_share_to_read {
      width: 4.29rem;
      margin: auto; 
      margin-bottom: 0.62rem;
    }
    .btn_share_again {
      width: 4.29rem;
      margin: auto; 
      margin-bottom: 0.62rem;
    }
    .btn_to_reader {
      width: 4.29rem;
      margin: auto; 
      margin-bottom: 0.9rem;
    }
  }
</style>

<template>
  <div class="PartBatchTwo" v-if=" meta.batch==='two' ">

    <img class="title" :src=" img+'/title_batch_two.png' "/>
    <books-three :pickable="books.shared"></books-three>
    <div style="height:0.46rem;"></div>

    <div v-if=" meta.share===false ">
      <p class="p0"
      v-if="books.shared===false">分享后立刻点击“回到QQ阅读”获得限免</p>

      <img class="btn_share_to_read" :src=" img+'/btn_share_to_read.png' "
      v-if="books.shared===false"
      @click="$store.dispatch({type:'SHARE'})"/>
      <img class="btn_share_again" :src=" img+'/btn_share_again.png' "
      v-if="books.shared===true"
      @click="$store.dispatch({type:'SHARE'})"/>
    </div>

    <div v-if=" meta.share===true ">
      <p class="p0">去QQ阅读选1本经典书限时免费读5天</p>
      <img class="btn_to_reader" :src=" img+'/btn_to_reader.png' "
      @click="$store.dispatch({type:'TO_APP'})"/>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      BooksThree: require('./BooksThree.vue')
    },
    data: function(){
      return {
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
      user(){
        return this.$store.state.user;
      },
      meta(){
        return this.$store.state.meta;
      },
      books(){
        return this.$store.state.books;
      },
    },
    methods: {
    }
  }
</script>