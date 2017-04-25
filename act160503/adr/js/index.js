/*
import {Local} from './local.js';



Local.init()
Local.reqaObj(server()+"pkg160503/pick?right="+$score, function(data) {
Local.login();
Local.openVip
*/
var yangDebug = false;
var firstClick = false;

(function( window,Local,forceLog,param,server ){
	//通知服务器用户进入了“答题赢书券”活动页面。用于统计活动页uv。
	Local.init();

	forceLog(param('act_f'),'index' );

	$(document).ready(function(){

		
//		调试
		// $(".nickname").on('click',function(){
		// 	console.log(1+"#"+yangDebug);
		// 	if(!firstClick){
		// 		firstClick= !firstClick;
		// 		setTimeout(function(){
		// 			firstClick = false;
		// 		},1000)
		// 	}else{
		// 		yangDebug = !yangDebug;
		// 		firstClick = false;
		// 	}
		// 	console.log(2+"#"+yangDebug);
		// });
		

		//根据屏幕的宽度重新设定html的font-size。 
		function setRem(){

			var w = $('html').width();
			console.log(w);
			$('html').css({
				fontSize: 100*w/720+"px"
			});
		}

		setRem();
		$(window).on('resize',setRem);


		var $resultPageText = [
			{
				nickname: '读书虫',
				comment: '亲，你的才华实在隐藏得太深了！'
			},
			{
				nickname: '读书接班人',
				comment: '少年，你只差一点点就成功了！加油啊！'
			},
			{
				nickname: '读书王',
				comment: '大王，你终于来了！智商爆表唯你独尊！'
			}			
		];

		var $testMode = false;
		var $devMode = true;

		var $loggedIn = false;
		var $switching = false;
		var $dataReady = false;
		var $current = 0;
		
		var $questions;
		var $score = 0;
		var $coupon = 0;

		// 
		var $frames = $('.frame');
		var $cover = $('.cover');
		var $btn_start = $('#btn-start');
		var $btnOver = $('.btnOver');
		var $btnPaid = $('.btnPaid');

		var $world = $('.world');
		var $mask = $('.mask');

		var $questionPage = $('.questionPage');

		var $nickname = $('.nickname');
		var $couponElem = $('.coupon');
		var $comment = $('.comment');

		var $resultPage = $('.resultPage');
		var $badge = $('.badge');
		var $coupons = $('.coupon');
		var $status = $('.status');
		var $info = $('.info');
		var $btn_confirm = $('#btn-confirm');
		//

		function init(){

			setRem();
			$('.getNow').hide();
			$('.couponsTaken').hide();
			//如果localStorage.score存在，页面将显示结果页。
			// alert(localStorage);
			// alert(localStorage.score);

			if(localStorage.score){
				//delete localStorage.score;
				if( $devMode ){
					console.log(localStorage);
				};
				$score = localStorage.score;
				toResultPage();
			}else{
			//否则，页面将显示首页。
				$current = 0;
				$switching = false;
				$score = 0;
				try{
					$('html').scrollTop(0);
					$('body').scrollTop(0);
					$('body').css({overflow:'visible'});
					$frames.hide();
					$cover.show();
					$('.pageNumber').html(1);
				}catch(e){
					alert(e);
				}
			};
			//alert('try');
			try {
				// 向服务器发送请求，获取题目。
				Local.reqaObj(server()+"pkg160503/init", function(data) {
					//alert(data.code)
					$dataReady = true;
					if( $devMode ){console.log('Data received:',data)};
					if(data.qas){
						$questions = data.qas;
						//借助正则表达式去掉题目的选项中的A、B、C、D、。
						for( var i=0;i<$questions.length;i++ ){
							for( var j=0;j<$questions[i].answers.length;j++ ){
								$questions[i].answers[j] = $questions[i].answers[j].replace(/^[A-D]、/,'');
							}
						};
					};
					if( $testMode ){
						if(data.qas){
							$questions = data.qas.slice(0,1);
						};
						data.code = -2;
					}
					//alert(data.code);
					//根据data.code显示“开始答题”、“已领取”、“活动已结束”三个按钮中的一个。
					(function renderButtons(){
						//console.log(data.code);
						if( data.code===-8 ){
							$('.btnStart').hide();
							$btnPaid.hide();
							$btnOver.show();
							$('.getNow').show();
							$('.couponsTaken').hide();
						}else if( data.code===-2 ){
							$('.btnStart').show();
							$btnPaid.hide();
							$btnOver.hide();
							$('.getNow').hide();
							$('.couponsTaken').show();
						}else{
							$('.btnStart').show();
							$btnPaid.hide();
							$btnOver.hide();
							$('.getNow').show();
							$('.couponsTaken').hide();
						}
					})();
					callback();
				}, [], function() {
					JSToast.showToast("网络不畅，请稍后再试试");
				}, 1);
			}catch(e){
				alert(e);
			}
		}

		function toNextQuestion(){
			if( !$switching ){
				$switching = true;
				if( $current<$questions.length-1 ){
					var _img = $(this).find('img');
					_img.attr('src','image/selection_active.png');
					$score += $(this).index()===$questions[$current].right?1:0;
					if( $devMode ){console.log( 'Qustion number and score:',$current,$score );};
					setTimeout(function(){
						$('.pageNumber').html( $current+2 );
						$('.nextPanel').find('.title').html( $questions[$current+1].question );
						for( var i=0;i<4;i++ ){
							$('.nextPanel').find('.optionContent').eq(i).html( $questions[$current+1].answers[i] );
						}
						$('.currentPanel').addClass('ka-flyOut');
						$('.nextPanel').addClass('moveIn');
					},200);
					setTimeout(function(){
						_img.attr('src','image/selection.png');
						var _next = $('.nextPanel');
						var _current = $('.currentPanel');
						_next.removeClass('nextPanel moveIn ka-flyOut').addClass('currentPanel');
						_current.removeClass('currentPanel moveIn ka-flyOut').addClass('nextPanel');
						$current++;
						$switching = false;
					},1000);
				}else{
					try{
						var _img = $(this).find('img');
						_img.attr('src','image/selection_active.png');
						$score += $(this).index()===$questions[$current].right?1:0;
						localStorage.score = $score;
						if( $devMode ){console.log('Result:',localStorage);};
						setTimeout(function(){
							_img.attr('src','image/selection.png');
							toResultPage();
							$switching = false;
						},400);
					}catch(e){
						alert(e);
					}
				}
			};
		};

		function toResultPage(){
			
			var i;
			$badge.hide();
			$coupons.hide();
			if( $score<=1 ){
				$coupon = 50;
				i = 0;
			}else if( $score<=4 ){
				$coupon = 100;
				i = 1;
			}else if( $score<=6 ){
				$coupon = 200;
				i = 2;
			};
			if( $testMode ){i=2;}
			//alert(i);
			$(document).ready(function(){
				(function renderResult(){
					$('.badge'+i).show();
					$('.coupon'+i).show();
					try{
					$('.score').html( $score );
					$nickname.html( $resultPageText[i].nickname );
					$comment.html( $resultPageText[i].comment );
					//$couponElem.html( $coupon );
					}catch(e){
						alert(e);
					}
				})();
				$frames.hide();
				$('body').css({
					overflow:'hidden'
				})
				$resultPage.show();
			})
		}

		function callback(){
			if( $questions ){	
				$('.currentPanel').find('.title').html( $questions[$current].question );
				for( var i=0;i<4;i++ ){
					$('.currentPanel').find('.optionContent').eq(i).html( $questions[$current].answers[i] );
				};
			};
			
		};

		function handleResize(){
			var h = $('.optionContent').height();
			$('.optionContent').css({
				lineHeight: h+'px'
			});
		}

		$(window).on('resize',handleResize);

		//点击“开始答题”按钮之后：
		$btn_start.on('click',function(){
			if( $dataReady ){
				console.log('Data received. Inform the server that this button is clicked.')
				
				//通知服务器用户点击了“开始答题”按钮。
				forceLog( param('act_f'),'btn-start' );

				$('html').scrollTop(0);
				$('body').scrollTop(0);
				$cover.hide();
				$('body').css({overflow:'hidden'});
				$world.show();
				$questionPage.show();
				handleResize();
				$dataReady = false;
			};
		})

		$('.options').on('click','li',toNextQuestion);


		//点击“立即领取”按钮之后：
		$('.getNow').on('click',function(){
			console.log('Inform the server that this button is clicked.');

			//通知服务器用户点击了“立即领取”按钮。
			forceLog( param('act_f'),'getNow' );
			
			//告知服务器用户答对了几道题。	
			Local.reqaObj( server()+"pkg160503/pick?right="+$score, function(data) {
				console.log('Post the result to server.');
				console.log(data);
				if( $testMode ){data.code = 1;};
				//$loggedIn = data.isLogin;

//				调试
				// if(yangDebug){
				// 	alert(json(data));
				// }

				//根据返回的data.code跳转到不同的页面。
				switch(data.code){
					case -4://-4
						console.log('Try to login.');
						Local.login();
						break;
					case -2:
						showConfirmPanel( 'cross','领取失败','您已领取过，每人只能领取一次哦','我知道啦' );
						break;
					case -1://-1
						showConfirmPanel( 'penguin','开通包月即可领取','短信、体验卡开通，不能参与此活动哦','确认开通' );
						break;
					case 1:
						showConfirmPanel( 'checkmark','领取成功','书券已到账，书券有效期：7天，去书城看书使用','我知道啦' );
						//通知服务器用户成功领取了书券。
						forceLog( param('act_f'),'successful' );
						delete localStorage.score;
						$('.getNow').hide();
						$('.couponsTaken').show();
						break;
				}
				function showConfirmPanel( icon,status,info,goto_ ){
					$('.icon').hide();
					$('.'+icon).show();
					$('.status').html( status );
					$('.info').html( info );
					$('.goto_content').html( goto_ );
					$mask.show();
					handleResize();
				};
			});

		});

		$btn_confirm.on('click',function(){
			var text = $('.goto_content').html();
			if( text==='我知道啦' ){
				$mask.hide();
			}else if (text==='确认开通'){
				//通知服务器用户点击了“确认开通”按钮。
				forceLog( param('act_f'),'confirm' );
				console.log('Try to become VIP.');
				Local.openVip( $loggedIn );
				$mask.hide();
			}else if (text==='去书城'){
				//console.log('Go to book-city.');
			}
		});
		$('.close').on('click',function(){
			$mask.hide();
		})
		//点击“再玩一次”之后：
		$('.tryAgain').on('click',function(){
			//通知服务器用户点击了“再玩一次”按钮。
			forceLog( param('act_f'),'playAgain' );
			delete localStorage.score;

			init();
		})
		$(document).on('touchmove',function(e){
			if( $cover.css('display')==='none' ){
				e.preventDefault();
			};
		})
		window.init = init;

		init();

	});

})( window,Local,forceLog,param,server );

