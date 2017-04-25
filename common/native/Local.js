!function(a, b) {
	var d = b(this[a] = this[a] || {});
	"function" == typeof define && (define.amd || define.cmd) ? define(d)
			: "object" == typeof module && (module.exports = d)
}('_Local', function(local) {
	// 与终端本地js调用相关的都放在这里,加好注释

	// 初始化
	local.init = function() {
	},
	// 页面跳转
	local.go = function() {
	},
	// 充值
	local.doCharge = function(from, isLogin) {
	},
	// 登录
	local.login = function(reload_url) {

	},
	// 端内弹出提示
	local.showToast = function(msg) {
	},
	// 分享
	local.shareTopic = function(topicUrl, imgUrl, title, intro, tid) {
	},
	// 自定义方法
	local.privated = function() {
		console.log("Lc")
	}
	return local;
})