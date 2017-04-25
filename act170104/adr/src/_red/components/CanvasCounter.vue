<template>
	<div class="CanvasCounter">
		<canvas unselectable="on" ref="canvas" width="490" height="77"></canvas>
	</div>
</template>

<style lang="less" scoped>
	.CanvasCounter {
		width: 4.85rem;
		margin: auto;
		canvas {
			width: 100%;
		}
	}
</style>

<script>
	var arr = [];
	var uid = 0;

	var img = new Image();
	img.src = './img/red/panel.png';

	function haha( el ){

		var Score = function(el,fontSize,fontWidth) {
		    this.canvas = el;
			this.fontSize = fontSize || "18";
			this.fontWidth = fontWidth || 18; 
		    this.ctx = this.canvas.getContext("2d");
		    this.w =  this.canvas.width;
			this.h = this.canvas.height;
		    this.mub_list = [null, null, null, null, null, null, null, null],
		    this.all_mub = "00000000";
		}

		Score.prototype = {
		    update: function(n) {
		        var len = this.mub_list.length - n.toString().length;
		        for (var i = 0; i < len; i++) {
		            n = " "+n;
		        }
		        var k2 = n.toString().split(""),
				k1 = this.all_mub.toString().split(""),
				j =0;
		        for (var i = 0; i < 8; i++) {
		            if (k2[i] != " ") {
		                k1[i] == " " && (k1[i] = "0");
		                this.mub_list[i] = new Mub(parseInt(k1[i]), 16+this.fontWidth *(j), parseInt(k2[i]), 1.5, 65);
		                j++;
					}else{
		                this.mub_list[i] = new Mub(0, 16+this.fontWidth *(j), 0, 9 - i, 65);
		                j++;
		            }
		        }
		        this.all_mub = n.toString();
		    },
		    draw: function() {
				var self = this;
		        this.stimer = requestAnimFrame(function() {
		            self.draw();
		        });
		        this.ctx.clearRect(0, 0, this.w, this.h);
		        for( let i = 0; i<8; i++ ){
			    	this.ctx.drawImage( img,4+61*i,0 );
			    };
			    this.mub_list.forEach(a=>{
			    	if( a!==null ){
			    		a.draw( this.ctx,this.fontSize );
		                a.move();
			    	}
			    })
		        // for( let i = 0; i<8; i++ ){
		        //     if (this.mub_list[i] != null) {
		        //         this.mub_list[i].draw(this.ctx,this.fontSize);
		        //         this.mub_list[i].move();
		        //     }
		        // }
		    }
		}

		var Mub = function(a, x, n, speed, h) {
		    this.a = a;//µ±Ç°Í£Ö¹µÄÊý×Ö
			this.n = n;//¸üÐÂµ½µÄÊý×Ö
		    this.x = x;//ºá×ø±ê
		    this.h = h;
		    this.speed = speed;//×ª¶¯ËÙ¶È
		    this.y = -this.h * 4 - 8;
		    this.nub = [];
		    this.__init();
		}
		Mub.prototype = {
		    __init: function() {
		        this.nub[5] = this.a;
		        for (var i = 6; i < 10; i++) {
		            this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
		        }
		        for (var i = 4; i >= 0; i--) {
		            this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
		        }
		    },
		    draw: function(ctx, fontSize) {
		        ctx.save();
		        ctx.font = fontSize + "px arial";
		  //       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
				// ctx.shadowColor = "#000";
		  //       ctx.shadowOffsetX = 1;
		  //       ctx.shadowOffsetY = 1;
		  //       gradient.addColorStop("0", "#fff");
		  //       gradient.addColorStop("0.2", "#444");
		  //       gradient.addColorStop("0.6", "#fff");
		  //       gradient.addColorStop("0.8", "#444");
		  //       gradient.addColorStop("1", "#fff");
		        ctx.fillStyle = '#774445';
		        for (var i = 0; i < this.nub.length; i++) {
		            var _y = this.y + i * this.h;
		            if (_y > 0 && _y < 130) {
		                ctx.fillText(this.nub[i], this.x, _y);
		            }
		        }
		        ctx.restore();
		    },
		    move: function() {
		        if (this.n !== this.nub[5]) {
		            this.y += 7.5 / this.speed;
		            if ((this.h * 4 + 8 + this.y) == this.h) {
		                this.nub.splice(0, 0, this.nub.pop());
						this.y = -this.h * 4 - 8;
		            }
		        }
		    }
		}


		window.requestAnimFrame = (function() {
		    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		    function(callback,element) {
		        window.setTimeout(callback, 1000 / 60);
		    };
		})();

		window.cancelAFrame = (function() {
		    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
		    function(id) {
		        window.clearTimeout(id);
		    };
		})();


		//¼ÆÈëÊý×Ö
		var score1 = 0;
		var s1 = new Score( el , 54,61);
		s1.update(score1);
		s1.draw();
		// setInterval(function() {
		//     var d = score1 += 9234;
		//     s1.update(d);
		// },
		// 2000)
		arr.push(s1);
		uid++;    
	}
	export default {
		props: ['act','num'],
		data: function(){
			return {
				uid: 0
			}
		},
		watch: {
			num: function(nv){
				arr[this.uid].update(nv);
			}
		},
		mounted: function(){
			this.uid = uid;
			haha(this.$refs.canvas);
		},
		methods: {

		}

	}
</script>