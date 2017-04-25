<template>
	<div class="Showcase">
		<div class="item"
		v-for="a in items">
			<img class="cover" :src=" img+'/books/'+a.id+'.jpg' "
			@click="act({type:'TO_BOOK',bid:a.bid})"/>
			<p class="title">{{a.title}}</p>
			<p class="author">{{a.author}}</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Showcase {
		padding-left: 0.42rem;
		margin-bottom: 0.3rem;
		overflow: hidden;
		.item {
			float: left;
			width: 1.5rem;
			margin-right: 0.22rem;
			margin-bottom: 0.37rem;
			.cover {
				width: 1.5rem; height: 2.08rem;
				margin-bottom: 0.15rem;
			}
			.title {
				margin-bottom: 0.08rem;
				font-size: 0.28rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.author {
				font-size: 0.24rem;
				color: #717171;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			items: {
				default: function(){
					return [{
						id: 0,
						bid: 244786,
						title: '从你的全世界路过',
						author: '张嘉佳'
					},{
						id: 1,
						bid: 464309,
						title: '盗墓笔记',
						author: '南派三叔'
					},{
						id: 2,
						bid: 815339,
						title: '欢乐颂',
						author: '阿耐'
					},{
						id: 3,
						bid: 818544,
						title: '幻城',
						author: '郭敬明'
					},{
						id: 4,
						bid: 11366903,
						title: '爵迹',
						author: '郭敬明'
					},{
						id: 5,
						bid: 464654,
						title: '琅琊榜',
						author: '海晏'
					},{
						id: 6,
						bid: 829138,
						title: '麻雀',
						author: '海飞'
					},{
						id: 7,
						bid: 750056,
						title: '诛仙',
						author: '萧鼎'
					}]
				}
			},
			img: {},
			act: {}
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
		watch: {
			
		},
		methods: {

		}
	}
</script>