var Index = {};
var winW = document.documentElement.clientWidth || document.body.clientWidth, winH = document.documentElement.clientHeight
		|| document.body.clientHeight;
$(".mask").css({
	'width' : winW,
	'height' : winH
});
function init() {
	Index.fillPage();
	forceLog(param("act_f"));
}
// TODO 页面初始化1464710399000
Index.fillPage = function() {
	if (new Date().getTime() > 1464710399000) {
		$('.mask').css('display', '-webkit-box');
	}
	NATIVE.open(function(data){
		alert(data);
	},true);
//	setTitleBar();
}

// 青春派：uniteqqreader://nativepage/comment/detail?bid=2&commentid=788abb11d416ffe0ac2d9643994fd1&ctype=4
// 古言风：uniteqqreader://nativepage/comment/detail?bid=2&commentid=62ff80b0ba24ffe0a43f6164435347&ctype=4
// 神脑洞：uniteqqreader://nativepage/comment/detail?bid=2&commentid=398a763e8714ffe0a5023303845e50&ctype=4
// 故事接龙：uniteqqreader://nativepage/comment/detail?bid=2&commentid=65ff80b0ba19ffe0a542598394554a&ctype=4
Index.write = function(type) {
	if(type==1){
		var bids = [695096,753604];
		JSAddToShelf.addBooks(json(bids));
	}
	switch (type) {
	case 1:
		window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=788abb11d416ffe0ac2d9643994fd1&ctype=4";
		break;
	case 2:
		window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=62ff80b0ba24ffe0a43f6164435347&ctype=4";
		break;
	case 3:
		window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=398a763e8714ffe0a5023303845e50&ctype=4";
		break;
	case 4:
		window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=65ff80b0ba19ffe0a542598394554a&ctype=4";
		break;

	default:
		break;
	}
	forceLog(param("act_f"), type);
}


/**
 * 设置titlebar上面的按钮
 */
setTitleBar = function () {
    var ps = [];
    ps.push({title: 'shareTopic', callback: 'Index.toShare'});
    try {
        JSContent.setWebTitlebarIcon(json(ps));
    } catch (e) {
    }
};

Index.toShare = function(team) {
	var shareObj = {
		url : "http://solomotest4.3g.qq.com/book_res/event/act160501/adr/index.html?act_f=160501",
		cover : "http://solomotest4.3g.qq.com/book_res/event/act160501/adr/images/shennaodong.png",
		title : "推荐的书",
		intro : "赶快加入我的小队，一起免费看书"
	};
	Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title,
			shareObj.intro, 1);
	forceLog(param("act_f"), "share");
};