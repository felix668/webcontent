<template>
<div class="Swiper__">
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

			<li :class=" 'item '+(i===currentOne?'active':'') " 
				v-for="(item,i) in items"
				:key="item.id" 
				style="background:url(img/red/card.png) no-repeat 0% 100%;background-size:100% 100%;">
				<card0 v-if="i===0" :state="cardZero" :img="img"></card0>
				<card1 v-if="i===1" :state="cardOne" :img="img"></card1>
				<card2 v-if="i===2" :state="cardOne" :img="img"></card2>
				<card3 v-if="i===3" :state="cardOne" :img="img"></card3>
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

	</div>
	<ul class="pagination">
		<li v-for="(item,i) in items"
		class="dot"
		:class=" 'item '+(i===currentOne?'active':'') "
		@click="toCard(i)">
		</li>
	</ul>
</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	position: relative;
	width: 100%;
	margin-top: 1.96rem;
	//background: #a1808e;
	overflow: hidden;

	.Swiper {
		position: relative;
		width: 6.86rem; height: 8.76rem;
		//width: 6.22rem; height: 8.28rem;
		margin: auto;
		//background: grey;
		//overflow: hidden;
		.train {
			width: 2000%;
			height: 100%;
			&.carousel {
				margin-left: -200%;
			}
			.item {
				float: left;
				width: 5%; height: 100%;
				//transform: scale(0.8);
				opacity: 0.6;
				transition: opacity 0.5s;
				font-size: 0.3rem; line-height: 0.84rem;
				text-align: center;
				background: #f0f0ef;
				// border-radius: 0.05rem;
				// box-shadow: 0 0 30px black;
				&.active {
					// transform: scale(1);
					opacity: 1;
				}
			}
		}
	}
	.pagination {
		overflow: hidden;
		display: table;
		margin: auto;
		.dot {
			float: left;
			width: 0.16rem; height: 0.16rem;
			margin: 0.08rem;
			border-radius: 1000px;
			background: #6c556f;
			//transition: transform 400ms;
			&.active {
				transform: scale(1.2);
				background: #fffbef;
			}
		}
	}
}
</style>

<script>
export default {
	components: {
		Card0: require('./Cards/Card0.vue'),
		Card1: require('./Cards/Card1.vue'),
		Card2: require('./Cards/Card2.vue'),
		Card3: require('./Cards/Card3.vue')
	},
	props: {
		img: {},
		cardZero: {},
		cardOne: {},
		items: {
			default: function(){
				return [{
					id: 0,
					name: '刘十八',
					desc: '刘十八',
					song: '刘十八',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 1,
					name: '流水无痕',
					desc: '流水无痕',
					song: '流水无痕',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 2,
					name: '苏小暖',
					desc: '苏小暖',
					song: '苏小暖',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 3,
					name: '太上布衣',
					desc: '太上布衣',
					song: '太上布衣',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}];
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
			console.log(this.inCycle)
			if( !this.inCycle&&!this.switching ){
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