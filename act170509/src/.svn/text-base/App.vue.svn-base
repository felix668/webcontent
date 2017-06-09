<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<div id="banner">
				<div class="mask">
					<div class="avatar"></div>
					<h3>石章鱼</h3>
					<p>阅文集团白金作家，知名作家，很早便开始踏入网络文学，写文书十年，创造畅销书无数，作品火热，长盘踞在雅虎百度搜索榜前列，本本都是大热作品。</p>
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
						<img src="src/images/book.png" @click="toBookDetail">
						<h3>替天行盗</h3>
						<i></i>
						<p>首部探险题材的历史小说。英俊潇洒的牧师，智慧超群，风流不下流的青年才俊。替天行盗，劫富济贫，惩恶扬善。古墓丽影，夺宝奇兵。</p>
					</div>
					<p class="toBookShelf" @click="toBookShelf">{{this.inBookShelf ? '已在书架，去阅读' : '加书架并阅读到第4章'}}</p>
				</section>
				<section class="task2">
					<div class="rect">
						<p class="task">任务二：首次分享活动可获1次抽奖机会</p>
						<p class="shareBtn" @click="toShare">分享</p>
					</div>
					<p class="detail">分享成功后点击 “返回QQ阅读” 可获得抽奖机会</p>
				</section>
				<div class="seg"></div>
				<section class="gift-box">
					<p class="head"><img src="src/images/gift.png" alt="">100%中奖 <span class="slash">//</span></p>
					<p class="gift-num">抽奖次数：
						<template v-if="this.isLogin">
							<span class="num">{{chance}}</span>次
						</template>
						<template v-else>
							<span class="loginLook" @click="loginLook">登录查看 &gt;</span>
						</template>
					</p>
					<div class="gift-bg">
						<div :class="{'gift-main':true,'gift-iOS': this.plat=='ios','gift-adr': this.plat=='adr'}" ></div>
						<div class="lamp" ref="lamp"></div>
						<div class="arrow" @click="startLottery" ref="arrow">
							<p ref="start"></p>
						</div>
					</div>
				</section>
				<section class="rule">
					<div class="writeAddress" @click="writeAddress"></div>
				</section>
			</div>
		</template>	
		<mask-over v-if="over"></mask-over>
		<Alert :info="this.info" ref="alert" v-if="this.showAlert"></Alert>
	</div>
</template>

