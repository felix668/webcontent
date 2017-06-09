<template>
	<div id="root">
		<mask-load v-if="loading"></mask-load>
		<img :src="plat=='ios'?'images/banner-ios.jpg' : 'images/banner.jpg'" alt="丛林狼新书" class="banner" @load="loadover">
		<div class="box1">
			<img :src="plat=='ios'?'images/title1-ios.png' : 'images/title.png'" alt="看好书，抢书券" class="title">
			<div class="bookinfo" @click="isHasApp">
				<img :src="'images/cover.png'" alt="丛林狼新书" class="bcover">
				<div class="info">
					<h1>战神之王</h1>
					<p>李锐，一个牧民少年，因缘际会，被卷入战争漩涡，不得不奋起反抗，历经磨难，终于成为最神秘的李锐，一个牧民少年，因缘际会，被卷入战争漩涡，不得不奋起反抗，历经磨难，终于成为最神秘的</p>
				</div>					
			</div>
			<div class="btn b1" @click="isHasApp"></div>
			<div class="card">
				<div class="tip">
					<img src="images/quan.jpg"/>
					<div class="text">加入书架并阅读到第二章<br>即可参与瓜分500000书券</div>
				</div>			
			</div>		
		</div>		
		<div class="box2">
			<img :src="'images/title2.png'" alt="围观丛林狼" class="title">
			<div class="vbox" @click="playv">
				<video src="media/v.mp4" id="voice" data-first="true"></video>
				<img src="images/poster.jpg" class="poster" id="poster">
				<i class="play" id="play"></i>
			</div>
		</div>	
		<div class="box3">
			<img :src="'images/title3.png'" alt="分享活动赢限免" class="title">
			<p class="intro">分享页面，点击“返回QQ阅读”，即可获得丛林狼限免书</p>
			<ul id="iSlider" class="iSlider">
				<li v-for="(item,index) in booklist" :class="swiper.classList[index]"  @click="isHasApp">
					<img :src="item.cover" :alt="item.title">
				</li>
			</ul>	
			<ul class="bdesc" id="bdesc">
				<li v-for="(item,index) in booklist" :class="swiper.classList[index]"  @click="isHasApp">
					<p class="bt">{{item.title}}</p>
					<p>
						{{item.desc}}
					</p>
				</li>
			</ul>		
			<div class="btn b5" @click="isHasApp($event)" id="qqbtn"></div>
		</div>
		<rule :plat="plat"></rule>
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
	</div>
</template>
<script type="text/javascript">
	import FastClick from "../../js/fastclick.min";
	import "../../src/css/index.scss";
	import maskLoad from "../../src/components/load.vue";
	import rule from "../../src/components/rule.vue";
	import maskWb from "./weibo.vue";
	import appLoad from "./appload.vue";
	export default {
		data:function(){
			return{
				loading:true,
		 		loadmask:false,
		 		plat:env.pt,
		 		wb:false,
		 		swiper:{autoLb:true,autoLbtime:4,timer:null,cur:0,classList:["li1","li2","li3"]},
		 		booklist:[
		 			{title:"最强兵王",bid:295037,cover:"images/book1.jpg",desc:"最强兵王，虎视群雄，为国而战，为民出鞘，只有站死，绝不跪生，无怨无悔！"},
		 			{title:"丛林战神",bid:651934,cover:"images/book3.jpg",desc:" 边境丛林，自家花园，都市丛林，亚马逊河，论丛林之战，谁与争锋？"},
		 			{title:"最强战神",bid:487449,cover:"images/book2.jpg",desc:"全面反击，掀开隐秘江湖的秘事，谱写出一段最强战神的传奇！"}
		 		]
			}
		},
		created:function(){ 
				
	 	},
	 	mounted:function (){	 			
	 		FastClick.attach(document.body);
	 		var self=this;
	 		setTimeout(function(){
	 			self.swiperinit();
	 		},1000)	
	 		forceLog("cll","CLLshareinit");
	 	},
	 	methods:{	
	 		loadover(){
	 			this.loading=false;
	 			$("body").css("background-image","url(images/bg.jpg)");
	 		},
			isHasApp(e){
				if(e && e.target.id=="qqbtn"){
					clearInterval(this.swiper.timer);
					forceLog("cll","CLLQQbtn");
				}else{
					forceLog("cll","CLLopenBtn");	
				}
	 			if(env.vw=="wb"){
	 				this.wb=true;
	 				return;
	 			}
	 			//走判断流程
	 			var self=this;
				S.open(function(installStat,plat){
					if(installStat == -2){//浏览器						
						N.openPage(pageurl("act170503/index.html?act_f=170503"));			
						self.showmask();
					}else if(installStat){//已安装			
						N.openPage(pageurl("act170503/index.html?act_f=170503"));	
						// if(env.vw=="wx"){
						// 	self.showmask();
						// }
					}else{			
						self.showmask();
					}
				})					
 			},
	 		showmask(){
	 			var self=this;
				 setTimeout(function(){
					self.loadmask=true;
				},2000);
	 		},
			swiperinit(){
				var autoLbtime = this.swiper.autoLbtime;
				var slideNub;
				var bookinfo=$("#bdesc");
				slideNub = $("#iSlider li").size();
				//自动轮播
				this.swiper.timer=setInterval(function(){
					right();
				}, 4000);
				var self=this;
				touch();
				//右滑动
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
				//左滑动
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
						// event.preventDefault();
						var touch = event.targetTouches[0];
						_startX = touch.pageX;
						_startY = touch.pageY;
					}
					function touchMove(event) {
						var touch = event.targetTouches[0];
						_endX = (_startX - touch.pageX);
						_endY = (_startY - touch.pageY);
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
			playv(){
				let video=$("#voice")[0];
				if(video.paused){
					video.play();
					$("#play").hide();
					$("#poster").hide();
					if(video.dataset.first=="true"){
						video.dataset.first=false;
						forceLog(param("act_f"),"CLLvideo");
					}					
				}else{
					video.pause();
					$("#play").show();
				}
			}
	 	},
	 	components:{
	 		maskLoad,
	 		rule,
	 		appLoad,
	 		maskWb
	 	}
	};	
	window.initSNS=function(){
		var text=env.pt=="ios" ? "阅券" : "书券";
		var shareobj={
			cover :front()+"act170503/images/cover.jpg",
			url : window.location.href,
			title: "看丛林狼新书，拿"+text+"好礼",
			desc: "看新书，加书架，瓜分50w"+text
		};
		S.share(shareobj);
	}
</script>	