<template>
<transition name="scale">
	<div class="MaskDone" v-show="pic.done">
		<img class="card" :src=" img+'/main/cards/'+(pic.bg)+'.jpg' "/>
		<img class="slogan" :src=" img+'/main/slogan/'+(pic.slogan)+'.png' "/>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskDone {
	z-index: 800;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	overflow: hidden;
	background: white;
	.card {
		width: 100%;
	}
	.slogan {
		position: absolute; left: 0; top: 0;
		width: 100%;
	}
}
</style>

<script>
export default {
	computed: {
		img(){
			return this.$store.state.img;
		},
		pic(){
			return this.$store.state.pic;
		}
	},
	mounted: function(){
	},
	methods: {
	}
};
</script>