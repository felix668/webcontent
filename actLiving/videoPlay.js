var pageObject = {};

pageObject.infourl = '';
pageObject.url = '';
pageObject.lihref = "";
pageObject.listId = "";

function init() {
	// setParam("tf", 1);
	var lihref = param('lihref');
	var pagename = decodeURIComponent(param('pagename'));
	$('#video').attr('src', lihref);
	$("title").html(pagename); 
	videoControl();
}

function videoControl() {
	var wl = $(window).width();
	var wh = $(window).height();
	$('.video-wrap,#videoPlay').css('width', wl + 'px');
	$('.video-wrap,#videoPlay').css('height', wh + 'px');
	$('#video').css('width', wl + 'px');
	//	$('#video').css('height', wh + 'px');
	var video = document.getElementById('video');
	//开始点击播放前过度
	$('.startBtn,.startBtnMask,.videobtn0').click(function() {
		video.play();
		$('.videoControl').show();//可以提前计算视频时间，解决隐藏时获取不到宽度的问题
		setTimeout(function() {
			$('.startBtn').addClass('hideing');
		}, 200);
		setTimeout(function() {
			$('.startBtn').hide();
			$('.loadingTop').addClass('hideing');
		}, 3000);
	});
	//视频控制
	$('#video').on('click', function(e) {
		e.stopPropagation();
		$(".videoControl").toggleClass('show'); //切换视频控件显示隐藏
		if(video.paused) {
			$('.btnPlay').show();
			$('.btnPause').hide();
		} else {
			$('.btnPlay').hide();
			$('.btnPause').show();
		}
		$('.btnPlay').on('click', function() {
			video.play();
			$('.videoControl').removeClass('show');
		})
		$('.btnPause').on('click', function() {
			video.pause();
			$('.btnPlay').show();
			$('.btnPause').hide();
		})
	});

	//获取视频缓冲
	$('#video').on('loadedmetadata', function() {
		var duration = timeFormat(Math.round(this.duration));
		setTimeout(startBuffer, 150);
	});
	//播放控制条
	var startBuffer = function() {
		var currentBuffer = video.buffered.end(0);
//		console.log(currentBuffer);
		var maxduration = video.duration;
//		console.log(maxduration);
		var perc = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width', perc + '%');

		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};
var progressBar=0;
	//获取当前播放时长
	$('#video').on('timeupdate', function() {
		var currentTime = timeFormat(Math.round(video.currentTime));
		var duration = timeFormat(Math.round(video.duration));
		$('.current').text(currentTime);
		$('.duration').text(duration);
		var percentage = 100 * video.currentTime / video.duration;
		$('.timeBar').css('width', percentage + '%');
		$('.currentPlay').css('left', percentage + '%');
		progressBar = wl-60-$('.current').width()-$('.duration').width();
		$('.progress').css('width',progressBar);
		$('.progress').css('left',$('.current').width()+30);
	});

	//时间格式变成 - 00:00
	function timeFormat(seconds) {
		var h = parseInt(seconds / 3600);
		var m = parseInt(parseInt(seconds % 3600) / 60) < 10 ? '0' + parseInt(parseInt(seconds % 3600) / 60) : parseInt(parseInt(seconds % 3600) / 60);
		var s = ((seconds - h * 3600) % 60) < 10 ? '0' + ((seconds - h * 3600) % 60) : ((seconds - h * 3600) % 60);
		if(h > 0) {
			return h + ':' + m + ":" + s;
		} else {
			return m + ":" + s;
		}

	};

	//拖动滚动条

	var timeDrag = false; //滚动开关
	$('.bottomControl').on('touchstart', function(e) {
		timeDrag = true;
		updatebar(e.targetTouches[0].pageX);
	});
	$(document).on('touchmove', function(e) {
		if(timeDrag) {
			updatebar(e.targetTouches[0].pageX);
		}
	});
	$(document).on('touchend', function(e) {
		if(timeDrag) {
			timeDrag = false;
			video.play();
			setTimeout(function() {
				$('.videoControl').removeClass('show');
			}, 3000);
			updatebar(e.changedTouches[0].pageX);
		}
	})
		
	//update Progress Bar control
	var updatebar = function(x) {
		var maxduration = video.duration; //Video duraiton
		var position = x - $('.progress').offset().left; //Click pos
		var percentage = 100 * (position / progressBar);
		console.log(percentage);

		//Check within range
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}

		//Update progress bar and video currenttime
		$('.timeBar').css('width', percentage + '%');
		$('.currentPlay').css('left', percentage + '%');
		video.currentTime = maxduration * percentage / 100;
	};

	//视频加载跟上进度时
	$('#video').on('canplay', function() {
		$('.videoloading').hide();
	});

	//video canplaythrough event
	var completeloaded = false;
	$('#video').on('canplaythrough', function() {
		completeloaded = true;
	});

	//播放完暂停
	$('#video').on('ended', function() {
		$('.btnPlay').removeClass('paused');
		video.currentTime = 0;
		video.pause();
	});

	//video seeking event
	$('#video').on('seeking', function() {
		//if video fully loaded, ignore loading screen
		if(!completeloaded) {
			$('.videoloading').show();
		}
	});

	//video seeked event
	$('#video').on('seeked', function() {});

	//视频加载中
	$('#video').on('waiting', function() {
		$('.videoloading').show();
	});
}