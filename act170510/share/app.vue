<template>
	<div id="app">
		<div class="wrap active">
			<div :class="['page1',{'active':page==1}]">				
				<img src="images/p1-bg.jpg" class="cata">
				<div class="writebox">
					<img :src="'images/bookcata/b'+bookname+'.png'" class="bname">
					<img src="images/p1-3.png">
					<div class="form">
						<input type="text" placeholder="姓名" v-model="result.name" @focus="editname">
						<p class="error" v-if="error">{{error}}</p>
					</div>				
					<div class="btn">
						<img src="images/p1-1.png" v-if="cancheck" @click="checkName">
						<img src="images/p1-2.png" v-else>
					</div>
				</div>
			</div>
			<div :class="['page2',{'active':page==2}]">
				<img :src="'images/bookcata/bg'+result.bgstyle+'.jpg'" class="cata">
				<div class="bookbox">
					<img src="images/p2-1.png" class="playagain" @click="playagain(0)" v-if="again>0 || isself">
					<div class="text" v-html="result.text"></div>					
					<img src="images/p2-4.png" class="sharebtn" v-if="!isself && again==0" @click="playagain(1)">
					<div class="sharebox" v-else>
						<img src="images/p2-3.png" @click="sharePage">
						<p class="stip" @click="isHasApp" v-if="isself">
							<img src="images/logo.png" class="logo">
							<span>去QQ阅读看更多精彩故事></span>
						</p>
					</div>					
				</div>
			</div>
		</div>
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
		<mask-share v-if="sharemask"></mask-share>
	</div>
