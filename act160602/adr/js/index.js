$(document).ready(function(){
	
	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			'font-size': 100*w/640+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	
	$('.button').on('touchstart',function(){
		$(this).attr('src','img/button_active.png');
	})
	$('.button').on('touchend',function(){
		$(this).attr('src','img/button.png');
	})
	
});

function initSNS(){
	console.log(N);
}


function openOrDownloadApp(){
	N.openPage("http://iyuedu.qq.com/event/act160601/"+(env.plat || 'adr')+"/index.html?act_f=160621");
//	N.downLoad(null,'10002412');
}

