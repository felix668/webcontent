<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<focus v-show=" change.stage===0 "></focus>
			<img  v-show=" change.stage!==0 " class="incoming" :src=" img+'/test/incoming.jpg' "/>

		</div>

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
			// background: #15171d;
			overflow: hidden;
			.incoming {
				// position: absolute; left: 0; top: 0;
				width: 100%;
			}
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
			Focus: require('lib/Cutscene/Focus.vue'),
			// SwiperNine: require('lib/_index/SwiperNine.vue')
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
			change(){
				return this.$store.state.change;
			}
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