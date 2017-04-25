<template>
	<div class="FreeBooks">

		<div class="textBellow">
			<p class="name">{{writers[current].name}}</p>
			<p class="desc">{{writers[current].desc}}</p>
		</div>

<!-- 		<div class="books">
			<div class="book"
			v-for="a in books">
				<div class="cover"
				@click="_TO_BOOK(a.bid)">
					<img class="cover_img" :src=" 'img/covers/x_'+a.bid+'.jpg' "/>
					<img class="lock" :src=" 'img/lock.png' "
					v-show=" !yyb&&!unlocked "/>
					<p class="orange"
					v-show=" !yyb&&unlocked ">已加入书架</p>
				</div>
				<p class="title">{{a.title}}</p>
				<p class="price">{{a.price}}元</p>
			</div>
		</div> -->

		<div class="books_container">
			<div class="books"
			v-for="(a,i) in writers"
			v-show=" i===current ">
				<div class="book"
				v-for="b in a.books">
					<div class="cover"
					@click="_TO_BOOK(b.bid)">
						<img class="cover_img" :src=" 'img/covers/x_'+b.bid+'.jpg' "/>
						<img class="lock" :src=" 'img/lock.png' "
						v-show=" !yyb&&!a.unlocked "/>
						<p class="orange"
						v-show=" !yyb&&a.unlocked ">已7天限免</p>
					</div>
					<p class="title">{{b.title}}</p>
					<p class="price">{{b.price}}元</p>
				</div>
			</div>
		</div>

<!-- 		<div class="info" v-if="!yyb">
			<img class="share_to_unlock" :src=" 'img/share_to_unlock.png' "/>
			<p>{{unlocked?'已解锁限免权':'分享即可解锁限免权'}}</p>
		</div> -->
		
		<div class="buttons" v-if="!yyb">
			<img class="share_btn" :src=" 'img/btn_share.png' "
			@click="_SHARE"/>
			<p class="how_many" v-if="!yyb">已有<span>{{total}}</span>人获得限时免费</p>
		</div>
		
		<p class="notice" v-if="!yyb">分享到平台后点击<span>「返回QQ阅读」</span>方可享受限免</p>
		<img class="check_btn" :src=" 'img/check_btn.png' " v-if="!yyb"
		@click="SHOW_MASK"/>
	</div>
</template>

<style lang="less" scoped>
	.FreeBooks {
		width: 100%;
		overflow: hidden;
		.textBellow {
			width: 100%;
			padding-top: 0.76rem;
			.name {
				margin-bottom: 0.24rem;
				text-align: center; font-size: 0.38rem; color: black;
			}
			.desc {
				margin-bottom: 2.64rem;
				text-align: center; font-size: 0.24rem; color: #636363;
			}
		}

		.books {
			box-sizing: border-box;
			display: table;
			margin: auto;
			overflow: hidden;
			.book {
				float: left;
				width: 1.67rem;
				&:nth-child(2) {
					margin-left: 0.75rem;
				}
				&:nth-child(3) {
					margin-left: 0.75rem;
				}
				.cover {
					position: relative;
					width: 1.67rem; height: 2.11rem;
					margin-bottom: 0.34rem;
					// box-shadow: 0 0 0.2rem black;
					.cover_img {
						width: 100%; height: 100%;
					}
					.lock {
						position: absolute; right: 0; bottom: 0;
						width: 0.36rem;
					}
					.orange {
						position: absolute; left: 0; bottom: 0;
						width: 100%; height: 0.36rem; line-height: 0.36rem;
						color: white; text-align: center; font-size: 0.24rem;
						background: #ef7e32; opacity: 0.9;
					}
				}
				.title {
					width: 100%;
					overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
					margin-bottom: 0.1rem;
					font-size: 0.28rem; color: #636363;
				}
				.price {
					font-size: 0.28rem; color: #636363; text-decoration: line-through;
				}
			}
		}
		.info {
			position: relative;
			width: 5.33rem; height: 1.24rem;
			margin: auto;
			.share_to_unlock {
				width: 100%;
			}
			p {
				position: absolute; top: 0.54rem;
				width: 100%;
				text-align: center; color: #302f2b; font-size: 0.28rem;
			}
		}
		
		.buttons {
			position: relative;
			width: 100%; height: 1.95rem;
			margin-top: 0.22rem;
			margin-bottom: 0.37rem;
			overflow: hidden;
			.share_btn {
				width: 4.48rem; margin: auto;
			}
			.how_many {
				position: absolute; left: 0; bottom: 0;
				width: 100%; 
				font-size: 0.28rem; color: #636363; text-align: center;
				span {
					font-size: 0.28rem; color: #ee6a57;
				}
			}
		}
		.notice {
			width: 100%;
			margin-bottom: 0.66rem;
			font-size: 0.24rem; text-align: center; color: #636363;
			span {
				font-weight: bold;
			}
		}
		.check_btn {
			width: 3.93rem; margin: auto; margin-bottom: 0.78rem;
			z-index: 30;
		}
	}
</style>

<script>
	export default {
		props: {
			writers: {},
			current: {},
			act: {},
			total: {},
			yyb: {}
		},
		components: {

		},
		computed: {
			books: function(){
				return this.writers[this.current].books;
			},
			unlocked: function(){
				return this.writers[this.current].unlocked;
			}
		},
		methods: {
			SHOW_MASK: function(){
				this.act({
					type: 'SHOW_MASK'
				})
			},
			_TO_BOOK: function(bid){
				this.act({
					type: '_TO_BOOK',
					bid
				})
			},
			_SHARE: function(){
				this.act({
					type: '_SHARE'
				})
			}
		}
	}
</script>