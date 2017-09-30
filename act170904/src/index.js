import Vue from "vue"
import app from "./App"
import "./js/set"
// import plugin from "./js/plugin"
// Vue.use(plugin)

let vw = new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug')
		}
	},
	render: h => h(app)
}).$mount("#app")