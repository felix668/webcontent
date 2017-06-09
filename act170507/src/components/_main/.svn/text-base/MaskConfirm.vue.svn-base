<template>
<div class="MaskDownload"
v-show="mask_confirm.show">
	<div class="cell">
		<div class="mask-panel">
			<img class="close" :src=" img+'/main/close.png' "
			v-show="mask_confirm.hasCross"
			@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})"/>
			
			<div class="inner"
			v-show=" mask_confirm.state==='to_buy' ">
				<div class="white_">
					<div style="width:100%; font-size: 0.32rem; font-weight:bold; line-height:0.48rem; text-align:center; color:#444444;">
						您尚未订阅《白鹿原》<br/>
						立即订阅即可领全额{{name_bill}}哦
					</div>
				</div>
				<div class="btn__"
				@click="$store.dispatch({type:'SHOW_MASK',case:'confirm'})">
					立即订阅
				</div>
			</div>

			<div class="inner"
			v-show="mask_confirm.state==='confirm'">
				<div class="top">
					<p class="p0">订阅多少返多少</p>
				</div>
				<div class="middle">
					<div class="p0">
						<span class="small black">价格：</span>
						<span class="big red">{{(data.price*100).toFixed(0)}}</span>
						<span class="small black">{{name_coin}}</span>
					</div>
					<p class="p0">
						<span class="small black">余额：</span>
						<span class="big black">{{data.coins}}</span>
						<span class="small black">{{name_coin}}</span>
						<span class="small black"
						style="margin:0 0.1rem;">+</span>
						<span class="big black">{{data.bills}}</span>
						<span class="small black">{{name_bill}}</span>
					</p>
				</div>
				<div class="btn__"
				@click="confirm">
					{{enoughMoney?'确认购买':'余额不足，充值购买'}}
				</div>
			</div>

			<div class="inner"
			v-show=" mask_confirm.state==='success' ">
				<div class="white_">
					<div style="width:100%; font-size: 0.32rem; font-weight:bold; line-height:0.48rem; text-align:center; color:#444444;">
						购买成功！<br/>
					</div>
				</div>
				<div class="btn__"
				@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})">
					我知道了
				</div>
			</div>

			<div class="inner"
			v-show=" mask_confirm.state==='failed' ">
				<div style="position:relative; background:white; height:3rem; overflow:hidden;">
					<img style="width:0.73rem; margin:auto; margin-top:0.52rem;" :src=" img+'/main/unhappy_face.png' "/>
					<div style="position:absolute; left:0; top:1.5rem; width:100%; font-size: 0.32rem; font-weight:bold; line-height:0.48rem; text-align:center; color:#444444;">
						购买未成功<br/>
						请重试
					</div>
				</div>
				<div class="btn__"
				@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})">
					知道了
				</div>
			</div>

			<div class="inner"
			v-show=" mask_confirm.state==='success_taken' ">
				<div class="white_">
					<div style="">
						<div style="width:100%; margin-bottom:0.25rem; font-size:0.32rem; font-weight:bold; line-height:0.48rem; text-align:center; color:#444444;">恭喜获得<span style="color:#cc3f49;">{{data.bills_taken}}</span>{{name_bill}}</div>
						<div style="width:100%; font-size:0.22rem; font-weight:normal; color:#949494; text-align:center;">有效期30天</div>
					</div>
				</div>
				<div class="btn__"
				@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})">
					好的
				</div>
			</div>

			<div class="inner"
			v-show=" mask_confirm.state==='failed_to_take' ">
				<div style="position:relative; background:white; height:3rem; overflow:hidden;">
					<img style="width:0.73rem; margin:auto; margin-top:0.52rem;" :src=" img+'/main/unhappy_face.png' "/>
					<div style="position:absolute; left:0; top:1.5rem; width:100%; font-size: 0.32rem; font-weight:bold; line-height:0.48rem; text-align:center; color:#444444;">
						{{data.msg}}
					</div>
				</div>
				<div class="btn__"
				@click="$store.dispatch({type:'HIDE',what:'mask_confirm'})">
					知道了
				</div>
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
			width: 4.94rem;
			// padding: 0 0.38rem;
			margin: auto;
			.close {
				position: absolute; right: -0.28rem; top: -0.28rem;
				width: 0.6rem;
				z-index: 999;
			}
			.inner {
				position: relative;
				width: 100%; height: 100%;
				border-radius: 0.1rem; background: white;
				overflow: hidden;
				.white_ {
					width: 100%;
					padding: 1rem 0;
					background: white;
					overflow: hidden;
				}
			}
			.top {
				box-sizing: border-box;
				padding-top: 0.42rem;
				padding-bottom: 0.34rem;
				border-bottom: 1px dashed @grey;
				margin: 0 0.28rem;
				.p0 {
					font-size: 0.32rem;
					font-weight: 600; text-align: center;
					color: #444444;
				}
			}

			.middle {
				box-sizing: border-box;
				padding: 0.26rem 0.28rem;
				overflow: hidden;
				.p0 {
					height: 0.72rem;
					line-height: 0.72rem;
					overflow: hidden;
					span {
						display: block;
						float: left;
						height: 0.72rem;
						line-height: 0.72rem;
					}
					.small {
						font-size: 0.24rem;
					}
					.big {
						font-size: 0.4rem;
						font-weight: 600;
					}
					.black {
						color: #444444;
					}
					.grey {
						color: #949494;
					}
					.red {
						color: #cc3f49;
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

			.btn__ {
				width: 100%; height: 1.1rem;
				line-height: 1.1rem;
				font-size: 0.3rem;
				font-weight: 600;
				background: #cc3f49;
				text-align: center;
				color: white;

			}
		}
	}
}
</style>

<script>
module.exports = {
	computed: {
		name_bill() {
      return this.$store.getters.name_bill;
    },
    name_coin() {
    	return this.$store.getters.name_coin;
    },
		data() {
			return this.$store.state.data;
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