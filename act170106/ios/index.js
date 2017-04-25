var vm=new Vue({
	el:"#root",
 	data:{
 		startinit:{"open":false,"canopen":false,"showstart":true},
 		doublepack:{"multiplier":1,"geted":false,"base":"1","count":"1","empty":false},
 		readpack:{"weekreadtime":0,"exchangedBilling":0,"exchangelist":[],"curexchangedBilling":0},
 		pointpack:{time:-1,timelist:["10:00","14:00","18:00","22:00"]},//整点时间段状态
 		loading:true,
 		isLogin:false,
 		over:false,
 		tab:1,//是否开始 1未开始 2开始
 		daynum:1, //活动第几天
 		mask:false,//领取成功弹窗
 		rule:false
 	},
 	created:function(){
 		this.datainit();
 		this.readpinit();
 	},
 	mounted:function (){	
 		this.share();	
 		// var rulescroll=new IScroll('#rulebox');
 		var ruleswiper = new Swiper('#rulebox', {
	        // scrollbar: '.swiper-scrollbar',
	        direction: 'vertical',
	        slidesPerView: 'auto',
	        mousewheelControl: true,
	        freeMode: true
	    });
 	},
 	methods:{
 		datainit:function(){
			var self=this;
			//获取翻倍红包和其他页面相关的数据
			Local.reqaObj(common.server() + "pkg170105/init?day="+common.param("day"), function(data) {		
				if(data.code == -4){
				   self.loading=false;
                   self.over = true;
                   return;
                }
            	self.isLogin=data.isLogin;
            	//检测是否拆过红包
				if(data.entered){ 
                	self.startinit.showstart=false; 
                	self.startinit.open=true; 
                }       
                if(data.code == 0){            
                	self.tab=data.tab;
					self.daynum=data.dayNum;
					self.pointpack.time=data.timepoint;
					self.doublepack.empty=data.empty;
                	self.doublepack.multiplier=data.current_multiplier;
                	self.doublepack.geted=data.claimedToday;
                	// self.doublepack.geted=false;                		               	
                }
                if(data.claimedToday){
                	self.doublepack.base=data.base+"";
                	self.doublepack.count=data.count+"";
                }
                self.loading=false;
                self.pageinit();			
			}, [], function() {
				self.loading=false;
				self.pageinit();
				Local.showToast("网络异常，请稍候重试");
			}, 1);			
			Local.forceLog(common.param("act_f"),"HBpageinit");	
 		},
 		readpinit:function(){
 			var self=this;
 			//获取阅读红包的数据
			Local.reqaObj(common.server()+"pkg170105/getWeekReadTimeNew", function(data) {
				if(data.code==0){
					self.readpack.icon=data.icon && data.guestcheckcode!=0 ? data.icon : "images/default.png";
					var weekExchangeInfo=data.weekExchangeInfo;
					self.readpack.critIndex=weekExchangeInfo.critIndex;
					self.readpack.weekreadtime=weekExchangeInfo.weekReadTime;
					self.readpack.critRange=weekExchangeInfo.critRange;
					self.readpack.critNum=weekExchangeInfo.critNum || 0;
					self.readpack.exchangelist=weekExchangeInfo.exchangeDetailList;
					self.readpack.exchangedBilling=weekExchangeInfo.exchangedBilling;
					self.readpack.canExchangeBilling=weekExchangeInfo.canExchangeBilling;
					self.readpack.needReadTime=weekExchangeInfo.needReadTime;
					self.readpack.hasFinishExchange=weekExchangeInfo.hasFinishExchange;
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
 		},
 		pageinit:function(){			
			this.boxswiper();
 			this.pageswiper();
 			var self=this;
 			setTimeout(function(){
 				self.startinit.canopen=true;
 			},2500) 		
 			FastClick.attach(document.body);			
 		},
 		openpack:function(){
 			if(this.startinit.canopen){
				this.startinit.open=true;
				Local.reqaObj(common.server() + "pkg170105/unpack", function(data) {
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
 			}			
 		},
 		boxswiper:function(){
 			 var self=this;
 			 var mySwiper = new Swiper('#swiper-container', {
 			 	initialSlide:self.daynum-1,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        speed:600,
		        onSlideChangeStart:function(swiper, event){
		        	if(MtaH5){
		        		MtaH5.clickStat('picswiper',{'num':swiper.activeIndex+1});
		        	}		        	
		        }
		    });
			document.querySelector('#arrow-left').onclick=function(e){
			     mySwiper.slidePrev();
			}
			document.querySelector('#arrow-right').onclick=function(e){
			     mySwiper.slideNext();
			}
		},
		pageswiper:function(){
			 var self=this;
			 var mySwiper2 = new Swiper('#page-container', {
 			 	initialSlide:self.tab==2 && !common.param("picking")?0:1,
 			 	pagination : '.swiper-pagination',
 			 	paginationClickable :true,
		        centeredSlides: true,
		        resistanceRatio : 0.5
		    });
			self.tabclicktj(); 
		},
		gologin:function(n){
			if(n){
				Local.login(window.location.href+"&picking="+n);
			}else{
				Local.login();
			}		
		},
		getDpack:function(){
			if(!this.isLogin){
				this.gologin();
				return;
			}
			var self=this;
			//领取翻倍红包
			Local.reqaObj(common.server() + "pkg170105/pick?day="+common.param("day"), function(data) {
				if(data.code==0){
					self.doublepack.multiplier=data.current_multiplier;
					self.doublepack.base=data.base+"";
                	self.doublepack.count=data.count+"";
                	self.doublepack.geted=true;	
				}else if(data.code < 0){
					if(data.code==-1){
						self.doublepack.empty=true;
					}else{
						Local.showToast(data.msg);	
					}												
				}						
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			Local.forceLog(common.param("act_f"),"DPgetbtn");
			MtaH5.clickStat('btn0',{'plat':'ios'});
		},
		getRpack:function(){
			if(!this.isLogin){
				this.gologin(3);				
				return;
			}
			var self=this;
			//领取阅读红包
			Local.reqaObj("https://newios.reader.qq.com/v6_3_7/weekReadTime/presentBillingV2", function(data) {
				if(data.code==0){
					self.readpack.curexchangedBilling=data.exchangedBilling;
					self.mask=true;
					document.body.style.overflow="hidden";
					self.readpinit();
				}else if(data.code < 0){
					Local.showToast(data.msg);
				}	
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);	
			Local.forceLog(common.param("act_f"),"RPgetbtn");
			MtaH5.clickStat('btn1',{'plat':'ios'});
		},
		getPpack:function() {
			window.location.href="uniteqqreader://nativepage/redpacket/squarepage";
			var self=this;
			Local.forceLog(common.param("act_f"),"PPgetbtn_time"+self.pointpack.time);
			MtaH5.clickStat('btn2',{'plat':'ios'});
		},
		hidemask:function(){
			this.mask=false;
			this.rule=false;
			document.body.style.overflow="auto";
		},
		showrule:function(){
			this.rule=true;
			document.body.style.overflow="hidden";
		},
		share:function(){
			var shareObj = {
				url :common.front()+"act170106/com/index.html",
				cover :common.front()+"act170106/com/images/cover.jpg",
				title: "三重红包送不停",
				desc: "春节红包又出新玩法 今年就在QQ阅读"
			};
			Local.setIconForShareing(shareObj.url, shareObj.cover, shareObj.title,shareObj.desc);
		},
		tabclicktj:function(){
			var tablists=document.querySelectorAll(".swiper-pagination-bullet");
			for(var i=0;i<tablists.length;i++){
				(function(index){
					tablists[i].onclick=function() {
						Local.forceLog(common.param("act_f"),"tabbtn"+index);
						MtaH5.clickStat('tab'+index,{'plat':'ios'});
					}
				})(i)
			}	
		}
 	}	
});
window.afterShare = function(url,success){
	Local.forceLog(common.param("act_f"),"shareSuccess");
}