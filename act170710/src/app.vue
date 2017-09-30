<template>
	<div id="app">	
		<template v-if="!over">
			<img src="src/images/banner.jpg">
		    <div class="userinfo">
 				<div class="avor">
 					<img :src="readpack.icon">
 				</div>
 				<div class="readinfo">
					<p>本周阅读时长：{{readpack.weekReadTime}}分钟</p>
					<div class="msg">{{readpack.exchangedBilling==0 ? `${text1}可购买书籍，1${text1}＝${text2}` : `奖励已翻倍，已兑换${readpack.exchangedBilling}${text1}`}}</div>
				</div>	
	        </div>
	        <div class="readpack">
     			<div class="rpbox">
 					<ul class="rplist" :class="{'martop':readpack.critIndex<4 && readpack.critIndex!==-1}">
 						<li v-for="(value,index) in readpack.exchangeDetailList" :class="{'critli':value.isCrit,'canchange':value.type==1,'changed':value.type==0}">
 							<div class="stepstyle">
 								<span>{{!value.isCrit ? value.billing : value.type == 0 ? readpack.critNum*value.billing : "?"}}</span>
 							</div>
							<i class="steppoint"></i>
							<div class="line" v-if="index>0"></div>
							<time>{{value.readTime}}分钟</time>
							<p class="critmsg" v-if="value.isCrit && value.type!=0">可获{{readpack.critRange}}倍奖励</p>  
							<p class="critmsg" v-if="value.isCrit && value.type==0">已获{{readpack.critNum}}倍奖励</p> 
 						</li>		         			
 					</ul>
     			</div>
     			<div class="getbtn" v-if="readpack.canExchangeBilling" @click="getRpack">立即领取{{text1}}和动漫抵扣券</div> 
     			<div class="getbtn grey" v-if="!readpack.canExchangeBilling && !readpack.hasFinishExchange">还需阅读{{readpack.needReadTime}}分钟领双倍奖励</div>
     			<div v-if="readpack.hasFinishExchange" class="reached">本周领取额度已满</div>
     		</div>
		</template>
		<mask-over v-if="over"></mask-over>
	</div>
</template>
<script type="text/javascript">
	import "./css/index";
	// import maskLoad from "./components/load";
	import maskOver from "./components/over";
	export default {
		data(){
			return{
		 		// loading:true,
		 		over:false,
		 		isLogin:true,
		 		plat:window.pt,
		 		readpack:{"weekReadTime":0,"exchangedBilling":0,"exchangeDetailList":[]}
			}
		},
		created(){
	 		this.init();
	 	},
	 	methods:{
	 		init(){
	 			if(process.env.NODE_ENV == "local"){	
	 				var data=require("./js/data").readpack; 			 
	 			    if(data.code == -4){
	 			    	this.over = true;
	 			    	return;
	 			    }
		 			if(data.code==0){
						var weekExchangeInfo=data.weekExchangeInfo;
						this.readpack=weekExchangeInfo;
						this.readpack.icon=data.icon && data.guestcheckcode!=0 ? data.icon : "src/images/default.png";
					}   
					document.querySelector("#loadingbox").style.display="none";
					// this.loading=false;			
	 			}else{
	 				var server = this.plat == "ios" ? "https://ptcommon.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo?c_platform=ioswp" : "http://ptcommon.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo";
	 				Local.reqaObj(server, data => {
	 					if(data.code == -4){
		 			    	this.over = true;
		 			    	document.querySelector("#loadingbox").style.display="none";
		 			    	return;
	 			    	}
	 			    	this.isLogin=data.isLogin;
						if(data.code==0){
							var weekExchangeInfo=data.weekExchangeInfo;
							this.readpack=weekExchangeInfo;
							this.readpack.icon=data.icon && !data.gsid ? data.icon : "src/images/default.png";
						}
						document.querySelector("#loadingbox").style.display="none";
						// this.loading=false;
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);				
	 			}
	 			Local.forceLog(common.param("act_f"),"YDDYinit");
	 		},
	 		pick(){
				if(!this.isLogin){
					Local.login();			
					return;	
				}
				//领取阅读红包
				let data={exchangedBilling:10,code:0};
				Local.reqaObj(common.server()+"pkg170710/pick", data => {
					if(data.code==0){										
						this.init();
						//跳转到下一页
						Local.openInside(`${common.front()}act170710/result.html?act_f=170710&ticket=${data.value.bookTicketNum}`);
					}else if(data.code < 0){
						Local.showToast(data.msg);
					}	
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				Local.forceLog(common.param("act_f"),"YDDYpick");
			}		
		},
	 	components:{
	 		// maskLoad,
	 		maskOver
	 	},
	 	computed:{
	 		text1(){
	 			return this.plat=="ios" ? "阅券" : "书券";
	 		},
	 		text2(){
	 			return this.plat=="ios" ? "阅点" : "书币";
	 		}
	 	}
	};
</script>	
