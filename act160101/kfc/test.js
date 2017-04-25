var Ev = {};
Ev.test = function() {
	UA = navigator.userAgent
	return {
		ua : UA,
		plat : Native.iOS ? "ios" : "android",
		chat : !!UA.match(/MicroMessenger\/([\d\.]+)/) ? "wx" : !!UA
				.match(/(?:\bV1_AND_SQI?_|QQ\/)([\d\.]+)/) ? "qq" : "ot"
	}
}

Ev.open = function(bid){
//	androidScheme.androidOpenDetail(bid);
	nativechecker.doGoToBookDetail(bid);
}