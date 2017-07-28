<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<template v-if="!over">
			<div id="banner"></div>
			<div id="content">
				<section class="content-video">
					<p class="title"></p>
					<div class="video-box" @click="play">
						<div class="poster center" ref="poster"></div>
						<video src="./src/media/t.mp4" class="video center" ref="video"></video>
						<span class="play-btn" ref="play"></span>
					</div>
				</section>

				<section class="content-task">
					<p class="title"></p>
					<p class="task1">任务一：加书架并阅读至第5章可获得1次抽奖机会</p>
					<div class="book">
						<img src="src/images/book.png" @click="toBookDetail">
						<div class="book-detail">
							<h3>大神引入怀：101个深吻</h3>
							<p class="book-name">叶非夜</p>
							<p class="book-desc">一年后，我们离婚，互不干扰。”<br>	季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她</p>
						</div>
						
					</div>
					<div class="toBookShelf" @click="toBookShelf">
						<p>{{this.inBookShelf ? '已在书架，去阅读' : '加书架并阅读到第5章'}}</p>
					</div>
					<div class="rect">
						<p class="task2">任务二：首次分享活动可获1次抽奖机会</p>
						<div class="share" @click="toShare">
							<p>分享</p>
						</div>
						<p class="weibo" v-if="plat == 'ios'">当前版本暂不支持分享至新浪微博</p>
					</div>
				</section>

				<section class="content-lottery">
					<p class="title"></p>
					<p class="lottery-num">抽奖次数：
						<template v-if="this.isLogin">
							<span class="num">{{chance}}</span>次
						</template>
						<template v-else>
							<span class="loginLook" @click="loginLook">登录查看 &gt;</span>
						</template>
					</p>
					<div class="refresh-box" @click="refresh">
						<p v-if="this.isLogin" class="refresh">刷新抽奖次数</p>
					</div>
					
					<div class="lottery-bg">
						<div class="arrow" @click="startLottery" ref="arrow"></div>
						<div class="start"></div>
					</div>
					<div class="laud">
						<p class="laud-title">活动期间，按打赏总榜名次在上架当日爆更!</p>
						<div class="blue-btn" @click="laud">点击助力爆更</div>
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
						<div class="blue-btn" @click="signup">点击报名</div>
						<p class="red-desc">幸运用户将获得线下活动门票一张，由线下活动主办方电话通知！</p>
					</div>
				</section>
				<section class="content-rule">
					<p class="title">－活动规则－</p>
					<ul>
						<li>活动时间：2017年7月13日-7月16日</li>
						<li>将《大神引入怀：101个深吻》加入书架、阅读至第5章，可获得一次抽奖机会； </li>
						<li>活动期间，分享活动页面，可再获得一次抽奖机会；用户可多次分享，但仅限首次分享成功账户获得一次抽奖机会；</li>
						<li>一个用户最多获得2次抽奖机会，同设备、账号计为同一用户</li>
						<li>请从QQ阅读客户端内发起分享获得抽奖机会，其他平台二次分享暂不能获得抽奖机会；</li>
						<li>获得实物奖励将在30个工作日内寄出，请认真<br><span class="writeAddress" @click="writeAddress">填写地址</span></li>
					</ul>
				</section>
			</div>
			<div class="logo"></div>
		</template>	
		
		<Alert :info="this.info" ref="alert" v-if="this.showAlert"></Alert>
	</div>
</template>

