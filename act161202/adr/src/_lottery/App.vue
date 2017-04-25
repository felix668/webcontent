<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			
			<mask-prize :act="act" v-show="show_mask_prize" :prize="prize" :img="img" :ios="ios"></mask-prize>

			<img class="header" :src=" img+'/lottery/header_2.png' "/>

			<lottery
			:act="act"
			:chance="chance"
			:result="result"
			:img="img"
			:ios="ios"
			></lottery>

			<p class="check" @click="act({type:'TO_PRIZES'})">查看我的奖品>></p>
			<img class="back" :src=" img+'/lottery/btn_2.png' "
			@click="act({type:'BACK'})"/>
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
				margin-bottom: 0.4rem;
			}
			.check {
				margin-bottom: 0.52rem;
				font-size: 0.24rem;
				text-align: center;
				color: #333333;
			}
			.back {
				width: 4.8rem;
				margin: auto; margin-bottom: 0.8rem;
			}
		}
	}
</style>

<script type="text/javascript">
	import store from '../store/store.lottery.js';

	export default {
		components: {
			Debugger: require('../lib/Debugger.vue'),
			MaskLoading: require('../lib/MaskLoading.vue'),
			MaskOver: require('../lib/MaskOver.vue'),

			MaskPrize: require('../lib/MaskPrize.vue'),
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