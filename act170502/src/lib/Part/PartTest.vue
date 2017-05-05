<style lang="less" scoped>
  .TestPart {
    padding-bottom: 1.08rem;
    overflow: hidden;
    .title {
      width: 100%;
    }
    .before {
      padding-top: 0.24rem;
      .p0 {
        font-size: 0.28rem; color: #908c88;
        text-align: center;
      }
      .p1 {
        margin-bottom: 0.55rem;
        font-size: 0.28rem; color: #c55c36;
        text-align: center;
      }
      .btn_to_test {
        width: 4.29rem;
        margin: auto; 
        // margin-bottom: 0.9rem;
      }
    }
    .booksss {
      width: 100%;
      overflow: hidden;
      .tri {
        float: left;
        .cover {
          width: 1.7rem; height: 2.25rem;
          margin-bottom: 0.14rem;
          background: white;
        }
        &:nth-child(1) {
          margin-left: 0.8rem; margin-right: 0.44rem;
        }
        &:nth-child(2) {
          margin-right: 0.44rem;
        }
        .name__ {
          font-size: 0.28rem; color: #908c88;
          text-align: center;
        }
        .small_btn {
          width: 100%; height: 0.5rem;
          font-size: 0.28rem; line-height: 0.5rem;
          text-align: center;
          border-radius: 0.04rem;
          color: #f8eac1;
          background: #8d2620;
          &.disabled {
            background: #555555;
            color: #222222;
          }
          &.active {
            background: #745f44;
          }
        }
      }
    }
    .after {
      
    }
  }
</style>

<template>
  <div class="TestPart" v-if=" meta.batch==='one'&&meta.share===false ">

    <img class="title" :src=" img+'/test_title.png' "/>

    <div class="before" v-show="ques.finalScore===0">
      <p class="p0">5道题测测你在书中的角色属性</p>
      <p class="p1">完成测试任选1本免费读</p>

      <books-three :pickable="false"></books-three>

      <div style="height:0.41rem;"></div>
      <img class="btn_to_test" :src=" img+'/btn_to_test.png' "
      @click="TO_QUES"/>
    </div>

    <div class="after" v-show="ques.finalScore!==0">
      <after-test></after-test>
    </div>

    
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
      BooksThree: require('./BooksThree.vue'),
      AfterTest: require('./AfterTest.vue')
    },
    data: function(){
      return {
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
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