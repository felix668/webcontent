
function FlameParticle(host){
	this.host = host;
	this.spawn();
}
FlameParticle.prototype = {
	spawn: function(){
		//speed, life, location, life, colors
		//speed.x range = -2.5 to 2.5 
		//speed.y range = -15 to -5 to make it move upwards
		//lets change the Y speed to make it look like a flame
		this.speed = {
			x: -2.5+Math.random()*5, 
			y: -25+Math.random()*10
		};
		
		var locmin = (this.host.w/2)-(this.host.config.flamewidth/2); 
		var locmax = (this.host.w/2)+(this.host.config.flamewidth/2);
		this.location = {
			x: Math.random()*(locmax - locmin)+locmin,
			y: 2*this.host.h/3
		};
		
		this.radius = Math.random()*50;
		//life range = 20-30
		this.life = this.host.config.flame_base_life + Math.random()*10;
		this.remaining_life = this.life;
		//colors
		this.r = this.host.config.flame_r;
		this.g = Math.round(Math.random()*(100 - 190) + 100);
		this.b = Math.round(Math.random()*(10 - 30) + 10);
	},
	draw: function(ctx){
		var p = this;
		ctx.beginPath();
		//changing opacity according to the life.
		//opacity goes to 0 at the end of life of a particle
		p.opacity = Math.round(p.remaining_life/p.life*100)/100;
		//a gradient instead of white fill
		var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
		gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
		gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
		gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
		ctx.fillStyle = gradient;
		//ctx.fillStyle = 'rgba(50,255,255,'+p.opacity+')';
		ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
		ctx.fill();
	},
	step: function(){
		var p = this;
		//lets move the particles
		p.remaining_life--;
		p.radius -= 2;
		p.location.x += p.speed.x;
		p.location.y += p.speed.y;
		if(p.remaining_life < 0 || p.radius < 0){
			//a brand new particle replacing the dead one
			p.spawn();
		}
	}
}

function SmokeParticle(host){
	this.host = host;
	this.spawn();
}
SmokeParticle.prototype = {
	spawn: function(){
		//speed, life, location, life, colors
		this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*3};

		var locmin = (this.host.w/2)-this.host.config.flamewidth/2; 
		var locmax = (this.host.w/2)+this.host.config.flamewidth/2;
		this.location = {
			x: Math.random()*(locmax - locmin)+locmin,
			y: 2*this.host.h/3
		};
		
		this.radius = Math.random()*16;
		//life range = 20-80
		this.life = 20+Math.random()*40;
		this.remaining_life = this.life;
		//colors
		var b = Math.round( Math.random()*(120 - 255) + 120 );
		this.r = b;
		this.g = b;
		this.b = b;				
	},
	draw: function(ctx){
		var s = this;
		ctx.beginPath();
		//changing opacity according to the life.
		//opacity goes to 0 at the end of life of a particle
		s.opacity = Math.round(s.remaining_life/s.life*100)/100
		//a gradient instead of white fill
		var gradient = ctx.createRadialGradient(s.location.x, s.location.y, 0, s.location.x, s.location.y, s.radius);
		gradient.addColorStop( 0, "rgba("+s.r+", "+s.g+", "+s.b+", "+s.opacity+")" );
		gradient.addColorStop( 0.5, "rgba("+s.r+", "+s.g+", "+s.b+", "+s.opacity+")" );
		gradient.addColorStop( 1, "rgba("+s.r+", "+s.g+", "+s.b+", 0)" );
		ctx.fillStyle = gradient;
		ctx.arc(s.location.x, s.location.y, s.radius, Math.PI*2, false);
		ctx.fill();
	},
	step: function(){
		var s = this;
		//lets move the particles
		s.remaining_life -= 0.3;
		s.radius -= 0.2;
		s.location.x += s.speed.x;
		s.location.y += s.speed.y;
		if(s.remaining_life < 0 || s.radius < 0){
			//a brand new particle replacing the dead one
			s.spawn();
		}
	}
}

function Fire(config){
	if( config.elem ){
		this.elem = config.elem;
	}else{
		this.elem = document.createElement('canvas');
		this.elem.style.width = '50%';
		document.body.appendChild(this.elem);
	}
	this.w = this.elem.width = config.width;
	this.h = this.elem.height = config.height;
	this.ctx = this.elem.getContext("2d");

	this.config = {
		canvas_width: 800,
		canvas_height: 1000,
		particle_count: 400,
		smoke_count: 50,
		flame_base_life: 20, 
		flame_r: '255',
		flamewidth: 300
	}

	this.particles = [];
	this.smoke_particles = [];

	this.interval = null;
	this.init();
}

Fire.prototype = {
	init: function(){
		this.addControl();
		this.createParticles();
		this.play();
	},
	clear: function(){
		clearInterval( this.interval );
		this.particles = [];
		this.smoke_particles = [];
	},
	createParticles: function(){
		for(var i = 0; i < this.config.particle_count; i++){
			this.particles.push( new FlameParticle(this) );
		}
		for(var o = 0; o < this.config.smoke_count; o++){
			this.smoke_particles.push( new SmokeParticle(this) );
		}
	},
	render: function(){
		//window.requestAnimationFrame( render );
		//Painting the canvas black
		//Time for lighting magic
		//particles are painted with "lighter"
		//In the next frame the background is painted normally without blending to the 
		//previous frame
		
		var ctx = this.ctx;
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		//ctx.fillRect(0, 0, this.w, this.h);
		ctx.clearRect(0, 0, this.w, this.h);
		ctx.globalCompositeOperation = "lighter";
		
		this.particles.forEach(function(p,i){
			p.step();
			p.draw(ctx);
		})

		this.smoke_particles.forEach(function(s,i){
			s.draw(ctx);
			s.step();
		})
	},
	play: function(){
		this.interval = setInterval(this.render.bind(this), 33);
	},
	addControl: function(){
		var self = this;
		for( var key in self.config ){
			var input = document.createElement('input');
			var br = document.createElement('br');
			input.setAttribute('name',key);
			input.setAttribute('placeholder',key);
			document.getElementsByTagName('body')[0].appendChild(input);
			document.getElementsByTagName('body')[0].appendChild(br);
		}
		var inputs = document.querySelectorAll('input');
		// console.log(inputs);
		[].forEach.call(inputs,function(item){
			item.addEventListener('change',function(e){
				self.clear();
				self.config[ e.target.name ] = e.target.value;
				self.createParticles();
				self.play();
			})
		})
	}
}

new Fire({
	elem: document.getElementById('fire'),
	width: 800,
	height: 1000
})