<template>
	<div class="Rules">
		<div class="rContent">
<!-- 			<img class="banner_rules" :src=" img+'/main/banner_rules.png' "/> -->
			<p class="title">- 活动规则 -</p>
			<div class="text">
				<p><span class="no_">1.</span>活动期间，可以按照优惠价格购买相应书籍在线阅读权，活动结束后，不再享有优惠。</p>
				<p><span class="no_">2.</span>通过活动购买的书籍仅可以QQ阅读客户端内在线阅读，下载仍需付费。</p>
				<p><span class="no_">3.</span>本活动最终解释权归QQ阅读所有。</p>
			</div>
			<!-- <div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div> -->
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #815e55;
		width: 100%;
		background: #28202e;
		overflow: hidden;
		.rContent {
			margin-bottom: 0.5rem;
			overflow: hidden;
			.title {
				margin-top: 0.78rem;
				margin-bottom: 0.34rem;
				font-size: 0.32rem;
				font-weight: 600;
				text-align: center;
				color: @color;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.76rem; padding-right: 0.36rem;
					font-size: 0.24rem; line-height: 0.4rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.36rem; top: 0rem;
						// width: 0.3rem; height: 0.3rem;
						// border-radius: 1000px;
						// background: @color;
						font-size: 0.24rem; line-height: 0.4rem;
						text-align: center;
						color: @color;
						// color: white;
					}
					a {
						color: #cfb268;
					}
				}
			}
			.copyright {
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;
				font-size: 0.24rem;
				text-align: center; color: @color;
			}
		}
	}
</style>

<script>
	export default {
		data: function(){
			return {
				writers: (function(){
					return /writers\.html/.test( location.href );
				})()
			}
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			meta(){
				return this.$store.state.meta;
			}
		},
		methods: {
			TO_CONTACT: function(){
				this.act({
					type: 'TO_CONTACT'
				})
			}
		}

	}
</script>