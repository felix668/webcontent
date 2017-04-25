<template>
<div class="img-blurred">
	<img class="img-1" :src="img.pic"/>
	<img class="img-2" :src="img.pic"/>
</div>
</template>

<style lang="less" scoped>
.img-blurred {
	position: relative;
	width: 50%; height: 3.5rem;
	margin: auto;
	.img-1 {
		position: absolute; left: 0; top: 0;
		display: block;
		width: 100%;
		z-index: 2;
	}
	.img-2 {
		display: block;
		width: 90%; height: 3rem;
		margin: auto;
		filter: blur(0.4rem);
	}
}
</style>

<script>
module.exports = {
	data: function(){
		return {
			img: {
				pic: 'img/pic.jpg'
			}
		}
	}
}
</script>