<style lang="less" scoped>
  .part_take {
    box-sizing: border-box;
    position: relative;
    padding: 0 0.3rem;
    margin-bottom: 0.58rem;
    overflow: hidden;
    z-index: 10;
    .cover_ {
      position: absolute; left: 0.3rem; top: 0;
      width: 4.26rem;
    }
    .clickable {
      position: absolute; left: 0.3rem; top: 0;
      width: 2.2rem; height: 2.88rem;
      z-index: 50;
    }
    .banner_take {
      width: 4.21rem;
      margin: auto; margin-bottom: 0.05rem;
    }

    .top__ {
      position: relative;
      box-sizing: border-box;
      width: 6.9rem;
      margin: auto;
      margin-bottom: 0.76rem;
      overflow: hidden;
      .left_ {
        position: relative;
        float: left;
        width: 2.3rem; height: 10px;
        overflow: hidden;
        z-index: 1;
        .book {
          width: 2.06rem;
          margin-top: 0.36rem;
        }
      }
      .right_ {
        float: left;
        width: 4.56rem;
        overflow: hidden;
        .p_title {
          margin-top: 0.05rem;
          margin-bottom: 0.22rem;
          font-size: 0.28rem;
          font-weight: 600;
        }
        .p_author, .p_price {
          margin-bottom: 0.1rem;
          font-size: 0.24rem;
          color: #494949;
        }
        .p_text {
          // width: 4.26rem;
          margin-bottom: 0.1rem;
          font-size: 0.24rem; line-height: 0.36rem;
          text-align: justify;
          color: #494949;
          span {
            color: black;
          }
        }
        .subscribe {
          float: left;
          box-sizing: border-box;
          padding: 0.1rem 0.24rem;
          border-radius: 0.05rem;
          border: 1px solid #a98966;
          font-size: 0.28rem;
          text-align: center;
          color: #a98965;
          &:active {
            background: #a98965;
            // background: url('/../img/main/cover.png');
            color: white;
          }
          span {
            color: black;
          }
        }
      }
    }

    .trash {
      width: 100%;
      overflow: hidden;
      .p_intro {
        margin-bottom: 0.2rem;
        font-size: 0.24rem;
        text-align: center; color: #a98965;
      }
      .btn_take {
        width: 6.27rem;
        margin: auto;
      }
    }
    
  }
</style>

<template>
  <div class="part_take">
    <img class="cover_" :src=" img+'/main/cover.png' "/>
    <div class="clickable" @click="click_cover"></div>

    <div class="top__">
      <div class="left_">
        <!-- <img class="book" :src=" img+'/main/book_2.png' "/> -->
      </div>
      <div class="right_">
        <p class="p_title">白鹿原</p>
        <p class="p_author">陈忠实 | 小说</p>
        <p class="p_price">{{data.price}}元/本</p>
        <p class="p_text">
          一部渭河平原五十年变迁的史诗，一轴中国农村班斓多彩、触目惊心的长幅画卷。
        </p>
        <p class="subscribe"
        v-show=" data.bought_before===false&&data.bought===false "
        @click="$store.dispatch({type:'TO_BUY'})">
          立即订阅
        </p>
        <p class="subscribe"
        v-show=" data.bought_before===true||data.bought===true "
        @click="$store.dispatch({type:'TO_READ',bid:812443})">
          去阅读
        </p>
      </div>
    </div>

    <div class="trash"
    v-show=" data.bought_before===false&&data.bills_taken===0 ">
      <div class="p_intro">
        活动期间订阅《白鹿原》即可领取全额{{name_bill}}
      </div>
      <img class="btn_take" :src=" img+'/main/btn_take_'+meta.platform+'.png' "
      @click="$store.dispatch({type:'TO_TAKE'})"/>
    </div>

    <div class="trash"
    v-show=" data.bought_before===true ">
      <div class="p_intro">
        对不起，只有活动期间订阅的用户才能参与返{{name_bill}}活动哦
      </div>
      <img class="btn_take" :src=" img+'/main/btn_take_disabled_'+meta.platform+'.png' "/>
    </div>

    <div class="trash"
    v-show=" data.bills_taken>0 ">
      <div class="p_intro">
        您已领取过{{name_bill}}
      </div>
      <img class="btn_take" :src=" img+'/main/btn_take_disabled_'+meta.platform+'.png' "/>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      name_bill() {
        return this.$store.getters.name_bill;
      },
      img() {
        return this.$store.state.img;
      },
      data() {
        return this.$store.state.data;
      },
      meta() {
        return this.$store.state.meta;
      }
    },
    methods: {
      click_cover() {
        if (this.meta.share) {
          this.$store.dispatch({
            type: 'TO_PAGE_MAIN'
          })
        } else {
          Local.forceLog(common.param('act_f'), `to_book`);
          this.$store.dispatch({
            type: 'TO_BOOK',
            bid: 812443
          })
        }
      }
    }
  }
</script>