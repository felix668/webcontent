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
			:style=" 'background-image:url('+img+'/main/bg_five_2.png);background-size:100% auto;' ">
				<div class="block">
					<div class="rounded">
						<span class="span0">原价{{priceOriginal}}元</span>
						<span class="span1"> 活动价{{price}}元</span>
					</div>

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
			</div>
			<rules-plain></rules-plain>
			<fixed-footer-five></fixed-footer-five>
		</div>

		<div class="main" v-show=" page==='unloggedin' ">
			<div class="bar__">
				<div class="btn_to_login"
				@click="$store.dispatch({type:'TO_LOGIN'})">
					登录后可参与活动 >
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

			.btn_to_login {
				position: relative;
				width: 6.3rem; height: 0.92rem;
        margin: auto; margin-top: 3rem;
        border-radius: 0.1rem;
        background: #67c890;
        font-size: 0.32rem; font-weight: 600; color: white;
        line-height: 0.92rem; text-align: center;
			}

			.bbody {
				position: relative;
				// width: 100%; height: 100%;
				width: 100%; height: 11.85rem;
				overflow: hidden;
				.block {
					position: relative; 
					margin-top: 4rem;
					width: 100%; height: 7.08rem;
					.cover {
						width: 2rem; height: 2.67rem;
						// width: 2.56*0.8rem; height: 3.4*0.8rem;
						margin: auto; margin-bottom: 0.25rem;
						box-shadow: 0 0.04rem 0.4rem #a99f95;
					}
					.title {
						margin-bottom: 0.12rem;
						text-align: center; font-size: 0.36rem;
					}
					.author {
						margin-bottom: 0.36rem;
						font-size: 0.3rem;
						text-align: center;
					}
					.intro {
						box-sizing: border-box;
						display: table;
						width: 100%;
						padding: 0 0.72rem;
						.cell {
							display: table-cell;
							width: 100%;/* height: 1.6rem;*/
							text-align: center;
							vertical-align: middle;
							font-size: 0.3rem; line-height: 0.34rem;
							color: #666666;
						}
					}

					.rounded {
						// position: fixed; left: 0; bottom: 1.3rem;
						display: table;
						// width: 100%;
						text-align: center;
						height: 0.46rem;
						line-height: 0.46rem;
						margin: auto; margin-top: 0.2rem;
						margin-bottom: 0.45rem;
						// padding: 0 0.36rem;
						// background: #c08f63;
						border-radius: 0.23rem;
						font-size: 0.3rem;
						overflow: hidden;
						.span0 {
							float: left;
							font-size: 0.32rem;
							margin-right: 0.18rem;
							text-decoration: line-through;
						}
						.span1 {
							float: left;
							font-size: 0.36rem;
							color: #fa554e;
						}
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	import Vix from 'store/Vix.js';

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

			RulesPlain: require('components/_two/RulesPlain.vue')
		},
		data: function(){
			return {};
		},
		computed: Vix.computed({
			state: [
				'book_five', 'page', 'meta', 'img',
				'priceOriginal', 'price', 
			]
		}),
		// {
		// 	book_five(){
		// 		return this.$store.state.book_five;
		// 	},
		// 	page(){
		// 		return this.$store.state.page;
		// 	},
		// 	meta(){
		// 		return this.$store.state.meta;
		// 	},
		// 	img(){
		// 		return this.$store.state.img;
		// 	},
		// 	priceOriginal(){
		// 		return this.$store.state.priceOriginal;
		// 	},
		// 	price(){
		// 		return this.$store.state.price;
		// 	},
		// }
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