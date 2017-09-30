import Vue from "vue"
import app from "./App"
import "../js/set"
new Vue({
	created() {
		console.log(process.env.NODE_ENV)
		if (process.env.NODE_ENV !== 'production') {
			require('../js/debug.js')
		}
	},
	render: h => h(app)
}).$mount("#app")