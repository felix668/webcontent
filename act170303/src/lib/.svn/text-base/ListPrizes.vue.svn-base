<template>
	<div class="ListPrizes">
		<div class="none" v-if="items.length===0">您还没有任何奖品</div>
		<div class="item"
		v-for="a in items">
			<img class="thumb" :src=" img+'/prizes_/'+a.id+(a.name==='200阅券'?'_ios':'')+'.png' "/>
			<div class="name">
				{{a.name}}
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.ListPrizes {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		padding: 0 0.3rem;
		overflow: hidden;
		.none {
			padding: 0.3rem 0;
			font-size: 0.3rem;
			text-align: center;
			color: grey;
		}
		.item {
			padding: 0.22rem 0;
			border-bottom: 1px solid #e0e0e0;
			overflow: hidden;
			.thumb {
				float: left;
				//box-sizing: border-box;
				//display: table;
				width: 1.48rem; height: 1.28rem;
				margin-right: 0.27rem;
				//border: 2px solid #e0e0e0;
			}
			.name {
				float: left;
				font-size: 0.28rem;
				line-height: 1.28rem;
				font-weight: bold;
				color: #cfb268;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			items: {},
			img: {},
			act: {},
			ios: {}
		},
		components: {

		},
		data: function(){
			return {
			}
		},
		watch: {

		},
		computed: {
		},
		created: function(){
			
		},
		mounted: function(){
			// console.log(this.items)
		},
		watch: {
			
		},
		methods: {
		}
	}
</script>