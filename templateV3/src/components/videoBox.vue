<template>
	<div class="video-box" :mid="mdata.mid">
		<div class="videolayer" @click="playVideo" :style="styleobj">
			<img :src="source.cover" v-show="showposter">
			<div class="play" v-show="showicon"></div>
			<video :src="source.url" ref="voice" x-webkit-airplay="true" webkit-playsinline="true" playsinline="true" preload="auto"></video>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.video-box{
	margin:0 .32rem;padding:.16rem 0 .34rem;
	.videolayer{
		height:3.86rem;position: relative;
		img{
			position: absolute;top:0;left:0;height:100%;width: 100%;
		}
	}
	.play{
		position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;width: 2.2rem;height: 1.78rem;background:url(../images/play.png) no-repeat;background-size: 100% auto;
	}
	video{object-fill:fit;width:100%;height:100%;}	
}
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{
			showposter:true,
			showicon:true,
			source:this.mdata.list[0] || {},
			styleobj:{
				border:`1px solid ${this.mdata.area || '#333'}`
			}
		}
	},
	methods:{
		playVideo(){
			var vobj=this.$refs.voice;
			if(this.showposter && !this.$parent.sharepage){
				Local.forceLog("templateV2","TpVideo",this.$parent.actid,this.mdata.id);
			};
			if(this.showicon){
				vobj.play();
				this.showposter=false;
				this.showicon=false;
			}else{
				requestAnimationFrame(_=>{
					vobj.pause();
				})
				this.showicon=true;
			}		
		}
	}
}
</script>

