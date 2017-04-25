(function (doc, win) {
    var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // console.log(clientWidth)
        clientWidth=clientWidth > 750 ? 750 : clientWidth;
        docEl.style.fontSize = (clientWidth / 7.5) + 'px';
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);