<template>
	<div id="app">
		<div class="top">
			<img src="src/images/banner.jpg" class="banner">
			<img src="src/images/elem3.png" class="elem3">
			<img src="src/images/elem1.png" class="elem1">
			<img src="src/images/elem2.png" class="elem2">
		</div>
		<div  class="my" ref="mybox">
			<div class="myinfo">
				<div class="avor">
					<img src="src/images/default.png">
				</div>
				<div class="score">
					当前可用积分：<strong>0</strong>
				</div>
				<div class="myprize f20" @click="isHasApp">
					我的奖品>
				</div>
			</div>
			<p class="tip f20">* 活动期间<strong>每消耗100{{text}}获得1积分</strong>,看书、打赏、开通包月均可消耗{{text}}</p>
		</div>
		<div :class="box.classname" v-for="box in boxs">
			<img :src="'src/images/'+box.title" class="title">
			<div class="tag">{{box.score}}积分</div>
			<p class="rest f20" v-if="box.card == 0">（今日剩余<strong>8</strong>份）</p>
			<h2>开宝箱必得以下奖品之一</h2>
			<ul class="list">
				<li v-for="(prize,index) in box.prizes" @touchstart="longtap(prize)" @touchend="canceltap">
					<div class="pic">
						<img :src="'src/images/'+prize.pic">
					</div>
					<p>{{prize.name}}</p>
					<div :class="'layer l'+index" v-if="touch.id === prize.id">
						<div class="pic">
							<img :src="'src/images/'+prize.pic">
						</div>
						<strong>{{prize.name}}</strong>
						<div class="intro">{{prize.intro}}</div>
					</div>
				</li>
			</ul>
			<div class="btn rbtn" @click="isHasApp">立即兑换</div>
		</div>
		<div class="box bookbox">
			<img src="src/images/title.png" class="title">
			<p>买书可消耗{{text}}获得积分哦</p>
			<div class="change" @click="change">换一换</div>
			<ul class="books">
				<li v-for="book in mdata.changeBookList.slice(bookindex,bookindex+3)">
					<img :src="book.cover" @click="isHasApp">
					<p class="btitle">{{book.title}}</p>
					<p class="author">作者：{{book.author}}</p>
				</li>
			</ul>
			<a href="javascript:;" class="btn" @click="isHasApp">查看更多</a>
		</div>
		<rule :plat="plat"></rule>
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
		<mask-over v-if="over"></mask-over>
	</div>
</template>
<style src="./css/index.scss" lang="sass"></style>
<script>
	import boxs from "./js/boxs";
	import maskWb from "./components/weibo";
	import appLoad from "./components/appload";	
	export default { 
		data: function () {
			return {
				over:false,
				boxs:boxs,
				mdata:{changeBookList:[]},
				touch:{timer:null,id:''},
				bookindex:0,
				plat:window.pt,
				loadmask:false,
				wb:false,
				text:window.pt == "ios" ? "阅点" : "书币",
				sharepage:document.body.dataset.page ? true : false //是否是分享页面
			}
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				if(process.env.NODE_ENV === 'local'){					
					let data=require("./js/data");
					if(data.code == -4){
			            this.over=true;
			            return;
		    	    }	 
					this.mdata=data.init;
					document.querySelector("#loadingbox").style.display="none";
					return;		        		
				}
				reqa(`${server()}pkg170902/init`, data=> {
					if(data.code == -4){
		            	this.over=true;
		            	return;
		            }			
		            this.mdata=JSON.parse(data);
					document.querySelector("#loadingbox").style.display="none";			
				});	
				forceLog(param("act_f"),"XHshareInit");
			},
			longtap(prize){
				//长按显示奖品介绍
				this.touch.timer = setTimeout(_=>{
			    	this.touch.id=prize.id;
			    	clearTimeout(this.touch.timer);
			    },500);
			    e.preventDefault();
			   return false;
			},
			canceltap(){
				clearTimeout(this.touch.timer);
				this.touch.id='';
			},
			change(){
				//书本换一换
				if(this.bookindex == this.mdata.changeBookList.length-3){
					this.bookindex = 0;
				}else{
					this.bookindex += 3;
				}
			},
			isHasApp(){
	 			if(env.vw == "wb"){
	 				this.wb=true;
	 				forceLog(param("act_f"),`LYFdload-wb-${env.pt}`);	
	 				return;
	 			}
	 			//走判断流程
				S.open((installStat,plat)=>{
					var url = `act170902/index.html?act_f=170902`;
					console.log(installStat);
					if((plat == 'adr' && installStat) || plat == 'ios'){
						N.openPage(pageurl(url,"fullscreen"));
					}else{
						this.showmask();
					}
					//N.openPage(pageurl(url,"fullscreen"));	
					// if(installStat == -2){						
					// 	N.openPage(pageurl(url,"fullscreen"));			
					// 	this.showmask();
					// }else if(installStat){		
					// 	N.openPage(pageurl(url,"fullscreen"));	
					// 	if(env.vw == "wx" && env.pt == "ios") {
					// 		setTimeout(()=>{
					// 			this.showmask();
					// 		},2000);
					// 		setTimeout(()=>{
					// 			this.loadmask=false;
					// 		}, 5000)
					// 	}   	
					// }else{			
					// 	this.showmask();
					// }
				})	
				forceLog(param("act_f"),`XHdload-${env.vw}-${env.pt}`);				
			},
 			showmask(){
				this.loadmask = true;
	 		}
		},
		components: {
			rule:require("./components/rule"),
			maskOver:require("./components/over"),
			appLoad,
			maskWb
		}
	}
	window.initSNS = function(){
		var shareobj={
			cover :`${front()}act170902/src/images/cover.png`,
			url : window.location.href,
			title:"开箱必得以下奖品之一",
		    desc:"公仔、Q币、京东卡、笔记本、抵扣券"
		};
		S.share(shareobj);
	}
</script>