<template>
	<div id="root">
		<p
		@click="toPage('http://iyuedu.qq.com/event/acttopiclive/adr/index.html?topicid=325150')">大神直播正式</p>
		<p
		@click="toPage('http://iyuedu.qq.com/event/act170201/adr/farm.html?act_f=170222')">冬牧场正式</p>
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		p {
			margin: 10px 0;
			font-size: 20px; text-decoration: underline;
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
		},
		data: function(){
			return {};
		},
		computed: {
		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
		},
		methods: {
			toPage(href){
				bnative.openPage( href );
			}
		}
	}
</script>