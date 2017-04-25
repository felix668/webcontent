<template>
<div class="Swiper__">
	<div class="covers">
		<div class="cover" v-for="(a,i) in items"
		:class=" i===currentOne?'active':'' "
		@click="to_book">
			<div class="shadow"></div>
			<img class="cover_img" :src=" a.cover "/>
			<p class="corner" v-if="a.corner">
				{{a.corner}}
			</p>
		</div>
	</div>
	<div class="Swiper"
		ref="swiper"
		@touchstart="touchstart($event)"
		@touchmove="touchmove($event)"
		@touchend="touchend($event)"
		@touchcancel="touchend($event)">
		<ul class="train" 
			:class=" carousel?'carousel':'' "
			:style=" 
				'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';'+
				'-webkit-transform:translate3d('+trainOffsetX+'px,0,0);-webkit-transition:'+transition+';' ">
			<li class="item"
			v-if="carousel"
			style="background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;">
				{{items[items.length-2].name}}
			</li>
			<li class="item"
			v-if="carousel"
			style="background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;">
				{{items[items.length-1].name}}
			</li>

<!-- 			<li :class=" 'item '+(i===currentOne?'active':'') " 
				v-for="(item,i) in items"
				:key="item.id">

			</li> -->
			<div style="clear:both;"></div>
			<li class="item"
			v-for="(a,i) in items"
			:key="a.id">
				<div class="cont">
					<div class="shadow"></div>
					<div 
					:class=" 'card' "
					@click="act({type:'TO_BOOK',bid:a.bid})">
						
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
									<img class="starsImg" :src=" './img/stars.png' "/>
								</div>
								<p class="score">{{a.score}}分</p>
							</div>
						</div>
						<p class="intro">
							{{a.intro}}
						</p>
					</div>
				</div>
			</li>

			<li class="item"
			v-if="carousel"
			style="background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;">
				{{items[0].name}}
			</li>
			<li class="item"
			v-if="carousel"
			style="background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;">
				{{items[1].name}}
			</li>
		</ul>
		<ul class="pagination">
			<li v-for="(item,i) in items"
			class="dot"
			:class=" 'item '+(i===currentOne?'active':'') "
			@click="toCard(i)"
			v-if="items.length>1">
			</li>
		</ul>
	</div>
