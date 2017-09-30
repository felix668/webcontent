<template>
	<div class="getpack cflex" :mid="mdata.mid">
		<img :src="mdata.prizepic" class="pack">
		<div class="getinfo">
			<p :style="styleobj" class="line3">{{mdata.intro}}</p>
			<img :src="mdata.btn0" @click="pick" v-if="mdata.operStatus === 0">
			<img :src="mdata.btn1" v-else>
		</div>
		<div class="mask" v-if="showAlert">
			<div class="tiparea">
				<template v-if="result.geted">
					<h4 class="title f32">领取失败</h4>
					<p class="tip">
						已经领过，不要贪心哦
					</p>
				</template>	
				<template v-if="result.nopack">
					<h4 class="title f32">领取失败</h4>
					<p class="tip">
						来晚一步，礼品已被领完
					</p>
				</template>
				<template v-if="result.success">
					<h4 class="title f32">领取成功，获得{{mdata.name}}</h4>
					<img class="pic" :src="mdata.prizepic">		
				</template>
				<template v-if="result.fail">
					<img :src="'src/images/fail.png'" class="failico">
					<p class="tip">领取未成功，请重试</p>
				</template>
				<div class="btn" v-if="mdata.link == 1" @click="writeAddress" :style="$parent.btncolor">填写联系方式</div>
				<div class="btn" @click="hidemask" :style="$parent.btncolor" v-else>我知道了</div>
			</div>
		</div>	
	</div>
</template>
<style lang="scss" scoped>
.getpack{
	height: 3.2rem;
	padding:.35rem .32rem;
	.pack{width: 1.8rem;margin-right: .32rem;}
	.getinfo{
		width:4.74rem;	
		position: relative;
		p{line-height: .38rem;margin-bottom: .5rem;}
		img{width:4.7rem;height: .76rem;}
	}
	.pic{
		width: 1.4rem;margin:0 auto;
	}
	.failico{width: .7rem;margin:.2rem auto;}
}
</style>
<script>
	import Bus from "./bus";
	export default {
		props:["mdata"],
		data(){
			return {
				styleobj:{
					color:this.mdata.fontcolor || ''
				},
				showAlert:false,
				result:{}
			}
		},
		computed:{
			isGuest(){
				return this.$parent.isGuest && this.mdata.hasIncrement == 1;
			}
		},
		methods: {
	 		pick(){
	 			if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
	 			if(!this.$parent.isLogin){
	 				Local.login();
	 				return;
	 			}
	 			if(this.isGuest){
 					Bus.$emit("mask",{name:'guest',msg:"领取失败"});
					return;
				}
	 			if(this.mdata.status === 0){
	 				Bus.$emit("mask",{name:'task',msg:"领取"});
					return;
				}
	 			//let data={code:0};
	 			Local.reqaObj(`${common.server()}pick?moduleid=${this.mdata.id}&actid=${this.$parent.actid}&prizeid=${this.mdata.prizeid}`,data => {
	 				this.showAlert=true;
	 				if(data.code == 0){
	 					this.result.success = true;
	 				}else if(data.code == -101){
	 					this.result.nopack=true;
	 				}else if(data.code == -102){
	 					this.result.geted = true;
	 				}else{
	 					this.result.fail = true;
	 				}	
	 				this.mdata.operStatus = 1;	
	 		    },[],()=>{
					Local.showToast("网络异常，请稍候重试");
	 		    })
	 		    Local.forceLog("templateV2","TpGetpack",this.$parent.actid,this.mdata.id);
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