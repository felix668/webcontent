<template>
<div :class=" 'button '+alarm "
	@click="setAlarm">
	<img :class=" 'p-before '+alarm " :src="img.before"/>
	<img :class=" 'p-after '+alarm " :src="img.after"/>
</div>
</template>

<style lang="less">
.button{
	position: absolute; left: 3.3rem; top: 0.15rem;
	width: 2.32rem; height: 0.74rem;
	//border-radius: 0.18rem;
	//background: #f8f8f8;
	z-index: 1;
	overflow: hidden;
	&.resolved {
		//background: #464646;
	}
	&.set {
		animation: rubberBand 1s forwards;
	}
	@keyframes rubberBand {
		from {
			transform: scale3d(1, 1, 1);
		}

		30% {
			transform: scale3d(1, 0.75, 1);
		}

		40% {
			transform: scale3d(0.9, 1.25, 1);
		}

		50% {
			transform: scale3d(1, 0.85, 1);
		}

		65% {
			transform: scale3d(.95, 1.05, 1);
		}

		75% {
			transform: scale3d(1, .95, 1);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}
	p {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		font-size: 0.24rem;
		line-height: 0.54rem;
		text-align: center;
		img {
			display: inline-block;
			vertical-align: middle;
			height: 0.24rem;
		}
	}
	.p-before {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		color: #464646;
		&.resolved {
			display: none;
		}
		&.set {
			transition: 1s ease-out;
			opacity: 0;
		}
	}
	.p-after {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		color: white;
		opacity: 0;
		&.resolved {
			opacity: 1;
		}
		&.set {
			transition: 1s ease-out;
			opacity: 1;
		}
	}
}
</style>

<script>
module.exports = {
	// alarm: 'pending', 'unset', 'resolved', 'set'
	props: ['alarm','act'],
	data: function(){
		return {
			img: {
				before: 'img/btn-before.png',
				after: 'img/btn-after.png',
				bell: 'img/bell.png',
				check: 'img/check.png'
			}
		}
	},
	methods: {
		setAlarm: function(){
			console.log(this.alarm)
			if( this.alarm==='unset' ){
				this.act({
					type: 'SET_ALARM'
				});
			};
		}
	}
}
</script>