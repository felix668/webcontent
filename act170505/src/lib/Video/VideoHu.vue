<template>
	<div class="VideoHu">
		<!-- <p style="position:absolute;left:0;top:0;z-index:9999;font-size:30px;color:white;margin:0;">{{state}}</p> -->
		<div class="overlay"
		:style=" 'background-image:url('+img+'/main/video_bg.png);background-size:100% 100%;' "
		v-show=" state==='pending'||state==='loaded' ">
			<p>胡馆长有个见面礼送给你</p>
		</div>
		<img class="btn_play" :src=" img+'/main/btn_play.png' "
		v-show=" state==='loaded'||state==='ready'||state==='paused'||state==='ended' "
		@click="PLAY"/>
		<video ref="video" src="../adr/video.mp4" preload=""
		v-show=" state==='playing'||state==='paused'||state==='ended' "
		@click="PAUSE">
			<source type="video/mp4">  
		</video>
<!-- 		<img class="play" :src=" 'img/play_2.png' "
		v-show=" !yyb&&state!=='playing'&&state!=='loading' "
		@click="PLAY($event)"/>
		
		<img class="bob" :src=" 'img/cards/'+video.id+'.jpg' "
		v-show=" state==='pending'||state==='loading'||state==='ready' "/> -->
		
		<!-- <p class="advice" v-if=" state==='pending'||state==='ready' ">建议在wifi环境下观看</p> -->

<!-- 		<div class="loading"
		v-show=" state==='loading' ">

				<p class="text text_0" ref="t0">大神开始试妆</p>
				<p class="text text_1" ref="t1">大神正在准备台词</p>
				<p class="text text_2" ref="t2">导演摄影已到位</p>
				<p class="text text_3" ref="t3">大神正在酝酿情绪</p>
				<p class="text text_4" ref="t4">准备好了</p>
				<p class="text text_5" ref="t5">action!</p>

			<div class="progress"
			ref="progress"
			:class=" state==='loading'?'_loading':'' "></div>
		</div>

		<video ref="video" src="./video/2.mp4" preload="metadata" 
		v-show=" state==='playing'||state==='paused' ">
			<source type="video/mp4">  
		</video>
		<div class="glass" v-show=" state==='playing'||state==='paused' "
		@click="PAUSE()"></div> -->
		
	</div>
</template>

<style lang="less" scoped>
	.VideoHu {
		// box-sizing: border-box;
		position: relative;
		width: 6.05rem; height: 3.42rem;
		border: 0.04rem solid #71767b;
		margin: auto;
		margin-bottom: 0.58rem;
		font-size: 0.3rem; line-height: 0.84rem;
		text-align: center;
		background: black;
		transform-origin: 50% 200%;
		transition: transform 1s;
		overflow: hidden;
		.overlay {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			overflow: hidden;
			z-index: 99;
			p {
				margin-top: 2.45rem;
				line-height: 0.3rem;
				font-size: 0.28rem; text-align: center;
				color: #fffefe;
			}
		}
		.btn_play {
			position: absolute; left: 2.38rem; top: 1.06rem;
			width: 1.33rem;
			z-index: 100;
		}
		video {
			position: absolute; left: 0; top: 0;
			z-index: 80;
			display: block;
			width: 100%; height: 100%;
		}
	}
</style>

<script type="text/javascript">
	export default {
		// props: {
		// 	video: {},
		// 	current: {},
		// 	act: {},
		// 	yyb: {}
		// },
		data: function(){
			return {
				state: 'pending',
				loaded: false
			}
		},
		watch: {
			'$store.state.change_main.stage': function(nv){
				if( nv==='factory' ){
					this.PAUSE();
				};
			},
			// current: function(){
			// 	if( this.state!=='pending' ){
			// 		this.state = 'ready';
			// 	};
			// },
			state: function(state){
				var self = this;
				console.log('[video state] '+state)
				switch (state) {
					case 'loading':

						this.$refs.video.setAttribute( 'src',DIR.video+this.video.id+'.mp4' );
						console.log(this.$refs.video.src)
						this.$refs.video.load();

						this.$refs.video.addEventListener('pause',()=>{
							if( this.state==='playing' ){
								this.state = 'paused';
							}
						});

						this.$refs.video.addEventListener('loadeddata',()=>{
							console.log('loaded');
							self.loaded = true;
							// this.act({
							// 	type: 'SET_LOADED',
							// 	i: this.video.id
							// })

							setTimeout(()=>{
								var tl2 = new TimelineMax();
								tl2.to( self.$refs.t5,0.6,{
									y: '-500%',
									opacity: 1
								})

								var tl = new TimelineMax();
								tl.fromTo( self.$refs.progress,1,{
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
							},3000)
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
					case 'ended':
						break;
				}

			}
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			// src: function(){
			// 	return location.href.replace(/act161203.+/,'act161203/video/'+this.video.id+'.mp4');
			// }
		},
		mounted: function(){
			this.state = 'loaded';
			this.$refs.video.addEventListener('loadeddata',()=>{
				console.log('loaded');
				this.state = 'loaded';
				this.loaded = true;
			});
			this.$refs.video.addEventListener('ended',()=>{
				this.state = 'ended';
			});
		},
		methods: {
			PLAY: function(e){
				// this.act({
				// 	type: 'PLAY_VIDEO',
				// 	i: this.video.id
				// });
				e.stopPropagation();
				var self = this;
				console.log('dog')
				self.state = 'playing';
				// if( this.state === 'pending' ){
				// 	if( !this.loaded ){
				// 		self.state = 'loading';
				// 	};
				// }else if( this.state === 'ready' ){
				// 	self.state = 'playing';
				// }else if( this.state === 'paused' ){
				// 	self.state = 'playing';
				// }
			},
			PAUSE: function(){
				// if( this.$refs.video.ended ){
				// 	this.$refs.video.play();
				// }else{
					this.state = 'paused';
				// };
			}
		}
	}
</script>