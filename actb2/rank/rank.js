var Index={};
//未登录
Index.noLogin=function(){
	$("#nologin").css("display","inline-block");
	$("#logined").hide();
}


Index.RANK_URL = "";
Index.RANK_LUCKY_URL = "";
function init() {
	Index.RANK_URL = server() + "pkgb2/initRank";
	Index.fillPage();
}
Index.fillPage = function() {
	$(".loadingTop").show();
	forceLog(param("act_f"));
	Local.reqaObj(Index.RANK_URL + "?act_f=" + param("act_f"), function(data) {
		if (data.isLogin) {
			$("#myAvor").attr("src", data.myavor);
			$("#myRank").text(data.rank==-1?"无":data.rank);
		} else {
			Index.noLogin();
		}
		var content = "";
		for ( var rank in data.rankList) {
			if (data.rank && data.rank - 1 == rank) {
				content += '<li class="cur">';
			} else {
				content += '<li>';
			}
			content += '<div class="topnum">' + data.rankList[rank].rank
					+ '</div>';
			if (rank < 10) {
				content += '<div class="userface"><img src="'
						+ (data.rankList[rank].avor||"images/dface.png")
						+ '"></div><div class="username">';
			} else {
				content += '<div class="username2">';
			}
			content += data.rankList[rank].name + '</div><div class="tdLd">'
					+ data.rankList[rank].score + '</div></li>';
		}
		$(".loadingTop").hide();
		$("#ranks").html(content);
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}