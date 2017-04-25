<style lang="less" scoped>
  .PartShare {
    padding-bottom: 1.94rem;
    overflow: hidden;
    .title {
      width: 100%;
      margin-bottom: 0.4rem;
    }

    .title_ {
      padding-left: 0.5rem; padding-right: 0.5rem;
      margin-bottom: 0.24rem;
      font-size: 0.4rem;
      color: #deb158;
      text-align: center;
    }
    .desc_ {
      margin-bottom: 0.66rem;
      padding-left: 0.5rem; padding-right: 0.5rem;
      color: #908c88;
      font-size: 0.32rem; line-height: 0.48rem;
      text-align: justify;
    }

    .btn_shared {
      width: 4.29rem;
      margin: auto; 
      margin-bottom: 0.47rem;
    }
    .p0 {
      margin-bottom: 0.35rem;
      font-size: 0.28rem; color: #c55c36;
      text-align: center;
    }

  }
</style>

<template>
  <div class="PartShare" v-if=" meta.batch==='one'&&meta.share===true ">

    <img class="title" :src=" img+'/test_title.png' "/>

    <p class="title_">{{user.name}}{{ques.result.title}}</p>
    <p class="desc_">{{ques.result.desc}}</p>

    <img class="btn_shared" :src=" img+'/btn_shared.png' "
    @click="$store.dispatch({type:'TO_APP'})"/>
    <p class="p0">在QQ阅读完成测试，以下经典书任选免费读</p>

    <books-three :pickable="false"></books-three>
    
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      BooksThree: require('lib/_book/BooksThree.vue')
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
      ques(){
        return this.$store.state.ques;
      }
    },
    methods: {
      TO_QUES(){
        this.$store.dispatch({
          type: 'TO_QUES'
        });
      }
    }
  }
</script>