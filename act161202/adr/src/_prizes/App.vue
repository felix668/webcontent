<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			
			<list-prizes :items="items" :img="img" :ios="ios"></list-prizes>
			
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		.main {
			position: relative;
			width: 100%;
			overflow: hidden;
			//background: #f8dfb9;
			.title_img {
				width: 100%;
			}
		}
	}
</style>

<script type="text/javascript">
	import store from '../store/store.prizes.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			ListPrizes: require('../lib/ListPrizes.vue'),
			Lottery: require('../lib/Lottery.vue')
		},
		data: function(){
			return store.data;
		},
		computed: {
			prize: function(){
				return this.prizes[this.result.res];
			}
		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
			this.act({type:'INIT'});
		},
		methods: {
			act: store.act
		}
	}
</script>