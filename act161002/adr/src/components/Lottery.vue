<template>
	<div class="LOTTERY">
		<img class="choose-p" :src=" img.choose_p "/>
		<img class="text_p" :src=" 'img/text_p'+(ios?'_ios':'')+'.png' "/>
		<div class="info__" v-show="info">
			<img class="bar__" :src=" img.bar "/>
			<p v-show=" info!=='111' ">{{info}}</p>
			<div class="link" v-show=" info==='111' ">
				您的兑换券尚未兑换，<span @click="act({type:'TO_USE_COUPON'})">去兑换>></span>
			</div>
		</div>
		<img class="ghost" :src=" img.ghost "/>
		<img class="bat_left" :src=" 'img/black_bat.png' "/>
		<img class="bat_right" :src=" 'img/black_bat.png' "/>
		<div class="pumpkins">
			<div class="pumpkin" :key="a" v-for="a in 6" :class=" 'p'+(a-1)+' '+pumpkin "
			@click="choose">
				<img class="pumpkin_img" :src=" img.pumpkin "/>
				<!-- <img class="pumpkin_light" :src=" 'img/pumpkin_light.png' "/> -->
			</div>
			<img class="light" :src=" img.light "/>
			<img class="fire0" :src=" img.blur_fire "/>
			<img class="fire1" :src=" img.fire "/>
			<img class="fire2" :src=" img.fire "/>
			<img class="fire3" :src=" img.blur_fire "/>
			<img class="fire4" :src=" img.blur_fire "/>
		</div>
	</div>
</template>

