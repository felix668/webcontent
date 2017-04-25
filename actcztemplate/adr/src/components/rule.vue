<style lang="sass">
.rule-box{
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
    & .rule-hd{
        display: block;
        width: 6.78rem;
    }
    & .rule-bd{
      font-size: 0.28rem;
      margin-top: 0.38rem;
    }
    & .rule-bd tr{
      display: block;
    }
    & .rule-bd tr td{
      line-height: 0.42rem;
      vertical-align: top;
    }
    & .logo{
        display: block;
        margin: 0.70rem auto 0;
        width: 2.30rem;
        height: 0.86rem;
        margin-bottom: 0.30rem;
    }
}

</style>
<template>
    <div class="rule-box" :style="{backgroundImage: 'url(' +rule.bottom_bg+')', color: rule.color}">
        <img class="rule-hd" :src="rule.title" />
        <table class="rule-bd" :style="{color: rule.color}">
            <tr v-for="(item, index) in rule.text">
                <td>{{ index+1 }}.</td>
                <td>{{ item }}</td>
            </tr>
        </table>
        <img class="logo" :src="rule.logo">
    </div>
</template>
<script>
    module.exports =  {
        props: ['rule'],
        data: function(){
            return {

            };
        },
        created: function(){

        },

        methods: {

        }
    };
</script>
