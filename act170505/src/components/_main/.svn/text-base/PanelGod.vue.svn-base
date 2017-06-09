<template>
	<div class="PanelGod"
	:style=" 'background-image: url('+img+'/main/panel_bg.png);background-size:100% 100%;' ">
		<div class="avatar"
		:style=" 'background-image:url('+god.avatar+');background-size: 100% 100%;' "></div>
		<div class="name">
			<div class="les"></div>
			<div class="middle">
				{{god.name}}
			</div>
			<div class="les"></div>
		</div>
		<div class="intro">
			{{god.intro}}
		</div>
		<swiper-cards :items="god.books"></swiper-cards>
	</div>
</template>

<style lang="less" scoped>
	.PanelGod {
		position: relative;
		width: 6.9rem; height: 6.81rem;
		margin: auto; margin-bottom: 0.4rem;
		overflow: hidden;
		.avatar {
			box-sizing: border-box;
			position: absolute; left: 2.8rem; top: 0.07rem;
			width: 1.24rem; height: 1.24rem;
			border: 0.06rem solid #726abf;
			border-radius: 1000px;
		}
		.name {
			display: table;
			height: 0.4rem;
			margin: auto;
			margin-top: 1.48rem;
			margin-bottom: 0.16rem;
			background: #4f488a;
			.les {
				float: left;
				width: 0.44rem; height: 0.4rem;
				&:nth-child(1) {
					// background: linear-gradient(to right, rgba(81,72,141,0), rgba(81,72,141,1));
					background: linear-gradient(to right, #3C255D, #4f488a);
				}
				&:nth-child(3) {
					// background: linear-gradient(to right, rgba(81,72,141,0), rgba(81,72,141,1));
					background: linear-gradient(to left, #3C255D, #4f488a);
				}
			}
			.middle {
				float: left;
				height: 0.4rem;
				line-height: 0.4rem;
				font-size: 0.32rem;
				color: #fceec3;
			}
		}
		.intro {
			box-sizing: border-box;
			width: 100%;
			padding: 0 0.52rem;
			// margin-bottom: 0.5rem;
			font-size: 0.24rem;
			text-align: center;
			color: #9db0f8;
		}
	}
</style>

<script>
	export default {
		props: ['god'],
		components: {
			SwiperCards: require('./SwiperCards.vue')
		},
		data: function(){
			return {
			}
		},
		computed: {
			img() {
				return this.$store.state.img;
			},
		},
		watch: {
		},
		mounted: function(){
		},
		methods: {
		}
	}
</script>