<script type="text/javascript">

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
		 		bookbId: "14650252",
				isLogin: false,
		 		
		 		chance: 0,//可用抽奖次数
		 		inBookShelf: false,//是否已加入书架
				qimeiHasPick: false,//设备是否做过加书架读第四章的活动
				isGuest: true,//是否是ios游客
				shared: false,
				shareObj:{
					url : common.sharefront() + "act170509/share.html?act_f=170509",
					cover:  common.sharefront() + "act170509/src/images/cover.png",
					title: "看石章鱼新书，100%赢好礼",
				},
				audioTimeId: null,

				showAlert:false,//是否显示弹窗
				info:{
					noGift: false,
					isGuest: true,
					isBig: true,
					gift: 'shuquan',
					content: '',
				}
			}
		},
		created(){ 
			this.initPage()
			let self = this
			window.afterShare = function(){
		      	Local.reqaObj(common.server() + "pkg170509/addByShare", data=>{
		      		console.log("addByShare"+data)
		      		if (data.code == 1) {
		      			Local.forceLog(common.param("act_f"),"SZYgetGiftNum")
		      			Local.showToast('分享成功,去抽奖吧')
		      			self.shared = true
		      			self.chance++
		      		}
				}, [], function() {
						Local.showToast("网络异常，请稍候重试")
				}, 1)
				Local.forceLog(common.param("act_f"),"SZYafterShare")
		    }
	 	},
	 	mounted(){
 		  if (!this.over) {
 		  	this.setAudioMax()
 		  }
	 	},
	 	methods:{
	 		initPage(){
	 			let self = this
				Local.reqaObj(common.server() + "pkg170509/init", data=>{
					self.loading = false
					if(data.code == -4){
						self.over = true
					}
					self.chance = data.chance
					self.isLogin = data.isLogin
					self.inBookShelf = data.inBookShelf
					self.qimeiHasPick = data.qimeiHasPick
					self.isGuest = data.isGuest
				})
				Local.forceLog(common.param("act_f"),"SZYinitPage");
	 		},
	 		loginLook(){
	 			Local.login()
	 		},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 			this.showAlert = false
	 		},
	 		toBookDetail(){
	 			Local.forceLog(common.param("act_f"),"SZYtoBookDetail")
	 			Local.goBookDetail(this.bookbId)
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
	 			Local.forceLog(common.param("act_f"),"SZYaudioClick");
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
	 		},
	 		toBookShelf(){
	 			Local.forceLog(common.param("act_f"),"SZYtoBookShelf")
	 			let self = this
	 			if (this.isGuest) {//游客
	 				this.info = {
	 					noGift: true,
	 					isGuest: true,
	 					isBig: false,
	 					gift: '',
	 					content: null
	 				}
	 				this.showAlert = true
	 			}else{
	 				if (this.isLogin) {
	 					if (this.inBookShelf) {//已在书架
							setTimeout(_=>{
								Local.reqaObj(common.server() + "pkg170509/addByRead", data=>{
									console.log('addByRead' + data)
									self.initPage()
								})
							},2000)
	 						Local.goRead(self.bookbId)
	 					}else{
	 						if (this.qimeiHasPick) {
	 							Local.showToast('同一设备已做过任务哦')
	 							Local.reqaObj(common.server() + "pkg170509/addShelf", data=>{
	 								if (data.code == 1) {
	 									Local.addToShelf({"bid":self.bookbId,"title":"替天行盗","intro":"替天行盗","author":"石章鱼"})
	 									Local.goRead(self.bookbId)
	 								}
	 							})
	 						}else{
	 							Local.reqaObj(common.server() + "pkg170509/addShelf", data=>{
	 								if (data.code == 1) {
	 									Local.addToShelf({"bid":self.bookbId,"title":"替天行盗","intro":"替天行盗","author":"石章鱼"})
	 									setTimeout(_=>{
	 										Local.reqaObj(common.server() + "pkg170509/addByRead", data=>{
	 											console.log('addByRead' + data)
	 											Local.forceLog(common.param("act_f"),"SZYgetGiftNum")
	 											self.initPage()
	 										})
	 									},2000)
	 									Local.goRead(self.bookbId)
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
							isBig: false,
							gift: '',
							content: null
						}
						this.showAlert = true
					}else{
						let adr = "50W书券上架大礼等你瓜分"
						let ios = "50W阅券上架大礼等你瓜分"
						if (this.plat == 'ios') {
							Local.shareTopic(this.shareObj.url, this.shareObj.cover, this.shareObj.title,ios, 1)
						}else{
							Local.shareTopic(this.shareObj.url, this.shareObj.cover, this.shareObj.title,adr, 1)
						}
						
					}
				}else{
					Local.login()
				}
			},
	 		startLottery(e){
	 			Local.forceLog(common.param("act_f"),"SZYstartLottery")
	 			if (this.isLogin) {
	 				if (this.isGuest) {
						this.info = {
							noGift: true,
							isGuest: true,
							isBig: false,
							gift: '',
							content: null
						}
						this.showAlert = true
						return;
					}
	 				if (this.chance > 0) {
	 					Local.reqaObj(common.server() + "pkg170509/pick", data=>{
	 						if(data.code<0){
								Local.showToast(data.msg);
							}else{
	 							this.chance--
	 							let prizeId = data.prizeId
								this.lotteryResult(prizeId)
							}
	 					},[], _=>{
									Local.showToast("网络异常，请稍候重试");
						}, 1)
						
	 				}else{
	 					this.info = {
	 						noGift: true,
	 						isGuest: false,
	 						isBig: false,
	 						gift: '',
	 						content: null
	 					}
	 					this.showAlert = true
	 				}
	 			}else{
					Local.login()
				}
	 		},
	 		lotteryResult(prizeId){
	 			let lamp = this.$refs.lamp
	 			let arrow = this.$refs.arrow
	 			let start = this.$refs.start
	 			let endAngle = 0
	 			let lampAngle = 0
	 			let startAngle = 0

	 			if (prizeId == 0) {
	 				endAngle = 1380
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: true,
						gift: 'sg',
						content: '获得出版书<span style="color: #c05b51">《三宫》</span>,请认真填写联系方式,以便客服联系到您'
					}
				}else if(prizeId == 1){
					endAngle = 1080
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: true,
						gift: 'sg',
						content: '获得出版书<span style="color: #c05b51">《三宫2》</span>,请认真填写联系方式,以便客服联系到您'
					}
				}else if(prizeId == 2){
					endAngle = 1260
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: true,
						gift: 'yt',
						content: '获得<span style="color: #c05b51">《医统江山》</span>限时免费读福利,限免两天,书已自动加入书架'
					}
				}else if(prizeId == 3){
					endAngle = 1130
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: true,
						gift: 'sq',
						content: '获得<span style="color: #c05b51">50书券</span>,有效期<span style="color: #dd9806">15天</span>,可以去我的账户查看'
					}
				}else if(prizeId == 4){
					endAngle = 1190
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: false,
						gift: 'ccz',
						content: '获得<span style="color: #c05b51">20成长值</span>,可以去我的等级查看'
					}
				}else if(prizeId == 5){
					endAngle = 1320
	 				this.info = {
						noGift: false,
						isGuest: false,
						isBig: false,
						gift: 'ccz',
						content: '获得<span style="color: #c05b51">50成长值</span>,可以去我的等级查看'
					}
				}

 				let lampTimer = setInterval(_=>{
 					if (endAngle) {
 						lampAngle += 30
						lamp.style.transform = `rotate(${lampAngle}deg)`
 					}else{//如果已抽完,停
 						clearInterval(lampTimer)
 					}
				},1000)
				
				let startTimer = setInterval(_=>{
					startAngle += 10
					if (startAngle == endAngle) {
						clearInterval(startTimer)
						endAngle = 0
						setTimeout(_=>{
							if(prizeId == 2){
								Local.addToShelf({"bid":503623,"title":"医统江山","intro":"替天行盗","author":"石章鱼"})
							}
							this.showAlert = true
						},1000)
					}
					arrow.style.transform = `rotate(${startAngle}deg)`
					start.style.transform = `rotate(${-startAngle}deg)`
				},16.7)

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
<style>
	
</style>
