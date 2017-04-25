<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			
			<mask-download v-show="show_mask_download" :act="act"></mask-download>
			<mask-prize v-show="show_mask_prize" :act="act" :img="img" :ios="ios"
			:prize="{id:1000}"></mask-prize>

			<img class="header_writers" :src=" img+'/header_writers_2'+(ios?'_ios':'')+'.png' "/>

			<img class="male_writer" :src=" img+'/male_writer.png' "/>

			<ballot :type=" 'male' " :items="male" :act="act" 
			:voted="male_voted"
			:state="male_state"
			:img="img"></ballot>

			<img class="female_writer" :src=" img+'/female_writer.png' "/>

			<ballot :type=" 'female' " :items="female" :act="act" 
			:voted="female_voted"
			:state="female_state"
			:img="img"></ballot>

			<div class="link"
			@click="act({type:'TO_ACTORS'})">
				<img :src=" img+'/to_actors.png' "/>
			</div>

			<rules :act="act" :img="img"></rules>
			
			<footer-fixed 
			:male="male_voted"
			:female="female_voted"
			:timeleft="timeleft" 
			:act="act"
			:img="img"
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
			.header_writers {
				width: 100%;
				margin-bottom: 0.55rem;
			}
			.male_writer {
				width: 5.64rem;
				margin: auto; margin-bottom: 0.49rem;
			}
			.female_writer {
				width: 5.64rem;
				margin: auto; margin-top: 0.56rem; margin-bottom: 0.44rem;
			}
			.link {
				width: 4.8rem;
				margin: auto;
				margin-top: 0.58rem;
				margin-bottom: 0.6rem;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
	}
</style>

<script type="text/javascript">
	import store from '../store/store.writers.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			// Explosion: require('../lib/Explosion.vue'),

			Ballot: require('../lib/Ballot.vue'),
			Countdown: require('../lib/Countdown.vue'), 

			MaskDownload: require('../lib/MaskDownload.vue'),
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
			//console.log(this)
		},
		methods: {
			act: store.act
		}
	}
</script>