<template>
<div class="MaskInfo" v-show="state.show">
	<div class="cell">
		<div class="mask-panel">
			<!-- <img class="close" :src=" img+'/close.png' "
			@click="act({type:'HIDE',what:'mask_rules'})"/> -->
			<p class="p0">
				成功领取<span>30天会员</span>资格
			</p>
			<p class="p1">
				快去查看更多会员专享好书吧
			</p>
			<p class="p2">
			30天会员稍后会直接发放到您的账户，
请到<span>「我的账户」</span>中查看
			</p>

			<img class="btn" :src=" img+'/btn_got_it.png' "
			@click="click"/>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskInfo {
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
			box-sizing: border-box;
			position: relative;
			width: 4.92rem;
			margin: auto;
			padding-left: 0.32rem; padding-right: 0.32rem;
			padding-top: 0.44rem; padding-bottom: 0.34rem;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: -0.3rem; top: -0.3rem;
				width: 0.6rem;
			}
			.p0 {
				font-size: 0.34rem; font-weight: bold;
				line-height: 0.56rem; text-align: center;
				color: #444444;
				span {
					color: #d86060;
				}
			}
			.p1 {
				padding-bottom: 0.2rem;
				border-bottom: 1px dashed #cccccc;
				margin-bottom: 0.18rem;
				font-size: 0.28rem; color: #666666;
				line-height: 0.47rem; text-align: center;
			}
			.p2 {
				margin-bottom: 0.16rem;
				font-size: 0.24rem; color: #8a7473;
				line-height: 0.48rem;
				text-align: center;
				span {
					font-weight: bold;
				}
			}
			.btn {
				width: 3.55rem;
				margin: auto;
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		img: {},
		state: {},
		act: {}
	},
	methods: {
		click: function(){
			this.act({type:'HIDE',what:'mask_info'});
			this.act({type:'SWITCH',direction:'up'});
		}
	}
};
</script>