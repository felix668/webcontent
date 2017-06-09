<template>
<div class="MaskDownload"
v-show="mask_confirm.show">
	<div class="cell">
		<div class="mask-panel">
			<img class="close" :src=" img+'/main/close.png' "
			v-show="mask_confirm.hasCross"
			@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})"/>

			<div class="inner failed"
			v-show=" mask_confirm.state==='failed' ">
				<div class="title">
					刮奖失败
				</div>
				<div class="text">
					需要在活动期间开通包月即可刮奖，100%中奖，不支持短信，包月体验卡开通哦
				</div>
				<img class="tape_3_2" :src="img+'/main/tape_3_2.png'"
				@click="$store.dispatch({type:'TO_BUY',month:3})"/>
				<img class="tape_6_2" :src="img+'/main/tape_6_2.png'"
				@click="$store.dispatch({type:'TO_BUY',month:6})"/>
				<img class="tape_12_2" :src="img+'/main/tape_12_2_'+meta.platform+'.png'"
				@click="$store.dispatch({type:'TO_BUY',month:12})"/>
			</div>

			<div class="inner out"
			v-show=" mask_confirm.state==='out' ">
				<div class="info">
					很遗憾<br/>
					来晚一步，奖品已被抢光
				</div>
				<img class="btn_known" :src="img+'/main/btn_known.png'"
				@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})"/>
			</div>

		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskDownload {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	transition: opacity 1s;
	.cell {
		display: table-cell;
		vertical-align: middle;
		.mask-panel {
			box-sizing: border-box;
			position: relative;
			width: 5.2rem;
			// padding: 0 0.38rem;
			margin: auto;
			.close {
				position: absolute; right: 0.26rem; top: 0.26rem;
				width: 0.26rem;
				z-index: 999;
			}
			.inner {
				position: relative;
				width: 100%; height: 100%;
				background: #f5f6dd;
				border-radius: 0.1rem;
				overflow: hidden;
				.white_ {
					width: 100%;
					padding: 1rem 0;
					background: white;
					overflow: hidden;
				}
			}

			.failed {
				.title {
					font-size: 0.32rem;
					text-align: center;
					color: #333333;
					margin-top: 0.32rem;
					margin-bottom: 0.28rem;
				}
				.text {
					box-sizing: border-box;
					width: 100%;
					padding: 0 0.4rem;
					font-size: 0.28rem;
					line-height: 0.42rem;
					text-align: justify;
					margin-bottom: 0.16rem;
				}
				.tape_3_2 {
					width: 4.38rem;
					margin: auto;
					margin-bottom: 0.12rem;
				}
				.tape_6_2 {
					width: 4.38rem;
					margin: auto;
					margin-bottom: 0.12rem;
				}
				.tape_12_2 {
					width: 4.38rem;
					margin: auto;
					margin-bottom: 0.12rem;
				}
			}

			.out {
				.info {
					font-size: 0.28rem;
					line-height: 0.42rem;
					text-align: center;
					color: #666666;
					margin-top: 1rem;
					margin-bottom: 0.9rem;
				}
				.btn_known {
					width: 4.38rem;
					margin: auto; margin-bottom: 0.23rem;

				}
			}
		}
	}
}
</style>

<script>
module.exports = {
	computed: {
		data() {
			return this.$store.state.data;
		},
		meta() {
			return this.$store.state.meta;
		},
		enoughMoney() {
			return this.$store.getters.enoughMoney;
		},
		book_five() {
			return this.$store.state.book_five;
		},
		conf() {
			return this.$store.state.conf;
		},
		img() {
			return this.$store.state.img;
		},
		mask_confirm(){
			return this.$store.state.mask_confirm;
		}
	},
	methods: {
		hide: function(){
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			})
		},
		confirm: function(){
			if (this.enoughMoney) {
				this.$store.dispatch({
					type: 'HIDE',
					what: 'mask_confirm'
				})
				this.$store.dispatch({
					type: 'TO_PAY'
				})
			} else {
				this.$store.dispatch({
					type: 'TO_CHARGE'
				})
			}
		}
	}
};
</script>