var pageObject = {};

pageObject.infourl = '';
pageObject.url = '';
pageObject.lihref = "";

function init() {
	// setParam("tf", 1);
	pageObject.url = pageDomain() + "/actLiving/videoPlay.html?lihref=" + param('lihref');
	var lihref = param('lihref');
	pageObject.infourl = 'https://ptwapmusic3.reader.qq.com/activity/template/live/liveinfos';
	$('#video').attr('src', lihref);
	videoControl();
}

function videoControl() {
	var wl = $(window).width();
	var wh = $(window).height();
	$('.video-wrap').css('width', wl + 'px');
	$('.video-wrap').css('height', wh + 'px');
	$('#video').css('width', wl + 'px');
//	$('#video').css('height', wh + 'px');
	var video = document.getElementById('video');
	//开始点击播放前假过度
	$('.startBtn,.startBtnMask,.videobtn0').click(function() {
		video.play();
		setTimeout(function() {
			$('.startBtn').addClass('hideing');
		}, 200);
		setTimeout(function() {
			$('.startBtn').hide();
			$('.loadingTop').addClass('hideing');
		}, 3000);
		setTimeout(function() {
			$('.loadingTop').hide();
		}, 5000);
	});
//	video.ontouchstart = function() { return false; }
	//视频控制
	$('#video,.videobtn').on('click', function() {
		$('.videoControl,.videobtn').show();
		if(video.paused) {
			video.play();
			$('.videoControl').hide();
		} else {
			video.pause();
			$('.videoControl').show();
		}
	});

	//获取视频总时长
	$('#video').on('loadedmetadata', function() {
		var duration = timeFormat(Math.round(this.duration));
		setTimeout(startBuffer, 150);
		$('.videoContainer').click(function() {
			video.play();
		})
	});
	//播放控制条
	var startBuffer = function() {
		var currentBuffer = video.buffered.end;
		var maxduration = video.duration;
		var perc = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width', perc + '%');

		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};

	//获取当前播放时长
	$('#video').on('timeupdate', function() {
		var currentTime = timeFormat(Math.round(video.currentTime));
		var duration = timeFormat(Math.round(video.duration));
		$('.current').text(currentTime);
		$('.duration').text(duration);
		var percentage = 100 * video.currentTime / video.duration;
		$('.timeBar').css('width', percentage + '%');
		$('.currentPlay').css('left', percentage + '%');
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
	//var touchStartX = 0;
	//var disX = 0;
	//$('.topControl').on('touchstart', function(ev) {
	//	timeDrag = true;
	//	ev.stopPropagation();
	//	touchStartX = ev.targetTouches[0].pageX;
	//	$(document).on('touchmove', function(ev) {
	//		var disX = ev.targetTouches[0].pageX - touchStartX;
	//		if(timeDrag) {
	//			updatebar(disX);
	//		}
	//	});
	//	$(document).on('touchend',function(ev){
	//	var offsetX = ev.changedTouches[0].pageX - touchStartX;
	//	timeDrag = false;
	//	updatebar(offsetX);
	//	ev.stopPropagation();
	//	$('.videoControl').hide();
	//})
	//})

	$('.topControl').on('touchstart', function(ev) {
		timeDrag = true;
		updatebar(ev.targetTouches[0].pageX);
	});
	$(document).on('touchmove', function(ev) {
		if(timeDrag) {
			updatebar(ev.targetTouches[0].pageX);
		}
	});
	$(document).on('touchend', function(ev) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(ev.targetTouches[0].pageX);
			$('.videoControl').hide();
		}
	})

	//update Progress Bar control
	var updatebar = function(x) {
		var progressBar = $('.progress').width();
		var maxduration = video.duration; //Video duraiton
		var position = x - 5; //Click pos
		console.log(position);
		console.log(progressBar);
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
		video.currentTime = maxduration * percentage / 100;
	};
	//播放完暂停
	$('#video').on('ended', function() {
		video.currentTime = 0;
		video.pause();
	});
}