<script>

	import "./css/index.scss"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import Alert from "./components/Alert.vue"
	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
		 		bookId: "16204776",
		 		cid: '',
				isLogin: false,
		 		chance: 0,//可用抽奖次数
		 		inBookShelf: false,//是否已加入书架
				qimeiHasPick: false,//设备是否做过加书架读第四章的活动
				isGuest: false,//是否是ios游客
				shareObj:{
					url : common.sharefront() + "act170701/share.html?act_f=170701",
					cover:  common.sharefront() + "act170701/src/images/cover.jpg",
					title: "四月的芒果,五月的草莓,六月的西瓜",
					desc: "七月的《大神引入怀》甜过以上所有!"
				},
				audioTimeId: null,
				showAlert: false,//是否显示弹窗
				info:{
					noGift: false,
					isGuest: true,
				},
				canLottery: true
			}
		},
		created(){ 
			Local.forceLog(common.param("act_f"),"YFYinitPage")
			
			this.initPage()
			let self = this
			window.afterShare = function(){
		      	Local.reqaObj(common.server() + "pkg170701/addByShare", data=>{
		      		console.log(data)
		      		if (data.code == 1) {
		      			Local.forceLog(common.param("act_f"),"YFYshareSucc")
		      			self.chance++
		      		}
				}, [], function() {
						Local.showToast("网络异常，请稍候重试")
				}, 1)
		    }
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj(common.server() + "pkg170701/init", data=>{
					console.log(data)
					this.loading = false
					if(data.code == -4){
						this.over = true
					}
					this.chance = data.chance
					this.isLogin = data.isLogin
					this.inBookShelf = data.inBookShelf
					this.qimeiHasPick = data.qimeiHasPick
					this.isGuest = data.isGuest
					this.cid = data.cid
				})
	 		},
	 		play(){
	 			Local.forceLog(common.param("act_f"),"YFYclickVideo")
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
	 		loginLook(){
	 			Local.login()
	 		},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 			this.showAlert = false
	 		},
	 		toBookDetail(){
	 			Local.forceLog(common.param("act_f"),"YFYtoBookDetail")
	 			Local.goBookDetail(this.bookId)
	 		},
	 		toBookShelf(){
	 			Local.forceLog(common.param("act_f"),"YFYtoBookShelf")
	 			if (this.isGuest) {//游客
	 				this.info = {
	 					noGift: true,
	 					isGuest: true,
	 				}
	 				this.showAlert = true
	 			}else{
	 				if (this.isLogin) {
	 					if (this.inBookShelf) {//已在书架
	 						Local.goRead(this.bookId,this.cid)
	 						setTimeout(_=>{
								Local.reqaObj(common.server() + "pkg170701/addByRead", data=>{
									console.log(data)
									this.initPage()
								})
							},3000)
	 					}else{
	 						if (this.qimeiHasPick) {
	 							Local.showToast('同一设备已做过任务哦')
	 							Local.reqaObj(common.server() + "pkg170701/addShelf", data=>{
	 								console.log(data)
	 								if (data.code == 1) {
	 									Local.addToShelf({"bid":this.bookId,"title":"大神引入怀：101个深吻","intro":"大神引入怀：101个深吻","author":"叶非夜"},1)
	 									Local.goRead(this.bookId,this.cid)
	 								}
	 							})
	 						}else{
	 							Local.reqaObj(common.server() + "pkg170701/addShelf", data=>{
	 								console.log(data)
	 								if (data.code == 1) {
	 									Local.addToShelf({"bid":this.bookId,"title":"大神引入怀：101个深吻","intro":"大神引入怀：101个深吻","author":"叶非夜"},1)
	 									
	 									Local.goRead(this.bookId,this.cid)
	 									setTimeout(_=>{
	 										Local.reqaObj(common.server() + "pkg170701/addByRead", data=>{
	 											console.log(data)
	 											this.initPage()
	 										})
	 									},3000)
	 								}
	 							})
	 						}
	 					}
	 				}else{
	 					Local.login()
	 				}
	 			}
	 		},
	 		toShare(e){
				if(this.isLogin){
					if (this.isGuest) {
						this.info = {
							noGift: true,
							isGuest: true,
						}
						this.showAlert = true
					}else{
						Local.shareTopic(this.shareObj.url, this.shareObj.cover, this.shareObj.title, this.shareObj.desc, 1)
					}
				}else{
					Local.login()
				}
			},
			refresh(){
				Local.reqaObj(common.server() + "pkg170701/addByRead", data=>{
					Local.reqaObj(common.server() + "pkg170701/init", data=>{
						console.log(data)
						this.loading = false
						if(data.code == -4){
							this.over = true
						}
						this.chance = data.chance
						this.isLogin = data.isLogin
						this.inBookShelf = data.inBookShelf
						this.qimeiHasPick = data.qimeiHasPick
						this.isGuest = data.isGuest
						this.cid = data.cid
						if (data.chance == 0) {
						this.info = {
	 						noGift: true,
	 						isGuest: false,
	 					}
	 					this.showAlert = true
					}
					})
				})
			},
	 		startLottery(e){
	 			if (this.isLogin) {
	 				if (this.isGuest) {
						this.info = {
							noGift: true,
							isGuest: true,
						}
						this.showAlert = true
						return;
					}
					if (!this.canLottery) {
 						return
 					}
	 				if (this.chance > 0) {
	 					this.canLottery = false
	 					
	 					Local.reqaObj(common.server() + "pkg170701/pick", data=>{
	 						console.log(data)
	 						if(data.code<0){
								Local.showToast(data.msg)
							}else{
	 							this.chance--
								this.lotteryResult(data.prizeId)
							}
	 					},[], _=>{
							Local.showToast("网络异常，请稍候重试")
						}, 1)
	 				}else{
	 					this.info = {
	 						noGift: true,
	 						isGuest: false,
	 					}
	 					this.showAlert = true
	 				}
	 			}else{
					Local.login()
				}
	 		},
	 		lotteryResult(prizeId){
	 			let arrow = this.$refs.arrow
	 			let start = this.$refs.start
	 			let endAngle = 0
	 			let startAngle = 0

	 			if (prizeId == 3) {
	 				endAngle = 1380
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'qb',
						content: '获得5QB，请认真填写QQ号，以便客服联系到您。'
					}
				}else if(prizeId == 1){
					endAngle = 1080
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'wzry',
						content: '获得和叶非夜一起玩王者荣耀的机会，请认真填写联系方式，以便客服联系到您。'
					}
				}else if(prizeId == 5){
					endAngle = 1260
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'dn',
						content: '获得MacBook Air，请认真填写联系方式，以便客服联系到您。'
					}
				}else if(prizeId == 4){
					endAngle = 1130
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'sj',
						content: '获得iPhone7，请认真填写联系方式，以便客服联系到您。'
					}
				}else if(prizeId == 0){
					endAngle = 1190
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'czz',
						content: '获得20成长值，可以去我的等级查看'
					}
				}else if(prizeId == 2){
					endAngle = 1320
	 				this.info = {
						noGift: false,
						isGuest: false,
						gift: 'zb',
						content: '获得随机周边一份，请认真填写联系方式，以便客服联系到您。'
					}
				}
				
				let startTimer = setInterval(_=>{
					startAngle += 10
					if (startAngle == endAngle) {
						clearInterval(startTimer)
						endAngle = 0
						setTimeout(_=>{
							this.showAlert = true
							this.canLottery = true
						},1000)
					}
					arrow.style.webkitTransform = `rotate(${startAngle}deg)`
				},16.7)
	 		},
	 		laud(){
	 			Local.forceLog(common.param("act_f"),"YFYclickLaud")
	 			if (this.plat == 'adr') {
					location.href = "uniteqqreader://nativepage/client/reward?bid=16204776&cid=1&icon=https%3a%2f%2fimg1.write.qq.com%2fupload%2fportrait%2f2017-06-27%2f59526ce14c5c6.jpeg"
 				} else {
					Local.goBookDetail(this.bookId)
				}
	 		},
	 		signup(){
	 			Local.forceLog(common.param("act_f"),"YFYclickSignup")
	 			if (this.isLogin) {
	 				if (this.plat == 'adr') {
						Local.openInside('http://iyuedu.qq.com/event/act161002/adr/contact.html?act_f=170701')
	 				} else {
						Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html?act_f=170701')
					}
	 			}else{
	 				Local.login()
	 			}
	 		},
	 		writeAddress(){
	 			if (this.isLogin) {
	 				if (this.plat == 'adr') {
						Local.openInside('http://iyuedu.qq.com/event/act161002/adr/contact.html')
	 				} else {
						Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html')
					}
	 			}else{
	 				Local.login()
	 			}
	 		}
	 	}, 	
	 	components:{
	 		maskLoad,
	 		maskOver,
	 		Alert
	 	}
	}
</script>	
