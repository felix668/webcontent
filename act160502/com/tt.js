Index = {};
function initSNS() {
	$($("li")[0]).html("INIT");

	try {
		console.log("init", S, N);
//		var shareObj = {
//			url : "http://solomotest4.3g.qq.com/book_res/event/act160502/com/index.html",
//			cover : "http://solomotest4.3g.qq.com/book_res/event/act160502/com/images/share.jpg",
//			title : "胡歌 携手QQ阅读",
//			desc : "海量好书免费送"
//		}
		var shareObj = {
				url : "https://ptsolomo.reader.qq.com/book_res/event/act160502/com/index.html",
				cover : "https://ptsolomo.reader.qq.com/book_res/event/act160502/com/images/share.jpg",
				title : "胡歌 携手QQ阅读",
				desc : "海量好书免费送"
			}

		var toUrl = location.href.match(/p=.+&/);

		
		if (toUrl) {
			toUrl = toUrl[0];
			toUrl = toUrl.substr(2);
			toUrl = toUrl.substr(0, toUrl.length - 1);
		}

		S.share(shareObj);

		S.open(function(installed, plat) {

			
			//$($("li")[0]).html(installed+"~~~"+plat+"~~"+env.ua);
			alert(installed+"~~~"+plat);
			initEvent(installed == true, installed == -1, installed == -2, plat, toUrl);
		});

	} catch (e) {
		$($("li")[0]).html(e);
	}
}

function initEvent(installed, wb, br, plat, toUrl) {

	$("li").on("tap", function() {
		alert($(this).text()+(toUrl ? "===" + toUrl : ""));
	});
	$($("li")[0]).on("tap", function() {
		(installed || br) && N.openApp();
		!installed && !wb && !br && tips();
		wb && sharetips();
		br && delay(3000, tips);
	});
	$($("li")[1])
			.on(
					"tap",
					function() {
						(installed || br)
								&& !toUrl && N.openPage("http://solomotest4.3g.qq.com/book_res/event/act160502/"
												+ plat
												+ "/index.html?act_f=160532");
						(installed || br)
						&& toUrl && N
								.openPage(toUrl);
						!installed && !wb && !br && tips();
						wb && sharetips();
						br && delay(3000, tips);
					});
	$($("li")[2]).on("tap", function() {
		(installed || br) && N.toBookDetail(739542);
		!installed && !wb && !br && tips();
		wb && sharetips();
		br && delay(3000, tips);
	});

	$($("li")[3]).on("tap", function() {
		(installed || br) && N.toReadBook(739542);
		!installed && !wb && !br && tips();
		wb && sharetips();
		br && delay(3000, tips);
	});
	$($("li")[4]).on("tap", function() {
		(installed || br) && (window.location.href=toUrl);
		!installed && !wb && !br && tips();
		wb && sharetips();
		br && delay(3000, tips);
	});

}

function tips() {
	alert("引导下载~");
}
function sharetips() {
	alert("微博引导下载~");
}


//延迟指定的毫秒数后，执行回调函数。
function delay(millis, callback) {
  setTimeout(callback, millis);
}