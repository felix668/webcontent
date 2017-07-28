<template>
	<div class="loginbox">
		<img class="topimg" :src="'src/images/logtop.jpg'" />
		<p>选出心中神作，赚积分开宝箱<span>天天赢{{ plat=='adr'?'书券':'阅券'}}、Q币、更有电纸书大奖</span></p>
		<a class="loginbtn" @click="tologin">登录参与</a>
		<div class="mask" v-if='show'>
			<div class="tiparea">
				<h4>暂不支持游客账号，<br>去设置－退出登录，点击QQ或微信登录参与</h4>
				<div class="closebtn" @click="closemask">我知道了</div>
			</div>
	    </div>
	</div>
</template>
<script>
	export default {
		props:['login','guest'],
		data(){
			return{
				plat: window.pt,
				show:false
			}
		},
	 	methods:{
	 		tologin(){
	 			let self=this;
	 			Local.forceLog(common.param("act_f"),"SJTPlogin");
	 			if(self.login && self.guest){
	 				self.show=true;
	 			}else{
	 				Local.login();
	 			}
	 		},
	 		closemask(){
	 			this.show=false;
	 		}
	 	}

	}
</script>
<style lang='less'>
@ft28:.28rem;
@bgcolor:#fdedd6;
.loginbox{
	position: fixed; left: 0; top: 0; z-index: 111; width: 100%; height: 100%; background: @bgcolor;
	&:after{ content:''; position: absolute; left: 0 ;bottom: 0; z-index: 1; width: 100%; height: 1.63rem;background:url(../images/botimg.jpg) no-repeat left top; background-size: 100% auto; }
	.topimg{ display: block; width: 100%; }
	p{text-align: center; font-size: @ft28; color: #b38059; line-height: .5rem;
		span{ display: block; font-weight: bold; color: #d56761; }
	}
	.loginbtn{ display: block; width: 4.78rem; height: .96rem; text-align: center; line-height: .96rem; border-radius: .96rem; background: #fb7262; font-size:.36rem; ;color: #fff; font-weight: bold; margin:.8rem auto 0; position: relative; z-index: 2 }
}
</style>