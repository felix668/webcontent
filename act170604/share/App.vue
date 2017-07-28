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
						<a href="javascript:;" class="rush" @click="isHasApp"></a>
						<a href="javascript:;" class="reserve" @click="isHasApp" ref="reserve"></a>
					</div>
				</section>
				<section class="content-video">
					<div class="title"></div>
					<div class="video-box">
						<span class="play-btn"></span>
					</div>
					<a href="javascript:;" class="goBigGod" @click="isHasApp"></a>
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
					<p class="more-comment" @click="isHasApp">查看全部讨论&gt;</p>
					<a href="javascript:;" class="join-comment" @click="isHasApp"></a>
				</section>
				<section class="content-share">
					<div class="title"></div>
					<a href="javascript:;" class="share" @click=""></a>
					<p class="share-after">分享成功后点击“返回QQ阅读”可获得抽奖机会</p>
				</section>
				<section class="content-bottom">
					<div class="red-shadow"></div>
					<div class="title"></div>
					<p class="lottery-num">抽奖次数:<span class="num">{{chance}}</span></p>
					<div class="lottery">
						<div class="arrow" @click="" ref="arrow">
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
				plat: window.pt,
		 		loading: true,
		 		over: false,
		 		bookbId: "14650252",
				isLogin: false,
		 		chance: 2,//可用抽奖次数
		 		lotteryPicked: false,//是否已抽奖
		 		reserved: false,//是否已预约
				isGuest: false,//是否是ios游客
				shareObj:{
					url : front() + "act170604/share.html?act_f=170604",
					cover:  front() + "act170604/src/images/cover.jpg",
					title: "看石章鱼新书，100%赢好礼",
					desc: "desc"
				},
				info:{
					noGift: false,
					isGuest: true,
					isBig: true,
					gift: 'shuquan',
					content: '',
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
		created(){
			let self = this
		    window.onload = _=>{
		    	this.loading = false
		    }
	 	},
	 	methods:{
	 		isHasApp(e){
	 			if(env.vw=="wb"){
	 				this.wb=true;
	 				return;
	 			}
	 			//走判断流程
	 			var self=this;
				S.open(function(installStat,plat){
					if(installStat == -2){//浏览器						
						N.openPage(pageurl("act170604/share.html?act_f=170604"));			
						self.showmask();
					}else if(installStat){//已安装			
						N.openPage(pageurl("act170604/share.html?act_f=170604"));	
					}else{			
						self.showmask();
					}
				})					
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
	 		maskWb,
	 		appLoad
	 	}
	 	
	}
	window.initSNS = function(){
		let shareobj={
			cover :front()+ "act170604/src/images/cover.jpg",
			url : window.location.href,
			title: "苏小暖新书标题",
			desc: "苏小暖新书内容"
		};
		S.share(shareobj);
	}
</script>	