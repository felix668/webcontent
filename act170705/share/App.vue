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
						<div class="cell-box" v-show="activeIndex == 0">
							<div class="cell" v-for="item in items[0]" :style="{backgroundImage: `url(${item.url})`}">
								<span class="arrow"></span>
								<div class="content-title" v-html="item.title"></div>
							</div>
						</div>
						<div class="cell-box" v-show="activeIndex == 1">
							<div class="cell" v-for="item in items[1]" :style="{backgroundImage: `url(${item.url})`}" v-show="activeIndex == 1">
								<span class="arrow"></span>
								<div class="content-title" v-html="item.title"></div>
							</div>
						</div>
						<div class="await" v-show="activeIndex == 2" >
							<p class="date">{{items[activeIndex]}}</p>
							敬请期待~
						</div>
						<div class="await" v-show="activeIndex == 3" >
							<p class="date">{{items[activeIndex]}}</p>
							敬请期待~
						</div>
						<div class="await" v-show="activeIndex == 4" >
							<p class="date">{{items[activeIndex]}}</p>
							敬请期待~
						</div>
						<div class="await" v-show="activeIndex == 5" >
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
				systemtime: 0,
				endTime: Date.parse("Thu, 23 Jul 2017 00:00:00"),
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
						date: '8月7日',
						name: '动漫宇宙'
					},
					{
						date: '8月14日',
						name: '一呼百应'
					},
					{
						date: '8月21日',
						name: '书虫大富翁plus'
					},
					{
						date: '8月28日',
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
					[
						{
							url: 'src/images/tuijianpiao.png',
							title: '<p class="month">推荐票、月票、打赏拿积分</p>'
						},
						{
							url: 'src/images/yuanchuangTSJ.png',
							title: '<p class="storeBooks-yc">囤书节原创专场 送积分</p>'
						},
						{
							url: 'src/images/chubanTSJ.png',
							title: '<p class="storeBooks-cb">囤书节出版专场 送积分</p>'
						},
						{
							url: 'src/images/naozhong.png',
							title: '<p class="convertIntegral">阅读时长兑换积分</p>'
						},
						{
							url: 'src/images/share.png',
							title: '<div class="share"><p class="title">分享兑换积分<span class="num">（每日3次）</span></p><p class="desc">分享首页成功后点击“返回QQ阅读”获100积分</p></div>'
						}
					],
					'8月7日上线',
					'8月14日上线',
					'8月21日上线',
					'8月28日上线',
				]
			}
		},
		created(){
			reqa(server()+'pkg170704/shareinit?shareticket='+param('shareticket'),data=>{
				console.log(data)
				this.systemtime = data.systemtime
				this.score = data.score
				this.avatar = data.avor
			})
		},
		watch:{
	 		systemtime(){
	 			console.log(this.systemtime)
	 			if (this.systemtime > this.endTime) {
	 				this.activeIndex = 1
	 				this.createSwiper(1)
	 				document.querySelector('.rush').className = "rush end"
	 			}else{
	 				this.createSwiper(0)
	 				document.querySelector('.rush').onclick = this.rush
	 			}
	 		}
	 	},
		mounted(){
			window.onload = _=>{
				this.loading = false
			}
			Array.prototype.forEach.call(document.querySelectorAll('.convertIntegral'),item=>{
	 			item.onclick = this.isHasApp
	 		})
	 		Array.prototype.forEach.call(document.querySelectorAll('.share'),item=>{
	 			item.onclick = this.isHasApp
	 		})
	 		document.querySelector('.month').onclick = this.isHasApp
			document.querySelector('.storeBooks-yc').onclick = this.isHasApp
			document.querySelector('.storeBooks-cb').onclick = this.isHasApp
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
 			createSwiper(initialSlide){
		 		let self = this
		 		let autoplay = null
		 		var mySwiper = new Swiper('.swiper-container',{
		 			initialSlide: initialSlide,
		 			slidesPerView: 3,
		 			centeredSlides: true,
		 			spaceBetween : -50,
		 			autoplay: autoplay,
		 			autoplayStopOnLast: true,
		 			onTransitionEnd(swiper){
		 				self.activeIndex = swiper.activeIndex
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
