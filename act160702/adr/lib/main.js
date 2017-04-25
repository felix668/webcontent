import './rem.js';
import './zeal.js';

window.initSNS = function(){

	// var $ = window.Zeal;

	//用于QQ新闻的统计。
	var sum = new Image();

	//通知服务器用户进入了该页面。
	sum.src="http://t.l.qq.com/?t=s&mid="+param('mid')+"&actid=10516";
	$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160714&act_b=index",type:"GET",success:function(){}});

	var ok = true;
	var X0, X1, Y0, Y1;
	$('.btn').on('touchstart',function(e){
		e.preventDefault();
		// X0 = e.originalEvent.changedTouches[0].pageX;
		// Y0 = e.originalEvent.changedTouches[0].pageY;
		$('.btn-img').attr('src','img/btn_active.png');
		// setTimeout(function(){
		// 	$('.btn-img').attr('src','img/btn.png');
		// },1000);
	})

	// $('.btn').on('touchcancel',function(e){
	// 	console.log(e)
	// 	$('.btn-img').attr('src','img/btn.png');
	// });

	$('.btn').on('touchend',function(e){
		//e.stopPropagation();
		$('.btn-img').attr('src','img/btn.png');
		if( ok ){
			ok = false;
			//通知服务器用户点击了“下载QQ阅读免费看”按钮。
			sum.src="http://t.l.qq.com/?t=s&mid="+param('mid')+"&actid=10515";
			$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160714&act_b=click",type:"GET",success:function(){}});
			
			X1 = e.originalEvent.changedTouches[0].pageX;
			Y1 = e.originalEvent.changedTouches[0].pageY;
			var distanceX = Math.abs( X1 - X0 );
			var distanceY = Math.abs( Y1 - Y0 );
			//console.log(e.originalEvent)
			//尝试打开QQ阅读APP。
			//N.openApp();
			setTimeout(function(){
				$('.mask').show();
				ok = true;
			},3000);
		}
		
	})


	$('.cancel').on('touchstart',function(e){
		e.preventDefault();
		var self = this;
		$(this).css({background:'#E6E6E6'});
		// setTimeout(function(){
		// 	$(self).css({background:'white'});
		// },1000)
	})
	$('.cancel').on('touchend',function(){
		$(this).css({background:'white'});
		$('.mask').hide();
	})

	$('.confirm').on('touchstart',function(e){
		e.preventDefault();
		var self = this;
		$(this).css({background:'#3479b3'});
		// setTimeout(function(){
		// 	$(self).css({background:'#3d8dcf'});
		// },1000)
	})
	$('.confirm').on('touchend',function(){
		$(this).css({background:'#3d8dcf'});
		//通知服务器用户点击了“下载QQ阅读”按钮。
		sum.src="http://t.l.qq.com/?t=s&mid="+param('mid')+"&actid=10517";
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160714&act_b=down",type:"GET",success:function(){}});
		//下载QQ阅读APP。
		N.downLoad(null, '10003531');
	})

	console.log(N);
}




