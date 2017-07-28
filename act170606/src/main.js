import Vue from "vue"
import App from "./App.vue"
import "../js/set.js"
var vm = new Vue({
	el: "#app",
	render: h => h(App),
	created() {
		if (process.env.NODE_ENV === 'development') {
			require('../js/debug.js')
		}
	}
})