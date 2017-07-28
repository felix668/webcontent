<template>
	<div class="bottom">
		<div class="btn" @click="share">–<strong>{{sharep ? "去QQ阅读点赞" : "爱它就去分享它"}}</strong>–</div>
		<p class="towb" v-if="plat == 'ios'">当前版本暂不支持分享至新浪微博</p>
		<!-- <img src="src/images/poster.jpg" class="poster"> -->
		<div class="rule" v-show="!sharep">
			<div class="rulet">- 活动规则 -</div>
			<ul class="ruled">
				<li>活动时间：2017年8月2日至8月3日；</li>
				<li>活动期间用户每天登录客户端可参加抽奖一次；</li>
				<li>同一台设备视为同一位用户；</li>
				<li>实物奖励将在中奖后30个工作日由工作人员联系您寄出，请认真 <a href="javascript:;" @click="writeAddress">填写地址</a>
				</li>
					
			</ul>
			<p class="cpr">本活动最终解释权归QQ阅读所有。</p>	
		</div>
		<div class="logo">
			<img src="src/images/logo.png">
		</div>
	</div>
</template>
<style lang="sass" scoped>
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	padding:.6rem .3rem 0;
	color:#777;
	background:#2f2f2f;
	.rulet{
		font-size:.28rem;
		line-height:.88rem;
		text-align:center;
	}
	.ruled{	
		li{
			list-style:decimal outside;	
			line-height:.42rem;
			padding:.1rem 0;
			margin:0 .3rem;
			position:relative;
		}
		a{
			color:#d6ac5b;
			text-decoration:underline;
		}
	}
	.cpr{
		line-height:.42rem;
		padding:.1rem 0 .1rem .2rem;
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
				url:`${common.sharefront()}act170608/share.html?act_f=170608`,
				cover:`${common.sharefront()}act170608/src/images/cover.png`,
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
