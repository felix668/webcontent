<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<template v-if="!over">
			<section id="banner">
				<div class="info">
					<img class="avatar" :src="isLogin ? avatar:'src/images/defaultface.png'"></img>
					<p class="integral">我的积分：<span class="integral-num" v-if="isLogin">{{score}}</span><span class="login" @click='login' v-else>点击查看&gt;</span>
					</p>
					<p class="integral-tip">QQ阅读送你200积分</p>
				</div>
				<div class="item">
					<img src="src/images/chest.png" class="chest" @click="chest">
					<img src="src/images/rank.png" class="rank" @click="rank"> 
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
					<a class="find" @click="findBook">发现好书 &gt;</a>
					<div class="rule">
						<p class="title">- 活动规则 -</p>
						<ul>
							<li>活动时间：2017年7月17日-9月3日</li>
							<li>活动期间参与各种活动可以累积积分，积分周冠军和总冠军奖励如下：
							<br>周冠军奖励：
							<br>1) 当周积分50%额度的{{plat == 'ios' ? '阅券' : '书券'}}奖励
							<br>2) 为自己喜欢的书籍做一次专属全站推广
							<br>总冠军奖励：
							<br>1) 累计积分100%额度的{{plat == 'ios' ? '阅券' : '书券'}}奖励
     						<br>2) 与自己喜欢的大神做一次直播
     						</li>
							<li>活动所得积分将实时到账，其余积分奖励将于次日统一发放</li>
							<li>本活动最终解释权归QQ阅读所有</li>
						</ul>

					</div>
					<div class="logo"></div>
				</div>
				<p class="active-title">{{titles[activeIndex].date}} <span class="name">{{titles[activeIndex].name}}</span> 赚积分</p>
			</section>
		</template>	
		<Alert :info="this.info" ref="alert" v-if="showAlert"></Alert>
	</div>
</template>

