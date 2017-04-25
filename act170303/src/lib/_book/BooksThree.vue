<style lang="less" scoped>
.BooksThree {

  .pss {
    margin-bottom: 0.55rem;
    .p0 {
      font-size: 0.28rem; color: #c55c36;
      text-align: center;
    }
    .p1 {
      font-size: 0.28rem; color: #908c88; 
      text-align: center;
    }
  }

  .the_books {
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
        color: #908c88;
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

}
</style>

<template>
  <div class="BooksThree">
    <div class="pss" v-if="pickable===true">
      <p class="p0" v-show=" meta.batch==='one' ">任选一本书免费读</p>
      <p class="p1" v-if="books.picked>0">已选《{{iii}}》,免费读至{{books.expired_at}}</p>
    </div>

    <div class="the_books">
      <div class="tri" v-for="(a,i) in books.books">

        <img class="cover"
        :src=" img+'/covers/'+a.bid+'.png' "
        @click="$store.dispatch({type:'TO_BOOK',bid:a.bid})"/>

        <p class="name__">{{a.title}}</p>

        <div style="height:0.15rem;" v-if="pickable===true"></div>

        <div class="small_btn"
        v-if=" pickable===true&&books.picked===0 "
        @click="$store.dispatch({type:'PICK_BOOK_CONFIRM',bid:a.bid})">选TA免费读</div>
        <div class="small_btn disabled"
        v-if=" pickable===true&&books.picked!==0&&books.picked!==a.bid ">选TA免费读</div>
        <div class="small_btn active"
        v-if=" pickable===true&&books.picked===a.bid "
        @click="$store.dispatch({type:'TO_READ',bid:a.bid})">去阅读</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['pickable'],
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
      },
      iii(){
        var iii;
        this.$store.state.books.books.forEach((a,i)=>{
          if(a.bid===this.$store.state.books.picked){
            iii = a.title;
          }
        });
        return iii;
      }
    },
  }
</script>