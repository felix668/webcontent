function setfont(){
	var winw=$("#banner").width(),fSize=winw/720*100+"px";
	$("html").css("fontSize",fSize);
}
setfont();
var Index = {};
function init() {
	initpage();
	forceLog(param("act_f"));
	Index.u = 0;
	Index.pickSuc = false;
}
var bookarry = [], btnlist = $(".btn");
function initpage(param) {
	getnum();
	Local.reqaObj(server() + "pkg160502/init", function(obj) {
		// 处理初始化数据
		console.log("初始化", obj);
		Index.u = obj.u;
		initp(obj.isLogin, obj.code == -9, obj.pk);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//登录，过期，领取过
function initp(login,expire,picked) {
	// 是否已经选过书
	var books = localStorage.books;
	if (books) {
		bookarry = JSON.parse(books);
		for (var i = 0; i < bookarry.length; i++) {
			var cur = bookarry[i];
			$(btnlist[cur]).addClass("seled").text("取消选择");
		}
		$("#fixtip").show();
		$("#selnum").text(bookarry.length);
	}
	//已参加过活动
	if(picked){
		$("#fixtip").show();
		$("#fixtip").text("您已参与过活动");
	}
	//过期
	if(expire){
		over();
	}
	setTitleBar();
	FastClick.attach(document.body);
	//点击选书
	btnlist.on("click", function() {
		if(expire || picked || Index.pickSuc){
			return false;
		}
		selindex = $.inArray(this, btnlist, [ 0 ]);
		checkbook.call($(this));
		return false;
	})
	// 加入书架
	$("#fixtip").on("click", function() {
		if(picked || Index.pickSuc){
			return;
		}
		addshelf(login);
	})
}
//活动过期
function over(){
	$("body").addClass("over");
}
//数字填充
function mock(times, offset, length) {
	var d = new Date();
	d.setDate(offset);
	d.setHours(0);
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
	var numarray=mock(1,3,8).split("");
	for(var i=0;i<numarray.length;i++){
		var cur=numarray[i];
		$("#send").find("span").eq(i).text(cur);
	}
}
//选书
function checkbook() {
	var num = parseInt($("#selnum").text());
	if (this.hasClass("seled")) {
		this.removeClass("seled");
		this.text("选它");
		$("#selnum").text(num - 1);
		bookarry.splice(bookarry.indexOf(selindex), 1);
	} else if (num >= 10) {
		tips("您选择的书籍已大于10本", "最多只能选择10本书进行<br/>免费读哦");
	} else {
		this.addClass("seled");
		this.text("取消选择");
		$("#selnum").text(num + 1);
		bookarry.push(selindex);
	}
	parseInt($("#selnum").text()) > 0 ? $("#fixtip").show() : $("#fixtip").hide();
	if(bookarry.length>0){
		localStorage.books = JSON.stringify(bookarry);
	}else{
		localStorage.removeItem("books");
	}
}
//显示弹窗
function tips(txt1, txt2, txt3, id) {
	$(".mask").addClass("show");
	$("#tiparea strong").text(txt1);
	$("#tiparea p").html(txt2);
	if (txt3) {
		$("#tiparea a").text(txt3).attr("id", id);
	}
	if(id=="knowbtn" || id==undefined){
		$("#close").hide();
	}else{
		$("#close").show();
	}
}
//关闭弹窗
$("#tiparea a,#close").on("click", function() {
	$(".mask").removeClass("show");
})
//加入书架
function addshelf(login) {
	if (login) {
		tips("确认加入书架？", "确认后，<br/>选择免费读的书就不可更改了哦", "确认", "addbtn");
	} else {
		console.log("请登录");
		Local.login();
	}
}
// 确认加入书架
$("#addbtn").live("click", function() {
	Local.showProgress("加入书架中,请稍后刷新书架查看~");
	Local.reqaObj(server() + "pkg160502/pick?bks="+bookarry.join(","), function(obj) {
		// 处理初始化数据
		console.log("领取", obj);
		Local.cancelProgress();
		repeat(obj.code);
		Index.pickSuc = (obj.code == 1);//领取成功
		Index.pickSuc ? $("#fixtip").text("您已参与过活动"):void(0);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
		Local.cancelProgress();
	}, 1);
})
//-1：已经参与过活动，1：领取成功；其他提示稍后再试
function repeat(code) {
	switch (code) {
	case 1:
		tips("成功加入书架", "将免费读书的事告诉自己的朋友，<br/>和TA一起来读", "分享", "sharebtn");
		break;
	case -1:
		tips("您已参与过活动", "同一设备，同一QQ号，同一微信号<br/>只有一次参与活动的机会", "我知道啦","knowbtn");
		break;
	default:
		tips("系统繁忙", "请稍后再试", "我知道啦","knowbtn");
		break;
	}
}
// 分享
$("#sharebtn").live("click", function(){
	Index.toShare();
})

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
Index.toShare = function() {
	var shareObj = {
		url : front()
				+ "act160502/com/index.html"
				+ (Index.u ? "?u=" + Index.u : "")
				+ (Index.u && bookarry.length ? "&bks=" + bookarry.join(",")
						: ""),
		cover : front()+"act160502/adr/images/share.jpg",
		title : Index.u && bookarry.length ? "我在QQ阅读选了"+(bookarry.length%11)+"本书免费读" : "胡歌携手QQ阅读，海量原著免费送",
		desc : Index.u && bookarry.length ? "胡歌携手QQ阅读，海量原著免费送，仅限3天！" : "胡歌书单首次亮相，50本好书限时不限量免费下载！仅限3天！"
	}
	Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title,
			shareObj.desc, 1);
}