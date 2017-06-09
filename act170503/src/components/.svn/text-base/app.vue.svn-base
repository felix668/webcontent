<template>
	<div id="root">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<img :src="plat=='ios'?'images/banner-ios.jpg' : 'images/banner.jpg'" alt="丛林狼新书" class="banner">
			<div class="box1">
				<img :src="plat=='ios'?'images/title1-ios.png' : 'images/title.png'" alt="看好书，抢书券" class="title">
				<div class="bookinfo" @click="goDetail(11414782,1)">
					<img :src="'images/cover.png'" alt="丛林狼新书" class="bcover">
					<div class="info">
						<h1>战神之王</h1>
						<p>李锐，一个牧民少年，因缘际会，被卷入战争漩涡，不得不奋起反抗，历经磨难，终于成为最神秘的李锐，一个牧民少年，因缘际会，被卷入战争漩涡，不得不奋起反抗，历经磨难，终于成为最神秘的</p>
					</div>					
				</div>
				<div class="btn b1" v-if="!page.inshelf" @click="addShelf"></div>
				<div class="btn b2" v-else @click="goRead(11414782,page.cid,$event)" id="b2"></div>
				<div class="card">
					<div class="tip" v-if="!page.inshelf">
						<img src="images/quan.jpg"/>
						<div class="text">加入书架并阅读到第二章<br>即可参与瓜分500000{{text}}</div>
					</div>
					<div class="ggk" id="ggk" v-if="page.inshelf">
						<template v-if="!page.tokenpicked">
							<img src="images/quan.jpg" class="hide" id="hide"/>
							<canvas id="card"></canvas>	
						</template>
						<div class="result">
							<p v-if="page.tokenpicked > 0 || getTicket > 0 ">
								恭喜您获得<strong>{{getTicket}}</strong>{{text}}
								<span>有效期至{{page.tokenendtime}}</span>
							</p>
							<p class="none" v-if="getTicket===-1">好遗憾，{{text}}已抢光</p>		
							<p class="none" v-if="getTicket===-2">你已参与过活动</p>		
						</div>
					</div>			
				</div>		
			</div>		
			<div class="box2">
				<img :src="'images/title2.png'" alt="围观丛林狼" class="title">
				<div class="vbox" @click="playv">
					<video src="media/voice.mp4" id="voice" data-first="true"></video>
					<img src="images/poster2.jpg" class="poster" id="poster">
					<i class="play" id="play"></i>
				</div>
			</div>	
			<div class="box3">
				<img :src="'images/title3.png'" alt="分享活动赢限免" class="title">
				<p v-if="!page.shared" class="intro">分享页面，点击“返回QQ阅读”，即可选择一本书籍限免</p>
				<p v-if="page.shared && page.bookpicked===false" class="intro">任选一本书，免费阅读2天</p>
				<div class="iscroll" id="iscroll">
					<ul id="iSlider" :class="['iSlider',{'shared':page.shared && page.bookpicked===false}]">
						<li v-for="(item,index) in booklist" :class="swiper.classList[index]"  @click="goDetail(item.bid,2,$event)">
							<img :src="item.cover" :alt="item.title">
						</li>
					</ul>	
					<ul class="bdesc" id="bdesc">
						<li v-for="(item,index) in booklist" :class="swiper.classList[index]"  @click="goDetail(item.bid,2)">
							<p class="bt">{{item.title}}</p>
							<p>
								{{item.desc}}
							</p>
						</li>
					</ul>		
				</div>
				<div class="btn b3" v-if="!page.shared" @click="share"></div>
				<div class="btn b4" v-if="page.shared && page.bookpicked===false" @click="selbook"></div>
				<div class="goRead" v-if="page.shared && page.bookpicked!==false">
					您已选择《{{booklist[page.bookpicked].title}}》，免费读至{{page.bookendtime}}，<span @click="goRead(booklist[page.bookpicked].bid,1)" id="b5">去阅读 ></span>
				</div>
			</div>
			<rule :plat="plat"></rule>
		</template>	
		<mask-over v-if="over"></mask-over>
		<mask-select v-if="mask" :isguest="page.guest"></mask-select>
	</div>
