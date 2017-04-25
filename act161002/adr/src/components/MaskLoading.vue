<template>
	<div class="mask-loading" :style=" 'display:'+display+';' ">
		<p class="_text">加载中...</p>
	</div>
</template>

<style lang="less" scoped>
.mask-loading {
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: white;
	z-index: 9999;
	._text {
		padding: 10px 0;
		font-size: 18px;
		color: grey;
		text-align: center;
	}
}
</style>

<script>
module.exports = {
	data: function(){
		return {
			display: 'block'
		}
	},
	mounted: function(){
		var self = this;
		var body = document.querySelector('body');
		body.style.overflow = 'hidden';
		window.addEventListener('load',function(){
			setTimeout(()=>{
				window.scroll(0,0);
				self.display = 'none';
				body.style.overflow = 'scroll';
			},0)
		})
	}
}
</script>