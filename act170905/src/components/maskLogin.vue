<template>
	<div class="login">
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
				Local.login();
			}
		}
	}
</script>