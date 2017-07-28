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
				<ul class="plist" v-if="plist.length>0">
					<li v-for="item in plist">
						<div class="pic">
							<img :src="'src/images/l'+item.first+'.png'" :class="'l'+item.first">
						</div>
						<p>{{item.second}}</p>
					</li>
				</ul>
				<div class="nogift" v-else>
					<img src="src/images/l3.png">
					<p>您还没有奖品哦</p>
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
	}
	p{margin-left:.44rem;font-size: .28rem;color: #383838;}
	.l0{width: .7rem;}
	.l1{width: .8rem;}
	.l2,.l4{width: .88rem;}
	.l3{width: .73rem;}
	.l5{width: 1rem;}	
}
.nogift{
	padding: 1rem 0;text-align: center;
	img{width: .73rem;margin:0 auto 1rem}
	p{font-size: .3rem;}
}
</style>
<script type="text/javascript">
	import maskLoad from "./components/load.vue";
	export default {
		data(){
			return{
				loading:true,
				islogin:false,
		 		plist:[]
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
				Local.reqaObj(`${common.server()}pkg170607/myPrize`, data=> { 
					this.islogin=data.isLogin;
		            this.plist=data.myPrize;
		            this.loading=false;					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog(common.param("act_f"),"LYFpageInit");
			},
			writeAddress(){
	 			let url=window.pt=="ios" ? `${common.front()}act161002/ios/contact.html` :`${common.front()}act161002/adr/contact.html`;
	 			Local.openInside(url);
	 		},
	 	},
	 	components:{
	 		maskLoad
	 	}
	};
</script>	
