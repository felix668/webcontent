import Vue from "vue"
import app from "./App"
import "./js/set"
new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug')
		}
	},
	render: h => h(app)
}).$mount("#app")