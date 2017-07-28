<template>
	<div class="video-box">
		<h2>{{vobj.title}}</h2>
		<div class="varea" @click="play">
			<div class="vshow">
				<video id="video1" x-webkit-airplay="true" webkit-playsinline="true" playsinline="true" preload="auto" :src="vobj.src" ref="video1" data-first="true"></video>
			</div>	
			<img src="src/images/vbor.png" class="vbor">
			<img :src="vobj.poster" class="poster" v-show="poster">
			<img src="src/images/play.png" class="play" v-show="playshow">
		</div>
	</div>
</template>
<style lang="scss" scoped>
.video-box{text-align: center;margin:.46rem auto 0;}
.varea{
	width: 7.18rem;height: 4.32rem;margin:.36rem auto .5rem;position: relative;overflow: hidden;
	.vbor{position: absolute;top:0;left:0;z-index:10;}
	.poster{position: absolute;left:.24rem;top:.32rem;width: 6.7rem;overflow: hidden;}
	.play{position: absolute;left:2.54rem;top:1.36rem;width: 2.2rem;}
}
.vshow{
	position: relative;left:.24rem;top:.32rem;width: 6.7rem;height:3.8rem;overflow: hidden;
	video{object-fit:fill;margin:0;padding: 0;width: 100%;height: 100%;}
}
.btn{margin-bottom: .62rem;}
</style>
<script>
	export default{
		props:["vobj"],
		data(){
			return {
			 playshow:true,
			 poster:true
			}
		},
		mounted(){
			
		},
		methods: {
			play(){
				let media=this.$refs.video1;
				if(media.paused){
					media.play();
					this.playshow=false;
					this.poster=false;
					if(media.dataset.first){
						media.dataset.first="";
						var name=this.vobj.name;
						Local.forceLog(common.param("act_f"),"LYF"+name);
					}					
				}else{
					media.pause();
					this.playshow=true;
				}
			}
	 	}
	}
</script>