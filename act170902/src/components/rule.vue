<template>
	<div class="rule">
		<img src="src/images/rule.png" class="rtitle">
		<div class="detail">
			<p>
				<span>1</span>
				活动时间：9月29日至10月5日
			</p>
			<p>
				<span>2</span>
				活动期间每消耗100{{text}}可获得1积分，积分可用于兑换宝箱
			</p>
			<p>
				<span>3</span>
				消耗{{text}}范围限于订阅书籍、打赏书籍、购买漫画及使用{{text}}开通包月；不包含{{text2}}消耗；其他活动使用{{text}}直接购买碎片，也不计算积分
			</p>
			<p>
				<span>4</span>
				Q币奖励和实物奖励将于活动结束后10个工作日内（不含节假日）发货，抵扣券为及时到账，有效期为7天
			</p>
			<p>
				<span>5</span>
				QQ登录用户未填写QQ号码，按照登录QQ号发放；微信及iOS游客中Q币后需要填写QQ帐号以便发放Q币
			</p>
			<p>
				<span>6</span>
				活动截止前，未填写地址按照放弃领奖处理，请认真<a href="javascript:;" class="adress" @click="contact">填写地址</a>
			</p>
		</div>
		<img src="src/images/logo.png" class="logo">	
	</div>
</template>
<style lang="sass">
/*rule*/
.rule{
	position: relative;
	color:#32688d;
	text-align:left;
	padding:.18rem 0 .4rem;
	background:url(../images/leaf.png) 0 bottom no-repeat;
	background-size:7.5rem auto;
	.rtitle{
		width:3rem;
		margin:0 auto .22rem;
	}
	.detail{
		padding:0 .46rem 0 .32rem;
		p{
			line-height:.4rem;
			padding:.09rem 0 .09rem .46rem;
			position:relative;
			font-size:.28rem;
		}
		span{
			width:.32rem;
			height:.32rem;
			text-align:center;
			line-height:.32rem;
			position: absolute;
			top:.14rem;
			left: 0;
			border-radius:50%;
			background:#4588b6;
			font-size:.2rem;
			color:#fff;
		}
		.adress{
			color:#d6ac5b;
			text-decoration:underline;
		}
	}
	.logo{
		width:2.32rem;
		margin:.44rem auto 0;
	}
}
</style>
<script>
	export default{
		props:["plat"],
		data:function(){
			return{	
				text:this.plat=="ios" ? "阅点" : "书币",
				text2:this.plat=="ios" ? "阅券" : "书券"
			}
		},
		methods:{
			contact(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				if(!this.$parent.mdata.isLogin){
	            	Local.login();
	            	return;
	            }
				let url=`${common.front()}contact/index.html?act_f=170902`;
	 			Local.gotoQUrl(url);
			}
		}		
	}
</script>
