<template>
	<div id="app">
		<div class="banner"></div>
		<div class="downbtn" @click="downQQread"><span>下载QQ阅读领取</span><ul class="arrows"><img :src="'src/images/arrow.png'"><img :src="'src/images/arrow.png'"><img :src="'src/images/arrow.png'"></ul></div>
		<h4>腾讯视频VIP会员下载QQ阅读即可获得“百元”大礼包</h4>
		<div class="prize"></div>
		<p class="copyright">本活动仅限QQ阅读新用户参加</p>
		<Alert v-show="showAlert"></Alert>
		<app-load v-show="loadmask"></app-load>
	</div>
</template>

<script type="text/javascript">
	import "./css/index.less"
	import Alert from "./components/Alert.vue";
	import appLoad from "./components/appload.vue"
	export default {
		components:{
	 		Alert,appLoad
	 	},
		data:function(){
			return{
				isVip:0,
				showAlert:false,//是否显示弹窗
				loadmask:false,
				installStat:false
			}
		},//TenvideoJSBridge.invoke("API名称", {调用参数},  <回调函数>); 
		created(){
			let self=this;
			if(typeof TenvideoJSBridge == "object"){
			    self.initPage();
			} else {
			  	if(document.addEventListener){
			        document.addEventListener("onTenvideoJSBridgeReady", self.initPage(), false);
			    } else if(document.attachEvent){
			        document.attachEvent("onTenvideoJSBridgeReady", self.initPage());
			    }
			}
			self.initPage();
	 	},
	 	methods:{
	 		initPage(){
	 			let self = this;
	 			forceLog('170607',"TXVIPindex-"+env.pt);
				if(param('memberV') === null){
					self.isVip=0;
	 			}else{
	 				self.isVip=param('memberV');
	 			}
				TenvideoJSBridge.invoke('isInstalled',{"pkgName":"com.qq.reader", "pkgUrl":"uniteqqreader://", "appName":"QQ阅读"},function(res){
					res=JSON.parse(res);
					if (res.errCode){ //调用失败
				        self.installStat=false;
				    }else{
				    	self.installStat=res.result.installed;
				    }
				    console.log(res);
				});
				
	 		},
	 		downQQread(){
	 			let self=this;
	 			forceLog('170607',"TXVIPdownQQread-"+env.pt);
	 			if(self.isVip==1){//vip会员，是否安装QQ阅读
					if(self.installStat){//已安装		qqreader://	
						// TenvideoJSBridge.invoke('launch3rdApp', {"pkgName":"com.qq.reader", "pkgUrl":"uniteqqreader://nativepage/client/bookshelf", "appName":"QQ阅读"},function(res){
						// 	console.log(res);
						// });
						N.openApp();
					}else{
						self.loadmask=true;
					}
	 			}else{
	 				self.showAlert=true;
	 			}
	 		},
	 	}
	}
</script>
