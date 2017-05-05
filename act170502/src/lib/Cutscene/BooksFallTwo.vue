<template>
	<div class="BooksFallTwo rem_height" @click="jump">
		<img class="bg" :src=" img+'/bg.jpg' "
		:class="class_"/>
		<div class="content">
<!-- 			<img class="book" :src=" img+'/1.png' "
			:class="class_"/> -->
			<img v-for="a in arr" class="book" :src=" img+'/'+a.val+'.png' "
			:class="class_"/>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.BooksFallTwo {
		position: relative;
		width: 100%; height: 100%;
		.bg {
			position: absolute; left: 0; top: 0;
			width: 100%;
			opacity: 0;
			&.active {
				opacity: 1;
				animation: slideDown 1.48s 1.04s linear both;
			}
		}
		@keyframes slideDown{
			0% {
				transform: translate3d(0,-100%,0);
			}
			100% {
				transform: translate3d(0,0,0);
			}
		}
		.content {
			position: fixed;
			width: 100%; height: 100%;
			.book {
				position: absolute; left: 0; top: 0;
				opacity: 0;
				animation-fill-mode: both!important;
				animation-timing-function: linear!important;
				z-index: 99;
				&.active {
					opacity: 1;
				}
				&:nth-child(1) {
					width: 1.03rem;
					&.active {
						animation: drop1 2.08s .48s;
					}
				}
				@keyframes drop1 {
					0% {
						transform: translate3d(.69rem,-1.8rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(7.65rem,14rem,0) scale(1) rotate(120deg);
					}
				}
				&:nth-child(2) {
					width: 2.55rem;
					&.active {
						animation: drop2 2.2s;
					}
				}
				@keyframes drop2 {
					0% {
						transform: translate3d(2.8rem,-1.99rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(-1.89rem,13.44rem,0) scale(1.3) rotate(163deg);
					}
				}
				&:nth-child(3) {
					width: 1.25rem;
					&.active {
						animation: drop3 3.16s;
					}
				}
				@keyframes drop3 {
					0% {
						transform: translate3d(2.5rem,-1.86rem,0) scale(.5) rotate(0);
					}
					100% {
						transform: translate3d(7.29rem,14.07rem,0) scale(1) rotate(188deg);
					}
				}
				&:nth-child(4) {
					width: 1.48rem;
					&.active {
						animation: drop4 2.08s;
					}
				}
				@keyframes drop4 {
					0% {
						transform: translate3d(5.31rem,-1.69rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(1.22rem,14.05rem,0) scale(1) rotate(94deg);
					}
				}
				&:nth-child(5) {
					width: .65rem;
					&.active {
						animation: drop5 2.96s;
					}
				}
				@keyframes drop5{
					0% {
						transform: translate3d(4.13rem,-1.83rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(-1.83rem,11.06rem,0) scale(1) rotate(273deg);
					}
				}
				&:nth-child(6) {
					width: 1.23rem;
					&.active {
						animation: drop6 1.64s .48s;
					}
				}
				@keyframes drop6 {
					0% {
						transform: translate3d(2.63rem,-2rem,0) scale(.7) rotate(0);
					}
					100% {
						transform: translate3d(7.86rem,19.9rem,0) scale(1) rotate(130deg);
					}
				}
				&:nth-child(7) {
					width: 2.5rem;
					&.active {
						animation: drop7 2.6s .68s;
					}
				}
				@keyframes drop7 {
					0% {
						transform: translate3d(2.3rem,-2.3rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(4.84rem,13.74rem,0) scale(1.3) rotate(244deg);
					}
				}
				&:nth-child(8) {
					width: 1.34rem;
					&.active {
						animation: drop8 2.4s .88s;
					}
				}
				@keyframes drop8 {
					0% {
						transform: translate3d(6.05rem,-2.5rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(-.62rem,13.82rem,0) scale(1.3) rotate(300deg);
					}
				}
				&:nth-child(9) {
					width: 2.12rem;
					&.active {
						animation: drop9 2.64s .32s;
					}
				}
				@keyframes drop9 {
					0% {
						transform: translate3d(3.85rem,-1.47rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(-2.18rem,13.9rem,0) scale(1.3) rotate(154deg);
					}
				}
				&:nth-child(10) {
					width: 1.74rem;
					&.active {
						animation: drop10 1.4s .84s;
					}
				}
				@keyframes drop10 {
					0% {
						transform: translate3d(4.18rem,-1.59rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(-3.36rem,9.04rem,0) scale(1.2) rotate(-127deg);
					}
				}
				&:nth-child(11) {
					width: 1.32rem;
					&.active {
						animation: drop11 1.76s;
					}
				}
				@keyframes drop11 {
					0% {
						transform: translate3d(3.43rem,-1.61rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(2.91rem,13.51rem,0) scale(1.2) rotate(-127deg);
					}
				}
				&:nth-child(12) {
					width: 1.45rem;
					&.active {
						animation: drop12 1.72s;
					}
				}
				@keyframes drop12 {
					0% {
						transform: translate3d(1.44rem,-1.26rem,0) scale(.64) rotate(0);
					}
					100% {
						transform: translate3d(7.06rem,13.74rem,0) scale(1.2) rotate(167deg);
					}
				}
				&:nth-child(13) {
					width: 1.03rem;
					&.active {
						animation: drop13 2.44s .48s;
					}
				}
				@keyframes drop13 {
					0% {
						transform: translate3d(4.95rem,-2.09rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(.6rem,13.95rem,0) scale(1) rotate(180deg);
					}
				}
				&:nth-child(14) {
					width: 2.5rem;
					&.active {
						animation: drop14 3.28s .68s;
					}
				}
				@keyframes drop14 {
					0% {
						transform: translate3d(2.58rem,-1.6rem,0) scale(.3) rotate(0);
					}
					100% {
						transform: translate3d(-2.44rem,14.32rem,0) scale(.8) rotate(-200deg);
					}
				}
				&:nth-child(15) {
					width: 1.32rem;
					&.active {
						animation: drop15 3.4s;
					}
				}
				@keyframes drop15 {
					0% {
						transform: translate3d(2.31rem,-1.75rem,0) scale(.6) rotate(0);
					}
					100% {
						transform: translate3d(6.9rem,14.54rem,0) scale(.8) rotate(300deg);
					}
				}
				&:nth-child(16) {
					width: 2.32rem;
					&.active {
						animation: drop16 2.4s .88s;
					}
				}
				@keyframes drop16 {
					0% {
						transform: translate3d(4.5rem,-1.9rem,0) scale(.5) rotate(0);
					}
					100% {
						transform: translate3d(9rem,17.56rem,0) scale(1) rotate(156deg);
					}
				}
				&:nth-child(17) {
					width: 1.23rem;
					&.active {
						animation: drop17 2.4s 1.04s;
					}
				}
				@keyframes drop17 {
					0% {
						transform: translate3d(2.1rem,-2.31rem,0) scale(.6) rotate(0);
					}
					100% {
						transform:translate3d(4.47rem,14.5rem,0) scale(1.4) rotate(-230deg);
					}
				}
				&:nth-child(18) {
					width: 2.32rem;
					&.active {
						animation: drop18 2.96s .32s;
					}
				}
				@keyframes drop18 {
					0% {
						transform: translate3d(4.9rem,-1.4rem,0) scale(.5) rotate(0);
					}
					100% {
						transform: translate3d(1.4rem,15.64rem,0) scale(.8) rotate(-200deg);
					}
				}
			}
		}
	}
</style>

<script>
	export default {
		computed: {
			img(){
				return '../adr/img/books_fall_2';
			},
			meta(){
				return this.$store.state.meta;
			}
		},
		components: {
		},
		data: function(){
			return {
				arr: [{
					val: 1
				},{
					val: 2
				},{
					val: 3
				},{
					val: 4
				},{
					val: 5
				},{
					val: 6
				},{
					val: 7
				},{
					val: 8
				},{
					val: 9
				},{
					val: 10
				},{
					val: 11
				},{
					val: 12
				},{
					val: 1
				},{
					val: 7
				},{
					val: 11
				},{
					val: 13
				},{
					val: 14
				},{
					val: 13
				}],
				class_: '',
			}
		},
		created: function(){
			
		},
		watch: {
			// stage: function(new_val){
			// 	if( new_val===0 ){
			// 		this.animate();
			// 	}
			// }
		},
		mounted: function(){
			setTimeout(()=>{
				this.class_ = 'active';
				setTimeout(()=>{
					this.$store.dispatch({
						type: 'CHANGE_MAIN',
						to: 'entry'
					})
				},3400)
			},250)
		},
		methods: {
			jump: function(){
				if( this.meta.share ){
					this.$store.dispatch({
						type: 'TO_APP'
					})
				}
			},
			animate: function(){
			},
			CHANGE_STAGE: function(){
				
			}
		}
	}
</script>