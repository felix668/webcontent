<template>
	<div class="Rules" v-if="meta.share===false">
		<div class="rContent">
			<img class="title" :src=" img+'/rules.png' "/>
			<div class="text" v-if=" meta.name==='one' ">
				<p><span class="no_">1.</span>活动时间：3.17-3.20。</p>
				<p><span class="no_">2.</span>活动期间在客户端内完成测试即可从页面书单中选择一本书限免5天。</p>
				<p><span class="no_">3.</span>每位用户可多次参加测试，但仅能获得一本书限免，最多限免5天不累计。</p>
				<p><span class="no_">4.</span>同一台手机设备视为一位用户。</p>
				<p><span class="no_">5.</span>本活动最终解释权归QQ阅读所有。</p>
			</div>
			<div class="text" v-if=" meta.name==='two' ">
				<p><span class="no_">1.</span>活动时间：3.21-3.23。</p>
				<p><span class="no_">2.</span>活动期间从客户端内分享页面即可从页面书单中选择一本书限免5天。</p>
				<p><span class="no_">3.</span>每位用户可多次分享，但仅能获得一本书限免，最多限免5天不累计。</p>
				<p><span class="no_">4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败。</p>
				<p><span class="no_">5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得限免权限。</p>
				<p><span class="no_">6.</span>本活动最终解释权归QQ阅读所有。</p>
			</div>
			<!-- <div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div> -->
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #908c88;
		width: 100%;
		margin-bottom: 0.45rem;
		.rContent {
			.title {
				width: 7.4rem;
				margin: auto;
				margin-bottom: 0.35rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.8rem; padding-right: 0.3rem;
					margin-bottom: 0.14rem;
					font-size: 0.28rem; line-height: 0.42rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.5rem; top: 0rem;
						// width: 0.3rem; height: 0.3rem;
						// border-radius: 1000px;
						// background: @color;
						font-size: 0.28rem; line-height: 0.42rem;
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