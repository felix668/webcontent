<template>
	<div class="List">
		<img class="list_bg" :src=" 'img/results/list.png' "/>
		<div class="content">
			<div class="three">
				<div class="item"
				v-for="a in list.three">
					<div class="avatar">
						<img :src=" a.img "/>
					</div>
					<p class="name">{{a.name}}</p>
					<div class="prize">
						<p class="first">{{a.prize[0]}}</p>
						<p class="second">{{a.prize[1]}}</p>
					</div>
				</div>
			</div>
			<div class="seven">
				<div class="item"
				v-for="a in list.seven">
					<div class="avatar">
						<img :src=" a.img "/>
					</div>
					<p class="name">{{a.name}}</p>
					<p class="prize">{{a.prize}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.List {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		padding: 0 0.32rem;
		margin-bottom: 0.76rem;
		.list_bg {
			width: 100%;
		}
		.content {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			overflow: hidden;
			.three {
				margin-top: 0.35rem;
				.item {
					width: 100%; height: 1.76rem;
					overflow: hidden;
					.avatar {
						box-sizing: border-box;
						float: left;
						width: 0.66rem; height: 0.66rem;
						margin: 0.65rem 0.28rem 0 1.3rem;
						border-radius: 1000px;
						border: 0.03rem solid #f89b48;
						overflow: hidden;
						img {
							width: 100%; height: 100%;
						}
					}
					.name {
						float: left;
						width: 2.3rem;
						margin-top: 0.76rem;
						font-size: 0.3rem;
						color: #f89b48;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.prize {
						float: left;
						font-size: 0.3rem;
						color: #fba377;
						.first {
							padding-top: 0.52rem;
							padding-bottom: 0.1rem;
						}
					}
				}
			}
			.seven {
				margin-top: 0.38rem;
				.item {
					width: 100%; height: 1.04rem;
					overflow: hidden;
					.avatar {
						box-sizing: border-box;
						float: left;
						width: 0.66rem; height: 0.66rem;
						margin: 0.16rem 0.28rem 0 1.3rem;
						border-radius: 1000px;
						border: 0.03rem solid #f89b48;
						overflow: hidden;
						img {
							width: 100%; height: 100%;
						}
					}
					.name {
						float: left;
						width: 2.3rem;
						margin-top: 0.3rem;
						font-size: 0.3rem;
						color: #f89b48;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.prize {
						float: left;
						margin-top: 0.3rem;
						font-size: 0.3rem;
						color: #fba377;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: ['list']
	}
</script>