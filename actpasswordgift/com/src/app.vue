<template>
	<div id="root">
	 	<div class="giftbox">
	 		<img :src="'images/banner.png'" />
	 	</div>
	 	<div class="btn" @click="goapp">去QQ阅读领取好礼</div>
	 	<div class="mask" v-show="downshow">
	 		<div class="tiparea">
	 			<p class="top">下载QQ阅读，畅读海量小说</p>
				<p class="middle">如果您还未安装QQ阅读，您可以</p>
				<div class="bottom">
					<li class="confirm" @click="downapp">下载QQ阅读</li>
					<li class="cancel" @click="closemask">取消</li>
				</div>
	 		</div>
			
	 	</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
		},
		data:function(){
			return {
				downshow:false,//下载弹框
				}
		},
		methods: {
			goapp:function(){
				let self=this;
				S.open(function(installStat,plat){
					if(installStat){
						if(env.pt=="adr"){ 
							//N.openPage("http://iyuedu.qq.com/event/actpasswordgift/adr/index.html?act_f=170324");
						}else if(env.pt=="ios"){
							//N.openPage("https://yuedu.reader.qq.com/event/actpasswordgift/ios/index.html?act_f=170324");
							setTimeout(function(){
								self.downshow=true;
							}, 2000);
							setTimeout(function(){
								self.downshow=false;
							}, 5000);
						}	
					}else{
						self.downshow=true;//显示下载弹窗
					}
				});
				forceLog(param('act_f'),"openBtn"+env.pt);
		    },
		    downapp:function(){
		    	let self=this;
		    	N.downLoad(null, '10022495');
				this.downshow=false;
		    },
		    closemask:function(){
		    	let self=this;
		    	self.downshow=false;
		    }
		},
		created:function(){
			forceLog(param('act_f'));
		}
	}
</script>