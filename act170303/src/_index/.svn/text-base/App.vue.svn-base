<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<swiper-nine></swiper-nine>
		</div>
<!-- 		<div class="main" v-show=" page==='boiler' ">
			111
		</div> -->

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
			background: #15171d;
			overflow: hidden;

		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('lib/Mask/MaskLoading.vue'),
			MaskOver: require('lib/Mask/MaskOver.vue'),

			MaskDownload: require('lib/_book/MaskDownload.vue'),
			SwiperNine: require('lib/_index/SwiperNine.vue')
		},
		data: function(){
			return {};
		},
		computed: {
			page(){
				return this.$store.state.page;
			},
			meta(){
				return this.$store.state.meta;
			},
			img(){
				return this.$store.state.img;
			},
		},
		watch: {
		},
		created: function(){
			
		},
		mounted: function(){
			this.$store.dispatch({type:'INIT'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>