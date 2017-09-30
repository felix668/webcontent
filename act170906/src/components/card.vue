<template>
    <ul class="list">
        <li v-for="(item, index) in list" :style="styleObj.list_li">
            <div class="desc" :style="styleObj.desc">
                <strong class="num fw">{{ item.coin }}</strong><strong class="text">{{text1}}<i class="i-coin" :class="{'i-yue': plat == 'ios'}"></i></strong>
                <strong class="symbol">+</strong>
                <strong class="num">{{ item.coupon }}</strong><strong class="text">{{text2}}<i class="i-coupon"></i></strong>
                <strong class="symbol">+</strong>
                <strong class="num">{{ item.coupon }}</strong><strong class="text">漫画抵扣券<i class="i-quan"></i></strong>
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
                plat: window.pt
            };
        },
        computed: {
            styleObj(){
                return {
                    list_li: {
                        borderColor: this.card.card_border
                    },
                    desc: {
                        color: this.card.card_font
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
