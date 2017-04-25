<template>
<div class="Swiper__">
	<div class="blurred">
		<img v-for="n in 8" :src=" 'img/blurred_bg/'+(n-1)+'.jpg' "
		:class=" n===currentOne+1?'active':'' "
		ref="blurred_img"/>
	</div>
	<!-- <img class="light" :src=" 'img/light.png' "/> -->
	<div class="Swiper"
		ref="swiper"
		@touchstart="touchstart($event)"
		@touchmove="touchmove($event)"
		@touchend="touchend($event)"
		@touchcancel="touchend($event)">

		<div class="item" 
		:class=" 
			(i===currentOne?'current ':' ')+
			(i===currentOne-1?'prev ':' ')+
			(i===currentOne+1?'next ':' ')+
			(i>currentOne+1?'right ':' ')+
			(i<currentOne-1?'left ':' ') " 
			v-for="(a,i) in items"
			:key="a.id">
			<my-video :video="a" :act="act" :current="currentOne" :yyb="yyb"></my-video>
			
		</div>

<!-- 			<ul class="pagination" v-if="false">
			<li v-for="(item,i) in items"
			class="dot"
			:class=" 'item '+(i===currentOne?'active':'') "
			@click="toCard(i)">
			</li>
		</ul> -->
	</div>

	<p class="advice__" ref="advice">建议在wifi环境下观看</p>

	<img class="arrow arrow_right" :src=" 'img/arrow_right.png' "
	@click="toNext"
	v-show="currentOne<items.length-1"/>
	<img class="arrow arrow_left" :src=" 'img/arrow_left.png' "
	@click="toPrev"
	v-show="currentOne>0"/>

</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	box-sizing: border-box;
	position: relative;
	width: 100%; height: 7.66rem;
	overflow: hidden;

	.arrow {
		position: absolute;
		width: 0.34rem;
		z-index: 99;
	}
	.arrow_right {
		top: 3.34rem; right: 0.47rem;
	}
	.arrow_left {
		top: 3.34rem; left: 0.47rem;
	}

	.blurred {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		img {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			opacity: 0;
			transition: opacity 0.8s;
			&.active {
				opacity: 1;
			}
		}
	}
	.light {
		position: absolute; left: 0;
		width: 100%;
	}

	.Swiper {
		position: relative;
		width: 5.25rem; height: 5.25rem;
		// background: grey;
		margin: auto; margin-top: 0.92rem;
		//overflow: hidden;
		.item {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			//transform: scale(0.8);
			//transition: 0.5s;
			font-size: 0.3rem; line-height: 0.84rem;
			text-align: center;
			//background: orange;
			transform-origin: 50% 200%;
			transition: transform 0.5s;
			overflow: hidden;
			&.current {
				// transition: transform 1s;
			}
			&.prev {
				// transition: transform 1s;
				transform: translate3d(-90%,8%,0) rotateZ(-10deg);
			}
			&.next {
				// transition: transform 1s;
				transform: translate3d(90%,8%,0) rotateZ(10deg);
			}
			&.right {
				transform: translate3d(300%,0,0);
			}
			&.left {
				transform: translate3d(-300%,0,0);
			}
		}

		.pagination {
			overflow: hidden;
			.dot {
				float: left;
				width: 0.2rem; height: 0.2rem;
				margin: 0.1rem;
				background: white;
				&.active {
					background: black;
				}
			}
		}
	}

	.advice__ {
		position: absolute; left: 2.35rem; top: 4.2rem;
		width: 2.8rem; height: 0.34rem; line-height: 0.34rem;
		border-radius: 0.17rem;
		font-size: 0.24rem; color: white; text-align: center;
		background: #583f41;
		z-index: 31;
		opacity: 0;
	}

}
</style>

<script>
export default {
	components: {
		MyVideo: require('../lib/MyVideo.vue')
	},
	props: {
		act: {},
		day: {},
		stage: {},
		yyb: {},
		items: {

		},
		style: {
			default: ''
		},
		carousel: {
			default: false
		},
		sticky: {
			default: false
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 500
		},
		interval: {
			default: 1000
		},
		authors: {
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
		day: function(newVal){
			this.currentOne = newVal;
		},
		currentOne: function(new_val,old){
			//console.log(new_val)
			this.act({
				type: 'SWITCH',
				n: new_val
			})
		},
		stage: function(neo){
			var self = this;
			if( neo===1 ){

				var tl = new TimelineMax();
				var advice = this.$refs.advice;

				tl.fromTo( advice,1,{
					opacity: 0
				},{
					opacity: 1
				}).to( advice,1,{
					opacity: 0.5
				}).to( advice,1,{
					opacity: 1
				}).to( advice,1,{
					opacity: 0,
					onComplete: function(){
						advice.style.display = 'none';
					}
				})

				var tl2 = new TimelineMax();
				var swiper = this.$refs.swiper;
				tl2.to( swiper,0.5,{
					x: '-40%',
					rotation: '-3deg'
				}).to( swiper,0.5,{
					x: '40%',
					rotation: '3deg'
				}).to( swiper,0.5,{
					x: '0%',
					rotation: 0
					// ease: Bounce.easeOut
				});
			}
		}
	},
	mounted: function(){
		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
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
				if( !this.inCycle ){
					this.toNext();
				};
			},this.interval);
		}
	},
	methods: {
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
		},
		toNext: function(){
			if( true ){
				this.switching = true;
				this.transition = this.duration+'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
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
			this.transition = this.duration+'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
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
			this.transition = this.duration+'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			this.trainOffsetX = -this.currentOne*this.width;
			setTimeout(()=>{
				this.transition = '0s';
				this.switching = false;
				this.inCycle = false;
			},this.duration);
		},
		touchstart: function(e){
			console.log(this.inCycle)
			e.stopPropagation();
			if( !this.inCycle ){
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
			if( this.inCycle ){
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