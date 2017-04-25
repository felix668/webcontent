<template>
	<div class="BooksFall" @click="jump">
		<img class="bg" :src=" img+'/bg.jpg' "
		:class="class_"/>
		<div class="content">
<!-- 			<img class="book" :src=" img+'/1.png' "
			:class="class_"/> -->
			<img v-for="i in 12" class="book" :src=" img+'/'+i+'.png' "
			:class="class_"/>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.BooksFall {
		position: relative;
		width: 100%; height: 100%;
		.bg {
			position: absolute; left: 0; top: 0;
			width: 100%;
			opacity: 0;
			&.active {
				opacity: 1;
				animation: slideDown 1.08s forwards;
			}
		}
		.content {
			position: fixed;
			// width: 100%; height: 100%;
			.book {
				position: absolute; left: 0; top: 0;
				opacity: 0;
				animation-fill-mode: both!important;
				animation-timing-function: ease-in!important;
				&:nth-child(1) {
					width: 1.03rem;
					&.active {
						opacity: 1;
						animation: drop1 1.4s 1.22s;
					}
					@keyframes drop1 {
						0%{
							transform: translate3d(.69rem,-1.8rem,0) scale(.6) rotate(0);
						}
						100%{
							transform: translate3d(7.65rem,14rem,0) scale(1) rotate(120deg);
						}
					}
				}
				&:nth-child(2) {
					width: 2.55rem;
					&.active {
						opacity: 1;
						animation: drop2 2.08s .86s;
					}
					@keyframes drop2{
						0% {
							transform: translate3d(4.13rem,-2.4rem,0) scale(.6) rotate(0);
						}
						100% {
							transform: translate3d(-2.83rem,11.06rem,0) scale(1) rotate(273deg);
						}
					}
				}
				&:nth-child(3) {
					width: 1.25rem;
					&.active {
						opacity: 1;
						animation: drop3 1.84s 1.1s;
					}
					@keyframes drop3{
						0%{
							transform: translate3d(3.85rem,-2.17rem,0) scale(.6) rotate(0);
						}
						100%{
							transform: translate3d(-2.18rem,13.9rem,0) scale(1.3) rotate(154deg);
						}
					}
				}
				&:nth-child(4) {
					width: 1.48rem;
					&.active {
						opacity: 1;
						animation: drop4 1.48s .86s;
					}
					@keyframes drop4{
						0%{
							transform: translate3d(2.8rem,-1.99rem,0) scale(.6) rotate(0);
						}
						100%{
							transform: translate3d(-1.58rem,13.44rem,0) scale(1.3) rotate(163deg);
						}
					}
				}
				&:nth-child(5) {
					width: .65rem;
					&.active {
						opacity: 1;
						animation: drop5 1.08s 1.22s;
					}
					@keyframes drop5{
						0% {
							transform: translate3d(2.63rem,-1.41rem,0) scale(.7) rotate(0);
						}
						100% {
							transform: translate3d(7.86rem,9.9rem,0) scale(1) rotate(130deg);
						}
					}
				}
				&:nth-child(6) {
					width: 1.23rem;
					&.active {
						opacity: 1;
						animation: drop6 1.52s 1.5s;
					}
					@keyframes drop6{
						0% {
							transform: translate3d(4.18rem,-2.35rem,0) scale(.6) rotate(0);}
						100% {
							transform: translate3d(-3.36rem,11.04rem,0) scale(1.2) rotate(-127deg);
						}
					}
				}
				&:nth-child(7) {
					width: 2.5rem;
					&.active {
						opacity: 1;
						animation: drop7 2.24s .86s;
					}
					@keyframes drop7{
						0% {
							transform: translate3d(2.5rem,-1.86rem,0) scale(.5) rotate(0);
						}
						100% {
							transform: translate3d(7.29rem,14.07rem,0) scale(1) rotate(188deg);
						}
					}
				}
				&:nth-child(8) {
					width: 1.34rem;
					&.active {
						opacity: 1;
						animation: drop8 1.8s 1.38s;
					}
					@keyframes drop8{
						0% {
							transform: translate3d(2.3rem,-2.3rem,0) scale(.6) rotate(0);
						}
						100% {
							transform: translate3d(4.84rem,13.74rem,0) scale(1.3) rotate(244deg);
						}
					}
				}



				&:nth-child(9) {
					width: 2.12rem;
					&.active {
						opacity: 1;
						animation: drop9 1.16s .86s;
					}
					@keyframes drop9{
						0% {
							transform: translate3d(3.43rem,-1.61rem,0) scale(.6) rotate(0);}
						100% {
							transform:translate3d(2.91rem,14.51rem,0) scale(1.2) rotate(-127deg);
						}
					}
				}
				&:nth-child(10) {
					width: 1.74rem;
					&.active {
						opacity: 1;
						animation: drop10 1.4s .86s;
					}
					@keyframes drop10{
						0% {
							transform: translate3d(5.31rem,-1.69rem,0) scale(.6) rotate(0);
						}
						100% {
							transform: translate3d(1.22rem,14.05rem,0) scale(1) rotate(94deg);
						}
					}
				}
				&:nth-child(11) {
					width: 1.32rem;
					&.active {
						opacity: 1;
						animation: drop11 1.64s 1.54s;
					}
					@keyframes drop11{
						0% {
							transform: translate3d(6.05rem,-1.93rem,0) scale(.6) rotate(0);
						}
						100% {
							transform: translate3d(-.62rem,13.82rem,0) scale(1.3) rotate(300deg);
						}
					}
				}
				&:nth-child(12) {
					width: 1.45rem;
					&.active {
						opacity: 1;
						animation: drop12 1.12s .86s;
					}
					@keyframes drop12 {
						0% {
							transform: translate3d(1.44rem,-3.12rem,0) scale(.64) rotate(0);
						}
						100% {
							transform: translate3d(7.06rem,13.74rem,0) scale(1.2) rotate(167deg);
						}
					}
				}
			}
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
</style>

<script>
	export default {
		computed: {
			img(){
				return '../adr/img/books_fall';
			},
			meta(){
				return this.$store.state.meta;
			}
		},
		components: {
		},
		data: function(){
			return {
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
						type: 'CHANGE',
						to: 1
					})
				},3400)
			},100)
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