<template>
<div class="gamepage">
	<div class="gamebox" v-if="!receivedshow">
	    <div :class="['readygo',{'active':startGame}]" v-if="startGame">
	    	<p>READY</p>
	    	<p>GO!</p>
	    </div>
	    <div v-else>
	    	<div class="times" >{{ djtime }}</div>
			<ul :class="['jewelbox']">
				<li v-for="list in scoreStyle" :class="list.class" :style="{'left':list.left+'rem'}" @touchstart="getscore(list.score,$event)">
					<img :src="list.img">
					<div class="scores">{{ list.score }}</div>
				</li>
			 </ul>
	    </div>
	</div>
	<div class="resultbox" v-if="scoreshow">
		<div class="light"></div>
		<div class="centerlay"></div>
		<div class="downlay"></div>
		<div class="tt">击败{{beatRate}}%玩家</div>
		<ul class="resultul">
			<li>本轮得分<div class="Rscore">{{ resultArr.score }}</div></li>
			<li>获得书券<div class="Rscore">{{ resultArr.quan }}</div></li>
		</ul>
		<ul class="highest">
			<li>最高分：<span>{{ highest.score }}</span></li>
			<li>最高书券：<span>{{ highest.quan }}</span></li>
		</ul>
		<a class="submit" @click="submitScore(highest.score)"><h4>提交最高成绩</h4></a>
		<div v-if="gameNum>0">
			<a class="again" @click="again"><h4>我不服，再来一次</h4></a>
			<p class="surplus">剩余<span>{{gameNum}}次</span>机会</p>
		</div>
	</div>
	<div class="recevied" v-if="receivedShow">
		<div class="recevieRe">
			<ul class="resultul">
				<li>分数<div class="Rscore">{{ Hiscore.score }}</div></li>
				<li>{{plat=='adr'?'书券':'阅券'}}<div class="Rscore">{{ Hiscore.quan }}</div></li>
			</ul>
			<a class="submit" @click="goVip"><h4>{{ isVip?'续费':'开通'}}包月即送10倍书券</h4></a>
			<a class="recevieQuan" @click="receveQ('0')">仅领取<span>{{ Hiscore.quan }}{{plat=='adr'?'书券':'阅券'}}>></span></a>
			<p>开通n个月还可获得n次游戏机会哦！<br>拿高分，冲排行！</p>
		</div>
		<div class="recevBang">
			<div class="userline"><span>{{ userself.rank>50?'未上榜':userself.rank }}</span><div class="userinfo"><img :src="userself.avor">{{userself.nick}}</div><em>{{userself.score}}</em></div>
			<ul class="scroeul">
				<li transition='opendo' v-for="(item,index) in scorebang"><span v-if="(index+1)>3">{{ index+1 }}</span><img class="img" v-else :src="'src/images/img'+index+'.png'"><div class="userinfo"><img :src="item.avor">{{item.nick}}</div><em>{{item.score}}</em></li>
			</ul>
		</div>
		<div class="mask" v-if='mask'>
			<div class="tiparea">
				<p>恭喜获得</p>
				<h4 class='quan'>{{ recevieQuan }}{{plat=='adr'?'书券':'阅券'}}</h4>
				<span>（有效期15天）</span>
				<a @click="closeorRece(isVip?'1':'0')"><h4>{{ isVip?'领取':'好的'}}</h4></a>
				<p class='smallfont'>领取后请到我的账户查看</p>
			</div>
		</div>
	</div>
</div>
	
