<template>
	<div id="app">
		<mask-over v-if="over"></mask-over>
		<div :class="['wrap','skin'+skintype]" v-if="!over">
			<div class="adpage" v-if="!gameshow">
				<div class="banner">
					<div class="txtanim">
						<ul>
							<li v-for="txtlist in skin.toptxt">{{ txtlist }}</li>
						</ul>
					</div>
					<div :class="['imganim',{ 'iosban':palt=!'adr' }]"></div>
					<a :class="['gamestart',{noclick:curTimes<=0}]" @click="gogame"></a>
					<p class="chance">还剩余<span>{{curTimes}}</span>次机会</p>
					<div class="gamerule">
						<p v-for="item in skin.gamerule"><span></span>{{item}}</p>
					</div>
				</div>
					
				<div class="scorebang">
					<div class="userline" v-if="skin.userscore!=null"><span :class="{ nobang:skin.userscore.rank>50 }">{{ skin.userscore.rank>50?'未上榜':skin.userscore.rank }}</span><div class="userinfo"><img :src="skin.userscore.avor">{{skin.userscore.nick}}</div><em>{{skin.userscore.score}}</em></div>
					<ul class="scroeul">
						<li transition='opendo' v-for="(item,index) in skin.scorebang"><span v-if="(index+1)>3">{{ index+1 }}</span><img class="img" v-else :src="'src/images/img'+index+'.png'"><div class="userinfo"><img :src="item.avor">{{item.nick}}</div><em>{{item.score}}</em></li>
					</ul>
				</div>
				<div class="more" v-if='moreshow' @click="gomore"><a>{{opendown?'收起':'查看更多'}} <img :src="opendown?'src/images/up.png':'src/images/openicon.png'"></a></div>
				<div class="prize"></div>
			    <div class="rules">
					<h4 class="ttbox"><span>活动规则</span></h4>
					<ul>
						<li v-for="(item,index) in rules"><span>{{index+1}}、</span>{{item}}</li>
					</ul>
					<img class="copyright" :src="'src/images/logo.png'" />
				</div>
			</div>
			<game v-if="gameshow" :Hiscore='receivRe' :isVip="hasOpenVipInH5" :type="skintype" :scorebang="bangLen" :scoreshow="resultshow" :receivedShow="getResult" :mask="maskshow" ref="child"></game>
		</div>
	</div>
</template>
<script type="text/javascript">
import database from './data.js'
	import "./css/index.less" 
	import maskOver from "./components/Over.vue"
	import game from './components/game.vue'
	import Rules from './components/Rules.vue'
	// import "swiper/dist/css/swiper.min.css"
	// import Swiper from "swiper/dist/js/swiper.jquery.min.js"
	export default {
		components:{
	 		maskOver,
	 		game,
	 		Rules
	 	},
		data(){
			return{
				plat: window.pt,
		 		over: false,
		 		isLogin:false,
		 		hasVip:false,
		 		gameshow:false,
		 		maskshow:false,
		 		moreshow:true,
		 		skintype:1,
		 		curTimes:1,
		 		skin:[],
		 		bangLen:[],
		 		opendown:false,
		 		resultshow:false,
				getResult:false,
				hasOpenVipInH5:false,
				receivRe:{
					score:0,
					quan:0
				},
				rules:[]
			}
		},
		mounted(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
	 			//Local.forceLog(common.param("act_f"),"RYZDindex");
	 			Local.reqaObj(common.server() + "pkgTemplateVIPGame/init?tpcId="+common.param('tpcId'), data=>{
	 				console.log(data);
	 				if(data.code==-4){
	 					this.over=true;
	 				}
						this.isLogin=data.isLogin;
		 				this.hasVip=data.hasVip;
		 				this.skintype=data.module;
		 				this.rules=data.topicContent;
		 				this.skin=database.skin[this.skintype-1];
		 				this.skin.toptxt=data.rollingUserList;
						this.bangLen=data.rankList;
						if(this.bangLen.length<10){
							this.moreshow=false;
						}
						this.skin.scorebang=this.bangLen.slice(0,10);
						if(this.isLogin){
							this.curTimes=data.curTimes;
							this.skin.userscore=data.userRankInfo;
							this.receivRe.score=data.score;
							if(this.receivRe.score>=500){
								this.receivRe.quan=50;
							}else{
								this.receivRe.quan=parseInt(this.receivRe.score/10);
							}
						}
						if(data.score>=0){
							this.receivRe.score=data.score;
							this.hasOpenVipInH5=data.hasOpenVipInH5;
							if(this.hasOpenVipInH5){
								//显示领取弹框
								this.gameshow=true;
								this.getResult=true;
								this.maskshow=true;
							}else{
								//显示领取页
								this.gameshow=true;
								this.getResult=true;
							}
						}else{

						}
						setTimeout(_=>{
							let winUl=1;
							let len=$('.txtanim li').length;
							for(let i=0;i<len;i++){
								winUl+=parseInt($(".txtanim li").eq(i).width());
							}
							$('.txtanim ul').css({'width':winUl+'px','-webkit-animation-duration':len*3+'s'});
						},50);
						
	 				// else if(data.code==1){}else{
	 				// 	Local.showToast(data.msg);
	 				// }
	 				document.querySelector('#loadingbox').style.display='none';
				},[],_=>{
					Local.showToast('网络异常，请稍候重试');
				});
				//console.log(document.body.clientWidth+','+document.body.clientHeight);
	 		},
	 		gomore(){
	 			this.opendown=!this.opendown;
	 			if(this.opendown){
	 				this.skin.scorebang=this.bangLen;
	 			}else{
	 				this.skin.scorebang=this.bangLen.slice(0,10);
	 			}
	 			console.log(this.opendown)
	 		},
	 		gogame(){
	 			if(this.isLogin){
	 				if(this.curTimes>0){
	 					this.gameshow=true;
		 				requestAnimationFrame(_=>{this.$refs.child.$emit('countdown')});
	 				}
	 			}else{
	 				Local.login();
	 			}
	 			
	 		}
	 	}
	}

</script>
