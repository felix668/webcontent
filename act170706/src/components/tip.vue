<template>
	<div class="tip">
		<img src="src/images/foot.png" class="foot"></img>
		<p class="desc1">买好书，送积分！消耗{{plat == 'ios' ? '阅点、阅券' : '书币、书券'}}送等额积分</p>
		<p class="desc2">获积分，开宝箱！{{plat == 'ios' ? '阅券':'书券'}}Q币每天送</p>
	</div>
</template>
<style lang="sass" scoped>
.tip{
	text-align: center;
	padding-top: .32rem;
	padding-bottom: .28rem;
	background-color: #f6e6c4;
	position: relative;
	width: 7.14rem;
	margin: 0 auto;
	background-size: 3.51rem .08rem;
	background-image: url("../images/line.png");
	background-repeat: no-repeat;
	background-position: 1.7rem 1.3rem;
	margin-bottom: .26rem;
	.foot{
		position: absolute;
		width: .71rem;
		height: .48rem; 
		right: .4rem;
		top: .6rem;
	}
	.desc1{
		color: #bc7e51;
		font-size: .24rem;
		margin-bottom: .2rem;
	}
	.desc2{
		color: #e55f5c;
		font-weight: bold;
		font-size: .26rem;
		margin-bottom: .32rem;
	}
}
</style>
<script>
	export default{
		props:["package"],
		data:function(){
			return{			
				plat: window.pt
			}
		},
	}
</script>