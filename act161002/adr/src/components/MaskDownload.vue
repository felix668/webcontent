<template>
<div class="mask-download" v-show="show">
	<div class="mask-panel">

		<p class="middle">确定要兑换这本书么？</p>
		<ul class="bottom">
			<li class="confirm" @click="CONFIRM">确定</li>
			<li class="cancel" @click="hide">取消</li>
		</ul>
	</div>
</div>
</template>

<style lang="less" scoped>
.mask-download {
	z-index: 10;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	transition: opacity 1s;
	.mask-panel {
		overflow: hidden;
		position: absolute; left: 0; top: 0; bottom: 0; right: 0;
		width: 5.5rem; height: 3.6rem;
		margin: auto;
		border-radius: 0.1rem; background: white;
		.top {
			box-sizing: border-box;
			height: 0.9rem;
			border-bottom: 1px solid #d8d8d8;
			font-size: 0.28rem; line-height: 0.9rem; font-weight: bold; text-align: center;
		}
		.middle {
			box-sizing: border-box;
			height: 2.7rem;
			border-bottom: 1px solid #d8d8d8;
			font-size: 0.28rem; line-height: 2.7rem; text-align: center;
		}
		.bottom {
			overflow: hidden;
			li {
				float: left;
				width: 50%; height: 0.9rem; line-height: 0.9rem;
				font-size: 0.28rem; text-align: center;
			}
			.confirm {
				background: #3d8dcf;
				color: white;
			}
		}
	}
}
</style>

<script>
module.exports = {
	props: ['show','act'],
	methods: {
		hide: function(){
			this.act({
				type: 'HIDE'
			});
		},
		CONFIRM: function(){
			this.act({
				type: 'CONFIRM'
			})
		}
	}
};
</script>