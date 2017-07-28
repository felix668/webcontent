<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<div id="banner">
			</div>
			<div id="content">
				<section class="content-head">
					<div class="title"></div>
					<div class="book-box">
						<img src="src/images/book.png" class="book">
						<p class="book-name">神医凰后：傲娇暴君，强势宠</p>
						<div class="seg"></div>
						<p class="book-detail">穿越言情天后苏小暖火爆新作。君临天下的少年，凤舞江山的少女，一场棋逢对手，势均力敌的爱情追逐游戏，一群热血少年成长的励志故事。</p>
						<a href="javascript:;" class="rush" @click="rush"></a>
						<a href="javascript:;" class="reserve" @click="reserve" ref="reserve" :style="reserveStyle"></a>
					</div>
				</section>
				<section class="content-video">
					<div class="title"></div>
					<div class="video-box">
						<span class="play-btn"></span>
					</div>
					<a href="javascript:;" class="goBigGod" @click="goBigGod"></a>
				</section>
				<section class="content-comment">
					<div class="title"></div>
					<div class="comment" v-for="item in commentData">
						<p class="comment-head">
							<span class="avatar"></span>
							<span class="name">{{item.name}}</span>
							<span class="date">{{item.date}}</span>
						</p>
						<div class="comment-content">{{item.content}}</div>
					</div>
					<p class="more-comment" @click="moreComment">查看全部讨论&gt;</p>
					<a href="javascript:;" class="join-comment" @click="moreComment"></a>
				</section>
				<section class="content-share">
					<div class="title"></div>
					<a href="javascript:;" class="share" @click="toShare"></a>
					<p class="share-after">分享成功后点击“返回QQ阅读”可获得抽奖机会</p>
				</section>
				<section class="content-bottom">
					<div class="red-shadow"></div>
					<!-- <div class="gray-shadow"></div> -->
					<div class="title"></div>
					<p class="lottery-num">抽奖次数:<span class="num">{{chance}}</span></p>
					<div class="lottery">
						<div class="arrow" @click="startLottery" ref="arrow">
							<p class="start" ref="start">开始抽奖</p>
						</div>
					</div>
					<div class="rule">
						<div class="writeAddress" @click="writeAddress"></div>
					</div>
				</section>
			</div>
		</template>	
		<mask-over v-if="over"></mask-over>
		<Alert :info="this.info" ref="alert" v-if="showAlert"></Alert>
	</div>
</template>

