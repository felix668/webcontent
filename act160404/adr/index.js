var Index = {};
var winW = document.documentElement.clientWidth || document.body.clientWidth, winH = document.documentElement.clientHeight
		|| document.body.clientHeight;
$(".mask").css({
	'width' : winW,
	'height' : winH
});
function init() {
	if (pageName == "xyw") {
		Index.author = "辛夷坞";
	} else if (pageName == "th") {
		Index.author = "桐华";
	} else {
		Index.author = "周德东";
	}
	Index.fillPage();
	forceLog(param("act_f"), "app");
}

// 页面初始化
Index.fillPage = function() {
	Local.reqaObj(server() + "pkg160404/init?team=" + param("team"), function(
			obj) {
		// 处理初始化数据
		console.log("组队详情", obj);
		initpage(obj);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
// 页面初始化
function initpage(data) {
	if (data.code == -9) {// 活动结束
		Index.activityEnd(1);
	} else {
		Index.activity(data);
	}
}
// 页面初始化
Index.activity = function(data) {
	if(data.isLogin){
		$("#app a").attr("href", "javascript:Index.toShare(" + data.u + ");");
	}else{
		$("#app a").attr("href", "javascript:Local.login();");
	}
	$("#activityend").hide();
	$("#app").show();
	$("#noapp").hide();
};
// 活动结束
Index.activityEnd = function(code) {
	$("#app").hide();
	$("#noapp").hide();
	$("#activityend").show();
	$("#more_activity").hide();
};

Index.toShare = function(team) {
	console.log("分享-组队", team, param("team"));
	var shareObj = {
		url : front() + "com/" + pageName + ".html?team=" + team,
		cover : front() + "com/images/" + pageName + ".jpg",
		title : "有人@你，来免费领取作家" + Index.author + "推荐的书",
		intro : "赶快加入我的小队，一起免费看书"
	};
	Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title,
			shareObj.intro, 1);
	forceLog(param("act_f"), "share");
};