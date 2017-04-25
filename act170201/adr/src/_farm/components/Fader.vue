<template>
	<div class="Fader"
	@click="toNext">
		<div class="item" v-for="(a,i) in items"
		:class="a.state"
		:style=" 'background: url('+img+a.background+';background-size:100% auto;' ">
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Fader {
		position: relative;
		width: 100%; height: 100vh;
		//background: black;
		.item {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			display: none;
			/*
			&:nth-child(1) {
				background: red;
			}
			&:nth-child(2) {
				background: orange;
			}
			&:nth-child(3) {
				background: yellow;
			}
			*/
			&.enter {
				display: block;
				animation: enter666 2s forwards;
			}
			&.leave {
				display: block;
				animation: leave666 2s forwards;
			}
			&.current {
				display: block;
			}
		}
		@keyframes enter666 {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes leave666 {
			0% {
				opacity: 1;
			}
			99% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			current: {}
		},
		data: function(){
			return {
				//current: 0,
				switching: false,
				items: [{
					state: 'current',
					background: '/bg_0.png'
				},{
					state: '',
					background: '/bg_1.png'
				},{
					state: '',
					background: '/bg_2.png'
				}]
			}
		},
		watch: {
			current: function(newV,oldV){
				this.items[newV].state = 'enter';
				this.items[oldV].state = 'leave';
				setTimeout(()=>{
					this.items[newV].state = 'current';
					this.items[oldV].state = '';
					this.switching = false;
				},2000)
			}
		},
		methods: {
			toNext: function(){
				if( !this.switching ){
					this.switching = true;
					if( this.current<this.items.length-1 ){
						this.current++;
					}else{
						this.current = 0;
					}
				};
				
			}
		}
	}
</script>