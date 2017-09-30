<template>
      <div class="livebox">
      	 <div class="ban"><p>还行吧，毕竟现在总载文太多，看一下别的类型也不错。<br>毕竟现在总载文太多，看一下别的类型也不，</p></div>
      	 <div class="live" @click="looklive"><img :src="'src/images/liveimg.jpg'" /><p v-if="liveType" class="liveing">直播中<span></span></p><p :class="['back',{ ended:ending}]" v-else>{{ending?'已结束':'观看回放'}}</p></div>
      	 <div class="mainto"><img :src="'src/images/manito.png'" class="maniface" />
			<p class="title">冠军心中的大神：smile</p>
			<p>还行吧，毕竟现在总载文太多，看一下别的类型也不错。还行吧，毕竟现在总载文太多，看一下别的还行吧，毕竟现在总载文太多，看一下别的</p>
      	 </div>
      	 <ul class="btnbox">
      	 	<a @click="gourl('act170704/index.html','BX')">开宝箱</a>
      	 	<a @click="gourl('act170704/index.html','BX')">赚更多积分</a>
      	 </ul>
      </div>
</template>
<script>
	export default {
		data(){
			return{
				plat: window.pt,
				liveType:true,
				ending:false
			}
		},
	 	methods:{
	 		looklive(){
	 			if(this.liveType){
	 				Local.forceLog(common.param("act_f"),"SQRYgoto-zhibo");
	 				//Local.openInside();
	 			}else if(!this.ending){
	 				Local.forceLog(common.param("act_f"),"SQRYgoto-huikan");
	 				//Local.openInside();
	 			}else{
	 				return false
	 			}
	 		},
	 		gourl(url,weizi){
	 			Local.forceLog(common.param("act_f"),"SQRYgoto-"+weizi);
	 			Local.openInside(common.front()+url);
	 		}
	 	}
	}
</script>
<style lang='less'>
.livebox{ padding-top: .7rem;
	.ban{ width: 100%; height: 3.86rem; background: url(../images/dashentop.jpg) no-repeat; background-size: 100% 100%; 
		p{ text-align: center; line-height: .4rem; font-size: .26rem; padding-top: 2.64rem; color: #2299b8;}
	}
	.live{ background: #a4eefb; margin:.2rem .3rem .28rem; border-radius: 8px; padding:3px; position: relative; z-index: 1;
			img{ display: block; width: 100%; border-radius: 6px;}
			
			p{position: absolute; left: .2rem; top: .2rem; width: .9rem; height: .3rem; line-height: .3rem; font-size: .22rem; color: #fff;
				span{ position: absolute; top: .09rem; right: 0; display: block; width: 6px; height: 6px; border-radius: 100%; background: #e85663; -webkit-animation:scals 1s linear infinite;}
				@-webkit-keyframes scals{
					0%{ -webkit-transform:scale(0);opacity: 0; }
					50%{ -webkit-transform:scale(1.2); opacity: 1;}
					100%{ -webkit-transform:scale(0);opacity: 0; }
				}
				&.back{
					background: rgba(232,85,103,.5); width: 1.04rem; text-align: center; border-radius: .3rem;
					&.ended{ background: rgba(106,106,117,.5); }
				}
			    
			}

	 }
	.mainto{ margin:0 .3rem; padding-left: 1.24rem; position: relative; z-index: 1; 
		.maniface{ width: 1.1rem; height: 1.1rem; border-radius: 100%; position: absolute;left: 0; top: 0; }
		p{ font-size: .26rem; color: #555; line-height: .4rem;}
		.title{ font-size: .24rem; line-height: .48rem;  color: #36c2e7; }
	}
	.btnbox{ margin: .3rem .3rem 0; display: -webkit-flex; -webkit-justify-content:space-between; -webkit-align-items:center;
		a{ display: block; width: 3.16rem; height: .84rem; line-height: .84rem; text-align: center; font-size: .32rem; color: #fff; background: #36c2e7; border-radius: 8px;}
	}
	@media screen and (max-height:540px){
		.live img{height: 3rem;}
		.btnbox{ margin: .15rem .3rem 0;}
	}
}
</style>