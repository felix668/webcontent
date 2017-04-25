<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' "
		style="background:url(img/red/bg.png);background-size:100% 100%;">
			
			<swiper 
			:img="img"
			:card-zero="card0"
			:card-one="card1"></swiper>
			
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
			width: 100%; height: 12.17rem;
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
	import store from '../store/store.red.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			Swiper: require('../lib/Swiper.vue'),

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