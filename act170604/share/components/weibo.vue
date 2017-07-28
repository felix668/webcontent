<template>
	<div class="maskbrow" @click="closemask()">
		<img :src="'images/browers.png'" />
	</div>
</template>
<style lang="scss" scoped>
.maskbrow{
	position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.8); z-index:100;
    img{
      display: block;
      width: 5.58rem;
      height: 3.28rem;
      float:right;
      margin:.2rem .4rem;
    }
}
</style>
<script>
module.exports = {
    data: function(){
      return {
      }
    },
    methods: {
      closemask: function(){
        this.$parent.wb=false;
      }
    }
};
</script>