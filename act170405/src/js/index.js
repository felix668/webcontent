var vm=new Vue({
	el:"#app",
	data:{
		plat:window.pt,
		quan:window.pt=="ios"?"阅券":"书券",
		loading:true,
		isLogin:false,
 		over:false,
 		mask:false,
 		tab:1,
 		readpack:{"weekReadTime":0,"exchangedBilling":0,"exchangeDetailList":[]},
 		curexchangedBilling:0,
 		time:[8,10,12,14,16,18,20,22],
 		timepack:{}
	},
 	created:function(){
 		this.readpinit();
 	},
 	mounted:function(){
 		this.datainit();
 		document.body.addEventListener("touchstart",function(){},false);
 	},
 	computed:{
 		flip(){
 			if(this.timepack.isRest && !this.timepack.getNum){
 				return false;
 			}else{
 				return true;
 			}
 		},
 		curTime(){
 			return this.time[this.timepack.point]+"点";
 		},
 		nextTime(){
			return this.curTime!=="22点"?parseInt(this.curTime)+2+"点":"8点";
 		},
 		totalNum(){
 			return this.timepack.totalRest?this.timepack.totalRest.split(''):'';
 		}
 	},
 	methods:{
 		datainit(){
			var self=this;
			if(process.env.NODE_ENV=="production"){			
				Local.reqaObj(common.server() + "pkg170405/init", function(data) {		
					if(data.code == -4){
					   self.loading=false;
	                   self.over = true;
	                   return;
	                }
	                self.tab=data.tab;
	                self.timepack=data.timepack;
	            	self.isLogin=data.isLogin;              
	                self.loading=false;
	                self.pageswiper();			
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);			
				Local.forceLog(common.param("act_f"),"HBpageinit");	
			}else{
				var data=require("./data1").data;
 				self.timepack=data.timepack;
	            self.tab=data.tab;
	            if(data.code == -4){
				   self.loading=false;
                   self.over = true;
                   return;
                }
				self.isLogin=true;              
	            self.loading=false;
	            self.pageswiper();	           
			}
 		},
 		readpinit(){
 			var self=this;
 			//获取阅读红包的数据
 			if(process.env.NODE_ENV=="production"){	
 				var server=self.plat=="ios"?"https://newcommon.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo?c_platform=ioswp":"http://common.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo";	
 				Local.reqaObj(server, function(data) {
					if(data.code==0){
						var weekExchangeInfo=data.weekExchangeInfo;
						self.readpack=weekExchangeInfo;
						self.readpack.icon=data.icon && !data.gsid ? data.icon : "images/default.png";
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);						
 			}else{
 				var data=require("./data").readpack;
	 			if(data.code==0){
					var weekExchangeInfo=data.weekExchangeInfo;
					self.readpack=weekExchangeInfo;
					self.readpack.icon=data.icon && data.guestcheckcode!=0 ? data.icon : "images/default.png";
				}
 			}			
		},
		pageswiper(){
			 var self=this;
			 var mySwiper = new Swiper('#swiper-container', {
 			 	initialSlide:self.tab==1 || common.param("picking") ? 1 : 0,
 			 	slidesPerView: 'auto',
 			 	pagination : '.swiper-pagination',
 			 	paginationClickable :true,
 			 	centeredSlides: true,
		    	resistanceRatio : 0.5,
		        onSlideChangeStart:function(swiper){
			        Local.forceLog(common.param("act_f"),"HBtab"+swiper.activeIndex);
			    }
		    });	 
		},
		gologin(n){
			if(n){
				Local.login(window.location.href+"&picking="+n);
			}else{
				Local.login();
			}		
		},
		getRpack(){
			if(!this.isLogin){
				this.gologin(1);			
				return;	
			}
			var self=this;
			//领取阅读红包
			if(process.env.NODE_ENV=="production"){
				var server=self.plat=="ios"?"https://newios.reader.qq.com/v6_3_7/weekReadTime/presentBillingV2":"http://adr.reader.qq.com/6_3_7/weekReadTime/presentBillingV2";
				Local.reqaObj(server, function(data) {
					if(data.code==0){						
						self.mask=true;					
						document.body.style.overflow="hidden";
						self.readpinit();
						self.curexchangedBilling=data.exchangedBilling;
					}else if(data.code < 0){
						Local.showToast(data.msg);
					}	
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				Local.forceLog(common.param("act_f"),"HBbtn2");
			}else{
				var data=require("./data").result;
				if(data.code==0){				
					self.mask=true;
					self.curexchangedBilling=data.exchangedBilling;
					document.body.style.overflow="hidden";
					self.readpinit();
				}else if(data.code < 0){
					Local.showToast(data.msg);
				}	
			}
		},
		hidemask(){
			this.mask=false;
			document.body.style.overflow="auto";
		},
		share(){
			var shareObj = {
				url :common.sharefront()+"act170405/com/index.html",
				cover :common.sharefront()+"act170405/com/images/cover.jpg",
				title: "我在QQ阅读抢红包，8000万红包等你来",
				desc: "全民阅读，全民有份，就差你一个"
			};
			Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title,shareObj.desc);
			Local.forceLog(common.param("act_f"),"HBshare");
		},
		backflip(){
			if(!this.isLogin){
				this.gologin();			
				return;	
			}
			var self=this;
			self.$refs.tpack.className="tpack flip";
			if(process.env.NODE_ENV=="production"){
				Local.reqaObj(common.server() + "pkg170405/pick", function(data) {		
					self.timepack.isRest=data.isRest;
					if(!data.isRest){return}
					self.timepack.getNum=data.getNum;		
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);			
				Local.forceLog(common.param("act_f"),"HBtbtn1");
			}else{
				var data=require("./data1").result;
				self.timepack.isRest=data.isRest;
				if(!data.isRest){return}
				self.timepack.getNum=data.getNum;
			}
		},
		goLink(){
			Local.forceLog(common.param("act_f"),"HBgojhy");
			Local.openInside(common.front()+"act170410/index.html?act_f=170410");
		},
		goOther(){
			Local.forceLog(common.param("act_f"),"HBgozk");
			Local.openInside(common.front()+"act170402/index.html?act_f=170402");
		}
	}
})
