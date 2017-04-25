<template>
<div class="MaskDownload">
	<div class="mask-panel">
		<div class="top">下载QQ阅读，畅读海量小说</div>
		<p class="middle">如果还未安装QQ阅读，你可以：</p>
		<ul class="bottom">
			<li class="confirm" @click="downapp">下载QQ阅读</li>
			<li class="cancel" @click="closemask">取消</li>
		</ul>
	</div>
</div>
</template>

<style lang="less" scoped>
.MaskDownload {
	@grey: #d8d8d8;

	z-index: 9999;
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
			border-bottom: 1px solid @grey;
			font-size: 0.3rem; line-height: 0.9rem; font-weight: normal; text-align: center;
		}
		.middle {
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
		data: function(){
			return {
			}
		},
		props:['show'],
		mounted: function(){
		},
		methods: {
			closemask: function(){
				this.show=false;
				console.log(self.show);
			},
			downapp: function(){
				N.downLoad(null, '10026763');
				this.show=false;
			}
		}
};
</script>