<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		<mask-download></mask-download>
		<mask-weibo v-if=" meta.inWeibo "></mask-weibo>
		<mask-wechat></mask-wechat>
		
		<div class="main" v-show=" page==='ready' ">
			<mask-confirm></mask-confirm>
			<mask-prize></mask-prize>

			<div class="bbody"
			:style=" 'background-image:url('+img+'/main/bg_five.png);background-size:100% auto;' ">
				<div class="block">
					<img class="cover" :src=" book_five.cover "
					@click="$store.dispatch({type:'TO_BOOK',bid:book_five.bid})"/>
					<p class="title">{{book_five.title}}</p>
					<p class="author">{{book_five.author}}</p>
					<div class="intro">
						<div class="cell">
							{{book_five.intro}}
						</div>
					</div>
				</div>
				<div class="rounded">
					<span class="span0">原价{{priceOriginal}}元</span>
					<span class="span1"> 打包活动价{{price}}元</span>
				</div>
				<fixed-footer-five></fixed-footer-five>
			</div>
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
			// background: #15171d;
			overflow: hidden;

			.bbody {
				position: relative;
				width: 100%; height: 13.34rem;
				overflow: hidden;
				.block {
					position: relative; 
					margin-top: 4.23rem;
					width: 100%; height: 7.08rem;
					.cover {
						width: 2.56rem; height: 3.4rem;
						margin: auto; margin-bottom: 0.34rem;
						box-shadow: 0 0.04rem 0.4rem #a99f95;
					}
					.title {
						margin-bottom: 0.12rem;
						text-align: center; font-size: 0.32rem;
					}
					.author {
						margin-bottom: 0.28rem;
						font-size: 0.26rem;
						text-align: center;
					}
					.intro {
						box-sizing: border-box;
						display: table;
						width: 100%;
						padding: 0 0.72rem;
						.cell {
							display: table-cell;
							width: 100%; height: 1.6rem;
							text-align: center;
							vertical-align: middle;
							font-size: 0.24rem; line-height: 0.4rem;
						}
					}
				}
			}
			.rounded {
				display: table;
				height: 0.46rem;
				line-height: 0.46rem;
				margin: auto;
				padding: 0 0.36rem;
				background: #c08f63;
				border-radius: 0.23rem;
				font-size: 0.3rem;
				.span0 {
					text-decoration: line-through;
				}
				.span1 {
					color: #bf3117;
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			MaskLoading: require('components/MaskLoading.vue'),
			MaskDownload: require('components/MaskDownload.vue'),
			MaskOver: require('components/MaskOver.vue'),
			MaskWeibo: require('components/MaskWeibo.vue'),
			MaskWechat: require('components/MaskWechat.vue'),

			FixedFooterFive: require('components/_two/FixedFooterFive.vue'),
			MaskConfirm: require('components/_two/MaskConfirm.vue'),
			MaskPrize: require('components/_two/MaskPrize.vue'),
		},
		data: function(){
			return {};
		},
		computed: {
			book_five(){
				return this.$store.state.book_five;
			},
			page(){
				return this.$store.state.page;
			},
			meta(){
				return this.$store.state.meta;
			},
			img(){
				return this.$store.state.img;
			},
			priceOriginal(){
				return this.$store.state.priceOriginal;
			},
			price(){
				return this.$store.state.price;
			},
		},
		watch: {
		},
		created: function(){
			
		},
		mounted: function(){
			this.$store.dispatch({type:'INIT_FIVE'});
		},
		methods: {
			touchmove: function(e){
				e.preventDefault();
			}
		}
	}
</script>