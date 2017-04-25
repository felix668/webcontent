$(document).ready(function(){
	Local.init();//注册客户端方法
	forceLog( param('act_f') );
	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			fontSize: 100*w/720+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	Local.cacheImage(front()+"act170106/adr/images/pack.png");
	Local.shareStyleImage(front()
					+ "act170106/adr/images/pack.png","https://ptsolomo.reader.qq.com/book_res/event/act170106/adr/images/title0.png");
	$(".HEXAGON").last().click(function(){Local.closePage();});
});