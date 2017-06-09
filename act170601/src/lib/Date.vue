<style lang="less" scoped>
  .Date {
    position: absolute; left: 6.46rem; top: 6rem;
    width: 0.3rem;
    line-height:  0.32rem;
    // letter-spacing: 10px;
    font-size: 0.28rem; text-shadow: 0 0 10px #fff;
    // -webkit-text-stroke-width: 1px;
    // -webkit-text-stroke-color: #dad9d7;
    // z-index: 999;
    .first_ {
      margin-bottom: 0.2rem;
    }
  }
</style>

<template>
  <div class="Date">
    <p class="first_">二零一七年{{months}}月{{days}}日</p>
    <p>遇见</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        years: '',
        months: '',
        days: ''
      }
    },
    created: function(){
      var months = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
      var days = ['--',
        '一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五',
        '十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五',
        '二十六','二十七','二十八','二十九','三十','三十一'];
      var date = new Date();
      this.months = months[ date.getMonth() ];
      this.days = days[ date.getDate() ];
    }
  }
</script>