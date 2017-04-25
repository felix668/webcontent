function init(){
	Local.reqaObj(server() + "pkg20151124/list", function(data) {
		if (data.isLogin) {
			document.getElementById("content").innerHTML = template('t1', data);
		} else {
			Local.login();
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}