<template>
	<dl class="rule">
		<dt>- 活动规则 -</dt>
		<dd class="detail">
			<p>
				<span>1.</span>
				活动时间：2017年5月12日－2017年5月14日
			</p>
			<p>
				<span>2.</span>
				将《战神之王》加入书架并阅读至第2章，即可在活动页面领取随机数值{{text}}，最高50{{text}}；同一账号及设备仅限领取一次，数量有限，领完为止

			</p>
			<p>
				<span>3.</span>
				分享活动页面即可在活动页面选择一本书限时免费阅读2天；用户可多次分享，但仅能领取一次限免
			</p>
			<p>
				<span>4.</span>
				其他平台二次分享暂不能获得抽奖机会，请从QQ阅读客户端内发起分享获得限免
			</p>
			<p v-if="plat=='ios'">
				<span>5.</span>
				ios游客登录用户暂不支持参加加书架阅读得好礼活动
			</p>
		</dd>
	</dl>
</template>
<style lang="sass">
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	padding:.2rem 0 .5rem;
	color:#666;
	margin:0 .4rem .68rem;
	background: rgba(0,0,0,.6) url(../images/rule.png) no-repeat;
	background-size:100% 100%;
	dt{
		font-size:.36rem;
		color:#e4bf3b;
		line-height:.88rem;
		text-align:center;
	}
	dd{
		padding:0 .24rem 0 .3rem;
		p{
			line-height:.42rem;
			padding:.08rem 0 .08rem .3rem;
			position:relative;
		}
		span{
			position: absolute;
			top:.12rem;
			left: 0;
		}
	}
}
</style>
<script>
	export default{
		props:["plat"],
		data:function(){
			return{	
				text:this.plat=="ios" ? "阅券" : "书券"
			}
		},
	}
</script>
