<template>
	<dl class="rule">
		<dt>活动规则</dt>
		<dd class="detail">
			<p v-for="(list,index) in rule">
				<span>{{index+1}}.</span>
				{{list}}
			</p>
		</dd>
	</dl>
</template>
<style lang="sass">
dl,dt,dd{margin:0;padding:0;}
/*rule*/
.rule{
	position: relative;
	padding-bottom:27px;
	color:#555;
	dt{
		font-size:15px;
		color:#555;
		line-height:45px;
		padding-left:34px;
		font-weight:bold;
	}
	dd{
		padding:0 17px 0;
		p{
			font-size:14px;
			line-height:20px;
			padding:5px 0 5px 18px;
			position:relative;
		}
		span{
			position: absolute;
			top:6px;
			left: 0;
		}
	}
}
</style>
<script>
	export default{
		props:["rule"]
	}
</script>
