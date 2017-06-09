var pageObject = {};
pageObject.infourl = '';
pageObject.name = 'live';
pageObject.url = '';
pageObject.actorurl = '';
pageObject.title = "";
pageObject.data = {};
pageObject.listId = "";
pageObject.roomId = "";

function init() {
	loadTpl('tpl/liveList0.html'); // 加载模板，这里是一个同步方法，不用考虑加载顺序不一致的问题
	var listId = param('listId');
	pageObject.infourl =  server() + 'template/live/longlist?id=' + listId;
	Local.reqaObj(pageObject.infourl, function(dataObj) {
		ih("livelist", template("t2", dataObj));
		var pagename = $('.weCanTitle p').attr("name");
		console.log(pagename);
//		$(document).attr("title",'pagename');
		$("title").html(pagename); 
		$('.liveList ul li').click(function() {
			var roomid = $(this).attr("name");
			var lihref = $(this).attr("lihref");
			pageObject.requesturl = server() + 'template/live/watch?roomid=' + roomid;	
			Local.reqaObj(pageObject.requesturl, function() {
			//直播页面
			(function goLive(lihref) {
//				Local.openPage(pageDomain() + "/actLiving/videoPlay.html?lihref=" + lihref, false, param('pos'));
				window.location.href=window.location.href.replace("liveList.html",'videoPlay.html')+"&lihref=" + lihref+"&pagename=" + encodeURIComponent(pagename);
			})(lihref);
			}, [], function() {}, 1);
		})
		lastNone();
	}, ['livelist'], function() {
		ih('livelist', '<div class="ds_head"><div class="blankLayout"> <span class="blankIcon"> <img src="images/blank1.png"></span><p class="t3 c103">网络不好,请检查网络设置</p><p class="t3 c301" onclick="javascript: window.location.reload();">重新加载</p></div></div>');
	}, 1); //此处强制刷新数据
};

//跳转到直播间
function goLiveRoom() {
	reportPageEvent(pageObject.name + "_toFilmList", null);
	Local.goToLive(roomId);
}

function lastNone() {
	$('.listSection').last().addClass('lastNone');
}