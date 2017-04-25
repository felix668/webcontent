<template>
	<div class="Rules">
		<div class="rContent">
			<!-- <img class="title" :src=" img+'/rules.png' "/> -->
			<div class="title">- 活动规则 -</div>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：4月20日11点 - 5月2日0点。</p>
        <p><span class="no_">2.</span>活动期间用户可观看明星阅读视频，试读相关书籍。</p>
        <p><span class="no_">3.</span>所有用户可邀请好友观看视频，参与共读接力。</p>
        <p><span class="no_">4.</span>明星视频顺序按微博发布时间排序。</p>
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
		background: #090f14;
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