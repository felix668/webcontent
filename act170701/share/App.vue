<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<app-load v-if="loadmask"></app-load>
			<mask-wb v-if="wb"></mask-wb>
			<div id="banner"></div>
			<div id="content">
				<section class="content-video">
					<p class="title"></p>
					<div class="video-box" @click="play">
						<div class="poster center" ref="poster"></div>
						<video src="./src/media/t.mp4" class="video center" ref="video" preload="auto"></video>
						<span class="play-btn" ref="play"></span>
					</div>
				</section>
				
				<section class="content-task">
					<p class="title"></p>
					<p class="task1">任务一：加书架并阅读至第5章可获得1次抽奖机会</p>
					<div class="book">
						<img src="src/images/book.png" @click="isHasApp">
						<div class="book-detail">
							<h3>大神引入怀：101个深吻</h3>
							<p class="book-name">叶非夜</p>
							<p class="book-desc">一年后，我们离婚，互不干扰。”<br>	季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她</p>
						</div>
						
					</div>
					<div class="toBookShelf" @click="isHasApp">
						<p>加书架并阅读到第5章</p>
					</div>
					<div class="rect">
						<p class="task2">任务二：首次分享活动可获1次抽奖机会</p>
						<div class="share" @click="isHasApp">
							<p :style="shareStyle">去QQ阅读获分享机会</p>
						</div>
					</div>
				</section>

				<section class="content-lottery">
					<p class="title"></p>
					<div class="lottery-bg">
					
						<div class="arrow" @click="isHasApp" ref="arrow"></div>
						<div class="start"></div>
					</div>
					<div class="laud">
						<p class="laud-title">活动期间，按打赏总榜名次在上架当日爆更!</p>
						<div class="blue-btn" @click="isHasApp">点击助力爆更</div>
						<p class="red-desc">打赏总榜前15名，爆更10章；前8名，爆更20章；前3名，爆更30章</p>
					</div>
				</section>
				<section class="content-offline">
					<p class="title"></p>
					<p class="head"></p>
					<ul class="address">
						<li>2017年7月18日12:30-14:30</li>
						<li>地点：雕刻时光咖啡店（大学路店），杨浦区大学</li>
						<li>路105-107号(近锦嘉路)</li>
					</ul>
					<div class="signup">
						<div class="blue-btn" @click="isHasApp">点击报名</div>
						<p class="red-desc">幸运用户将获得线下活动门票一张，由线下活动主办方电话通知！</p>
					</div>
				</section>
			</div>
		</template>	
	</div>
</template>

<script>

	import "../src/css/index.scss"
	import maskLoad from "../src/components/Load.vue"
	import maskWb from "./components/weibo.vue"
	import appLoad from "./components/appload.vue"
	export default {
		data:function(){
			return{
		 		loading: true,
		 		over: false,
		 		wb: false,
				loadmask: false,
				shareStyle: {
					backgroundColor: '#4a5193',
					borderRadius: '0.08rem'
				}
			}
		},
		mounted(){
			let video = this.$refs.video
			window.onload = _=>{
				this.loading = false
			}
		},
	 	methods:{
	 		isHasApp(url){
	 			if(env.vw=="wb"){
	 				this.wb=true
	 				return
	 			}
	 			//走判断流程
	 			var self=this
				S.open(function(installStat,plat){
					if(installStat == -2){//浏览器
						if (typeof url == 'string') {
							N.openNativePage(url)
						}else{
							N.openPage(pageurl("act170701/index.html?act_f=170701"))	
						}					
						self.showAppload()
					}else if(installStat){//已安装	
						if (env.pt == 'ios' && env.vw=='wx') {
							setTimeout(_=>{
								self.showAppload()
							},2000)
							setTimeout(function () {
								self.loadmask = false
							}, 5000)
						}
						if (typeof url == 'string') {
							N.openNativePage(url)
						}else{
							N.openPage(pageurl("act170701/index.html?act_f=170701"))	
						}
					}else{			
						self.showAppload()
					}
				})					
 			},
	 		play(){
	 			forceLog(param("act_f"),"YFYclickVideo")
	 			let play = this.$refs.play
 				let video = this.$refs.video
 				let poster = this.$refs.poster

 				if (video.paused) {
	 				video.play()
 				}else{
 					requestAnimationFrame(_=>{
 						video.pause()
 					})
 					play.style.visibility = "visible"
 				}
 				video.addEventListener('timeupdate',function (){
 				    if (this.currentTime > 0.01 ){
 				       	poster.style.visibility = "hidden"
 				       	requestAnimationFrame(_=>{
	 						if (!video.paused) {
 								play.style.visibility = "hidden"
 				       		}
	 					})
 				    }
 				})
	 		},
	 		showAppload(){
				this.loadmask = true	
			},
	 	}, 	
	 	components:{
	 		maskLoad,
	 		maskWb,
	 		appLoad
	 	}
	}
	window.initSNS = function(){
		let shareobj={
			cover :front()+ "act170701/src/images/cover.jpg",
			url : window.location.href,
			title: '"忆"万星"晨"不及你',
			desc: '叶非夜送你最甜的"忆晨"时光!'
		}
		S.share(shareobj)
	}
</script>	
