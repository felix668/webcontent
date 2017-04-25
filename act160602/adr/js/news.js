$(document).ready(function(){
	
	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			'font-size': 100*w/640+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	
	var inProcessing = false;
	$('.button').on('touchstart',function(){
		if( !inProcessing ){
			$(this).attr('src','img/button_active.png');
		}
	})
	$('.button').on('touchend',function(){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160622&act_b=click",type:"GET",success:function(){}});
		if( !inProcessing ){
			inProcessing = true;
			$(this).attr('src','img/button.png');
			N.openPage("http://iyuedu.qq.com/event/act160601/"+(env.plat || 'adr')+"/index.html?act_f=160621");
			setTimeout(function(){
				$('.mask').show();
				inProcessing = false;
			},3000);
		};
	})

	$('.download').on('touchstart',function(){
		$(this).attr('src','img/download_active.png');
	})
	$('.download').on('touchend',function(){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160622&act_b=down",type:"GET",success:function(){}});
		$(this).attr('src','img/download.png');
		if(env.pt=="adr"){
			window.location.href = "http://rpcs.myapp.com/myapp/rcps/d/10003531/qqreader_5.9.0.888_android_r227073_20160420160247_otherstore-release_10003531_160427110519a.apk";
		}else{
			N.downLoad(null,'10003531');
		}
		
	})

	$('.cancel').on('touchstart',function(){
		$(this).attr('src','img/cancel_active.png');
	})
	$('.cancel').on('touchend',function(){
		$(this).attr('src','img/cancel.png');
		$('.mask').hide();
	})
	$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160622&act_b=index",type:"GET",success:function(){}});
});

function initSNS(){
	console.log(N);
}

function json(obj){
	return JSON.stringify(obj);
}

function openOrDownloadApp(){
	N.openPage("http://iyuedu.qq.com/event/act160601/"+(env.plat || 'adr')+"/index.html?act_f=160621");
//	N.downLoad(null,'10002412');
}

