<template>
<div class="userinfo">
	<div class="myscore f26">
		我的{{rank == "week" ? '本周' : '总榜'}}积分
		<strong class="f32" v-if="isLogin">{{userinfo.score}}</strong>
		<div class="logout" v-else @click="goLogin">登录查看>></div>		
	</div>
	<div class="headpic">
		<img src="src/images/headpic.png" class="head">
		<div class="avor">
			<img :src="userinfo.avor || 'src/images/default.png'">
		</div>
		<p class="rank f26" v-if="isLogin">{{rank == "week" ? '本周' : '总榜'}}排名<span class="f30">{{realrank}}</span></p>
		<div class="logout" v-else @click="goLogin">登录查看>></div>
	</div>
	<div class="getscore f32" @click="getScore">
		<span>领取积分冲排名</span>
	</div>
	<p class="tip f22">
		{{rank == "week" ? `单周榜第一名，返回当周积分50%的${plat}，并向6亿用户推荐你爱看的书` : '总榜第一名，和作家一起上直播'}}
	</p>
</div>
</template>
<style lang="scss" scoped>
.userinfo{position: relative;text-align: center;}
.myscore{
	position:absolute;right:.3rem;top:.3rem;color:#9696b3;
	strong{display:block;color:#f16f89;margin-top:.1rem;}
	.logout{color:#f16f89;}
}
.headpic{
	width:2.96rem;height:2.22rem;margin:.26rem auto 0;position: relative;
	.head{position: relative;z-index: 2;}
	.avor{width:1.7rem;height: 1.7rem;-webkit-border-radius: 50%;border-radius: 50%;overflow: hidden;position: absolute;top:.34rem;left:.64rem;
		img{width: 100%;height: 100%;-webkit-border-radius: 50%;border-radius: 50%;}
	}
	.rank{
		position: absolute;bottom:0;left:0;width:100%;line-height: .48rem;z-index: 3;
		span{color:#ec5f59;margin-left: .06rem;vertical-align:bottom;}
	}
	.logout{position: absolute;bottom:0;left:0;width:100%;line-height: .48rem;z-index: 3;color:#f16f89;}
}
.getscore{
	width: 3.98rem;height: .7rem;line-height: .7rem;background: #f16f89;border-radius: .7rem;margin:.4rem auto 0;
}
.tip{color: #999;line-height: .32rem;padding:.15rem .1rem;}
</style>
<script>
	import Bus from "./bus";
	export default {
		props:["userinfo","isLogin","rank"],
		data(){
			return {
				recevieOk:true,
				plat:window.pt == "ios" ? '阅券' : '书券'
			}
		},
		methods:{
			goLogin(){
				Local.login();
			},
			getScore(){
				if(!this.isLogin){
					this.goLogin();
					return;
				}
		 		if(this.recevieOk){
		 			this.recevieOk = false;
		 			//const data = {code:0,scores:10,time:100}
		 			Local.reqaObj(common.server() + "pkg170704/getscore", data=>{
						console.log(data);
						Bus.$emit("getScore",data);
						this.recevieOk = true;
					});
					Local.forceLog(common.param("act_f"),"PHBscore");
		 		}		
			}
		},
		computed:{
			realrank(){
				var rank=this.userinfo.rank;
				return rank < 0 ? "--" : rank >1000 ? "1000+" : rank;
			}
		}
	}
</script>

