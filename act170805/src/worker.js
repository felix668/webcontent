import Vue from "vue"
import worker from "./worker.vue"
import "./js/set"
new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug')
		}
	},
	render: h => h(worker)
}).$mount("#app")