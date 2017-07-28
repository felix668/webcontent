<template>
	<div class="read-book">
		<!-- <p class="tip">点赞已满，《1987了》上线啦</p> -->
		<div class="btn" @click="goRead">–<strong>立即阅读</strong>–</div>
	</div>
</template>
<style lang="sass">
@mixin bg($width,$height,$pic){
	width:$width;
	height:$height;
	background:url("../images/"+$pic) no-repeat;
	background-size: 100% auto;
}
.read-book{
	// @include bg(100%,4.57rem,"read-bg.jpg");
	text-align:center;padding-top:.5rem;-webkit-box-sizing:border-box;position: relative;margin-top:-.2rem;z-index:10;
	.tip{color:#91867b;font-size:.24rem;margin:.36rem auto}
}
</style>
<script>
	export default{
		methods:{
			goRead(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				Local.goRead(860714);
				Local.forceLog(common.param("act_f"),"LYFgoRead");
			}
		}
	}
</script>
