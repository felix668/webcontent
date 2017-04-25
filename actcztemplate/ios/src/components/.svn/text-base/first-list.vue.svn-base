<style lang="sass">
.f-card-list{
    overflow: hidden;
    margin-bottom: 0.80rem;
    & li{
        width: 3.34rem;
        height: 2.34rem;
        float: left;
        margin-right: 0.10rem;
        background-size: 3.34rem 2.34rem;
        background-repeat: no-repeat;
        &:nth-child(2n){
            margin-right: 0;
        }
        & .first-charge-desc{
            height: 1.42rem;
            overflow: hidden;
            & .firchar-title{
                font-size: 0.24rem;
                line-height: 1;
                margin-top: 0.20rem;
                text-align: center;
            }
            & .firchar-detail{
                font-size: 0.28rem;
                line-height: 0.36rem;
                margin-top: 0.34rem;
                text-align: center;
                & span{
                    font-size: 0.36rem;
                    font-weight: 700;
                }
            }
        }
        & .firchar-btn{
            display: block;
            position: relative;
            height: 0.92rem;
            line-height: 0.90rem;
            font-size: 0.36rem;
            font-weight: 700;
            overflow: hidden;
            background-size: 3.34rem 0.92rem;
            background-repeat: no-repeat;
            text-align: center;
            &:active{
                opacity: 0.94;
            }
        }
    }
}
</style>
<template>
    <ul class="f-card-list">
        <li v-for="(item, index) in firstlist" :style="{backgroundImage: 'url(' +item.card_bg+')'}">
            <a href="javascript:;" @click="doCharge(item.coin, true)">
                <div class="first-charge-desc" :style="{color: item.desc_color}">
                    <p class="firchar-title">仅限首次充值用户</p>
                    <div class="firchar-detail">
                        <span>{{ item.coin }}</span>书币 + <span>{{ item.coupon }}</span>书券
                    </div>
                </div>
                <div class="firchar-btn" :style="{backgroundImage: 'url(' +item.btn_bg+')',color: item.btn_color}">
                    <em v-if="item.tagText">推荐</em>
                    充{{ item.charge }}元领取
                </div>
            </a>
        </li>
    </ul>
</template>
<script>
    module.exports =  {
        props: ['firstlist','islogin'],
        data: function(){
            return {

            };
        },
        methods: {
            initPage: function () {
                window.console.log(this.firstlist);
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
