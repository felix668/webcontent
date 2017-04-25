<template>
	<div class="VideoCard">
		<!-- <div class="state">{{state}}</div> -->
		<!-- <p style="position:absolute;left:0;top:0;z-index:9999;font-size:30px;color:white;margin:0;">{{state}}</p> -->
<!-- 		<div class="overlay"
		:style=" 'background-image:url('+img+'/main/video_bg.png);background-size:100% 100%;' "
		v-show=" state==='pending'||state==='loaded' ">
			<p>胡馆长有个见面礼送给你</p>
		</div> -->
		<img class="btn_play" :src=" img+'/main/btn_play.png' "
		v-show=" state==='uninitialized'||state==='paused'||state==='ended' "
		@click="PLAY"/>

		<img class="icon_loading" :src=" img+'/main/loading.svg' "
		v-show=" state==='loading' "/>

		<div class="overlay" v-show=" state==='uninitialized'||( meta.platform==='ios' ) ">
			<img class="snapshot" :src=" img+'/main/snapshot/'+id+'.jpg' "/>
		</div>

		<video ref="video" :src=" './video/'+id+'.mp4' "
		preload="none" 
		v-if=" meta.platform==='ios' "
		v-show=" state==='playing' "
		:poster=" img+'/main/covers/0.jpg' "
		@click="PAUSE">
			<source type="video/mp4">  
		</video>

		<video ref="video" :src=" './video/'+id+'.mp4' "
		preload="none" 
		v-if=" meta.platform==='adr' "
		:poster=" img+'/main/covers/0.jpg' "
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
	.VideoCard {
		// box-sizing: border-box;
		position: relative;
		width: 5.65rem; height: 3.45rem;
		// border: 0.04rem solid #71767b;
		margin: auto;
		margin-top: 0.24rem;
		// margin-bottom: 0.58rem;
		font-size: 0.3rem; line-height: 0.84rem;
		text-align: center;
		background: black;
		transform-origin: 50% 200%;
		transition: transform 1s;
		// border-top-left-radius: 0.26rem;
		// border-top-right-radius: 0.26rem;
		overflow: hidden;
		.state {
			position: absolute; left: 0; top: -0.32rem;
			font-size: 0.3rem;
			background: orange;
			z-index: 99;
		}
		.overlay {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			overflow: hidden;
			z-index: 99;
			.snapshot {
				height: 100%;
			}
			p {
				margin-top: 2.45rem;
				line-height: 0.3rem;
				font-size: 0.28rem; text-align: center;
				color: #fffefe;
			}
		}
		.icon_loading {
			position: absolute; left: 2.325rem; top: 1.2rem;
			width: 1rem;
			z-index: 100;
		}
		.btn_play {
			position: absolute; right: 0.2rem; bottom: 0.2rem;
			width: 1.33rem;
			z-index: 100;
		}
		video {
			position: absolute; left: 0; top: 0;
			z-index: 80;
			display: block;
			height: 100%;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			id: {},
		},
		data: function(){
			return {
				state: 'uninitialized',
				loaded: false
			}
		},
		watch: {
			'$store.state.card.current': function(nv){
				this.$refs.video.pause();
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
					// case 'loading':

					// 	this.$refs.video.setAttribute( 'src',DIR.video+this.video.id+'.mp4' );
					// 	console.log(this.$refs.video.src)
					// 	this.$refs.video.load();

					// 	this.$refs.video.addEventListener('pause',()=>{
					// 		if( this.state==='playing' ){
					// 			this.state = 'paused';
					// 		}
					// 	});

					// 	this.$refs.video.addEventListener('loadeddata',()=>{
					// 		console.log('loaded');
					// 		self.loaded = true;
					// 		// this.act({
					// 		// 	type: 'SET_LOADED',
					// 		// 	i: this.video.id
					// 		// })

					// 		setTimeout(()=>{
					// 			var tl2 = new TimelineMax();
					// 			tl2.to( self.$refs.t5,0.6,{
					// 				y: '-500%',
					// 				opacity: 1
					// 			})

					// 			var tl = new TimelineMax();
					// 			tl.fromTo( self.$refs.progress,1,{
					// 				transformOrigin: '0% 0%',
					// 				scaleX: 0
					// 			},{
					// 				scaleX: 1,
					// 				onComplete: function(){
					// 					if( self.state==='loading' ){
					// 						self.state = 'playing';
					// 					};
					// 				}
					// 			})
					// 		},3000)
					// 	})
					// 	break;
					case 'ready':
						// if( this.loaded ){
						// 	this.$refs.video.pause();
						// 	this.$refs.video.currentTime = 0;
						// };
						break;
					case 'playing':
						// self.$refs.video.play();
						break;
					case 'paused':
						// this.$refs.video.pause();
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
			meta(){
				return this.$store.state.meta;
			}
			// src: function(){
			// 	return location.href.replace(/act161203.+/,'act161203/video/'+this.video.id+'.mp4');
			// }
		},
		mounted: function(){
			if ( window&&window.wView ) {
		    window.wView.allowsInlineMediaPlayback = "YES";
		    window.wView.mediaPlaybackRequiresUserAction = "NO";
		  }
		 //  this.$refs.video.addEventListener('progress',()=>{
		 //  	console.log('loading');
			// 	this.state = 'loading';
			// });
			// this.$refs.video.addEventListener('loadstart',()=>{
			// 	this.state = 'loading';
			// });
			this.$refs.video.addEventListener('loadeddata',()=>{
				Local.forceLog( common.param('act_f'),`play_${this.id}` );
				console.log('loaded');
				this.state = 'loaded';
				this.$refs.video.play();
			});
			this.$refs.video.addEventListener('playing',()=>{
				this.state = 'playing';
			});
			this.$refs.video.addEventListener('pause',()=>{
				this.state = 'paused';
			});
			this.$refs.video.addEventListener('ended',()=>{
				this.state = 'ended';
			});
		},
		methods: {
			PLAY: function(e){
				e.stopPropagation();
				var self = this;
				if( this.state==='uninitialized' ){
					this.state = 'loading';
					this.$refs.video.load();
				}else{
					this.$refs.video.play();
				}
				// Local.forceLog( common.param('act_f'),`play` );
			},
			PAUSE: function(){
				this.$refs.video.pause();
			}
		}
	}
</script>