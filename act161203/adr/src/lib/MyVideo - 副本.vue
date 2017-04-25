<template>
	<div class="MyVideo">
		
		<img class="play" :src=" 'img/play_2.png' "
		v-show=" !yyb&&state!=='playing'&&state!=='loading' "
		@click="PLAY($event)"/>
		
		<img class="bob" :src=" 'img/cards/'+video.id+'.jpg' "
		v-show=" state==='pending'||state==='loading'||state==='ready' "/>
		
		<!-- <p class="advice" v-if=" state==='pending'||state==='ready' ">建议在wifi环境下观看</p> -->

		<div class="loading"
		v-show=" state==='loading' ">
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
			:class=" state==='loading'?'_loading':'' "></div>
		</div>

		<video ref="video" src="./video/2.mp4" preload="metadata" 
		v-show=" state==='playing'||state==='paused' ">
			<source type="video/mp4">  
		</video>
		<div class="glass" v-show=" state==='playing'||state==='paused' "
		@click="PAUSE()"></div>
		
	</div>
</template>

<style lang="less" scoped>
	.MyVideo {
		position: relative;
		width: 5.25rem; height: 5.25rem;
		margin: auto;
		font-size: 0.3rem; line-height: 0.84rem;
		text-align: center;
		background: black;
		transform-origin: 50% 200%;
		transition: transform 1s;
		overflow: hidden;
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
			//position: absolute; left: 2.125rem; top: 2.125rem; z-index: 40;
			position: absolute; right: 0.3rem; bottom: 0.3rem; z-index: 40;
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
</style>

<script type="text/javascript">
	export default {
		props: {
			video: {},
			current: {},
			act: {},
			yyb: {}
		},
		data: function(){
			return {
				state: 'pending',
				loaded: false
			}
		},
		watch: {
			current: function(){
				if( this.state!=='pending' ){
					this.state = 'ready';
				};
			},
			state: function(state){
				var self = this;
				switch (state) {
					case 'loading':
						var tl0 = new TimelineMax();

						tl0.to( this.$refs.t0,1,{
							opacity: 1
						}).to( this.$refs.t1,1,{
							opacity: 1
						}).to( this.$refs.t2,1,{
							opacity: 1
						}).to( this.$refs.t3,1,{
							opacity: 1
						})
						
						this.$refs.video.setAttribute( 'src',DIR.video+this.video.id+'.mp4' );
						console.log(this.$refs.video.src)
						this.$refs.video.load();
						this.$refs.video.addEventListener('loadeddata',()=>{
							console.log('loaded');
							self.loaded = true;
							// this.act({
							// 	type: 'SET_LOADED',
							// 	i: this.video.id
							// })

							setTimeout(()=>{
								var tl2 = new TimelineMax();
								tl2.to( self.$refs.t4,1,{
									opacity: 1
								}).to( self.$refs.t5,1,{
									opacity: 1
								})

								var tl = new TimelineMax();
								tl.fromTo( self.$refs.progress,3,{
									transformOrigin: '0% 0%',
									scaleX: 0
								},{
									scaleX: 1,
									onComplete: function(){
										if( self.state==='loading' ){
											self.state = 'playing';
										};
									}
								})
							},4000)
						})
						break;
					case 'ready':
						if( this.loaded ){
							this.$refs.video.pause();
							this.$refs.video.currentTime = 0;
						};
						break;
					case 'playing':
						self.$refs.video.play();
						break;
					case 'paused':
						this.$refs.video.pause();
						break;
				}

			}
		},
		computed: {
			src: function(){
				return location.href.replace(/act161203.+/,'act161203/video/'+this.video.id+'.mp4');
			}
		},
		methods: {
			PLAY: function(e){
				this.act({
					type: 'PLAY_VIDEO',
					i: this.video.id
				});
				e.stopPropagation();
				var self = this;
				if( this.state === 'pending' ){
					if( !this.loaded ){
						self.state = 'loading';
					};
				}else if( this.state === 'ready' ){
					self.state = 'playing';
				}else if( this.state === 'paused' ){
					self.state = 'playing';
				}
			},
			PAUSE: function(){
				if( this.$refs.video.ended ){
					this.$refs.video.play();
				}else{
					this.state = 'paused';
				};
			}
		}
	}
</script>