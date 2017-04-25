var Index = {};
Index.URL = '';
Index.FEEDBACK = '';

function init() {
	Index.URL = server() + 'lottery/index';
	Index.FEEDBACK = server() + 'feedback';
	Index.forceLog(param("act_f") || 30010);
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
			}, 1);
};

Index.feedback = function() {
	var content = trim(id("content").value);
	if (content.length == 0) {
		Index.showTips("提交失败,反馈信息不能为空");
		return;
	}
	Local.postObj(Index.FEEDBACK, ("content=" + content + "&" + "qq="
			+ id("qq").value + "&" + "mobile=" + id("mobile").value), function(
			data) {
		Index.showTips("提交成功,谢谢你的反馈意见");
	}, [], function() {
	}, 1);
};

Index.showTips = function(result, tip, button, clk) {
	alert(result);
};
