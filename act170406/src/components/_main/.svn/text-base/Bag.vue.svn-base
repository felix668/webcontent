<style lang="less" scoped>
  .Bag {
    position: relative;
    width: 100%; height: 7.62rem;
    margin-bottom: 0.57rem;
    .coin_0 {
      position: absolute; left: 0; top: -0.52rem;
      width: 0.94rem;
    }
    .coin_1 {
      position: absolute; left: 0.58rem; top: 5.68rem;
      width: 0.49rem;
    }
    .coin_2 {
      position: absolute; left: 2.04rem; top: 1.62rem;
      width: 0.56rem;
    }
    .coin_3 {
      position: absolute; left: 4.74rem; top: 3.24rem;
      width: 0.35rem;
    }
    .coin_4 {
      position: absolute; left: 6.24rem; top: 4.62rem;
      width: 0.6rem;
    }
    .coin_5 {
      position: absolute; left: 6.58rem; top: 2rem;
      width: 0.6rem;
    }

    .rp_0 {
      position: absolute; left: 0.44rem; top: 2.37rem;
      width: 1.89rem;
    }
    .rp_1 {
      position: absolute; left: 1.16rem; top: 1.08rem;
      width: 0.92rem;
    }
    .rp_2 {
      position: absolute; left: 2.4rem; top: 0.48rem;
      width: 1.92rem;
    }
    .rp_3 {
      position: absolute; left: 3.75rem; top: 2.24rem;
      width: 0.97rem;
    }
    .rp_4 {
      position: absolute; left: 4.84rem; top: 0.24rem;
      width: 1.34rem;
    }
    .rp_5 {
      position: absolute; left: 5.06rem; top: 1.78rem;
      width: 2.02rem;
    }

    .layer-10 {
      z-index: 10;
    }
    .layer-20 {
      z-index: 20;
    }
    .layer-30 {
      z-index: 30;
    }

    .bag_img {
      position: absolute; left: 0.99rem; top: 3.38rem;
      width: 5.08rem;
    }
    .btn_draw {
      position: absolute; left: 2.77rem; top: 5.2rem;
      width: 1.96rem;
    }
    .panel_success {
      position: absolute; left: 0.59rem; top: 3.76rem;
      width: 6.32rem;
      .img {
        width: 100%;
      }
      .content {
        position: absolute; left: 0; top: 0;
        width: 100%; height: 100%;
        overflow: hidden;
        .p0 {
          font-size: 0.32rem; font-weight: 600;
          color: #b94136;
          text-align: center;
          margin-top: 1.16rem; margin-bottom: 0.24rem;
        }
        .p1 {
          font-size: 0.5rem; font-weight: 600; line-height: 0.74rem;
          color: #b94136;
          text-align: center;
          vertical-align: middle;
          margin-bottom: 0.24rem;
          .aaa {
            display: inline-block;
            height: 0.74rem;
            vertical-align: middle;
          }
          .bbb {
            display: inline-block;
            height: 0.74rem;
            vertical-align: middle;
            font-size: 0.72rem; line-height: 0.74rem;
          }
        }
        .check {
          position: absolute; right: 0.64rem; bottom: 0.68rem;
          font-size: 0.28rem; color: #764a2b;
        }
      }
    }
    .panel_out {
      position: absolute; left: 0.59rem; top: 3.76rem;
      width: 6.32rem;
    }
  }
</style>

<template>
  <div class="Bag">
    <img class="coin_0 a-float-1800" :src=" img+'main/coin_0.png' "/>
    <img class="coin_1 a-float-coin-1000" :src=" img+'main/coin_1.png' "/>
    <img class="coin_2 a-float-coin-1500" :src=" img+'main/coin_2.png' "/>
    <img class="coin_3 a-float-coin-1000" :src=" img+'main/coin_3.png' "/>
    <img class="coin_4 a-float-2000" :src=" img+'main/coin_4.png' "/>
    <img class="coin_5 a-float-2000" :src=" img+'main/coin_5.png' "/>

    <div style="height:3.54rem;"></div>

    <img class="rp_0 a-float-1800 layer-10" :src=" img+'main/rp_0'+(meta.ios?'_ios':'')+'.png' "/>
    <img class="rp_1 a-float-1800" :src=" img+'main/rp_1'+(meta.ios?'_ios':'')+'.png' "/>
    <img class="rp_2 a-float-2000 layer-10" :src=" img+'main/rp_2'+(meta.ios?'_ios':'')+'.png' "/>
    <img class="rp_3 a-float-1800" :src=" img+'main/rp_3'+(meta.ios?'_ios':'')+'.png' "/>
    <img class="rp_4 a-float-1800" :src=" img+'main/rp_4'+(meta.ios?'_ios':'')+'.png' "/>
    <img class="rp_5 a-float-1800 layer-10" :src=" img+'main/rp_5'+(meta.ios?'_ios':'')+'.png' "/>

    <img class="bag_img" :src=" img+'main/bag_2'+(meta.ios?'_ios':'')+'.png' "
    :class="class_"/>

    <img class="btn_draw" :src=" img+'main/btn.png' "
    @click="click"/>

    <transition name="scale">
      <div class="panel_success layer-20" v-show=" lottery.state==='success'||lottery.state==='done' ">
        <img class="img" :src=" img+'/main/panel_success.png' "/>
        <div class="content">
          <p class="p0">{{lottery.state==='success'?'恭喜你':'您已经'}}</p>
          <p class="p1"><span class="aaa">获得</span><span class="bbb">{{lottery.coins}}</span><span class="aaa">{{meta.ios?'阅':'书'}}券</span></p>
          <p class="check"
          @click="$store.dispatch({type:'TO_ACCOUNT'})">查看{{meta.ios?'阅':'书'}}券明细 ></p>
        </div>
      </div>
    </transition>
    <transition name="scale">
      <img class="panel_out layer-20" v-show=" lottery.state==='out' " :src=" img+'/main/panel_out.png' ">
    </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        state: '',
        class_: ''
      }
    },
    computed: {
      meta(){
        return this.$store.state.meta;
      },
      img(){
        return this.$store.state.img;
      },
      lottery(){
        return this.$store.state.lottery;
      },
      user(){
        return this.$store.state.user;
      }
    },
    watch: {
      // 'lottery.state': function(nv){
      //   if( nv==='success' ){
      //     this.class_ = 'ani-rubber-band';
      //   }
      // }
    },
    methods: {
      click(){
        if( this.meta.share ){
          this.$store.dispatch({
            type: 'TO_APP'
          })
        }else if( this.user.loggedIn===false ){
          this.$store.dispatch({
            type: 'TO_LOGIN'
          });
        }else if( this.lottery.state==='ready' ){
          this.class_ = 'ani-rubber-band';
          this.$store.dispatch({
            type: 'DRAW_LOTTERY'
          });
        }
      }
    }
  }
</script>