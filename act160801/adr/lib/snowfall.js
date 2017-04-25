function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}
function extend (target) {
    target = arguments[0];

    var objects = Array.prototype.splice.call(arguments,1);

    objects.forEach(function (obj) {
        for(var prop in obj) {
            target[prop] = obj[prop]
        }
    });

    return target;
}

Particle = function (opts) {
    this.opts = opts;

    this.color = this.opts.color;
    this.x = this.opts.x;
    this.y = this.opts.y;
    this.d = this.opts.d;

    this.radius = this.opts.radius;
};
Particle.prototype = {
    update: function () {
        var width = this.opts.host.width;
        var height = this.opts.host.height;
        var x, y;

        x = this.x + Math.cos(0) * this.d * 2;
        y = this.y + Math.sin(0) + 1 + ((this.radius/3*this.d) * 2);

        if (x > width) {
            x = 0;
        };
        if (x < 0) {
            x = width;
        };
        if(y > height) {
            y = 0;
            x = getRandomInt(0, width)
        };

        this.x = x;
        this.y = y;
    },
    draw: function(ctx){
        ctx.beginPath();
        ctx.moveTo( this.x, this.y );
        ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function Snowfall (selector, opts) {
    this.elem = document.querySelector(selector);
    this.ctx = this.elem.getContext('2d');

    this.width = this.elem.width = 1000;
    this.height = this.elem.height = 1000;

    this.config = {
        color: 'white',
        speed: 2,
        count: 100,
        maxRadius: 5
    }

    for(var key in opts){
        this.config[key] = opts[key];
    }

    this.particles = [];
    this.angle = 0;

    this.init();
};

Snowfall.prototype = {
    init: function () {
        this.createParticles();
        this.render();
    },
    createParticles: function () {
        var self = this;
        for( var i=0;i<this.config.count;i++ ){
            self.particles.push(new Particle({
                color: 'white',
                x: Math.round( Math.random()*self.width ),
                y: Math.round( Math.random()*self.height ),
                d: Math.random(),
                radius: getRandomInt(2, self.config.maxRadius),
                host: self,
                ctx: self.ctx
            }))
        }
    },
    render: function () {
        var self = this;
        this.angle = this.angle - 0.0001;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particles.forEach( function(p){
            p.update();
            p.draw(self.ctx);
        });

        requestAnimationFrame( this.render.bind(this) )
    }
};


document.addEventListener('DOMContentLoaded',function(){
    new Snowfall('#snow')
    new Snowfall('#snow-top', {
    	maxRadius: 10
    })
    new Snowfall('#snow-blur', {
    	count: 10,
    	maxRadius: 35
    })
})