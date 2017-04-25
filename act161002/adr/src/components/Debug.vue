<template>
	<div class="DEBUG">
		testMode: {{state.testMode}}, loggedIn: {{state.loggedIn}}<br/>
		writerNo: {{state.writerNo}}<br/>
		picked: {{state.picked}}, drawn: {{state.drawn}}, voted_on_other_platform: {{state.voted_on_other_platform}}<br/>
		couponGot: {{state.couponGot}}, couponUsed: {{state.couponUsed}}
	</div>
</template>

<style lang="less" scoped>
	.DEBUG {
		position: fixed; left: 0; bottom: 0;
		width: 100%; height: 100px;
		background: rgba(0,0,0,0.5);
		color: white;
		font-size: 14px;
		z-index: 9999;
	}
</style>

<script type="text/javascript">
export default {
	props: ['state'/*,'loggedIn','picked','drawn','writerNo','couponGot'*/],
	mounted: function(){
		//console.log(this.state)
	}
}
</script>