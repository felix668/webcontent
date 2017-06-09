<template>
	<div class="Explosion">
		<img :src=" img+'/chips.png' "/>
	</div>
</template>

<style lang="less" scoped>
	.Explosion {
		position: absolute; top: 0; left: 0;
		height: 1.15rem;
		img {
			position: absolute;
			height: 100%;
			animation: explosion666 3s infinite ease-out;
		}
	}
	@keyframes explosion666 {
		0% {
			opacity: 1;
			transform: scale(0);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			img: {}
		}
	}
</script>