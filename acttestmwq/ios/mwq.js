var Index={}
Index.u = 0;
function init(){
	console.log("init....");
	Index.fillPage();
}

//页面初始化
Index.fillPage = function() {
		Local.reqaObj(server() + "pkgtestmwq/myqq", function(data) {
            document.getElementById("qq").innerHTML=data.qq;
		}, [], function() {
         			Local.showToast("网络异常，请稍候重试");
         		}, 1);

};