<script>
	import "./css/index.scss"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import Alert from "./components/Alert.vue"
	import data from "./data.js"
	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
		 		bookbId: "14650252",
				isLogin: false,
		 		lotteryPicked: false,//是否已抽奖
		 		reserved: false,//是否已预约
				isGuest: false,//是否是ios游客
				showAlert:false,
				shared: false,
				shareObj:{
					url : common.sharefront() + "act170604/share.html?act_f=170604",
					cover:  common.sharefront() + "act170604/src/images/cover.jpg",
					title: "苏小暖新书标题",
					desc: "苏小暖新书内容"
				},
				commentData:[
					{
						name: "smile",
						content: '还行吧，毕竟现在总载文太多，看一下别的类型也不错。还行吧，毕竟现在总载文太多，看一下别的',
						date: '2017-7-7'
					},
					{
						name: "smile",
						content: '还行吧，毕竟现在总载文太多，看一下别的类型也不错。还行吧，毕竟现在总载文太多，看一下别的还行吧，毕竟现在总载文太多，',
						date: '2017-7-7'
					},
					{
						name: "smile",
						content: '还行吧，毕竟现在总载文太多，看一下别的类型也不错。还行吧，毕竟现在总载文太多，看一下别的',
						date: '2017-7-7'
					}
				]
			}
		},
		computed:{
			reserveStyle(){
				return this.reserved ? {
					backgroundImage: 'url(src/images/reserved.png)',
				}:{}
			},
			chance(){
				console.log(!this.lotteryPicked)
				console.log(this.shared)
				if (this.shared && !this.lotteryPicked) {
					console.log('1111')
					return 1
				}else{
					return 0
				}
			}
		},
		created(){
			let self = this
			this.initPage()

			window.afterShare = function(){
		      	Local.reqaObj(common.server() + "pkg170604/share", data=>{
		      		console.log(data)
		      		if (data.code == 0) {
		      			Local.showToast('分享成功,去抽奖吧')
		      			self.shared = true
		      		}
				}, [], function() {
						Local.showToast("网络异常，请稍候重试")
				}, 1)
		    }
	 	},
	 	methods:{
	 		initPage(){
	 			let self = this	 	
				Local.reqaObj(common.server() + "pkg170604/init", data=>{
					console.log('init')
					console.log(data)
					self.loading = false
					if(data.code == -4){
						self.over = true
					}
					self.isLogin = data.isLogin
					self.shared = data.shared
					self.lotteryPicked = data.lotterypicked
					self.reserved = data.reserved
					self.isGuest = data.isguest	
				})
	 		},
	 		rush(){
	 			
	 		},
	 		reserve(){
	 			if(this.reserved){
	 				return
	 			}
	 			if (this.isGuest) {
 					this.info = {
						noGift: true,
						isGuest: true,
						isBig: false,
						gift: '',
						content: null
					}
					this.showAlert = true
					return
	 			}
	 			if (this.isLogin) {
		 			Local.reqaObj(common.server() + "pkg170604/reserve", data=>{
		 				console.log(data)
			      		if (data.code == 0) {
			      			this.$refs.reserve.style.backgroundImage = "url(src/images/reserved.png)"
			      			this.reserved = true
			      		}
					}, [], function() {
							Local.showToast("网络异常，请稍候重试")
					}, 1)
	 			}else{
	 				Local.login()
	 			}
	 		},
	 		goBigGod(){
	 			if (this.isLogin) {
					window.location.href = `uniteqqreader://nativepage/audioquestion/list?aid=3004584000916201`
				}else{
					Local.login()
				}
	 		},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 			this.showAlert = false
	 		},
	 		moreComment(){
	 			Local.openTopicComment('328315')
	 		},
	 		toShare(e){
	 			if (this.isGuest) {
					this.info = {
						noGift: true,
						isGuest: true,
						isBig: false,
						gift: '',
						content: null
					}
					this.showAlert = true
					return
				}
				if(this.isLogin){
					Local.shareTopic(this.shareObj.url, this.shareObj.cover, this.shareObj.title,this.shareObj.desc, 1)
				}else{
					Local.login()
				}
			},
	 		startLottery(e){
	 			console.log(this.chance)
	 			if (this.chance > 0) {
	 				this.chance--
	 				this.lotteryResult(2)
	 			}
	 		// 	if (this.isLogin) {
	 		// 		if (this.isGuest) {
				// 		this.info = {
				// 			noGift: true,
				// 			isGuest: true,
				// 			isBig: false,
				// 			gift: '',
				// 			content: null
				// 		}
				// 		this.showAlert = true
				// 		return;
				// 	}
	 		// 		if (this.chance > 0) {
	 		// 			Local.reqaObj(common.server() + "pkg170509/lottery", data=>{
	 		// 				if(data.code<0){
				// 				Local.showToast(data.msg);
				// 			}else{
	 		// 					this.chance--
	 		// 					let prizeId = data.prizeId
				// 				this.lotteryResult(prizeId)
				// 			}
	 		// 			},[], _=>{
				// 					Local.showToast("网络异常，请稍候重试");
				// 		}, 1)
						
	 		// 		}else{
	 		// 			this.info = {
	 		// 				noGift: true,
	 		// 				isGuest: false,
	 		// 				isBig: false,
	 		// 				gift: '',
	 		// 				content: null
	 		// 			}
	 		// 			this.showAlert = true
	 		// 		}
	 		// 	}else{
				// 	Local.login()
				// }
	 		},
	 		lotteryResult(prizeId){
	 			let arrow = this.$refs.arrow
	 			let start = this.$refs.start
	 			let endAngle = 0
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

				
				let startTimer = setInterval(_=>{
					startAngle += 10
					if (startAngle == endAngle) {
						clearInterval(startTimer)
						endAngle = 0
						setTimeout(_=>{
							this.showAlert = true
						},1000)
					}
					arrow.style.transform = `rotate(${startAngle}deg)`
					start.style.transform = `translate(-50%,-50%) rotate(${-startAngle}deg)`
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
