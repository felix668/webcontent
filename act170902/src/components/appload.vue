<template>
<div class="loadmask">
	<div class="tiparea">
			<h3>下载QQ阅读,畅读海量小说</h3>
			<p>如果还未安装QQ阅读，你可以：</p>
			<div class="btns">
				<span class="cancle" @click="hidemask">取消</span>
				<span class="certain" @click="appload">下载QQ阅读</span>
			</div>
		</div>
	</div>	
</div>
</template>
<style lang="sass" scoped>
.loadmask{position:fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,0.7);display:-webkit-flex;-webkit-align-items:center;-webkit-justify-content:center;z-index: 1000;
	.tiparea{width:6.4rem;background: #fff;border-radius:0.04rem;text-align: center;color: #444;font-size: .28rem;line-height:.4rem;position: relative;
		h3{font-weight: normal;padding:.26rem 0;border-bottom: 1px solid #e3e4e6;font-size: .28rem}
		p{padding: 0.64rem 0}
		.btns{
			display: -webkit-flex;-webkit-flex:1;width: 100%;
			span{height: 1rem;display: block;width: 100%;line-height: 1rem;-webkit-box-sizing:border-box;}
			.certain{background: #3d8dcf;color: #fff;}
			.cancle{color: #444;border-top: 0.01rem solid #e3e4e6;}
		}
	}
}
</style>
<script>
export default {
	methods:{
		hidemask:function(){
			this.$parent.loadmask=false;
		},
		appload:function(){		
			N.downLoad(null, '10024911');
			this.hidemask();
		}	
	}
}
</script>

