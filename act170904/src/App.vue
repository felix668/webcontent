<template>
	<div id="app">
		<load v-if="loading"></load>
		<over v-if="over"></over>
		<template v-if="!over">
			<div id="banner">
				<div class="timeBox">
					<p class="timeBox-title">已收集告白信</p>
					<strong v-for="(item,index) in 7" class="time" :key="index">{{totalShares.slice(index,index+1)}}</strong><span class="text">封</span>
				</div>
			</div>
			<div id="share">
				<div class="title">
					<span class="line"></span>
					<strong class="text">寄出你的专属告白信</strong>
					<span class="line"></span>
				</div>
				<img class="email" src="src/images/email.png" alt="">
				<p class="desc">分享成功后黄轩才能看到你的告白信哦</p>
				<p class="btn" @click="share">寄出我的告白信</p>
			</div>
			<div class="vote">
				<div class="title">
					<span class="line"></span>
					<strong class="text">为黄轩加戏</strong>
					<span class="line"></span>
				</div>
				<p class="desc">你最想轩哥现身后做什么呢？快去投票吧！</p>
				<div class="vote-content">
					<div class="vote-mask" v-show="showMask">
						<p class="vote-warn"><span class="vote-time">{{countDown}}s</span> 后可再次投票哦～</p>
					</div>
					<p class="vote-tip">我已投<span class="num">{{isLogin?votenumber:0}}</span>票，排名<span class="num">{{isLogin?voteRank:'100+'}}</span></p>
					<ul>
						<li v-for="(item,index) in voteList" :key="index">
							<strong class="star" :style="{ backgroundImage: `url('src/images/${index+1}.png')` }">{{index+1}}</strong>
							<div class="vote-main" :style="{ backgroundImage: `url(src/images/${item.name}.png)`}">
								<p class="vote-btn" @click="vote(item,index)">投票</p>
								<p class="vote-num">{{item.vote}}票</p>
							</div>
							<i class="shadow"></i>
						</li>
					</ul>
				</div>
			</div>
			<comment></comment>
			<rule></rule>
			<div class="logo">
				<i></i>
			</div>
		</template>
	</div>
</template>
<style src="./css/app.scss" lang="sass" ></style>
<script>
	import load from "./components/load"
	import over from "./components/over"
	import rule from "./components/rule"
	import comment from "./components/comment"
	import data from "./js/data"
	
	export default { 
		data: function () {
			return {
				plat: window.pt,
				loading: true,
				over: false,
				isLogin: true,
				isguest: false,
				replaceTime: Date.parse("Mon, 30 Sep 2017 10:10:00"), 
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				e: 0,
				f: 0,
				g: 0,
				randomWords: ~~(Math.random()*30)+1,
				pictureURL: `${common.front()}act170904/src/images/picture/${~~(Math.random()*4)+1}.jpg`,
				totalShares: "0",
				showMask: false,
				countDown: 15,
				votenumber: 0,
				voteRank: "100+",
				voteList: [
					{
						id: 1,
						name: "zhen",
						vote: 10
					},{
						id: 2,
						name: "die",
						vote: 9
					},{
						id: 3,
						name: "fang",
						vote: 7
					},
					{
						id: 4,
						name: "xian",
						vote: 5
					},
					{
						id: 5,
						name: "du",
						vote: 3
					},
					{
						id: 6,
						name: "fan",
						vote: 1
					}
				]
			}
		},
		computed: {
			wordsURL(){
				return `${common.front()}act170904/src/images/words/${this.randomWords}.png`
			}
		},
		created() {
			Local.cacheImage(this.pictureURL)
			Local.cacheImage(this.wordsURL)
			this.initPage()
			const self = this
			window.afterShare = _ => {
				console.log('after')
				Local.reqaObj(`${common.server()}pkg170904/share`, data => {
					console.log(data)
					self.totalShares = data.totalshares == 0 ? '0000000':(data.totalshares/1000000+'').replace('.','')
					console.log(self.totalShares)
				})
			}
		},
		mounted() {
			let str = "my name islz"
			
			console.log(str.includes)
			console.log(Array.prototype.includes)
			console.log(Array.from)
			console.log(Object.assign)
			var map = new  Promise()
			console.log(map)
		},
		methods: {
			initPage() {
				if (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "production") {
					this.loading = false
					this.totalShares = ""+data.init.totalshares
					this.voteList = data.init.votes.sort((a,b) => {
						return b.vote - a.vote 
					})
					this.isLogin = data.init.isLogin
					this.voteRank = data.init.voteRank
				} else {
					Local.reqaObj(common.server() + "pkg170904/init", data => {
						console.log(data)
						this.loading = false
						if (data.code == -4) {
							this.over = true
							return
						}
						this.nick = data.nick
						this.votenumber = data.votenumber
						this.totalShares = data.totalshares == 0 ? '0000000':(data.totalshares/1000000+'').replace('.','')
						this.isLogin = data.isLogin
						this.voteRank = data.voteRank
						this.systemtime = data.systemtime
						if(this.systemtime >= this.replaceTime){
							window.location.href = "live.html"
						}
						this.voteList = data.votes.sort((a,b) => {
							return b.vote - a.vote 
						})
					})
				}
			},
			share(){
				if(!this.isLogin){
					Local.login()
					return
				}
				let text = "—— "+(this.nick.length >= 7 ? this.nick.slice(0,5)+'...' : this.nick)
				let y = this.randomWords <=4 ? 886 : 946
				if (this.plat == 'adr') y += 30 

				Local.shareStyleImage(this.pictureURL,this.wordsURL,{
					text: text,
					location: {
						x: 400,
						y: y
					},
					color: "000000",
					fontSize: "36"
				})
			},
			vote(item){
				if(!this.isLogin){
					Local.login()
					return;
				}
				Local.reqaObj(`${common.server()}pkg170904/vote?action=${item.id}`, data => {
					if(data.code == 0){
						this.initPage()
						item.vote++
						this.showMask = true
						let timer = setInterval(_=>{
							this.countDown--
							if(this.countDown == 0){
								clearInterval(timer)
								this.showMask = false
								this.countDown = 15
							}
						},1000)
					}else{
						Local.showToast(data.msg)
					}
				})
				
			},
			goDetail(){
				Local.goBookDetail('854309')
			},
			goComment(){
				window.location.href = 'uniteqqreader://nativepage/comment/index?bid=854309&ctype=0'
			}
		},
		components: {
			load,
			over,
			rule,
			comment
		}
	}
</script>