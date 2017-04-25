$(document).ready(function(){
	forceLog( param('act_f') );
	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			fontSize: 100*w/720+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	
});