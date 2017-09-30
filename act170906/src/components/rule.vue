
<template>
    <div class="rule-box" :style="styleObj.rule_box">
        <img class="rule-hd" :src="rule.rule_hd" />
        <table class="rule-bd" :style="styleObj.rule_bd">
            <tr v-for="(item, index) in text">
                <td>{{ index+1 }}</td>
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
