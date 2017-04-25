var Env = {};
Env.test = function() {
	UA = navigator.userAgent
	return {
		ua : UA,
		plat : Native.iOS ? "ios" : "android",
		chat : !!UA.match(/MicroMessenger\/([\d\.]+)/) ? "wx" : !!UA
				.match(/(?:\bV1_AND_SQI?_|QQ\/)([\d\.]+)/) ? "qq" : "ot"
	}
}

Env.plat = function() {
	UA = navigator.userAgent;
	return {
		pt : /iPad|iPhone|iPod/.test(UA) ? "ios" : /Android/.test(UA) ? "adr"
				: "ubook",
		sv : /iPad|iPhone|iPod/.test(UA) ? "iosmain"
				: /Android/.test(UA) ? "andmain" : "ubook"
	};
}