<template>
	<div id="root">
		<div class="wrap" v-show="login">
			<div class="topbox">
				<div class="sixyear"></div>
				<div :class="{ pageB:ispageB }">
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
			<div class="bookshelf" v-show="shelfshow">
				<div class="title">月票好书正在读</div>
				<ul class="booklist">
					<li v-for="books in bookshelf">
						<div class="bookface" @click="godetail(books.id,'shelf')">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.title }}</p>
						<p>{{ books.author }}</p>
						<a href="javascript:" class="votebtn" @click="votes(books)"><span>投1票</span></a>
					</li>
				</ul>
			</div>
			<div class="listbook">
				<div class="title">原创文学风云榜</div>
				<ul class="booklist">
					<li v-for="books in listbook">
						<div class="bookface" @click="godetail(books.id,'list')">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.title }}</p>
						<p>{{ books.author }}</p>
						<a href="javascript:" class="votebtn" @click="votes(books)"><span>投1票</span></a>
					</li>
				</ul>
			</div>
			<div class="morebook" @click="gogoodbook">更多好书 ></div>
			<div class="aboutvote">
				<img :src="'images/deng.png'" />
				<h4>活动规则</h4>
				<p><span>1.</span>活动时间：12月29日 00:00-2017年1月7日 23:59</p>
				<p><span>2.</span>活动期间投1张月票，作品翻倍计算！投2张，算4张！以此类推，打赏月票，同样翻倍！</p>
				<p><span>3.</span>投月票获得的积分、成长值不会翻倍</p>
				<a href="javascript:Local.openPage('help/help6.html')">更深入的了解月票 ></a>
				
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
		<eject-mask v-show="maskshow" :maskshow.sync="maskshow"
									  :voteshow.sync="voteshow"
									  :promotevote.sync="promotevote"
		                              :voteyue="ticket" 
		                              :tktype="tktype"
		                              :ismengzhu="ismengzhu"
		                              :bookname="bookname"
		                              :bookmothcnt="bookMonthCnt">
		</eject-mask>
	</div>
</template>
<script type="text/javascript">
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
				ispageB:false,//B线
				loading:true,
				over:false,//活动结束
				login:false,//登录
				maskshow:false,
				voteshow:false,//投票弹框
				promotevote:false,//如何提升月票
				chatshow:false,
				hongdian:false,//红点
				columnId:'',//更多好书id
				username:'Feirang',//用户名
				userface:'images/userface.png',//用户头像
				shelfshow:false,//书架是否显示
				bookshelf:[],//书架书
				listbook:[],//榜单书
				ticket:2,//月票余额
				ismengzhu:false,//该书盟主
				bookMonthCnt:0,//书当前票数
				bookname:'',//投票书籍
				tktype:11,//弹框code
				num:0,
				timerok:true
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				Local.init();
				Local.reqaObj(server() + "pkg161205new/init", function(data) {
					console.log(data);
					self.loading=false;
					if(param("page")==2){
						self.ispageB=true;
					}
					if(data.code==-3){
						self.over=true;
					}
					self.login=data.isLogin;
					if(self.login){
						self.hongdian=data.hasread;
						self.username=data.usernick;
						self.userface=data.usericon?data.usericon:"images/defaultface.png";
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
				forceLog(param("act_f"),'page'+param("page"));
			},//去更多好书
			gogoodbook:function(){
				var self=this;
				window.location.href='uniteqqreader://nativepage/rank/list?actionId='+self.columnId;
				console.log('uniteqqreader://nativepage/rank/list?actionId='+self.columnId);
			},//如何提升月票
			gopromote:function(){
				var self=this;
				self.maskshow=true;
				self.promotevote=true;
			},//弹信息弹框
			gochatlist:function(){
				var self=this;
				Local.reqaObj(server()+"pkg161205/read", function(data) {
					self.hongdian=true;
					self.chatshow=true;
					//self.num=0;
					if(self.timerok){
						self.$refs.child.$emit('chatscroll',self.num);
					}
					
				},[], function(){
					Local.showToast('网络异常，请稍候重试');
				},1);
				forceLog(param("act_f"),"read"+param("page"));
			},//投票
			votes:function(booklist){
				var self=this;
			    self.bookname=booklist.title;
			    var bid=booklist.id;
			    if(self.ticket==0){
			    	self.maskshow=true;
			    	self.voteshow=true;
			    }else{
			    	Local.reqaObj(server()+"pkg161205/vote?bid="+bid, function(data) {
						console.log(data);
						self.ismengzhu=data.ismengzhu; 
						self.bookMonthCnt=data.bookMonthCount;
						self.tktype=data.code;
						self.maskshow=true;
						self.voteshow=true;
					},[], function(){
						Local.showToast('网络异常，请稍候重试');
					},1);
			    }
			    forceLog(param("act_f"),"vote"+param("page"));
			},
			godetail:function(bid,wz){
				ABook.gotoDetail(bid);
				forceLog(param("act_f"),"gotobook"+param("page")+wz+bid);
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>