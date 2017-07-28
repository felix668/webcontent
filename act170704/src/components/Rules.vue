<template>
	<div class="rules">
		<h4 class="ttbox">活动规则：</h4>
		<ul>
			<li><span>1</span>活动时间：2017年7月17日-9月03日</li>
			<li><span>2</span>用户每累计100积分可获得一次开宝箱机会，机会在活动期间内有效</li>
			<li><span>3</span>开宝箱时不扣除积分，不影响周榜和总榜排名</li>
			<li><span>4</span>获得实物奖品的用户请及时<a @click="goadress">填写地址</a>等信息，信息不全者视为放弃领奖</li>
			<li><span>5</span>活动最终解释权归QQ阅读所有</li>
		</ul>
	</div>
</template>
<style lang="less">
@ftcolor:#835c47;
.rules{
    margin: .5rem 0;
	.ttbox{ font-size: .3rem; padding-left: .8rem; color: @ftcolor; line-height: .6rem; margin-bottom: .1rem;}
	p{font-size: .36rem; line-height: .68rem; text-align: center; position: relative; z-index: 1;}
	li{ text-align: left; margin: 0 .4rem .18rem .27rem; padding-left: .53rem; position: relative; z-index: 1; font-size: .26rem; line-height: .48rem;
	    span{position: absolute; left: 0; top: .07rem; text-align: right; display: block; width: .34rem; height: .34rem; border-radius: 100%; text-align: center; line-height: .36rem; overflow: hidden; background: #9c7a64; font-size: .22rem; color: #fff1da;}
	    a{ color: #2f78ff; text-decoration: underline; }
    }
    p.copyright{ text-align: center; font-size: .28rem; line-height: .8rem;  }
}
</style>
<script>
	export default {
		props:['islogin'],
		data(){
			return {
				plat:window.pt
			}
		},
	 	methods:{
	 		goadress(){
	 			if(this.islogin){
	 				let url=this.plat=="ios" ? `${common.front()}act161002/ios/contact.html` :`${common.front()}act161002/adr/contact.html`;
 					Local.openInside(url);
	 			}else{
	 				Local.login();
	 			}
	 		}
	 	}
	}
</script>

