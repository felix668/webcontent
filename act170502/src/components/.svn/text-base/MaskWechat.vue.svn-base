<template>
<div class="MaskWechat"
v-show="mask_wechat.show"
@click="$store.dispatch({type:'HIDE',what:'mask_wechat'})">
	<img class="" :src=" img+'/common/mask_wechat.png' "/>
</div>
</template>

<style lang="less" scoped>
.MaskWechat {
	@grey: #d8d8d8;

	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	// transition: opacity 1s;
	img {
		position: absolute; right: 0.8rem; top: 0.1rem;
		width: 3.77rem;
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
		},
		mask_wechat(){
			return this.$store.state.mask_wechat;
		}
	},
	methods: {

	}
};
</script>