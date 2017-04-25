<template>
	<div class="Rules">
		<img class="wave" :src=" 'img/wave.png' "/>
		<div class="rContent">
			<div class="rTitle">
				活动规则
			</div>
			<p><span>1.</span>活动时间：11月24日 10:00 - 11月27日 24:00</p>
			<p><span>2.</span>秒杀专场：每天3场活动，每场2本书，指定场次活动开始后，将发放100份限免权限，有效期7天，先到先得，送完为止。</p>
			<p><span>3.</span>我要折扣：每本书达到指定“想看”人数后，折扣开启，持续7天，活动期间，每人有两次“想看”的机会。</p>
			<p v-if="ios"><span>4.</span>ios游客用户需要将书手动加入书架。</p>
			<div class="copyright">
				本活动最终解释权归QQ阅读所有
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Rules {
		@purple: #7c5ea3;
		width: 100%;
		.wave {
			position: relative; width: 100%;
		}
		.rContent {
			padding-top: 0.5rem;
			background: #272c4c;
			.rTitle {
				margin-bottom: 0.3rem;
				font-size: 0.4rem; text-align: center; font-weight: bold;
				color: @purple;
			}
			p {
				position: relative;
				padding-left: 0.6rem; padding-right: 0.32rem;
				font-size: 0.24rem; line-height: 0.4rem;
				color: @purple;
				overflow: hidden;
				span {
					position: absolute; left: 0.32rem; top: 0;
					font-size: 0.24rem; line-height: 0.4rem;
					color: @purple;
				}
			}
			.copyright {
				padding-top: 0.24rem;
				padding-bottom: 0.38rem;
				font-size: 0.24rem;
				text-align: center; color: @purple;
			}
		}
	}
</style>

<script>
	export default {
		props: ['ios']
	}
</script>