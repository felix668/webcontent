<template>
	<div id="root">
		112222
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		
	}
</style>

<script type="text/javascript">
	import store from '../store/store.red.js';

	export default {
		components: {
			//Debugger: require('../lib/Debugger.vue'),
			//MaskLoading: require('../lib/MaskLoading.vue'),
			//MaskOver: require('../lib/MaskOver.vue'),

			//Swiper: require('../lib/Swiper.vue')

			//Rules: require('../lib/Rules.vue'),
			//FooterFixed: require('../lib/FooterFixed.vue')
		},
		data: function(){
			return store.state;
		},
		computed: {
		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
			this.act({type:'INIT'});
			//console.log(this)
		},
		methods: {
			act: store.act
		}
	}
</script>