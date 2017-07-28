<template>
	<div id="root" touchstart="">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<div class="swiper-container main">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide one">
			    	<div class="signal-box">
			    		<div class="a" ref="a"></div>
			    		<div class="b" ref="b"></div>
			    		<div class="c"></div>
			    	</div>
			    	<span class="showmask" @click="showmask"></span>
			    </div>
			    <div class="swiper-slide two">
			    	<div class="audio">
			    		<span class="hand" ref="hand"></span>
			    		<p class="person-num">
			    			<span class="listener">{{list[active].listener}}</span>
			    		</p>
			    		<div class="name-box">
							<div class="swiper-wrapper">
								<div class="swiper-slide name" v-for="item in list">
									{{item.author}}
								</div>
							</div>
			    			<span class="red-line"></span>
			    			<!-- <span class="line" ref="line"></span> -->
			    		</div>
			    		<p class="book-name">《{{list[active].book}}》作者</p>
			    		<div class="content">
			    			<div>
			    				<div class="content-line"></div>
			    				<span class="ask-avatar" :style="askStyle"></span>
			    				<p class="question">{{list[active].question}}</p>
			    				<p class="ask-question" @click="isHasApp('uniteqqreader://nativepage/audioquestion/list?aid='+list[active].aid)">我也去提问</p>
			    				<span class="author-avatar" :style="authorStyle" @click="isHasApp"></span>
			    				<div class="process" @click="play">
			    					<div class="played-box">
			    						<div class="played" ref="played"></div>
			    					</div>
			    					<span class="signal">
			    						<i class="one-signal"></i>
			    						<i class="two-signal" ref="twoSignal"></i>
			    						<i class="three-signal" ref="threeSignal"></i>
			    					</span>
			    					<span v-if="isEnd" class="song">
			    						{{list[active].song}}
			    					</span>
			    					<span class="song" ref="song" v-else>
			    						{{list[active].song}}
			    					</span>
			    				</div>
			    				<span class="time">{{audioMax}} "</span>
			    			</div>
			    			<p class="book-seg"></p>
			    			<div class="comment">
			    				<span class="left-comma"></span>
			    				
								<div class="comment-swiper">
			    				    <div class="swiper-wrapper">
			    				      <div class="swiper-slide swiper-no-swiping" v-for="item in list[active].adapt">
			    				      	<p class="comment-content">{{item.content}}</p>
			    				      	<p class="comment-person">{{item.person}}</p>
			    				      </div>
			    				    </div>
								</div>
			    				<span class="right-comma"></span>
			    			</div>
			    			<p class="tip" v-text='tip' @click="isHasApp"></p>
			    		</div>
			    	</div>
			    	<audio :src="audioSrc" ref="audio"></audio>
			    	<div class="two-leaf"></div>  
			    </div>
			    <div class="swiper-slide three">
				    <div class="listen-list">
			    	<div class="first-comment"></div>
			   		<div class="second-comment"></div>
				    
					  <div class="swiper-wrapper">
					    <div class="swiper-slide swiper-no-swiping" v-for="item in listenList">
					    	<p class="first">{{item[0].question}}<span @click="isHasApp(item[0].url)">去偷听 &gt;</span></p>
			    			<p class="second">{{item[1].question}}<span @click="isHasApp(item[1].url)">去偷听 &gt;</span></p>
					    </div>
					  </div>
					</div>
			    	<a class="goBigGod" href="javascript:;" @click="isHasApp('uniteqqreader://nativepage/discover/authorsay')"></a>
					<div class="three-leaf"></div>  
			    </div>
			  </div>
			</div>
			<Alert ref="alert" style="display: none"></Alert>
			<app-load v-if="loadmask"></app-load>
			<mask-wb v-if="wb"></mask-wb>
		</template>
	</div>
