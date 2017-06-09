<template>
	<div class="MaskAuthor"
	v-show="mask.show">
		<div class="content_666">
			<div class="content_667"
			:style=" 'background-image:url('+img+'/bg.jpg);background-size: 4rem 4rem;' ">
				<img class="close" :src=" img+'/close.png' "
				@click="hide"/>
				<p class="p0">李娟</p>
				<p class="p1">1979年生于新疆。高中毕业后一度跟随家庭进入阿尔泰深山牧场，经营一家杂货店和裁缝铺，与逐水草而居的哈萨克牧民共同生活。</p>
				<p class="p2">1999年开始写作。出版有散文集《九篇雪》、《我的阿勒泰》、《阿勒泰的角落》、《走夜路请放声歌唱》，在读者中产生巨大回响，被誉为文坛清新之风，来自阿勒泰的精灵吟唱。现供职于阿勒泰喀纳斯景区。</p>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskAuthor {
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
				width: 6.6rem;
				border-radius: 0.2rem;
				padding-top: 0.76rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				padding-bottom: 0.66rem;
				margin: auto;
				overflow: hidden;
				.p0 {
					margin-bottom: 0.46rem;
					font-size: 0.48rem;
					color: #676b74;
				}
				.p1 {
					margin-bottom: 0.48rem;
					font-size: 0.28rem; line-height: 0.48rem;
					color: #676b74;
					text-indent: 0.6rem;
				}
				.p2 {
					font-size: 0.28rem; line-height: 0.48rem;
					color: #676b74;
					text-indent: 0.6rem;
				}
				.close {
					position: absolute; right: 0.28rem; top: 0.28rem;
					width: 0.25rem;
				}
			}
		}
	}
</style>

<script>
export default {
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_author;
		}
	},
	data: function(){
		return {
		}
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		},
		hide: function(){
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_author'
			})
		}
	}
}
</script>
