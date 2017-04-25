<template>
<div class="Stack">
	<div class="space">
		<ul class="stack"
		@touchstart="touchstart($event)"
		@touchmove="touchmove($event)"
		@touchend="touchend($event)">
			<li v-for="(a,i) in cards" 
			:key="a.id"
			:class=" 'card '+a._class "
			style=""
			@click="TO_BOOK(a.bid)">
				<div class="part-top">
					<div class="right">
<!-- 						<p class="title__">
							{{a.title}}
						</p> -->
						<div class="title_table">
							<div class="title_cell">
								{{a.title}}
							</div>
						</div>
						<div class="stars">
							<div class="bg" :style=" 'width:'+a.score*10+'%;' "></div>
							<img class="starsImg" :src="img.stars"/>
						</div>
						<p class="score">{{a.score}}分</p>
					</div>
				</div>
				<p class="intro">
					{{a.intro}}
				</p>
				<div class="cover">
					<img class="cover_img" :src=" a.cover "/>
					<p class="corner" v-if="a.corner">
						{{a.corner}}
					</p>
				</div>
			</li>
		</ul>
	</div>
	<div class="nav" v-show=" nav.length>1 ">
		<li v-for="(a,i) in nav"
		:class=" i===dot?'active':'' "></li>
	</div>
</div>
</template>

