<template>
	<div id="root">
		<div class="wrap">
			<div class="bammerbox">
				<div class="tt video">动画抢先看</div>
				<div class="videobox">
					<div class="vvbox">
						 <iframe frameborder="0" width="100%" height="100%" :src="videosrc" allowfullscreen></iframe>
					</div>
				</div>
				<ul class="videoselect">
					<li class="active" @click="videosel(vid[0],$event)">第一集</li>
					<li @click="videosel(vid[1],$event)">第二集</li>
				</ul>
				<div class="tt">动画追更不过瘾 原著看剧透</div>
				<div class="newbook">
					<div class="bookface" @click="gotoread()"></div>
					<div class="bookinfo">
						<h4>全职高手</h4>
						<p>叶秋，荣耀中的顶尖高手王者。带着对往昔的回忆和一把未完成的自制武器，走上重返巅峰之路！</p>
					</div>
				</div>
				<div class="btnbox">
					<a class="freeread" @click="gotoread()">原著限时免费读 ></a>
				</div>
				<div class="tt">赢取动画周边礼</div>
				<div class="sharebox">
					<a class="sharebtn" v-bind:class="{shareafter:shared}" @click="sharefn($event)">{{ shared?'分享给好友':'分享活动赢好礼'}} ></a>
					<p class="notice" v-show="!shared">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>
				</div>
				<div class="prizebox">
					<div class="prizebtn"></div>
					<a class="startprize" @click="prizedraw($event)"></a>
				</div>
				<div class="rules">
					<p>活动规则</p>
					<ul>
						<li><span>1.</span>活动时间：4月7日—4月10日</li>
						<li><span>2.</span>活动期间，全职高手全本限时免费4天，从客户端内分享页面还能获得一次抽奖机会</li>
						<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>
						<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>
						<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>
						<li><span>6.</span>分享至微博平台暂不支持参加抽奖活动</li>
						<li><span>7.</span>中实物奖励后<a @click="gocontact()">请认真填写地址</a>，将在15个工作日内寄出</li>
					</ul>
					<p class="copyright">本活动最终解释权归QQ阅读所有</p>
				</div>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-prize v-show="showprize" :show="showprize" :type="masktype" :prizety="prizeNum" :pname="prizename" :pinfo="prizeinfo" :pimg="prizeimg" :shareinfo="shareObj" ></mask-prize>
		<mask-over v-show="over"></mask-over>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskPrize: require('../src/MaskPrize.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				isLogin:true,//登录
				showprize:false,//抽奖弹框
				masktype:0,//
				bookbid:'478670',
				shared:true,//分享过
				isPrize:false,//抽过奖
				draw:true,
				prizeNum:0,//奖品
				prizename:['精美手办','钥匙扣','100成长值','50书券','帽子'],//名称
				prizeinfo:'',//使用规则
				prizeimg:['images/gshouban.png','images/gyaoshikou.png','images/gchengzz.png','images/gquan.png','images/gmaozi.png'],//奖品图片
				bkbid:'',
				progess:'dev',
				urlserver:'',
				shareObj:{
					url :"",
					cover :"",
					title : "全职高手动画首播",
					desc : "动画、手办、免费原著你要的这里都有！心怀荣耀，战无不胜！"
				},
				state: 'paused',
				loaded: false,
				ticked:'',
				videosrc:'https://v.qq.com/iframe/player.html?vid=x002353t5ih&tiny=0&auto=0',
				vid:['x002353t5ih','n002397drjl']
			}
		},
		methods: {
			initpage:function(){
				let self=this;
				Local.init();
				Local.reqaObj(server() + "pkg170306/init", function(data) {
					self.loading=false;
					console.log(data);
					if(data.code==-4){
						self.over=true;
					}
					self.isLogin=data.isLogin;
					self.shared=data.shared;
					self.isPrize=data.picked;
					self.reserved=data.reserved;
					self.ticked=encodeURIComponent(data.shareticket);
					self.shareObj.url=front()+"act170306/com/index.html?tf=1&z-tickt="+self.ticked;
					self.shareObj.cover=front()+"act170306/com/images/covers.jpg";
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),"qmdhindex");
			},
			videosel:function(vvd,e){
				let $cur = $(e.currentTarget);
				let self=this;
				let ind=$cur.index();
				self.videosrc="https://v.qq.com/iframe/player.html?vid="+vvd+"&tiny=0&auto=1";
				$cur.addClass('active').siblings().removeClass('active');
				forceLog(param("act_f"),"video");
			},
			gocontact:function(){
			    let self=this;
			    if(self.isLogin){
			    	Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
			    }else{
			    	Local.login();
			    }
			},
			gotoread:function(){
				let self=this;
				ABook.gotoRead(self.bookbid);
				forceLog(param("act_f"),"readdetail");
			},
			zhuan:function(obj,num){
				obj.css('-webkit-transform','rotate('+parseInt(1800+num*72)+'deg)');
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
								Local.reqaObj(server() + "pkg170306/pick", function(data) {
									if(data.code<0){
											Local.showToast(data.msg);
									}else{
										self.prizeNum=data.prizeid;
											self.masktype=0;
											self.zhuan($('.prizebtn'),self.prizeNum);
											timer=setTimeout(function(){
												self.showprize=true;
												self.isPrize=true;
												timer=null;
											}, 4000);
											if(self.prizeNum==0 || self.prizeNum==1 || self.prizeNum==4 ){
												self.prizeinfo="请认真填写地址，奖品将在15个工作日发出哦";
											}
											if(self.prizeNum==3){
												self.prizeinfo="书券/阅券仅限订阅书籍，订阅时将优先扣除，请在有效期内使用哦";
											}
											if(self.prizeNum==2){
												self.prizeinfo="成长值决定你的成长等级，等级越高可获奖励越多";
										}
									}
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
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
			sharefn:function(e){
				let self=this;
				let $cur = $(e.currentTarget);
				if(self.isLogin){//
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title,self.shareObj.desc, 1);
					forceLog(param("act_f"),"sharebtn");
				}else{
					Local.login();
				}
			},
			afterShared:function(){
				Local.reqaObj(server() + "pkg170306/sharesuccess", function(data) {
					self.shared=true;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			}
		},
		created:function(){
			//页面初始化
			let self=this;
	        self.initpage();
	        window.afterShare = function(){
	        	Local.reqaObj(server() + "pkg170306/sharesuccess", function(data) {
					self.shared=true;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
	        }
		}
	}
</script>
