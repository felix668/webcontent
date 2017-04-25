<template>
<div class="Swiper__"
style="background:url(img/radio.png);background-size:100% 11.14rem;">
	<div class="screen">
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
					style="background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;">{{item.name}}</li>
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
<!-- 			<ul class="pagination" v-if="false">
				<li v-for="(item,i) in items"
				class="dot"
				:class=" 'item '+(i===currentOne?'active':'') "
				@click="toCard(i)">
				</li>
			</ul> -->
		</div>
		<div class="needle">

		</div>
	</div>
	<p class="desc">{{items[currentOne].desc}}</p>
	<ul class="songs">
		<li v-for="(a,i) in items"
		v-show=" i===currentOne ">
			<song :writer="a" :current-one="currentOne"></song>
		</li>
	</ul>
	<ul class="tabs">
		<li v-for="(a,i) in authors"
		:class=" a===author?'active':'' "
		@click=" __toItem(a) ">{{a}}</li>
	</ul>
</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	position: relative;
	width: 100%; height: 11.14rem;
	overflow: hidden;
	.screen {
		position: absolute; left: 0.92rem; top: 1.54rem;
		width: 5.68rem; height: 1rem;
		border-radius: 0.1rem;
		overflow: hidden;
		.needle {
			position: absolute; left: 2.82rem; bottom: 0;
			width: 0.05rem; height: 0.7rem;
			background: #ff8c8c;
		}
		.Swiper {
			position: relative;
			width: 2.4rem;
			//background: grey;
			margin: auto;
			//overflow: hidden;
			.train {
				width: 2000%;
				height: 1rem;
				&.carousel {
					margin-left: -200%;
				}
				.item {
					float: left;
					width: 5%; height: 100%;
					//transform: scale(0.8);
					opacity: 0.6;
					//transition: 0.5s;
					font-size: 0.3rem; line-height: 0.84rem;
					text-align: center;
					background: #f0f0ef;
					&.active {
						// transform: scale(1);
						// opacity: 1;
					}
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
	}
	.desc {
		position: absolute; left: 0; top: 2.7rem;
		width: 100%;
		text-align: center; font-size: 0.24rem; color: #b7b3aa;
	}
	.songs {
		width: 100%;
		margin-top: 3.87rem;
	}
	.tabs {
		margin-top: 1rem;
		padding-left: 0.34rem;
		li {
			float: left;
			box-sizing: border-box;
			margin-right: 0.14rem;
			margin-bottom: 0.28rem;
			padding: 0.05rem 0;
			font-size: 0.26rem; text-align: center;
			border: 1px solid #57463f;
			border-radius: 0.08rem;
			&.active {
				background: #c2a48e;
			}
			&:nth-child(1) {
				width: 1.38rem;
			}
			&:nth-child(2) {
				width: 1.86rem;
			}
			&:nth-child(3) {
				width: 1.35rem;
			}
			&:nth-child(4) {
				width: 1.83rem;
			}
			&:nth-child(5) {
				width: 2.33rem;
			}
			&:nth-child(6) {
				width: 1.33rem;
			}
			&:nth-child(7) {
				width: 0.92rem;
			}
			&:nth-child(8) {
				width: 1.84rem;
			}
		}
	}
}
</style>

<script>
export default {
	components: {
		Song: require('./Song.vue')
	},
	props: {
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
				},{
					id: 4,
					name: '忘记呼吸的猫',
					desc: '忘记呼吸的猫',
					song: '忘记呼吸的猫',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 5,
					name: '梧桐火',
					desc: '梧桐火',
					song: '梧桐火',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 6,
					name: '彦七',
					desc: '彦七',
					song: '彦七',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				},{
					id: 7,
					name: '夜七歌',
					desc: '夜七歌',
					song: '夜七歌',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}];
			}
		},
		style: {
			default: ''
		},
		carousel: {
			default: true
		},
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
			default: 1000
		},
		authors: {
			default: [
				'刘十八','流水无痕','苏小暖','太上布衣','忘记呼吸的猫','梧桐火','彦七','夜七歌'				
			]
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
				if( distance<0 ){
					this.toNext();
				}else if( distance>0 ){
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