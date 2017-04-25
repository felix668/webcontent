var page=new Vue({
	el:"body",
 	data:{
 		ipage:param("picking") || 0,
		iNow:param("picking")?8:0,
 		ismove:true,
 		books:bookdata,
 		cur:bookdata[0],
 		next:[],
 		bdtitle:bdtitle,
 		sharelist:sharelist,
 		seeall:false, 		
 		over:false,
 		user:{isLogin:false,hasFree:true,shelf:false,uid:"",lt:""},
 		reload:false,
 		myScroll:null,
 		myScroll2:null
 	},
 	ready:function (){
 		this.init();
 		this.scencut();	
 		this.boxswiper();
 		this.boxmove();	 
 	},
 	methods:{
 		init:function(){
 			var self=this;
			Local.reqaObj(server() + "pkg161206/init", function(data) {
				console.log(data);
				if(data.code == -4){
                   self.over = true;
                }
                else if(data.code == -2){
                	self.user.isLogin=false;
                }
                else if(data.code == 1){
                	self.user.isLogin=true;
                	self.user.hasFree=data.hasFree;
                	self.user.shelf=data.hasAddShelf;
                	self.user.uid=data.uid;
                	self.user.lt=data.lt;  				
                }          
                self.reload=false;
                if(self.myScroll2){
					self.myScroll2.destroy(); 
				}						
                self.myScroll2 = new IScroll('#udbox', {freeScroll: true,click:true});    
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"BDpageinit");
 		},
 		boxswiper:function (ev) {
	 		var self=this;
	 		$('#blists').on('touchstart',function(ev){
				if(self.ismove){
				    touchStartX=ev.targetTouches[0].pageX;   
			        $('#blists').on('touchmove',function(ev){
			            ev.preventDefault();
			        })
			        $('#blists').on('touchend',function(ev){  
			            var offsetX=ev.changedTouches[0].pageX - touchStartX;
			            if(offsetX > 30){//左
							if(self.iNow%2==0){
			            		self.next=self.books[self.iNow-1];			            		
			            	}else{
			            		self.cur=self.books[self.iNow-1];	
			            	}
			            	self.iNow--;							
							if(self.iNow<0){
								self.iNow=0;
								self.ipage=1;
								return;							
							}	
							self.boxmove();		             				             					             			             	    	      
			            }else if(offsetX <- 30){//右
			            	if(self.iNow%2==0){
			            		self.next=self.books[self.iNow+1];			            		
			            	}else{
			            		self.cur=self.books[self.iNow+1];	
			            	}
							self.iNow++;						
							if(self.iNow>8){
								self.iNow=8;
								self.ipage=3;
								forceLog(param("act_f"),"page"+self.ipage); 
							}else{
								self.boxmove();
							}																								 					
			            }	       			            
			            $('#blists').off('touchmove touchend');
			        })
			    }
			})
 		},
	 	boxmove:function() {
	 		var change=[{color:"red",title:"title-red"},{color:"green",title:"title-green"},{color:"blue",title:"title-blue"}];
	 		var self=this;
	 		self.ismove=false;
	 		var theme=parseInt(self.iNow%3)<0?0:parseInt(self.iNow%3);
	 		$('#box').attr("class","box "+change[theme].color);
			$('#btop').attr("class","btop flip");	
	 		$('#title').attr("src","images/"+change[theme].title+".png");	 
			$('#box').css("-webkit-transform","translate3d(0,0,0) rotateX(-12deg) rotateY("+(-45-180*self.iNow)+"deg)"); 
			setTimeout(function () {
				self.ismove=true;
				$('#btop').attr("class","btop");	
			},500);  
			forceLog(param("act_f"),"box"+self.iNow); 
		},
		scencut:function (){
			var self=this;
			$("#loadani").on("webkitAnimationEnd",function (){
				$(".loadpage").css("z-index",0);
				forceLog(param("act_f"),"page0");  
			}) 
			$('.pagelist').css("-webkit-transform","translate3d("+-self.ipage*100+"%,0,0)");	
			$(".pagelist").on("touchstart",function (ev){
				touchStartX=ev.targetTouches[0].pageX;   
				$('.pagelist').on('touchmove',function(ev){
					if(self.ipage!==3){
						ev.preventDefault();
					}
				})
				$('.pagelist').on('touchend',function(ev){  
				  	var offsetX=ev.changedTouches[0].pageX - touchStartX;
		            if(offsetX > 30){//左
		            	if(self.ipage==3){
							if(offsetX<100){
								return;
							}						
						}
		            	if(self.ipage==2 && self.iNow>=0){
		            		return;
		            	}
		            	if(self.ipage==1 && self.iNow==0){
		            	}else{
		            		self.ipage--;
		            	}		            					
						if(self.ipage<0){
		        			self.ipage=0;
		        			return;
		        		} 
		        		self.scenmove();  		        						   				             					             			             	    	      
		            }else if(offsetX <- 30){//右
		            	if(self.ipage==2){
		            		return;
		            	}
		            	if(self.ipage<2){
		        			self.ipage++;
		        		}
		        		self.scenmove();  		 														 					
		            }	       
		            $('.pagelist').off('touchmove touchend');
		        })
			}) 
		},
		scenmove:function(){
			$('.pagelist').css("-webkit-transform","translate3d("+-this.ipage*100+"%,0,0)");  
		    $('.pagelist>div').eq(this.ipage).addClass("active").siblings().removeClass("active");
		    if(this.ipage==3){
            	return;
            }    
		    forceLog(param("act_f"),"page"+this.ipage); 
		},
		all:function(){
			this.seeall=true;
			$(".mask").attr("class","mask showmask");
			//$("#wrapper ul").css("-webkit-transform","translate(0px, 0px) translateZ(0px)");
			var self=this;
			if(self.myScroll){
				self.myScroll.destroy(); 
			}		
			setTimeout(function(){
				//if(!self.myScroll){
					self.myScroll = new IScroll('#wrapper', {freeScroll: true,click:true});	
				//}						
			},200)
			forceLog(param("act_f"),"ALLbtn");
		},
		hideall:function(){
			var self=this;
			$(".mask").attr("class","mask hidemask");
			setTimeout(function(){
				self.seeall=false;
			},300)
		},
		showbd:function(indx){
			this.iNow=indx;
			this.cur=this.books[this.iNow];	
			this.next=this.books[this.iNow];
			this.ipage=2;
			$("#box").css("-webkit-transition","all 0s");
			this.boxmove();
			$('.pagelist').css("-webkit-transform","translate3d("+-this.ipage*100+"%,0,0)"); 
			$('.pagelist>div').eq(this.ipage).addClass("active").siblings().removeClass("active");
			setTimeout(function(){
				$("#box").css("-webkit-transition","all 1s");
			},1000) 
			forceLog(param("act_f"),"listClick");
			forceLog(param("act_f"),"page"+this.ipage); 	
		},
		goDetail:function(bid){
			ABook.gotoDetail(bid);
		},
		sharepage:function(){
			if(!this.user.isLogin){
				setParam('picking',3);
				Local.login("https://yuedu.reader.qq.com/event/act161206/ios/index.html?picking=3");
			 	return;
			}
			var shareObj = {
				url :prefix()+ "act161206/com/index.html?uid="+this.user.uid+"&lt="+this.user.lt,
				cover :"https://yuedu.reader.qq.com/event/act161206/com/images/cover2.jpg",
				title: "偷偷告诉你",
				desc: "这个不正经榜单，还附赠￥46.45的小福利…"
			};
			Local.shareEventListen(shareObj.title, shareObj.desc, shareObj.cover,shareObj.url);
			Local.shareControl();
			if(this.hasFree){return;}
			Local.reqaObj(server() + "pkg161206/pick", function(data) {					
				if(data.code==1){
					//领取限免
				}else{
					Local.showToast(data.msg);
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			var self=this;
			setTimeout(function(){
				self.reload=true;
			},5000)
			forceLog(param("act_f"),"shareBtn");	
		},
		addshelf:function(){			
			var self=this;
			Local.reqaObj(server() + "pkg161206/addShelf", function(data) {						
				if(data.code==1){
					self.user.shelf=true;
				}else{
					Local.showToast(data.msg);
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"addShelfBtn");		
		},
		reloadpage:function(){
			this.init();
		}
 	}
});
window.afterShare = function(url,success){
	page.init();
	forceLog(param("act_f"),"shareSuccess");
}
