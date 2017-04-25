<template>
<div class="mask-download" v-show="show">
	<div class="mask-panel">
		<p class="top">下载QQ阅读，畅读海量小说</p>
		<p class="middle_part">如果还未安装QQ阅读，你可以：</p>
		<ul class="bottom">
			<li class="confirm" @click="TO_DOWNLOAD">下载QQ阅读</li>
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
	background: rgba(0,0,0,0.8);
	transition: opacity 1s;
	z-index: 999;
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
		.middle_part {
			box-sizing: border-box;
			height: 1.8rem;
			border-bottom: 1px solid #d8d8d8;
			font-size: 0.28rem; line-height: 1.8rem; text-align: center;
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
				type: 'HIDE_MASK'
			});
		},
		TO_DOWNLOAD: function(){
			this.act({
				type: 'TO_DOWNLOAD'
			})
		}
	}
};
</script>