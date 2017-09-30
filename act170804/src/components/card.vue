<template>
    <ul class="list">
        <li v-for="(item, index) in list" :style="styleObj.list_li" :key="item.coupon">
            <div class="desc" :style="styleObj.desc">
                <ul>
                    <li>
                        <span :class="[{yq: isiOS},{num:true},{sb:true}]">{{ item.coin }}</span>
                        <br>
                        <span class="text">{{text1}}</span>
                    </li>
                    <li>
                        <span class="num sq"> {{ item.coupon }}</span>
                        <br>
                        <span class="text">{{text2}}</span>
                    </li>
                    <li>
                        <span class="num mh"> {{ item.coupon }}</span>
                        <br>
                        <span class="text">漫画抵扣券</span>
                    </li>
                </ul>
                <span class="symbol">+</span>
                <span class="symbol">+</span>
            </div>
            <div class="btn-charge" :style="styleObj.btn_charge" @click="doCharge(item.coin)">
                充{{ item.charge }}元领取
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['card','isLogin'],
        data(){
            return {
                isiOS: window.pt == "ios",
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
                        color:"#fcf09e",
                        backgroundColor: this.card.btn_bg,
                        boxShadow:`0 .06rem ${this.card.btn_shadow}`
                    }
                };
            }
        },
        methods: {
            doCharge(count){
                console.log(count)
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
