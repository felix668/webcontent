<template>
	<div class="rule" :mid="mdata.mid">
		<dl class="ruledesc">
			<dt>{{mdata.title}}</dt>
			<dd v-for="(list,index) in mdata.content">
				<span>{{index+1}}.</span>{{list}}
			</dd>
		</dl>
	</div>
</template>
<style lang="sass" scoped>
.rule{padding:.5rem 0 .26rem}
.ruledesc{
	dt{font-size:.36rem;font-weight:bold;text-align:center;margin-bottom:.36rem;}
	dd{font-size:.28rem;line-height:.42rem;padding:.09rem .36rem .09rem .72rem;position: relative;
		span{position: absolute;top:.1rem;left:.5rem;}
	}
}
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{

		}
	}
}
</script>

