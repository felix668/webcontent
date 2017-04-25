<template>
<div class="Swiper__ rem_height"
:style=" 'background-image:url('+img+'/main/bg_factory.png);background-size:100% auto;' "
@touchstart="touchstart($event)"
@touchmove="touchmove($event)"
@touchend="touchend($event)"
@touchcancel="touchend($event)">

	<btn-share></btn-share>
	<controls></controls>

	<img class="arrow_left" :src=" img+'/main/arrow_left.png' "
	@click="toPrev"/>
	<img class="arrow_right" :src=" img+'/main/arrow_right.png' "
	@click="toNext"/>

	<div class="Swiper"
	ref="swiper">
		<img class="slogan" :src=" img+'main/slogan/'+pic.slogan+'.png' "/>
		<ul class="train" 
			:class=" carousel?'carousel':'' "
			:style=" 
				'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';'+
				'-webkit-transform:translate3d('+trainOffsetX+'px,0,0);-webkit-transition:'+transition+';' ">
			<li class="item"
			v-if="carousel"
			:class=" currentOne===4?'active':'' ">
				<img class="card" :src=" img+'/main/cards/4.jpg' "/>
			</li>
			<li class="item"
			v-if="carousel"
			:class=" currentOne===5?'active':'' ">
				<img class="card" :src=" img+'/main/cards/5.jpg' "/>
			</li>

<!-- 			<li :class=" 'item '+(i===currentOne?'active':'') " 
				v-for="(item,i) in items"
				:key="item.id">

			</li> -->
			<li class="item"
			v-for="(a,i) in items"
			:key="a.id"
			:class=" i===currentOne?'active':'' ">
				<img class="card" :src=" img+'/main/cards/'+i+'.jpg' "/>
			</li>

			<li class="item"
			v-if="carousel"
			:class=" currentOne===0?'active':'' ">
				<img class="card" :src=" img+'/main/cards/0.jpg' "/>
			</li>
			<li class="item"
			v-if="carousel"
			:class=" currentOne===1?'active':'' ">
				<img class="card" :src=" img+'/main/cards/1.jpg' "/>
			</li>
			<div style="clear:both;"></div>
		</ul>
	</div>
</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	position: relative;
	width: 100%;
	overflow: hidden;

	.arrow_left {
		position: absolute; left: 0.48rem; top: 5.34rem;
		width: 0.34rem;
		z-index: 100;
	}
	.arrow_right {
		position: absolute; right: 0.48rem; top: 5.34rem;
		width: 0.34rem;
		z-index: 100;
	}
	
	.Swiper {
		position: relative;
		width: 5.88rem; height: 10.38rem;
		margin: auto; margin-top: 0.76rem;
		.slogan {
	    position: absolute; left: 0; top: 0;
	    width: 100%;
	    z-index: 99;
	  }
		.train {
			width: 2000%; height: 100%;
			&.carousel {
				margin-left: -200%;
			}
			.item {
				float: left;
				width: 5%; height: 100%;
				transition-property: opacity,transform;
				transition-duration: 0.3s;
				transform: scale(0.85);
				opacity: 0.8;
				&.active {
					opacity: 1;
					transform: scale(1);
				}
				.card {
					width: 5.88rem; height: 100%;
					margin: auto;
				}
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
			}
		}
	}
}
</style>

<script>
export default {
	components: {
		Controls: require('lib/_main/Controls.vue'),
		BtnShare: require('./BtnShare.vue'),
	},
	props: {
		act: {},
		img: {},
		items: {
			default: function(){
				return [{},{},{},{},{},{}];
			}
		},
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out'//'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: true
		},
		sticky: {
			default: false
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
	  share_btn(){
      return this.$store.state.share_btn;
    },
		pic(){
      return this.$store.state.pic;
    },
		img: function(){
			return this.$store.state.img;
		}
	},
	watch: {
		items: function(){
			//this.copy = this.items;
		},
		currentOne: function(new_val){
			this.$store.dispatch({
				type: 'PICK_BG',
				i: new_val
			})
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