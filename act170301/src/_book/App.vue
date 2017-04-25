<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-download></mask-download>
			<mask-confirm></mask-confirm>

			<img class="header" :src=" img+'/header'+(meta.batch==='two'?'_two':'')+'_2.png' "/>
			<img class="top_logo" :src=" img+'/top_logo.png' "
			v-if=" meta.share "/>

			<div class="frame_noir">
				<div class="corner"></div>
				<div class="corner"></div>
				<div class="corner"></div>
				<div class="corner"></div>
				血红，网络文学白金作家，上海网络作协副会长，中国网络作家富豪榜霸榜作家，玄幻小说奠基人，创作品总字数超3000万，首位年薪百万作家，持续畅销十五年！
			</div>

			<read-part></read-part>
			<!-- batch one -->
			<test-part></test-part>
			<part-share></part-share>
			<!-- batch two -->
			<part-batch-two></part-batch-two>

			<rules></rules>
		</div>
<!-- 		<div class="main" v-show=" page==='boiler' ">
			111
		</div> -->

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
			background: #15171d;
			overflow: hidden;
			.header {
				width: 100%;
			}
			.top_logo {
				position: absolute; right: 0.28rem; top: 0.22rem; 
				width: 1.79rem;
			}
			.frame_noir {
				position: absolute; left: 0.5rem; top: 7.4rem;
				box-sizing: border-box;
				width: 6.5rem;
				padding: 0.22rem 0.22rem;
				border: 1px solid #514330;
				background: rgba(0,0,0,0.8);
				font-size: 0.28rem; line-height: 0.4rem;
				text-align: justify;
				color: #908c88;
				@brown: #705b41;
				.corner {
					position: absolute;
					width: 0.26rem; height: 0.26rem;
					&:nth-child(1) {
						left: -0.03rem; top: -0.03rem;
						border-left: 0.06rem solid @brown;
						border-top: 0.06rem solid @brown;
					}
					&:nth-child(2) {
						right: -0.03rem; top: -0.03rem;
						border-right: 0.06rem solid @brown;
						border-top: 0.06rem solid @brown;
					}
					&:nth-child(3) {
						left: -0.03rem; bottom: -0.03rem;
						border-left: 0.06rem solid @brown;
						border-bottom: 0.06rem solid @brown;
					}
					&:nth-child(4) {
						right: -0.03rem; bottom: -0.03rem;
						border-right: 0.06rem solid @brown;
						border-bottom: 0.06rem solid @brown;
					}
				}
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

			MaskDownload: require('lib/_book/MaskDownload.vue'),
			MaskConfirm: require('lib/_book/MaskConfirm.vue'),

			ReadPart: require('lib/_book/ReadPart.vue'),
			TestPart: require('lib/_book/TestPart.vue'),
			PartShare: require('lib/_book/PartShare.vue'),

			PartBatchTwo: require('lib/_book/PartBatchTwo.vue'),
			Rules: require('lib/_book/Rules.vue')
		},
		data: function(){
			return {};
		},
		computed: {
			page(){
				return this.$store.state.page;
			},
			meta(){
				return this.$store.state.meta;
			},
			img(){
				return this.$store.state.img;
			},
		},
		watch: {
		},
		created: function(){
			
		},
		mounted: function(){
			if( this.meta.batch==='one' ){
				this.$store.dispatch({type:'INIT'});
			}else{
				this.$store.dispatch({type:'INIT_TWO'});
			}
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>