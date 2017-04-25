<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' "
		style="background:url(img/share/bg_7.png);background-size:100% auto;">
			<img class="logo" :src=" 'img/logo.png' "/>

			<mask-download v-show="mask" :act="act"></mask-download>

			<div class="info">
				<div class="avatar">
					<img :src=" avatar "/>
				</div>
				<div class="text_part"><span>{{nickname}}</span>获得了{{writers[current].name}}大神{{writers[current].books.length}}本书籍的限免阅读权，你也快来参加吧~</div>
			</div>

			<list :writers="writers" :co="co" :act="act"></list>

			<div class="books_container">
				<div class="books"
				v-for="(a,i) in writers"
				v-show=" i===co ">
					<div class="book"
					v-for="b in a.books">
						<div class="cover"
						@click="act({type:'PARTICIPATE'})">
							<img class="cover_img" :src=" 'img/covers/x_'+b.bid+'.jpg' "/>
<!-- 							<img class="lock" :src=" 'img/lock.png' "
							v-show=" !yyb&&!a.unlocked "/>
							<p class="orange"
							v-show=" !yyb&&a.unlocked ">已7天限免</p> -->
						</div>
						<p class="title">{{b.title}}</p>
						<p class="price">{{b.price}}元</p>
					</div>
				</div>
			</div>

<!-- 			<div class="books">
				<div class="book"
				v-for="a in books">
					<div class="cover"
					@click="act({type:'PARTICIPATE'})">
						<img class="cover_img" :src=" 'img/covers/x_'+a.bid+'.jpg' "/>
						<img class="lock" :src=" 'img/lock.png' "
						v-show=" !unlocked "/>
						<p class="orange"
						v-show="unlocked">已加入书架</p>
					</div>
					<p class="title">{{a.title}}</p>
					<p class="price">{{a.price}}元</p>
				</div>
			</div> -->
			<div class="block">
				<img class="participate" :src=" 'img/share/participate_2.png' "
				@click="act({type:'PARTICIPATE'})"/>

				<p class="total">已有<span>{{total}}</span>人获得限时免费</p>
			</div>

			<div class="video_block"
			:style=" 'background:url(img/blurred_bg/'+current+'.jpg);background-size:100% 100%;' ">
				<!-- <img class="light" :src=" 'img/light.png' "/> -->
				<div class="content">
					<p class="name">{{writers[current].name}}</p>
					<p class="desc">{{writers[current].desc}}</p>
					<my-video :video="writers[current]" :current="current" :act="act"></my-video>
				</div>
			</div>

			<p class="text_enter"
			@click="act({type:'PARTICIPATE'})">去QQ阅读观看更多大神祝福视频 >></p>

			<rules></rules>
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<style lang="less" scoped>
	.main {
		position: relative;
		width: 100%; height: 31.8rem;
		overflow: hidden;
		.logo {
			position: absolute; left: 0.64rem; top: 0;
			width: 0.78rem;
		}
		.info {
			position: relative;
			box-sizing: border-box;
			width: 6.56rem;
			margin: auto; margin-top: 5.46rem; margin-bottom: 1.8rem;
			overflow: hidden;
			.avatar {
				float: left;
				width: 1rem; height: 1rem;
				margin-right: 0.34rem;
				border-radius: 1000px;
				overflow: hidden;
				img {
					width: 100%; height: 100%;
				}
			}
			.text_part {
				position: absolute; right: 0; top: 0;
				width: 5.2rem;
				font-size: 0.28rem; line-height: 0.48rem;
				span {
					color: #ee6a57; font-size: 0.28rem;
				}
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

		.block {
			position: relative;
			width: 100%; height: 1.96rem;
			margin-bottom: 2.5rem;
			.participate {
				width: 4.48rem;
				margin: auto;
			}
			.total {
				position: absolute; left: 0; bottom: 0;
				width: 100%; 
				font-size: 0.28rem; color: #636363; text-align: center;
				span {
					font-size: 0.28rem; color: #ee6a57;
				}
			}
		}

		.video_block {
			position: relative;
			width: 100%; height: 7.62rem;
			margin-bottom: 0.35rem;
			//background: grey;
			overflow: hidden;
			.light {
				position: absolute; left: 0; top: 0;
				width: 100%;
			}
			.content {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				.name {
					margin-top: 0.44rem; margin-bottom: 0.24rem;
					font-size: 0.39rem; text-align: center;
				}
				.desc {
					margin-bottom: 0.38rem;
					font-size: 0.24rem; text-align: center; color: #636363;
					color: black;
				}
			}
		}

		.text_enter {
			width: 100%; 
			margin-bottom: 0.6rem;
			font-size: 0.24rem; color: #ee7d31; text-align: center;
		}
	}
</style>

<script type="text/javascript">
	import {data,act} from './store.js';

	export default {
		components: {
			Debugger: require('../components/Debugger.vue'),
			MaskLoading: require('../components/MaskLoading.vue'),
			MaskOver: require('../components/MaskOver.vue'),

			MyVideo: require('../lib/MyVideo.vue'),

			Rules: require('../components/Rules.vue'),
			MaskDownload: require('../lib/MaskDownload.vue'),

			List: require('../components/List.vue')
		},
		data: function(){
			return data;
		},
		computed: {
			books: function(){
				return this.writers[this.current].books;
			}
		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
			this.act({type:'INIT_SHARE'});
		},
		methods: {
			act: act,
			_TO_BOOK: function(bid){
				this.act({
					type: '_TO_BOOK',
					bid
				})
			}
		}
	}
</script>