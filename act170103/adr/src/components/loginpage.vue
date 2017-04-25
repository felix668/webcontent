<template>
	<div class="loginpage" v-if="!islogin">
		<img :src="'../adr/images/unlogin.jpg'">
	 	<div class="btn" @click="gologin">
	 		<strong>登录帐号抢购 ></strong>
	 	</div>
	</div>
	<div class="blackuser" v-else>
		<img :src="'../adr/images/blacku.jpg'">	
		<p class="sorry">对不起</p>
		<p>本期促销仅限指定用户参加哦</p>
	</div>
</template>
<style lang="sass" scoped>
.blackuser{
	position: fixed;width:100%;height: 100%;top: 0;left: 0;z-index:1000;text-align: center;color: #444;
	img{width:4.96rem;margin:1.86rem auto 0}
	.sorry{
		font-weight: bold;
		padding: .52rem 0 .32rem;
	}
}
.loginpage .btn{position: absolute;top:6.98rem;left:0;right:0;margin:auto;width:3.24rem;height: 1rem;}
.blackumask{
	color: #444;text-align: center;
	.sorry{
		font-weight: bold;
		padding:.24rem 0 .34rem;
	}
	.submit{margin-top: .52rem}
}
</style>
<script type="text/javascript">
	export default {
		props:["islogin"],
		data:function(){
			return{			
			}
		},
		methods:{
			gologin:function(){
	 			// if(this.handlogin){
	 			// 	return;
	 			// }
	 		// 	var url=location.search; 
				// if(url.indexOf("?")!=-1) {
				// 	window.location.href+="&hlogin=1";
				// }else{
				// 	window.location.href+="?hlogin=1";
				// } 
			    Local.login();
	 			Local.forceLog(common.param("act_f"),"TSJloginbtn");
	 		}
	 		// hidemask:function(){
	 		// 	window.location.href="uniteqqreader://nativepage/infostream/list";
	 		// }
	 	}
	}
</script>