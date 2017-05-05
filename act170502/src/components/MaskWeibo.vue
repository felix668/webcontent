<template>
<div class="MaskWeibo">
	<img class="" :src=" img+'/common/mask_weibo.png' "/>
</div>
</template>

<style lang="less" scoped>
.MaskWeibo {
	@grey: #d8d8d8;

	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	transition: opacity 1s;
	img {
		position: absolute; right: 0; top: 0;
		width: 5.58rem;
	}
}
</style>

<script>
export default {
	computed: {
		img(){
			return this.$store.state.img;
		},
		meta(){
			return this.$store.state.meta;
		}
	},
	methods: {

	}
};
</script>