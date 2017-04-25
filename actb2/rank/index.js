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
Index.btns(".changeBtn,.tipbtn,.disbtn");
//打开弹窗
Index.maskOn = function(code) {
	$('.mask').css('display', '-webkit-box');
	$("#tiparea"+code).show();
	}

//关闭所有弹窗
Index.maskOut = function() {
	//setTimeout(function(){
		$(".tiparea").hide();
		$('.mask').hide();
	//},320);	
}
//关闭弹窗
$(".closebtn,.tipbtn").on("tap",function(ev){
	ev.preventDefault();
	setTimeout(function(){
		Index.maskOut();
	},320);
});

//弹框输入
Index.qqInput = function() {
	$("#qqInput").focus(function(){
		$("#tiparea4").addClass("tipMt");
		$("#qqInput").keyup(function(){
	$("#qqbtn").addClass("tipbtn");
	 if($.trim($(this).val()) == "") {    
        $("#qqInput").focus();
		 $("#qqbtn").removeClass("tipbtn");
	}
});
});
}
//加铃铛动效
Index.addbell=function(){
	$("#add").addClass("ani");
	$("#ldCount").text(parseInt($("#ldCount").text()) + 20);
	setTimeout(function(){
		$("#add").removeClass("ani");
	},600);
}

Index.result = function(code,msg){
	if(msg){
		$("#red").text(msg);
		$("#redwx").text(msg);
	}
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
	Index.qqInput();
}
Index.fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(Index.RANK_URL + "?lc=1&act_f=" + param("act_f"), function(data) {
		if (data.isLogin) {
			$("#myAvor").attr("src", data.myavor ? data.myavor: "images/dface.png");
			$("#myName").text(data.mynick);
			$("#myRank").text(data.rank==-1?"无":data.rank);
			$("#ldCount").text(data.score);
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
					+ (data.rankList[rank].avor ? data.rankList[rank].avor:"images/dface.png")
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
			$("#day").text(data.day);
			$("#todayLuckys").append(content);
			$(".noP").hide();
			$(".goods").show();
		} else {
			$(".goods").hide();
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
			if (data.isLogin)
				$("#goods").attr("onclick", "javascript:Index.result(2)");
			else
				$("#goods").attr("onclick", "javascript:Local.login()");
		}
	}, [], function() {
	}, 1);
}

Index.fillRank = function() {
	Local.reqaObj(Index.RANK_URL + "?lc=1&act_f=" + param("act_f"), function(data) {
		if (data.isLogin) {
			$("#myAvor").attr("src", data.myavor ? data.myavor: "images/dface.png");
			$("#myName").text(data.mynick);
			$("#myRank").text(data.rank==-1?"无":data.rank);
			$("#ldCount").text(data.score);
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
					+ (data.rankList[rank].avor ? data.rankList[rank].avor:"images/dface.png")
					+ '"></div><div class="username">'
					+ data.rankList[rank].name + '</div><div class="tdLd">'
					+ data.rankList[rank].score + '</div></li>';
		}
		$("#ranks").html(content);
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}

//获取更多铃铛
Index.getMoreLD = function() {
	forceLog(param("act_f"), "rank-trybuy");
	Local.reqaObj(Index.GET_MORE_URL + "?act_f=" + param("act_f"), function(
			data) {
		if (data.isLogin) {
			if (data.code == 0) {
				Local.showToast("已用500书币成功兑换20铃铛");
				Index.addbell();
				Index.fillRank();
				forceLog(param("act_f"), "rank-sucbuy");
			} else if (data.code == -2) {// 铃铛不足
				Index.result(1);
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
//记录qq
Index.recardQQ = function() {
	if ($("#qqInput").val()){
		forceLog(param("act_f"), "QQ-" + $("#qqInput").val());
		Local.showToast("提交成功~");
	}
}