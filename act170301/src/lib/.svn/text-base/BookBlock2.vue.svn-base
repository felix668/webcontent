<template>
	<div class="BookBlock"
	@click="turn_">
		<div class="item" ref="item0">
			<div class="upper">0</div>
			<div class="lower">0</div>
		</div>
		<div class="item" ref="item1">
			<div class="upper">1</div>
			<div class="lower">1</div>
		</div>
		<div class="page" ref="page">
			<div class="back">1</div>
			<div class="front">0</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.BookBlock {
		position: relative;
		width: 5rem; height: 8rem;
		margin: auto; 
		margin-top: 0.3rem;
		margin-bottom: 0.24rem;
		background: orange;
		perspective: 12rem;
		//display: none;
		.item {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			background: red;
			display: none;
			.upper {
				width: 100%; height: 50%;
			}
			.lower {
				width: 100%; height: 50%;
			}
		}
		.page {
			position: absolute; left: 0; bottom: 0;
			width: 100%; height: 4rem;
			transform-origin: 50% 0%;
			transition: linear 1s;
			transform-style: preserve-3d;
			//display: none;
			.front {
				position: absolute; left: 0; top: 0;
				background: red;
				width: 100%; height: 100%;
				z-index: 5;
				backface-visibility: hidden;
				transform-style: preserve-3d;
			}
			.back {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				background: blue;
				transform: rotateX(180deg);
				backface-visibility: hidden;
				transform-style: preserve-3d;
			}
			&.active {
				transform: rotateX(180deg);
				//transform: translate3d(0,-1rem,0)
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
		},
		data: function(){
			return {
				current: 0,
				turn: false
			}
		},
		watch: {
			current: function(){
				this.$refs.page.style.display = 'block';
				this.$refs.page.classList.add('active');
				setTimeout(()=>{
					this.$refs.item0.style.display = 'none';
					this.$refs.item1.style.display = 'block';
				},1000);
			}
		},
		mounted: function(){
			this.$refs.item0.style.display = 'block';
		},
		methods: {
			turn_: function(){
				this.current++;
			}
		}
	}
</script>