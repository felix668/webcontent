<template>
	<div class="DEBUG">
		<div class="fixed__">
			loggedIn: {{state.loggedIn}}, page_no: {{state.page_no}} ,first: {{state.first}}<br/>
			charged: {{JSON.stringify(state.charged)}}<br/>
			have: {{JSON.stringify(state.have)}}<br/>
			opened: {{state.opened}}, haveGift: {{state.haveGift}}
		</div>
	</div>
</template>

<style lang="less" scoped>
	@red: #aaaaaa;
	.DEBUG {
		position: relative;
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
	mounted: function(){
		
	}
}
</script>