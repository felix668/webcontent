<template>
    <div class="rule-box" :style="styleObj.rule_box">
        <strong class="rule-title">-活动规则-</strong>
        <table class="rule-bd">
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
                        backgroundImage: `url(${this.rule.bottom_bg})`,
                        backgroundSize: '2.31rem .85rem'
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
