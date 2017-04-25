<template>
<div class="SwiperLite" 
	:style="style"
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">
	<ul class="pagination">
		<div class="strip"></div>
		<div class="dots">
			<li class="dot"
			v-for="(a,i) in items">
			<div class="pill"
			:class=" i===currentOne?'active':'' "
			@click=" toCard(i) ">{{a.dot}}</div>
			<div class="triangle"
			v-show=" i===currentOne "></div>
		</div>
	</li>
	</ul>
	<ul class="train">
		<li :class=" 'item '+(i===currentOne?'active':'') " 
			v-for="(item,i) in items"
			:key="item.background">
			<div class="card">
				<img class="cardImg" :src=" 'img/card.png' "/>

			</div>	
		</li>
<!-- 		<div class="randomBook"
		v-if="randomBook.title">
			<div class="random_book">
				<img class="random_book_img" :src=" 'img/random_book.png' "/>
				<div class="content119">
					<img :src=" 'img/covers/'+randomBook.bid+'.jpg' "/>
				</div>
			</div>
		</div> -->
		<div style="clear:both;"></div>
	</ul>
</div>
</template>

<style lang="less" scoped>
.SwiperLite {
	position: relative;
	width: 6.56rem;
	margin: auto;
	margin-bottom: 0.62rem;
	.pagination {
		box-sizing: border-box;
		position: relative;
		width: 100%; height: 1.06rem;
		overflow: hidden;
		.strip {
			width: 5rem; height: 0.08rem;
			margin: auto; margin-top: 0.28rem;
			background: #9d2190;
		}
		.dots {
			position: absolute; left: 0.5rem; top: 0;
			width: 100%; height: 100%;
			overflow: hidden;
			.dot {
				float: left;
				width: 1.62rem;
				margin-right: 0.32rem;
				.pill {
					width: 1.62rem; height: 0.62rem;
					border-radius: 0.31rem;
					background: #d11391;
					//transition: background 0.3s;
					font-size: 0.24rem; text-align: center; line-height: 0.62rem; color: white;
					&.active {
						background: #ff9b42;
						font-weight: bold;
					}
				}
				.triangle {
					width: 0; height: 0;
					margin: auto;
					border-top: 0.13rem solid #ff9b42;
					border-left: 0.15rem solid transparent;
					border-right: 0.15rem solid transparent;
				}
			}
		}
	}
	.train {
		width: 1000%;
		height: 100%;
		.item {
			float: left;
			width: 10%; height: 100%;
			//transform: scale(0.8);
			//opacity: 0.6;
			transition: 0.5s;
			.card {
				position: relative;
				width: 6.1rem;
				margin: auto;
				.cardImg {
					width: 100%;
				}
				.content-- {
					position: absolute; left: 0; top: 0;
					width: 100%; height: 100%;
					.panel-heading {
						position: relative;
						box-sizing: border-box;
						width: 100%; height: 1.04rem;
						.text-left {
							position: absolute; left: 0.4rem;
							font-size: 0.36rem; line-height: 1.04rem; font-weight: bold;
							color: #666666;
						}
						.text-right {
							position: absolute; right: 0.4rem;
							font-size: 0.3rem; line-height: 1.04rem;
							//color: #333333;
							span {
								font-size: 0.3rem; line-height: 1.04rem;
								//color: #d11391;
							}
						}
					}
					.panel-body {
						overflow: hidden;
						.book {
							float: left;
							width: 50%;
							overflow: hidden;
							.cover {
								position: relative;
								height: 2.72rem;
								margin: auto;
								margin-top: 0.5rem;
								.free {
									position: absolute; left: 0.53rem; top: 0.05rem;
									width: 0.88rem;
								}
								.coverImg {
									width: 1.88rem; height: 2.56rem;
									margin: auto;
									box-shadow: 0 0.08rem 0.2rem #d9d3c2;
								}
							}
							.title {
								box-sizing: border-box;
								padding: 0 0.2rem;
								margin-bottom: 0.1rem;
								font-size: 0.26rem; color: #333333;
								text-align: center;
								overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
							}
							.btnBuy {
								width: 100%; height: 1.68rem;
								overflow: hidden;
								.buy_disabled {
									width: 1.68rem;
									margin: auto;
								}
								.buy {
									width: 1.68rem;
									margin: auto;
								}
								.buy_killed {
									width: 1.74rem;
									margin: auto; margin-top: 0.25rem;
								}
								.buy_out {
									width: 1.56rem;
									margin: auto; margin-top: 0.25rem;
								}
							}
							.desc {
								position: relative; top: -0.1rem;
								p {
									font-size: 0.24rem; text-align: center; color: #999999;
								}
							}
						}
					}
				}
			}
		}
		.randomBook {
			position: relative;
			float: left;
			// width: 10%; height: 100%;
			padding-left: 0.2rem;
			padding-right: 0.2rem;
			.random_book {
				width: 3.6rem; height: 7rem;
				.random_book_img {
					height: 100%;
				}
				.content119 {
					position: absolute; left: 0; top: 0;
					width: 100%; height: 100%;
					img {
						width: 1.88rem; 
						margin: auto;
						margin-top: 2.74rem;
					}
				}
			}
		}
		/*
		.item.active {
			transform: scale(1);
			opacity: 1;
		}
		*/
	}
}
</style>

