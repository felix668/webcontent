<template>
	<div class="MaskInfo"
	@touchmove="touchmove">
		<div class="content_666">
			<div class="content_667"
			:style=" 'background:url(img/panel_books.png);background-size:100% 100%;' ">
				<img class="close" :src=" 'img/close.png' "
				@click="HIDE_MASK"/>
				<p class="empty" v-if="books.length===0">尚未有解锁限免权的书籍</p>
				<div class="list">
					<div class="item"
					v-for="a in books">
						<img class="cover" :src=" 'img/covers/x_'+a.bid+'.jpg' "
						@click="act({type:'_TO_BOOK',bid:a.bid})"/>
						<div class="right">
							<p class="title">{{a.title}}</p>
							<img class="pill" :src=" 'img/pill.png' "/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MaskInfo {
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
				.empty {
					position: absolute; left: 0; top: 4.1rem; 
					width: 100%;
					font-size: 0.28rem; color: black; text-align: center;
				}
				.list {
					width: 4.28rem; height: 6.66rem;
					margin: auto;
					margin-top: 1.5rem;
					overflow: scroll;
					.item {
						padding-top: 0.25rem;
						padding-bottom: 0.25rem;
						border-top: 1px dotted grey;
						&:nth-child(1) {
							border-top: none;
						}
						overflow: hidden;
						.cover {
							float: left;
							width: 0.98rem; height: 1.28rem;
							margin-right: 0.22rem;
						}
						.right {
							float: left;
							width: 2.8rem;
							.title {
								width: 2.8rem;
								margin-top: 0.18rem;
								margin-bottom: 0.3rem;
								font-size: 0.28rem; color: #000000;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.pill {
								width: 1.57rem;
							}
						}
					}
				}
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
		act: {},
		writers: {}
	},
	data: function(){
		return {
		}
	},
	computed: {
		books: function(){
			var books = [];
			this.writers.forEach(a=>{
				if( a.unlocked ){
					books.push(...a.books);
				};
			})
			return books;
		}
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
