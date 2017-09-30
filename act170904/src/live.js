import Vue from "vue"
import live from "./Live.vue"
import "./js/set"

let vw = new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug')
		}
	},
	render: h => h(live)
}).$mount("#app")