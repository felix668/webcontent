<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-else>
			<div class="login" v-if="!islogin">
				<img src="src/images/login.png">
				<p>登录后查看我的奖品</p>
				<div class="btn" @click="goLogin"><strong>立即登录</strong></div>
			</div>
			<template v-else>
				<div class="link">
					<p>获得实物奖的小伙伴，<span @click="writeAddress">请填写联系方式</span></p>
				</div>
				<ul class="plist" v-if="!isEmpty">
					<template v-for="(item,index) in plist">
						<li v-for="val in item">
							<div class="pic">
								<img :src="'src/images/'+boxs[index].prizes[val.first].pic">
								<div class="boxname">{{boxs[index].name}}</div>
							</div>
							<div class="detail">
								<p>{{val.second}}</p>
								<p>{{boxs[index].prizes[val.first].intro}}</p>
							</div>
						</li>
					</template>
				</ul>
				<div class="nogift" v-else>
					<img src="src/images/nogift.png">
					<p>空空如也，赶快去赚积分开宝箱吧</p>
					<div class="btn" @click="openbox">去开宝箱></div>
				</div>
			</template>
		</template>
	</div>
</template>
<style lang="scss">
body,ul,li,p{margin:0;padding: 0;}
ul,li{list-style: none;}
.login{
	text-align: center;font-size: .28rem;
	img{width: 2.5rem;margin:1.78rem 0 0;}
	p{color: #333;line-height: .4rem;margin:.6rem 0 .46rem;}
	.btn{width:3.36rem;height:.9rem;margin:0 auto;line-height:.9rem;background: #5199f7;
		strong{color:#fff;}
	}
}
.link{font-size: .26rem;color: #cecece;height: .9rem;line-height: .9rem;background: #303030;text-align: center;
	span{color: #eec651;text-decoration: underline;}
}
.plist{
	margin:.08rem .3rem 0;
	li{
		display:-webkit-box;
		display:-webkit-flex;
		-webkit-box-align:center;
		-webkit-align-items:center;
		padding:.22rem 0;
		border-bottom: 1px solid #e2e2e2;
	}
	.pic{
		width:1.4rem;height:1.4rem;border:.04rem solid #e2e2e2;margin:0 .44rem 0 .1rem;
		display:-webkit-box;
		display:-webkit-flex;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		-webkit-align-items:center;
		-webkit-justify-content:center;
		position: relative;
		img{width: 1.2rem;margin-top: -.2rem}
	}
	.boxname{
		position:absolute;
		bottom: -.06rem;
		left: -.12rem;
		width:1.58rem;
		height:.46rem;
		background: url(../src/images/type.png) no-repeat;
		background-size:100% auto;
		line-height: .42rem;
		font-weight: bold;
		color: #fff;
		font-size: .24rem;
		text-align: center;
	}
	.detail{
		width:4.36rem;
		p:nth-child(1){
			font-size: .28rem;color: #383838;line-height: .4rem;margin-bottom: .16rem;
		}
		p:nth-child(2){
			font-size: .22rem;color: #999;line-height: .36rem;
		}
	}
}
.nogift{
	padding: 1rem 0;text-align: center;
	img{width: 1.6rem;margin:0 auto .5rem}
	p{font-size: .28rem;line-height:.4rem;padding:.6rem 0 .84rem}
	.btn{
		width:2.92rem;
		height:.76rem;
		background: url(../src/images/btn.png) no-repeat;
		background-size:100% auto;
		font-weight: bold;
		font-size: .3rem;
		line-height: .76rem;
		color: #fff;
		margin:0 auto;
	}
}
</style>
<script type="text/javascript">
	import maskLoad from "./components/load";
	import boxs from "./js/boxs2";	
	export default {
		data(){
			return{
				loading:true,
				islogin:false,
				boxs:boxs,
		 		plist:[],
		 		isEmpty:false
			}
		},
		created(){ 
			this.init();
	 	},
	 	mounted(){	 	
	 			
	 	},
	 	methods:{
	 		goLogin(){
	 			Local.login();
	 		},
	 		init(){
	 			// let data={"isLogin":true,"code":1,"myPrize":[[{first:0,second:111}],[{first:0,second:111}],[{first:0,second:111}],[{first:0,second:111}]],isEmpty:true};
				Local.reqaObj(`${common.server()}pkg170902/myPrize`, data=> { 
					this.islogin = data.isLogin;
					this.isEmpty = data.isEmpty;
		            this.plist = data.myPrize || [];
		            this.loading = false;					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog(common.param("act_f"),"XHprizeInit");
			},
			writeAddress(){
	 			let url=`${common.front()}contact/index.html?act_f=170902`;
	 			Local.openInside(url);
	 		},
	 		openbox(){
	 			let url=`${common.front()}act170902/index.html?act_f=170902`;
	 			Local.gotoQUrl(url,1);
	 		}
	 	},
	 	components:{
	 		maskLoad
	 	}
	};
</script>	
