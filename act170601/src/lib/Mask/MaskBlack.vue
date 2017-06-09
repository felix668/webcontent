<template>
<div class="MaskBlack" v-show="state.show">
	<div class="cell">
		<div class="mask-panel">
			<p class="p0">
				活动只针对特定用户参加
			</p>
			<p class="p1">
				祝新春快乐~~
			</p>

			<img class="btn" :src=" img+'/btn_got_it.png' "
			@click="click"/>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskBlack {
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
			padding-top: 1rem; padding-bottom: 0.64rem;
			border-radius: 0.1rem; background: white;
			.p0 {
				font-size: 0.34rem; font-weight: bold;
				line-height: 0.7rem; text-align: center;
				color: #444444;
			}
			.p1 {
				margin-bottom: 0.32rem;
				font-size: 0.34rem; font-weight: bold;
				line-height: 0.7rem; text-align: center;
				color: #d86060;
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
			this.act({type:'HIDE',what:'mask_black'});
		}
	}
};
</script>