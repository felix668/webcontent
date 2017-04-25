<template>
	<div id="root rem_height">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main rem_height" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<mask-author></mask-author>
			<mask-comments></mask-comments>
			<mask-share></mask-share>

			<my-audio></my-audio>
			<icon-music></icon-music>

			<div class="cover rem_height"
			@touchmove="touchmove($event)">
        <book-farm :dispatch="$store.dispatch" :img="img" :change="change"></book-farm>
        <date></date>
        
			</div>
			
			<pages 
			:img="img" 
			:change="change"
			:dispatch="$store.dispatch"></pages>
			
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%; height: 100vh;
		overflow: hidden;
		.main {
			position: relative;
			width: 100%; height: 100vh;
			overflow: hidden;
			background: lightblue;
			.cover {
				position: relative;
				width: 100%;
				margin: auto;
				// margin-top: 0.5rem;
				overflow: hidden;
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

			MaskDownload: require('./components/MaskDownload.vue'),
			MaskShare: require('lib/Mask/MaskShare.vue'),
			MaskAuthor: require('lib/Mask/MaskAuthor.vue'),
			MaskComments: require('lib/Mask/MaskComments.vue'),

			MyAudio: require('./components/MyAudio.vue'),
			IconMusic: require('./components/IconMusic.vue'),
			Date: require('lib/Date.vue'),

      BookFarm: require('./components/BookFarm.vue'),
			SnowConfetti: require('./components/SnowConfetti.vue'),
			SmokyText: require('./components/SmokyText.vue'),

			Pages: require('./components/Pages.vue'),
			Fader: require('./components/Fader.vue'),
			Comments: require('./components/Comments.vue'),
		},
		data: function(){
			return {};
		},
		computed: {
			page(){
				return this.$store.state.page;
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
			console.log(this.$store)
			this.$store.dispatch({type:'INIT'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>