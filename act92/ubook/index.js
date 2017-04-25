var Index = {};
Index.RecardKey = "a92_total";
Index.LastWin = "a92_last";
// 初始化
function init() {
	BasePage.init();
	// 适配
	var fSize = ($(document).width() / 320) * 100;
	$('html').css('fontSize', fSize + "px");
    //按钮特效
    Index.btns('.gBtn,.kbtn');
    //关闭弹窗
	$(".hide").on("tap",function(){
		Index.maskOut("mask");
	})
	lsr(Index.LastWin);//删除上次玩的记录
	//PV，UV
	forceLog(param("act_f"));
	Login.reqaObj(server() + "pkg10/init", function(data) {
		if (data.picked) {// 已领取过
			$(".record").text("已领取" + data.picked + "书券求饶金");
		} else {//
			if (lsg(Index.RecardKey)) {
				$("#recordN").text(lsg(Index.RecardKey) | 0);
			} else {
				$("#recordN").text("--");
				$(".record a").hide();
			}
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
    
}
Index.play = function() {
	forceLog(param("act_f"),"play");
	goWithParams("detail.html");
}
Index.pick = function() {
	// alert("领取");
	forceLog(param("act_f"),"pick1");
	Login.reqaObj(server()+"pkg10/pick?right="+(lsg(Index.RecardKey)|0), function(data) {
		if(data.code==1){//领取成功
			forceLog(param("act_f"),"picked");
			$("#bookt").text((lsg(Index.RecardKey)|0));
			Index.maskIn("mask", "sucsTake");
			$(".record").text("已领取" + (lsg(Index.RecardKey)|0) + "书券求饶金");
		}else if(data.code==2){//微信登陆
			Index.maskIn("mask", "qqLogin");
		}else if(data.code==-1){//尚未开通包月
			Index.maskIn("mask", "ktMonth");
		}else if(data.code==-2){//已领取过
			Index.maskIn("mask", "pickFail");
		}else if(data.code==-4){//请先登录~
			Login.login();
		}else if(data.code==-8){//活动已经结束
			Index.maskIn("mask", "pickFail");
		}else{
			JSToast.showToast("网络不畅，请稍后再试试");
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}


//弹窗相关
Index.maskIn = function(obj1, obj2) {
	$('.' + obj1).css('display', '-webkit-box');
	$('#' + obj2).show();
}
Index.maskOut = function(obj1) {
	setTimeout(function(){
		$("."+obj1).hide();
		$(".notice").hide();
		$("#"+obj2).hide();
	},320)
}
Index.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass('on');
	})
	$(obj).on("touchend",function(){
		$(this).removeClass('on');
	})
}