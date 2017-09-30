<template>
	<div id="app">
		<load v-if="loading"></load>
		<over v-if="over"></over>
		<template v-if="!over">			
			
			<div class="wrap" v-show="login" >		
				<div id="top">
					<div class="message"  @click="gochatlist">
						<p class="mesName">
							<span class="userName">{{username|showname}}，</span>
							<span>你收到了1条新消息</span>
							<i v-show="!hongdian"></i>

						</p>
						<p class="mesContent">
							有3个读者正在和大神们聊天，去观看>
						</p>					
					</div>
					<div class="activeRule">
						<div class="activeInfo">					
							<img :src='userface' alt="">				
							<p>&nbsp;月票：<span class="ticket">{{ticket}}</span>张</p>
							<a href="javascript:" @click="gopromote">如何获得月票? ></a>
						</div>
						<p>给喜欢的书投月票，现在投1票等于2票</p>
					</div>
				</div>
				<div class="classBook" v-show="shelfshow" >
					<p class="classTitle"><img src="src/images/title.png" alt=""></p>
					<ul class="bookList" v-bind:class="{ beCenter: isActive}">
						<li class="bookContent" v-for="books in bookshelf">
							<img class="Bcover" :src="books.cover" @click="godetail(books.id,'shelf')">
							<p class="bookname">{{books.title  }}</p>
							<p class="author">{{books.author}}</p>
							<div class="votebtn" @click="votes(books)"><a>投1票</a></div>
						</li>
					</ul>
				</div>
				<div class="classBook" >
					<p class="classTitle"><img src="src/images/title2.png" alt=""></p>
					<ul class="bookList" v-bind:class="{ beCenter: isActive}" >
						<li class="bookContent" v-for="books in listbook">
							<img class="Bcover" :src="books.cover" @click="godetail(books.id,'list')">
							<p class="bookname">{{ books.title }}</p>
							<p class="author">{{ books.author }}</p>
							<div class="votebtn" @click="votes(books)"><a>投1票</a></div>
							
						</li>
					</ul>
				</div>
				<div class="moreBook" @click="gogoodbook">
					<img src="src/images/moreBook.png" alt="">
				</div>
				

				<div class="aboutvote">
					<img class="aboutPic" src="src/images/about.png" alt="">
					<p class="actime"><span>1</span>活动时间:<b >9月28日—10月7日</b></p>
					<p><span>2</span>月票有什么用?<b>作品获得的月票越多，在原创文学风云榜排名就越靠前，说不定就成为神作了!</b></p>
					<p><span>3</span>怎样得到更多月票?<b>你的VIP等级和消费情况将决定本月的月票获得张数，所以赶紧升级和看书消费吧!</b></p>
					<p><span>4</span>投月票有限制吗?<b>普通vip用户对单本作品每日最多投2张，每月总计最多投5张。月票获取不易，请好好珍惜~</b></p>
					<a @click="moreRules" href="javascript:;" v-if="plat=='adr'">更多月票规则 ></a>
				</div>	
			</div>
			<mask-login v-show="!login"></mask-login>
			<mask-chat v-show="chatshow"  :mask="chatshow" 
								 :username="username" 
								 :num="num"
								 :timerok="timerok"
								 ref="chat" 

								 >
			</mask-chat>
			<eject-mask v-show="maskshow" :mashow="maskshow"
									  :voteshow="voteshow"
									  :guest="isguest"
									  :promotevote="promotevote"
									  :plat='plat'
		                              :voteyue="ticket" 
		                              :tktype="tktype"
		                              :ismengzhu="ismengzhu"
		                              :bookname="bookname"
		                              :bookmothcnt="bookMonthCnt">
		</eject-mask>
		</template>
	</div>
