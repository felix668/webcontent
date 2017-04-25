function init(){
	mqq.QQVersion && mqq.data.getUserInfo(
            function (obj) {
            	setParam("timi",obj.uin);
            	setParam("skey",obj.skey);
            	alert("1"+JSON.stringify(_PARAMS));
            }
        );
	setParam("tf",1);
	alert(document.cookie);
	setParam("timi",ckg("uin").substr(1));
	Local.reqaObj(server() + "sum?act_f=" + param("act_f"), function(data) {
		// 处理初始化数据
		alert(JSON.stringify(data));
	}, [], function() {
	}, 1);
}