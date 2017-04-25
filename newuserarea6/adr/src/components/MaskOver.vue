<template>
	<div class="MaskOver">
		<div class="content_666">
			<div class="content_667">
				<img :src=" img+'/over.png' ">
				<p>本期活动已结束</p>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskOver {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: white;
		z-index: 9999;
		.content_666 {
			display: table-cell;
			vertical-align: middle;
			position: relative;
			width: 100%; height: 100%;
			.content_667 {
				img {
					margin: auto;
					margin-bottom: 0.2rem;
					width: 3rem;
				}
				p {
					font-size: 0.3rem;
					text-align: center;
				}
			}
		}
	}
</style>

<script>
export default {
	props: ['img'],
	data: function(){
		return {
		}
	}
}
</script>
