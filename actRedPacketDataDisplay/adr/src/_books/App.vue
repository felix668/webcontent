<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">

			<welcome
			:act="act"
			:logged-in="loggedIn"
			:stage="stage"></welcome>

			<book-block
			:act="act"
			:books="books"
			:stage="stage"
			:current="current"
			:logged-in="loggedIn"></book-block>
			<!-- <flipper></flipper> -->

			<end-page
			:act="act"
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
			act: store.act
		}
	}
</script>