<template>
	<div id="app" :class="{login: showLogin == true}">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<template v-if="!over">
			<div id="banner">
				<div class="mask" v-if="showLogin"></div>
			</div>
			<div v-if="showLogin" id="login_content">
				<p class="desc1">听大神说，赚积分开宝箱</p>
				<p class="desc2">天天赢{{plat=='ios'?'阅':'书'}}券、Q币、更有电纸书大奖</p>
				<p class="btn" @click="login">登录参与</p>
				
			</div>
			<div id="content" v-if="!showLogin">
				<div class="content-question">
					<p class="title"></p>
					<ul class="container" ref="container">
						<li v-for="(item,index) in authors" 
							:class="classes[index]">
							<img class="avatar" :src="item.icon ? item.icon : defaultface"></img>
							<p class="author">{{item.authorName}}</p>
							<p class="desc">{{item.content}}</p>	
							<ul class="item">
								<li><span class="major">{{item.totalWords.count}}</span>{{item.fansCount.unit}}字<br>累计创作</li>
								<li><span class="major">{{item.categoryName==''? '无':item.categoryName}}</span><br>主要类型</li>
								<li><span class="major">{{item.fansCount.count}}</span>{{item.fansCount.unit}}<br>作品粉丝</li>
							</ul>
							<div class="bottom">
								<p class="lotted"></p>
								<span>回答了{{item.answerCount}}个问题</span>
								<p class="btn" @click="goAskQuestion"></p>
							</div>
						</li>
					</ul>
					<!-- <div class="shadow"></div> -->
					<p class="num"><span>{{active}}</span>/6</p>
				</div>
				<div class="content-listen">
					<p class="title"></p>
					<div class="cell" v-for="item in questionList">
						<span class="line"></span>
						<div class="question">
							<img class="user avatar" :src="item.useravor"></img>
							<p class="question-content">{{item.content}}</p>
						</div>
						<div class="answer">
							<div class="audio">
								<div class="process" :class="{red: item.price==0}" @click="play(item.qid)">
									<span v-if="item.price != 0">{{item.price}}{{plat=='ios'?'阅点':'书币'}}悄悄听</span>
									<span v-if="item.price == 0">限时免费听</span>
								</div>
								<span class="time">{{item.time}}"</span>
								<span class="listened">听过 {{item.count}}</span>
							</div>
							<img class="author avatar" :src="item.authoravor"></img>
						</div>
					</div>
				</div>
				<div class="listen-more" @click="listenMore">偷听更多问题</div>
				<div class="open-chest" @click="openChest">开宝箱</div>
				<div class="make-more" @click="makeMore">赚更多积分</div>
				<div class="rule">
					<p class="title">
						<span class="sep-left"></span>
						活动规则
						<span class="sep-right"></span>
					</p>
					<ul class="content">
						<li>活动时间：8月14日-8月20日</li>
						<li>活动期间参与大神说相关活动将获得积分,奖励规则如下：<br>
						      a：向大神提问,每个奖励100积分,每天上限10个<br>
						      b：提出问题被大神回答,每个奖励500积分,每天上限5个<br>
						      c：收听付费问题,每个奖励50积分,每天上限10个<br>
						      d：收听免费问题,每个奖励10积分,每天上限5个<br>
						      e：提出的问题被偷听,每个奖励10积分,每天上限50个</li>
						<li>活动赠送积分将于次日到账,在活动期间有效,可用于开宝箱冲榜。</li>
						<li>活动最终解释权归QQ阅读所有。</li>
					</ul>
					<p class="logo"></p>
				</div>	
			</div>
			<div class="alert" v-if='showAlert == true'>
				<div class="tiparea">
					<h4>暂不支持游客账号，<br>去设置－退出登录，点击QQ或微信登录参与</h4>
					<div class="closebtn" @click="showAlert='false'">我知道了</div>
				</div>
		    </div>
		</template>	
	</div>
