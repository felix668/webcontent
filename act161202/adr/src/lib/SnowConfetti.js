function Confetti(cv) {
	this.cv = cv;
	//this.style = COLORS[~~range(0, 5)];
	//this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
	this.rgb = 'rgba(255,255,255';
	//this.r = ~~range(2, 6);
	this.r = ~~Canvas.random(2, 6);
	this.r2 = 2 * this.r;
	this.spawn();
}

Confetti.prototype = {
	PI_2: 2*Math.PI,
	xpos: 0.5,
	spawn: function() {
		this.opacity = 0;
		this.dop = 0.03 * Canvas.random(1, 4);
		this.x = Canvas.random(-this.r2, this.cv.$width - this.r2);
		this.y = Canvas.random(-20, this.cv.$height - this.r2);
		this.xmax = this.cv.$width - this.r;
		this.ymax = this.cv.$height - this.r;
		//this.vx = range(0, 2) + 8 * xpos - 5;
		this.vx = Canvas.random(-3,0);
		//this.vy = 0.7 * this.r + range(-1, 1);
		this.vy = 1 * this.r + Canvas.random(-1, 1);
	},
	draw: function(){
		var ref;
		this.x += this.vx;
		this.y += this.vy;
		this.opacity += this.dop;
		if (this.opacity > 1) {
			this.opacity = 1;
			this.dop *= -1;
		}
		if (this.opacity < 0 || this.y > this.ymax) {
			this.spawn();
		}
		if (!((0 < (ref = this.x) && ref < this.xmax))) {
			this.x = (this.x + this.xmax) % this.xmax;
		}
		var ctx = this.cv.$ctx;
		ctx.beginPath();
		ctx.arc( this.x, this.y, this.r, 0, this.PI_2, false);
		ctx.fillStyle = this.rgb+','+this.opacity+')';
		ctx.fill();
	}
}

const HAHA = Canvas.extend({
	props: function(){
		return {
			count: 60,
			COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
		}
	},
	data: function(){
		return {
			confetti: []
		}
	},
	beforePlay: function(){
		this.$setSize( window.innerWidth,window.innerHeight );
		window.addEventListener('resize',()=>{
			this.$setSize( window.innerWidth,window.innerHeight );
		})
		for ( let i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
			this.confetti.push( new Confetti(this) );
		}
	},
	render: function(){
		this.$ctx.clearRect( 0,0,this.$width,this.$height );
		this.confetti.forEach(a=>{
			a.draw();
		})
	}
})

module.exports = {
	template: `
	<canvas ref="confetti"
	style="display:block;background:url(http://madsoap.net/img/cover.jpg);background-size:100% auto;"></canvas>
	`,
	mounted: function(){
		new HAHA({
			el: this.$refs.confetti
		})
	}
}