<style lang="less" scoped>
.LOTTERY {
	position: relative;
	width: 100%; height: 7.2rem;
	.choose-p {
		width: 3.03rem;
		margin: auto; margin-bottom: 0.24rem;
	}
	.text_p {
		width: 4.93rem;
		margin: auto;
	}
	.info__ {
		position: relative;
		width: 3.71rem;
		margin: auto;
		margin-top: 0.38rem;
		img {
			width: 100%;
		}
		p {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			font-size: 0.24rem; text-align: center;
			line-height: 0.46rem; color: #1d1635;
		}
		.link {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			font-size: 0.24rem; text-align: center;
			line-height: 0.46rem; color: #1d1635;
			span {
				color: #99614f!important;
			}
		}
	}
	.bat_left {
		position: absolute; left: 0.46rem; top: 2.65rem;
		width: 2.38rem; 
	}
	.bat_right {
		position: absolute; right: 0.64rem; top: 3.45rem;
		width: 1.10rem;
	}
	.ghost {
		position: absolute; left: 4.84rem; top: 1.36rem;
		width: 1.89rem;
		//animation: 7s ghost ease infinite;
		@keyframes ghost {
			0% {
				opacity: 0;
				transform: translate3d(0.2rem,0,0);
			}
			50% {
				opacity: 1;
				transform: translate3d(0,0,0);
			}
			100% {
				opacity: 0;
				transform: translate3d(-0.2rem,0,0);
			}
		}
	}
	.pumpkins {
		position: absolute; left: 0; top: 2.3rem;
		.pumpkin {
			position: absolute;
			width: 1.78rem;
			.pumpkin_img {
				width: 100%;
				//box-shadow: 0 0 5px orange;
			}
			.pumpkin_light {
				position: absolute; left: 0; top: 0;
				width: 100%;
			}
			@keyframes shimmer111 {
				0% {
					opacity: 0.2;
				}
				100% {
					opacity: 1;
				}
			}
		}
		.p0 {
			left: 2.76rem;
			z-index: 6;
			&.active{
				animation: bounce 4s infinite;
				.pumpkin_light {
					animation: 1s shimmer111 infinite alternate;
				}
			}
		}
		.p1 {
			left: 1.68rem; top: 1.06rem;
			&.active{
				animation: p-wobble 4s infinite;
				.pumpkin_light {
					animation: 1.3s shimmer111 infinite alternate;
				}
			}
			z-index: 5;
		}
		.p2 {
			left: 3.82rem; top: 1.06rem;
			transfrom-origin: bottom center;
			&.active{
				animation: p-swing 6s infinite;
				.pumpkin_light {
					animation: 1.5s shimmer111 infinite alternate;
				}
			}
			z-index: 5;
		}
		.p3 {
			left: 0.6rem; top: 2.08rem;
			&.acitve{
				animation: p-swing 2s infinite;
				.pumpkin_light {
					animation: 1.1s shimmer111 infinite alternate;
				}
			}
		}
		.p4 {
			left: 2.76rem; top: 2.08rem;
			&.active{
				animation: p-wobble 6s infinite;
				.pumpkin_light {
					animation: 0.8s shimmer111 infinite alternate;
				}
			}
		}
		.p5 {
			left: 4.89rem; top: 2.08rem;
			&.active{
				animation: shake 10s infinite;
				.pumpkin_light {
					animation: 1.4s shimmer111 infinite alternate;
				}
			}
		}
		.fire1 {
			position: absolute; left: 2.18rem; top: 3.7rem;
			width: 0.2rem;
			animation: fire 1s ease-in-out infinite alternate;
		}
		.fire0 {
			position: absolute; left: 0.96rem; top: 1.30rem;
			width: 0.2rem;
			animation: fire 1.5s ease-in-out infinite alternate;
		}
		.fire2 {
			position: absolute; left: 4.44rem; top: 3.46rem;
			width: 0.2rem;
			animation: fire 0.9s ease-in-out infinite alternate;
		}
		.fire3 {
			position: absolute; left: 5.06rem; top: 0.76rem;
			width: 0.2rem;
			animation: fire 1.2s ease-in-out infinite alternate;
		}
		.fire4 {
			position: absolute; left: 6.48rem; top: 1.76rem;
			width: 0.26rem;
			animation: fire 1.8s ease-in-out infinite alternate;
		}
		@keyframes fire {
			0% {
				opacity: 0.1;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes p-pulse {
			from {
				transform: scale3d(1, 1, 1);
			}

			50% {
				transform: scale3d(1.05, 1.05, 1.05);
			}

			to {
				transform: scale3d(1, 1, 1);
			}
		}
		@keyframes bounce {
			from, 20%, 53%, 80%, to {
				animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				transform: translate3d(0,0,0);
			}

			40%, 43% {
				animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				transform: translate3d(0, -15%, 0);
			}

			70% {
				animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				transform: translate3d(0, -7.5%, 0);
			}

			90% {
				transform: translate3d(0,-2%,0);
			}
		}
		@keyframes updown {
			from {
				transform: translate3d(0,0,0);
			}

			100% {
				transform: translate3d(0,-20%,0);
			}

		}
		@keyframes p-wobble {
			from {
				transform: none;
			}

			15% {
				transform: translate3d(-6.25%, 0, 0) rotate3d(0, 0, 1, -5deg);
			}

			30% {
				transform: translate3d(5%, 0, 0) rotate3d(0, 0, 1, 3deg);
			}

			45% {
				transform: translate3d(-4.25%, 0, 0) rotate3d(0, 0, 1, -3deg);
			}

			60% {
				transform: translate3d(2.5%, 0, 0) rotate3d(0, 0, 1, 2deg);
			}

			75% {
				transform: translate3d(-1.25%, 0, 0) rotate3d(0, 0, 1, -1deg);
			}

			to {
				transform: none;
			}
		}

		@keyframes p-jello {
			from, 11.1%, to {
				transform: none;
			}

			22.2% {
				transform: skewX(-6.25deg) skewY(-6.25deg);
			}

			33.3% {
				transform: skewX(3.125deg) skewY(3.125deg);
			}

			44.4% {
				transform: skewX(-1.5625deg) skewY(-1.5625deg);
			}

			55.5% {
				transform: skewX(0.78125deg) skewY(0.78125deg);
			}

			66.6% {
				transform: skewX(-0.390625deg) skewY(-0.390625deg);
			}

			77.7% {
				transform: skewX(0.1953125deg) skewY(0.1953125deg);
			}

			88.8% {
				transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
			}
		}
		@keyframes p-swing {
			20% {
				transform: rotate3d(0, 0, 1, 15deg);
			}

			40% {
				transform: rotate3d(0, 0, 1, -10deg);
			}

			60% {
				transform: rotate3d(0, 0, 1, 5deg);
			}

			80% {
				transform: rotate3d(0, 0, 1, -5deg);
			}

			to {
				transform: rotate3d(0, 0, 1, 0deg);
			}
		}
		@keyframes shake {
			from, to {
				transform: translate3d(0, 0, 0);
			}

			10%, 30%, 50%, 70%, 90% {
				transform: translate3d(-5%, 0, 0);
			}

			20%, 40%, 60%, 80% {
				transform: translate3d(5%, 0, 0);
			}
		}
	}
	.light {
		position: absolute; left: 0.34rem; top: 3.3rem;
		width: 6.52rem;
	}
}
</style>

<script type="text/javascript">
export default {
	props: ['ios','loggedIn','picked','drawn','act','couponGot','couponUsed','voted'],
	data: function(){
		return {
			img: {
				text_p: 'img/text_p.png',
				bar: 'img/bar.png',
				choose_p: 'img/choose-p.png',
				ghost: 'img/ghost.png',
				pumpkin: 'img/pumpkin.png',
				blur_fire: 'img/blur-fire.png',
				fire: 'img/fire.png',
				light: 'img/light.png'
			},
			info: ''
		}
	},
	mounted: function(){
	},
	watch: {

	},
	computed: {
		info: function(){
			if(this.drawn===true){
				if(this.couponGot&&!this.couponUsed){
					return '111';
				}else{
					return '您已经抽过奖了~';
				}
			}else{
				if(this.voted){
					return '请到投过票的平台抽奖';
				}else if(this.picked>=0&&this.picked<=9){
					return '恭喜获得一次挑选机会';
				}else if(this.picked===100){
					return '该设备已经被其他账号投过票';
				}else{
					return '投票后将获得一次挑选机会';
				}
			}
		},
		pumpkin: function(){
			if(this.drawn===false/*&&this.picked>=0&&this.picked<=9*/){
				return 'active';
			}else{
				return '';
			}
		}
	},
	methods: {
		choose: function(){
			if(this.loggedIn===false){
				Local.showToast('请登录后进行抽奖');
			}else{
				if(this.drawn===true){
					Local.showToast('您已经抽过奖了~');
				}else{
					if(this.voted){
						Local.showToast('请到投过票的平台抽奖');
					}else if(this.picked>=0&&this.picked<=9){
						this.act({
							type: 'DRAW'
						})
					}else{
						Local.showToast('请投票后进行抽奖');
					};
				}
			}
		}
	}
}
</script>