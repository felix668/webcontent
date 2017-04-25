<template>
<div class="BookSpace">
	<div class="book"
	@click="handleClick">
		<div class="page__" 
		v-for="(a,i) in pages"
		:class="a.state"
		:style=" 'z-index:'+(100-i) ">
			<div class="face front">
				<p>{{i}}</p>
			</div>
			<div class="face back">
				<p>{{i}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
.BookSpace {
	position: relative;
	width: 100%; height: 100vh;
	perspective: 1000px;
	.book {
		position: absolute; left: 0.77rem; top: 4.17rem;
		width: 4.62rem; height: 6.14rem;
		background: white;
		perspective: 1000px;
		.page__ {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			transition: transform 1s ease-in-out;
			transform-origin: 0 50%;
			transform-style: preserve-3d;
			&.turned {
				transform: rotateY(-180deg);
			}
		}
		.front, .back {
			backface-visibility: hidden;
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			//border-radius: 0.1rem;
			transform-style: preserve-3d;
			p {
				width: 3rem;
				margin: auto;
				text-align: center;
				background: red;
				font-size: 0.3rem;
				//transform: translate3d(0,1rem,1rem);
				//box-shadow: 0 0 1rem red;
			}
			img {
				width: 2rem;
				margin: auto;
				transform: translate3d(0,2rem,4rem);
			}
		}
		.front {
			background: orange;
			z-index: 2;
			//perspective: 1000px;
			transform-style: preserve-3d;
			&.two {
				//transform: rotateY(180deg);
			}
		}
		.back {
			background: blue;
			transform: rotateY(180deg);
			&.two {
			}
		}
	}
}
</style>

<script>
export default {
	data: function(){
		return {
			state: '',
			pages: [{
				state: ''
			},{
				state: ''
			},{
				state: ''
			},{
				state: ''
			}],
			current: 0
		}
	},
	watch: {
		current: function(nv,ov){
			this.pages.forEach((a,i)=>{
				if(ov===i){
					a.state = 'turned';
				}
			})
		}
	},
	mounted: function(){
		document.addEventListener('keydown',(e)=>{
			if(e.keyCode===39){
				this.state = 'two'
			}else if(e.keyCode===37){
				this.state = ''
			}
			//console.log(e)
		})
	},
	methods: {
		handleClick: function(){
			this.current++;
			console.log(this.current)
		}
	}
}

</script>