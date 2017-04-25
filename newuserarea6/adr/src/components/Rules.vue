<template>
	<div class="Rules">
		<div class="rContent">
			<img class="r_title" :src=" img+'/r_title.png' "/>
			<div class="subtitle" v-if="charge&&monthly">
				{{first?'首充':'充赠'}}活动
			</div>
			<p v-if="charge"><span>1.</span>一次性充值指定金额，即赠送对应额度{{ios?'阅券':'书券'}}，{{first?'每位用户只限领取一次':'多充多赠，次数不限'}}。</p>
			<p v-if="charge"><span>2.</span>所赠{{ios?'阅券':'书券'}}有效期为15天。需手动领取，如未领取则视为放弃。</p>
			<div class="subtitle" v-if="charge&&monthly">
				包月特权
			</div>
			<p v-if="monthly"><span>1.</span>该福利仅支持在本页面开通可享。</p>
			<p v-if="monthly"><span>2.</span>额外获赠的一个月包月特权，需手动领取，如未领取则视为放弃。</p>
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
			//padding-top: 0.5rem;
			background: #fbeec7;
			.r_title {
				width: 3.52rem;
				margin: auto; margin-bottom: 0.35rem;
			}
			.subtitle {
				margin-left: 0.5rem;
				font-size: 0.3rem; line-height: 0.5rem; font-weight: bold;
				color: #333333;
			}
			p {
				position: relative;
				padding-left: 0.86rem; padding-right: 0.5rem;
				font-size: 0.3rem; line-height: 0.46rem;
				color: @color;
				overflow: hidden;
				span {
					position: absolute; left: 0.5rem; top: 0;
					font-size: 0.3rem; line-height: 0.46rem;
					color: @color;
				}
			}
			.copyright {
				padding-top: 0.24rem;
				padding-bottom: 0.38rem;
				font-size: 0.24rem;
				text-align: center; color: @color;
			}
		}
	}
</style>

<script>
	export default {
		props: ['ios','charge','monthly','first','img']
	}
</script>