<template>
	<div class="DEBUG">
		<div class="fixed__">
			loggedIn: {{state.loggedIn}}, day: {{state.day}}<br/>
			current: {{state.current}}<br/>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@red: #aaaaaa;
	.DEBUG {
		position: fixed; left: 0; bottom: 0;
		width: 100%; height: 100px;
		.fixed__ {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 100px;
			background: rgba(0,0,0,0.5);
			color: white;
			font-size: 14px;
			z-index: 9999;
		}
	}
</style>

<script type="text/javascript">
export default {
	props: ['state'],
	computed: {
		writers: function(){
			var state = [];
			this.state.writers.forEach(a=>{
				state.push(a.state)
			});
			return state;
		}
	},
	mounted: function(){
		
	}
}
</script>