<script>
var _ = {
	X0: null,
	X1: null,
	X2: null,
	offset: 0,
	moveCount: 0,
	train: null
}

export default {
	props: {
		items: {
			default: function(){
				return [{
					dot: '11:00 开抢',
					background: 'red'
				},{
					dot: '17:00 开抢',
					background: 'orange'
				},{
					dot: '20:00 开抢',
					background: 'yellow'
				}];
			}
		},
		style: {},
		sticky: {
			default: true
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 300
		},
		interval: {
			default: 500
		},
		stageNo: {
			default: -2
		},
		timeNext: {	
		},
		books: {},
		randomBook: {
			default: {}
		},
		act: {}
	},
	data: function(){
		return {
			width: 0,

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			
			trainOffsetX: 0,
			transition: '0s',
			trainStyle: '',
			
			X0: 0,
			X1: 0,
			X2: 0,

			currentOne: 0,
			offset: 0
		}
	},
	computed: {
		// transform: function(){
		// 	return 'translate3d('+trainOffsetX+'px,0,0)';
		// }
	},
	watch: {
		stageNo: function(new_val){
			if(new_val>=0){
				this.toCard(new_val);
			};
		}
	},
	mounted: function(){
		var time = new Date();
		var str = time.toString();
		console.log( new Date(str) )
		_.train = this.$el.querySelector('.train');

		window.addEventListener('load',()=>{
			this.setWidth();
		});
		window.addEventListener('resize',()=>{
			setTimeout(()=>{
				this.setWidth();
			},50)
		})
		if( this.autoplay ){
			setInterval(()=>{
				this.toNext();
			},this.interval);
		}
	},
	methods: {
		KILL: function(bid){
			this.act({
				type: 'KILL',
				bid: bid
			})
		},
		TO_BOOK: function(bid){
			this.act({
				type: 'TO_BOOK',
				bid: bid
			})
		},
		setWidth: function(){
			this.transition = false;
			var elem = this.$el;
			var width = Number( document.defaultView.getComputedStyle( elem ).width.replace(/px/,'') );
			this.width = width;
			_.train.style.transition = '0s';
			_.train.style.webkitTransition = '0s';
			_.offset = -this.currentOne*this.width;
			_.train.style.transform = 'translate3d('+_.offset+'px,0,0)';
			_.train.style.webkitTransform = 'translate3d('+_.offset+'px,0,0)';
		},
		toNext: function(){
			if( this.currentOne<this.items.length-1 ){
				this.currentOne++;
			};
			_.train.style.transition = '0.3s';
			_.train.style.webkitTransition = '0.3s';
			_.offset = -this.currentOne*this.width;
			_.train.style.transform = 'translate3d('+_.offset+'px,0,0)';
			_.train.style.webkitTransform = 'translate3d('+_.offset+'px,0,0)';
		},
		toPrev: function(){
			if( this.currentOne>0 ){
				this.currentOne--;
			};
			_.train.style.transition = '0.3s';
			_.train.style.webkitTransition = '0.3s';
			_.offset = -this.currentOne*this.width;
			_.train.style.transform = 'translate3d('+_.offset+'px,0,0)';
			_.train.style.webkitTransform = 'translate3d('+_.offset+'px,0,0)';
		},
		toCard: function(i){
			this.currentOne = i;
			_.train.style.transition = '0.3s';
			_.train.style.webkitTransition = '0.3s';
			_.offset = -i*this.width;
			_.train.style.transform = 'translate3d('+_.offset+'px,0,0)';
			_.train.style.webkitTransform = 'translate3d('+_.offset+'px,0,0)';
			setTimeout(()=>{
				_.train.style.transition = '0s';
				_.train.style.webkitTransition = '0s';
				this.switching = false;
			},this.duration)
		},
		touchstart: function(e){
			console.log(this.switching)
			if( this.switching===false ){
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				_.train.style.transition = '0s';
				_.train.style.webkitTransition = '0s';
				
				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function(e){
			if( this.inCycle ){
				this.moveCount++;
				if( !this.scrolling ){
					if( this.moveCount===1 ){
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if( Math.abs(distanceY)>1.2*Math.abs(distanceX) ){
							this.scrolling = true;
						}else{
							e.preventDefault();
						}
					};
					if( !this.scrolling&&this.sticky ){
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2-this.X1;
						this.X1 = this.X2;
						//this.transition = '0s';
						_.offset += distance;
						_.train.style.transform = 'translate3d('+_.offset+'px,0,0)';
						_.train.style.webkitTransform = 'translate3d('+_.offset+'px,0,0)';
						//console.log(_.offset);
					}
				};
			};
		},
		touchend: function(e){
			//console.log('touchend');
			if( this.inCycle ){
				if( !this.scrolling ){
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2-this.X0;
					//console.log(distance)
					if( distance<0 ){
						this.switching = true;
						this.toNext();
						setTimeout(()=>{
							_.train.style.transition = '0s';
							_.train.style.webkitTransition = '0s';
							this.switching = false;
						},this.duration);
					}else if( distance>0 ){
						this.switching = true;
						this.toPrev();
						setTimeout(()=>{
							_.train.style.transition = '0s';
							_.train.style.webkitTransition = '0s';
							this.switching = false;
						},this.duration);
					}else{
						this.switching = false;
						this.inCycle = false;
					};
				};
			};
		}
	}
}
</script>