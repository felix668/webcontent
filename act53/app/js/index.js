var Index = {};
Index.URL = '';

Index.init = function() {
	Index.URL = 'http://event.book.qq.com/andmain/lottery/index';
	Index.forceLog(33333);
};

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	reqa(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by, function() {
	});
};

function reqa(url, callback, errcallback) {
	var tt = (new Date().getTime() + '').substring(9);
	url += url.indexOf('?') != -1 ? ('&tt=' + tt) : ('?tt=' + tt);
	var areq = new XMLHttpRequest();
	areq.onload = function() {
		callback(JSON.parse(areq.responseText));
	};
	areq.onerror = function() {
		if (!nl(errcallback)) {
			callback(errcallback);
		}
	};
	areq.open('GET', url, true);
	areq.send();
}

function toURL() {
	Index.forceLog(33334);
	window.location.href = "tmast://appdetails?pname=com.qq.reader";
}