<template>
	<div class="Card0">
		<div style="width:100%;height:1.96rem;"></div>
		<div class="banner" style="background:url(img/red/banner.png);background-size:100% 100%;">
			红包总发放量
		</div>
		<canvas-counter :num="state.total"></canvas-counter>
		<div class="part_qq_reader">
			<div class="part_left">
				<img class="logo_qq_reader" :src=" img+'/red/logo_qq_reader.png' "/>
			</div>
			<div class="part_right">
				<p class="title">QQ阅读发放量</p>
				<p id="qqReader"></p>
			</div>
		</div>
		<div class="part_mqq">
			<div class="part_left">
				<img class="logo_mqq" :src=" img+'/red/logo_mqq.png' "/>
			</div>
			<div class="part_right">
				<p class="title">手Q阅读发放量</p>
				<p id="mqq"></p>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Card0 {
		position: relative;
		width: 6.24rem;
		margin: auto;
		.banner {
			width: 4.59rem; height: 1.09rem;
			margin: auto; margin-bottom: 0.48rem;
			font-size: 0.32rem;
			line-height: 1.09rem;
			text-align: center;
			color: #fff0e6;
		}
		.part_left {
			float: left;
			width: 2.7rem;
			.logo_qq_reader {
				width: 0.88rem;
				margin-left: 1.12rem;
			}
			.logo_mqq {
				width: 0.8rem;
				margin-left: 1.16rem;
			}
		}
		.part_right {
			float: left;
			.title {
				margin-bottom: 0.22rem;
				font-size: 0.28rem;
				line-height: 0.38rem;
				color: #664243;
			}
		}
		.part_qq_reader {
			margin-bottom: 0.22rem;
			overflow: hidden;
			#qqReader {
				float: left;
				font-size: 0.46rem;
				line-height: 0.46rem;
				color: #774445;
			}
		}
		.part_mqq {
			margin-bottom: 0.22rem;
			overflow: hidden;
			#mqq {
				float: left;
				font-size: 0.46rem;
				line-height: 0.46rem;
				color: #774445;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			img: {},
			state: {}
		},
		components: {
			CanvasCounter: require('../CanvasCounter.vue')
		},
		data: function(){
			return {
			}
		},
		watch: {
			'state.qqReader': function(nv,ov){
				var options = {
					useEasing : true, 
					useGrouping : true, 
					separator : ',', 
					decimal : '.', 
					prefix : '', 
					suffix : '' 
				};
				var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
				demo.start();
			},
			'state.mqq': function(nv,ov){
				var options = {
					useEasing : true, 
					useGrouping : true, 
					separator : ',', 
					decimal : '.', 
					prefix : '', 
					suffix : '' 
				};
				var demo = new CountUp("mqq", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {
		},
		methods: {

		}
	}
</script>