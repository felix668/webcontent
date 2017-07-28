<template>
	<div class="bottom">
		<div class="btn" @click="share">–<strong>{{sharep ? "去QQ阅读点赞" : "爱它就去分享它"}}</strong>–</div>
		<p class="towb" v-if="plat == 'ios'">当前版本暂不支持分享至新浪微博</p>
		<img src="src/images/poster.jpg" class="poster">
		<dl class="rule" v-show="!sharep">
			<dt>- 活动规则 -</dt>
			<dd class="detail">
				<p>
					<span>1.</span>
					活动时间：2017年7月5日至7月11日；
				</p>
				<p>
					<span>2.</span>
					集赞达到指定人数，李易峰新书正式上线，每天每位用户可参与一次集赞；
				</p>
				<p>
					<span>3.</span>
					活动期间用户每天登录客户端可参加抽奖一次；
				</p>
				<p>
					<span>4.</span>
					同一台设备视为同一位用户；
				</p>
				<p>
					<span>5.</span>
					实物奖励将在中奖后30个工作日由工作人员联系您寄出，请认真 <a href="javascript:;" @click="writeAddress">填写地址</a>；
				</p>
				<p>·本活动最终解释权归QQ阅读所有。</p>		
			</dd>
		</dl>
		<div class="logo">
			<img src="src/images/logo.png">
		</div>
	</div>
</template>
<style lang="sass">
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	padding:.6rem 0 0;
	color:#777;
	background:#2f2f2f;
	dt{
		font-size:.28rem;
		line-height:.88rem;
		text-align:center;
	}
	dd{
		padding:0 .4rem 0 .26rem;
		p{
			line-height:.42rem;
			padding:.1rem 0 .1rem .28rem;
			position:relative;
		}
		span{
			position: absolute;
			top:.12rem;
			left: 0;
		}
		a{
			color:#d6ac5b;text-decoration:underline;
		}
	}
}
.towb{text-align:center;margin:-.6rem 0 .6rem;}
.btn{margin-bottom: .62rem;}
.logo{background:#2f2f2f;padding-bottom:.7rem;}
</style>
<script>
export default{
	props:["sharep"],
	data(){
		return {
			plat:window.pt
		}
	},
	methods:{
		share(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			let sobj={
				url:`${common.sharefront()}act170607/share.html?act_f=170607`,
				cover:`${common.sharefront()}act170607/src/images/cover.png`,
				title:"李易峰新书集赞",
				desc:"李易峰新书等你集赞，豪礼抢不停"
			}
			Local.shareTopic(sobj.url,sobj.cover,sobj.title,sobj.desc);
			Local.forceLog(common.param("act_f"),"LYFshare");
		},
		writeAddress(){
 			let url=this.plat=="ios" ? `${common.front()}act161002/ios/contact.html` :`${common.front()}act161002/adr/contact.html`;
 			Local.openInside(url);
 		}
	}
}
</script>
