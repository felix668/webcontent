var pageObject = {};
pageObject.infourl = '';
pageObject.name = 'live';
pageObject.url = '';
pageObject.actorurl = '';
pageObject.imgUrl = "";
pageObject.href = "";
pageObject.lihref = "";
pageObject.data = {};
pageObject.listId = "";
pageObject.roomId = "";
pageObject.tid = "";

function init() {
	id('body').className = Local.iOS ? "iOS" : "";
	loadTpl('tpl/liveIndex0.html'); // 加载模板，这里是一个同步方法，不用考虑加载顺序不一致的问题
	pageObject.url = pageDomain() + "/actLiving/liveIndex.html";
	//	pageObject.infourl = server() + '/topic/detail?tid=' + pageObject.tid + '&itemid=' + pageObject.itemid + '&type=' + type;
		pageObject.infourl = server() + 'template/live/liveinfos';
		console.log(pageObject.infourl);
	
//	setParam("tf", "1");
	Local.reqaObj(pageObject.infourl, function(dataObj) {
		//  	pageObject.type = dataObj.topic.type;
		ih("module0", template("t0", dataObj));
		ih("module1", template("t1", dataObj));
//         ih("module1", '<div class="main"><img src="images/main656x656.png"><div class="living">直播中</div><div class="mask"></div><p class="lookNum">27.8万</p></div>');
 		ih("module2", template("t2", dataObj));
		var allvideos = dataObj.allvideos;
		lastNone();
		ovW();
		$('.btn_all').click(function() {
			var listId = $(this).attr("name");
			//直播列表页面
			(function goLiveList(listId) {
				if (Local.iOS){
					window.location.href=window.location.href.replace("liveIndex.html",'liveList.html')+"&listId=" + listId;
				}else{
					Local.openPage(pageDomain() + "/actLiving/liveList.html?listId=" + listId, false, "");
				}
			})(listId);
		});
		//点击请求后台返回观看次数数据
		$('.liveList ul li').click(function() {
			var roomid = $(this).attr("name");
			var lihref = $(this).attr("lihref");
			var pagename = $(this).parent().parent().prev().children(':first-child').attr("name");
			console.log(pagename);
			pageObject.requesturl = server() + 'template/live/watch?roomid=' + roomid;
			Local.reqaObj(pageObject.requesturl, function() {
			//直播页面
				(function goLive(lihref) {
//				Local.openPage(pageDomain() + "/actLiving/videoPlay.html?lihref=" + lihref, false, param('pos'));
				window.location.href=window.location.href.replace("liveIndex.html",'videoPlay.html')+"&lihref=" + lihref+"&pagename=" + pagename;
			})(lihref);
//			window.location.reload();
			}, [], function() {}, 1);
		})

	}, ['module0'], function() {
		ih('module0', '<div class="ds_head"><div class="blankLayout"> <span class="blankIcon"> <img src="images/blank1.png"></span><p class="t3 c103">网络不好,请检查网络设置</p><p class="t3 c301" onclick="javascript: window.location.reload();">重新加载</p></div></div>');
	}, 1); //此处强制刷新数据
};

//定义banner链接类型
function gotoInfos(href) {
	var bannertid = $(this).attr("name");
	if(Local.iOS) {
		window.location.href=window.location.href.replace("liveIndex.html",'liveList.html')+"&listId=" + listId;
	} else {
		window.location.href = "http://iyuedu.qq.com/common/common/topicV2.html?tid=" + href + '&tf=1';
	};
};

//window._tempshare = function(){
//	Local.showToast("!!!")
//}
//if( window.JSContent ){
//  JSContent.setWebTitlebarIcon(JSON.stringify([{
//      title: 'shareTopic',
//      callback: 'window._tempshare'
//  }]));
//}


//跳转到直播间
function goLiveroom(href) {
	window.location.href = href+'&z_hideIcon=true';
};

//列表页面样式
function lastNone() {
	$('.listSection').last().addClass('lastNone');
	var wh = $(window).height();
	var wl = $(window).width();
	$('video').css('height', (640 * wl / 360) + 'px');
};

//网页轮播图
function ovW() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});
	//轮播图只有1张不显示小蓝点
	if($(".swiper-slide").length <= 1) {
		$(".swiper-pagination").hide();
	}
	// banner图片按比例
	var ovW = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
	$('.swiper-slide img').css('height', (279 * ovW) / 720 + 'px');
};