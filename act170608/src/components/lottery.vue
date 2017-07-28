<template>
	<div class="lottery-box">
		<h2>峰峰发糖了</h2>
		<p class="tip">8月2日至8月3日，每日抽奖一次</p>
		<div class="gift-bg">
			<img class="gift-main" :src="mdata.gift">
			<img class="lamp" ref="lamp" :src="mdata.lamp" v-if="mdata.lamp">
			<div class="center" @click="startLottery">
				<img :src="mdata.arrow" ref="arrow">
				<img :src="mdata.start" ref="start" class="start">
			</div>
		</div>
		<div class="myprize">
			<a href="javascript:;" @click="myprize">我的奖品</a>
		</div>
		<img src="src/images/gift-bg.png" class="p-bg">
		<div :class="['prizemask',{'showAlert':showAlert}]" v-if="showAlert">
			<div class="fail" v-if="noGift">
				<img src="src/images/l3.png"></img>
				<p>今日抽奖机会已用完</p>	
				<div class="btn" @click="hidemask">–<strong>我知道了</strong>–</div>
			</div>
			<div class="succ" v-else>
				<img :src="result.pic"></img>
				<div class="close" @click="hidemask" v-if="result.link"></div>
				<div class="title">{{result.name}}</div>
				<p>{{result.desc}}</p>
				<p class="redtip" v-if="version">（抵扣券仅限在QQ阅读客户端6.5.1及以上版本使用，请升级QQ阅读）</p>
				<div class="btn" v-if="result.link" @click="writeAddress">–<strong>填写联系方式</strong>–</div>
				<div class="btn" v-else @click="hidemask">–<strong>我知道了</strong>–</div>
			</div>
		</div>	
	</div>
</template>
<style lang="scss">
@mixin bg($url){
	position: relative;
	background: url("../images/"+$url) no-repeat;
	background-size: 100% 100%;
}
%centerflex{
	display: -webkit-flex;
	-webkit-align-items:center;
    -webkit-justify-content: center;
	display: -webkit-box;
	display: box;
	-webkit-box-align:center;
	-webkit-box-pack:center;
}
.lottery-box{
	margin: .4rem 0 0;text-align: center;position: relative;border-bottom: 1px dashed #a1a1a1; 
	.tip{color: #978a7c;font-size: .24rem;padding:.25rem 0}
	.gift-bg{position: relative;z-index:2;width: 6.68rem;margin:.2rem auto .76rem;}
	.center{
		width: 3rem;
		height: 3rem;
		position: absolute;
		left: 0;
		right:0;
		top: 0;
		bottom:0;		
		margin: auto;
		z-index: 10;
		.start{
			position: absolute;
			top: 0;
			left:0;
		}
	}
	.myprize{
		background: url("../images/icos.png") no-repeat 0 .42rem;
		background-size: .28rem .28rem;
		position: absolute;
		bottom:.18rem;
		right:0;
		z-index: 20;
		padding: .4rem;
		a{
			font-size: .26rem;
			text-decoration: underline;
			color: #978a7c;
		}
	}
	.p-bg{width:5.93rem;position: absolute;right:0;top:-2.6rem;}
}
.prizemask{width: 100%;height: 100%;position: fixed;top:0;left:0;background: rgba(0,0,0,.6);z-index: 1000;@extend %centerflex;font-size: .32rem;
	p{color: #666;font-size: .28rem;line-height: .52rem;text-align: left;}
	&>div{
		position: relative;
		width: 5.6rem;
		background: #fff;
		border-radius: .1rem;
		padding:0 .5rem;
		-webkit-box-sizing:border-box;
	}
	.title{
		text-align: center;
		font-weight: bold;
		color: #333;
		padding:0 0 .24rem;		
	}
	.fail{
		p{text-align: center;}
		img{width:1.6rem;margin:.84rem auto .44rem}		
	}
	.btn{
		width: 3.92rem;
		line-height: .94rem;
		margin:.3rem auto 0;
	}
	.succ{
		img{width:1.6rem;margin:.84rem auto .44rem}	
		.close{
			@include bg("alert-close.png");
			position: absolute;
			width: .6rem;
			height: .6rem;
			right: -.34rem;
			top: -.26rem;
		}
		.content{
			font-size: .28rem;
			line-height: .48rem;
			color: #666;
		}
		.descl2{text-align: left;}
		.redtip{color: #b75656;}
	}
}
.showAlert{-webkit-animation:fadeIn 1s}
@-webkit-keyframes fadeIn{
	from{opacity: 0;}
}
</style>
<script>
	export default{
		props:["mdata"],
		data(){
			return {
				audioTimeId: null,
				showAlert:false,//是否显示弹窗
				chance:this.mdata.hasPick ? 0 : 1,
				noGift:true,
				canclick:true,
				result:{}
			}
		},
		methods: {
	 		startLottery(e){ 	
	 			if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				if(!this.canclick)return;		
	 			if(!this.mdata.islogin) {
	 				Local.login();
	 				return;
	 			}
	 			if (this.chance > 0) {	 		
	 				this.canclick=false;
	 				// let data={code:1,prizeId:4}					
 					Local.reqaObj(`${common.server()}pkg170608/pick`, data=>{
 						this.$parent.hideUpvote=data.hideUpvote;
 					 	if(data.code==1){
							this.noGift=false;
 							this.chance--;
							this.lotteryResult(data.prizeId);
						}else if(data.code == -4){
							this.$parent.showover();
						}
 				 	},[], _=>{
				 		Local.showToast("网络异常，请稍候重试");
					}, 1) 				
 				}else{
 					this.noGift=true;
 					this.showAlert = true;
 				}
	 		},
	 		lotteryResult(prizeId){
	 			let [arrow,arrowAngle,endAngle] = [this.$refs.arrow,0,0];
	 			endAngle=1020+parseInt(prizeId)*60;
	 			this.result=this.mdata.rewards[prizeId];
				//箭头转动
				let arrowTimer = setInterval(_=>{
					arrowAngle += 10;
					if (arrowAngle == endAngle) {
						clearInterval(arrowTimer)
						this.showAlert = true;
						this.canclick=true;
					}
					arrow.style.transform=`rotate(${arrowAngle}deg)`;
				},16.7)
	 		},
	 		hidemask(){
	 			this.showAlert = false;
	 		},
	 		writeAddress(){
	 			let url=window.pt=="ios" ? `${common.front()}act161002/ios/contact.html` :`${common.front()}act161002/adr/contact.html`;
	 			Local.openInside(url);
	 		},
	 		myprize(){
	 			if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}	
	 			Local.openInside(`${common.front()}act170608/myprize.html`);
	 		}
	 	},
	 	computed:{
	 		version(){
	 			return this.mdata.version && (this.result.prizeId==2 || this.result.prizeId==4)
	 		}
	 	}
	}
</script>