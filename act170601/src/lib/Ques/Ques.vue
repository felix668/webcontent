<style lang="less" scoped>
  .Ques {
    padding-top: 0.78rem;
    .hex {
      width: 1.18rem; height: 1.38rem;
      margin: auto; margin-bottom: 0.58rem;
      font-size: 0.48rem; line-height: 1.38rem; text-align: center; color: #cccccc;
    }
    .ask {
      padding: 0 0.5rem; margin-bottom: 0.86rem;
      font-size: 0.44rem; line-height: 0.72rem;
      font-weight: 600; color: #deb158;
    }
    .option {
      width: 6.48rem; height: 1.18rem;
      margin: auto; margin-bottom: 0.28rem;
      font-size: 0.32rem; color: #f2dbb5;
      text-align: center; line-height: 1.18rem;
      &.active {
        color: #a08861;
      }
    }
  }
</style>

<template>
  <div class="Ques" v-show=" ques.state!=='done' ">
    <div class="hex" :style=" 'background-image:url('+img+'/hex.png);background-size:100% 100%;' ">
      {{ques.current+1}}/5
    </div>
    <p class="ask">{{ques.questions[ques.current].ask}}</p>
    <div class="option" v-for="(a,i) in ques.questions[ques.current].options"
    :style=" (i===ques.picked&&ques.status==='pending')?
      'background-image:url('+img+'/option_active.png);background-size:100% 100%;color:#a08861;':
      'background-image:url('+img+'/option.png);background-size:100% 100%;' "
    key="i"
    @click="$store.dispatch({type:'ANSWER_ONE',i:i})">
      {{a.option}}
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    components: {
    },
    data: function(){
      return {
      }
    },
    computed: {
      img(){
        return this.$store.state.img;
      },
      ques(){
        return this.$store.state.ques;
      }
    },
    methods: {
    }
  }
</script>