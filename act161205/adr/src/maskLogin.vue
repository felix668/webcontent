<template>
	<div class="login">
		<div class="liu"></div>
		<img class="imgbox" :src="'images/loginimg.jpg'" />
		<a href="javascript:" class="loginbtn" @click="login">
			<span>登录参与</span>
		</a>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
			}
		},
		mounted: function(){
		},
		methods: {
			login:function(){
				console.log("qingdenglu");
				Local.login();
			}
		}
	}
</script>