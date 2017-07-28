<template>
	<div class="btnBox">
		<div class="openChest" @click="openChest">开宝箱</div>
		<div class="goMain" @click="goMain">赚更多积分</div>
	</div>
</template>
<script>
	export default{
		methods:{
			openChest(){
				Local.openInside(common.front()+'act170704/index.html')
			},
			goMain(){
				Local.openInside(common.front()+'act170705/index.html')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.btnBox{
		height: 1.5rem;
		div{
			width: 2.28rem;
			height: .92rem;
			border-radius: .46rem;
			font-size: .3rem;
			text-align: center;
			line-height: .92rem;
			margin-top: .4rem;
		}
		.openChest{
			display: inline-block;
			margin-left: .66rem;
			background-color: #e79b63;
		}
		.goMain{
			margin-right: .66rem;
			float: right;
			background-color: #3fbc82;
		}
	}
</style>