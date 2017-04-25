import {$ios} from './config.js';

var $ = window.jQuery;
//console.log('ccc')
$.fn.swipe = function( opts ){
		
	var $$swiper = this;
	var $$train = $$swiper.find(".train");
	// The sequence will not change after any DOM manipulation.
	var $$items = $$swiper.find(".item");
	var $$tabs = $('.dot');

	var $$text = [
		'1. 打开微信，点击“我>钱包>电影票”。',
		'2. 点击“我的>优惠码通兑”。',
		'3. 兑换成功，支付时从“可用优惠”中勾选即可。'
	]

	var $swiperText = $('.swiperText');

	// $$width is the width of this swiper.
	var $$width		= $$swiper.width(),
		$$height	= $$items.height(),//$$swiper.height(),
		$$length	= $$items.length;
	//console.log('000')
	(function(){
	//$(document).ready(function(){
		//console.log('111')
		var $$currentOne	= 0;
		var $$target;
		var $$switching		= false;
		// Configuration.
		var $$mode			= opts.mode			|| "slider",
			$$direction		= opts.direction	|| "horizontal",
			$$autoplay		= opts.autoplay		|| false,
			$$carousel		= opts.carousel		|| false,
			$$sticky		= opts.sticky		|| true,
			$$interval		= opts.interval		|| 4000,
			$$duration		= opts.duration		|| 300;

		var $$keyControll 	= opts.keyControll  || true,
			$$wheelControll = opts.wheelControll|| true;

		function $$init(){
			$$currentOne= 0;
			$$target	= 0;
			$$switching	= false;
			$$width		= $$swiper.width();
			$$items.width( $$width );
			$$height	= $$items.height();
			$$swiper.height( $$height );
			$$train.css({
				transform: 'translate3d(0,0,0)',
				//webkitTransform: 'translate3d(0,0,0)',
				left: 0
			});
			$$renderTabs();
		}
		$(window).on( 'resize',$$init );

		function $$renderTabs(){
			console.log($$currentOne)
			$$tabs.removeClass("active");
			$$tabs.eq( $$currentOne ).addClass("active");
		}

		$$swiper.css({
			position:"relative"
		});
		$$train.css({
			position:"absolute",
			left:0,
			top:0
		});	

		//			
		if( $$mode==='touch' ){
			var trainOffsetX = 0;
			var itemOffsetX = 0;
			var currentItemScale = 1;
			var otherItemScale = 0.8;
			var isDown = false;
			var originalX;
			var prevX;
			var currentX;
			var touchStartTime,touchEndTime;
			var Y1,Y2;
			var scrollPrevented = false;

			$$items.addClass('inactive');
			$$items.eq(0).removeClass('inactive');

			function toCard( i ){
				//console.log($$width);
				$$items.css({
					//webkitTransition:$$duration/1000+'s',
					transition:$$duration/1000+'s'});
				$$items.addClass('inactive');
				$$items.eq(i).removeClass('inactive');
				$$train.css({
					transition: '0.3s',
					transform: 'translate3d('+(-i*$$width)+'px,0,0)'
					//webkitTransition: '0.3s',
					//webkitTransform: 'translate3d('+(-i*$$width)+'px,0,0)'
				});
				// $$items.eq( $$currentOne ).css({
				// 	transform: ''
				// });
				// $$items.eq( $$currentOne-1 ).css({
				// 	transition: '0.3s',
				// 	transform: 'scale(0.8)'
				// })
				// $('.HEXAGON').removeClass('active');
				// $('.HEXAGON').eq( $$currentOne ).addClass('active');
				$swiperText.html( $$text[i] );
				$$renderTabs();
				setTimeout(function(){
					currentItemScale = 1;
					otherItemScale = 0.8;				
					$$switching = false;
				},$$duration);
				// $$train.animate( {
				// 	left:(-i*$$width)
				// },$$duration,function(){
				// 	$$renderTabs();

				// 	$('.HEXAGON').removeClass('active');
				// 	$('.HEXAGON').eq( $$currentOne ).addClass('active');

				// 	$$switching = false;
				// } );
			}
			$$train.on("mousedown touchstart",function(e){

				if( true ){
					scrollPrevented = false;
					trainOffsetX = -$$currentOne*$$width;
					$$switching = true;
					//e.preventDefault();
					isDown = true;
					touchStartTime = new Date().getTime();
					//console.log(e.changedTouches[0].pageX)
					if( e.originalEvent ){
						originalX = e.originalEvent.changedTouches[0].pageX;
						Y1 = e.originalEvent.changedTouches[0].pageY;
					}else{
						originalX = e.changedTouches[0].pageX;
						Y1 = e.changedTouches[0].pageY;
					}
					prevX = originalX;
					if( $$carousel===true ){
						if( $$currentOne===$$length-1 ){
							$$items.eq(0).appendTo($$train);
							$$train.css({left:'+='+$$width+'px'});
						}
					}
				};
			});
			$$train.on("mousemove touchmove",function(e){
				
				if( isDown ){
					if( e.originalEvent ){
						currentX = e.originalEvent.changedTouches[0].pageX;
						Y2 = e.originalEvent.changedTouches[0].pageY;
					}else{
						currentX = e.changedTouches[0].pageX;
						Y2 = e.changedTouches[0].pageY;
					}
					var distanceY = Y2-Y1;
					var distance = currentX - prevX;
					prevX = currentX;
					//console.log(distance)
					trainOffsetX += distance;
					itemOffsetX += distance;
					currentItemScale += 0.2*distance/$$width;
					otherItemScale = (otherItemScale!==1)?(0.8+( 0.2*Math.abs(itemOffsetX)/$$width )):1;
					//console.log(currentItemScale)

		
					if( !scrollPrevented&&Math.abs(distance)<Math.abs(distanceY) ){
						
					}else{
						e.preventDefault();
						scrollPrevented = true;
						if( $$sticky ){
							//The train will move.
							$$train.css({
								transition: '0s',
								transform: 'translate3d('+trainOffsetX+'px,0,0)'
								//webkitTransition: '0s',
								//webkitTransform: 'translate3d('+trainOffsetX+'px,0,0)'
							})
							// $$items.eq( $$currentOne ).css({
							// 	transition: '0s',
							// 	transform: 'scale('+currentItemScale+')'
							// })
							// // $$items.eq( $$currentOne-1 ).css({
							// // 	transition: '0s',
							// // 	transform: 'scale('+otherItemScale+')'
							// // })
							// $$items.eq( $$currentOne+1 ).css({
							// 	transition: '0s',
							// 	transform: 'scale('+otherItemScale+')'
							// })
						};
					}
				


					// // $$train.css( {left:"+="+distance+"px"},0 );
				};
			});
			$$train.on("mouseup mouseleave touchend",function(e){
				if( isDown ){
					touchEndTime = new Date().getTime();
					var timeSpan = touchEndTime - touchStartTime;
					//console.log( timeSpan );
					if( e.originalEvent ){
						currentX = e.originalEvent.changedTouches[0].pageX;
					}else{
						currentX = e.changedTouches[0].pageX;
					}
					var distance = currentX - originalX;
					if( ( timeSpan<200||distance<-0.25*$$width||distance>0.25*$$width ) ){
						if( distance<0 ){
							if( $$currentOne<$$length-1 ){
								$$currentOne++;
							}else{
								$$currentOne = $$length-1;
							}
							// if( $$currentOne===$$length ){
							// 	$$currentOne = $$carousel?0:($$length-1);
							// }else{
							// 	//通知服务器用户浏览了哪张卡片。
							// 	//forceLog( param('act_f'),'card-'+$$currentOne );
							// 	//$$statistics.cards.push( $$currentOne );
							// 	//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
							// }
						}else if( distance>0 ){
							if( $$currentOne>0 ){
								$$currentOne--;
							}else{
								$$currentOne = 0;
							}
							// if( $$currentOne===-1 ){
							// 	$$currentOne = $$carousel?($$length-1):0;
							// // }else{
							// // 	//通知服务器用户浏览了哪张卡片。
							// // 	//forceLog( param('act_f'),'card-'+$$currentOne );
							// // 	//$$statistics.cards.push( $$currentOne );
							// // 	//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
							// // }
						}
					}

					// if( $$carousel===true&&$$currentOne===0 ){
					// 	$$train.animate( 
					// 		{left:-($$length-1)*$$width},
					// 		$$duration,
					// 		function(){
					// 			$$items.eq(0).prependTo($$train);
					// 			$$train.css({left:0});
					// 			$$renderTabs();
					// 			$$switching = false;
					// 		}
					// 	 )
					// };
					//console.log( $$currentOne );
					//console.log( toCard );
					toCard( $$currentOne );
					isDown = false;
				};
			});
			function next(){
				if( !$$switching ){
					$$currentOne++;
					if( $$currentOne===$$length ){
						$$currentOne = 0;
					};
					toCard( $$currentOne );
				};
			}
			function prev(){
				$$currentOne--;
				if( $$currentOne===-1 ){
					$$currentOne = $$length-1;
				};
				toCard( $$currentOne );
			}

			if( $$keyControll ){
				$(document).on('keydown',function(){

				})
			}
			// if( $$wheelControll ){
			// 	$$train.on("mousewheel DOMMouseScroll",function(e){
			// 		e.preventDefault();
			// 		console.log(e.originalEvent.detail)
			// 		if( e.originalEvent.detail>0 ){
			// 			next();
			// 		}else{
			// 			prev();
			// 		};
			// 	});
			// }
			if( $$autoplay ){
				setInterval( next,4000 );
			}
			// $$swiper.find(".next").on("click",next);
			// $$swiper.find(".prev").on("click",prev);

			// var hexagons = $('.HEXAGON');
			// hexagons.on('click',function(){
			// 	if( true ){
			// 		//switching = true;
			// 		//for jQuery
			// 		var i = $(this).index('.HEXAGON');
			// 		//通知服务器用户点击了哪个六边形。
			// 		//forceLog( param('act_f'),'hexagon-'+i );
			// 		//$$statistics.hexagons.push(i);
			// 		console.log( i,'hexagon-'+i );
			// 		hexagons.removeClass('active');
			// 		$(this).addClass('active');
			// 		$$currentOne = i;
			// 		toCard( $$currentOne );
			// 	}
			// })
		};

	})();
};