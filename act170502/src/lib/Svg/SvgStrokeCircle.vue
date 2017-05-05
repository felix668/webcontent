<template>
<div class="SvgStrokeCircle">
	<svg viewBox="0,0,750,1000" pointer-events="all" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient 
			id="linearGradient-1"
			x1="0%" y1="100%" x2="100%" y2="100%">
				<stop stop-color="#ffa174" offset="0%"></stop>
				<stop stop-color="#d6607b" offset="41.7610013%"></stop>
				<stop stop-color="#da5ba2" offset="78.6870217%"></stop>
				<stop stop-color="#e362bc" offset="100%"></stop>
			</linearGradient>
		</defs>

		<path id="arc1" fill="none" stroke="#00BCD4" stroke-width="20" />
		<circle class="circle">
			<text class="texttt" x="0" y="0">100%</text>
		</circle>
		<text class="text">{{percent<=125?percent:125}}%</text>
	<!-- 	<circle 
		class="circle-red"
		cx="500" cy="500" r="200"
		stroke="url(#linearGradient-1)"
		/> -->

	</svg>
</div>
</template>

<style lang="less" scoped>
.SvgStrokeCircle {
	position: relative;
	width: 100%; height: 9.61rem;
	overflow: hidden;
	svg {
		position: relative;
		width: 100%; height: 10rem;
		.circle {
			stroke: #f271b1;
			stroke-width: 1;
			stroke-linecap: round;
			fill: #d3498c;
			animation: shimmer 0.5s infinite alternate;
		}
		@keyframes shimmer {
			// 0% {
			// 	// transform: scale(0.9);
			// 	fill: black;
			// 	stroke: black;
			// }
			0% {
				fill: #d3498c;
				stroke: #f271b1;
			}
			100% {
				// transform: scale(1.5);
				fill: #e362bc;
				stroke: #ee75c9;
			}
		}
		text {
			font-size: 20px;
			font-weight: 600;
			fill: #fff19d;
			z-index: 200;
		}
		#arc1 {
			stroke: url(#linearGradient-1);
			stroke-width: 27;
			stroke-linecap: round;
			// transition: 10s;
		}
	}
}
</style>

<script type="text/javascript">
export default {
	computed: {
		donated(){
			return this.$store.state.donated;
		},
		percent(){
			return this.$store.getters.percent;
		},
		percentage(){
			return (this.donated.minutes/100000000).toFixed(6);
		},
	},
	watch: {
		'$store.state.stage.current': function(){
			setTimeout(()=>{
				this.start( this.percentage>=1?1:this.percentage );
			},400);
		}
	},
	mounted: function(){
	},
	methods: {
		start(percentage){
			var el = document.getElementById("arc1");
			var circle = document.querySelector('.SvgStrokeCircle .circle');
			var text = document.querySelector('.SvgStrokeCircle .text');

			function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
			  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

			  return {
			    x: centerX + (radius * Math.cos(angleInRadians)),
			    y: centerY + (radius * Math.sin(angleInRadians))
			  };
			}

			var mode = 'plus';
			var circle_r = 30;
			var s = 65;
			var b = 83;

			function describeArc(x, y, radius, startAngle, endAngle){
			  var start = polarToCartesian(x, y, radius, endAngle);
			  var end = polarToCartesian(x, y, radius, startAngle);
			  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

			  circle.setAttribute('r',(()=>{
			  	if( mode==='plus' ){
			  		if( circle_r<=33 ){
			  			circle_r += 0.2;
			  			// circle.setAttribute('fill','hsl(331,'+(s++)+'%,'+(b++)+'%)');
			  		}else{
			  			mode = 'minus';
			  		}
			  	}else if( mode==='minus' ){
			  		if( circle_r>=28 ){
			  			circle_r -= 0.2 ;
			  			// circle.setAttribute('fill','hsl(331,'+(s--)+'%,'+(b--)+'%)');
			  		}else{
			  			mode = 'plus';
			  		}
			  	}
			  	return circle_r;
			  })() );
			  // circle.setAttribute('fill','hsl(331,'+s+'%,'+b+'%)');
			  circle.setAttribute('cx',start.x);
			  circle.setAttribute('cy',start.y);

			  text.setAttribute('x',(function(){
			  	if(percentage<0.1){
			  		return start.x - 15;
			  	}else if(percentage<1){
			  		return start.x - 20;
			  	}else{
			  		return start.x - 25;
			  	}
			  })());

			  text.setAttribute('y',start.y+6);

			  return [
			    "M", start.x, start.y, 
			    "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
			    //"L", x, y, "Z"
			  ].join(" ");
			}

			var cx = 378;
			var cy = 812;
			var radius = 340;
			var start_angle = -95.5;
			var progress = start_angle;
			var end_angle = -95.5+(95.5*2*percentage);
			console.log(end_angle)

			function step(){
				window.requestAnimationFrame( step );
				if( progress<=end_angle ){
					// window.requestAnimationFrame( step );
					el.setAttribute("d", describeArc(cx, cy, radius, start_angle, progress));
					progress += 2;
				}else{
					el.setAttribute("d", describeArc(cx, cy, radius, start_angle, end_angle));
				}
			}

			step();
		}
	}
}
</script>