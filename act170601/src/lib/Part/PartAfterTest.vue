<style lang="less" scoped>  
  .AfterTest {
    padding-top: 0.3rem;
    .replay {
      float: right;
      width: 1.75rem;
      margin-right: 0.3rem;
      margin-bottom: 0.42rem;
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
    }
    .to_showoff {
      width: 4.29rem; margin: auto;
      margin-bottom: 0.68rem;
    }
  }
</style>

<template>
  <div class="AfterTest" v-show="ques.finalScore!==0">
    <img class="replay" :src=" img+'/replay.png' "
    @click="$store.dispatch({type:'TO_QUES'})"/>
    <div style="clear:both"></div>
    <p class="title_">你{{ques.result.title}}</p>
    <p class="desc_">{{ques.result.desc}}</p>
    <img class="to_showoff" :src=" img+'/btn_showoff.png' "
    @click="$store.dispatch({type:'SHARE'})"/>

    <books-three :pickable="true"></books-three>

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
      books(){
        return this.$store.state.books;
      },
      ques(){
        return this.$store.state.ques;
      },
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