</template>
<script>
	import "../src/css/index.scss"
	import "swiper/dist/css/swiper.css"
	import Swiper from 'swiper'
	import maskLoad from "../src/components/Load.vue"
	import Alert from "../src/components/Alert.vue"
	import maskOver from "../src/components/Over.vue"
	import maskWb from "./components/weibo.vue"
	import appLoad from "./components/appload.vue"

	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				active: 1,
				audioMax: 85,
				audioTimeId: null,
				isEnd: false,
				isAdd: true,
				wb:false,
				loadmask: false,
				nameSwiper: null,
				shareObj:{
					url : front() + "act170606/share.html?act_f=170606",
					cover:  front() + "act170606/src/imgs/cover.png",
					title: "千里传音，大神欢唱",
					desc: "点播歌曲，改编歌词，赢好礼"
				},
				list: [
					{
						author: "梧桐火",
						book: "我的邻家空姐",
						listener: "",
						question: "今天听不到你的歌我就不睡觉",
						song: "十年",
						aid: 3004825100794401,
						bid: 512557,
						adapt: [
							{
								person: "@酒神",
								content: "我们还是一样 各自蹲在家门口"
							},
							{
								person: "@学霸",
								content: "10年之前 我不认识字 没老师教我"
							}
						]
					},
					{
						author: "流水无痕",
						book: "龙血武帝",
						listener: "",
						question: "啥叫五音最全？大大帮展示展示啊！",
						song: "有没有人告诉你",
						aid: 3004370401315301,
						bid: 424945,
						adapt: [
							{
								person: "@Mille",
								content: "有没有人曾告诉你，你衣服穿反了"
							},
							{
								person: "@风",
								content: "刚想过来搭讪的时候 你一转身就走了"
							}
						]
					},
					{
						author: "忘记呼吸的猫",
						book: "呆萌小萝莉：高冷男神太腹黑",
						listener: "",
						question: "为啥你给他唱不给我唱，我也要嘛...",
						song: "宠爱",
						aid: 3004296400556601,
						bid: 19351804,
						adapt: [
							{
								person: "@果冻喵",
								content: "我只想和你要一百，你却给我一块"
							},
							{
								person: "@大萌",
								content: "好想把你装进麻袋,拖到大街上去大卖"
							}
						]
					},
					{
						author: "苏小暖",
						book: "邪王追妻：废材逆天小姐",
						listener: "",
						question: "会写字也会唱歌，大大你是人生赢家啊",
						song: "美丽心情",
						aid: 3004584000916201,
						bid: 185422,
						adapt: [
							{
								person: "@沫沫",
								content: "当我安安心心地来到考场里"
							},
							{
								person: "@小小七",
								content: "学习给了我坚强的勇气"
							}
						]
					},
					{
						author: "夜清歌",
						book: "强掳娇妻：妖皇大人，stop！",
						listener: "",
						question: "他们都点到歌了，我也要点，马上~",
						song: "小幸运",
						aid: 3004328501996201,
						bid: 15841759,
						adapt: [
							{
								person: "@宁",
								content: "我看见远方的你在翻垃圾"
							},
							{
								person: "@笑笑",
								content: "我听见早晨闹钟没有响起..."
							}
						]
					},
					{
						author: "彦七",
						book: "战王独宠：杀手王妃千千岁",
						listener: "",
						question: "怎么办呢？今天必须听到你的声音才行",
						song: "告白气球",
						aid: 3004968400750401,
						bid: 736773,
						adapt: [
							{
								person: "@素素",
								content: "爱上你从那天起 后悔都来不及"
							},
							{
								person: "@小草",
								content: "你说你有点难追，想让我知难而退"
							}
						]
					},
					{
						author: "刘十八",
						book: "最后一个摸金校尉",
						listener: "",
						question: "听说你唱歌都不在调上的，来一首听听",
						song: "朋友",
						aid: 3004926401912201,
						bid: 707925,
						adapt: [
							{
								person: "@吾皇",
								content: "朋友一生一起走 扔掉的盒饭留给我"
							},
							{
								person: "@我来也",
								content: "一生情一辈子快快还我小狗狗"
							}
						]
					},
					{
						author: "太上布衣",
						book: "最强装逼打脸系统",
						listener: "",
						question: "他们都说你是麦霸，我偏偏就是不信！",
						song: "演员",
						aid: 3004501500627701,
						bid: 13899336,
						adapt: [
							{
								person: "@一休哥",
								content: "简单点，出题的方式简单点"
							},
							{
								person: "@来来",
								content: "没意见，我只是想要考大学"
							}
						]
					}
				],
				listenList: [
					[{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=6258a7558b2661048981438af80503&index=2&next=20",
						question: "公子，能唱首歌来听听吗？"
					},
					{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=82593664233719746473648a72c34b&index=2&next=20",
						question: "大大的写作灵感的来源自哪儿？"
					}],
					[{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=6758faf05b2733962048938a6cb619&index=2&next=20",
						question: "希望叶子能鼓励鼓励我！"
					},
					{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=17587a173f3550517162858abb2318&index=2&next=20",
						question: "给想写小说的一些建议吧 "
					}],
					[{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=8758f0f88333837403f6628af80595&index=2&next=20",
						question: "作者你为什么要写小说呢？"
					},
					{
						url: "uniteqqreader://nativepage/audioquestion/detail?qid=68587371df0463804029108af80783&index=2&next=20",
						question: "考虑给忠实读者一些角色吧~ "
					}]
				]
			}
		},
		computed: {
			askStyle(){
				return {
					backgroundImage: `url(src/media/person-avatar/${this.active+1}.jpg)`
				}
			},
			authorStyle(){
				return {
					backgroundImage: `url(src/media/author-avatar/${this.active+1}.jpg)`
				}
			},
			audioSrc(){
				return `src/media/audio/${this.active+1}.mp3`
			},
			tip(){
				return this.plat == 'adr' ? '歌词神改编，为作者加油，赢超值书券 >>':'歌词神改编，为作者加油，赢超值阅券 >>'
			}
		},
		created(){
			this.initData()
			window.onload = _=>{
				this.loading = false
			}
		},
		mounted(){
			this.createSwiper()
			this.signalMove()
		},
		methods: {
			isHasApp(url){
				this.$refs.audio.onended()
				this.$refs.audio.currentTime = 0
				this.$refs.audio.pause()
	 			if(env.vw=="wb"){
	 				this.wb=true
	 				return
	 			}
	 			//走判断流程
	 			var self=this
				S.open(function(installStat,plat){
					if(installStat == -2){//浏览器
						if (typeof url == 'string') {
							window.location.href = url	
						}else{
							N.openPage(pageurl("act170606/index.html?act_f=170606"))	
						}					
						self.showAppload()
					}else if(installStat){//已安装			
						if (typeof url == 'string') {
							window.location.href = url	
						}else{
							N.openPage(pageurl("act170606/index.html?act_f=170606"))	
						}
					}else{			
						self.showAppload()
					}
				})					
 			},
			initData(){
				reqa(server() + "pkg170606/init", data=>{
		      		if (data.code == 1) {
		      			this.list.forEach((item,index)=>{
		      				item.listener = data.listener[index]
		      			})
		      		}
				})
			},
			setAudioMax(){
				let self = this
				let audio = this.$refs.audio
				if (audio) {
					audio.onloadedmetadata = _=>{
						let duration = Math.floor(audio.duration)
						console.log("duration"+audio.duration)
						self.audioMax = duration
					}
		 			audio.onended = _=>{
		 				self.isEnd = true
						self.$refs.played.style.width = '0'
						self.$refs.twoSignal.style.display = 'block'
						self.$refs.threeSignal.style.display = 'block'
						self.isAdd = true
						clearInterval(self.audioTimeId)
		 			}
				}
			},
			signalMove(){
				let flagA = false
	 			let flagB = false
	 			let a = this.$refs.a
	 			let b = this.$refs.b
	 			setInterval(_=>{
	 				if(flagB){
						b.style.display = "none"
						a.style.display = 'none'
						flagB = false
 					}else{
						b.style.display = 'block'
						setTimeout(_=>{
							a.style.display = 'block'
							flagB = true
						},400)
 					}
 				},800)
			},
			play(){
				let audio = this.$refs.audio
				let played = this.$refs.played
				let twoSignal = this.$refs.twoSignal
				let threeSignal = this.$refs.threeSignal
				let currentTime = 0
				let flagA = false
	 			let flagB = false
	 			if (this.isAdd) {
	 				this.isAdd = false
	 				reqa(server() + "pkg170606/add?idx="+this.active, data=>{
	 					if (data.code == 1) {
	 						this.list[this.active].listener = data.num
	 					}
	 				})
	 			}
	 			console.log(audio.paused)
				if (audio.paused) {
					this.isEnd = false
					audio.play()
					this.audioTimeId = setInterval(_=>{
	 					currentTime = this.$refs.audio.currentTime
	 					played.style.width = (currentTime / this.audioMax)*4.84+"rem"
 						if(flagB){
 							threeSignal.style.display = "none"
 							twoSignal.style.display = 'none'
 							flagB = false
 						}else{
 							twoSignal.style.display = 'block'
 							setTimeout(_=>{
 								threeSignal.style.display = 'block'
 								flagB = true
 							},400)
 						}
	 				},800)
				}else{
					audio.pause()
					clearInterval(this.audioTimeId)
				}
			},
			createSwiper(){
				let self = this
				let rand = Math.floor(Math.random()*8)
				let first = true
				new Swiper('.main', {
					direction: 'vertical',
					onTransitionEnd(swiper){
						if (swiper.realIndex == 1 && first) {
							self.moveHand()
							first = false
						}
					}
				})
				this.nameSwiper = new Swiper('.name-box',{
					freeMode: true,
					loop: true,
					freeModeSticky: true,
					slidesPerView: 'auto',
					initialSlide: rand,
					onTransitionEnd(swiper){
						self.setAudioMax()
						self.$refs.audio.pause()
						self.$refs.audio.currentTime = 0
						self.$refs.played.style.width = '0'
						self.$refs.twoSignal.style.display = 'block'
						self.$refs.threeSignal.style.display = 'block'
						self.isAdd = true
						clearInterval(self.audioTimeId)
						if (swiper.realIndex == 7) {
							self.active = 0
						}else{
					     	self.active = swiper.realIndex + 1 //切换结束时，告诉我现在是第几个slide
						}
					},

				})
				new Swiper('.comment-swiper',{
					direction: 'vertical',
					autoplay: 5000,
				})
				new Swiper('.listen-list',{
					direction: 'vertical',
					autoplay: 5000,
					loop: true
				})
			},
			moveHand(){
				let hand = this.$refs.hand
				let nameSwiper = this.nameSwiper
				hand.style.webkitTransform = "translateX(-2rem)"
				nameSwiper.slideNext(false,800)

				setTimeout(_=>{
					hand.style.webkitTransform = "translateX(1rem)"
					nameSwiper.slidePrev(false,400)
					hand.addEventListener('transitionend',_=>{
						hand.style.display = "none"
					})
				},1000)
			},
			showAppload(){
				this.loadmask = true	
			},
			showmask(){
				this.$refs.alert.$el.style.display = "block"
			},
			hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 		},
		},
		components: {
			maskLoad,
	 		appLoad,
	 		maskWb,
	 		Alert
		}
	}
	window.initSNS = function(){
		let shareobj={
			cover :front()+ "act170606/src/imgs/cover.png",
			url : window.location.href,
			title: "千里传音，大神欢唱",
			desc: "点播歌曲，改编歌词，赢好礼"
		};
		S.share(shareobj);
	}
</script>