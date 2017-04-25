
function Swiper(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.prizes = [
		'联想(Lenovo)小新Air 13.3英寸超轻薄笔记本电脑',
		'iPhone6',
		'小米5',
		'京东卡500元'
	];
	this.grades = [
		'1','2-3','4-6','7-10'
	];

	this.carousel = config.carousel || true;
	this.sticky = config.sticky || true;
	this.duration = config.duration || 300;

	this.currentOne = 0;
	this.trainOffsetX = 0;

	this.init();
}

Swiper.prototype = {
	init: function(){
		var obj = this.obj;
		this.body = obj.find('.swiper-body');
		this.train = obj.find('.train');
		this.items = obj.find('.item');
		this.imgs = obj.find('img');
		this.dots = obj.find('.dot');
		this.prizeNumber = obj.find('.prizeNumber');
		this.desc = obj.find('.desc');

		this.switching = false;
		this.inCycle = false;

		this.length = this.items.length;
		this.last = this.length - 1;

		var self = this;

		$(window).on('load',function(){
			self.resize();
		});


		if( this.carousel ){
			this.train.css({
				'margin-left': '-100%'
			})
			this.train.prepend( this.items.eq(this.last) );
		}
		this.listen();
	},
	resize: function(){
		var self = this;
		self.width = self.body.width();
		self.height = self.body.height();
		console.log(this.width)
		self.items.css({
			width: self.width+'px'
		})
		self.toItem( self.currentOne )
	},
	listen: function(){
		$(window).on('resize',this.resize.bind(this));
		this.body.on('touchstart',this.ontouchstart.bind(this));
		this.body.on('touchmove',this.ontouchmove.bind(this));
		this.body.on('touchend',this.ontouchend.bind(this));
	},
	updatePagi: function(){
		this.dots.removeClass('active');
		this.dots.eq( this.currentOne ).addClass('active');
	},
	updateInfo: function(i){
		this.prizeNumber.html('[ 第'+this.grades[i]+'名 ]');
		this.desc.html(this.prizes[i]);
	},
	toItem: function( i ){
		this.updateInfo(i);
		this.train.css({
			transition: this.duration/1000+'s ease-out',
			transform: 'translate3d('+  (-i*this.width)  +'px,0,0)'
		});
		this.items.removeClass('active');
		this.items.eq(this.currentOne).addClass('active');
	},
	toNext: function(){
		if( this.currentOne<this.last ){
			this.currentOne++;
		}else{
			this.currentOne = 0;
		}
		this.updateInfo(this.currentOne);
		this.items.removeClass('active');
		this.items.eq( this.currentOne ).addClass('active');
		this.train.css({
			transition: this.duration/1000+'s ease-out',
			transform: 'translate3d('+  (-this.width)  +'px,0,0)'
		})
		var self = this;
		setTimeout(function(){
			self.train.append( self.obj.find('.item').eq(0) );
			self.train.css({
				transition: '0s',
				transform: 'translate3d(0,0,0)'
			})
		},self.duration)
	},
	toPrev: function(){
		if( this.currentOne>0 ){
			this.currentOne--;
		}else{
			this.currentOne = this.last;
		}
		this.updateInfo(this.currentOne);
		this.items.removeClass('active');
		this.items.eq( this.currentOne ).addClass('active');
		this.train.css({
			transition: this.duration/1000+'s ease-out',
			transform: 'translate3d('+  (this.width)  +'px,0,0)'
		})
		var self = this;
		setTimeout(function(){
			self.train.prepend( self.obj.find('.item').eq(self.last) );
			self.train.css({
				transition: '0s',
				transform: 'translate3d(0,0,0)'
			})
		},self.duration)
	},
	ontouchstart: function(e){
		if( this.switching===false ){
			this.inCycle = true;
			// reset states of this touch cycle
			this.moveCount = 0;
			this.scrolling = false;
			this.trainOffsetX = -this.currentOne*this.width;
			
			this.T0 = new Date().getTime();
			
			this.X0 = this.X1 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y1 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
			
			if( this.carousel ){
				this.trainOffsetX = 0;
			}
		};
	},
	ontouchmove: function(e){
		if( this.inCycle&&!this.switching ){
			this.X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y2 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
			var distanceY = this.Y2 - this.Y1;
			var distance = this.X2 - this.X1;
			this.X1 = this.X2;

			this.moveCount++;
			// if the touchmove is the first one in this touch cycle:
			if( this.moveCount===1 ){
				if( Math.abs(distance)<Math.abs(distanceY) ){
					// the page will scroll
					this.scrolling = true;
				}
			}

			this.trainOffsetX += distance;
			this.itemOffsetX += distance;

			// do nothing if the page is scrolling
			if( this.scrolling ){
				// acturally the page will scroll
			}else{
				e.preventDefault();
				if( this.sticky ){
					// The train will move.
					this.train.css({
						transition: '0s',
						transform: 'translate3d('+this.trainOffsetX+'px,0,0)'
					})
				};
			}
		};
	},
	ontouchend: function(e){
		var self = this;
		if( this.inCycle ){
			if( !this.switching&&!this.scrolling ){
				this.switching = true;
				this.T2 = new Date().getTime();
				var timeSpan = this.T2 - this.T0;
				//console.log( timeSpan );
				this.X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				
				if( this.carousel===false ){
					if( distance<0 ){
						this.currentOne = this.currentOne===this.last? this.last:this.currentOne+1 ;
					}else if( distance>0 ){
						this.currentOne = this.currentOne===0? 0:this.currentOne-1;
					}
					this.toItem( this.currentOne );
					this.inCycle = false;
				}else{
					if( distance<0 ){
						self.toNext();
					}else if( distance>0 ){
						self.toPrev();
					}
				}

				setTimeout(function(){
					self.switching = false;
				},self.duration)
			}	
		};
	},
	html: function(){
		var str = `
			<div class="swiper>
				<ul class="train">
					<li class="item"></li>
				<ul/>
				<ul class="pagination">
					<li class="dot"></li>
				</ul>
			</div>`;
		this.elem.innerHTML = str;
	},
	css: function(){
		this.obj.css({
			width: '80%',
			margin: '50px auto'
		}),
		this.train.css({

		}),
		this.items.css({
			width: this.width+'px',
			transition: this.duration/1000+'s'
		}),
		this.imgs.css({
			width: '100%'
		})
	}
}

export {Swiper};