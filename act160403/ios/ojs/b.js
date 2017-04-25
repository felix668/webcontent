(function(window) {

	window.androidScheme = {
		android_downloadch : '10002412',
		android_downloadurl : "http://iyuedu.qq.com/android/common/down.html?ch=",

		packageName : "com.qq.reader",

		/**
		 * 获取安卓的下载地址
		 * 
		 * @returns {string}
		 */
		getandroidDownloadUrl : function() {
			console.log("======="+this);
			return this.android_downloadurl + this.android_downloadch;
		},

		delyToDownloadUrl : function(callback) {
			console.log(this,this.android_downloadch,this.getandroidDownloadUrl());
			callback();
			var clickedAt = +new Date;
			setTimeout(function() {
				if (+new Date - clickedAt < 2000) {
					console.log(this);
					window.location.href = this.getandroidDownloadUrl();
				}
			}, 1000);

		}
	};
}(this));