var Index={};
//未登录
Index.noLogin=function(){
	$("#nologin").css("display","inline-block");
	$("#logined").hide();
}
//按钮点击态
Index.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass("active");
	})
	$(obj).on("touchend",function(){
		$(this).removeClass("active");
	})
}
Index.btns(".changeBtn,.tipbtn,.disbtn,.changeBtn");
Index.maskOn = function() {
	$('.mask').css('display', '-webkit-box');
}
Index.maskOut = function() {
	$('.mask').hide();
}
//弹窗
$(".knowbtn,.closebtn,.tipbtn").on("tap",function(){
	$(this).parent().hide();
	Index.maskOut();
})
//加铃铛动效
Index.addbell=function(){
	$("#add").addClass("ani");
	setTimeout(function(){
		$("#add").removeClass("ani");
	},600);
}

Index.result = function(code,msg){
	$("#tiparea"+code).show();
	Index.maskOn();
}

Index.RANK_URL = "";
Index.RANK_LUCKY_URL = "";
Index.GET_MORE_URL = "";
function init() {
	Index.RANK_URL = server() + "pkgb2/initRank";
	Index.RANK_LUCKY_URL = server() + "pkgb2/todayLuckys";
	Index.GET_MORE_URL= server()+"buybell";
	Index.fillPage();
}
Index.fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(Index.RANK_URL + "?act_f=" + param("act_f"), function(data) {
		if (data.isLogin) {
			$("#myAvor").attr("src", data.myavor);
			$("#myName").text(data.mynick);
			$("#myRank").text(data.rank);
			$("#myLd").text(data.score);
		} else {
			Index.noLogin();
		}
		var content = "";
		for ( var rank in data.rankList) {
			if (data.rank && data.rank -1 == rank) {
				content += '<li class="cur">';
			} else {
				content += '<li>';
			}
			content += '<div class="topnum">' + data.rankList[rank].rank
					+ '</div><div class="userface"><img src="'
					+ data.rankList[rank].avor
					+ '"></div><div class="username">'
					+ data.rankList[rank].name + '</div><div class="tdLd">'
					+ data.rankList[rank].score + '</div></li>';
		}
		$("#ranks").html(content);
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
	Local.reqaObj(Index.RANK_LUCKY_URL + "?act_f=" + param("act_f"), function(
			data) {
		if (data.todayLuckys && data.todayLuckys.length > 0) {
			var content = "";
			for ( var i in data.todayLuckys) {
				content += '<span class="guser"><img src="'
						+ data.todayLuckys[i].avor + '">'
						+ data.todayLuckys[i].name + '</span>';
			}
			$("#todayLuckys").append(content);
			$(".goods").show();
		} else {
			$(".noP").show();
		}
		if (data.isLucky) {// 幸运用户
			if (data.wxLogin) {
				$("#goods").attr("onclick",
						"javascript:Index.result(4,'" + data.luckyDay + "')");
			} else {
				$("#goods").attr("onclick",
						"javascript:Index.result(3,'" + data.luckyDay + "')");
			}
		} else {
			$("#goods").attr("onclick", "javascript:Index.result(2)");
		}
	}, [], function() {
	}, 1);
}
//获取更多铃铛
Index.getMoreLD = function() {
	Local.reqaObj(Index.GET_MORE_URL + "?act_f=" + param("act_f"), function(
			data) {
		// 获取到抽奖内容，填写到刮刮卡里边
		if (data.isLogin) {
			if(Index.debug)
				alert(JSON.stringify(data));
			if (data.code == 0) {
				Local.showToast("已成功兑换20个铃铛");
				Index.addbell();
			} else if (data.code == -2) {// 铃铛不足
				Local.showToast("书币余额不足");
				Local.doCharge("act", true);
			} else {
				Local.showToast("出错啦，请稍后重试");
			}
		} else {
			Local.login();
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}