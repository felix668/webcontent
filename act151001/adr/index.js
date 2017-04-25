var Index = {};
Index.SUM_URL = "";
Index.URL = "";
Index.RECIEVE_URL = "";
Index.act_f=151001;
function init() {
	Index.SUM_URL=server()+'sum';
	Index.RECIEVE_URL=server()+'act151001/recieve';
	Index.forceLog('view');
};


Index.forceLog = function(act_f, act_b) {
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Local.reqaObj(Index.SUM_URL + "?act_f=" + Index.act_f + "&act_b=" + act_by+"&rr="+new Date().getTime(),
			function() {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
};



Index.recieve=function(){
	Local.reqaObj(Index.RECIEVE_URL, function(data) {
		if(!data.isLogin){
			Local.login();
			return;
		}
		ih('tipContent',tipContent(data));
		addClass('tip','show');
	});
};

Index.closeTip=function(){
	removeClass('tip', 'show');
};

Index.disableRecieveBtn=function(){
	dh('btn1');
	dv('btn2');
};
