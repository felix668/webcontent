<style lang="sass">
.rule-box{
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
    padding-bottom:1.8rem;
    & .rule-hd{
        display: block;
        // width: 3.24rem;
        width:100%;
        // height: 0.76rem;
        margin: .78rem auto 0;
    }
    & .rule-bd{
      border-spacing:0;
      border-collapse:collapse;
      font-size: .28rem;
      margin: 0 .24rem;
      box-sizing: border-box;
      margin-top: 0.12rem;
    }
    & .rule-bd tr{
      display: block;
      padding:.1rem 0;
    }
    & .rule-bd tr td{
      line-height: .5rem;
      vertical-align: top;
    }
}
p.copyright{
    font-size: 0.24rem;
    text-align: center;
    line-height: 1;
    margin-top: 0.39rem;
    margin-bottom: 1rem;
}
</style>
<template>
    <div class="rule-box" :style="styleObj.rule_box">
        <img class="rule-hd" :src="rule.rule_hd" />
        <table class="rule-bd" :style="styleObj.rule_bd">
            <tr v-for="(item, index) in text">
                <td>{{ index+1 }}.</td>
                <td>{{ item }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    module.exports =  {
        props: ['rule'],
        components: {
        },
        data: function(){
            return {
                text: window.pt == "ios" ? this.rule.textios : this.rule.textadr
            };
        },
        created: function(){

        },
        computed: {
            styleObj: function(){
                return {
                    rule_box: {
                        // backgroundColor:this.rule.bgcolor,
                        backgroundImage: `url(${this.rule.bottom_bg})`
                    },
                    rule_bd: {
                        color: this.rule.rule_color
                    },
                    copyright: {
                        color: this.rule.copyright_color
                    }
                };
            }
        },
        methods: {

        }
    };
</script>
