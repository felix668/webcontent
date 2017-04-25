<template>
	<div class="MyAudio">
		<audio ref="audio" src="../adr/farm.mp3" preload loop></audio>
	</div>
</template>

<style lang="less" scoped>
	.MyAudio {
		position: absolute; left: 0; top: 0;
		width: 0.5rem; height: 0.5rem;
		background: red;
		z-index: 999;
		display: none;
		.play {
			width: 0.5rem; height: 0.5rem;
			background: white;
		}
	}
</style>

<script>
	export default {
		computed: {
			music(){
				return this.$store.state.music;
			},
			change(){
				return this.$store.state.change;
			}
		},
		watch: {
			// 'change.stage': function(nv){
			// 	if(nv===1&&this.music.initialized===false){
			// 		this.$refs.audio.pause();
			// 		setTimeout(()=>{
			// 			this.$refs.audio.play();
			// 		},50);
			// 	}
			// },
			'music.on':function(nv){
				if( nv===true ){
					this.$refs.audio.play();
				}else{
					this.$refs.audio.pause();
				}
			},
			// 'change.page':function(nv){
			// 	if(nv===3){
			// 		var intv = setInterval(()=>{
			// 			if( this.$refs.audio.volume-0.015>0 ){
			// 				this.$refs.audio.volume -= 0.015;
			// 			}else{
			// 				this.$refs.audio.volume = 0;
			// 				clearInterval(intv);
			// 			}
			// 		},100);
			// 	}
			// }
		},
		created: function(){

		},
		mounted: function(){
			// this.$refs.audio.load();
			this.$refs.audio.addEventListener('loadeddata',()=>{
				console.log('loadeddata')
				if( this.music.on===true ){
					this.$refs.audio.play();
				};
			})
			this.$refs.audio.addEventListener('canplaythrough',()=>{
				console.log('canplaythrough')
				if( this.music.on===true ){
					this.$refs.audio.play();
				};
			})
			// document.addEventListener("WeixinJSBridgeReady",()=>{
			// 	console.log('WeixinJSBridgeReady')
			// 	if( this.music.on===true ){
			// 		this.$refs.audio.play();
			// 	};
	  //   }, false);
		},
		methods: {
		}
	}
</script>