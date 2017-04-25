<template>
	<div class="MaskLoading">
		<p class="_text"><img :src="'images/loading.png'" />正在加载...</p>
	</div>
</template>

<style lang="less" scoped>
.MaskLoading {

	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: #f9e4d3;
	z-index: 9999;
	._text {
		padding: 16px 0;
		font-size: 0.28rem;
		color: #999;
		text-align: center;
		img{
		   -webkit-animation:rotate 1s linear infinite; 
		   width:40px; 
		   height:40px; 
		   display:inline-block; 
		   margin:0 auto .05rem;
		}
	}
	@-webkit-keyframes rotate{
		0%{-webkit-transform:rotate(0deg)}
		100%{-webkit-transform:rotate(360deg);}
	}
}
</style>

<script>
module.exports = {
	data: function(){
		return {
		}
	},
	mounted: function(){
	}
}
</script>