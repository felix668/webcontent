<template>
<div class="CarouselCards">
	<!-- CSS 3D Carousel -->
	<div class="cards"
	:style=" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' ">
		<div class="item"
		v-for="(a,i) in cards"
		:style=" 'background:'+a.bg+';' "
		:class=" 'p_'+a.p ">{{i}}</div>
	</div>
	<div class="next" @click="next">Next</div>
	<div class="prev" @click="prev">Prev</div>
</div>
</template>

<style lang="less" scoped>
@w: 2.5rem;
.CarouselCards {
	position: relative;
	width: 100%;
	margin: auto;
	perspective: 100rem;
	overflow: hidden;
	._controls {
		height: 2rem;
		z-index: -1;
	}
	.cards {
		position: relative;
		width: 4rem; height: 6rem;
		margin: 2rem auto;
		transform-style: preserve-3d;
		transition: transform 1s;
		.item {
			display: block;
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			background: #000;
			line-height: 2rem;
			font-size: 0.2rem;
			text-align: center;
			color: #FFF;
			// opacity: 0.95;
			border-radius: 0.05rem;
			background: red;
			transition: 300ms;
			&.p_0 {

			}
			&.p_1 {
				transform: translate3d(2rem,0,-10rem);
			}
			&.p_-1 {
				transform: translate3d(-2rem,0,-10rem);
			}
		}
	}
}

.next, .prev {
	color: #444;
	position: absolute; top: 0;
	padding: 0.1rem;
	cursor: pointer;
	background: #CCC;
	border-radius: 5px;
	font-size: 0.3rem;
	border-top: 1px solid #FFF;
	box-shadow: 0 5px 0 #999;
	transition: box-shadow 0.1s, top 0.1s;
}
.next:hover, .prev:hover { color: #000; }
.next:active, .prev:active {
	box-shadow: 0 1px 0 #999;
}
.next { right: 0; }
.prev { left: 0; }
</style>

<script>
export default {
	data: function(){
		return {
			cards: [{
				p: 0,
				bg: '#ed1c24'
			},{
				p: 1,
				bg: '#0072bc'
			},{
				p: -1,
				bg: '#39b54a'
			}],
			current: 0,
			rotateY: 0
		}
	},
	watch: {
		current(nv){

		}
	},
	methods: {
		next: function(){
			this.cards.forEach(a=>{
				if( a.p<1 ){
					a.p++;
				}else{
					a.p = -1;
				}
			});
			// this.current++;
		},
		prev: function(){
			this.rotateY += 60;
		}
	}
}
</script>