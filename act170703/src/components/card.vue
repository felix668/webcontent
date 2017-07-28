<style lang="sass">
@import "../css/common";
.list{
    padding: .46rem .4rem 0;
    box-sizing: border-box;
   li{
        width: 100%;
        height: 2.94rem;
        border-bottom: .03rem dashed;
        // border-radius: 0.4rem;
        -webkit-box-sizing:border-box;
        padding-top: .62rem;
        position:relative;
        // &::after{
        //   content:""; position:absolute;bottom:0;left:.48rem;right:.48rem;margin:0 auto;border-bottom: .02rem dashed rgb(197, 205, 221);
        // }
        .desc{
            height: 0.62rem;
            line-height: 1;
            font-size: 0.28rem;
            text-align: center;
            white-space:nowrap;
            // margin-top: 0.5rem;
            span{
                display: inline-block;
                font-weight:bold;
            }
            .num{
                font-size: .36rem;
                
            }
            .fw{
                
                font-size:.46rem;
            }
            .text{
                font-size: 0.28rem;
                margin-left: 2px;
                position:relative;
            }
            .symbol{
                margin: 0.07rem 0.05rem 0 0.05rem;
                vertical-align: top;
            }
            .i-coin{
                // display: inline-block;
                position:absolute;
                top:-.45rem;
                left:0;
                width: 0.41rem;
                height: 0.4rem;
                background: url(../../img/i-coin.png) no-repeat top center;
                background-size: 100% auto;
                // vertical-align: top;
                // margin-left: 0.10rem;
            }
            .i-coupon{
                // display: inline-block;
                position:absolute;
                top:-.45rem;
                left:0;
                width: 0.41rem;
                height: 0.4rem;
                background: url(../../img/i-coupon.png) no-repeat top center;
                background-size: 100% auto;
                // vertical-align: top;
                // margin-left: 0.10rem;
                // margin-top: 0rem;
            }
        }
        .btn-charge{
            width: 5.98rem;
            height: .94rem;
            line-height: .94rem;
            border-radius: 0.28rem;
            margin: 0.16rem auto 0;
            font-size: .42rem;
            text-align: center;
            font-weight:bold;
            overflow: hidden;
            position: relative;
        }
    }
}
</style>
<template>
    <ul class="list">
        <li v-for="(item, index) in list" :style="styleObj.list_li">
            <div class="desc" :style="styleObj.desc">
                <span class="num fw">{{ item.coin }}</span><span class="text">{{text1}}<i class="i-coin"></i></span>
                <span class="symbol">+</span>
                <span class="num">{{ item.coupon }}</span><span class="text">{{text2}}<i class="i-coupon"></i></span>
                <span class="symbol">+</span>
                <span class="num">{{ item.coin }}</span><span class="text">积分</span>
            </div>
            <div class="btn-charge" :style="styleObj.btn_charge" @click="doCharge(item.coin)">
                充{{ item.charge }}元领取
            </div>
        </li>
    </ul>
</template>
<script>
    module.exports =  {
        props: ['card','isLogin'],
        data (){
            return {
                list:window.pt == "ios" ? this.card.listios : this.card.listadr,
                text1:window.pt == "ios" ? '阅点' : '书币',
                text2:window.pt == "ios" ? '阅券' : '书券',
            };
        },
        computed: {
            styleObj(){
                return {
                    list_li: {
                        borderColor: this.card.card_border
                        // backgroundColor: this.card.card_bg
                    },
                    desc: {
                        color: this.card.card_font
                        // textShadow: '0.03rem 0 0.005rem '+this.card.card_border+',0 0.03rem 0.005rem '+this.card.card_border+',-0.03rem 0 0.005rem '+this.card.card_border+',0 -0.03rem 0.005rem '+this.card.card_border+''
                    },
                    btn_charge: {
                        // color: this.card.card_btnfont,
                        color:"#fff",
                        backgroundColor: this.card.btn_bg,
                        boxShadow:`0 .06rem ${this.card.btn_shadow}`
                    }
                };
            }
        },
        methods: {
            doCharge(count){
                if(this.isLogin){
                    Local.forceLog(common.param('act_f'),`CZlogin${count}`);
                }else{
                    Local.forceLog(common.param('act_f'),`CZlogout${count}`);
                }
                if (!this.isLogin) {
                    Local.login();
                    return;
                }         
                Local.doCharge('act',count);
            }
        }
    };
</script>
