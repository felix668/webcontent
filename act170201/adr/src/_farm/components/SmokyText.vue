<style lang="less">
	.SmokyText {
		position: absolute; left: 0; top: 3rem;
		padding: 1rem 0;
		// background: black;
		overflow: hidden;
		//font: 5vw/100vh "Finger Paint";
		
		backface-visibility: hidden;
		.text {
			margin-left: 2.5rem;
			//font-family: 'SimSun';
			font-size: 0.4rem;
			color: transparent;
		}
		@color: black;
		span {
			display: inline-block;
			//font-weight: bold;
			//font-family: 'SimSun'!important;
			font-size: 0.4rem;
			text-shadow: 0 0 0 @color;
			//color: yellow;
			//animation: smoky 5s 3s both;
		}
		&.active {
			span {
				animation: smoky 3s 3s both;
			}
			/*
			span:nth-child(even) {
				animation-name: smoky-mirror;
			}
			*/
		}

		/*
		span:nth-child(even) {
			-webkit-animation-name: smoky-mirror;
			animation-name: smoky-mirror;
		}
		*/

		@keyframes smoky {
			60% {
				text-shadow: 0 0 40px @color;
				//transform: rotateX(40deg);
			}
			to {
				transform: translate3d(-1000%, -100%, 0) rotate(-40deg) skewX(70deg) scale(1.5);
				//transform: translate3d(-1000%, 400%, 0) rotate(40deg) scale(1.5);
				text-shadow: 0 0 20px @color;
				opacity: 0;
			}
		}
		@keyframes smoky-mirror {
			60% {
				text-shadow: 0 0 40px @color;
			}
			to {
				transform: translate3d(-1000%, -100%, 0) rotate(-40deg) skewX(-70deg) scale(2);
				text-shadow: 0 0 20px @color;
				opacity: 0;
			}
		}
		span:nth-of-type(1) {
			animation-delay: 0.1s;
		}

		span:nth-of-type(2) {
			animation-delay: 0.2s;
		}

		span:nth-of-type(3) {
			animation-delay: 0.3s;
		}

		span:nth-of-type(4) {
			animation-delay: 0.4s;
		}

		span:nth-of-type(5) {
			animation-delay: 0.5s;
		}

		span:nth-of-type(6) {
			animation-delay: 0.6s;
		}

		span:nth-of-type(7) {
			animation-delay: 0.1s;
		}

		span:nth-of-type(8) {
			animation-delay: 0.2s;
		}

		span:nth-of-type(9) {
			animation-delay: 0.3s;
		}

		span:nth-of-type(10) {
			animation-delay: 0.1s;
		}

		span:nth-of-type(11) {
			animation-delay: 0.2s;
		}

		span:nth-of-type(12) {
			animation-delay: 0.3s;
		}

		span:nth-of-type(13) {
			-webkit-animation-delay: 4.3s;
			animation-delay: 4.3s;
		}

		span:nth-of-type(14) {
			-webkit-animation-delay: 4.4s;
			animation-delay: 4.4s;
		}

		span:nth-of-type(15) {
			-webkit-animation-delay: 4.5s;
			animation-delay: 4.5s;
		}

		span:nth-of-type(16) {
			-webkit-animation-delay: 4.6s;
			animation-delay: 4.6s;
		}

		span:nth-of-type(17) {
			-webkit-animation-delay: 4.7s;
			animation-delay: 4.7s;
		}

		span:nth-of-type(18) {
			-webkit-animation-delay: 4.8s;
			animation-delay: 4.8s;
		}

		span:nth-of-type(19) {
			-webkit-animation-delay: 4.9s;
			animation-delay: 4.9s;
		}

		span:nth-of-type(20) {
			-webkit-animation-delay: 5s;
			animation-delay: 5s;
		}

		span:nth-of-type(21) {
			-webkit-animation-delay: 5.1s;
			animation-delay: 5.1s;
		}

	}
</style>

<template>
	<div class="SmokyText" :class="className"
	@click="go">
		<p class="text">
			<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>
			<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>
		</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				className: ''
			}
		},
		mounted: function(){

		},
		methods: {
			go: function(){
				this.className = this.className===''?'active':'';
			}
		}
	}
</script>