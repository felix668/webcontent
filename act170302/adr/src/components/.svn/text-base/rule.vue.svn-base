<template>
	<dl class="rule">
		<dt>活动规则</dt>
		<dd>
			<p>
				<span>1.</span>
				活动时间：2017年3月30日0点~2017年4月5日24点
			</p>
			<p>
				<span>2.</span>
				点击作者头像可进入作者PK书评区，点赞及回复自动计入作者总票数
			</p>		
			<p>
				<span>3.</span>
				在作者大神说偷听，自动计入总票数
			</p>
			<p class="cpr" v-if="plat=='ios'">		
				活动与苹果公司无关，最终解释权归QQ阅读所有
			</p>
		</dd>
	</dl>
</template>
<style scoped lang="sass">
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	color:#e6cdb3;
	dt{
		text-align:center;
		font-size:18px;
		line-height:38px;
		font-weight:bold;
	}
	dd{
		padding:0 15px 35px;
		p{
			font-size:14px;
			line-height:20px;
			padding:5px 0 5px 15px;
			position:relative;
		}
		span{
			position: absolute;
			top:5px;
			left: 0;
		}
	}
	.cpr{
		font-size:12px;
		color:#e6cdb3;
		margin-top:.3rem;
		padding-left:0;
		text-align:center;
		opacity: .24;
	}
}
</style>
<script>
	export default{
		props:['plat']
	}
</script>
