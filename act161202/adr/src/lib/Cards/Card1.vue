<template>
	<div class="Card1">
		<div class="banner" style="background:url(img/red/banner.png);background-size:100% 100%;">
			QQ阅读实时流量
		</div>
		<div class="part">
			<div class="part_left">
				<p class="top_title">实时DAU</p>
				<p class="bottom_title">0</p>
			</div>
			<div class="part_right">
				<p class="top_title">环比昨天涨幅</p>
				<p class="bottom_title">0%</p>
			</div>
		</div>
		<div class="part">
			<div class="part_left">
				<p class="top_title">实时新增人数</p>
				<p class="bottom_title">0</p>
			</div>
			<div class="part_right">
				<p class="top_title">累计新增人数</p>
				<p class="bottom_title" id="total_growth"></p>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Card1 {
		position: relative;
		width: 6.24rem;
		margin: auto;
		.banner {
			width: 4.59rem; height: 1.09rem;
			margin: auto; margin-top: 1.96rem; margin-bottom: 0.62rem;
			font-size: 0.32rem;
			line-height: 1.09rem;
			text-align: center;
			color: #fff0e6;
		}
		.part {
			width: 5.38rem;
			margin: auto;
			overflow: hidden;
			&:nth-child(2) {
				margin-bottom: 0.4rem;
				border-bottom: 1px dotted #ebd1c5;
			}
			.part_left {
				float: left;
				width: 3.24rem;
			}
			.top_title {
				margin-left: 0.14rem;
				margin-bottom: 0.22rem;
				color: #664243;
				font-size: 0.28rem;
				line-height: 0.28rem;
				text-align: left;
			}
			.bottom_title {
				margin-left: 0.14rem;
				margin-bottom: 0.46rem;
				font-size: 0.46rem;
				line-height: 0.46rem;
				text-align: left;
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