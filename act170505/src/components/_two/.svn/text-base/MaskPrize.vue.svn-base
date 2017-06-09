<template>
	<transition name="fade">
		<div class="MaskPrize"
		v-show=" mask_prize.show "
		@touchmove="touchmove">
			<div class="cell">
				<div class="content_outer">
					<img class="gift" :src=" img+'/main/gift.png' "
					v-if=" conf.type==='two' "/>
					<img class="crown" :src=" img+'/main/crown.png' "
					v-if=" conf.type==='five' "/>

					<img class="close" :src=" img+'/main/close.png' "
					@click="$store.dispatch({type:'HIDE',what:'mask_prize'})"/>
					<div class="content_inner">

						<p class="p0">{{conf.type==='two'?'抢购成功':'回禀陛下'}}</p>
						<p class="p1">{{conf.type==='two'?'买了这么多好书，快去书架看看吧':'这本书已加入书架，请您阅览。'}}</p>
						<button-raised></button-raised>	

					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="less" scoped>
	.MaskPrize {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 9999;
		.cell {
			display: table-cell;
			vertical-align: middle;
			position: relative;
			width: 100%; height: 100%;
			.content_outer {
				position: relative;
				width: 5.2rem;
				box-sizing: border-box;
				margin: auto;
				.gift {
					position: absolute; left: 1.10rem; top: -0.62rem;
					width: 2.85rem;
					z-index: 999;
				}
				.crown {
					position: absolute; left: 1.10rem; top: -0.62rem;
					width: 2.85rem;
					z-index: 999;
				}
				.close {
					position: absolute; right: 0.22rem; top: 0.22rem;
					width: 0.31rem;
					z-index: 999;
				}
				.content_inner {
					position: relative;
					box-sizing: border-box;
					width: 5.2rem;
					border-radius: 0.1rem;
					padding-top: 1.22rem;
					background: white;
					overflow: hidden;
					.p0 {
						box-sizing: border-box;
						width: 100%;
						margin-bottom: 0.26rem;
						font-size: 0.32rem; color: black; line-height: 0.4rem;
						text-align: center;
					}
					.to_contact {
						width: 3rem; height: 0.75rem;
						margin: auto;
						margin-bottom: 0.16rem;
						background: #cfb268;
						color: white;
						text-align: center;
						font-size: 0.28rem; line-height: 0.75rem;
					}
					.p1 {
						box-sizing: border-box;
						width: 100%;
						margin-bottom: 0.35rem;
						font-size: 0.28rem; color: #898989;
						text-align: center;
					}
				}
			}
			
		}
	}
</style>

<script>
export default {
	components: {
		ButtonRaised: require('./ButtonRaised.vue')
	},
	props: {
	},
	data: function(){
		return {
		}
	},
	computed: {
		conf() {
			return this.$store.state.conf;
		},
		img () {
			return this.$store.state.img;
		},
		mask_prize () {
			return this.$store.state.mask_prize;
		}
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		}
	}
}
</script>
