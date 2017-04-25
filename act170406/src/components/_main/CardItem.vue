<style lang="less" scoped>
  .CardItem {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    .red_overlay {
      position: absolute; left: 0.03rem; top: 3.58rem; 
      width: 6.08rem; height: 2.34rem;
      z-index: 100;
      .title {
        box-sizing: border-box;
        width: 100%;
        padding: 0 0.3rem;
        font-size: 0.32rem; color: white;
        text-align: center;
        margin-top: 0.28rem; margin-bottom: 0.16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .intro {
        display: table;
        box-sizing: border-box;
        width: 100%; height: 0.84rem;
        overflow: hidden;
        padding-left: 0.28rem; padding-right: 0.28rem;
        .cell {
          display: table-cell;
          width: 100%; height: 0.84rem;
          overflow: hidden;
          font-size: 0.24rem; line-height: 0.42rem;
          text-align: center;
          color: #f1d985;
          vertical-align: middle;
        }
      }
    }
    .bottom_ {
      position: absolute; left: 0rem; top: 5.58rem; 
      width: 100%;
      z-index: 101;
      .btn {
        width: 3.22rem; height: 0.76rem;
        margin: auto; 
        // margin-bottom: 0.55rem;
        border-radius: 0.1rem;
        background: #f2d07c;
        font-size: 0.32rem; line-height: 0.76rem;
        color: #333333;
        text-align: center;
      }
      .two_ {
        overflow: hidden;
        .left_ {
          float: left;
          width: 2.1rem;
          overflow: hidden;
          .book {
            position: relative;
            width: 1.61rem; height: 2.05rem;
            margin-left: 0.3rem;
            perspective: 10rem;
            .cover {
              position: absolute; left: 0.19rem; top: 0;
              width: 1.7rem; height: 1.88rem;
              transform-origin: 0% 50%;
              transform: rotateY(35deg);
            }
          }
        }
        .right_ {
          float: left;
          overflow: hidden;
          .book_name {
            width: 3rem;
            // margin-top: 0.12rem; 
            margin-bottom: 0.12rem;
            font-size: 0.32rem;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .book_time {
            width: 3.6rem;
            margin-bottom: 0.24rem;
            font-size: 0.24rem;
            color: #999999;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
          }
          .to_read {
            width: 1.41rem; height: 0.46rem;
            line-height: 0.46rem;
            background: #f2d17b;
            border-radius: 0.1rem;
            font-size: 0.24rem;
            text-align: center;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="CardItem"
  :style=" 'background-image:url('+img+'/main/panel_2.png);background-size:100% auto;' ">
    <video-card :id="a.id"></video-card>
    <div class="red_overlay"
    :style=" 'background-image:url('+img+'/main/overlay.png);background-size:100% auto;' ">
      <p class="title">{{a.name}}朗诵{{a.book.name}}</p>
      <div class="intro">
        <div class="cell">{{a.intro}}</div>
      </div>
    </div>
    <div class="bottom_">
      <div style="width:100%;height:0.76rem;margin-bottom:0.3rem;">
        <div class="btn" v-if=" a.book.zid "
        @click="$store.dispatch({type:'TO_ZHUAN_TI',zid: a.book.zid,id:a.id})">了解{{a.name}}</div>
      </div>
      <div class="two_">
        <div class="left_">
          <div class="book"
          :style=" 'background-image:url('+img+'/main/book.png);background-size:100% auto;' "
          @click="$store.dispatch({type:'TO_BOOK',bid:a.book.bid})">
            <img class="cover" :src=" img+'/main/covers/'+a.book.bid+'.jpg' "/>
          </div>
        </div>
        <div class="right_">
          <p class="book_name">{{a.book.name}}</p>
          <p class="book_time">{{a.book.intro}}</p>
          <div class="to_read"
          @click="$store.dispatch({type:'TO_READ',bid:a.book.bid,id:a.id})">
            立即阅读
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      a: {}
    },
    components: {
      VideoCard: require('./VideoCard.vue'),
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
    }
  }
</script>