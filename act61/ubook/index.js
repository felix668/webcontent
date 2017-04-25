var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.PICK_URL = '';

function init() {
	BasePage.init();
	Index.URL = server() + 'sum';
	Index.INIT_URL = server() + 'pkg6/rank?lc=1';
	Index.REWARD_URL = server() + 'pkg6/reward';

	Index.fillPageWithTry(2, 500);

	$(".close").click(function() {
		$(".mask").hide();
	});
	$(".knowbtn").click(function() {
		$(".mask").hide();
	});

	$(".cl_sum").click(function() {
		Index.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
	});
}

Index.fillPageWithTry = function(times, milseconds) {
	// PV,UV
	Index.forceLog(param("act_f") || 30010);
	for (var t = 0; t < times; t++) {
		delay(milseconds * t, function() {
			Index.fillPage();
		});
	}
}

Index.fillPage = function() {
	Login.reqaObj(Index.INIT_URL + "&act_f=" + param("act_f"), function(data) {
		ih("dl", data.dl > 0 ? data.dl : 0);
		ih("hl", data.hl > 0 ? data.hl : 0);
		ih("ml", data.ml > 0 ? data.ml : 0);
		if (data.score>0)
			ih("myscore", data.score);
		if (data.rank>0)
			ih("myrank", data.rank);
		var html = '<tr><th>排名</th><th>昵称</th><th>战力值</th></tr>';
		for (var i = 0; i < data.rankList.length; i++) {
			if (data.rank == i + 1) {
				html += '<tr class="myrank"><td>' + data.rankList[i].rank
						+ '</td><td>' + data.rankList[i].name + '</td><td>'
						+ data.rankList[i].score + '</td></tr>';
			} else {
				html += '<tr><td>' + data.rankList[i].rank + '</td><td>'
						+ data.rankList[i].name + '</td><td>'
						+ data.rankList[i].score + '</td></tr>';
			}
		}
		console.log(html);
		ih("ranklist", html);
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}

Index.morePrize = function() {
	$("#prizes").show();
}

Index.toOpenVIP = function() {
	Login.reqaObj(Index.INIT_URL + "&act_f=" + param("act_f"), function(data) {
		ih("dl", data.dl > 0 ? data.dl : 0);
		ih("hl", data.hl > 0 ? data.hl : 0);
		ih("ml", data.ml > 0 ? data.ml : 0);
		
		if(data.dl > 0||data.hl>0||data.ml>0){
			$("#toOpen").show();
		}else{
			$("#notice h5").html("活动已结束~");
			$("#notice").show();
		}
		if (data.score>0)
			ih("myscore", data.score);
		if (data.rank>0)
			ih("myrank", data.rank);
		var html = '<tr><th>排名</th><th>昵称</th><th>战力值</th></tr>';
		for (var i = 0; i < data.rankList.length; i++) {
			if (data.rank == i + 1) {
				html += '<tr class="myrank"><td>' + data.rankList[i].rank
						+ '</td><td>' + data.rankList[i].name + '</td><td>'
						+ data.rankList[i].score + '</td></tr>';
			} else {
				html += '<tr><td>' + data.rankList[i].rank + '</td><td>'
						+ data.rankList[i].name + '</td><td>'
						+ data.rankList[i].score + '</td></tr>';
			}
		}
		ih("ranklist", html);
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}

Index.openVIP = function() {
	Login.checkAndGo(server() + "lottery/openVIPCP?home=" + getUrl());
}

Index.chongzhi = function() {
	Login.checkAndGo(server() + "lottery/chongzhiCP?currUrl=" + getUrl());
}

Index.jiayou = function(bid) {
	Index.forceLog(param("act_f"),"jiayou");
	$("#jiayou").attr("bid", bid);
	$("#jiayou").show();
}
var dic = {0:"200",1:"1176",2:"3776",3:"2万",4:"10万"}
Index.dojiayou = function(type) {
	$("#jiayou").hide();
	var bid = $("#jiayou").attr("bid");
	Login.reqaObj(Index.REWARD_URL + "?act_f=" + (param("act_f") || -110)
			+ "&act_b=jiayou&rwdType="+type+"&bid="+bid, function(data) {
		console.log(data);
		
		switch (data.code) {
		case 1:
			$("#suc h5").html("成功为大神加油！</br>战力值+"+dic[type]);
			$("#suc").show();
			Index.fillPage();
			break;
		case -1:
			$("#jiayoufail").show();
			break;
		case -2:
			$("#open").show();
			break;
		case -4:
			Login.login();
			break;
		case -8:
			$("#notice h5").html("活动已结束~");
			$("#notice").show();
			break;
		default:
			$("#notice h5").html(data.msg);
			$("#notice").show();
			break;
		}
	});
	
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+.html/)[0];
	Login.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			});
};