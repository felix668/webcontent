<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-if="!over">
			<div class="wrap">
				<div class="userbox">
					<div class="userinfo"><img :src="userinfo.avor"/>我的积分：<span :class="{ nolog:!isLogin}" @click="login">{{ isLogin?userinfo.score:'登录查看' }}</span></div>
			        <div class="myPrize" @click="gomyprize">我的奖品</div>
				</div>
				<p class="nitice">{{ plat=='adr'?'书券，成长值':'阅券' }}，Q币，公仔，小米插排，<br>QQ阅读电子书，小米移动电源，U盘，漫画周边等你来拿</p>
				<div class="spaceline">
					<mask-alert  :plar="plat" :useNum="useNum" :surplusNum="surplusNum" :islogin='isLogin' :jifen="userinfo.score"></mask-alert>
					<earnintegral :plar="plat" :islogin='isLogin'></earnintegral>
				</div>
				<rules :islogin="isLogin"></rules>
			</div>
		</template>	
		<mask-over v-if="over"></mask-over>
	</div>
</template>

<script type="text/javascript">
	import "./css/index.less"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import rules from "./components/Rules.vue"
	import maskAlert from "./components/maskAlert.vue"
	import earnintegral from "./components/Integral.vue"
	export default {
		components:{
			maskLoad,
	 		maskOver,
	 		earnintegral,
	 		rules,
	 		maskAlert
	 		
	 	},
		data:function(){
			return{
				plat: window.pt,
		 		loading: false,
		 		over: false,
				isLogin: true,
				userinfo:{
					avor:'',//用户头像
					score:0//用户积分
				},
				useNum:0,//打开宝箱使用次数
				surplusNum:0,//剩余次数
				showAlert:false,

			}
		},
		created(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj(common.server() + "pkg170704/init", data=>{
					console.log(data);
					if(data.code == -4){
						this.over = true
					}else{
						this.isLogin=data.isLogin;
						this.userinfo.avor=data.avor?data.avor:"./src/images/defaultface.png";
						this.userinfo.score=data.score;
						this.useNum=data.useNum;
						this.surplusNum=data.surplusNum;
					}
					this.loading = false;	
				});
				Local.forceLog(common.param("act_f"),"JFBXindex");
	 		},
	 		login(){
	 			Local.login();
	 		},
	 		gomyprize(){
	 			//Local.forceLog(common.param("act_f"),"JFBXmyprize");
	 			Local.openInside(common.front()+'act170704/myprize.html?act_f=170704');
	 		}
	 	}
	}

</script>	
<style>
	
</style>
