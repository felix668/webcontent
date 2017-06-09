<template>
	<div class="MaskLoading">
		<p class="_text">加载中...</p>
	</div>
</template>

<style lang="less" scoped>
.MaskLoading {
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: white;
	z-index: 9999;
	._text {
		padding: 10px 0;
		font-size: 0.28rem;
		color: grey;
		text-align: center;
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