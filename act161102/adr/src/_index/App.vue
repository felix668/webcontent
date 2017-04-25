<template>
	<div id="root">
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-show=" page==='over' "></mask-over>
		
		<div class="main" v-show=" page==='ready' "
		style="background:url(img/bg.png);background-size:100% auto;">

			<img class="banner_kill" :src=" 'img/banner_kill.png' "/>
			<swiper-lite 
			:stage-no="stageNo"
			:time-next="timeNext"
			:books="books"
			:random-book="randomBook"
			:act="act"></swiper-lite>

			<div class="books_wanted">
				<div class="banner">
					<p>您还有 <span>{{chance}}</span> 次说“想看”的机会</p>
					<img class="banner_want" :src=" 'img/banner_want_3.png' "/>
				</div>
				<div class="book_wanted"
				v-for="(a,i) in books_wanted">
					<div class="book_"
					@click="TO_BOOK(a.bid)">
						<img class="bookImg" :src=" 'img/book.png' "/>
						<img class="cover" :src=" 'img/covers/'+a.bid+'.jpg' "/>
					</div>
					<img class="panel--" :src=" 'img/panel.png' "/>
					<div class="content__">
						<div class="top11">
							<p class="title">{{a.title}}</p>
							<p class="author">{{a.author}}</p>
							<div class="price">
								<p class="old"
								:style=" a.number>=5000?'text-decoration:line-through':'' ">{{a.price}}</p>
								<p class="new"
								v-if=" a.number>=5000 ">0.0{{a.discount==='5'?'2':'1'}}元/千字</p>
							</div>
						</div>
						<div class="bottom11">
							<div class="star">
								<p>{{a.discount}}折</p>
								<img class="starImg" :src=" 'img/star_'+(a.number<5000?'before':'after')+'.png' "/>
							</div>
							<div class="state">
								<div class="progress">
									<div class="bar"
									:style=" 'width:'+(a.number/5000*100)+'%' "></div>
								</div>
								<div class="bna">
									<p class="before"
									v-if="a.number<5000">还需{{5000-a.number}}人</p>
									<p class="after"
									v-if="a.number>=5000">
										已到5000人，开启{{a.discount}}折
									</p>
									<p class="plus1" :class=" a.plus?'active':'' ">
										+1
									</p>
								</div>
							</div>
							<div class="want">
								<img :src=" 'img/want.png' "
								v-if="a.number<5000&&(chance>0&&!a.wanted)"
								@click="I_WANT(a.bid,i)"/>
								<img :src=" 'img/want_waiting.png' "
								v-if="a.number<5000&&(chance<=0||a.wanted)"/>
								<img :src=" 'img/want_ten.png' "
								v-if="a.number>=5000&&!a.canBuy"/>
								<img :src=" 'img/want_buy.png' "
								v-if="a.number>=5000&&a.canBuy"
								@click="TO_BUY(a.bid)"/>
							</div>
						</div>
						<p class="info" v-if="a.number>=5000">* 每日10点开启，去书籍详情页点击下载即可购买 *</p>
					</div>
				</div>
			</div>

			<!-- <img class="btn_share" :src=" 'img/btn_share.png' "/> -->

			<rules :ios="ios"></rules>
		</div>
<!-- 		<debug 
		:state="$data"></debug> -->
	</div>
</template>

<script type="text/javascript">
	import './App.scss';
	import {data,act} from './store.js';

	export default {
		components: {
			debug: require('../components/Debug.vue'),
			maskLoading: require('../components/MaskLoading.vue'),
			maskOver: require('../components/MaskOver.vue'),
			swiperLite: require('../components/SwiperLite.vue'),
			rules: require('../components/Rules.vue')
		},
		data: function(){
			return data;
		},
		computed: {
			chance: function(){
				return 2-this.wanted.length;
			}
		},
		watch: {
			killed: function(new_val){
				new_val.forEach(a=>{
					this.books.forEach(b=>{
						if(a===b.bid){
							b.killed = true;
						};
					})
				});
			},
			wanted: function(new_val){
				new_val.forEach(a=>{
					this.books_wanted.forEach(b=>{
						if(a===b.bid){
							b.wanted = true;
						};
					})
				});
			}
		},
		created: function(){

		},
		mounted: function(){
			this.act({type:'INIT'});
		},
		methods: {
			act: act,
			TO_BOOK: function(bid){
				this.act({
					type: 'TO_BOOK',
					bid: bid
				})
			},
			TO_BUY: function(bid){
				this.act({
					type: 'TO_BUY',
					bid: bid
				}),
				this.act({
					type: 'TO_BOOK',
					bid: bid
				})
			},
			I_WANT: function(bid,i){
				this.act({
					type: 'I_WANT',
					bid: bid,
					i: i
				})
			}
		}
	}
</script>