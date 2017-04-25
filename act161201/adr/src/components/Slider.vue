<template>
<div class="Slider"
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@keypress="keydown($event)"
	ref="slider"
	:style=" 'height:'+viewportHeight+'px' "
	>
	<ul class="train" :style=" 'transform: translate3d(0,'+(-current*10)+'%,0)' ">
		<li class="item"
		style="background:#7ab7eb;">
			<swiper></swiper>
			<img class="arrow" :src=" 'img/arrow.png' "/>
		</li>
		<li class="item"
		:style=" 'background:url(img/bg_1.png);background-size:100% auto;' ">
			<swiper></swiper>
			<img class="arrow" :src=" 'img/arrow.png' "/>
		</li>
		<li class="item">
			<swiper></swiper>
		</li>
	</ul>
</div>
</template>

<style lang="less" scoped>
.Slider {
	position: relative;
	width: 100%; //height: 7rem;
	background: orange;
	overflow: hidden;
	.train {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 1000%;
		transition: transform 0.3s;
		.item {
			box-sizing: border-box;
			position: relative;
			width: 100%; height: 10%;
			padding-top: 0.69rem;
			overflow: hidden;
			.square {
				width: 2rem; height: 1rem;
			}
			.arrow {
				position: absolute; left: 3.44rem; bottom: 0.5rem;
				width: 0.62rem;
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		items: {
			default: ['#6dace2','#af9180','yellow']
		},
		duration: {
			default: 200
		}
	},
	components: {
		Swiper: require('../components/Swiper.vue'),
		SwiperLite: require('../components/SwiperLite.vue'),
		MyAudio: require('../components/MyAudio.vue')
	},
	data: function(){
		return {
			viewportHeight: 0,
			color: 'black',
			current: 1,
			Y1: null,
			Y2: null
		}
	},
	mounted: function(){
		this.viewportHeight = window.innerHeight;
		window.addEventListener('resize',()=>{
			this.viewportHeight = window.innerHeight;
		},50);
	},
	methods: {
		keydown: function(e){
			console.log(e);
		},
		touchstart: function(e){
			//e.preventDefault();
			this.Y1 = e.changedTouches[0].pageY;
		},
		touchmove: function(e){
			e.preventDefault();
		},
		touchend: function(e){
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y1;
			//console.log(distance)
			if( distance<-10 ){
				this.toNext();
			}else if( distance>10 ){
				if( this.current>0 ){
					this.current--;
				}
			}
		},
		toNext: function(){
			if( this.current<this.items.length-1 ){
				this.current++;
			}
		}
	}
}
</script>