<template>
	<div class="List">
		<div class="content">
			<div class="train"
			:class=" co>=4?'right':'' ">
				<div class="triangle"
				:style=" 'transform: translate3d('+co*100+'%,0,0);' ">
					<img :src=" 'img/share/triangle.png' "/>
				</div>
				<div class="item"
				v-for="(a,i) in writers">
					<div class="upper">
						<div class="avatar" :class=" i===co?'active':'' "
						@click="act({type:'SWITCH',i:i})">
							<img :src=" 'img/cards/'+i+'.jpg' "/>
						</div>
					</div>
					<p class="name">{{a.name}}</p>
				</div>
				<div style="clear:both"></div>
			</div>
		</div>
	</div>	
</template>

<style lang="less" scoped>
	.List {
		@grey: #b1b1b1;
		width: 100%;
		margin-bottom: 0.25rem;
		//background: orange;
		overflow: hidden;
		.content {
			width: 6.56rem; margin: auto;
			border-bottom: 1px solid @grey;
			overflow: scroll;
			.train {
				position: relative;
				width: 10.42rem;
				transition: transform 1000ms;
				&.right {
					transform: translate3d(-35%,0,0);
				}
				.triangle {
					position: absolute; left: 0; bottom: 0;
					width: 1.3rem;
					//background: orange;
					transition: transform 300ms;
					img {
						width: 0.3rem; margin: auto;
					}
				}
				.item {
					float: left;
					width: 1.3rem;
					.upper {
						height: 1.4rem;
						overflow: hidden;
						.avatar {
							box-sizing: border-box;
							width: 1.04rem; height: 1.04rem;
							margin: auto; margin-top: 0.12rem;
							border: 0.04rem solid white;
							border-radius: 1000px;
							overflow: hidden;
							transition: transform 500ms;
							img {
								width: 100%; height: 100%;
							}
							&.active {
								transform: scale(1.2);
							}
						}
					}
					.name {
						margin-bottom: 0.3rem;
						font-size: 0.24rem; text-align: center; color: #636363;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			writers: {},
			co: {},
			act: {}
		}
	}
</script>