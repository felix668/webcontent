import {$testMode,$ios} from './config.js';
//alert('config is ok')
import './zeal.js';
//alert('zeal is ok')
import './rem.js';
import './z.swiper.js';
//alert('swiper is ok')

var $ = window.jQuery;
//alert('$?')
if( !$ios ){
	Local.init();
}
//通知服务器用户进入了该页面。
forceLog( param('act_f') );

//alert('huh?')
// var state = {

// }

// function render(){

// }

$(document).ready(function(){

	var $main = $('.main');
	var $maskOver = $('.maskOver');
	var $maskSuccessful = $('.maskSuccessful');
	var $maskOut = $('.maskOut');

	var $state1 = $('.state1');
	var $couponUnreceived = $('.couponUnreceived');
	//var $couponOver = $('.couponOver');
	var $couponOut = $('.couponOut');
	var $couponReceived = $('.couponReceived');
	var $code = $('.code');

	var $inputElem = $('.inputElem');
	var $error = $('.error');

	var $state2 = $('.state2');
	var $before = $('.before');
	var $after = $('.after');
	var $over = $('.over');

	Local.reqaObj( server()+"pkg160604/init",function(data){
		if( $testMode ){
			data.isLogin = true;
			//data.isOver = false;
			data.hasGetCoupon = false;
			data.hasFree = false;
			data.hasPickedByQimei = true;
			data.hasPickedByQq = false;
			data.couponNum = 2;
			data.code = -2;
			data.coupon = 'DSAGWQE;JGELW';
		};
		console.log(data)
		//alert(JSON.stringify(data))
		if( data.isLogin===false ){//用户未登录
			if( data.code===-4 ){//活动已结束
				$maskOver.show();
				$couponOut.show();
				$over.show();
			}else{//活动未结束
				$couponUnreceived.show();
				$before.show();
			};
		}else if( data.isLogin===true ){//如果用户已登录
			
			if( data.hasGetCoupon===true ){//如果用户已经领过兑换券
				$couponReceived.show();
			}else if( data.code===-4 ){//如果活动已结束
				$couponOut.show();
			}else if( data.couponNum<=0 ){//如果兑换券领光了
				$couponOut.show();
			}else{
				$couponUnreceived.show();
			};
			
			if( data.hasPickedByQimei===true&&data.hasPickedByQq===false ){//如果该设备已领取过且该账号未领取过
				$over.show();
				$('.textGrey').html('该设备已领取过');
			}else if( data.hasFree ){//如果用户已领取福利2
				$after.show();
			}else if( data.code===-4 ){//如果活动已结束
				$over.show();
			}else{
				$before.show();
			}
		
		}
		if( data.coupon ){
			$code.html( data.coupon );
		}
		$('.score').html( data.book.mark+'分' );
		$('.favorite').html( data.book.hotValue+' 收藏' );
	});
	
	$('.swiper').swipe({
		mode: 'touch'
	})

	//如果这个参数为偶数
	if( Number( param('act_f') )%2===0 ){
		$('.getCoupon').removeClass('ka-pop');
	}

	$('.getCoupon').on('click',function(){
		//alert('111')
		//通知服务器用户点击了“立即领取”按钮。
		forceLog( param('act_f'),'pick' );
		try{
			Local.reqaObj( server()+"pkg160604/pick",function(data){
				if( $testMode ){
					data.code = 1;
					data.coupon = 'this is for test';
				}
				console.log(data);

				switch(data.code){
					case -2://用户未登录
						console.log('Try to login.')
						Local.login();
						break;
					case 0://兑换券已被抢光
						$maskOut.show();
						$state1.hide();
						$couponOut.show();
						break;
					case 1://兑换券领取成功
						$code.html( data.coupon );
						$maskSuccessful.show();
						$state1.hide();
						$couponReceived.show();
						break;

				}
			});
		}catch(e){
			alert(e)
		}
	})

	$inputElem.on('focus',function(){
		$error.html('');
	})
	$('.complete').on('touchend',function(){
		var value = $inputElem[0].value;
		console.log( $inputElem[0].value );
		if( value===null||value===undefined||value==='' ){
			$error.html('未输入神秘暗语');
		}else{
			Local.reqaObj( server()+"pkg160604/pick2?ay="+value,function(data){
				if( $testMode ){
					data.code = 1;
				}
				console.log(data);

				switch(data.code){
					case -2://用户未登录
						console.log('Try to login.')
						Local.login();
						break;
					case 0://神秘暗语是错误的
						$error.html('神秘暗语错误');
						$inputElem[0].value = null;
						break;
					case 1://成功
						$state2.hide();
						$after.show();
						break;

				}
			});
		};
	})

	$('.gotitSuccessful').on('click',function(){
		$maskSuccessful.hide();
	})
	$('.gotitOut').on('click',function(){
		$('.maskOut').hide();
	})

	$('.upper').on('click',function(){
		//通知服务器用户点击了书封。
		forceLog( param('act_f'),'book' );
		ABook.gotoDetail('806806');
	})

	$('.readItNow').on('touchend',function(){
		//通知服务器用户点击了“立即阅读”按钮。
		forceLog( param('act_f'),'readNow' );
		try{
			// Local.addToShelf({
			// 	bid : '806806',
			// 	title: '原来你还在这里',
			// 	author: '辛夷坞'
			// }, 0);
			ABook.gotoDetail('806806');
		}catch(e){
			alert(e);
		}
	})
})