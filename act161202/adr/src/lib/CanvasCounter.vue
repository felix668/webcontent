<template>
	<div class="CanvasCounter">
		<canvas unselectable="on"  id="myCanvas" width="180" height="30"></canvas>
	</div>
</template>

<style lang="less" scoped>
	.CanvasCounter {
		
	}
</style>

<script>
	function haha(){
		var score = function(id,fontSize,fontWidth) {
		    this.canvas = document.getElementById(id),
			this.fontSize = fontSize || "18";
			this.fontWidth = fontWidth || 18; 
		    this.ctx = this.canvas.getContext("2d");
		    this.w =  this.canvas.width;
			this.h = this.canvas.height;
		    this.mub_list = [null, null, null, null, null, null, null, null, null],
		    this.all_mub = "000000000";
		}

		score.prototype = {
		    update: function(n) {
		        var len = this.mub_list.length - n.toString().length;
		        for (var i = 0; i < len; i++) {
		            n = " "+n;
		        }
		        var k2 = n.toString().split(""),
				k1 = this.all_mub.toString().split(""),
				j =0;
		        for (var i = 0; i < 9; i++) {
		            if (k2[i] != " ") {
		                k1[i] == " " && (k1[i] = "0");
		                this.mub_list[i] = new a_mub(parseInt(k1[i]), this.fontWidth *(j), parseInt(k2[i]), 9 - i, 30);
		                j++;
					}
		        }
		        this.all_mub = n.toString();
		    },
		    draw: function() {
				var _self = this;
		        this.stimer = requestAnimFrame(function() {
		            _self.draw();
		        });
		        this.ctx.clearRect(0, 0, this.w, this.h);
		        for (var i = 0; i < 9; i++) {
		            if (this.mub_list[i] != null) {
		                this.mub_list[i].dr(this.ctx,this.fontSize);
		                this.mub_list[i].move();
		            }
		        }
		    }
		}

		var a_mub = function(a, x, n, speed, h) {
		    this.a = a;//µ±Ç°Í£Ö¹µÄÊý×Ö
			this.n = n;//¸üÐÂµ½µÄÊý×Ö
		    this.x = x;//ºá×ø±ê
		    this.h = h;
		    this.speed = speed;//×ª¶¯ËÙ¶È
		    this.y = -this.h * 4 - 8;
		    this.nub = [];
		    this.__init();
		}
		a_mub.prototype = {
		    __init: function() {
		        this.nub[5] = this.a;
		        for (var i = 6; i < 10; i++) {
		            this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
		        }
		        for (var i = 4; i >= 0; i--) {
		            this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
		        }
		    },
		    dr: function(ctx, fontSize) {
		        ctx.save();
		        ctx.font = fontSize + "px arial";
		        var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
				ctx.shadowColor = "#000";
		        ctx.shadowOffsetX = 1;
		        ctx.shadowOffsetY = 1;
		        gradient.addColorStop("0", "#fff");
		        gradient.addColorStop("0.2", "#444");
		        gradient.addColorStop("0.6", "#fff");
		        gradient.addColorStop("0.8", "#444");
		        gradient.addColorStop("1", "#fff");
		        ctx.fillStyle = gradient;
		        for (var i = 0; i < this.nub.length; i++) {
		            var _y = this.y + i * this.h;
		            if (_y > 0 && _y < 60) {
		                ctx.fillText(this.nub[i], this.x, _y);
		            }
		        }
		        ctx.restore();
		    },
		    move: function() {
		        if (this.n != this.nub[5]) {
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
		var score1 = 11111;
		var s1 = new score("myCanvas", 28,20);
		s1.update(score1);
		s1.draw();
		setInterval(function() {
		    var d = score1 += 2118;
		    s1.update(d);
		},
		2000)
	}
	export default {
		props: ['act','img'],
		data: function(){
			return {

			}
		},
		mounted: function(){
			haha();
		},
		methods: {

		}

	}
</script>