<template>
<div class="mask">
	<div class="tiparea">
			<h3>下载QQ阅读,畅读海量小说</h3>
			<p>若未安装QQ阅读，请立即下载：</p>
			<div class="btns">
				<span class="cancle" @click="hidemask">取消</span>
				<span class="certain" @click="appload">下载QQ阅读</span>
			</div>
		</div>
	</div>	
</div>
</template>
<style>
.mask{position:fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,0.7);display:-webkit-flex;-webkit-align-items:center;-webkit-justify-content:center;z-index: 10000;}
.tiparea{width:6.4rem;background: #fff;border-radius:0.04rem;text-align: center;color: #444;font-size: .28rem;line-height:.4rem;position: relative;}
.tiparea h3{font-weight: normal;padding:.26rem 0;border-bottom: 1px solid #e3e4e6;font-size: .28rem}
.tiparea p{padding: 0.64rem 0}
.btns{
		display: -webkit-flex;-webkit-flex:1;width: 100%;}
.btns span{height: 1rem;display: block;width: 100%;line-height: 1rem;-webkit-box-sizing:border-box;}
.btns .certain{background: #3d8dcf;color: #fff;}
.btns .cancle{color: #444;border-top: 0.01rem solid #e3e4e6;}
	

</style>
<script>
export default {
	methods:{
		hidemask:function(){
			this.$parent.loadmask=false;
		},
		appload:function(){		
			//N.downLoad(null, '10028010');
			TenvideoJSBridge.invoke('download3rdApp',{"downloadUrl":"http://106.38.181.154/rpcs.myapp.com/myapp/rcps/d/10028010/qqreader_6.5.1.999_android_20170613195705_304517_otherstore-release_10028010_170629103113a.apk?mkey=5954ff57b20d48d1&f=d287&c=0&p=.apk","packageName":"com.qq.reader","iconUrl":"http://pp.myapp.com/ma_icon/0/icon_10555_1497428260/96","appName":"QQ阅读","itunesUrl":"https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8", "packageUrl":"uniteqqreader://", "channel":"10028010"},function(res){console.log(res)});
			
			this.hidemask();
		}	
	}
}
</script>

