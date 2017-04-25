<template>
<div :class=" 'button '+alarm "
	@click="setAlarm">
	<!-- <div :class=" 'ripple '+alarm "></div> -->
	<p :class=" 'p-before '+alarm ">
		<img :src="img.bell"/> 预约提醒
	</p>
	<p :class=" 'p-after '+alarm ">
		<img :src="img.check"/> 预约成功
	</p>
</div>
</template>

<style lang="less">
.button{
	position: absolute; left: 0.96rem; top: 2.46rem;
	width: 2.06rem; height: 0.54rem;
	// border-radius: 0.18rem;
	// background: #f8f8f8;
	z-index: 1;
	overflow: hidden;
	// &.resolved {
	// 	background: #464646;
	// }
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
	.ripple {
		position: absolute; left: -0.47rem; top: -1.23rem;
		width: 3rem; height: 3rem;
		border-radius: 1000px;
		background: #464646;
		transform: scale3d(0,0,1);
		opacity: 0;
		z-index: 0;
		&.set {
			transition: 1s ease-out;
			transform: scale3d(1,1,1);
			opacity: 1;
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