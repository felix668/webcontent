<template>
	<div class="audio-box cflex" @click="play" :id="mdata.id" :mid="mdata.mid" :style="styleobj">
		<div class="audio-wrap">	
			<span :class="playstatus ? 'pause' : 'play'" ref='playIcon'></span>
			<span class='cur' ref='cur'>00:00</span>
			<input type="range" min=0 max=100 class='range' value=0 ref='range' disabled>
			<span class='max' ref='max'>02:02</span>
			<audio :src="mdata.url" ref='audio' preload="auto"></audio>	
		</div>
	</div>
</template>
<style lang="sass" scoped>
.audio-box{
	width:100%;
	height:1.6rem;
	background-size:100% auto;
	background-repeat:no-repeat;
	.audio-wrap{
		height: .98rem;
		width: 6.86rem;
		position: relative;
		line-height: .98rem;
		color: #a19fad;
		font-size: .16rem;
		background-size:100% auto;
	}
	.play,.pause{
		width: .7rem;
		height: .7rem;
		background:url(../images/audioIcon.png) no-repeat;
		background-size: 100% auto;
		position: absolute;
		top:.14rem;
		left:.14rem;
	}
	.pause{
		background-position: 0 -1.3rem;
	}
	.cur{
		margin-left: 1.22rem;
	}
	.range{
		-webkit-appearance: none;
		border-radius:2px;
		height: .02rem;
		position: absolute;
		left: 28%;
		width: 55%;
		top: 46%;
		background-image:-webkit-linear-gradient(left,#a19fad 0%,#a19fad 0%,#302e38 0%, #302e38 0%);
		outline : none;
		&::-webkit-slider-thumb{
			-webkit-appearance: none;
			width: 0.25rem;
			height: 0.25rem;
			background-color: #a19fad;
			border-radius: 50%;
			transition:.1s;
		}
	}
	.max{
		float: right;
		margin-right: .24rem;
	}
	audio{
		position: absolute;
		left: 0;
		top: 0;
	}
}
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{
			audioTimeId: null,
			playstatus:false,
			styleobj:{
				backgroundImage:`url(${this.mdata.bgpic || 'none'})`
			},
			first:true
		}
	},
	mounted(){
		this.setAudioMax();
	},
	methods:{
		setAudioMax(){
			let audio = this.$refs.audio;
 			let range = this.$refs.range;
 			audio.onloadedmetadata = _=>{
 				let duration = audio.duration;
 				let obj = this.computedTime(duration);
 				range.max = parseInt(duration);
 				this.$refs.max.innerText = `${obj.minute}:${obj.second}`;
 			}
 			audio.onended = _=>{
 				clearInterval(this.audioTimeId);
					this.playstatus = false;
					range.removeAttribute('style');
					range.value = 0;
					this.$refs.cur.innerText = `00:00`;
 			}
 		},
 		play(){
 			let range = this.$refs.range;
 			let audio = this.$refs.audio;
 			let val = range.value;
 			let currentTime = 0;
 			let timeObj = null;
 			if (audio.paused) {
 				audio.play();
 				this.playstatus = true;
 				this.audioTimeId = setInterval(_=>{
 					currentTime = Math.floor(this.$refs.audio.currentTime);
 					range.value = currentTime;
 					timeObj = this.computedTime(currentTime);
 					this.$refs.cur.innerText = `${timeObj.minute}:${timeObj.second}`;
	 				this.draw(range.value / range.max * 100);
	 				if (range.value === range.max) {
	 					clearInterval(this.audioTimeId)
	 				}
 				},200)	 			
 			}else{
 				this.playstatus = false;
 				audio.pause();
 				clearInterval(this.audioTimeId)
 			}
 			if(this.first && !this.$parent.sharepage){
 				Local.forceLog("templateV2","TpAudio",this.$parent.actid,this.mdata.id);
 				this.first=false;
 			}
 		},
 		computedTime(secondNum){
 			let minute = Math.floor(secondNum / 60);
 			let second = Math.floor(secondNum - minute * 60);
 			if (minute < 10) {
 				minute = '0' + minute
 			}
 			if (second < 10) {
 				second = '0' + second
 			}
 			return {minute: minute,second: second}
 		},
 		draw(n){
	      this.$refs.range.style.backgroundImage = 
	      	`-webkit-linear-gradient(left ,#a19fad 0%,#a19fad ${n}%,#302e38 ${n}%, #302e38 100%)`
	 	}
	}
}
</script>

