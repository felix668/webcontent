<template>
	<div class="Rules">
		<div class="rContent">
			<img class="banner_rules" :src=" img+'/main/banner_rules.png' "/>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：2017年5月19日至5月21日。</p>
				<p><span class="no_">2.</span>活动期间，在QQ阅读主线客户端，购买《欢乐颂2》，所有订阅花费全额返还等值{{name_bill}}，总值3万元{{name_bill}}，先到先得。</p>
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
		@color: #8f7169;
		width: 100%;
		margin-bottom: 0.45rem;
		.rContent {
			.banner_rules {
				width: 3.41rem;
				margin: auto;
				margin-bottom: 0.32rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.6rem; padding-right: 0.3rem;
					margin-bottom: 0.16rem;
					font-size: 0.28rem; line-height: 0.42rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.3rem; top: 0rem;
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