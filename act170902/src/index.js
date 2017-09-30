import Vue from "vue";
import app from "./App";
import "./js/set";
const vw = new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug');
		}
	},
	render: h => h(app)
}).$mount("#app")