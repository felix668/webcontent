<style lang="less" scoped>
  .end-page {
    width: 100%; height: 100vh;
    background: #ebeae6;
    overflow: hidden;
    .content__ {
      position: relative;
      width: 100%; height: 1000px;
    }
    .text_top {
      box-sizing: border-box;
      width: 100%;
      padding: 0 0.4rem;
      padding-top: 0.4rem;
      margin-bottom: 0.56rem;
      font-size: 0.28rem; line-height: 0.48rem; color: #666666;
    }
    .text_title {
      margin-bottom: 0.18rem;
      font-size: 0.6rem; text-align: center; color: #676b74;
    }
    .text_sub {
      display: table;
      float: right;
      height: 0.38rem;
      margin-bottom: 0.38rem;
      overflow: hidden;
      p {
        float: left;
        line-height: 0.38rem;
        font-size: 0.36rem; text-align: right; color: #676b74;
      }
      img {
        float: left;
        height: 0.38rem;
        margin-left: 0.24rem;
        margin-right: 0.4rem;
      }
    }
    .text_what {
      clear: both;
      line-height: 0.36rem;
      margin-bottom: 0.68rem;
      font-size: 0.36rem; text-align: center; color: #676b74;
    }
    .btn_read {
      width: 4.7rem; 
      margin: auto; margin-bottom: 0.12rem;
    }
    .btnsContainer {
      position: fixed; left: 0; bottom: 0.5rem;
      width: 100%;
      .btns {
        display: table;
        margin: auto;
        overflow: hidden;
        .btn_share {
          float: left;
          width: 2.3rem; height: 0.85rem;
          margin-right: 0.62rem;
          border-radius: 0.18rem;
          background: #c3b9b1;
          font-size: 0.32rem; color: white; text-align: center; line-height: 0.85rem;
        }
        .btn_replay {
          float: left;
          width: 2.3rem; height: 0.85rem;
          // margin-right: 0.62rem;
          border-radius: 0.18rem;
          background: #c3b9b1;
          font-size: 0.32rem; color: white; text-align: center; line-height: 0.85rem;
        }
      }
    }
  }
</style>

<template>
  <div class="end-page rem_height" v-show="change.stage===1"
  :style=" 'background-image:url('+img+'/bg.jpg);background-size:4rem 4rem;' ">
    <div class="content__"
    :style=" 'background-image:url('+img+'/bg.jpg);background-size:4rem 4rem;' ">
      <div class="text_top">
        春天接羔，夏天催膘，秋天配种，冬天孕育。羊的一生是牧人的一年，牧人的一生呢？这绵延千里的家园，这些大地最隐秘微小的褶皱，这每一处最狭小脆弱的栖身之地……青春啊，财富啊，爱情啊，希望啊，全都默默无声……
      </div>

      <div class="text_title">
        《冬牧场》
      </div>

      <div class="text_sub">
        <p>——李娟著</p><img :src=" img+'/to_learn.png' " @click="show"/>
      </div>
       <div class="text_what">
        她的散文被称为本世纪最后的散文
      </div>

      <img class="btn_read" :src=" img+'/btn_read.png' "
      @click="dispatch({type:'CONTINUE'})"/>
      <comments :change="change" :dispatch="dispatch"></comments>
      <!-- <smoky-text></smoky-text> -->
      <div class="btnsContainer">
        <div class="btns">
          <div class="btn_share"
          @click="dispatch({type:'SHARE'})">
            分享
          </div>
          <div class="btn_replay" @click="dispatch({type:'REPLAY'})">
            再看一遍
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      change: {},
      dispatch: {},
      img: {}
    },
    components: {
      Comments: require('./Comments.vue'),
      SmokyText: require('./SmokyText.vue'),
    },
    methods: {
      show: function(){
        this.dispatch({
          type: 'SHOW',
          what: 'mask_author'
        })
      }
    }
  }
</script>