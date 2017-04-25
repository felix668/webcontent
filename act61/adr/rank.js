var Rank = {};
Rank.URL = '';
Rank.INIT_URL = '';
Rank.PICK_URL = '';

function init() {
	Rank.URL = server() + 'sum';
	Rank.INIT_URL = server() + 'pkg6/rank';
	Rank.forceLog(param("act_f") || 30010);
	Rank.fillPage();

	$(".close").click(function() {
		$(".mask").hide();
	});
	$(".knowbtn").click(function() {
		$(".mask").hide();
	});

	$(".cl_sum").click(function() {
		Rank.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
	});
}

Rank.fillPage = function() {
	Local.reqaObj(Rank.INIT_URL + "?act_f=" + param("act_f"), function(data) {
		if (data.score > 0)
			ih("myscore", data.score);
		if (data.rank > 0)
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

Rank.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Local.reqaObj(Rank.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
};