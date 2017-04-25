<template>
	<div class="Rules">
		<div class="rContent">
			<div class="title">
				活动规则
			</div>
			<p><span>1.</span>2016年12月23日15点-2016年12月30日24点。</p>
			<p><span>2.</span>用户成功分享活动后，即可获得对应大神书籍的7天限时免费阅读权。</p>
			<p v-if="!adr"><span>3.</span>iOS游客用户无法参加本次活动。</p>
			<p><span>{{adr?'3.':'4.'}}</span>活动结束后，再分享时将无法获得相关免费权益。</p>
			<div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #666666;
		width: 100%;
		.rContent {
			.title {
				padding: 0 0 0 0.46rem;
				margin-bottom: 0.3rem;
				font-size: 0.28rem; line-height: 0.5rem; font-weight: bold;
				color: #000000;
			}
			p {
				position: relative;
				padding-left: 0.8rem; padding-right: 0.54rem;
				font-size: 0.28rem; line-height: 0.48rem;
				color: @color;
				overflow: hidden;
				span {
					position: absolute; left: 0.46rem; top: 0;
					font-size: 0.28rem; line-height: 0.48rem;
					color: @color;
				}
			}
			.copyright {
				padding-top: 0.52rem;
				padding-bottom: 0.38rem;
				font-size: 0.24rem;
				text-align: center; color: @color;
			}
		}
	}
</style>

<script>
	export default {
		props: ['adr']
	}
</script>