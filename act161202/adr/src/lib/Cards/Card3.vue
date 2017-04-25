<template>
	<div class="Card3">
		<div class="banner" style="background:url(img/red/banner.png);background-size:100% 100%;">
			QQ阅读活动页行为
		</div>
		<div class="part">
			<p class="title">累计打开QQ阅读人数</p>
		</div>
		<div class="part">
			
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
			margin: auto; margin-top: 1.96rem; margin-bottom: 0.5rem;
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
				font-size: 0.28rem;
				line-height: 0.28rem;
				color: #664243;
			}
			._28 {
				margin-left: 0.24rem;
				margin-top: 0.28rem;
				font-size: 0.28rem;
				line-height: 0.28rem;
				text-align: left;
				color: #664243;
			}
			._36 {
				margin-left: 0.24rem;
				margin-top: 0.4rem;
				margin-bottom: 0.14rem;
				font-size: 0.36rem;
				line-height: 0.36rem;
				text-align: left;
				color: #664243;
			}
			._24 {
				margin-left: 0.14rem;
				font-size: 0.24rem;
				line-height: 0.24rem;
				text-align: left;
				color: #664243;
			}
			.logo_blue {
				width: 0.66rem;
				margin-top: 0.18rem;
			}
			.logo_red {
				width: 0.6rem;
				margin-top: 0.2rem;
			}
			&:nth-child(2) {
				height: 0.82rem;
				border-bottom: 1px dotted #ebd1c5;
			}
			&:nth-child(3) {
				height: 1.36rem;
				border-bottom: 1px dotted #ebd1c5;
			}
			&:nth-child(4) {
				height: 1.54rem;
			}
			.part_left {
				box-sizing: border-box;
				float: left;
				width: 0.77rem; height: 100%;
				border-right: 1px dotted #ebd1c5;
			}
			.part_middle {
				box-sizing: border-box;
				float: left;
				width: 2.54rem; height: 100%;
				border-right: 1px dotted #ebd1c5;
			}
			.part_right {
				box-sizing: border-box;
				float: left;
				height: 100%;
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