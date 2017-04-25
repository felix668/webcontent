<template>
<div class="FOCUS">

	<img class="eyes" :src=" img.eyes "/>
	<img class="eyes_bottom" :src=" img.eyes "/>
	<img class="eyes_right" :src=" 'img/eyes_right.png' "/>
	<img class="eyes_4" :src=" 'img/eyes_right.png' "/>

	<img class="bats" :src=" 'img/bats.png' "/>

	<img class="scarecrow" :src=" img.scarecrow "/>
	<img class="halloween" :class=" ani.halloween " :src=" img.halloween "/>
	<img class="we-love" :class=" ani.welove " :src=" img.welove "/>
</div>
</template>

<style lang="less" scoped>
.FOCUS {
	position: relative;
	width: 100%; height: 9.34rem;

	.eyes {
		position: absolute; left: 0.8rem; top: 2.8rem;
		width: 0.7rem;
		animation: twinkle 2s ease-out infinite alternate;
	}
	.eyes_bottom {
		position: absolute; left: 1.94rem; top: 4.4rem;
		width: 0.6rem;
		animation: twinkle 2.3s ease-out infinite alternate;
	}
	.eyes_right {
		position: absolute; right: 1rem; top: 2.76rem; 
		width: 0.6rem;
		animation: twinkle 2.6s ease infinite alternate;
	}
	.eyes_4 {
		position: absolute; right: 1.56rem; top: 4.1rem; 
		width: 0.6rem;
		animation: twinkle 3s ease infinite alternate;
	}
	@keyframes twinkle {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.1;
		}
	}

	.bats {
		position: absolute; left: 1.56rem; top: 0.92rem; 
		width: 3.73rem;
	}

	.scarecrow {
		position: absolute; left: 5.36rem; top: 0;
		width: 0.89rem;
		transform-origin: top center;
		animation: swing 3s ease-in-out infinite alternate;
	}
	@keyframes swing {
		0% {
			transform: rotate3d(0, 0, 1, -15deg);
		}
		100% {
			transform: rotate3d(0, 0, 1, 10deg);
		}
	}
	.halloween {
		position: absolute; left: 0.95rem; top: 1.7rem;
		width: 5.29rem;
		z-index: 10;
		/*
		&.active {
			animation: tada 1s;
		}
		*/
	}

	@keyframes tada {
		from {
			opacity: 0;
			transform: scale3d(1, 1, 1);
		}

		10%, 20% {
			transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
		}

		30%, 50%, 70%, 90% {
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
		}

		40%, 60%, 80% {
			transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}
	.we-love {
		position: absolute; left: 2.05rem; top: 3.36rem;
		width: 3.26rem;
		opacity: 1;
		/*
		&.active {
			animation: 1s we-love forwards;
		}
		*/
	}
	@keyframes we-love {
		0% {
			opacity: 1;
			transform: scale(0);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
}
</style>

<script type="text/javascript">
export default {
	data: function(){
		return {
			img: {
				eyes: 'img/eyes.png',
				scarecrow: 'img/scarecrow.png',
				halloween: 'img/halloween.png',
				welove: 'img/we-love.png'
			},
			ani: {
				halloween: '',
				welove: ''
			}
		}
	},
	mounted: function(){
		window.addEventListener('load',()=>{
			this.play();
		})
	},
	methods: {
		play: function(){
			this.ani.halloween = 'active';
			setTimeout(()=>{
				this.ani.welove = 'active';
			},1000)
		}
	}
}
</script>