/*

var CONFIG = {
    LOCAL_HOST:		'http://solomotest4.3g.qq.com/book_res/event/act91/', //本地开发访问地址
    DEVELOP_SERVER:	'http://test3.wapmusic.qq.com/andmain/', 	//开发环境后台服务地址

	TEST_HOST:		'solomotest4.3g.qq.com',				//测试环境访问地址
	TEST_LOCAL_HOST:'http://solomotest4.3g.qq.com/book_res/event/act91/', //测试环境访问地址
	TEST_SERVER:	'http://test3.wapmusic.qq.com/andmain/',	//测试环境后台服务地址
	
	FORMAL_HOST:	'ireader.qq.com',					//正式环境访问地址
	FORMAL_LOCAL_HOST:'http://ireader.qq.com/event/act91/', //正式环境页面地址
	FORMAL_SERVER:	'http://event.book.qq.com/andmain/'		//正式环境后台服务地址
};
var SERVER = (function(){
	var server = CONFIG.DEVELOP_SERVER;
	if( window.location.hostname===CONFIG.TEST_HOST ){
		server = CONFIG.TEST_SERVER;
	}else if ( window.location.hostname===CONFIG.FORMAL_HOST ){
		server = CONFIG.FORMAL_SERVER;
	};
	return server;
})();
var PROMOTION_CODE = window.location.href.match(/act_f=\w+/)?window.location.href.match(/act_f=\w+/)[0].split('=')[1]:'';

// $.ajax({
// 	url: SERVER + 'pkg160503/init',
// 	type: 'post',
// 	dataType: 'json'
// }).done(function(data){

// $.ajax({
// 	url: SERVER + 'sum?act_f=' + PROMOTION_CODE + '&act_b=btn-start',
// 	type: 'post'
// });

// $.ajax({
// 	url: SERVER + 'sum?act_f=' + PROMOTION_CODE + '&act_b=getNow',
// 	type: 'post'
// });

// $.ajax({
// 	url: SERVER + 'pkg160503/pick?right=' + $score,
// 	type: 'post',
// 	dataType: 'json'
// }).done(function(data){		

// $('.options li').on('touchstart mousedown',function(){
// 	$(this).find('img').attr('src','image/selection_active.png');
// })
// $('.options li').on('touchend mouseup',function(){
// 	$(this).find('img').attr('src','image/selection.png');
// })


$('.getNow').on('touchstart mousedown',function(){
	$(this).attr('src','image/btn_get_active.png');
});
$('.getNow').on('touchend mouseup',function(){
	$(this).attr('src','image/btn_get.png');
});

var $confirmText = [
	{
		status: '开通包月即可领取',
		info: '短信、体验卡开通，不能参与此活动哦',
		todo: '确认开通'
	},
	{
		status: '领取成功',
		info: '书券已到账，书券有效期：7天，去书城看书使用',
		todo: '去书城'
	},
	{
		status: '领取失败',
		info: '您已领取过，每人只能领取一次哦',
		todo: '我知道啦'
	}
];

*/