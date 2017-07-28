<template>
	<div class="mask">
		<div class="teaparea">
		   <div class="close" @click="closemask"><img :src="'src/images/close.png'" /></div>
		   <h4>立即开通腾讯视频VIP<br>领取QQ阅读“百元”大礼包</h4>
		   <div class="govip" @click='openvip'>立即开通</div>
		</div>
	</div>
	
</template>
<style>
.mask{
   position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.7);-webkit-align-items:center;-webkit-justify-content:center;z-index: 100;display:-webkit-flex;}
.teaparea{ width: 4.96rem; background: #fff; border-radius: 5px; position: relative; z-index: 1; }
.teaparea h4{ font-size: .32rem; line-height: .48rem; padding: 1.1rem 0 .9rem; text-align: center; }
.close{ position: absolute; top: -.3rem; right: -.3rem;  width: .6rem; height: .6rem;}
.close img{ display: block; width: 100%; }
.govip{ height: 1.1rem; width: 100%; line-height: 1.1rem; text-align: center; font-size: .3rem; color: #fff; background: #fc7767; border-radius: 0 0 5px 5px;}
</style>
<script>
	export default {
	 	methods:{
	 		closemask(){
	 			let self=this;
	 			self.$parent.showAlert=false;
	 		},
	 		openvip(){
	 			window.location.href ='https://film.qq.com/weixin/upay.html';
	 		}
	 	}
	}
</script>