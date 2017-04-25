document
		.write("<div style='\
					max-height: 8rem;\
					overflow:auto;\
					font-size: 0.26rem;\
					font-weight: normal;\
					border-right: 1px dotted gray;\
					border-bottom: 1px dotted gray;\
					padding:0.5rem;\
					margin:0.2rem;\
					background:#fff;\
					box-shadow: -0.1rem -0.1rem 0.1rem #888888;\
					border-radius:3px;'\
					id='div_debug_log'></div>");
var div_debug_log = document.getElementById("div_debug_log");
window.onerror = function() {

	/*
	 * console.log(typeof(arguments[0])); var info =
	 * arguments[0].constructor==Object ? JSON.stringify(arguments[0]) :
	 * arguments[0];
	 */
	div_debug_log.innerHTML += "<div style='zoom:1;overflow:hidden;border-bottom:1px solid gray;padding:0.2rem 0;'><span style='float:left;color:red;'>"
			+ arguments[0]
			+ "</span><span style='float:right;text-align:right;color:#666'>"
			+ arguments[1].substring(arguments[1].lastIndexOf("/") + 1)
			+ " : "
			+ arguments[2] + "</div>";
	/* return true; */
	return;
};

console.oldLog = console.log;
console.log = function(str) {
	console.oldLog(str);
	div_debug_log.innerHTML += "<div style='border-bottom:1px solid gray;padding:0.2rem 0;'>"
			+ str + "</div>";
}
/*
 * oldXMLHttpRequest = XMLHttpRequest; XMLHttpRequest = function() {
 * console.log(JSON.stringify(arguments)+"###");
 * JSON.stringify(oldXMLHttpRequest.apply(this, arguments)); }
 */
