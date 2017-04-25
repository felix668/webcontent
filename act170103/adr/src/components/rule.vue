<template>
	<dl class="rule">
		<dt>活动规则</dt>
		<dd>
			<p>
				<span>1</span>
				活动时间：2017年3月23日-2017年3月28日；
			</p>
			<p>
				<span>2</span>
				活动期间，可以按照优惠价格购买相应书籍现有章节的在线阅读权，活动结束后，已购买章节可继续免费在线阅读，新出更新章节需订阅阅读。
			</p>
			<p>
				<span>3</span>
				通过活动购买的书籍仅可以通过QQ阅读客户端内在线阅读，不可下载。
			</p>
			<p>
				<span>4</span>
				{{plat=="adr"?'':'活动与苹果公司无关，'}}最终解释权归QQ阅读所有。
			</p>
		</dd>
	</dl>
</template>
<style scoped lang="sass">
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	color:#555;
	dt{
		font-size:15px;
		color:#555;
		line-height:45px;
		padding-left:34px;
		font-weight:bold;
	}
	dd{
		padding:0 13px 35px 10px;
		p{
			font-size:12px;
			line-height:20px;
			padding:6px 0 6px 26px;
			position:relative;
		}
		span{
			position: absolute;
			top:7px;
			left: 0;
			width: 17px;
			height: 17px;
			background: #534f6f;
			border-radius: 50%;
			font-size:11px;
			color: #fffaf1;
			text-align: center;
			line-height:18px
		}
	}
}
</style>
<script>
	export default{
		props:['plat']
	}
</script>
