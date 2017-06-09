<template>
	<div class="MaskShare"
	v-show="mask.show"
	@click="hide">
		<img :src=" img+'/text_share.png' "/>
	</div>
</template>

<style lang="less" scoped>
	.MaskShare {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 9999;
		img {
			position: absolute; right: 0.69rem; top: 0.23rem;
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
		mask(){
			return this.$store.state.mask_share;
		}
	},
	data: function(){
		return {
		}
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		},
		hide: function(){
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_share'
			})
		}
	}
}
</script>
