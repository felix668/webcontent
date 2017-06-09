<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template>
			<div id="banner">
				<div class="mask">
					<div class="avatar"></div>
					<h3>石章鱼</h3>
					<p>阅文集团白金作家,知名作家，很早便开始踏入网络文学，写文书十年，创造畅销书无数，作品火热，长盘踞在雅虎百度搜索榜前列，本本都是大热作品。</p>
				</div>
				<div class="square"></div>
			</div>
			<div id="content">
				<section class="content-head">
					<p class="title"><span class="slash">//</span> 石章鱼大神揭秘新书 <span class="slash">//</span></p>
					<div class="audio-box" @click="play">
						<a class="play" ref='playIcon'></a>
						<span class='cur' ref='cur'>00:00</span>
						<input type="range" min=0 max=100 class='range' value=0 ref='range' disabled>
						<span class='max' ref='max'>02:02</span>
						<audio src="src/media/tt.mp3" ref='audio'></audio>
					</div>
				</section>
				<div class="seg"></div>
				<section class="task1">
					<p class="title"><span class="slash">//</span> 看新书，完成任务抽好礼 <span class="slash">//</span></p>
					<p class="task">任务一：加书架并阅读至第4章可获得1次抽奖机会</p>
					<div class="book">
						<img src="src/images/book.png" @click="isHasApp">
						<h3>替天行盗</h3>
						<i></i>
						<p>首部探险题材的历史小说。英俊潇洒的牧师，智慧超群，风流不下流的青年才俊。替天行盗，劫富济贫，惩恶扬善。古墓丽影，夺宝奇兵。</p>
					</div>
					<p class="toBookShelf" @click="isHasApp">去QQ阅读看书</p>
				</section>
				<section class="task2">
					<div class="rect">
						<p class="task">任务二：首次分享活动可获1次抽奖机会</p>
						<p class="shareBtn" @click="isHasApp">去QQ阅读分享赢好礼</p>
					</div>
					<p class="detail">分享成功后点击 “返回QQ阅读” 可获得抽奖机会</p>
				</section>
				<div class="seg"></div>
				<section class="gift-box">
					<p class="head"><img src="src/images/gift.png" alt="">100%中奖 <span class="slash">//</span></p>
					<div class="gift-bg">
						<div :class="{'gift-main':true,'gift-iOS': this.plat=='ios','gift-adr': this.plat=='adr'}" ></div>
						<div class="lamp" ref="lamp"></div>
						<div class="arrow" @click="isHasApp" ref="arrow">
							<p ref="start"></p>
						</div>
					</div>
				</section>
				<section class="rule">
					<div class="writeAddress" @click="isHasApp"></div>
				</section>
				<app-load v-if="loadmask"></app-load>
				<mask-wb v-if="wb"></mask-wb>
			</div>
		</template>	
	</div>
</template>
<script type="text/javascript">
	import "../src/css/index.scss"
	import maskLoad from "../src/components/Load.vue"
	import maskOver from "../src/components/Over.vue"
	import maskWb from "./components/weibo.vue";
	import appLoad from "./components/appload.vue";
	export default {
		data:function(){
			return{
		 		loading: false,
		 		loadmask:false,
		 		plat:env.pt,
		 		wb:false,
				audioTimeId: null,
			}
		},
	 	mounted(){
 		  this.setAudioMax()
 		  forceLog(param("act_f"),"SZYinitPage")
	 	},
	 	methods:{
	 		isHasApp(e){
	 			if(env.vw=="wb"){
	 				this.wb=true;
	 				return;
	 			}
	 			//走判断流程
	 			var self=this;
				S.open(function(installStat,plat){
					if(installStat == -2){//浏览器						
						N.openPage(pageurl("act170509/index.html?act_f=170509"));			
						self.showmask();
					}else if(installStat){//已安装			
						N.openPage(pageurl("act170509/index.html?act_f=170509"));	
					}else{			
						self.showmask();
					}
				})					
 			},
 			showmask(){
	 			var self=this;
				 setTimeout(function(){
					self.loadmask=true;
				},2000);
	 		},
	 		setAudioMax(){
	 			let audio = this.$refs.audio
	 			let range = this.$refs.range
	 			
	 			audio.onloadedmetadata = _=>{
	 				let duration = audio.duration
	 				let obj = this.computedTime(duration)
	 				range.max = parseInt(duration)
	 				this.$refs.max.innerText = `${obj.minute}:${obj.second}`
	 			}
	 			audio.onended = _=>{
	 				clearInterval(this.audioTimeId)
 					this.$refs.playIcon.style.backgroundImage = "url('src/images/play.png')"
 					range.removeAttribute('style')
 					range.value = 0
 					this.$refs.cur.innerText = `00:00`
	 			}
	 		},
	 		play(){
	 			let range = this.$refs.range
	 			let audio = this.$refs.audio
	 			let val = range.value
	 			let currentTime = 0
	 			let timeObj = null
	 			forceLog(param("act_f"),"SZYaudioClick")
	 			if (audio.paused) {
	 				audio.play()
	 				this.$refs.playIcon.style.backgroundImage = "url('src/images/pause.png')"

	 				this.audioTimeId = setInterval(_=>{
	 					currentTime = Math.floor(this.$refs.audio.currentTime)
	 					range.value = currentTime
	 					timeObj = this.computedTime(currentTime)
	 					this.$refs.cur.innerText = `${timeObj.minute}:${timeObj.second}`
		 				this.draw(range.value / range.max * 100)
		 				if (range.value === range.max) {
		 					clearInterval(this.audioTimeId)
		 				}
	 				},200)
		 			
	 			}else{
	 				this.$refs.playIcon.style.backgroundImage = "url('src/images/play.png')"
	 				audio.pause()
	 				clearInterval(this.audioTimeId)
	 			}
	 		},
	 		computedTime(secondNum){
	 			let minute = Math.floor(secondNum / 60)
	 			let second = Math.floor(secondNum - minute * 60)
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
	 	}, 	
	 	components:{
	 		maskLoad,
	 		appLoad,
	 		maskWb
	 	}

	}
	window.initSNS = function(){
		var text = env.pt == "ios" ? "50W阅券上架大礼等你瓜分" : "50W书券上架大礼等你瓜分";
		var shareobj={
			cover :front()+ "act170509/src/images/cover.png",
			url : window.location.href,
			title: "看石章鱼新书，100%赢好礼",
			desc: text
		};
		S.share(shareobj);
	}
</script>	
<style>
	
</style>