</template>
<script type="text/javascript">
	import FastClick from "../../js/fastclick.min";
	import "../css/index.scss";
	import maskLoad from "./load.vue";
	import maskOver from "./over.vue";
	import maskSelect from "./select.vue";
	import rule from "./rule.vue";
	export default {
		data:function(){
			return{
				plat:window.pt,
		 		loading:true,
		 		over:false,
		 		mask:false,		
		 		swiper:{autoLb:true,autoLbtime:2,timer:null,cur:0,classList:["li1","li2","li3"]},
		 		page:{},
		 		booklist:[
		 			{title:"最强兵王",bid:295037,cover:"images/book1.jpg",desc:"最强兵王，虎视群雄，为国而战，为民出鞘，只有站死，绝不跪生，无怨无悔！"},
		 			{title:"丛林战神",bid:651934,cover:"images/book3.jpg",desc:" 边境丛林，自家花园，都市丛林，亚马逊河，论丛林之战，谁与争锋？"},
		 			{title:"最强战神",bid:487449,cover:"images/book2.jpg",desc:"全面反击，掀开隐秘江湖的秘事，谱写出一段最强战神的传奇！"}
		 		],
		 		getTicket:false
			}
		},
		created:function(){ 
			this.init();		
	 	},
	 	mounted:function (){	 			
	 		FastClick.attach(document.body);
	 		this.afterShare();	
	 	},
	 	computed:{
	 		text(){
	 			return this.plat=="ios" ? "阅券" : "书券";
	 		}
	 	},
	 	methods:{
	 		init(){
	 			var self=this;			
	 			if (process.env.NODE_ENV === 'production') {
					Local.reqaObj(common.server() + "pkg170503/init", function(data) {  
						console.log("init:"+JSON.stringify(data));
						if(data.code==-4){
							self.loading=false;
							self.over=true;
							return;
						}
						self.page=data;	
						self.getTicket=data.tokenpicked;
						self.loading=false;
						$("body").css("background-image","url(images/bg.jpg)");
						if(!self.page.tokenpicked && self.page.inshelf){
							setTimeout(function(){
								self.cardinit();
							},400)
						}
						if(self.page.shared && self.page.bookpicked===false){						
							self.swiper.autoLb=false;
						}
						setTimeout(function(){							
							self.swiperinit();
						},400);	 									
					}, [], function() {				
						Local.showToast("网络异常，请稍候重试");
					}, 1);		
				}else{		
					var data = require("../js/data.js");
					if(data.code==-4){
						self.loading=false;
						self.over=true;
						return;
					}
					self.loading=false;
					self.getTicket=data.tokenpicked;
					$("body").css("background-image","url(images/bg.jpg)");
					self.page=data;
					if(!self.page.tokenpicked && self.page.inshelf){
						setTimeout(function(){
							self.cardinit();
						},400)
					}
					if(self.page.shared && self.page.bookpicked===false){						
						self.swiper.autoLb=false;
					}
					setTimeout(function(){							
						self.swiperinit();
					},400);	 		 		 			
				}														
	 		},	
	 		showmask(){
	 			this.mask=true;
	 			document.body.style.overflow="hidden";
	 		},		
			hidemask(){
				this.mask=false;
				document.body.style.overflow="auto";
			},	
			cardinit(){
				var self=this,quest=true;
				$("#hide").hide();
				var tScale=window.devicePixelRatio;
				var oC=document.getElementById('card');				
				oC.width=$('#ggk').width()*tScale;
				oC.height=$('#ggk').height()*tScale;
				var oLeft=$("#card").offset().left;
				var oTop=$("#card").offset().top;
				var gd=oC.getContext('2d');
				var blurlayer = new Image();
				var txt="刮"+self.text;
				blurlayer.onload=function(){
					gd.drawImage(blurlayer,0,0,oC.width,oC.height);
					gd.textAlign="center";
					gd.fillStyle="#6a4a24";
					gd.font=tScale * 36+"px microsoft yahei";
					gd.fillText(txt,oC.width/2,oC.height/2+10);
				}
				blurlayer.src=require("../images/quan.jpg");
				oC.addEventListener('touchstart',function(e){
					if(self.page.isguest){
						self.page.guest=true;
						self.showmask();
						return;
					}	
					if(quest){
						Local.reqaObj(common.server() + "pkg170503/picktoken", function(data) {  
							console.log("picktoken:"+JSON.stringify(data));
							if(data.code==-12){							
								Local.showToast("完成加书架并阅读2章的任务后才可刮奖");
								return;
							}
							quest=false;
							if(data.code==0){
								self.getTicket=data.number;
								self.page.tokenendtime=data.tokenendtime;
						 	}else if(data.code==-9){
						 		self.getTicket=-1;
						 	}else if(data.code==-10){
						 		self.getTicket=-2;
						 	}
						 	oC.addEventListener('touchmove',move,false);	
							oC.addEventListener('touchend',end,false);						
						}, [], function() {				
							Local.showToast("网络异常，请稍候重试");
						}, 1);						
					}
				})
				function move(e){	
					e.preventDefault();
					gd.globalCompositeOperation="destination-out";
					gd.beginPath();
					gd.fillStyle = "#ff0000";
					gd.arc((e.touches[0].pageX-oLeft)*tScale,(e.touches[0].pageY-oTop)*tScale,20*tScale,0, Math.PI*2);			
					gd.fill();
					gd.closePath();				
				};
				function end(e){
					e.preventDefault();
					var pixData = gd.getImageData(0, 0,oC.width,oC.height).data;
					var pixtotal = pixData.length;
					for (var i = 0,j = 0;i < pixtotal; i += 4) {
						if (pixData[i] == 0 && pixData[i + 1] == 0 && pixData[i + 2] == 0 && pixData[i + 3] == 0) {
							j++;
							if (j / (pixtotal/4) >= 0.3) {
								gd.clearRect(0, 0, oC.width,oC.height);						
								break;
							}
						}
					}
				}
			},
			swiperinit(){
				var autoLb = this.swiper.autoLb;
				var autoLbtime = this.swiper.autoLbtime;
				var slideNub;
				var bookinfo=$("#bdesc");
				slideNub = $("#iSlider li").size();
				var self=this;
				//自动轮播
				if(autoLb){
					self.swiper.timer=setInterval(function(){
						right();
					}, autoLbtime*1000);
				}
				touch();
				function right(){
					var fy = new Array();
					for(var i=0;i<slideNub;i++){
						fy[i]=$("#iSlider li").eq(i).attr("class");
					}
					for(var i=0;i<slideNub;i++){
						if(i==0){
							$("#iSlider li").eq(i).attr("class",fy[slideNub-1]);
							bookinfo.find("li").eq(i).attr("class",fy[slideNub-1]);
						}else{
						   $("#iSlider li").eq(i).attr("class",fy[i-1]); 
						   bookinfo.find("li").eq(i).attr("class",fy[i-1]); 
						}
					}
					$("#iSlider li").css("zIndex","2");
					$("#iSlider .li2").css("zIndex","3");
					$("#iSlider .li3").css("zIndex","1");

				}
				function left(){
					var fy = new Array();
					for(var i=0;i<slideNub;i++){
						fy[i]=$("#iSlider li").eq(i).attr("class");
					}
					for(var i=0;i<slideNub;i++){
						if(i==(slideNub-1)){
							$("#iSlider li").eq(i).attr("class",fy[0]);
							bookinfo.find("li").eq(i).attr("class",fy[0]);
						}else{
						    $("#iSlider li").eq(i).attr("class",fy[i+1]); 
						    bookinfo.find("li").eq(i).attr("class",fy[i+1]);
						}
					}
					$("#iSlider .li1").css("zIndex","1");
					$("#iSlider .li2").css("zIndex","3");
					$("#iSlider .li3").css("zIndex","2");
				}
				//触摸滑动模块
				function touch() {
					var _startX = 0, _startY = 0, _endX= 0, _endY= 0, _content = document.getElementById("iSlider");
					_content.addEventListener("touchstart", touchStart, false);
					 _content.addEventListener("touchmove", touchMove, false);
					_content.addEventListener("touchend", touchEnd, false);
					function touchStart(event) {
						var touch = event.targetTouches[0];
						_startX = touch.pageX;
						_startY = touch.pageY;
					}
					function touchMove(event) {
						var touch = event.targetTouches[0];
						_endX = (_startX - touch.pageX);
						_endY = (_startY - touch.pageY);
						if (Math.abs(_endX) > Math.abs(_endY)) {
							event.preventDefault();
						}
					}
				    function touchEnd(event) {
						if (_endX < -30 && _endX < _endY) {
							if(self.swiper.timer){
								window.clearInterval(self.swiper.timer);
								self.swiper.timer=null;
							}
							left();
							_endX=0;
							_endY=0;
						}else if(_endX > 30 && _endX > _endY){
							if(self.swiper.timer){
								window.clearInterval(self.swiper.timer);
								self.swiper.timer=null;
							}
							right();
							_endX=0;
							_endY=0;
						}
					}
				}
			},
			addShelf(){
				if(!this.page.isLogin){
					Local.login();
					return;
				}
				if(this.page.isguest){
					this.page.guest=true;
					this.showmask();
					return;
				}
				var self=this;
				Local.reqaObj(common.server() + "pkg170503/addbook", function(data) {
					self.page.inshelf=true;
					setTimeout(function(){
						self.cardinit();
					},400);
					if(self.plat=="adr"){
						Local.addToShelf(11414782);
					}else{
						Local.addToShelfBooks([{"bid":11414782,"title":"战神之王","intro":"战神之王","author":"丛林狼"}]);
					}
					console.log("addbook:"+JSON.stringify(data));
					self.goRead(11414782,self.page.cid);				
				})
				Local.forceLog(common.param("act_f"),"CLLaddShelf");
			},
			goRead(bid,cid,e){
				Local.goRead(bid,cid);
				if(e && e.target.id=="b2"){
					Local.forceLog(common.param("act_f"),"CLLgoRead1");
				}else if(e && e.target.id=="b5"){
					Local.forceLog(common.param("act_f"),"CLLgoRead2");
				}
			},
			goDetail(bid,pos,e){
				if(pos==2 && e && e.target.className!=="li2"){
					return;
				}	
				Local.goBookDetail(bid);
				Local.forceLog(common.param("act_f"),"CLLgoDetail"+pos);
			},
			share(){
				if(!this.page.isLogin){
					Local.login();
					return;
				}
				var self=this;
				if(self.swiper.timer){
					window.clearInterval(self.swiper.timer);
					self.swiper.timer=null;
				}
				var shareObj = {
					url: common.sharefront() + "act170503/share.html",
					cover:  common.sharefront() + "act170503/images/cover.jpg",
					title: "看丛林狼新书，拿"+self.text+"好礼",
					desc: "看新书，加书架，瓜分50w"+self.text
				};		
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc);						
				Local.forceLog(common.param("act_f"),"CLLshare");
			},
			afterShare(){
				var self=this;
				window.afterShare = function(url,success){
		 			Local.reqaObj(common.server() + "pkg170503/sharesuccess", function(data) { 
		 				console.log("sharesuccess:"+JSON.stringify(data));
						self.page.shared=true;							
					}, [], function() {				
						Local.showToast("网络异常，请稍候重试");
					}, 1);		
				}						
			},
			selbook(){
				var self=this;
				self.page.guest=false;
				self.showmask();
			},
			getFree(){
				var self=this;
				self.swiper.cur=$("#iSlider .li2").index();
				Local.reqaObj(common.server() + "pkg170503/pickbook?book="+self.swiper.cur,function(data) { 
					if(data.code==0){
						self.page.bookpicked=self.swiper.cur;
						self.page.bookendtime=data.bookendtime;
					}else{
						Local.showToast(data.msg);
					}
					self.hidemask();
					console.log("pick:"+JSON.stringify(data));
				 }, [], function() {				
				 		Local.showToast("网络异常，请稍候重试");
				 }, 1);
			},
			playv(){
				var video=$("#voice")[0];
				if(video.paused){
					video.play();
					$("#play").hide();
					$("#poster").hide();
					if(video.dataset.first=="true"){
						video.dataset.first=false;
						Local.forceLog(common.param("act_f"),"CLLvideo");
					}					
				}else{
					video.pause();
					$("#play").show();
				}
			}
	 	},
	 	components:{
	 		maskLoad,
	 		maskOver,
	 		maskSelect,
	 		rule
	 	}
	};	
</script>	