<template>
<div class="MaskConfirm"
v-show="mask_confirm.show">
	<div class="mask-panel">
		<div class="top">选择这本书免费读？</div>
		<ul class="bottom">
			<li class="cancel" @click="cancel">取消</li>
			<li class="confirm" @click="confirm">确认</li>
		</ul>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskConfirm {
	@grey: #d8d8d8;

	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	transition: opacity 1s;
	.mask-panel {
		overflow: hidden;
		position: absolute; left: 0; top: 0; bottom: 0; right: 0;
		width: 5.2rem; height: 3.66rem;
		margin: auto;
		border-radius: 0.1rem; background: white;
		.top {
			box-sizing: border-box;
			margin-top: 1.2rem; margin-bottom: 0.9rem;
			font-size: 0.32rem; font-weight: normal; text-align: center;
			color: #333333;
		}
		.bottom {
			padding-bottom: 0.3rem;
			overflow: hidden;
			li {
				width: 2.2rem; height: 0.76rem; line-height: 0.76rem;
				font-size: 0.28rem; text-align: center;
				border-radius: 0.2rem;
				box-shadow: 0 0.06rem 0 #c8c8c8;
				color: white;
			}
			.cancel {
				float: left;
				margin-left: 0.3rem;
				background: #a7a7a7;
			}
			.confirm {
				float: right;
				margin-right: 0.3rem;
				background: #e7a532;
			}
		}
	}
}
</style>

<script>
module.exports = {
	computed: {
		mask_confirm(){
			return this.$store.state.mask_confirm;
		}
	},
	methods: {
		cancel: function(){
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			})
		},
		confirm: function(){
			this.$store.dispatch({
				type: 'PICK_BOOK',
				bid: this.$store.state.books.candidate
			})
		}
	}
};
</script>