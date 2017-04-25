<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">

			<mask-download v-show="show_mask_download" :act="act"></mask-download>
			<mask-prize v-show="show_mask_prize" :act="act" :img="img" :ios="ios"
			:prize="{id:1000}"></mask-prize>

			<img class="header" :src=" img+'/actors/header_2'+(ios?'_ios':'')+'.png' "/>

			<img class="text_0" :src=" img+'/actors/text_0.png' "/>
			<ballot-four :ballot="ballot_0" :act="act" :img="img" :share="share"></ballot-four>

			<img class="text_1" :src=" img+'/actors/text_1.png' "/>
			<ballot-four :ballot="ballot_1" :act="act" :img="img" :share="share"></ballot-four>

			<img class="text_2" :src=" img+'/actors/text_2_2.png' "/>
			<showcase :img="img" :act="act"></showcase>

			<img class="link"
			:src=" img+'/actors/to_another.png' "
			@click="act({type:'TO_WRITERS'})"/>

			<rules :act="act" :img="img"></rules>

			<footer-fixed 
			:male="ballot_0.voted"
			:female="ballot_1.voted"
			:timeleft="timeleft" 
			:img="img"
			:act="act"
			:share="share"
			:chance="chance_to_draw"></footer-fixed>
			
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
			.header {
				width: 100%;
				margin-bottom: 0.57rem;
			}
			.text_0 {
				width: 3.77rem;
				margin: auto; margin-bottom: 0.45rem;
			}
			.text_1 {
				width: 3.77rem;
				margin: auto; margin-bottom: 0.45rem; margin-top: 0.58rem;
			}
			.text_2 {
				width: 3.33rem;
				margin: auto; margin-bottom: 0.48rem; margin-top: 0.58rem;
			}
			.link {
				width: 4.8rem; 
				margin: auto;
				margin-bottom: 0.6rem;
			}
		}
	}
</style>

<script type="text/javascript">
	import store from '../store/store.actors.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			MaskDownload: require('../lib/MaskDownload.vue'),

			BallotFour: require('../lib/BallotFour.vue'),

			Showcase: require('../lib/Showcase.vue'),
			Countdown: require('../lib/Countdown.vue'), 

			MaskPrize: require('../lib/MaskPrize.vue'),

			Rules: require('../lib/Rules.vue'),
			FooterFixed: require('../lib/FooterFixed.vue')
		},
		data: function(){
			return store.data;
		},
		computed: {
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