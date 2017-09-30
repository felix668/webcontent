import Vue from "./js/vue.min.js";
import app from "./App.vue";
import './js/zepto.min.js';
import "./js/set.js";
var vm = new Vue({
	created() {
		if (process.env.NODE_ENV === 'development') {
			require('./js/debug.js')
		}
	},
	render: h => h(app)
}).$mount("#app");
document.body.addEventListener('touchstart', function () {});  