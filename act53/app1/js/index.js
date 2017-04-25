var Index = {};
Index.URL = '';

Index.init = function() {
	Index.URL = 'http://event.book.qq.com/andmain/lottery/index';
	Index.forceLog(33333);
	Index.fillPage();
	setInterval(Index.fillPage, 100*13);
};

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+.html/)[0];
	reqa(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by, function() {
	});
};

Index.fillPage = function() {
	$("#join").html(ss(1));
}

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

function toURL(url) {
	Index.forceLog(33334);
	window.location.href = url;
}

function ss(times) {
	var d = new Date();
	d.setDate(28);
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	d.setMilliseconds(0);
	var re = parseInt((new Date() - d) / (100 * times));
	return re;
}