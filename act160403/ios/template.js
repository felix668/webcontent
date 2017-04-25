var BookDetail = {};
BookDetail.URL_1 = "";
BookDetail.data = "";
BookDetail.qq = "";
BookDetail.bid = "";
BookDetail.title = "";
BookDetail.hasTxt = "";
var pageObject = BookDetail;
function init() {
	loadTpl("tpl/bookdetailshare.html");
	setParam("tf", 1);
	BookDetail.URL_1 = server() + "/bookDetail/queryIntro";
	BookDetail.bid = param("bid");
	if (!nl(param("dch"))) {
		androidScheme.android_downloadch = param("dch")
	}
	id("downbtn").onclick = function(b) {
		var a = document.getElementById("downbtn");
		a.className = a.className + " active";
		setTimeout(function() {
			a.className = a.className.replace(" active", "");
			window.nativechecker.doGoToBookDetail(BookDetail.bid)
		}, 100)
	};
	BookDetail.showIntro()
}
BookDetail.showIntro = function() {
	var a = BookDetail.URL_1 + "?bid=" + param("bid");
	if (!nl(param("alg"))) {
		a = a + "&alg=" + param("alg")
	}
	if (!nl(param("data_type"))) {
		a = a + "&data_type=" + param("data_type")
	}
	if (!nl(param("fromBid"))) {
		a = a + "&fromBid=" + param("fromBid")
	}
	Local.reqaObj(a, function(d) {
		ih("loading", "");
		var c = template("t1", d);
		window.document.title = d.book.title;
		BookDetail.title = d.book.title;
		BookDetail.cover = d.book.cover;
		BookDetail.intro = d.book.intro;
		BookDetail.hasTxt = d.hasTxt;
		ih("book", c);
		var b = template("t2", d);
		ih("intro", b);
		BookDetail.url = pageDomain() + "/bookDetailShare.html?tf=1&bid="
				+ param("bid");
		try {
			mqq.data.setShareInfo({
				share_url : BookDetail.url,
				title : BookDetail.title,
				desc : BookDetail.intro,
				image_url : BookDetail.cover
			})
		} catch (f) {
		}
		try {
			WX.share(BookDetail)
		} catch (f) {
		}
		iha("loading", template("maskarea", {}));
		Appinstalledcheck.checkDownloadApp(function(e) {
			if (e) {
				if (id("downbtn")) {
					id("downbtn").innerHTML = "打开";
					id("downbtn").className = "openbtn"
				}
			}
		})
	}, [ "loading" ], function() {
	}, 1)
};
BookDetail.goWapRead = function() {
	if (nl(BookDetail.hasTxt) || BookDetail.hasTxt != "1") {
		window.nativechecker.doGoToBookDetail(BookDetail.bid)
	} else {
		window.nativechecker.doGoToReadPage(BookDetail.bid)
	}
};
BookDetail.addActive = function(b) {
	var a = document.getElementById(b);
	a.className = a.className + " active";
	setTimeout(function() {
		a.className = "btn";
		BookDetail.goWapRead()
	}, 100)
};
BookDetail.showOthers = function() {
	Local.reqaObj(BookDetail.URL_2 + "?bid=" + param("bid"), function(a) {
		BookDetail.getAd();
		ZBook.bindtouchall()
	})
};
BookDetail.makestar = function(d) {
	var a = d["7"] / 100;
	var b = d["7"] / 100 + "分";
	var e = "";
	var c = 0;
	while (c < 5) {
		if (c < a) {
			e += "<em></em>"
		} else {
			e += '<em class="star"></em>'
		}
		c++
	}
	e += '<span id="markmsg">' + b + "</span>";
	ih("markstar", e)
};
BookDetail.openDir = function() {
	Local.openDir(BookDetail.data)
};
BookDetail.clickRelBook = function(a, b) {
	Local.goBookDetail(a, 898, b, 11, param("bid"))
};
BookDetail.reportlog = function(a) {
	var b;
	if (a == 0) {
		b = BookDetail.URL_READONLINE_LOG
	} else {
		if (a == 1) {
			b = BookDetail.URL_DOWNLOAD_LOG
		} else {
			if (a == 2) {
				b = BookDetail.URL_ADDTOSHELF_LOG
			} else {
				return
			}
		}
	}
	b = b + "?bid=" + param("bid") + "&alg=" + (nlg(param("alg"), "0"))
			+ "&data_type=" + (nlg(param("data_type"), "-1")) + "&fromBid="
			+ (nlg(param("fromBid"), "-1"));
	Local.reqaObj(b, function(c) {
	})
};
function goActionCode1002(d, c) {
	var b = !nl(param("origin")) ? 0 : param("origin");
	c = c + "?bid=" + BookDetail.bid;
	var a = {};
	a.pagecode = "1002";
	a.url = c;
	a.bid = BookDetail.bid;
	a.tabindex = d;
	a.title = BookDetail.title;
	Local.openPageEx(a)
}
function gomulu() {
	BookDetail.openDir()
}
function goreward() {
	goActionCode1002(0, "reward.html")
}
function goRticket() {
	goActionCode1002(1, "rticket.html")
}
function goMonthTicket() {
	goActionCode1002(2, "monthTicket.html")
}
function gofans() {
	goActionCode1002(3, "fans.html")
}
function goComment() {
	var a = !nl(param("origin")) ? 0 : param("origin");
	Local.openPage("comment.html?bid=" + BookDetail.bid, a)
}
closemask = function() {
	dh("maskdiv")
};