<template>
	<div class="MaskComments"
	v-show="mask.show">
		<div class="content_666">
			<div class="content_667"
			:style=" 'background-image:url('+img+'/bg.jpg);background-size: 4rem 4rem;' ">
				<img class="close" :src=" img+'/close.png' "
				@click="hide"/>
				<div id="iscroll">
					<div class="scroller">
						<p class="p0">媒体评论</p>
						<p class="p1">朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。</p>
						<p class="p1">舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系，就像萧红和呼兰河的关系。</p>
						<p class="p1">王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变得很小，人是偶然出现的东西。那里的世界很寂寞，人会无端制造出喧哗。</p>
						<p class="p0">读者评价</p>
						<p class="p1">很多年不曾见过的温暖又干净的文字——dana (成都)</p>
						<p class="p1">最几年读过的最好的华语散文，让我对文学有了一些新的信心，最好的文字，在文坛之外，在真实的民间——Xiao (New York City)</p>
						<p class="p1">文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起一阵感动。好想去阿勒泰看一看。 ——Fairylandyy</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskComments {
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
				padding-top: 0.5rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				padding-bottom: 0.66rem;
				margin: auto;
				overflow: hidden;
				#iscroll {
					position: relative;
					width: 100%; height: 7.35rem;
					//overflow: hidden;
					overflow-y: scroll;
					.scroller {
						position: absolute;
						overflow: hidden;
						.p0 {
							padding-top: 0.55rem;
							padding-bottom: 0.4rem;
							font-size: 0.36rem; font-weight: bold;
							color: #676b74;
							border-bottom: 1px solid #cecfd0;
						}
						.p1 {
							padding: 0.2rem 0;
							font-size: 0.28rem; line-height: 0.44rem;
							color: #676b74;
							border-bottom: 1px solid #cecfd0;
						}
					}
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
	data: function(){
		return {
		}
	},
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_comments;
		}
	},
	mounted: function(){
		// setTimeout(()=>{
		// 	console.log('dog')
		// 	var myScroll = new IScroll('#iscroll', { mouseWheel: true });
		// },1000);
	},
	methods: {
		touchmove: function(e){
			e.stopPropagation();
		},
		hide: function(){
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_comments'
			})
		}
	}
}
</script>
