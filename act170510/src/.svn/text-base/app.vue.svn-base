<template>
	<div id="app">
		<mask-load v-if="loading" @loadend="loadend"></mask-load>
		<div :class="['videobox',{'active':page==0}]" v-show="page==0 && !loading">
			<video id="video1" x-webkit-airplay="true" webkit-playsinline="true" playsinline="true" preload="auto">
				<source src="media/new.mp4" type="video/mp4"></source>
			</video>
		</div>
		<div :class="[{'active':page>0},'wrap']">
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
					<img src="images/p2-1.png" class="playagain" @click="playagain">
					<div class="text" v-html="text"></div>					
					<img src="images/p2-3.png" class="sharebtn" v-if="userInfo.isPicked" @click="sharePage">
					<div class="sharebox" v-else>
						<img src="images/p2-2.png" @click="sharePage">
						<div class="gtip">
							<strong>瓜分<b>1000万</b>稿酬</strong>
							<p>首次分享成功后，点击“返回QQ阅读”即可领取稿酬</p>
						</div>							
					</div>					
				</div>
			</div>
			<div :class="['page3',{'active':page==3}]" v-if="!userInfo.isPicked">
				<img :src="plat=='ios' ? 'images/p3-2.png' : 'images/p3-3.png'" alt="分享赢稿酬" class="cong">
				<p class="f40">分享成功</p>
				<p>恭喜你获得{{platText}}报酬</p>
				<div class="pick" @click="pick"></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import "./css/index.scss";
	import maskLoad from "./components/load.vue";
	import textobj from "./js/textdata";
	export default {
		data(){
			return{
				plat:window.pt,
				platText:window.pt=='ios' ? "阅券" :"书券",
		 		loading:true,
		 		over:false,
		 		bookname:this.rnd(0,7),
		 		userInfo:{isLegalName:true,isPicked:false,isLogin:true},
		 		result:{bgstyle:this.rnd(0,6),textnum:0,name:""},
		 		text:"",
		 		page:0
			}
		},
		created(){ 
			this.datainit();
	 	},
	 	mounted(){	 			
	 		this.pageinit();		
	 	},
	 	methods:{
	 		loadend(){
	 			this.loading=false;
	 		},
	 		datainit(){
	 			if(localStorage.result){
	 				this.loading=false;
	 				this.page=3;
	 				let result=JSON.parse(localStorage.result);
	 				this.result=result;
	 				this.text=textobj[result.textnum];
	 				setTimeout(function(){
	 					localStorage.result="";
	 				})
	 			}
	 		},
	 		pageinit(){
	 			document.addEventListener("touchmove",e => {
	 				e.preventDefault();
	 			},false);
	 			let self=this;
	 			setTimeout(function(){
	 				$(".srole").text(self.result.name);
	 			})
	 			if(self.page==0){
		 			document.querySelector("#video1").addEventListener("ended",() => {	 	
		 				self.page=1;
		 				document.webkitExitFullscreen();
		 			})
	 			}	 	
	 			let wh=$(window).height(); 			
	 			self.pageResize(wh);
	 			$(window).on("resize",() => {
	 				$("body").scrollTop(0);
	 				self.pageResize(wh);
	 			})	
	 			self.afterShare();
	 		},
	 		pageResize(wh){
	 			$("html,body").height(wh);
	 			$(".cata").height(wh);
	 		},
	 		checkName(){
	 			let self=this;
	 			//var data={isLegalName:true,isPicked:false,isLogin:false};
	 			Local.reqaObj(`${common.server()}pkg170510/init?nick=${encodeURIComponent(this.result.name)}`, data=>{ 
	 				//console.log(data); 
	 				self.userInfo=data;
	 				if(data.isLegalName){
	 					self.changetext(); 						 					
	 				}
	 			}, [], () => {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
	 		},
	 		editname(){
	 			// $(".writebox").css("marginTop","5rem");
	 			this.userInfo.isLegalName=true;
	 		},   
	 		rnd(n,m){
		        let random = Math.floor(Math.random()*(m-n+1)+n);
		        return random;
		    },
	 		changetext(){
	 			this.page=2;
	 			let queue=[{start:0,end:10},{start:11,end:15},{start:16,end:25},{start:26,end:30},{start:31,end:35},{start:36,end:40},{start:41,end:50}];
				let curcata=queue[this.result.bgstyle];
				this.result.textnum=this.rnd(curcata.start,curcata.end);
	 			this.text=textobj[this.result.textnum];
	 			let self=this;
	 			setTimeout(() =>{
	 				$(".srole").text(self.result.name);
	 			})
	 		},
		    sharePage(){
		 		let shareObj = {
					url: `${common.sharefront()}act170510/share.html?act_f=170510&name=${encodeURIComponent(this.result.name)}&bgstyle=${this.result.bgstyle}&textnum=${this.result.textnum}`,
					cover:  `${common.sharefront()}act170510/images/cover.jpg`,
					title: `${this.result.name}新书机密情节疑似泄露，删前速围观`,
					desc: "积淀10年终磨一剑，新书问世前莫名被泄露"
				};		
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc);	
				//Local.forceLog(common.param("act_f"),"CLLshare");
	 		},
	 		afterShare(){
	 			let self=this;
				window.afterShare= () => {
					if(!self.userInfo.isPicked){
						self.page=3;
					}
				}	
	 		},
	 		playagain(){
	 			this.page=1;
	 			this.bookname=this.rnd(0,7);
	 			this.result.bgstyle=this.rnd(0,6);
	 		},
	 		// login(){
	 		// 	var url=window.location.href+"?name="+encodeURIComponent(this.result.name)+"&bgstyle="+this.result.bgstyle+"&textnum="+this.result.textnum;
		 	// 	Local.login(url);
	 		// },
	 		pick(){
	 			if(!this.userInfo.isLogin){
	 				localStorage.result=JSON.stringify(this.result);
	 				Local.login();
		 			return;		 			
		 		}
		 		//var data={code:1,money:10};
		 		let self=this;
		 		Local.reqaObj(`${common.server()}pkg170510/lot`, data=>{
		 			console.log(data);
		 			if(data.code==-2){
	 					localStorage.result=JSON.stringify(this.result);
	 					Local.login();
	 					return;
	 				}  
	 				self.page=2;
	 				self.userInfo.isPicked=true;
	 				if(data.code==1){ 					
	 					Local.showToast(`${data.money}${self.platText}领取成功,有效期7天`);
	 				}else{
	 					Local.showToast(data.msg);
	 				}
	 			}, [], () => {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
	 		}
	 	}, 	
	 	computed:{
	 		error(){
	 			if(this.result.name.trim().length>5){
	 				return "主角姓名不能超过5个字哦";
	 			}
	 			if(!this.userInfo.isLegalName){
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
	 		maskLoad
	 	}
	};
</script>	
