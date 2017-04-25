<template>
<transition name="slide-up">
	<div class="MaskRules" v-show="mask.show">
		<div class="cell">
			<div class="mask-panel">
				<img class="close" :src=" img+'/main/close.png' " @click="$store.dispatch({type:'HIDE',what:'mask_rules'})"/>
				<img class="rules_header" :src=" img+'/main/rules_title.png' "/>

				<div class="text">
					<p><span class="no_">1</span>活动时间：4月17日-30日。</p>
					<p><span class="no_">2</span>用户可随机文案并更换图片组成自己的阅读自由主义海报。</p>
					<p><span class="no_">3</span>海报可分享到微信，QQ和微博等渠道。</p>
					<p><span class="no_">4</span>活动最终解释权归QQ阅读所有。</p>
				</div>

			</div>
		</div>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskRules {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	// transition: opacity 1s;
	.cell {
		display: table-cell;
		width: 100%; height: 100%;
		vertical-align: middle;
		.mask-panel {
			position: relative;
			width: 6.28rem;
			margin: auto;
			padding-top: 0.64rem; padding-bottom: 0.68rem;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: 0.15rem; top: 0.15rem;
				width: 0.5rem;
			}
			.rules_header {
				width: 2.6rem;
				margin: auto; margin-bottom: 0.4rem;
			}
			.text {
				width: 100%;
				overflow: hidden;
				p {
					position: relative;
					padding-left: 0.66rem; padding-right: 0.5rem;
					margin-bottom: 0.2rem;
					font-size: 0.24rem; line-height: 0.5rem;
					color: #633e3c;
					overflow: hidden;
					.no_ {
						box-sizing: border-box;
						position: absolute; left: 0.16rem; top: 0.08rem;
						width: 0.34rem; height: 0.34rem;
						border-radius: 1000px;
						font-size: 0.24rem; line-height: 0.36rem;
						text-align: center;
						color: white;
						background: #bd886c;
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
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_rules;
		}
	},
	mounted: function(){
	},
	methods: {
	}
};
</script>