</template>
<style src="./css/app.scss" lang="sass"></style>
<script>
	import load from "./components/load"
	import over from "./components/over"
	import maskChat from "./components/maskChat"
	import maskLogin from "./components/maskLogin"
	import ejectMask from "./components/ejectMask"
	import data from "./js/data"

	export default {
		data: function () {
			return {
				plat: window.pt,
				loading: true,
				over: false,
				login: false,
				isLogin: true,				
				ut: common.param("ut"),
				username: 'Feirang',
				userface: 'src/images/face.png',
				ticket: '2',
				bookshelf: [],
				listbook: [],
				shelfshow:false,//书架是否显示
				hongdian: false,
				chatshow:false,
				maskshow:false,
				num:0,
				timerok:true,
				voteshow:false,//投票弹框
				isguest: false,
				promotevote:false,//如何提升月票
				tktype:1,//弹框code
				ismengzhu:false,//该书盟主
				bookname:'',//投票书籍
				bookMonthCnt:0,//书当前票数	
				mActiontag:'',
				newversion: false,
				isActive1: false
			}
		},
		created() {
			this.initPage()
		},
		computed:{			
		},
		filters: {
			showname: function(value){
				if (!value) return ''
				value = value.toString()
				if(value.length>5){
				return value.substring(0,5)+'...'
				}else {
					return value
				}
			}
		},
		methods: {
			initPage() {
				Local.forceLog(common.param('act_f'),"doubleMonthly");	
				console.log(process.env.NODE_ENV)
				if (process.env.NODE_ENV == 'local') {
					this.loading = false
					this.login = true
					this.listbook = data.booklist
					this.bookshelf = data.booklist

					if(this.bookshelf.length ==1){
						this.isActive = true
					}
					if(data.booklist.length==1){
						this.isActive = true
					}
				} else{			
				 Local.forceLog(common.param('act_f'),"doubleMonthly");	
				 Local.reqaObj(`${common.server()}pkg170905/init`, data => {
				 		console.log(data)
				 		this.loading = false;
						this.login=data.isLogin;
						if(this.login){								
								this.username=data.usernick?data.usernick:"Hi";
								this.userface=data.usericon?data.usericon:"src/images/defaultface.png";
								this.columnId=data.columnId;
								this.bookshelf=data.shelf;
								this.listbook=data.columnBooks;
								this.ticket=data.ticket;
								this.mActiontag = data.mActiontag;
								this.newversion  = data.newversion ;
								
								if(data.shelf.length>0){
									this.shelfshow = true
								}
								// if(this.bookshelf.length == 1 || data.shelf.length == 1){
								// 	this.isActive = true
								// }
						}			
					})
				}
				
			},
			//去更多好书
			gogoodbook:function(){				
				if(this.plat=='adr'){
					if(this.newversion == true){
						window.location.href='uniteqqreader://nativepage/rank/secondlist?actionId='+this.columnId+'&actionTag='+this.mActiontag+'&pagestamp=1';
					}else {

					    window.location.href='uniteqqreader://nativepage/rank/list?actionId='+this.columnId;
					}
					
				}else{
					window.location.href='uniteqqreader://nativepage/discover/rank/list?rankId='+this.columnId+'&rankTitle=原创风云榜&rankTag='+this.mActiontag ;
				} 
			},
			gochatlist:function(){
				Local.forceLog(common.param('act_f'),"read");	
				var self=this;
				Local.reqaObj(`${common.server()}pkg170905/read`, data => {
				 		this.hongdian = true
				 		this.chatshow=true
				 		if(this.timerok){
							this.$refs.chat.$emit('chatscroll',this.num);
						}
					});
				
			},
			//如何提升月票
			gopromote:function(){
				var self=this;
				self.maskshow=true;
				self.promotevote=true;
			},
			godetail:function(bid,wz){
				Local.forceLog(common.param("act_f"),wz+bid);
				Local.goBookDetail(bid);
			},
			//投票
			votes:function(booklist){
				Local.forceLog(common.param("act_f"),"vote");
				var self=this;
			    self.bookname=booklist.title;
			    var bid=booklist.id;
			    if(self.ticket==0){
			    	self.maskshow=true;
			    	self.voteshow=true;
			    	self.tktype=-10000;
			    }else{
			    	Local.reqaObj(common.server()+"pkg170905/vote?bid="+bid, function(data) {
						console.log(data);
						if(data.code==0 || data.code==-10000 || data.code==-10001 || data.code==-10002){
							self.ismengzhu=data.ismengzhu; 
							self.bookMonthCnt=data.bookMonthCount;
							self.tktype=data.code;
							self.maskshow=true;
							self.voteshow=true;
						}else{
							Local.showToast('投票失败');
						}
						
					},[], function(){
						Local.showToast('网络异常，请稍候重试');
					},1);
			    }
			    
			},
			moreRules(){
				if(this.plat=='adr'){
					console.log(Local)
					Local.gotoQUrl('http://iyuedu.qq.com/android/6_5_5/helpList.html?type=8&lm_f=helpIndex&lmh_f=helpIndex&tf=1&fp=1')
				}
			}
			
			
			
		},
		components: {
			load,
			over,
			maskChat,
			maskLogin,
			ejectMask
		}
	}
</script>