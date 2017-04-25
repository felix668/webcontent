<template>
	<div class="DEBUG">
		<div class="fixed__">
			loggedIn: {{state.loggedIn}}<br/>
			show_notice: {{state.show_notice}}, timeleft: {{state.timeleft}}<br/>
			show_alarm: {{state.show_alarm}}, alarmState: {{state.alarmState}}<br/>
			show_chat: {{state.show_chat}}<br/>
			show_bottom_pic: {{state.show_bottom_pic}}
		</div>
	</div>
</template>

<style lang="sass" scoped>
	$red: #aaaaaa;
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