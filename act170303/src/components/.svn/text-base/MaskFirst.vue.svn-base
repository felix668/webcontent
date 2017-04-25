<template>
	<div class="MaskFirst"
	@touchmove="touchmove">
		<div class="content_666">
			<div class="content_667"
			:style=" 'background:url(img/panel_books.png);background-size:100% 100%;' ">
				<img class="close" :src=" 'img/close.png' "
				@click="HIDE_MASK"/>
				
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskFirst {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 9999;
		.content_666 {
			display: table-cell;
			vertical-align: middle;
			position: relative;
			width: 100%; height: 100%;
			.content_667 {
				position: relative;
				box-sizing: border-box;
				width: 5.73rem; height: 8.48rem;
				margin: auto;
				overflow: hidden;
				
				.close {
					position: absolute; right: 0.55rem; top: 0.9rem;
					width: 0.46rem; height: 0.46rem;
				}
				.line1 {
					margin-top: 0.66rem;
					margin-bottom: 0.16rem;
					font-size: 0.36rem; font-weight: bold;
					text-align: center;
				}
				.line2 {
					margin-bottom: 0.77rem;
					font-size: 0.28rem;
					text-align: center;
					color: #666666;
				}
			}
		}
	}
</style>

<script>
export default {
	components: {
	},
	props: {
		act: {}
	},
	data: function(){
		return {
		}
	},
	computed: {

	},
	methods: {
		HIDE_MASK: function(){
			this.act({
				type: 'HIDE_MASK'
			})
		},
		touchmove: function(e){
			e.stopPropagation();
		}
	}
}
</script>
