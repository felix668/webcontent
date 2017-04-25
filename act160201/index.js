function init() {
	console.log("init......");
	forceLog(123);
}
requirejs([ "js/env" ], function(env) {
	alert(navigator.userAgent);
	if (Env.plat == "adr") {
		requirejs([ 'js/adr/local', 'js/adr/jsbridge', 'js/adr/abook',
				'js/adr/common' ]);
		$("title").text("ADR");
		$("#button3").on("click", function() {
			Local.doCharge("act");
		});
	} else if (Env.plat == "ios") {
		requirejs([ 'js/adr/local', 'js/adr/jsbridge', 'js/adr/abook',
				'js/adr/common' ]);
		$("title").text("IOS");
		$("#button3").on("click", function() {
			Local.openrecharge();
		});
	} else {
		requirejs([ 'js/ubook/login', 'js/ubook/zbook', 'js/ubook/cfoot' ]);
		$("title").text("UBOOK");
		$("#button3").on("click", function() {
			alert("触屏~");
		});
	}
});