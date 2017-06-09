<template>
	<div class="Ballot">
		<div class="row one">
			<Item :info="items[0]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[1]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[2]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
		</div>
		<div class="row two">
			<Item :info="items[3]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[4]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[5]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[6]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
		</div>
		<div class="row three">
			<Item :info="items[7]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[8]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
			<Item :info="items[9]" :act="act" :voted="voted" :type="type" :img="img" :state="state"></Item>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Ballot {
		position: relative;
		width: 100%;
		overflow: hidden;
		.row {
			overflow: hidden;
		}
		.one {
			float: left;
			clear: both;
			height: 4.33rem;
			margin-left: 1.06rem;
			margin-bottom: 0.06rem;
			padding-left: 0.11rem; padding-right: 0.11rem;
			border-left: 1px dashed #e7d9b5;
			border-right: 1px dashed #e7d9b5;
		}
		.two {
			float: left;
			clear: both;
			margin-left: 0.31rem;
			margin-bottom: 0.06rem;
		}
		.three {
			float: left;
			clear: both;
			margin-left: 1.05rem;
			padding-top: 0.28rem;
			padding-left: 0.11rem; padding-right: 0.11rem;
			border-left: 1px dashed #e7d9b5;
			border-right: 1px dashed #e7d9b5;
		}
	}
</style>

<script>
	export default {
		props: {
			state: {},
			type: {},
			items: {},
			voted: {},
			img: {},
			act: {}
		},
		components: {
			Item: require('./Item.vue')
		},
		data: function(){
			return {
			}
		},
		computed: {
		},
		created: function(){
			
		},
		watch: {
			
		},
		methods: {
		}
	}
</script>