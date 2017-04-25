<template>
	<div class="Rules">
		<div class="rContent">
			<!-- <img class="title" :src=" img+'/rules.png' "/> -->
			<div class="title">活动规则</div>
			<div class="text"
			v-if="id===2">
				<p><span class="no_">1.</span>活动时间：2017年1月31日-2月4日。</p>
				<p><span class="no_">2.</span>活动期间内，指定用户将领取到30天包月vip体验卡，在包月有效期内，看包月书籍全部免费。</p>
			</div>
			<div class="text"
			v-if="id!==2&&hasDiscount===false">
				<p><span class="no_">1.</span>活动时间：2017年1月31日-2月4日。</p>
				<p><span class="no_">2.</span>活动期间内，此书单内书籍全部免费阅读。</p>
			</div>
			<div class="text"
			v-if="id!==2&&hasDiscount===true">
				<p><span class="no_">1.</span>活动时间：2017年2月5日-2月7日。</p>
				<p><span class="no_">2.</span>活动期间内，可以以优惠价格购买书单内作品，特价结束后将恢复原价。</p>
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
		margin-top: 0.9rem;
		.rContent {
			.title {
				width: 100%;
				font-size: 0.3rem;
				color: @color;
				text-indent: 0.5rem; 
				margin-bottom: 0.2rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.8rem; padding-right: 0.5rem;
					font-size: 0.24rem; line-height: 0.46rem;
					color: @color;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.5rem; top: 0rem;
						// width: 0.3rem; height: 0.3rem;
						// border-radius: 1000px;
						// background: @color;
						font-size: 0.24rem; line-height: 0.46rem;
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