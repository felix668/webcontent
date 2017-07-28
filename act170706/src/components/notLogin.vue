<template>
	<div class="notLogin">
		<img src="src/images/notLogin.png" alt="">
		<p @click="login">登录参与</p>
	</div>
</template>
<script>
	export default{
		created(){
			Local.forceLog(common.param("act_f"),"TJSnotLogin")
		},
		methods:{
			login(){
				Local.forceLog(common.param("act_f"),"TJSclickLogin")
				console.log(1)
				Local.login()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.notLogin{
		overflow: hidden;	
		img{
			margin-top: -2rem;
			pointer-events: none;
		}
		p{
			width: 4.7rem;
			height: .9rem;
			background-color: #65b987;
			border-radius: .1rem;
			margin: 0 auto;
			font-size: .32rem;
			text-align: center;
			line-height: .9rem;
			font-weight: bold;
			margin-bottom: 1.1rem;
			margin-top: -.4rem;
		}
	}
	
</style>