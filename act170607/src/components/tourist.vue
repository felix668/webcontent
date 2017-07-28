<template>
	<div class="prizemask">
		<div class="fail">
			<img src="src/images/l3.png">
			<div class="title">预约失败</div>
			<p>暂不支持游客账号预约</p>
			<p>支持QQ或微信登录哦</p>
			<div class="btn" @click="hidemask">–<strong>我知道了</strong>–</div>
		</div>	
	</div>
</template>
<style lang="scss" scoped>

</style>
<script>
	export default{
		data(){
			return {
			}
		},
		mounted(){
			
		},
		methods: {
	 		hidemask(){
	 			this.$parent.iosyk=false;
	 		}
	 	}
	}
</script>