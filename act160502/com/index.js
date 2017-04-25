function setfont(){
	var winw=$("#banner").width(),fSize=winw/720*100+"px";
	$("html").css("fontSize",fSize);
}
Index = {};
function init() {
	setfont();
	console.log("init", S, N);
	initpage();
	forceLog(160617, "share")
}
//书籍相关信息
var bookarry = [], booklist, pricearry = [ 12.99, 2, 9, 12.99, 1.9, 4.99, 2.99,
		7.99, 2.99, 6, 5, 5.99, 5, 3.99, 6, 9.99, 5.99, 1.99, 8, 9.99, 4.99,
		2.99, 9.99, 6, 18, 9, 6, 17.41, 4.99, 2.99, 3.99, 1.99, 3.99, 6, 6,
		3.99, 6, 3.99, 3.99, 6.99, 1.89, 15.2, 3.99, 3.99, 3.99, 9.99, 3.99,
		3.99, 2.34, 3.99];
//填充分享者模块
function shareenter(arry, nick, pic) {
	var len = arry.length;
	var str = "";
	if (len > 0) {
		for (var i = 0; i < arry.length; i++) {
			var cur = parseInt(arry[i]) >= 0 && parseInt(arry[i]) < 50 ? arry[i] : -1;
			if (cur < 0)
				continue;
			if (cur == 10) {
				str += "<li>" + $(booklist[cur]).html()
						+ "<p class='price'>免费<span>" + pricearry[cur]
						+ "元/章</span></p></li>";
			} else {
				str += "<li>" + $(booklist[cur]).html()
						+ "<p class='price'>免费<span>" + pricearry[cur]
						+ "元/本</span></p></li>";
			}
		}
		$("#scrollist").append(str);
		if (len > 3) {
			myscroll = new IScroll("#scrollbox", {
				scrollX : true,
				freeScroll : true,
				eventPassthrough : true,
				startX : -booklist.width() / 1.1
			});
		} else {
			$("#scrollist").css({
				right : 0,
				margin : "auto"
			});
		}
		if(nick && pic){
			$("#nick").text(nick);
			$("#headpic").attr("src", pic);
		}else{
			$("#sharer").html("<p>我在QQ阅读选了这些书<strong>免费读</strong></p>");
		}		
	}
}
//初始化页面
function initpage() {
	getnum();
	booklist = $(".wrap li");
	// 处理初始化数据
	if (param("u") && param("bks")) {
		reqa(server() + "api/user?type=4&u=" + param("u"), function(data) {
			var me = data.users[0];
			console.log("头像+昵称", me);
			shareenter(decodeURIComponent(param("bks")).split(","), me.name, me.avor);
		});
		reqa(server() + "andmain/pkg160502/init", function(data) {
			var expire = data.code == -9;
			Index.expire = expire;
			if (expire)
				over();
		});
	} else {
		$(".sharebox").hide();
	}
	var shareObj = {
			url : front()
			+ "act160502/com/index.html"
			+ (param("u") ? "?u=" + param("u") : "")
			+ (param("u") && param("bks") ? "&bks=" + param("bks")
					: ""),
			cover : front()+"act160502/com/images/share.jpg",
			title : param("u") && param("bks") && param("bks").split(",") ? "我在QQ阅读选了"+(param("bks").split(",").length%11)+"本书免费读" : "胡歌携手QQ阅读，海量原著免费送",
			desc : param("u") && param("bks") && param("bks").split(",") ? "胡歌携手QQ阅读，海量原著免费送，仅限3天！" : "胡歌书单首次亮相，50本好书限时不限量免费下载！仅限3天！"
	}
	S.share(shareObj, front()+"common");
	S.open(function(installed, plat) {
		initEvent(installed==true, Index.expire, installed==-1, installed==-2, plat);
	}, front()+"common");
}
var clicked = false;
//事件绑定
function initEvent(installed, expire, wb, br, plat) {
	$("#fixtip, .wrap li").on("tap", function() {
		if(clicked) return;
		clicked = true;
		(installed || br)
				&& !expire
				&& N.openPage(front() + "act160502/" + plat
						+ "/index.html?act_f=160532");
		(installed || br) && expire && N.openApp(front()+"common");
		!installed && !wb && !br && tips();
		wb && sharetips();
		br && delay(3000, tips);
		installed && (clicked=false);
	})
	// 关闭弹窗
	$("#loadbtn").on("touchend", function(e) {
		e.preventDefault();
		Index.downLoad();
		$(".mask").removeClass("show");
	})
	$("#close").on("touchend", function(e) {
		e.preventDefault();
		$(".mask").removeClass("show");
	})
}
// 下载
Index.downLoad = function() {
	N.downLoad(front()+"common");
}
// 活动过期
function over() {
	$(".overtip").show();
}
//数字填充
function mock(times, offset, length) {
	var d = new Date();
	d.setDate(offset);
	d.setHours(8);
	d.setMinutes(0);
	d.setSeconds(0);
	d.setMilliseconds(0);
	var re = parseInt((new Date() - d) / (100 * times)).toString();
	var ll = length - re.length;
	for (var i = 0; i < ll; i++)
		re = "0" + re;
	return re;
}
function getnum(){
	var numarray=mock(1,22,8).split("");
	for(var i=0;i<numarray.length;i++){
		var cur=numarray[i];
		$("#send").find("span").eq(i).text(cur);
	}
}
// 显示弹窗
function tips() {
	$("#mask").addClass("show");
	clicked = false;
}
// 显示分享提示
function sharetips() {
	$("#sharemask").show();
}
