<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<app-load v-if="loadmask"></app-load>
			<mask-wb v-if="wb"></mask-wb>
			<section id="banner">
				<div class="info">
					<img class="avatar" :src="avatar ? avatar : 'src/images/defaultface.png'"></img>
					<p class="integral">我的积分：<span class="integral-num">{{score}}</span>
					</p>
					<p class="integral-tip">QQ阅读送你200积分</p>
				</div>
				<div class="item">
					<img src="src/images/chest.png" class="chest" @click="isHasApp">
					<img src="src/images/rank.png" class="rank" @click="isHasApp"> 
				</div>
			</section>
			<section id="main">
				<div class="swiper-container">
					<div class="swiper-wrapper" >
						<div class="swiper-slide dfw"></div>
						<div class="swiper-slide dsjl"></div>
						<div class="swiper-slide dmyz"></div>
						<div class="swiper-slide yhby"></div>
						<div class="swiper-slide dfwplus"></div>
						<div class="swiper-slide ryzd"></div>
					</div>
				</div>
				<div class="line"></div>
			</section>
			<section id="content">
				<div class="list">
					<div class="list-top">
					</div>
					<div class="list-content" >
						<div class="aa" v-if="Array.isArray(items[activeIndex])" >
							<div class="cell" v-for="item in items[activeIndex]" :style="{backgroundImage: `url(${item.url})`}" >
								<span class="arrow"></span>
								<div class="content-title" v-html="item.title"></div>
							</div>
						</div>
						
						<div class="await" v-else>
							<p class="date">{{items[activeIndex]}}</p>
							敬请期待~
						</div>
					</div>
				</div>
				<div class="other">
					<a class="find" @click="isHasApp">发现好书 &gt;</a>
				</div>
				<p class="active-title">{{titles[activeIndex].date}} <span class="name">{{titles[activeIndex].name}}</span> 赚积分</p>
			</section>
		</template>	
	</div>
</template>

<script>

	import "../src/css/index.scss"
	import maskLoad from "../src/components/Load.vue"
	import maskWb from "./components/weibo.vue"
	import appLoad from "./components/appload.vue"
	import "swiper/dist/css/swiper.css"
	import Swiper from "swiper"
	export default {
		data:function(){
			return{
		 		loading: true,
		 		over: false,
		 		wb: false,
				loadmask: false,
				score: 0,
				avatar: '',
				activeIndex: 0,
				plat: env.pt,
				titles:[
					{
						date: '7月17日',
						name: '书虫大富翁'
					},
					{
						date: '7月24日',
						name: '大神降临'
					},
					{
						date: '7月31日',
						name: '动漫宇宙'
					},
					{
						date: '8月7日',
						name: '一呼百应'
					},
					{
						date: '8月14日',
						name: '书虫大富翁plus'
					},
					{
						date: '8月21日',
						name: '荣誉之巅'
					}
				],
				items: [
					[
						{
							url: 'src/images/shuquan.png',
							title: '<p class="rush">抢书券、积分双重好礼</p>'
						},
						{
							url: 'src/images/naozhong.png',
							title: '<p class="convertIntegral">阅读时长兑换积分</p>'
						},
						{
							url: 'src/images/share.png',
							title: '<div class="share"><p class="title">分享兑换积分<span class="num">（每日3次）</span></p><p class="desc">分享成功后点击“返回QQ阅读”获100积分</p></div>'
						}
					],
					'7月24日上线',
					'7月31日上线',
					'8月7日上线',
					'8月14日上线',
					'8月21日上线',
				]
			}
		},
		created(){
			reqa(server()+'pkg170704/shareinit?shareticket='+param('shareticket'),data=>{
				console.log(data)
				this.score = data.score
				this.avatar = data.avor
			})
		},
		mounted(){
			window.onload = _=>{
				this.loading = false
			}
			let self = this
	 		var mySwiper = new Swiper('.swiper-container',{
	 			slidesPerView: 3,
	 			centeredSlides: true,
	 			spaceBetween : -50,
	 			autoplayStopOnLast: true,
	 			onTransitionEnd(swiper){
	 				self.activeIndex = swiper.activeIndex
	 				requestAnimationFrame(_=>{
	 					let convertIntegral = document.querySelector('.convertIntegral')
	 					let rush = document.querySelector('.rush')
	 					let share = document.querySelector('.share')
	 					if (convertIntegral) {
	 						convertIntegral.onclick = self.isHasApp
	 					}
	 					if (rush) {
	 						rush.onclick = self.isHasApp
	 					}
	 					if (share) {
	 						share.onclick = self.isHasApp
	 					}
	 				})
	 			}
	 		})
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
							N.openPage(pageurl("act170705/index.html?act_f=170705"))	
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
							N.openPage(pageurl("act170705/index.html?act_f=170705"))	
						}
					}else{			
						self.showAppload()
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
			cover :front()+ "act170705/src/images/cover.jpg",
			url : window.location.href,
			title: "暑期嘉年华，陪你玩一夏",
			desc: "来QQ阅读，赚积分，开宝箱，抢大神直播嘉宾席位"
		}
		S.share(shareobj)
	}
</script>	
