<template>
	<div id="root">
		<div class="wrap" v-show="!showjutou">
			<div class="bammerbox">
				<div class="tt">叶非夜新书4月10日正式发布</div>
				<div class="newbook">
					<div class="bookface"></div>
					<div class="bookinfo">
						<h4>大神引入怀：101个深吻</h4>
						<p>“一年后，我们离婚，互不干扰。”季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她......</p>
					</div>
				</div>
				<p class="notice">点击预约，新书上架后将自动加入您的书架</p>
				<div class="btnbox">
					<a class="spoiler" @click="jutou">免费抢先看剧透</a>
					<a class="appointment" v-bind:class="{ yiyuyue:reserved }" @click="yuyue($event)"><img :src="'images/icon_time.png'" /><i>{{reserved?'已预约':'立即预约'}}</i></a>
				</div>
				<div class="tt video">叶非夜想对你说</div>
				<div class="videobox">
					<div class="vvbox">
						<img :src="'images/vidwoimg.jpg'" @click="PLAY($event)" v-show=" state==='paused' "/>
						<video ref="video" src="images/1.mp4" preload="metadata" v-show=" state==='playing'">
							<source type="video/mp4">  
						</video>
						<div class="glass"  @click="PAUSE()" v-show=" state==='playing'||state==='paused' "  @ended="onPlayerEnded"></div>
					</div>
				</div>
				<div class="tt video">赢取新书见面礼</div>
				<div class="sharebox">
					<p class="notice" v-show="!shared">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>
					<a class="sharebtn" v-bind:class="{shareafter:shared}" @click="sharefn($event)"><img v-show="!shared" :src="'images/icon_prize.png'" />{{ shared?'分享给好友':'分享活动赢好礼'}} ></a>
				</div>
				<div class="prizebox">
					<div class="prizebtn"></div>
					<a class="startprize" @click="prizedraw($event)"></a>
				</div>

				<div class="rules">
					<p>活动规则</p>
					<ul>
						<li><span>1.</span>活动时间：4月6日—4月9日</li>
						<li><span>2.</span>活动期间从客户端内分享页面即可获得一次抽奖机会</li>
						<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>
						<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>
						<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>
						<li><span>6.</span>中实物奖励后<a @click="gocontact">请认真填写地址</a>，将在15个工作日内寄出</li>
					</ul>
					<p class="copyright">本活动最终解释权归QQ阅读所有</p>
				</div>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-prize v-show="showprize" :show="showprize" :type="masktype" :prizety="prizeNum" :pname="prizename" :pinfo="prizeinfo" :pimg="prizeimg" :shareinfo="shareObj" :sharherf="shareurl"></mask-prize>
		<mask-spoiler v-show="showjutou"></mask-spooler>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskSpoiler: require('../src/MaskSpoiler.vue'),
			maskPrize: require('../src/MaskPrize.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				isLogin:false,//登录
				isVip:false,
				reserved:false,//预约
				showjutou:false,//剧透弹框
				showprize:false,//抽奖弹框
				masktype:0,//
				draw:true,
				shared:false,//分享过
				isPrize:false,//抽过奖
				prizeNum:0,//奖品
				prizename:['出版签名书','限免书','50书券','漫画书','限免书','抱枕'],//名称
				prizeinfo:'',//使用规则
				prizeimg:['images/gbook.png','images/gpfreebook.png','images/gquan.png','images/gmanbook.png','images/gfreebook2.png','images/gbaoz.png'],//奖品图片
				bkbid:'',
				shareObj:{
					url :"https://yuedu.reader.qq.com/event/act170305/com/index.html?act_f=170406",
					cover :"https://yuedu.reader.qq.com/event/act170305/com/images/cover.jpg",
					title : "言情天后叶非夜送你一份好礼",
					desc : "新书剧透抢先看，实物周边等你拿！"
				},
				state: 'paused',
				loaded: false,
				ticked:'',
				shareurl:''
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
				Local.init();
				Local.reqaObj(server() + "pkg170305/init", function(data) {
					self.loading=false;
					if(data.code==-4){
						self.over=true;
					}
					self.isLogin=data.isLogin;
					self.shared=data.shared;
					self.isPrize=data.picked;
					self.reserved=data.reserved;
					self.ticked=encodeURIComponent(data.shareticket);
					self.shareurl=self.shareObj.url+"&z-tickt="+self.ticked;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),"yfyindex");
			},
			jutou:function(){
				window.scrollTo(0,0); 
				this.showjutou=true;
				forceLog(param('act_f'),'qiangxiankan');
			},
			gocontact:function(){
			    let self=this;
			    if(self.isLogin){
			    	Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
			    }else{
			    	Local.login();
			    }
			},
			yuyue:function(e){
				let self=this;
				let $cur = $(e.currentTarget);
				if(self.isLogin){
					if(self.reserved){
					}else{
						Local.reqaObj(server() + "pkg170305/reserve", function(data) {
							self.reserved=true;
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				}else{
					Local.login();
				}
				forceLog(param('act_f'),'yuyue');
			},
			zhuan:function(obj,num){
				obj.css('-webkit-transform','rotate('+parseInt(1800+num*60)+'deg)');
			},
			prizedraw:function(e){//
				let $cur = $(e.currentTarget);
				let self=this;
				let timer=null;
				if(self.isLogin){
					if(self.shared){//分享过
						if(self.isPrize){//领过奖
							self.masktype=-1;
							self.showprize=true;
						}else{//未领奖，请求奖品类型
							if(self.draw){
								self.draw=false;
								Local.reqaObj(server() + "pkg170305/pick", function(data) {
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
											self.isPrize=true;
											self.draw=true;
											timer=null;
										}, 4000);
										if(self.prizeNum==0 || self.prizeNum==3 || self.prizeNum==5 ){
											self.prizeinfo="请认真填写地址，奖品将在15个工作日发出哦";
										}
										if(self.prizeNum==2){
											self.prizeinfo="书券/阅券仅限订阅书籍，订阅时将优先扣除，请在有效期内使用哦";
										}
										if(self.prizeNum==1 || self.prizeNum==4){
											self.prizeinfo="您的限免书已经帮您加入书架，限免2天，快去阅读吧";
										}
									}
								}, [], function() {
										Local.showToast("网络异常，请稍候重试");
								}, 1);
								forceLog(param('act_f'),'choujiang');
							}
								
								
						}
					}else{//未分享
						self.masktype=-2;
						self.showprize=true;
					}
					
				}else{
					Local.login();
				}
			},
			PLAY:function(e){
				e.stopPropagation();
				var self = this;
				if( this.state === 'paused' ){
					self.state = 'playing';
					this.$refs.video.play();
				}
				forceLog(param('act_f'),'shiping');
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
				let $cur = $(e.currentTarget);
				if(self.isLogin){//
					Local.shareTopic(self.shareurl, self.shareObj.cover, self.shareObj.title,self.shareObj.desc, 1);

				}else{
					Local.login();
				}
				forceLog(param('act_f'),'fenxiangbtn');
			},
		},
		created:function(){
			//页面初始化
			let self=this;
	        self.initpage();
	        window.afterShare = function(){
			Local.reqaObj(server() + "pkg170305/sharesuccess", function(data) {
				self.shared=true;
			}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			}
		}
	}
</script>