<script>

	import "./css/index.scss"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import Alert from "./components/Alert.vue"
	import "swiper/dist/css/swiper.css"
	import Swiper from "swiper"
	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				haschance: false,
				showAlert: false,//是否显示弹窗
				avatar: 'http://q2.qlogo.cn/g?b=qq&k=7ia6tjzKUpJJiaVMTUzMiaVxw&s=100&t=1483369677',
				score: 200,
				weekexchangedscores: 0,
				exchangefinished: false,
				readtime: 300,
				activeIndex: 0,
				systemtime: 0,
				endTime: Date.parse("Thu, 23 Jul 2017 00:00:00"),
				shareObj:{
					url : common.sharefront() + "act170705/share.html?act_f=170705",
					cover:  common.sharefront() + "act170705/src/images/cover.jpg",
					title: "暑期嘉年华，陪你玩一夏",
					desc: "来QQ阅读，赚积分，开宝箱，抢大神直播嘉宾席位"
				},
				info:{},
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
							title: `<p class="rush">抢${window.pt=='ios'?'阅':'书'}券、积分双重好礼</p>`,
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
		computed:{
		},
		created(){ 
			Local.forceLog(common.param("act_f"),"MainInitPage")
			this.initPage()
			let self = this
			window.afterShare = function(){
		      	Local.reqaObj(common.server() + "pkg170702/afterShare", data=>{
		      		console.log(data)
		      		if (self.plat == 'ios') {
	      				Local.showToast('分享成功')
	      			}
		      		if (data.code == 1) {
		      			self.score = data.curScores
		      		}
				}, [], function() {
						Local.showToast("网络异常，请稍候重试")
				}, 1)
		    }
	 	},
	 	watch:{
	 		systemtime(){
	 			console.log(this.systemtime)
	 			if (this.systemtime > this.endTime) {
	 				this.createSwiper(1)
	 				document.querySelector('.rush').className = "rush end"
	 			}else{
	 				this.createSwiper(0)
	 				document.querySelector('.rush').onclick = this.rush
	 			}
	 		}
	 	},
	 	mounted(){
	 		Array.prototype.forEach.call(document.querySelectorAll('.convertIntegral'),item=>{
	 			item.onclick = this.convertIntegral
	 		})
	 		Array.prototype.forEach.call(document.querySelectorAll('.share'),item=>{
	 			item.onclick = this.share
	 		})
	 		document.querySelector('.month').onclick = this.month
			document.querySelector('.storeBooks-yc').onclick = this.storeBooksYC
			document.querySelector('.storeBooks-cb').onclick = this.storeBooksCB
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj(common.server() + "pkg170704/maininit", data=>{
					console.log(data)
					if(data.code == -4){
						this.over = true
						return
					}
					this.loading = false
					this.exchangefinished = data.exchangefinished
					this.isLogin = data.isLogin
					this.score = data.score
					this.readtime = data.readtime
					this.avatar = data.avor
					this.weekexchangedscores = data.weekexchangedscores
					this.systemtime = data.systemtime
				
					this.shareObj.url = common.sharefront() + "act170705/share.html?act_f=170705&shareticket="+encodeURIComponent(data.shareticket)
				})
	 		},
	 		createSwiper(initialSlide){
		 		let self = this
		 		let autoplay = null
		 		//!localStorage.getItem('isFirst')
		 		if (true) {
		 			autoplay = 100
		 			localStorage.setItem('isFirst',true)
		 			setTimeout(_=>{
			 			mySwiper.slideTo(initialSlide, 0, true)//设置为false时不会触发onSlideChange回调函数
			 			this.activeIndex = initialSlide
			 			console.log(this.activeIndex)
			 		},2100)
		 		}else{
		 			this.activeIndex = initialSlide
		 			autoplay = null
		 		}
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
	 		login(){
	 			Local.login()
	 		},
	 		chest(){
	 			Local.forceLog(common.param("act_f"),"MainClickChest")
	 			Local.openInside(common.front()+'act170704/index.html')
	 		},
	 		rank(){
	 			Local.forceLog(common.param("act_f"),"MainClickRank")
	 			Local.openInside(common.front()+'act170702/index.html')
	 		},
	 		rush(){
	 			console.log(1)
	 			Local.forceLog(common.param("act_f"),"MainClickRush")
	 			Local.openInside(common.front()+'act170703/index.html')
	 		},
	 		month(){
	 			console.log(11)
	 			Local.openInside(common.front()+'act170707/index.html')
	 		},
	 		storeBooksYC(){
	 			console.log(22)
	 			Local.openInside(common.front()+'act170706/index.html')
	 		},
	 		storeBooksCB(){
	 			console.log(33)
	 			Local.openInside(common.front()+'act170706/index.html?pub=1')
	 		},
	 		share(){
	 			console.log(3)
	 			Local.forceLog(common.param("act_f"),"MainClickShare")
	 			if(this.isLogin){
	 				console.log(this.shareObj.url)
					Local.shareTopic(this.shareObj.url, this.shareObj.cover, this.shareObj.title, this.shareObj.desc, 1)
				}else{
					Local.login()
				}
	 		},
	 		findBook(){
	 			Local.forceLog(common.param("act_f"),"MainFindBook")
	 			Local.openInside(common.front()+'act170705/findBook.html');
	 		},
	 		convertIntegral(){
	 			if (this.exchangefinished) {
	 				Local.showToast('本周兑换已达上限')
	 				return
	 			}
	 			console.log(2)
	 			Local.forceLog(common.param("act_f"),"MainConvertIntegral")
	 			let canExTime = this.readtime - (this.weekexchangedscores/50)*60
	 			let canExInter = parseInt(canExTime/60)*50
	 			console.log(this.readtime)
	 			console.log(canExInter)
	 			if (!this.isLogin) {
	 				this.info = {
	 					time: 0,
	 					convert: '未登录',
	 					btn: '登录查看可兑换的积分'
	 				}
	 				this.showAlert = true
	 			}else{
	 				if (canExTime < 60) {
	 					this.info = {
	 						time: this.readtime,
	 						convert: this.weekexchangedscores,
	 						btn: `还需要阅读${60-canExTime}分钟可兑换积分`,
	 					}
	 					this.showAlert = true
	 				}else{
	 					this.info = {
	 						time: this.readtime,
	 						convert: this.weekexchangedscores,
	 						btn: `兑换${canExInter}积分`,
	 					}
	 					this.showAlert = true
	 				}
	 			}
	 		},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 			this.showAlert = false
	 		},
	 		
	 	}, 	
	 	components:{
	 		maskLoad,
	 		maskOver,
	 		Alert
	 	}
	}
</script>	
