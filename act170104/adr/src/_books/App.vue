<template>
	<div id="root"
	@touchstart="touchstart($event)">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-rules
			:id="id"
			:has-discount="hasDiscount" 
			:img="img"
			:state="mask_rules"
			:act="act"></mask-rules>
			<mask-info 
			:img="img"
			:state="mask_info"
			:act="act"></mask-info>
			<mask-black 
			:img="img"
			:state="mask_black"
			:act="act"></mask-black>

			<welcome
			:replay="replay"
			:id="id"
			:taken="taken"
			:black="black"
			:has-discount="hasDiscount"
			:discount="discount"
			:act="act"
			:img="img"
			:logged-in="loggedIn"
			:stage="stage"></welcome>

			<book-block
			:id="id"
			:count="count"
			:days="days"
			:has-discount="hasDiscount"
			:discount="discount"
			:act="act"
			:img="img"

			:name="name"
			:books="books"
			:stage="stage"
			:current="current"
			:logged-in="loggedIn"></book-block>
			<!-- <flipper></flipper> -->

			<end-page
			:id="id"
			:has-discount="hasDiscount"
			:act="act"
			:img="img"
			:others="others"
			:current="current"
			:logged-in="loggedIn"></end-page>
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
			width: 100%; height: 100vh;
			overflow: hidden;
			//background: #f8dfb9;
		}
	}
</style>

<script type="text/javascript">
	import store from '../store/store.books.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			MaskRules: require('../lib/Mask/MaskRules.vue'),
			MaskInfo: require('../lib/Mask/MaskInfo.vue'),
			MaskBlack: require('../lib/Mask/MaskBlack.vue'),

			Welcome: require('../lib/Welcome.vue'),
			BookBlock: require('../lib/BookBlock.vue'),
			EndPage: require('../lib/EndPage.vue'),
			Flipper: require('../lib/Flipper.vue')
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
			act: store.act,
			touchstart: function(e){
				//e.preventDefault();
			}
		}
	}
</script>