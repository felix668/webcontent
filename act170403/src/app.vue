<template>
	<div id="root">
		<div class="wrap" v-show="login">
			<div class="topbox">
				<div>
				<div class="newsbox" @click="gochatlist">
					<p class="tts"><span class="username">{{ username }}</span><span class="hot">，你收到了1条新消息<i v-show="!hongdian"></i></span></p>
					<p>有3个读者正在和大神们聊天，去观看></p>
				</div>
			    </div>
				<div class="userinfo">
					<div class="facebox"><span class="face"><img :src=userface /></span>月票：<span class="votenum">{{ ticket }}</span> 张<a href="javascript:" @click="gopromote">如何获得月票? ></a></div>
					<p>活动期间投月票双倍计，投1票算2票！</p>
				</div>
			</div>
			<div class="mt">
				<div class="bookshelf" v-show="shelfshow">
				<div class="title ttbg">月票好书正在读</div>
				<ul class="booklist">
					<li v-for="books in bookshelf">
						<div class="bookface" @click="godetail(books.id,'shelf')">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.title }}</p>
						<p>{{ books.author }}</p>
						<div class="votebtn" @click="votes(books)"><a>投1票</a></div>
					</li>
				</ul>
			</div>
			<div class="listbook">
				<div class="title ttbg">原创文学风云榜</div>
				<ul class="booklist">
					<li v-for="books in listbook">
						<div class="bookface" @click="godetail(books.id,'list')">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.title }}</p>
						<p>{{ books.author }}</p>
						<div class="votebtn" @click="votes(books)"><a>投1票</a></div>
					</li>
				</ul>
			</div>
			<div class="morebook" @click="gogoodbook"></div>
			<img class="gototal" :src="'../adr/public/images/go.png'" @click="goall" />
			<div class="aboutvote">
				<h4>- 关于月票 -</h4>
				<p><span>1.</span>活动时间<br>2017年4月23日－5月8日 00:00</p>
				<p><span>2.</span>月票有什么用?<br>作品获得的月票越多，在原创文学风云榜排名就越靠 前，说不定就成为神作了!</p>
				<p><span>3.</span>怎样得到更多月票?<br>你的VIP等级和消费情况将决定本月的月票获得张 数，所以赶紧升级和看书消费吧!</p>
				<p><span>4.</span>投月票有限制吗?<br>普通vip用户对单本作品每日最多投2张，每月总计最多投5张。月票获取不易，请好好珍惜~</p>
				<a v-show="isadr" href="javascript:Local.openPage('help/help6.html')">更多月票规则 ></a>
			</div>
			</div>
			
		</div>
		<mask-login v-show="!login"></mask-login>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-chat v-show="chatshow" :mask.sync="chatshow" 
									 :username="username" 
									 :num="num"
									 :timerok.sync="timerok"
									 v-ref:child>
		</mask-chat>
		<eject-mask v-show="maskshow" :mashow.sync="maskshow"
									  :voteshow.sync="voteshow"
									  :guest="isguest"
									  :promotevote.sync="promotevote"
									  :adr="isadr"
		                              :voteyue="ticket" 
		                              :tktype="tktype"
		                              :ismengzhu="ismengzhu"
		                              :bookname="bookname"
		                              :bookmothcnt="bookMonthCnt">
		</eject-mask>
	</div>
</template>
<script type="text/javascript">
    import database from './data';
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskLogin: require('../src/maskLogin.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskChat: require('../src/maskChat.vue'),
			ejectMask: require('../src/ejectMask.vue')
		},
		data:function(){
			return {
				loading:true,
				isadr:true,
				over:false,//活动结束
				login:false,//登录
				maskshow:false,
				voteshow:false,//投票弹框
				promotevote:false,//如何提升月票
				chatshow:false,
				hongdian:false,//红点
				columnId:'',//更多好书id
				username:'Feirang',//用户名
				userface:'../adr/public/images/userface.png',//用户头像
				shelfshow:false,//书架是否显示
				bookshelf:[],//书架书
				listbook:[],//榜单书
				ticket:2,//月票余额
				ismengzhu:false,//该书盟主
				bookMonthCnt:0,//书当前票数
				bookname:'',//投票书籍
				tktype:1,//弹框code
				num:0,
				timerok:true,
				isguest:false
			}
		},
		computed:{
			isadr:function(){
				let str=document.location.href;
				let substr='adr';
				let Adris;
				if( str.indexOf(substr) >= 0){
					Adris=true;
				}else{
					Adris=false;
				}
				return Adris;
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				
				if(self.isadr){
					Local.init();
				}
				forceLog(param("act_f"),'doubleMonthly');
				Local.reqaObj(server() + "pkg170403/init", function(data) {
					console.log(data);
					self.loading=false;
					if(data.code==-4){
						self.over=true;
					}
					self.login=data.isLogin;
					self.isguest=data.isguest;
					if(self.isguest){
						self.maskshow=true;
					}
					if(self.login){
						self.hongdian=data.hasread;
						self.username=data.usernick?data.usernick:"Hi";
						self.userface=data.usericon?data.usericon:"../adr/public/images/defaultface.png";
						self.columnId=data.columnId;
						self.bookshelf=data.shelf;
						self.listbook=data.columnBooks;
						self.ticket=data.ticket;
						var shelfLen=self.bookshelf.length;
						if(shelfLen>0){
							self.shelfshow=true;
						}else{
							self.shelfshow=false;
						}
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			//去更多好书
			gogoodbook:function(){
				var self=this;
				if(self.isadr){
					window.location.href='uniteqqreader://nativepage/rank/list?actionId='+self.columnId;
				}else{
					window.location.href='uniteqqreader://nativepage/discover/rank/list?rankId='+ self.columnId+'&rankTitle='+'原创风云榜';
				} 
			},//如何提升月票
			gopromote:function(){
				var self=this;
				self.maskshow=true;
				self.promotevote=true;
			},//弹信息弹框
			gochatlist:function(){
				forceLog(param("act_f"),"read");
				var self=this;
				Local.reqaObj(server()+"pkg170403/read", function(data) {
					self.hongdian=true;
					self.chatshow=true;
					if(self.timerok){
						self.$refs.child.$emit('chatscroll',self.num);
					}
				},[], function(){
					Local.showToast('网络异常，请稍候重试');
				},1);
				
			},//投票
			votes:function(booklist){
				forceLog(param("act_f"),"vote");
				var self=this;
			    self.bookname=booklist.title;
			    var bid=booklist.id;
			    if(self.ticket==0){
			    	self.maskshow=true;
			    	self.voteshow=true;
			    	self.tktype=-10000;
			    }else{
			    	Local.reqaObj(server()+"pkg170403/vote?bid="+bid, function(data) {
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
			godetail:function(bid,wz){
				forceLog(param("act_f"),wz+bid);
				ABook.gotoDetail(bid);
			},
			goall:function(){
				let self=this;
				forceLog(param("act_f"),"gojhy");
				if(self.isadr){
					forceLog(param("act_f"),"gojhy");
					Local.openPage('http://iyuedu.qq.com/event/act170410/index.html?act_f=170410');
				}else{
					forceLog(param("act_f"),"gojhy");
					Local.openInside('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
				}
			},
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>