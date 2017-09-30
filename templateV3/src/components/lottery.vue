<template>
	<div class="lottery-box" :mid="mdata.mid">
		<p class="gift-num">抽奖次数：
			<template v-if="isLogin">
				<span class="num">{{mdata.count}}</span>次
				<span class="refresh" @click="getcount">刷新抽奖次数>></span>
			</template>
			<template v-else>
				<span class="loginLook" @click="loginLook">登录查看 &gt;</span>
			</template>
		</p>
		<div class="gift-bg">
			<img class="gift-main" :src="mdata.fullpic">
			<img class="lamp" ref="lamp" :src="mdata.lamp">
			<div class="center" @click="startLottery">
				<img :src="mdata.arrow" ref="arrow">
				<img :src="mdata.btnpic" ref="start" class="start">
			</div>
		</div>
		<div class="mask" v-if="showAlert">
			<div class="fail" v-if="noGift">
				<h4 class="nochance f32">您还没有获得抽奖机会,或已参加过抽奖啦</h4>
				<div class="btn" @click="hidemask" :style="$parent.btncolor">我知道了</div>
			</div>
			<div class="succ" v-else>
				<img class="pic" :src="result.prizepic"></img>
				<div class="close" @click="hidemask" v-if="result.link == 1"></div>
				<p class="pname f32">{{result.prizetype == 'p100' ?  result.prizename : `恭喜您，获得${result.prizename}`}}</p>
				<div class="btn" v-if="result.link == 1" @click="writeAddress" :style="$parent.btncolor">填写联系方式</div>
				<div class="btn" v-else @click="hidemask" :style="$parent.btncolor">我知道了</div>
			</div>
		</div>	
	</div>
</template>
<style lang="scss" scoped>
.lottery-box{
	// height: 8rem;
	margin:.2rem 0 .5rem; 
	.gift-num{
		color: #9f9999;
		font-size: .2rem;
		text-align: right;
		padding:.1rem .46rem .2rem 0;
		.num{
			font-size: .32rem;
			color: #e7a05a;
		}
		.refresh{
			display: block;
			color: #858cda;
			margin:.2rem 0 0 .2rem;
		}
		.loginLook{
			color: #8489b1;
		}
	}
	.gift-bg{
		position: relative;width: 7.02rem;height: 7.02rem;margin:0 auto;
		img{width: 100%;}
	}
	.lamp{
		position: absolute;top:0;left: 0;
	}
	.center{
		width: 2.6rem;
		height: 2.6rem;
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
	.nochance{
		padding: 1rem 0 .64rem;
	}
	.succ{
		.pic{
			width: 1.44rem;
			height: 1.44rem;
			margin: -.8rem auto 0;
		}
		.pname{line-height: .72rem;}
	}
}
</style>
<script>
	import Bus from "./bus";
	export default {
		props:["mdata"],
		data(){
			return {	
				audioTimeId: null,
				showAlert:false,//是否显示弹窗			
				isLogin:this.$parent.isLogin,
				noGift:true,
				canclick:true,
				result:{}
			}
		},
		computed:{
			isGuest(){
				return this.$parent.isGuest && this.mdata.hasIncrement == 1;
			}
		},
		methods: {
			loginLook(){
	 			Local.login()
	 		},
	 		startLottery(e){
	 			if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
	 			if(!this.canclick)return;
	 			if(!this.isLogin) {
	 				this.loginLook();
	 				return;
	 			}
 				if(this.isGuest) {
 					Bus.$emit("mask",{name:'guest',msg:"抽奖失败"});
					return;
				}
				this.canclick=false;
	 			if(this.mdata.count > 0) {
 					//let data={code:0,prizeIndex:3};
 					Local.reqaObj(`${common.server()}draw?actid=${this.$parent.actid}&moduleid=${this.mdata.id}`, data =>{
 					 	if(data.code == "-102"){
						 	this.noGift = true;
 							this.showAlert = true;
						}else if(data.code == "0"){
							this.noGift = false;
 							this.mdata.count--;
							this.lotteryResult(data.prizeIndex);
						}else{
							Local.showToast(data.msg);
						}
 				 	},[], _=>{
					 	Local.showToast("网络异常，请稍候重试");
					}, 1)
 				}else{
 					this.noGift = true;
 					this.showAlert = true;
 				}
 				Local.forceLog("templateV2","TpLottery",this.$parent.actid,this.mdata.id);
	 		},
	 		lotteryResult(prizeIndex){
	 			let [lamp,arrow,lampAngle,arrowAngle,endAngle] = [this.$refs.lamp,this.$refs.arrow,0,0,0];
	 			endAngle=1020+parseInt(prizeIndex)*60;
	 			this.result=this.mdata.prizeList[prizeIndex] || {};
	 			//灯转动
 				let lampTimer = setInterval(_=>{
 					if (endAngle) {
 						lampAngle += 30
						lamp.style.webkitTransform = `rotate(${lampAngle}deg)`
 					}else{//如果已抽完,停
 						clearInterval(lampTimer);
 					}
				},1000)	
				//箭头转动
				let arrowTimer = setInterval(_=>{
					arrowAngle += 10
					if (arrowAngle == endAngle) {
						clearInterval(arrowTimer)
						endAngle = 0
						setTimeout(_=>{
							this.showAlert = true;
							this.canclick=true;
						},1000)
					}
					arrow.style.webkitTransform=`rotate(${arrowAngle}deg)`;
				},16.7)
	 		},
	 		getcount(){
				 //let data={code:0,count:10}
				this.canclick=true;
	 			Local.reqaObj(`${common.server()}refreshDraw?actid=${this.$parent.actid}&moduleid=${this.mdata.id}`, data=>{
 					if(data.code == 0){
						this.mdata.count = data.count;
					}
 				},[], _=>{
					Local.showToast("网络异常，请稍候重试");
				}, 1)
	 		},
	 		hidemask(){
	 			this.showAlert = false;
	 		},
	 		writeAddress(){
	 			let url=`${common.front()}contact-template/index.html?act_f=templateV2`;
	 			Local.openInside(url);
	 		}
	 	}
	}
</script>