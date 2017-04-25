var Index = {};
function init() {
	console.log("init...");
	Index.CheckInstall();
}
// 检查安装状态
Index.CheckInstall = function() {
	// 手q和微信中判断是否安装客户端
	Appinstalledcheck.checkDownloadApp(function(isAppInstalled) {
		if (isAppInstalled) {
			if (id("downbtn")) {
				id("downbtn").innerHTML = "立即打开";
			}
		}
	});
};
// 打开或者下载
Index.DownOrOpen = function() {
	window.nativechecker.doGoToApp();
}
//下载
Index.down = function(){
	window.nativechecker.doGotoDownload();
}

// readbook
Index.ReadBook = function(bid) {

}
// gotoDetail
Index.GotoDetail = function(bid) {
	window.nativechecker.doGoToBookDetail(bid);
}