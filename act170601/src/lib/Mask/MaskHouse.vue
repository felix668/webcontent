<template>
<transition name="slide-up">
	<div class="MaskHouse" v-show="mask.show"
	@touchmove="touchmove">
		<div class="cell">
			<div class="mask-panel">
				<img class="close" :src=" img+'/main/close.png' " 
				@click="$store.dispatch({type:'HIDE',what:'mask_house'})"/>
				<div class="title">
					农家书屋
				</div>
				<p class="p0">
					农家书屋，是为满足农民文化需要，在行政村建立的、农民自己管理的、能提供农民实用的书报刊和音像电子产品阅读视听条件的公益性文化服务设施。解决农民群众“买书难、借书难、看书难”的问题，保障农民群众基本文化权益。
				</p>
				<p class="p0">
				  QQ阅读心系“全民阅读”，将于2017年4月23日世界读书日当天，联合湖南新闻出版广电局和芒果V基金，现场向湖南省农家书屋项目捐赠图书10万册，并号召大家“益起阅读”。活动期间，根据QQ阅读用户的阅读时长，捐赠相应数量的图书，开启全国农家书屋捐书公益活动的序幕。
				</p>	
			</div>
		</div>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskHouse {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	.cell {
		display: table-cell;
		width: 100%; height: 100%;
		vertical-align: middle;
		.mask-panel {
			position: relative;
			width: 5.2rem;
			margin: auto;
			padding-top: 0.35rem; padding-bottom: 0.34rem;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: -0.25rem; top: -0.25rem;
				width: 0.6rem;
			}
			.title {
				box-sizing: border-box;
				width: 100%;
				margin-bottom: 0.3rem;
				font-size: 0.32rem;
				color: #444444; font-weight: 600;
				text-align: center;
			}
			.p0 {
				box-sizing: border-box;
				width: 100%;
				padding: 0 0.32rem;
				font-size: 0.27rem; line-height: 0.48rem;
				color: #444444; text-indent: 0.2rem;
				text-align: justify;
			}
	
		}
	}
}
</style>

<script>
export default {
	data: function(){
		return {
		}
	},
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_house;
		},
	},
	created: function(){

	},
	mounted: function(){
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		}
	}
};
</script>