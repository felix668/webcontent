<template>
	<div class="Rules">
		<div class="rContent">
			<!-- <img class="title" :src=" img+'/rules.png' "/> -->
			<div class="title">- 活动规则 -</div>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：4月23日19：30-21：00。</p>
				<p><span class="no_">2.</span>活动期间，每位用户仅有一次抽奖机会（同一设备或同一账号视为同一用户）。</p>
				<p><span class="no_">3.</span>奖品将于1小时内发放至中奖者账户中，可用户抵扣购书款。</p>
				<p><span class="no_">4.</span>利用任何作弊手段获取的奖品都将被收回。</p>
				<p><span class="no_">5.</span>本活动最终解释权归QQ阅读所有。</p>
			</div>
			<!-- <div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div> -->
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #633e3c;
		//position: absolute; left: 0; bottom: 0;
		width: 100%;
		padding-top: 0.87rem;
		background: #0b0a0f;
		.rContent {
			.title {
				width: 100%;
				font-size: 0.36rem;
				font-weight: 600;
				color: #d9b064;
				text-align: center;
				margin-bottom: 0.32rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.88rem; padding-right: 0.56rem;
					font-size: 0.28rem; line-height: 0.42rem;
					color: #6e614a;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.52rem; top: 0rem;
						// width: 0.3rem; height: 0.3rem;
						// border-radius: 1000px;
						// background: @color;
						font-size: 0.28rem; line-height: 0.42rem;
						text-align: center;
						color: #6e614a;
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
		props: {
			id: {},
			hasDiscount: {},

			act: {},
			img: {}
		},
		data: function(){
			return {
				writers: (function(){
					return /writers\.html/.test( location.href );
				})()
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