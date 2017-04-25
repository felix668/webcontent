<template>
	<div class="Monthly">
		<img class="banner_monthly" :src=" img+'/banner_monthly.png' "/>
		<div class="panel--">
			<div class="panel-upper">
				<div class="table">
					<!-- <span class="small">现在</span> --><span class="bold">现在开通/续费1个月</span>
					<span class="small">+</span>
					<span class="big">送1个月</span>
				</div>
				<p class="info">最多只赠送一个月包月哦！</p>
				<Btn 
				:act="act" 
				:text=" '立即开通/续费1个月' " 
				:cb="'OPEN'"
				:style=" 'margin-bottom: 0.24rem;' "></Btn>
				<p class="bottom" v-if="!haveGift">
					已开通/续费包月，<a @click="GET_GIFT">领取赠送的1个月包月></a>
				</p>
				<p class="bottom" v-if="haveGift">
					<a @click="act({type:'TO_BAOYUE_ZONE'})">已领取，去包月书区看书></a>
				</p>
			</div>
			<img class="curve" :src=" img+'/curve.png' "/>
			<div class="previledge">
				- 包月专享 -
			</div>
			<img class="covers" :src=" img+'/covers.png' "/>
			<p class="line line_1">1. 包月库内10万册书籍在线免费读</p>
			<p class="line line_2">2. 非包月库内书籍、看书听书8折优惠</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Monthly {
		width: 100%;
		.banner_monthly {
			width: 4.63rem;
			margin: auto; margin-bottom: 0.36rem;
		}
		.panel-- {
			box-sizing: border-box;
			width: 6.5rem;
			margin: auto;
			margin-bottom: 0.76rem;
			border-radius: 0.25rem;
			border: 0.04rem solid black;
			background: #fbeec7;
			overflow: hidden;
			.panel-upper {
				position: relative;
				background: #3b8756;
				overflow: hidden;
				.table {
					width: 100%; height: 0.5rem; line-height: 0.5rem;
					margin-top: 0.28rem; margin-bottom: 0.22rem;
					vertical-align: middle;

					//background: #3b8756;
					text-align: center;
					font-size: 0.36rem;
					color: white;
					span.small {
						vertical-align: middle;
						font-size: 0.36rem;
					}
					span.bold {
						vertical-align: middle;
						font-size: 0.36rem; font-weight: bold;
					}
					span.big {
						display: inline-block;
						height: 0.5rem;
						vertical-align: middle;
						font-size: 0.5rem; line-height: 0.5rem; font-weight: bold;
					}

				}
				.info {
					padding-bottom: 0.2rem;
					//background: #3b8756;
					font-size: 0.26rem; text-align: center; color: white;
				}
				.btn {
					width: 5.18rem; height: 0.86rem;
					margin: auto; margin-bottom: 0.24rem;
					border-radius: 0.25rem;
					border: 0.04rem solid black;
					background: #ffb115;
					font-size: 0.36rem; line-height: 0.86rem;
					text-align: center; font-weight: bold;
					color: #443594;
				}
				.bottom {
					margin-bottom: 0.34rem;
					font-size: 0.3rem; text-align: center;
					color: white;
					font-weight: bold;
					a {
						color: #ffdd84;
						text-decoration: underline;
					}
				}
			}
			.curve {
				width: 100%;
				margin-bottom: 0.18rem;
			}
			.previledge {
				margin-bottom: 0.48rem;
				text-align: center;
				font-size: 0.4rem; font-weight: bold;
				color: #63372a;
			}
			.covers {
				width: 5.46rem;
				margin: auto; margin-bottom: 0.36rem;
			}
			.line {
				padding: 0 0.7rem;
				font-size: 0.3rem; line-height: 0.48rem; color: #63372a;
			}
			.line_2 {
				margin-bottom: 0.36rem;
			}
		}
	}
</style>

<script>
	export default {
		props: ['ios','vip','act','haveGift','img'],
		components: {
			Btn: require('./Btn.vue')
		},
		methods: {
			GET_GIFT: function(){
				this.act({
					type: 'GET_GIFT'
				})
			}
		}
	}
</script>