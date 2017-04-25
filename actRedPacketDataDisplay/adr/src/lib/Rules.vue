<template>
	<div class="Rules">
		<div class="rContent">
			<img class="title" :src=" img+'/rules.png' "/>
			<div class="text" v-if="writers">
				<p><span class="no_">1</span>活动时间:2017年1月5日0:00-1月10日0:00。</p>
				<p><span class="no_">2</span>每名用户每小时可进行一轮投票，每轮投票完成后可以参与一次抽奖。</p>
				<p><span class="no_">3</span>奖品：抽中实物奖品的用户请按提示<a @click="TO_CONTACT">填写有效联系方式</a>，奖品将在活动结束后10日内，由QQ阅读客服联系后发放。阅券或书券即时发放，有效期为30天。<a @click="act({type:'TO_PRIZES'})">查看已获得奖品</a>。</p>
			</div>
			<div class="text" v-if="!writers">
				<p><span class="no_">1</span>活动时间:2017年1月5日0:00-1月10日0:00。</p>
				<p><span class="no_">2</span>每名用户每小时可进行一轮投票，每轮投票完成后可以参与一次抽奖。</p>
				<p><span class="no_">3</span>图书限时免费时间：2017年1月5日0:00-1月10日0:00。</p>
				<p><span class="no_">4</span>奖品：抽中实物奖品的用户请按提示<a @click="TO_CONTACT">填写有效联系方式</a>，奖品将在活动结束后10日内，由QQ阅读客服联系后发放。阅券或书券即时发放，有效期为30天。<a @click="act({type:'TO_PRIZES'})">查看已获得奖品</a>。</p>
			</div>
			<div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@color: #717171;
		width: 100%;
		.rContent {
			/*
			.title {
				padding: 0 0 0 0.46rem;
				margin-bottom: 0.3rem;
				font-size: 0.28rem; line-height: 0.5rem; font-weight: bold;
				color: #000000;
			}
			*/
			.title {
				width: 2.01rem; 
				margin: auto; margin-bottom: 0.4rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.83rem; padding-right: 0.45rem;
					font-size: 0.28rem; line-height: 0.45rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.42rem; top: 0.07rem;
						width: 0.3rem; height: 0.3rem;
						border-radius: 1000px;
						background: @color;
						font-size: 0.28rem; line-height: 0.3rem;
						text-align: center;
						color: white;
					}
					a {
						color: #cfb268;
					}
				}
			}
			.copyright {
				padding-top: 0.52rem;
				padding-bottom: 0.8rem;
				font-size: 0.28rem;
				text-align: center; color: #b6b6b6;
			}
		}
	}
</style>

<script>
	export default {
		props: ['act','img'],
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