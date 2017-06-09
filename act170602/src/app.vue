<template>
	<div id="root">
		<div class="wrap" v-show="!showjutou">
			<div class="bammerbox">
				<div class="tt">// 看新书 领{{ evnios || urlis=='ios'?"阅点":"书币"}} //</div>
				<div class="newbook">
					<div class="bookface" @click="godetail(bookinfo[0].bid)"></div>
					<div class="bookinfo">
						<h4>我是至尊</h4>
						<p>药不成丹只是毒；人不成神终成空！<br>天道有缺，人间不平；红尘世外，魍魉横行；哀尔不幸，恨而不争；规则之外，吾来执行。</p>
					</div>
				</div>
				<a class="addbtn" @click="gotoread(bookinfo[0].bid,cid)">{{ inshelf?'阅 读':urlis=='com'?'去QQ阅读看书':'加入书架去阅读'}}</a>
				<p class="recevieNotice">将《我是至尊》加入书架并阅读至第三章 <br>即可随机领取最高50{{ evnios || urlis=='ios'?"阅点":"书币"}}奖励</p>
				<a class="recevied" @click="receviedQuan" :class="{ nodisabel:tokenpicked==-1 || tokenpicked>0}"><img :src="'../adr/public/images/icon_quan.png'" />{{ tokenpicked>0 ?'已领取':tokenpicked==-1?'已抢光':'立即领取'}}</a>
				<div class="tt">// 风凌天下说新书 //</div>
				<div class="videobox">
					<div class="vvbox">
						<img :src="'../adr/public/images/vidwoimg.jpg'" @click="PLAY($event)" v-show=" state==='paused' "/>
						<video ref="video" src="../adr/public/images/2.mp4" preload="metadata" v-show=" state==='playing'">
							<source type="video/mp4">  
						</video>
						<div class="glass"  @click="PAUSE()" v-show=" state==='playing'||state==='paused' "  @ended="onPlayerEnded"></div>
					</div>
				</div>
				<div class="tt">// 分享活动赢好礼 //</div>
				<p class="shareNotice">首次分享活动可获一次抽奖机会</p>
				<div class="sharebox">
					<a class="sharebtn" @click="sharefn($event)">{{ urlis=='com'?'去QQ阅读赢好礼':'分享给好友'}}</a>
					<p class="notice" v-show="urlis!='com'">分享成功后点击“返回QQ阅读”可获得抽奖机会</p>
				</div>
				<div class="prizebox" v-bind:class="{ iosprize:evnios || urlis=='ios' }">
					<div class="prizebtn"></div>
					<a class="startprize" @click="prizedraw($event)"></a>
				</div>
				<div class="rules" v-show="urlis!='com'">
					<p>－活动规则－</p>
					<ul>
						<li><span>1.</span>活动时间：2017年6月9日-6月12日；</li>
						<li><span>2.</span>将《我是至尊》加入书架、阅读至第3章，即可在活动页面领取随机数值{{ evnios || urlis=='ios'?"阅点":"书币"}}；数量有限，先到先得，同一账号及设备仅限领取一次；</li>
						<li><span>3.</span>活动期间，分享活动页面，可获得一次抽奖机会；用户可多次分享，但仅限首次分享成功账户获得一次抽奖机会；</li>
						<li><span>4.</span>一个用户最多获得1次抽奖机会，同设备、账号计为同一用户；</li>
						<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会；</li>
						<li><span>6.</span>获得实物奖励将在30个工作日内寄出，请认真<a @click="gocontact">填写地址</a>。</li>
					</ul>
				</div>
				<p class="copyright"><img :src="'../adr/public/images/logo.png'"></p>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-prize v-show="showprize" :show="showprize" :type="masktype" :prizety="prizeNum" :pname="prizename" :pinfo="prizeinfo" :pimg="prizeimg" :shareinfo="shareObj" :plag="urlis"></mask-prize>
		<mask-recevie v-show="showrecevie" :show="showrecevie" :isshelf="inshelf" :retype="recevietype" :quannum="recevieNum" :book="bookinfo" :plag="urlis" :cid="cid"></mask-recevie>
		<mask-browes v-show="showbrowers"></mask-browes>
		<mask-download v-show="downshow" :show.sync="downshow"></mask-download>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskRecevie: require('./MaskRecevie.vue'),
			maskPrize: require('./MaskPrize.vue'),
			maskDownload:require('./MaskDownload.vue'),
			maskBrowes:require('./MaskBrowers.vue')
		},
		data:function(){
			return {
				loading:false,
				over:false,//活动结束
				isLogin:false,//登录
				isVip:false,
				urlis:'adr',
				inshelf:false,//是否加书架addshelf
				bookinfo:[{
					author: "风凌天下",
					title: "我是至尊",
					intro:"药不成丹只是毒；人不成神终成空！天道有缺，人间不平；红尘世外，魍魉横行；哀尔不幸，恨而不争；规则之外，吾来执行。",
					bid: "15986994"
				}],
				read:false,//是否阅读到第三章
				cid:1,//阅读章节数
				showrecevie:false,//领取弹框
				tokenpicked:0,//领取弹框类型-3未加书架并阅读至第三章，－1已抢光，－2同一设备或同一账号只能领取一次，0未领取
				recevieNum:0,//领取书币或阅点数
				showprize:false,//抽奖弹框
				masktype:0,//
				draw:true,
				shared:false,//分享过
				lotterypicked:false,//抽过奖
				prizeNum:0,//奖品
				prizename:['1000','实体出版书','20成长值','《傲世九重天》','QQ阅读公仔','《异世邪君》'],//名称
				prizeinfo:'',//使用规则
				prizeimg:['../adr/public/images/quan.png','../adr/public/images/book1.png','../adr/public/images/chengzhangzhi.png','../adr/public/images/book2.png','../adr/public/images/gongzai.png','../adr/public/images/book3.png'],//奖品图片
				shareObj:{
					url :"",
					cover :"",
					title : "玄幻宗师风凌天下",
					desc : "新书送好礼，百万书币/阅点等你拿！"
				},
				state: 'paused',
				loaded: false,
				ticked:'',
				isguest:false,//是否游客
				evnios:false,
				showbrowers:false,
				downshow:false,
				freebook:[]
			}
		},
		watch:{
			state: function(state){
				var self = this;
				switch (state) {
					case 'loading':
						this.$refs.video.load();
						this.$refs.video.addEventListener('pause',()=>{
							if( this.state==='playing' ){
								this.state = 'paused';
							}
						});

						this.$refs.video.addEventListener('loadeddata',()=>{
							self.loaded = true;
						});
						break;
					case 'ready':
						if( this.loaded ){
							this.$refs.video.pause();
							this.$refs.video.currentTime = 0;
						};
						break;
					case 'playing':
						self.$refs.video.play();
						break;
					case 'paused':
						this.$refs.video.pause();
						break;		
				}
			}
		},
		methods: {
			initpage:function(){
				let self=this;
				let u = navigator.userAgent;
    			let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    			if(isAndroid){
    				self.evnios=false;
    			}else{
    				self.evnios=true;
    			};
				self.urlis=document.querySelector('html').getAttribute('platform');
				if(self.urlis=='adr'){
					Local.init();
					self.shareObj.desc="新书送好礼，百万书币等你拿！";
				}else{
					self.shareObj.desc="新书送好礼，百万阅点等你拿！";
				}
				self.shareObj.url=front()+"act170602/com/index.html?tf=1&act_f=170609";
				self.shareObj.cover=front()+"act170602/adr/public/images/cover.jpg";
				if(self.urlis=='ios')
				
				console.log(self.shareObj.desc);
				Local.reqaObj(server() + "pkg170602/init", function(data) {
					console.log(data);
					self.loading=false;
					if(data.code==-4){
						self.over=true;
					}
					self.isLogin=data.isLogin;
					self.inshelf=data.inshelf;
					self.read=data.read;
					self.cid=data.cid;
					self.tokenpicked=data.tokenpicked;
					self.lotterypicked=data.lotterypicked;
					self.shared=data.shared;
					self.isguest=data.isguest;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),"FLTXindex");
			},
			godetail:function(bid){
				let self=this;
				if(self.urlis=="com"){
					self.gotoapp();
				}else{
					ABook.gotoDetail(bid);
					forceLog(param("act_f"),"FLTX_godetail");
				}
			},
			gotoread:function(bid,cid){
				let self=this;
				if(self.urlis=="com"){
					self.gotoapp();
				}else{
					if (self.isLogin) {
						if(self.isguest){
							self.showrecevie=true;
							self.recevietype=-4;
						}else{
							forceLog(param("act_f"),"FLTX_goread");
							if (self.inshelf) {
								Local.goRead(bid,cid);
							} else {
								console.log(bid);
								Local.reqaObj(server() + "pkg170602/addshelf", function(data) {
									console.log(data);
									if(self.urlis=="adr"){
										Local.addToShelf(self.bookinfo[0].bid);
										Local.goRead(bid,cid);
										self.inshelf=true;
									}else{//后台提供给你个接口，回调里再执行这个操作吧我提供给你个接口，回调里再执行这个操作吧
										Local.addToShelfBooks(JSON.stringify(self.bookinfo));
										Local.goRead(bid,cid);
										self.inshelf=true;
									}
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}
						}
						
					} else {
						Local.login();
					}
				}
			},
			receviedQuan:function(){
				let self=this;
				if(self.urlis=="com"){
					self.gotoapp();
				}else{
					if (self.isLogin) {
						if(self.isguest){
							self.showrecevie=true;
							self.recevietype=-4;
						}else{
								if(self.tokenpicked==0){
									Local.reqaObj(server() + "pkg170602/pick", function(data) {
										console.log(data);
										self.cid=data.cid;
										if(data.code==-9){
											self.showrecevie=true;
											self.recevietype=-1;
											self.tokenpicked=-1;
										}else if(data.code==-11){
											self.showrecevie=true;
											self.recevietype=-3;
										}else if(data.code==-10){
											self.showrecevie=true;
											self.recevietype=-2;
											self.tokenpicked=-2;
										}else if(data.code==0){
											self.showrecevie=true;
											self.recevietype=0;
											self.tokenpicked=data.number;
											self.recevieNum=data.number;
										}	
									}, [], function() {
										Local.showToast("网络异常，请稍候重试");
									}, 1);
								}else if( self.tokenpicked==-1 || self.tokenpicked==-2 ){
									self.showrecevie=true;
									self.recevietype=self.tokenpicked;
								}
						}
					} else {
						Local.login();
					}
				}
			},
			gocontact:function(){
			    let self=this;
			    if(self.isLogin){
			    	if(self.isguest){
						self.showrecevie = true;
						self.recevietype = -4;
					} else {
						if (self.urlis == 'adr') {
							Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
						} else {
							Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
						}
					}
			    	
			    }else{
			    	Local.login();
			    }
			},
			zhuan:function(obj,num){
				obj.css('-webkit-transform','rotate('+parseInt(1830+num*60)+'deg)');
			},
			prizedraw:function(e){//
				let $cur = $(e.currentTarget);
				let self=this;
				let timer=null;
				if(self.urlis=="com"){
					self.gotoapp();
				}else{
					if(self.isLogin){
						if(self.isguest){
							self.showrecevie=true;
							self.recevietype=-4;
						}else{
							if(self.shared){//分享过
								if(self.lotterypicked){//领过奖
									self.masktype=-1;
									self.showprize=true;
								}else{//未领奖，请求奖品类型
									if(self.draw){
										self.draw=false;
										Local.reqaObj(server() + "pkg170602/lottery", function(data) {
											console.log(data);
											if(data.code<0){
												Local.showToast(data.msg);
											}else{
												self.draw=false;
												self.prizeNum=data.prizeid;
												self.masktype=0;
												self.zhuan($('.prizebtn'),self.prizeNum);
												timer=setTimeout(function(){
													self.showprize=true;
													self.lotterypicked=true;
													self.draw=true;
													Local.reqaObj(server() + "pkg170602/addshelf", function(data) {
														console.log(data);
														if(self.urlis=="adr"){
															Local.addToShelf(self.freebook[0].bid);
															Local.goRead(self.freebook[0].bid,cid);
														}else{//后台提供给你个接口，回调里再执行这个操作吧我提供给你个接口，回调里再执行这个操作吧
															Local.addToShelfBooks(JSON.stringify(self.freebook));
															Local.goRead(self.freebook[0].bid,cid);
														}
													}, [], function() {
														Local.showToast("网络异常，请稍候重试");
													}, 1);
													//Local.addToShelfBooks((0, _stringify2.default)(self.freebook));
													timer=null;
												}, 4000);
												if(self.prizeNum==1 || self.prizeNum==4 ){
													self.prizeinfo="";
												}
												if(self.prizeNum==0){
													self.prizeinfo="";
												}
												if(self.prizeNum==2){
													self.prizeinfo="可以去我的等级查看";
												}
												if(self.prizeNum==3 || self.prizeNum==5){
													self.prizeinfo="限免两天，书已自动加入书架";
													if(self.prizeNum==3){
														self.freebook=[{
															author: "风凌天下",
															title: "傲世九重天",
															intro: "傲世九重天",
															bid: "462524"
														}]
													}else if(self.prizeNum==5){
														self.freebook=[{
															author: "异世邪君",
															title: "异世邪君",
															intro: "异世邪君",
															bid: "472518"
														}]
													}
												}
											}
										}, [], function() {
												Local.showToast("网络异常，请稍候重试");
										}, 1);
										// forceLog(param('act_f'),'choujiang');
									}	
								}
							}else{//未分享
								self.masktype=-2;
								self.showprize=true;
							}
						}
					}else{
						Local.login();
					}
				}
			},
			PLAY:function(e){
				forceLog(param("act_f"),"FLTX_video");
				e.stopPropagation();
				var self = this;
				if( this.state === 'paused' ){
					self.state = 'playing';
					this.$refs.video.play();
				}
			},
			PAUSE: function(){
				if( this.$refs.video.ended ){
					this.$refs.video.play();
				}else{
					this.state = 'paused';
				};
			},
			onPlayerEnded:function(){
				this.state = 'paused';
			},
			sharefn:function(e){
				let self=this;
				//let $cur = $(e.currentTarget);
				if(self.urlis=="com"){
					self.gotoapp();
				}else{
					if(self.isLogin){//
						if(self.isguest){
							self.showrecevie=true;
							self.recevietype=-4;
						}else{
						    Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title,self.shareObj.desc, 1);
						}
					}else{
						Local.login();
					}
					//forceLog(param('act_f'),'fenxiangbtn');
				}
			},
			gotoapp:function(){
				let self=this;
				S.open(function(installStat,plat){
						if(env.vw=='wb'){
							self.showbrowers=true;
						}else{
							if(installStat){
								if(env.pt=="adr"){
									N.openPage(front()+"act170602/adr/index.html?act_f=170609");
								}else if(env.vw=="wx" && env.pt=="ios"){
									N.openPage(front()+"act170602/ios/index.html?act_f=170609");
									// setTimeout(function(){
									// 	self.downshow=true;
									// }, 2000);
									// setTimeout(function(){
									// 	self.downshow=false;
									// }, 5000);
								}else{
									N.openPage(front()+"act170602/ios/index.html?act_f=170609");
								}
							}else{
									self.downshow=true;//显示下载弹窗
							}
						}
						//forceLog(param("act_f"),"170409_openBtn"+env.pt);
					});
			},
		},
		created:function(){
			//页面初始化
			let self=this;
	        self.initpage();
	        if(self.urlis!="com"){
	        	window.afterShare = function(){
				Local.reqaObj(server() + "pkg170602/share", function(data) {
					self.shared=true;
				}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
	        };

		}
	}

	window.initSNS = function(){
		var text = env.pt == "ios" ? "新书送好礼，百万阅点等你拿！" : "新书送好礼，百万书币等你拿！";
		var shareobj={
			cover :front()+ "act170602/adr/public/images/cover.jpg",
			url : window.location.href,
			title: "玄幻宗师风凌天下",
			desc: text
		};
		S.share(shareobj);
	}
</script>