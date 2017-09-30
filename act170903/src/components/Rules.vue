<template>
	<div class="rules">
		<div class="ttbox"></div>
		<ul>
			<li><span>1</span>活动时间2017年9月27日-10月8日</li>
			<li><span>2</span>在活动期间，碎片可以用于抽奖，活动结束后，碎片不再有效</li>
			<li><span>3</span>获得实物奖的用户请在活动期间<a @click="writeAddress">填写有效联系方式</a>，奖品将在活动结束后30日内快递给您</li>
			<li><span>4</span>活动最终解释权归QQ阅读所有<em v-if="plat!='adr'">,与苹果公司无关</em></li>
		</ul>
		<p class="copyright"></p>
	</div>
</template>
<style lang="less">
@ftcolor:#835c47;
.rules{
    margin: .5rem 0 0; width: 100%; background: url(../images/botbg.png) no-repeat center bottom; background-size: 100% auto;
	.ttbox{ width: 3rem; height: 1.18rem; background: url(../images/rulett.png) no-repeat; background-size: 100% 100%; margin:0 auto .2rem;}
	p{font-size: .36rem; line-height: .68rem; text-align: center; position: relative; z-index: 1;}
	li{ text-align: left; margin: 0 .4rem 0 .27rem; padding-left: .53rem; padding-bottom: .18rem; position: relative; z-index: 1; font-size: .26rem; line-height: .48rem;
	    span{position: absolute; left: 0; top: .07rem; z-index: 1; text-align: center; display: block; width: .46rem; height: .46rem; background: url(../images/ruleicon.png) no-repeat; background-size: 100% 100%; line-height: .46rem;}
	    a{ text-decoration: underline; color: #6cabd5; }
    }
    p.copyright{ width: 2.32rem;  height: 1.6rem; background: url(../images/logo.png) no-repeat center center; background-size: 2.32rem auto; margin:0 auto; }
}
</style>
<script>
	export default {
		data(){
			return{
				plat:window.pt
			}
		},
		methods:{
			writeAddress(){
				console.log('goadress');
				Local.forceLog(common.param("act_f"),"GQJSPgocontact");
	 			let url=`${common.front()}contact/index.html`;
	 			Local.gotoQUrl(url);
	 		}
	 	}
	}
</script>