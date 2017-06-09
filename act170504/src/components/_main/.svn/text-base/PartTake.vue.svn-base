<style lang="less" scoped>
  .part_take {
    position: relative;
    margin-bottom: 0.52rem;
    overflow: hidden;
    z-index: 10;
    .banner_take {
      width: 4.21rem;
      margin: auto; margin-bottom: 0.05rem;
    }
    .p_intro {
      margin-bottom: 0.22rem;
      font-size: 0.24rem; line-height: 0.32rem;
      text-align: center; color: #888888;
    }
    .panel_pink {
      box-sizing: border-box;
      width: 6.9rem;
      padding: 0 0.2rem;
      border-radius: 0.2rem;
      margin: auto;
      box-shadow: 0 0 1rem #e6d1c8 inset;
      background: #f0e1da;
      .part0 {
        width: 100%; min-height: 3.38rem;
        border-bottom: 1px solid #d6c1b8;
        overflow: hidden;
        .left_ {
          float: left;
          width: 2.17rem;
          overflow: hidden;
          .book {
            width: 2.06rem;
            margin-top: 0.36rem;
          }
        }
        .right_ {
          float: left;
          overflow: hidden;
          .p_title {
            margin-top: 0.42rem;
            margin-bottom: 0.12rem;
            font-size: 0.32rem;
          }
          .p_text {
            width: 4.26rem;
            font-size: 0.28rem; line-height: 0.42rem;
            text-align: justify;
            color: #8f7169;
            span {
              color: black;
            }
          }
          .learn_more {
            width: 4.26rem;
            padding-bottom: 0.2rem;
            font-size: 0.28rem; line-height: 0.42rem;
            text-align: right;
            color: black;
            span {
              color: black;
            }
          }
        }
      }
      .part1 {
        padding-top: 0.18rem;
        overflow: hidden;
        .p0 {
          margin-bottom: 0.2rem;
          font-size: 0.24rem;
          text-align: center;
          color: #8f7169;
        }
        .btn_to_take {
          width: 4.23rem;
          margin: auto;
          margin-bottom: 0.24rem;
        }
      }
    }
  }
</style>

<template>
  <div class="part_take">
    <img class="banner_take" :src=" img+'/main/banner_take.png' "/>
    <div class="p_intro">
      QQ阅读请你读《欢乐颂2》(订阅多少返多少)<br/>
      共300万{{name_bill}}，先到先得
    </div>
    <div class="panel_pink">
      <div class="part0"
      @click="$store.dispatch({type:'TO_BOOK_ODE'})">
        <div class="left_">
          <img class="book" :src=" img+'/main/book_2.png' "/>
        </div>
        <div class="right_">
          <p class="p_title">欢乐颂2</p>
          <p class="p_text">
            贫寒HR樊胜美、文艺闺秀关雎尔、小城姑娘邱莹莹与海归金领安迪、富二代小妖精曲筱绡，在欢乐颂小区上演中国都市版“老友记”。
          </p>
          <p class="learn_more">
            了解更多 >
          </p>
        </div>
      </div>

      <div class="part1">
        <p class="p0">
          点击书封进入书籍详情页，再点击下载即可订阅<br/>
          <span style="
          color: #3e9ea0;
          ">订阅后返回当前活动页领取{{name_bill}}</span>
        </p>
        <img class="btn_to_take" :src=" img+'/main/btn_to_take'+(meta.platform==='adr'?'_adr':'_ios')+'.png' "
        v-show=" data.out===false "
        @click="$store.dispatch({type:'TO_TAKE'})"/>

        <img class="btn_to_take" :src=" img+'/main/btn_out.png' "
        v-show=" data.out===true "/>
      </div>
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
    }
  }
</script>