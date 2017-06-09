<template>
<div class="MaskDownload"
v-show="mask_confirm.show">
	<div class="cell">
		<div class="mask-panel">
			<img class="close" :src=" img+'/main/close.png' "
			@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})"/>

			<div class="top">
				<p class="p0">{{conf.type==='two'?'超值好书打包买':'好书抢购倒计时'}}</p>
				<p class="p1">{{conf.type==='two'?'9本优惠购':('《'+book_five.title+'》')}}</p>
			</div>
			<div class="middle">
				<p class="p0">
					<!-- <div></div> -->
					<span class="small">价格：</span>
					<span class="big">{{price*100}}</span>
					<span class="small">书币</span>
				</p>
				<p class="p1">
					<span class="small">余额：</span>
					<span class="big">{{coins}}</span>
					<span class="small">书币+</span>
					<span class="big">{{bills}}</span>
					<span class="small">书券</span>
				</p>
			</div>
			<div class="ButtonRaisedFive"
			@click="confirm">
				{{enoughMoney?'确认购买':'余额不足，充值购买'}}
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
			overflow: hidden;
			box-sizing: border-box;
			position: relative;
			width: 5.2rem;
			padding: 0 0.38rem;
			margin: auto;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: 0.22rem; top: 0.22rem;
				width: 0.31rem;
				z-index: 999;
			}
			.top {
				box-sizing: border-box;
				padding-top: 0.38rem;
				padding-bottom: 0.18rem;
				border-bottom: 1px dashed @grey;
				.p0,.p1 {
					font-size: 0.32rem; line-height: 0.48rem; font-weight: normal; text-align: center;
					color: #898989;
				}
			}
			.middle {
				box-sizing: border-box;
				overflow: hidden;
				.p0 {
					height: 0.36rem;
					margin-top: 0.24rem;
					margin-bottom: 0.29rem;
					line-height: 0.36rem;
					overflow: hidden;
					span {
						display: block;
						float: left;
						height: 0.36rem;
						line-height: 0.36rem;
					}
					.small {
						font-size: 0.24rem;
						vertical-align: middle;
						color: #666666;
					}
					.big {
						font-size: 0.32rem;
						vertical-align: middle;
						color: #ff7561;
					}
				}
				.p1 {
					height: 0.36rem;
					margin-top: 0.24rem;
					margin-bottom: 0.29rem;
					line-height: 0.36rem;
					overflow: hidden;
					span {
						display: block;
						float: left;
						height: 0.36rem;
						line-height: 0.36rem;
					}
					.small {
						font-size: 0.24rem;
						vertical-align: middle;
						color: #666666;
					}
					.big {
						font-size: 0.32rem;
						vertical-align: middle;
						color: #555555;
					}
				}
			}
		}
	}
}
@color-bg: #3fbc82;
@color-shadow: #31a06c;
.ButtonRaisedFive {
	position: relative; display: block; overflow: hidden; z-index: 0;
	width: 3.3rem; height: 0.94rem;
	margin: auto; margin-bottom: 0.28rem;
	color: white;
	font-size: 0.32rem; font-weight: 600; text-align: center; line-height: 0.94rem;
	border-radius: 0.08rem;
	cursor: pointer;
	// transition-property: transform box-shadow;
	// transition-duration: 0.1s;
	background: @color-bg;
	box-shadow: 0 0.04rem 0 @color-shadow;
	&:active {
		background: @color-shadow;
		box-shadow: 0 0.04rem 0 @color-shadow;
		// transform: translate3d(0,0.04rem,0);
	}
}
</style>

<script>
module.exports = {
	computed: {
		coins() {
			return this.$store.state.coins;
		},
		bills() {
			return this.$store.state.bills;
		},
		price() {
			return this.$store.state.price;
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
			if(this.enoughMoney) {
				this.$store.dispatch({
					type: 'HIDE',
					what: 'mask_confirm'
				})
				this.$store.dispatch({
					type: 'TO_BUY'
				})
			}else {
				this.$store.dispatch({
					type: 'TO_CHARGE'
				})
			}
		}
	}
};
</script>