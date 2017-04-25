<template>
	<div class="mask-over" v-show="over">
		<img :src="img.over">
	</div>
</template>

<style lang="less" scoped>
	.mask-over {
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: white;
		z-index: 99;
		img {
			position: absolute; left: 0; right: 0; top: 0; bottom: 0;
			margin: auto;
			width: 5rem;
		}
	}
</style>

<script>
module.exports = {
	props: ['over'],
	watch: {
		over: function(new_val){
			var body = document.querySelector('body');
			if(new_val===true){
				body.style.overflow = 'hidden';
			}else{
				body.style.overflow = 'scroll';
			}
		}
	},
	data: function(){
		return {
			img: {
				over: './img/over.png'
			}
		}
	}
}
</script>
