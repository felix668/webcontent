<template>
	<div class="Rules">
		<div class="rContent">
			<img class="words_rules" :src=" img+'/main/words_rules.png' "/>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：2017年6月1日-6月11日。</p>
				<p><span class="no_">2.</span>活动期间在6.5.1版本客户端内一次性开通3个月包月可获赠1个月，一次性开通6个月包月可获赠2个月，一次性开通12个月包月可获得有效期30天的1888{{name_bill}}。</p>
				<p><span class="no_">3.</span>活动期间在活动页面开通包月的用户可获得一次抽奖，奖品总计500万{{name_bill}}，有效期7天，数量有限，先到先得。</p>
				<p><span class="no_">4.</span>本活动最终解释权归QQ阅读所有{{meta.platform==='adr'?'':'，与苹果公司无关'}}。</p>
			</div>
			<!-- <div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div> -->
			<div style="width:100%; height:0.68rem;"></div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #666666;
		width: 100%;
		.rContent {
			.words_rules {
				width: 1.73rem;
				margin: auto;
				margin-bottom: 0.32rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.6rem; padding-right: 0.3rem;
					font-size: 0.28rem; line-height: 0.42rem;
					text-align: justify;
					color: @color;
					overflow: hidden;
					margin-bottom: 0.1rem;
					.no_ {
						position: absolute; left: 0.3rem; top: 0rem;
						font-size: 0.28rem; line-height: 0.42rem;
						text-align: center;
						color: @color;
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