var page=new Vue({
	el:"body",
	data:{
		ipage:0,
		iNow:0,
		ismove:true,
		pagemove:true,
		books:bookdata,
		cur:bookdata[0],
		next:[],
		bdtitle:bdtitle,
		sharelist:sharelist,
		seeall:false,
		over:false,
		totalFreeNumber:"",
		nick:"",
		mask:false,
		myScroll:null
	},
	ready:function (){
		this.init();
		this.scencut();
		this.boxswiper();
		this.boxmove();
		var myScroll2 = new IScroll('#udbox', {freeScroll: true,click:true});
	},
	methods:{
		init:function(){
			var self=this;
			$.ajax({
				"url":"https://event.reader.qq.com/andmain/pkg161206/shareInit?uid="+param("uid")+"&lt="+param("lt"),
				type:"GET",
				success:function(data){	
					var data=JSON.parse(data);
					if(data.code==-4){
                   		self.over = true;
	                }else if(data.code==1){
	                	self.totalFreeNumber=data.totalFreeNumber;
	                	self.nick=data.userNick || "游客";	                	
	                }		               	                
				}	
			});
			forceLog("161206",env.pt+"shareInit");
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
								forceLog("161206",env.pt+"page"+self.ipage);  
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
			forceLog("161206",env.pt+"box"+self.iNow); 
		},
		scencut:function (){
			var self=this;
			$("#loadani").on("webkitAnimationEnd",function (){
				$(".loadpage").css("z-index",0);
				forceLog("161206",env.pt+"page0");  
			}) 		
			var sw=$(window).width();
			$('.pagelist').css({"-webkit-transform":"translate3d("+-self.ipage*sw+"px,0,0)","transform":"translate3d("+-self.ipage*sw+"px,0,0)"});
			$(".pagelist").on("touchstart",function (ev){
				if(self.pagemove){
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
			        		self.scenmove(sw);		        		 					   				             					             			             	    	      
			            }else if(offsetX <- 30){//右		        		
			        		if(self.ipage==2){
			            		return;
			            	}
			            	if(self.ipage<2){
			        			self.ipage++;        			
			        		}	
			        		self.scenmove(sw);          					 					 														 					
			            }	       
			            $('.pagelist').off('touchmove touchend');
			            
			        })
			   	}
			}) 
		},
		scenmove:function(sw){
			$('.pagelist').css({"-webkit-transform":"translate3d("+-this.ipage*sw+"px,0,0)","transform":"translate3d("+-this.ipage*sw+"px,0,0)"});
			$('.pagelist>div').eq(this.ipage).addClass("active").siblings().removeClass("active");
			this.pagemove=false;
			var self=this;
			setTimeout(function(){
            	self.pagemove=true;
            },500)
            if(self.ipage==3){return;}
			forceLog("161206",env.pt+"page"+self.ipage);  
		},
		all:function(){
			this.seeall=true;
			$(".mask").attr("class","mask showmask");
			var self=this;	
			self.ismove=false;				
			setTimeout(function(){
				//if(!self.myScroll){
					self.myScroll = new IScroll('#wrapper', {freeScroll: true,click:true});	
				//}						
			},500)
			forceLog("161206",env.pt+"ALLbtn");
		},
		hideall:function(){
			var self=this;
			$(".mask").attr("class","mask hidemask");
			self.ismove=true;
			if(self.myScroll){
				self.myScroll.destroy(); 
			}
			setTimeout(function(){
				self.seeall=false;
			},300)
		},
		showbd:function(indx){
			var sw=$(window).width();
			this.iNow=indx;
			this.cur=this.books[this.iNow];	
			this.next=this.books[this.iNow];
			this.ipage=2;
			$("#box").css("-webkit-transition","all 0s");
			this.boxmove();
			$('.pagelist').css({"-webkit-transform":"translate3d("+-this.ipage*sw+"px,0,0)","transform":"translate3d("+-this.ipage*sw+"px,0,0)"});
			$('.pagelist>div').eq(this.ipage).addClass("active").siblings().removeClass("active");
			setTimeout(function(){
				$("#box").css("-webkit-transition","all 1s");
			},1000) 
			forceLog("161206",env.pt+"listClick");
			forceLog("161206",env.pt+"page"+this.ipage); 
		},
		goDetail:function(bid){
			var self=this;
			S.open(function(installStat,plat){
				if(installStat == -2){//浏览器
					if(self.over){
						N.toBookDetail(bid);
					}else{	
						if(env.pt=="adr"){
							N.openPage("http://iyuedu.qq.com/event/act161206/adr/index.html");			
						}else{
							N.openPage("https://yuedu.reader.qq.com/event/act161206/ios/index.html");				
						}
					}
					self.showmask();
				}else if(installStat){//已安装
					if(self.over){
						N.toBookDetail(bid);
					}else{	
						if(env.pt=="adr"){
							N.openPage("http://iyuedu.qq.com/event/act161206/adr/index.html");			
						}else{
							N.openPage("https://yuedu.reader.qq.com/event/act161206/ios/index.html");				
						}
					}
					if(env.vw=="wx"){
						self.showmask();
					}
				}else{			
					self.showmask();
				}
			})
			if(bid==1){
				forceLog("161206",env.pt+"openBtn");
			}
		},
		showmask:function(){
			 var self=this;
			 setTimeout(function(){
				self.mask=true;
			},2000);
		},
		hidemask:function(){
			this.mask=false;
		},
		dload:function(){
			N.downLoad(null, '10024407');
			this.hidemask();
		}
	}
});
//share
window.initSNS=function(){
	var shareobj={
		"cover" : front()+"act161206/com/images/cover2.jpg",
		"url" : window.location.href,
		"title" : "偷偷告诉你",
		"desc" : "这个不正经榜单，还附赠￥46.45的小福利…"
	};
	S.share(shareobj);
}