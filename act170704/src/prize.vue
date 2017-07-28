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
							<img :src="(plat=='ios' && item.id==1)?'./src/images/yuequan.png':prizeImg[item.week][item.id]">
						</div>
						<p><span v-if="item.id==1 || item.id==5">{{ item.count}}</span>{{ (plat=='ios' && item.id==1)?'阅券':prizeName[item.week][item.id]}}</p>
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

<script type="text/javascript">
	import maskLoad from "./components/Load.vue";
	export default {
		data(){
			return{
				loading:true,
				plat: window.pt,
				islogin:false,
		 		plist:[],
		 		prizeName:[['谢谢参与','书券','5Q币','公仔','小米插排','成长值'],['谢谢参与','书券','5Q币','公仔','QQ阅读电子书','成长值'],['谢谢参与','书券','5Q币','公仔','漫画周边','成长值'],['谢谢参与','书券','5Q币','公仔','U盘','成长值'],['谢谢参与','书券','5Q币','公仔','小米移动电源','成长值']],
				prizeImg:[['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/chapai.png','./src/images/chengzhzhi.png'],['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/QQreadbook.png','./src/images/chengzhzhi.png'],['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/zhoubian.png','./src/images/chengzhzhi.png'],['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/Upan.png','./src/images/chengzhzhi.png'],['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/dianyuan.png','./src/images/chengzhzhi.png']],
			}
		},
		created(){ 
			this.init();
	 	},
	 	methods:{
	 		goLogin(){
	 			Local.login();
	 		},
	 		init(){
				Local.reqaObj(common.server()+'pkg170704/prizelist', data=> { 
					console.log(data);
					this.islogin=data.isLogin;
		            this.plist=data.prizes;
		            this.loading=false;				
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog(common.param("act_f"),"JFBXmyprize");
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
		img{display: block; width: 100%;}
	}
	p{margin-left:.44rem;font-size: .28rem;color: #383838;}	
}
.nogift{
	padding: 1rem 0;text-align: center;
	img{width: .73rem;margin:1rem auto .6rem}
	p{font-size: .3rem;}
}
</style>
