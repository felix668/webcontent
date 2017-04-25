$(document).ready(function(){
	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			fontSize: 100*w/720+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	Local.cacheImage(common.front()+"act170106/adr/images/pack.png");
	Local.shareStyleImage(common.front()
					+ "act170106/adr/images/pack.png","https://ptsolomo.reader.qq.com/book_res/event/act170106/adr/images/title0.png");
	
	$(".HEXAGON").first().click(function(){Local.awakeApp("weixin://");})
	
});