<script>
	module.exports = {
		props: ['items','act'],
		data: function(){
			return {
				img: {
					cover: './img/cover.png',
					stars: './img/stars.png'
				},

				cards: [],
				nav: [],
				dot: 0,

				switching: false,
				canScroll: true,
				X1: null,
				X2: null,
				Y1: null,
				Y2: null,
				moveCount: 0
			}
		},
		watch: {
			items: function(){
				var self = this;
				setTimeout(()=>{
					self.getData();
				},300);
			}
		},
		created: function(){
		},
		methods: {
			getData: function(){
				var self = this;
				var cards = JSON.parse( JSON.stringify(self.items) ).reverse();
				//console.log(cards)
				if( cards.length===1 ){
					//cards[1] = JSON.parse( JSON.stringify(cards[0]) );
					//cards[2] = JSON.parse( JSON.stringify(cards[0]) );
					//cards[3] = JSON.parse( JSON.stringify(cards[0]) );
					//this.cards = cards;
					this.nav = [0];
					this.navLength = 1;
				}else if( cards.length===2 ){
					cards[2] = JSON.parse( JSON.stringify(cards[0]) );
					cards[3] = JSON.parse( JSON.stringify(cards[1]) );
					//this.cards = cards;
					this.nav = [0,1];
					this.navLength = 2;
				}else if( cards.length===3 ){
					cards[3] = JSON.parse( JSON.stringify(cards[0]) );
					cards[4] = JSON.parse( JSON.stringify(cards[1]) );
					cards[5] = JSON.parse( JSON.stringify(cards[2]) );
					//this.cards = cards;
					this.nav = [0,1,2];
					this.navLength = 3;
				}else{
					var nav = [];
					for( var i=0;i<cards.length;i++ ){
						nav[i] = i;
					}
					this.nav = nav;
					this.navLength = cards.length;
				}
				cards.forEach((a,i)=>{
					a.id = i;
				})
				this.cards = cards;
				
				this.length = this.cards.length;
				this.current = this.length-1;
				//window.addEventListener('load',function(){
				if( self.cards.length===1 ){
					self.cards[0]._class = 'toFirst';
				}else if( self.cards.length>=4 ){
					self.cards[self.current]._class = 'toFirst';
					self.cards[self.current-1]._class = 'toSecond';
					self.cards[self.current-2]._class = 'toThird';
				}
				//})
			},
			play: function(direction){
				var self = this;
				if( !self.switching ){
					self.switching = true;
					if( self.dot<self.navLength-1 ){
						self.dot++;
					}else{
						self.dot = 0;
					}
					console.log('true')
					this.cards[this.current]._class = 'wira-'+direction;
					this.cards[this.current-1]._class = 'toFirst';
					this.cards[this.current-2]._class = 'toSecond';
					this.cards[this.current-3]._class = 'toThird';
					setTimeout(function(){
						self.cards.unshift( self.cards.splice( -1,1 )[0] );
						self.cards[0]._class = '';
						self.switching = false;
					},600);
				};
			},
			touchstart: function(e){
				this.moveCount = 0;
				this.canScroll = true;
				this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			},
			touchmove: function(e){
				this.moveCount++;
				if( this.moveCount===1 ){
					this.X2 = e.changedTouches[0].pageX;
					this.Y2 = e.changedTouches[0].pageY;
					var dY = this.Y2 - this.Y1;
					var dX = this.X2 - this.X1;
					if( Math.abs(dY)>2*Math.abs(dX) ){
						this.canScroll = true;
					}else{
						this.canScroll = false;
					}
				};
				if( !this.canScroll ){
					e.preventDefault();
				};
			},
			touchend: function(e){
				if( !this.canScroll ){
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X1;
					if( distance>0 ){
						if(this.nav.length>1){
							this.play('right');
						};
					}else if( distance<0 ){
						if(this.nav.length>1){
							this.play('left');
						};
					}
				};
			},
			TO_BOOK: function(bid){
				this.act({
					type: 'TO_BOOK',
					bid: bid
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.Stack {
		overflow: hidden;
		.space {
			width: 100%;
			padding: 2.4rem 0 1.4rem 0;
			overflow: hidden;
		}

		.stack {
			box-sizing: border-box;
			@width: 80vw;
			position: relative;
			width: 6.56rem; height: 5.32rem;
			margin: auto;
			perspective: 4rem;
			.card {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				transform: translate3d(7rem,0,0);
				border-radius: 0.05rem;
				border: 1px solid #d5d5d5;
				background: white!important;
				box-shadow: 0 0.1rem 0.5rem #cbcbcb;
				.part-top {
					box-sizing: border-box;
					width: 100%; height: 0.94rem;
					margin-top: 0.58rem;
					margin-bottom: 0.6rem;
					padding-left: 0.36rem;
					border-left: 0.08rem solid black;
					.right {
						position: relative;
						height: 100%;
						.title__ {
							width: 2.85rem;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							line-height: 0.36rem;
							font-size: 0.36rem;
						}
						.title_table {
							display: table;
							width: 2.85rem; height: 0.66rem;
							overflow: hidden;
							.title_cell {
								display: table-cell;
								width: 100%; height: 100%;
								vertical-align: middle;
								font-size: 0.3rem; line-height: 0.3rem;
							}
						}
						.stars {
							position: absolute; left: 0; bottom: 0;
							width: 1.64rem; height: 0.23rem;
							background: #cccccc;
							.bg {
								width: 0; height: 100%;
								background: #ffbf00;
							}
							.starsImg {
								display: block;
								position: absolute; left: 0; top: 0;
								width: 100%;
							}
						}
						.score {
							position: absolute; left: 1.78rem; bottom: 0;
							font-size: 0.24rem; line-height: 0.24rem;
							color: #9d9d9d;
						}
					}
				}
				.intro {
					height: 2.66rem;
					padding: 0 0.44rem;
					font-size: 0.24rem;
					line-height: 0.38rem;
					color: #9b9b9b;
					overflow: hidden;
				}
				.cover {
					position: absolute; right: 0.5rem; top: -1.5rem;
					width: 2.60rem; height: 3.46rem;
					.corner {
						position: absolute; left: 0; top: 0;
						padding: 0.05rem 0.1rem;
						font-size: 0.26rem; color: white;
						background: #5CA1E6;
					}
					.cover_img {
						width: 100%; height: 100%;
					}
					//box-shadow: 0 0.1rem 0.5rem #cbcbcb;
				}
				&.card0 {
					background: #91C794;
					//transform: translate3d(0,-8vw,-8vw);
				}
				&.card1 {
					background: #9993C1;
					//transform: translate3d(0,-6vw,-6vw);
				}
				&.card2 {
					background: #B2DFDB;
					//transform: translate3d(0,-4vw,-4vw);
				}
				&.card3 {
					background: #FBCBBD;
					//transform: translate3d(0,-2vw,-2vw);
				}
				&.card4 {
					background: #FFF59D;
					//animation: leave 0.6s forwards;
				}
				&.leave {
					animation: leave 0.6s forwards;
				}
				&.toFirst {
					animation: toFirst 0.6s forwards;
				}
				&.toSecond {
					animation: toSecond 0.6s forwards;
				}
				&.toThird {
					animation: toThird 0.6s forwards;
				}
				&.wira-right {
					transform-origin: 250% 50%;
					animation-timing-function: cubic-bezier(0.3,1,0.3,1);
					animation: wira-right 1s forwards;
				}
				&.wira-left {
					transform-origin: -150% 50%;
					animation-timing-function: cubic-bezier(0.3,1,0.3,1);
					animation: wira-left 1s forwards;
				}
			}
			@keyframes toThird {
				0% {
					transform: translate3d(0,1.8rem,-1.5rem);
				}
				100% {
					transform: translate3d(0,1.2rem,-1rem);
				}
			}
			@keyframes toSecond {
				0% {
					transform: translate3d(0,1.2rem,-1rem);
				}
				100% {
					transform: translate3d(0,0.6rem,-0.5rem);
				}
			}
			@keyframes toFirst {
				0% {
					transform: translate3d(0,0.6rem,-0.5rem);
				}
				100% {
					transform: translate3d(0,0,0);
				}
			}
			@keyframes leave {
				0% {
					transform: translate3d(0,0,0);
				}
				100% {
					opacity: 0;
					transform: translate3d(3rem,0,0) rotate3d(0,0,1,20deg);
				}
			}
			@keyframes eka-right {
				0% {
					transform: translate3d(0,0,0);
				}
				100% {
					opacity: 0;
					transform: translate3d(150%,-50%,0) rotate3d(0,0,1,-20deg);
				}
			}
			@keyframes wira-right {
				0%,100% {
					transform-origin: 250% 50%;
					animation-timing-function: cubic-bezier(0.3,1,0.3,1);
				}
				0% {
					transform: translate3d(0,0,0);
				}
				100% {
					opacity: 0;
					transform: rotate3d(0,0,1,60deg);;
				}
			}
			@keyframes wira-left {
				0%,100% {
					transform-origin: -150% 50%;
					animation-timing-function: cubic-bezier(0.3,1,0.3,1);
				}
				0% {
					transform: translate3d(0,0,0);
				}
				100% {
					opacity: 0;
					transform: rotate3d(0,0,1,-60deg);;
				}
			}
		}

		.nav {
			display: table;
			margin: auto;
			li {
				float: left;
				width: 0.22rem; height: 0.22rem;
				margin: 0 0.04rem;
				margin-bottom: 0.6rem;
				border-radius: 1000px;
				border: 1px solid black;
				&.active {
					background: black;
				}
			}
		}
	}
</style>