</template>
<script>
import database from "../data.js"
	export default {
		props:['mask','Hiscore','isVip','type','scorebang','scoreshow','receivedShow'],
		data(){
			return{
				plat: window.pt,
				startGame:false,
				delayTime:'2160',
				userself:[],
				gameNum:3,
				djtime:10,
				totalScore:0,
				totalScoreArr:[],
				scoreStyle:[{
					img:'src/images/start.png',
					left:'1.26',
					class:'start',
					delay:'0',
					imgstyle:'1',
					score:''
				}],
				resultArr:{
					score:0,
					quan:0
				},
				highest:{
					score:0,
					quan:0
				},
				scoreNum:0,
				recevieQuan:0,
				beatRate:0
			}
		},
		computed:{
			scoreStyle(){
				return database.skin[this.type-1].scoreStyle[this.scoreNum-1]
			},
			userself(){
				return database.skin[this.type-1].userscore
			},
			highest(){
				let newarr=this.totalScoreArr.sort((x,y)=>{
					if(x>y){
						return 1;
					}else{
						return -1;
					}
				});
				console.log(newarr);
				let result={};
				let len=newarr.length;
				result.score=newarr[len-1];
				if(result.score>=500){
					result.quan=50;
				}else{
					result.quan=parseInt(newarr[len-1]/10);
				}
				return result;
			},
			beatRate(){
				let beat;
				if(this.resultArr.score>450){
					beat=this.rnd(94,99);
				}else if(this.resultArr.score>400 && this.resultArr.score<450){
					beat=this.rnd(82,88);
				}else if(this.resultArr.score>300 && this.resultArr.score<400){
					beat=this.rnd(67,57);
				}else if(this.resultArr.score>200 && this.resultArr.score<300){
					beat=this.rnd(41,52);
				}else if(this.resultArr.score>100 && this.resultArr.score<200){
					beat=this.rnd(21,27);
				}else{
					beat=this.rnd(5,9);
				}
				return beat;
			}
		},
		methods:{
			rnd(min,max){
	 			return min+Math.floor(Math.random()*(max-min+1));
	 		},
			dalay(time){
				this.startGame=true;
				let delay=setTimeout(_=>{
					this.startGame=false;
					this.counttime();
	 				clearTimeout(delay);
			 		delay=null;
	 			},time);
			},
			//donghua
	 		counttime(){
	 			let timer=setInterval(()=>{
	 				this.djtime--;
	 				if(this.djtime==0){
	 					this.djtime=0;
	 					this.scoreshow=true;
	 					for(let i=0;i<$('.jewelbox li').length;i++){
			 				let liH=$('.jewelbox li').eq(i).height();
			 				$('.jewelbox li').eq(i).css({'-webkit-transition-duration':'0s','-webkit-transform':'translateY('+(-liH)+'px)'});
			 			};
			 			this.totalScoreArr.push(this.totalScore);
			 			this.resultArr.score=this.totalScore;
			 			if(this.resultArr.score>=500){
							this.resultArr.quan=50;
						}else{
							this.resultArr.quan=parseInt(this.resultArr.score/10);
						}
						requestAnimationFrame(_=>{
	 						$('.light').addClass('active');
	 					});
	 					$(".gamebox").hide();
	 					clearInterval(timer);
	 					timer=null;
	 				}
	 			},1000);
	 			this.gameNum-=1;
	 			requestAnimationFrame(_=>{
	 				$('.jewelbox').addClass('active');
		 			let winH=$(window).height() || document.body.clientHeight;
			 		let startImg=$('.jewelbox li');
			 		let elH=[];
			 		for(let i=0;i<startImg.length;i++){
			 			let startH=parseInt(winH)+parseInt(getComputedStyle(startImg[i],null).height)+1;
			 			let delay=i*10;
			 			let time2=setTimeout(()=>{
			 				$('.active li.start').css({'-webkit-transition-duration':'1.36s'});
				 			$('.active li.redjewel').css({'-webkit-transition-duration':'1.72s'});
				 			$('.active li.bluejewel').css({'-webkit-transition-duration':'1.72s'});
				 			$('.active li.zijewel').css({'-webkit-transition-duration':'1.72s'});
				 			$('.active li.mineral').css({'-webkit-transition-duration':'2.56s'});
				 			$('.active li.diamonds').css({'-webkit-transition-duration':'1.36s'});
				 			$('.active li').eq(i).css({'transition-delay':this.scoreStyle[i].delay+'ms','-webkit-transform':'translateY('+startH+'px)' });
				 			// document.querySelectorAll('.active li')[i].style.webkitTransform='translateY('+startH+'px)';
				 			clearTimeout(time2);
				 			time2=null;
				 		},80);
			 		}
			 	});
	 		},//点击
	 		getscore(score,e){
	 			let $cur=e.currentTarget;
	 			this.totalScore+=score;
	 			$($cur).children('img').hide();
	 			$($cur).children('.scores').addClass('active');
	 		},//在来一次
	 		again(){
	 			if(this.gameNum>0){
	 				this.scoreNum++;
	 				if(this.scoreNum>5){
	 					this.scoreNum=1;
	 				}
	 				$(".gamebox").show();
	 				this.scoreshow=false;
		 			this.djtime=10;
		 			this.totalScore=0;
		 			requestAnimationFrame(_=>{this.dalay(this.delayTime);});
	 			}	
	 		},
	 		submitScore(Hscore){	
	 			// Local.reqaObj(common.server() + "pkgTemplateVIPGame/submitScore?tpcId="+common.param('tpcId')+"&sc="+Hscore, data=>{
	 			// 	if(data.code==1){
	 			// 		console.log(data);
	 					this.Hiscore.score=Hscore;
	 					this.scoreshow=false;
	 					this.receivedShow=true;
	 					console.log(this.receivedShow+','+this.$parent.resultshow);
	 					if(this.Hiscore.score>=500){
	 						this.Hiscore.quan=50;
	 					}else{
	 						this.Hiscore.quan=parseInt(this.Hiscore.score/10);
	 					}
	 					console.log(this.Hiscore.score);
	 			// 	}else{
	 			// 		Local.showToast(data.msg);
	 			// 	}
	 			// });
	 		},
	 		goVip(){
	 			Local.goMontharea();
	 		},
	 		receveQ(type){
	 			this.recevieQuan=this.Hiscore.quan;
	 			Local.reqaObj(common.server() + "pkgTemplateVIPGame/pick?tpcId="+common.param('tpcId')+"&only40="+type, data=>{
	 				console.log(data);
	 				if(data.code==1){
	 					this.recevieQuan=data.quan;
	 					if(type==0){
	 						this.mask=true;
	 					}
	 					Local.showToast('领取成功');
	 				}else{
	 					Local.showToast('出错了，网络异常，请稍候重试');
	 				}
	 			},[], ()=> {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
	 		},
	 		closeorRece(type){
	 			console.log(type);
	 			if(type==0){
	 				this.mask=false;
	 				this.$parent.gameshow=false;
	 				this.$parent.initPage();
	 			}else{
	 				this.receveQ(type);
	 			}
	 		}
	 	},
		mounted(){
	 		this.$on('countdown',()=>{
	 			this.scoreNum=this.rnd(1,5);
				this.dalay(this.delayTime);
	 		});
	 	}
	}
</script>
<style lang='less'>
	.gamepage{
		position: fixed;left: 0; top: 0; z-index: 10;width: 100%; height: 100%;overflow: hidden; background-repeat: no-repeat;background-size:100% auto;
		.readygo{ position: absolute;left: 0 ;top: 0; width: 100%; height: 100%;display: -webkit-flex;-webkit-align-items:center;-webkit-justify-content: center; 
			p{ position: absolute;left: 0; top: 50%; height: .8rem; width: 100%; text-align: center; line-height: .8rem; font-size: .6rem; color: #fff; opacity: 0;}
			&.active p{-webkit-animation:skit 1.36s linear forwards;
				&:last-child{ -webkit-animation:skit2 .8s 1.36s linear forwards; }
			}
			@-webkit-keyframes skit{
				0%{-webkit-transform:scale(0);opacity: 0}
				11.7%{-webkit-transform:scale(1);}
				17.6%{-webkit-transform:scale(1.5);}
				16.4%{-webkit-transform:scale(1);}
				85%{-webkit-transform:scale(1);opacity: 1}
				100%{-webkit-transform:scale(1);opacity:0}
			}
			@-webkit-keyframes skit2{
				0%{ opacity: 0; }
				75%{opacity: 1}
				100%{opacity: 0}
			}
		}
		.times{ position: absolute; top: .54rem; left:50%; margin-left: -18px; width:32px; height: 32px; border-radius: 100%; border:2px solid #fff; text-align: center;line-height: 34px; overflow: hidden; font-size: 17px; color: #fff; }
		.jewelbox { 
			li{position: absolute;left: 0;top: 0;
				img{ width: 100%; display: block; }
				&.start{  width: .9rem; height: .88rem;-webkit-transform:translateY(-.88rem);transition:all 1.36s ease-in 1ms;}
				&.redjewel{ width: 1.28rem; height: 1.36rem;-webkit-transform:translateY(-1.38rem);transition:all 1.72s ease-in 1ms;}
				&.bluejewel{left:2.66rem; width: 1.2rem; height: 1.36rem;-webkit-transform:translateY(-1.36rem);transition:all 1.72s 0s ease-in 1ms;}
				&.zijewel{left:3.9rem; width: 1.26rem; height: 1.36rem;-webkit-transform:translateY(-1.36rem);transition:all 1.72s ease-in 1ms;}
				&.mineral{left:5rem; width: 1.42rem; height: 1.58rem;-webkit-transform:translateY(-1.58rem);transition:all 2.56s ease-in 1ms;}
				&.diamonds{left:2.2rem; width: .94rem; height: .86rem;-webkit-transform:translateY(-.86rem);transition:all 1.36s ease-in 1ms;}
			}
		}
		.scores{position: absolute;left: 0; top: 0; width: 100%; text-align: center; height: .4rem; font-size: .4rem; color:#fff;-webkit-transform:scale(1) translateY(0px); opacity: 0;
			&.active{ 
				-webkit-animation:flayup 1080ms ease-in;
			}
			@-webkit-keyframes flayup{
				0%{-webkit-transform:scale(1) translateY(0px); opacity: 0;}
				50%{-webkit-transform:scale(2.56) translateY(-200px);  opacity: 1;}
				100%{-webkit-transform:scale(1) translateY(-400px);  opacity: 0;}
			}
		}
		.resultbox{ position: relative; z-index: 2; margin-top: 1.2rem;
			.light,.centerlay,.downlay{ width: 6.48rem; height: 6.48rem;  margin-left: -3.21rem; position: absolute; left:50%; top: 0; z-index: -1; -webkit-transform-origin:50% 50%;
			}
			.light{background: url(../images/light.png) no-repeat;background-size: 100% 100%;
				&.active{-webkit-animation:rotats 5s infinite linear both;}
				@-webkit-keyframes rotats{
					0%{-webkit-transform:rotate(0deg)}
	  				100%{-webkit-transform:rotate(360deg);}
				}
			}
			
			.centerlay{ z-index: -2; background: url(../images/ceter.png) no-repeat; background-size: 100% 100%;}
			.downlay{ z-index: -3;background: url(../images/down.png) no-repeat; background-size: 100% 100%; }
			.tt{ width: 3.12rem; height: 1rem; padding-top: 1.4rem; margin:0 auto 0; text-align: center; color: #fff; font-size: .3rem; line-height: .4rem;background: url(../images/gameover.png) no-repeat center top; background-size: 100% auto; }
			
			.highest{width: 4.9rem; margin:0 auto; display: -webkit-flex;
				li{-webkit-flex:1;height: .8rem; line-height: .8rem;text-align: center;font-size: .26rem; color: #787879; 
					span{ color: #fff; }
				}
			}
		}
		.submit{ display: block; margin:0 auto; width: 4.46rem; height: .92rem; background: #489ee8; text-align: center;line-height: .92rem; border-radius: 4px;box-shadow: inset 0px 1px 0 rgba(255,255,255,.58);  font-size: .26rem; font-weight: bold; color:#fff; }
			.again{display: block; margin:.4rem auto 0;width: 4.46rem; height: .92rem;text-align: center;line-height: .92rem; border-radius: 4px; border: 1px solid rgba(255,255,255,.49);font-size: .26rem; font-weight: bold; color: rgba(182,182,182,.5) }
			.surplus{ font-size:.26rem; color: #fff; line-height: .66rem; text-align: center;
				span{color: #ffbe67;}
			}
		.resultul{ width: 4.9rem; margin:0 auto 1.2rem; display: -webkit-flex; -webkit-justify-content:space-between;
				li{ width: 2.18rem; height: 1.5rem; overflow: hidden; text-align: center; font-size: .24rem; line-height: .8rem; color: #cacaca; background: url(../images/blackbg.png) no-repeat; background-size: 100% 100%; 
					.Rscore{ width: 2.18rem; height:.4rem; font-size: .76rem; text-align: center; line-height: .4rem; color: #ffc85e; }
				}
			}
		.recevied{ width: 6.92rem; padding-top: 1.4rem; margin: 0 auto; 
			&:before{ content:''; position: absolute;left: 0; top: 0; width: 100%; height: 3.8rem; background:url(../images/receive.png) no-repeat; background-size: 100% 100%;}
			.recevieRe{ width: 100%; background: #fff;border-radius: 8px; padding-top: 1.5rem; height: 4.5rem;
				.resultul{ margin:0 auto .1rem;
					li{ color: #999;  background:none;
						.Rscore{ width: 2.18rem;  font-size: .76rem; text-align: center; color: #444; }
					}
				}
				.recevieQuan{font-size: .26rem; color: #444; height: .66rem; line-height: .66rem;text-align: center; margin:.2rem auto; display:block;
					span{ color: #ffbe67; }
				}
				p{ font-size: .24rem; color: #999; line-height: .4rem; text-align: center; }
			}
			.recevBang{ width: 100%; height: 4rem; margin-top: .12rem;background: #fff;border-radius: 8px; overflow-x: hidden;overflow-y: scroll; 
				.userline{ background:#f0f0f0;border-bottom: none;padding:0 .24rem 0 1.2rem; margin:0;
					&:before,&:after{ display:none; }
					span{left: .24rem;}
					em{ right: .58rem; }
				}
			}
			@media screen and (max-height:540px){
				.recevBang{
					height: 3.6rem;
				}
				.recevieRe { height: 4.3rem;
					.recevieQuan{ margin:.2rem auto 0; }
				}
			}
		}
	}
	.skin1{
		.gamepage{
			background: url(../images/skin1/gamebg.jpg) no-repeat; background-size: 100% 100%;
		}
		.submit{background: #489ee8; text-align: center;box-shadow: inset 0px 1px 0px rgba(255,255,255,.58);color:#fff; }
	}

</style>