<template>
<div class="Swiper__">
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
			<!-- {{i}} {{a.state}} -->
			<img class="play" :src=" 'img/play.png' "
			v-show=" a.state!=='playing'&&a.state!=='loading' "
			@click="PLAY(i,$event)"/>
			<img class="bob" :src=" 'img/bob.jpeg' "
			v-show=" a.state==='pending'||a.state==='loading'||a.state==='ready' "/>
			<p class="advice" v-if=" a.state==='pending'||a.state==='ready' ">建议在wifi环境下观看</p>
			<div class="loading"
			v-show=" a.state==='loading' ">
				<div class="words">
					<p class="text text_0" ref="t0">大神开始试妆</p>
					<p class="text text_1" ref="t1">大神正在准备台词</p>
					<p class="text text_2" ref="t2">导演摄影已到位</p>
					<p class="text text_3" ref="t3">大神正在酝酿情绪</p>
					<p class="text text_4" ref="t4">准备好了</p>
					<p class="text text_5" ref="t5">action!</p>
				</div>
				<div class="progress"
				ref="progress"
				:class=" a.state==='loading'?'_loading':'' "></div>
			</div>

			<video ref="videos" src="../video/3.mp4" preload="none" 
			v-show=" a.state==='playing'||a.state==='paused' ">
				<source type="video/mp4">  
			</video>
			<div class="glass" v-show=" a.state==='playing'||a.state==='paused' "
			@click="PAUSE(i)"></div>
			
		</div>

<!-- 			<ul class="pagination" v-if="false">
			<li v-for="(item,i) in items"
			class="dot"
			:class=" 'item '+(i===currentOne?'active':'') "
			@click="toCard(i)">
			</li>
		</ul> -->
	</div>

	<div class="textBellow">
		<p class="name">{{items[currentOne].name}}</p>
		<p class="desc">{{items[currentOne].desc}}</p>
	</div>

</div>
</template>

<style lang="less" scoped>
.Swiper__ {
	box-sizing: border-box;
	position: relative;
	width: 100%; height: 9rem;
	padding-top: 0.92rem;
	overflow: hidden;

		.Swiper {
			position: relative;
			width: 5.25rem; height: 5.25rem;
			background: grey;
			margin: auto;
			//overflow: hidden;
			.item {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				//transform: scale(0.8);
				//transition: 0.5s;
				font-size: 0.3rem; line-height: 0.84rem;
				text-align: center;
				background: orange;
				transform-origin: 50% 200%;
				transition: transform 1s;
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
				.advice {
					position: absolute; left: 1.225rem; top: 3.36rem;
					width: 2.8rem; height: 0.34rem; line-height: 0.34rem;
					border-radius: 0.17rem;
					font-size: 0.24rem; color: white;
					background: #583f41;
					z-index: 31;
				}
				.bob {
					position: absolute; left: 0; top: 0; 
					z-index: 30;
					width: 100%; height: 100%;
				}
				.loading {
					position: absolute; left: 0; top: 0; 
					z-index: 32;
					width: 100%; height: 100%;
					overflow: hidden;
					background: rgba(0,0,0,0.8);
					.words {
						position: absolute; left: 0; top: 1.86rem;
						width: 100%;
						.text {
							width: 100%; height: 0.46rem;
							font-size: 0.24rem; line-height: 0.46rem; color: white; text-align: center;
							opacity: 0;
						}
					}
					.progress {
						position: absolute; left: 0; bottom: 0;
						width: 100%; height: 0.1rem;
						background: #ee7d31;
						transform: scaleX(0);
						/*
						transform-origin: 0% 0%;
						transform: scaleX(0.1);
						transition: transform 2s;
						&._loading {
							transform: scaleX(0.9);
							
						}
						*/
					}
				}
				.play {
					position: absolute; left: 2.125rem; top: 2.125rem; z-index: 40;
					width: 1rem;
				}

				video {
					display: block;
					margin-left: -38.8%;
					height: 100%;
					z-index: 20;
				}
				.glass {
					position: absolute; left: 0; top: 0;
					width: 100%; height: 100%;
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

	.textBellow {
		position: absolute; left: 0; top: 7.15rem;
		width: 100%;
		.name {
			margin-bottom: 0.24rem;
			text-align: center; font-size: 0.38rem; color: black;
		}
		.desc {
			text-align: center; font-size: 0.24rem; color: #636363;
		}
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
		
	},
	props: {
		act: {},
		day: {},

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
			default: 300
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
			if( this.items[old].state!=='pending' ){
				this.$refs.videos[old].pause();
				this.$refs.videos[old].currentTime = 0;
				//this.state[old] = 'ready';
				this.act({
					type: 'CHANGE_STATE',
					i: old,
					state: 'ready'
				})
			};
			this.act({
				type: 'SWITCH',
				n: new_val
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
		PLAY: function(i,e){
			e.stopPropagation();
			var self = this;
			if( this.items[i].state === 'pending' ){
				if( !this.items[i].loaded ){
					this.act({
						type: 'CHANGE_STATE',
						i: i,
						state: 'loading'
					})
					var tl0 = new TimelineMax();
					tl0.to( this.$refs.t0[i],1,{
						opacity: 1
					}).to( this.$refs.t1[i],1,{
						opacity: 1
					}).to( this.$refs.t2[i],1,{
						opacity: 1
					}).to( this.$refs.t3[i],1,{
						opacity: 1
					})
					this.$refs.videos[i].addEventListener('loadeddata',()=>{
						//this.state[i] = 'ready';
						this.act({
							type: 'SET_LOADED',
							i: i
						})

						setTimeout(()=>{
							var tl2 = new TimelineMax();
							tl2.to( self.$refs.t4[i],1,{
								opacity: 1
							}).to( self.$refs.t5[i],1,{
								opacity: 1
							})

							var tl = new TimelineMax();
							tl.fromTo( self.$refs.progress[i],3,{
								transformOrigin: '0% 0%',
								scaleX: 0
							},{
								scaleX: 1,
								onComplete: function(){
									if( self.items[i].state==='loading' ){
										self.act({
											type: 'CHANGE_STATE',
											i: i,
											state: 'playing'
										})
										self.$refs.videos[i].play();
									};
								}
							})
						},4000)

					})
					this.$refs.videos[i].load();
				};
			}else if( this.items[i].state === 'ready' ){
				this.$refs.videos[i].play();
				//this.state[i] = 'playing';
				this.act({
					type: 'CHANGE_STATE',
					i: i,
					state: 'playing'
				})
			}else if( this.items[i].state === 'paused' ){
				this.$refs.videos[i].play();
				//this.state[i] = 'playing';
				this.act({
					type: 'CHANGE_STATE',
					i: i,
					state: 'playing'
				})
			}
		},
		PAUSE: function(i){
			if( this.$refs.videos[i].ended ){
				this.$refs.videos[i].play();
			}else{
				this.$refs.videos[i].pause();
				//this.state[i] = 'paused';
				this.act({
					type: 'CHANGE_STATE',
					i: i,
					state: 'paused'
				})
			};
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