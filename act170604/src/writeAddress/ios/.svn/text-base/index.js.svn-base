var app = new Vue({
	el: 'body',
	data: {
		isLogin:true,
		over:false,
		banner:param("id")==undefined?true:false,
		start:false,
		mask:false,
		link:false,
		mtitle:"",
		mtip:"",
		pname:"",
		psrc:"images/giftp.png",
		ptip:"",
		movie:false,
		ticketPwd:"",
		ticketId:"",
		packclick:true,
		cjclick:true
	},
	ready: function(){
		this.initpage();
	},
	methods:{
		initpage:function(){
			var self=this;
			Local.reqaObj(server() + "pkg160903/init", function(data) {
				if(data.code==-4){
                	//活动已结束
                    self.over=true;
                }
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"KBinit");
		},
		getTicket:function() {
			if(this.packclick){
				this.packclick=false;
			}else{
				return;
			}
			var self=this;
			Local.reqaObj(server() + "pkg160903/pick?"+(param("id") ? "id=" + param("id") : "")+(param("rd") ? "&rd=" + param("rd") : "")+(param("sc") ? "&sc=" + param("sc") : ""), function(data) {
				self.link=false;
				self.mask=true;
				if(data.openId==-1){
					self.mtitle="领取失败";
					self.mtip="您没有参与摇一摇活动，不能领取阅券";
				}else if(data.code==1){
					self.mtitle="领取成功";
					self.mtip="200阅券将于30分钟内到账，请及时查收";
				}else if(data.code==-2){
					self.mask=false;
					Local.login();
				}else if(data.code==-1){
					self.mtitle="阅券已被领完";
					self.mtip="阅券已被领完，快去抽奖吧";
				}else if(data.code==-3){
					self.mtitle="已领取过";
					self.mtip="您已经领取过啦！ ";
				}else if(data.code==-4){
					self.mask=false;
					self.over=true;
				}else if(data.code==-8 && data.openId==0){
					self.mtitle="领取失败";
					self.mtip="第一次安装QQ阅读的用户才可以领取哦，敬请期待下次活动";
				}
				self.packclick=true;
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"KBticketbtn");
		},
		closemask:function(){
			this.mask=false;
			this.link=false;
			this.cjclick=true;
		},
		cjgame:function() {
			if(this.cjclick){
				this.cjclick=false;
			}else{
				return;
			}
			var self=this;
			Local.reqaObj(server() + "pkg160903/doLottery?"+(param("id") ? "id=" + param("id") : "")+(param("rd") ? "&rd=" + param("rd") : "")+(param("sc") ? "&sc=" + param("sc") : ""), function(data) {
				self.link=false;
				if(data.openId==-1){
					self.mask=true;
					self.mtitle="抽奖失败";
					self.mtip="您没有参与摇一摇活动，不能领取阅券";
				}else if(data.code==1){
					self.startrun(data.prizeId);
				}else if(data.code==-2){
					Local.login();
					self.cjclick=true;
				}else if(data.code==-3){
					self.mask=true;
					self.mtitle="已抽过奖";
					self.mtip="您已经抽过奖啦";
				}else if(data.code==-4){
					self.over=true;
				}else if(data.code==-8 && data.openId==0){
					self.mask=true;
					self.mtitle="抽奖失败";
					self.mtip="第一次安装QQ阅读的用户才可以领取哦，敬请期待下次活动";
				}
			}, [], function() {
			 	//Local.showToast("网络异常，请稍候重试");
			 	self.startrun(3);
			}, 1);
			forceLog(param("act_f"),"KBplaybtn");
		},
		startrun:function(ids) {
			this.start=true;
			var n=Math.random()*100>50?true:false;
			var self=this,angles=0;
			if(ids.prizeId==1){
				self.movie=false;
				self.pname="《爵迹》签名照";
				self.ptip="务必填写正确的联系方式，方便客服与你联系";
				self.psrc="images/giftp.png";
				angles =n?1320:1440;
			}else if(ids.prizeId==2){
				self.pname="《爵迹》电影票";
				self.ptip="登录格瓦拉进行兑换";
				self.ticketId=ids.ticketId;
				self.ticketPwd=ids.ticketPwd;
				self.psrc="images/gift2.png";
				angles =n?1260:1500;
			}else{
				self.mtitle="谢谢参与";
				self.mtip="真遗憾，离中奖只差一步之遥";
				angles = n?1200:1380;
			}
			$("#arrow").css('-webkit-transform', 'rotate(' + angles + 'deg)');
			$("#arrow").on('webkitTransitionEnd', function() {	
				self.start=false;
				self.mask=true;				
				if(ids.prizeId==1){
					self.link=true;
				}else if(ids.prizeId==2){
					self.link=true;
					self.movie=true;
				}
			})
		},
		myprize:function() {
			if(this.isLogin==false){
				Local.login();
			}else{
				Local.go('prize.html');
			}
		},
		share:function(){
			var shareObj = {
				url : prefix()
						+ "act160903/com/share.html",
				cover : prefix()+"act160903/com/images/share.jpg",
				title : "大奖抽不停",
				desc : "快来一起领QQ阅读红包爵迹电影票和签名照"
			};
			Local.shareEventListen(shareObj.title, shareObj.desc, shareObj.cover,shareObj.url);
			Local.shareControl();
			forceLog(param("act_f"),"KBsharebtn");
		}
	}
})