</template>
<script type="text/javascript">
	import "../src/css/index.scss";
	import maskWb from "./components/weibo.vue";
	import appLoad from "./components/appload.vue";
	import maskShare from "./components/sharemask.vue";
	import textobj from "../src/js/textdata";
	export default {
		data(){
			return{
				// loading:true,
		 		loadmask:false,
		 		wb:false,
		 		sharemask:false,
		 		bookname:this.rnd(0,7),
		 		page:2,
		 		result:{name:"",bgstyle:0,textnum:0,text:textobj[0],nickname:""},
		 		isLegalName:true,
		 		isself:false,
				again:0,
				shareobj:{}		
			}
		},
		created(){ 
			this.oauth();		
	 	},
	 	mounted(){	 			
	 		this.pageinit();
	 	},
	 	methods:{//获取url参数	
	 		oauth(){ 
		 		if(param("name")){
		 			localStorage.param=JSON.stringify({"name":param("name"),"bgstyle":param("bgstyle"),"textnum":param("textnum")});
		 		}					
	 			let self=this;
	 			if (env.vw=="wx") {
	 				if(!param("code")){
	 					window.location.href = "http://wx.book.qq.com/xlogin?redirect_uri="+front()+"act170510/share.html&scope=snsapi_base&state=123"; 
	 				}else{
						reqa(`${server()}pkg170510/outSide?code=${param("code")}`, data=> {
							self.result.nickname=data.costarName;
							self.pageinit();
						}, [], () => {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
	 				}
				}else if(env.vw=="qq"){
					reqa(`${server()}pkg170510/outSide?timi=${ckg("uin").substr(1)}`,data=> {
						self.result.nickname=data.costarName;
						self.pageinit();
					}, [], () => {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
	 		},
	 		datainit(){
	 			if(localStorage.param){
	 				let result=JSON.parse(localStorage.param);
	 				this.result.name=decodeURIComponent(result.name);
		 			this.result.bgstyle=result.bgstyle;
		 			this.result.textnum=result.textnum;
					this.result.text=textobj[this.result.textnum];
					if(this.result.name == this.result.nickname){
		 				this.isself=true;
		 			}
	 				// setTimeout(function(){
	 				// 	localStorage.param="";
	 				// })
	 			}	
	 		},	 		
	 		pageinit(){
	 			this.datainit();
	 			document.addEventListener("touchmove",e =>{
	 				e.preventDefault();
	 			},false);
	 			let self=this;
	 			setTimeout(() =>{
	 				$(".srole").text(self.result.name);
	 				if(env.vw!=="wb" && !self.isself){	 			
	 					$(".lrole").text(self.result.nickname);
	 				} 				
	 			});
	 			let wh=$(window).height();
	 			self.pageResize(wh);
	 			$(window).on("resize",() =>{
	 				$("body").scrollTop(0);
	 				self.pageResize(wh);
	 			})
	 			setTimeout(() => {
	 				window.initSNS=() =>{ 				
						self.shareobj={
							cover :front()+"act170510/images/cover.jpg",
							url : front()+"act170510/share.html?act_f=170510&name="+encodeURIComponent(self.result.name)+"&bgstyle="+self.result.bgstyle+"&textnum="+self.result.textnum,
							title: self.result.name+"新书机密情节疑似泄露，删前速围观",
							desc: "积淀10年终磨一剑，新书问世前莫名被泄露"
						};
						S.share(self.shareobj);
					}
	 			})
	 			forceLog("act170510","650share");
	 		},
	 		pageResize(wh){
	 			$("html,body").height(wh);
	 			$(".cata").height(wh);
	 		},
	 		checkName(){
	 			let self=this;
	 			reqa(`${server()}pkg170510/init?nick=${encodeURIComponent(this.result.name)}`, data=>{ 
	 				if(data.isLegalName){
	 					self.changetext(); 						 					
	 				}
	 			});
	 		},
	 		changetext(){
	 			this.page=2;
	 			this.result.bgstyle=this.rnd(0,6);
	 			let queue=[{start:0,end:10},{start:11,end:15},{start:16,end:25},{start:26,end:30},{start:31,end:35},{start:36,end:40},{start:41,end:50}];
				let curcata=queue[this.result.bgstyle];
				this.result.textnum=this.rnd(curcata.start,curcata.end);
	 			this.result.text=textobj[this.result.textnum];
	 			let self=this;
	 			setTimeout(() =>{
	 				$(".srole").text(self.result.name);
	 			})
	 			self.shareobj.url=`${front()}act170510/share.html?act_f=170510&name=${encodeURIComponent(self.result.name)}&bgstyle=${self.result.bgstyle}&textnum=${self.result.textnum}`;
				self.shareobj.title=`${self.result.name}新书机密情节疑似泄露，删前速围观`;
				S.share(self.shareobj);
	 		},
	 		rnd(n,m){
		        let random = Math.floor(Math.random()*(m-n+1)+n);
		        return random;
		    },
	 		editname(){
	 			this.isLegalName=true;
	 		},  
	 		playagain(n){
	 			if(n==1){
	 				this.result.name="";
	 			}
	 			this.page=1;
	 			this.again=1;
	 			this.bookname=this.rnd(0,7);
	 		},
	 	    sharePage(){
	 	    	this.sharemask=true;
	 	    },
			isHasApp(e){
	 			if(env.vw=="wb"){
	 				this.wb=true;
	 				return;
	 			}
	 			//走判断流程
	 			let self=this;
				S.open((installStat,plat)=>{
					if(installStat == -2){//浏览器						
						N.openPage(pageurl("act170510/share.html?act_f=170510"));			
						self.showmask();
					}else if(installStat){//已安装			
						N.openPage(pageurl("act170503/share.html?act_f=170510"));	
						// if(env.vw=="wx"){
						// 	self.showmask();
						// }
					}else{			
						self.showmask();
					}
				})					
 			},
	 		showmask(){
	 			let self=this;
				setTimeout(() =>{
					self.loadmask=true;
				},2000);
	 		}
	 	},
	 	computed:{
	 		error(){
	 			if(this.result.name.trim().length>5){
	 				return "主角姓名不能超过5个字哦";
	 			}
	 			if(!this.isLegalName){
	 				return "敏感词检查不通过";	 			
	 			}	 			
	 		},
	 		cancheck(){
				if(this.result.name.trim().length>0 && this.result.name.trim().length<=5){
					return true;
				}
	 		}
	 	},
	 	components:{
	 		appLoad,
	 		maskWb,
	 		maskShare
	 	}
	};	
</script>	