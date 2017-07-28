 document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    (function (doc, win) {
	    var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	    function recalc() {
	        var clientWidth = docEl.clientWidth;
	         //alert(docEl.clientHeight)
	        if (!clientWidth) return;
	        clientWidth=clientWidth > 750 ? 750 : clientWidth;
	        docEl.style.fontSize = (clientWidth / 7.5) + 'px';
	    };
	    if(!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);