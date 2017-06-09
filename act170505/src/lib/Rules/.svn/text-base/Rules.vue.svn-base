<template>
	<div class="Rules">
		<div class="rContent">
			<!-- <img class="title" :src=" img+'/rules.png' "/> -->
			<div class="title">- 活动规则 -</div>
			<div class="text">
				<p><span class="no_">1.</span>活动时间：4月23日-5月1日。</p>
				<p><span class="no_">2.</span>用户每阅读30分钟可捐1000字，字数最终累计成图书捐赠给农家书屋公益项目。</p>
				<p><span class="no_">3.</span>活动期间，大神与您共同读书，大神捐赠字数同样用于公益事业。</p>
				<p><span class="no_">4.</span>活动期间每名用户参与次数不限。</p>
				<p><span class="no_">5.</span>本活动最终解释权归QQ阅读所有{{meta.platform==='ios'?'，与苹果公司无关':''}}。</p>
			</div>
			<img class="logo" :src=" img+'/main/logo.png' "/>
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
		padding-top: 0.7rem;
		// margin-bottom: 1.72rem;
		// background: #090f14;
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
			.logo {
				width: 2.3rem;
				margin: 0.56rem auto 0.15rem auto;
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
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			meta(){
				return this.$store.state.meta;
			}
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