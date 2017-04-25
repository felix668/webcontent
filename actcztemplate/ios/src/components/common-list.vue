<style lang="sass">
.common-list-box{
    overflow: hidden;
}
.common-title{
    width: 100%;
    margin-bottom: 0.42rem;
}
.cs-card-list{
    overflow: hidden;
    margin-bottom: 0.42rem;
    & li{
        width: 3.34rem;
        height: 2.34rem;
        float: left;
        margin-right: 0.10rem;
        background-size: 3.34rem 2.34rem;
        background-repeat: no-repeat;
        overflow: hidden;
        text-align: center;
        &:nth-child(2n){
            margin-right: 0;
        }
        & .more-charge-desc{
            height: 1.42rem;
            overflow: hidden;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            & .morechar-desc-box{
                margin-top: 0.32rem;
                &.add{
                    padding-top: 0.20rem;
                    flex: 0 0 0.50rem;
                }
                & span{
                    display: inline-block;
                    line-height: 0.40rem;
                    font-weight: 700;
                    font-size: 0.40rem;
                }
            }
        }
        & .morechar-btn{
            display: block;
            position: relative;
            width: 3.34rem;
            height: 0.92rem;
            line-height: 0.90rem;
            font-size: 0.36rem;
            font-weight: 700;
            overflow: hidden;
            background-size: 3.34rem 0.92rem;
            background-repeat: no-repeat;
            &:active{
                opacity: 0.94;
            }
        }
    }
}

.cl-card-list{
    overflow: hidden;
    margin-bottom: 0.40rem;
    & li{
        width: 6.78rem;
        height: 2.34rem;
        overflow: hidden;
        background-size: 6.78rem 2.34rem;
        background-repeat: no-repeat;
        margin-bottom: 0.42rem;
        & .desc{
            height: 1.24rem;
            line-height: 1;
            font-size: 0.36rem;
            text-align: center;
            padding-top: 0.38rem;
            box-sizing: border-box;
            & span{
                display: inline-block;
            }
            & .num{
                font-size: 0.52rem;
                font-weight: 700;
                vertical-align: top;
                margin-top: -0.06rem;
            }
            & .text{
                font-size: 0.36rem;
                margin-left: 2px;
                vertical-align: top;
                margin-top: 0.04rem;
            }
            & .symbol{
                margin: 0.00rem 0.05rem 0 0.05rem;
                vertical-align: top;
            }
            & i.i-coin{
                display: inline-block;
                width: 0.46rem;
                height: 0.46rem;
                background: url(../../img/i-coin.png) no-repeat top center;
                background-size: 0.46rem 0.46rem;
                vertical-align: top;
                margin-left: 0.10rem;
                margin-top: -0.02rem;
            }
            & i.i-coupon{
                display: inline-block;
                width: 0.46rem;
                height: 0.46rem;
                background: url(../../img/i-coupon.png) no-repeat center center;
                background-size: 0.46rem 0.46rem;
                vertical-align: top;
                margin-left: 0.10rem;
                margin-top: -0.03rem;
            }
        }
        & a.btn-charge{
            display: block;
            width: 6.78rem;
            height: 1.10rem;
            line-height: 0.90rem;
            font-size: 0.36rem;
            text-align: center;
            font-weight: 700;
            overflow: hidden;
            position: relative;
            background-size: 6.78rem 1.10rem;
            background-repeat: no-repeat;
            &:active{
                opacity: 0.94;
            }
        }
    }
}

</style>
<template>
<div class="common-list-box">
    <img class="common-title" :src="commonlist.title_bg">
    <ul class="cs-card-list" v-if="commonlist.short_list">
        <li v-for="item in commonlist.short_list" :style="{backgroundImage: 'url(' +item.card_bg+')'}">
            <a href="javascript:;" @click="doCharge(item.coin, false)">
                <div class="more-charge-desc" :style="{color: item.desc_color}">
                    <div class="morechar-desc-box">
                        <span>{{ item.coin }}</span><br>书币
                    </div>
                    <div class="morechar-desc-box add">
                        +
                    </div>
                    <div class="morechar-desc-box">
                        <span>{{ item.coupon }}</span><br>书券
                    </div>
                </div>
                <div class="morechar-btn" :style="{backgroundImage: 'url(' +item.btn_bg+')', color: item.btn_color}">
                    充{{ item.charge }}元领取
                </div>
            </a>
        </li>
    </ul>

    <ul class="cl-card-list" v-if="commonlist.long_list">
        <li v-for="item in commonlist.long_list" :style="{backgroundImage: 'url(' +item.card_bg+')'}">
            <div class="desc" :style="{color: item.desc_color}">
                <span class="text"><strong>{{ item.coin }}</strong>书币</span><i class="i-coin"></i>
                <span class="symbol">+</span>
                <span class="num">{{ item.coupon }}</span><span class="text">书券</span><i class="i-coupon"></i>
            </div>
            <a href="javascript:;" class="btn-charge" :style="{backgroundImage: 'url(' +item.btn_bg+')', color: item.btn_color}" @click="doCharge(item.coin, false)">
                <i v-if="item.tagText && item.tagText !== '' ">{{ item.tagText }}</i>
                充{{ item.charge }}元领取
            </a>
        </li>
    </ul>
</div>
</template>
<script>
    module.exports =  {
        props: ['commonlist','islogin'],
        data: function(){
            return {

            };
        },
        methods: {
            initPage: function () {

            },
            doCharge: function (count, isFirst) {
                var self = this;
                if(self.isLogin){
                    if(isFirst){
                        forceLog(param('act_f'),'FIRSTCZlogin'+count);
                    }else{
                        forceLog(param('act_f'),'CZlogin'+count);
                    }
                }else{
                    if(isFirst){
                        forceLog(param('act_f'),'FIRSCZlogout'+count);
                    }else{
                        forceLog(param('act_f'),'CZlogout'+count);
                    }
                }
                Local.openrecharge('act','');
            }
        },
        created: function(){
            this.initPage();
        }
    };
</script>
