var Address = {};
Address.URL = '';
Address.INIT_URL = '';
Address.PICK_URL = '';

function init() {
	Address.URL = server() + 'sum';
	Address.forceLog(param("act_f") || 30010);

	$(".close").click(function() {
		$(".mask").hide();
	});
	$(".knowbtn").click(function() {
		$(".mask").hide();
	});

	$(".cl_sum").click(function() {
		Address.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
	});
}

Address.addAdress = function() {
	Local.reqaObj(Address.URL + "?act_b=" + $(".bgqq").val() + "--"
			+ $(".bgtel").val() + "--" + $("#adress").val() + "&act_f=99999",
			function(data) {
				console.log(data);
				if(data.isLogin){
					$("#notice").show();
				}else{
					JSToast.showToast("请重新登陆~");
				}
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
}

Address.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Local.reqaObj(Address.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
};