<style lang="less" scoped>
	.IconArrows {
		position: absolute; left: 5.24rem; top: 0.36rem;
		overflow: hidden;
		.arrow {
			float: left;
			width: 0.13rem;
		}
		@keyframes arrow1 {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes arrow2 {
			0% {
				opacity: 0;
			}
			9% {
				opacity: 0;
			}
			10% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes arrow3 {
			0% {
				opacity: 0;
			}
			19% {
				opacity: 0;
			}
			20% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		.arrow1 {
			animation: arrow1 1.5s infinite;
		}
		.arrow2 {
			animation: arrow2 1.5s infinite;
		}
		.arrow3 {
			animation: arrow3 1.5s infinite;
		}
	}
</style>

<template>
	<div class="IconArrows">
		<img class="arrow arrow1" :src=" img+'common/arrow.png' "/>
		<img class="arrow arrow2" :src=" img+'common/arrow.png' "/>
		<img class="arrow arrow3" :src=" img+'common/arrow.png' "/>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
		computed: {
			img () {
				return this.$store.state.img;
			}
		},
		data: function(){
			return {}
		}
	}
</script>