<template>
	<div class="Flipper"
	@click="turn">
		<div class="page" ref="page1">1</div>
		<div class="page" ref="page0">0</div>
	</div>
</template>

<style lang="less" scoped>
	.Flipper {
		position: relative;
		width: 7rem; height: 11rem;
		margin: auto; margin-top: 0rem;
		perspective: 20rem;
		.page {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			transform-origin: 0 0;
			transition: 3s;
			background: orange;
			&.active {
				transform: rotateX(180deg);
			}
			&:nth-child(1) {
				background: blue;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				items: [{
					background: 'red'
				},{
					background: 'orange'
				}],
				current: 0
			}
		},
		methods: {
			turn: function(){
				this.$refs.page0.classList.add('active');
			}
		}
	}
</script>