</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	position: relative;
	width: 100%;
	//background: #a1808e;
	.covers {
		position: absolute; left: 3.8rem; top: -1.5rem;
		width: 2.58rem; height: 3.2rem;
		z-index: 10;
		.cover {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			opacity: 0;
			transition: opacity 1s;
			&.active {
				opacity: 1;
			}
			.shadow {
				width: 82%; height: 100%;
				box-shadow: 0 0.08rem 0.5rem grey;
				margin: auto;
			}
			img {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
			}
			.corner {
				position: absolute; left: 0; top: 0;
				padding: 0.05rem 0.1rem;
				font-size: 0.26rem; color: white;
				background: #5CA1E6;
			}
		}
	}
	.Swiper {
		position: relative;
		//width: 6.86rem; height: 8.76rem;
		//width: 6.5rem; height: 8.76rem;
		width: 100%;
		margin: auto;
		//background: grey;
		overflow: hidden;
		.train {
			width: 2000%; height: 5.7rem;
			&.carousel {
				margin-left: -200%;
			}
			.item {
				float: left;
				width: 5%; height: 100%;
				.cont {
					position: relative;
					width: 6.56rem; height: 5.32rem;
					margin: auto;
					.shadow {
						width: 80%; height: 100%; 
						margin: auto;
						box-shadow: 0 0.15rem 0.5rem #cbcbcb;
					}
				}
				.card {
					position: absolute; left: 0; top: 0;
					width: 6.56rem; height: 5.32rem;
					border-radius: 0.05rem;
					border: 1px solid #d5d5d5;
					background: white!important;
					//box-shadow: 0 0.1rem 0.5rem #cbcbcb;
					
					.part-top {
						box-sizing: border-box;
						width: 100%; height: 1.2rem;
						margin-top: 0.53rem;
						margin-bottom: 0.42rem;
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
								width: 2.85rem; height: 0.9rem;
								overflow: hidden;
								.title_cell {
									display: table-cell;
									width: 100%; height: 100%;
									vertical-align: middle;
									font-size: 0.32rem;
									//line-height: 0.3rem;
								}
							}
							.stars {
								position: absolute; left: 0; bottom: 0;
								width: 1.64rem; height: 0.22rem;
								background: #cccccc;
								overflow: hidden;
								.bg {
									width: 100%; height: 0.22rem;
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
					/*
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
					*/
				}
			}
		}
		.pagination {
			overflow: hidden;
			display: table;
			margin: auto;
			margin-bottom: 0.68rem;
			.dot {
				float: left;
				width: 0.22rem; height: 0.22rem;
				margin: 0 0.04rem;
				border-radius: 1000px;
				border: 1px solid #494949;
				&.active {
					background: #494949;
				}
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
		img: {},
		items: {
			default: function(){
				return [];
			}
		},
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out'//'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: false
		},
		sticky: {
			default: true
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 400
		},
		interval: {
			default: 1000
		}
	},
	data: function(){
		return {
			width: 0,
			//items: [],

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			X1: 0,
			X2: 0,

			currentOne: 0,
			transition: '0s',
			offset: 0
		}
	},
	computed: {
		author: function(){
			return this.items[this.currentOne].name;
		}
	},
	watch: {
		items: function(){
			//this.copy = this.items;
		},
		currentOne: function(new_val){

		}
	},
	mounted: function(){
		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		// console.log(this.trainOffsetX)
		window.addEventListener('DOMContentLoaded',()=>{
			setTimeout(()=>{
				this.setWidth();
			},600)
		})
		// window.addEventListener('load',()=>{
		// 	this.setWidth();
		// });
		window.addEventListener('resize',()=>{
			setTimeout(()=>{
				this.setWidth();
			},50)
		})
		if( this.autoplay ){
			setInterval(()=>{
				if( !this.inCycle ){
					this.toNext();
				};
			},this.interval);
		}
		// var e = document.createEvent("Event");
		// e.init("resize", true, true);
		// window.dispatchEvent(e);
	},
	methods: {
		to_book(){
			this.act({type:'TO_BOOK',bid:this.items[this.currentOne].bid});
		},
		__toItem: function(name){
			var i;
			this.items.forEach(a=>{
				if( a.name===name ){
					i = a.id
				}
			});
			this.toCard(i);
		},
		setWidth: function(){
			var elem = this.$refs.swiper;
			var width = Number( document.defaultView.getComputedStyle( elem ).width.replace(/px/,'') );
			this.width = width;
			this.transition = '0s';
			this.trainOffsetX = -this.currentOne*this.width;
			console.log('trainOffsetX:'+this.trainOffsetX)
		},
		toNext: function(){
			if( true ){
				this.switching = true;
				this.transition = this.duration+'ms '+this.ease;
				if( this.currentOne<this.items.length-1 ){
					this.currentOne++;
					this.trainOffsetX = -this.currentOne*this.width;
				}else if( this.carousel ){
					this.currentOne = 0;
					this.trainOffsetX = -this.items.length*this.width;
				}else{
					this.trainOffsetX = -this.currentOne*this.width;
				}
				setTimeout(()=>{
					this.transition = '0s';
					if( this.carousel&&this.currentOne===0 ){
						this.trainOffsetX = 0;
					};
					this.switching = false;
					this.inCycle = false;
				},this.duration);
			}
		},
		toPrev: function(){
			this.switching = true;
			this.transition = this.duration+'ms '+this.ease;
			if( this.currentOne>0 ){
				this.currentOne--;
				this.trainOffsetX = -this.currentOne*this.width;
			}else if( this.carousel ){
				this.currentOne = this.items.length-1;
				this.trainOffsetX = this.width;
			}else{
				this.trainOffsetX = -this.currentOne*this.width;
			}
			setTimeout(()=>{
				this.transition = '0s';
				if( this.carousel&&this.currentOne===this.items.length-1 ){
					this.trainOffsetX = -this.currentOne*this.width;
				};
				this.switching = false;
				this.inCycle = false;
			},this.duration)
		},
		toCard: function(i){
			this.currentOne = i;
			this.transition = this.duration+'ms '+this.ease;
			this.trainOffsetX = -this.currentOne*this.width;
			setTimeout(()=>{
				this.transition = '0s';
				this.switching = false;
				this.inCycle = false;
			},this.duration);
		},
		touchstart: function(e){
			e.stopPropagation();
			// console.log(this.items)
			console.log(this.inCycle)
			console.log(this.trainOffsetX)
			// if( isNaN(this.trainOffsetX) ){
			// 	this.trainOffsetX = 0;
			// }
			if( !this.inCycle&&!this.switching ){
				this.setWidth();
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';
				
				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function(e){
			e.stopPropagation();
			if( this.inCycle&&!this.switching ){
				this.moveCount++;
				if( !this.scrolling ){
					// decide if it can scroll at the first touchmove
					if( this.moveCount===1 ){
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if( Math.abs(distanceY)>Math.abs(distanceX) ){
							this.scrolling = true;
						}else{
							// it is essential to preventDefault at the first touchmove
							// when using vanillajs or the subsequent touch-events would
							// not get triggered
							e.preventDefault();
						}
					}

					if( !this.scrolling&&this.sticky ){
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2-this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
						// console.log(this.trainOffsetX)
						this.offset += distance;
						//console.log(this.trainOffsetX)
					}
				}
			}
		},
		touchend: function(e){
			e.stopPropagation();
			if( this.inCycle&&!this.scrolling ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2-this.X0;
				// console.log(distance)
				if( distance<-5 ){
					this.toNext();
				}else if( distance>5 ){
					this.toPrev();
				}else{
					if(!this.switching){
						this.switching = false;
						this.inCycle = false;
					};
				}
			}else{
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
}
</script>