</template>
<style src="./css/index.scss" lang="sass"></style>
<script>
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: true,
				isguest: false,
				classes: ['li0','li1','li2','li3','li4','li5'],
				active: 1,
				showAlert: false,
				authors: [],
				questionList:[],
				defaultface: common.front()+'act170801/src/images/defaultface.png'
			}
		},
		computed:{
			showLogin(){
				if (this.isLogin) {
					if (this.isguest==true) {
						return true
					}
				}else{
					return true
				}
				return false
			}
		},
		created(){ 
			this.initPage()
			window.onload = function(){
				requestAnimationFrame(_=>{
					console.log('----'+document.body.scrollTop)
					window.scrollTo(0,0)
				})
			}
	 	},
	 	mounted(){
	 		this.touch()
	 	},
	 	methods:{
	 		initPage(){
	 			if (process.env.NODE_ENV === 'local') {
	 				this.loading = false
	 				let data1 = require('./data.js')
	 				let data = data1.default
	 				this.authors = data.authors
	 				this.questionList = data.question
	 				this.isguest = data.isguest
	 				this.isLogin = data.isLogin
	 			}else{
	 				Local.reqaObj(common.server()+"pkg170801/init", data=>{
						console.log(data)
						this.loading = false
	 					if(data.code == -4){
	 						this.over = true
	 						return
	 					}
	 					this.loading = false
	 					this.isLogin = data.isLogin
	 					this.authors = data.authors
	 					this.questionList = data.questions
	 					this.isguest = data.isguest
	 				})
	 			}
	 			Local.forceLog(common.param("act_f"),"DSSInitPage")
	 		},
	 		goAskQuestion(){
				location.href = `uniteqqreader://nativepage/audioquestion/list?aid=${this.authors[this.active-1].authorId}`
				console.log(this.authors[this.active-1].authorId)
				Local.forceLog(common.param("act_f"),"DSSAskQuestion")
			},
			play(qid){
				location.href = `uniteqqreader://nativepage/audioquestion/detail?qid=${qid}&index=2&next=20`
				Local.forceLog(common.param("act_f"),"DSSPlay")
			},
	 		login(){
	 			if (this.isguest && this.isLogin) {
	 				this.showAlert = true
	 			}else{
	 				Local.login()
	 			}
	 		},
	 		listenMore(){
	 			location.href = 'uniteqqreader://nativepage/discover/authorsay'
	 			Local.forceLog(common.param("act_f"),"DSSListenMore")
	 		},
			openChest(){
				Local.openInside(common.front()+'act170704/index.html')
				Local.forceLog(common.param("act_f"),"DSSOpenChest")
			},
			makeMore(){
				Local.openInside(common.front()+'act170705/index.html')
				Local.forceLog(common.param("act_f"),"DSSMakeMore")
			},
	 		touch(){
				let _startX = 0, _startY = 0, _endX = 0, _endY = 0
				let _content = this.$refs.container
				let self = this
				if (_content) {
					_content.addEventListener("touchstart", touchStart, false)
					_content.addEventListener("touchmove", touchMove, false)
					_content.addEventListener("touchend", touchEnd, false)
				}
				
				function touchStart(event) {
					let touch = event.targetTouches[0]
					_startX = touch.pageX
					_startY = touch.pageY
				}
				function touchMove(event) {
					let touch = event.targetTouches[0]
					_endX = (_startX - touch.pageX)
					_endY = (_startY - touch.pageY)
					// if (Math.abs(_endX) > Math.abs(_endY)) {
					// 	event.preventDefault()
					// }
				}
				function right(){
					console.log('right')
					let copy = self.classes.slice(0)
					copy.forEach((item,index,array)=>{
						if(index == array.length - 1){
							self.$set(self.classes,index,array[0])
						}else{
							self.$set(self.classes,index,array[index+1])
						}
					})
				}
				function left(){
					console.log('left')
					let copy = self.classes.slice(0)
					copy.forEach((item,index,array)=>{
						if(index == 0){
							self.$set(self.classes,index,array[array.length - 1])
						}else{
							self.$set(self.classes,index,array[index - 1])
						}
					})
				}
		    	function touchEnd(event) {
		    		// console.log(_endY)
					if (_endX < -30 && Math.abs(_endY)<30) {
						right()
						self.active -= 1
					}else if(_endX > 30 && Math.abs(_endY)<30){
						left()
						self.active += 1
					}
					if (self.active == 7) {
						self.active = 1
					}
					if (self.active == 0) {
						self.active = 6
					}
					_endX=0
					_endY=0
				}
			},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 		}
	 	}, 	
	 	components:{
	 		maskLoad,
	 		maskOver
	 	}
	}
</script>	
