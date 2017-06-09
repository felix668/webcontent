<template>
	<div class="Rules">
		<div class="rContent">
			<div class="title">
				活动规则
			</div>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：2017年5月26日-2017年6月1日。</p>
				<p><span class="no_">2.</span>活动期间，在QQ阅读{{meta.platform==='adr'?'安卓':'ios'}}主线客户端购买《白鹿原》原著的用户，可在活动页面领取订阅等值{{name_bill}}。</p>
				<p><span class="no_">3.</span>返还的{{name_bill}}自领取当日起30天有效。</p>
				<p><span class="no_">4.</span>本活动最终解释权归QQ阅读所有。</p>
			</div>
			<!-- <div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div> -->
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #494949;
		width: 100%;
		margin-bottom: 0.45rem;
		.rContent {
			.banner_rules {
				width: 3.41rem;
				margin: auto;
				margin-bottom: 0.32rem;
			}
			.title {
				margin-bottom: 0.25rem;
				font-size: 0.3rem;
				font-weight: 600;
				text-indent: 0.3rem;
				color: @color;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.72rem; padding-right: 0.3rem;
					font-size: 0.24rem; line-height: 0.48rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.3rem; top: 0rem;
						// width: 0.3rem; height: 0.3rem;
						// border-radius: 1000px;
						// background: @color;
						font-size: 0.24rem; line-height: 0.48rem;
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
			name_bill() {
				return this.$store.getters.name_bill;
			},
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