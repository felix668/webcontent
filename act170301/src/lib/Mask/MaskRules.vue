<template>
<div class="MaskRules" v-show="state.show">
	<div class="cell">
		<div class="mask-panel">
			<img class="close" :src=" img+'/close.png' " @click="act({type:'HIDE',what:'mask_rules'})"/>
			<img class="rules_header" :src=" img+'/rules_header.png' "/>

			<div class="text"
			v-if="id===2">
				<p><span class="no_">1</span>活动时间：2017年1月31日-2月4日。</p>
				<p><span class="no_">2</span>活动期间内，指定用户将领取到30天包月vip体验卡，在包月有效期内，看包月书籍全部免费。</p>
			</div>
			<div class="text"
			v-if="id!==2&&hasDiscount===false">
				<p><span class="no_">1</span>活动时间：2017年1月31日-2月4日。</p>
				<p><span class="no_">2</span>活动期间内，此书单内书籍全部免费阅读。</p>
			</div>
			<div class="text"
			v-if="id!==2&&hasDiscount===true">
				<p><span class="no_">1</span>活动时间：2017年2月5日-2月7日。</p>
				<p><span class="no_">2</span>活动期间内，可以以优惠价格购买书单内作品，特价结束后将恢复原价。</p>
			</div>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskRules {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	transition: opacity 1s;
	.cell {
		display: table-cell;
		width: 100%; height: 100%;
		vertical-align: middle;
		.mask-panel {
			position: relative;
			width: 6.6rem;
			margin: auto;
			padding-top: 0.78rem; padding-bottom: 0.88rem;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: -0.3rem; top: -0.3rem;
				width: 0.6rem;
			}
			.rules_header {
				width: 4.79rem;
				margin: auto; margin-bottom: 0.48rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.88rem; padding-right: 0.5rem;
					margin-bottom: 0.5rem;
					font-size: 0.24rem; line-height: 0.46rem;
					color: #633e3c;
					overflow: hidden;
					.no_ {
						position: absolute; left: 0.27rem; top: 0;
						width: 0.36rem; height: 0.36rem;
						border-radius: 1000px;
						font-size: 0.22rem; line-height: 0.36rem;
						text-align: center;
						color: #753827;
						border: 1px solid #753827;
						background: #f8d2a0;
					}
					a {
						color: #cfb268;
					}
				}
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		id: {},
		hasDiscount: {},

		img: {},
		state: {},
		act: {}
	},
	mounted: function(){
	},
	methods: {
	}
};
</script>