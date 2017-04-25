var blockPanel = require('./block-panel.vue');

Vue.component( 'block-panel',blockPanel );

var app = new Vue({
	el: 'body',
	data: {
		ios: /ios/.test( document.title )?true:false,

		loggedIn: false,

		maskShow: true

	},
	computed: {
		name: function(){
			return this.ios?'阅券':'书券';
		}
	},
	ready: function(){
		var self = this;
		this.getData();
		window.addEventListener('load',function(){
			window.scroll(0,0);
			self.maskShow = false;
		})
	},
	methods: {
		getData: function(){
			var self = this;
			Local.reqaObj( common.server()+`sum?act_f=${common.param('act_f')}&act_b=index`, function(data) {
				console.log(data)
				self.loggedIn = data.isLogin;
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}
	}
})