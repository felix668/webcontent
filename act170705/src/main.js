import Vue from "vue"
import app from "./App.vue"
import "../js/set.js"
var vm = new Vue({
	created() {
		if (process.env.NODE_ENV === 'development') {
			require('../js/debug.js')
		}
	},
	render: h => h(app)
}).$mount("#app")