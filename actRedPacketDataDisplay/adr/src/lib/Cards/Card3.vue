<template>
	<div class="Card3">
		<div style="width:100%;height:1.96rem;"></div>
		<div class="banner" style="background:url(img/red/banner.png);background-size:100% 100%;">
			QQ阅读活动页行为
		</div>
		<div class="part">
			<p class="title">累计打开QQ阅读人数</p>
			<canvas-counter :num="state.times_of_opening"></canvas-counter>
		</div>
		<div class="part">
			<p class="title">累计下载QQ阅读人数</p>
			<canvas-counter :num="state.times_of_downloading"></canvas-counter>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Card3 {
		position: relative;
		width: 6.24rem;
		margin: auto;
		.banner {
			width: 4.59rem; height: 1.09rem;
			margin: auto; margin-bottom: 0.5rem;
			font-size: 0.32rem;
			line-height: 1.09rem;
			text-align: center;
			color: #fff0e6;
		}
		.part {
			width: 5.38rem;
			margin: auto;
			overflow: hidden;
			.title {
				margin-bottom: 0.24rem;
				font-size: 0.28rem;
				line-height: 0.28rem;
				color: #664243;
			}
			&:nth-child(3) {
				height: 1.59rem;
				border-bottom: 1px dotted #ebd1c5;
			}
			&:nth-child(4) {
				padding-top: 0.34rem;
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
			'state.total_growth': function(nv,ov){
				var options = {
					useEasing : true, 
					useGrouping : true, 
					separator : ',', 
					decimal : '.', 
					prefix : '', 
					suffix : '' 
				};
				var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {
		},
		methods: {

		}
	}
</script>