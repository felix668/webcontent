import Vue from 'vue';
import "./js/set";
import app from "./Share.vue";
const vw = new Vue({
	created() {
		if (process.env.NODE_ENV !== 'production') {
			require('./js/debug');
		}
	},
	render: h => h(app)
}).$mount("#app")
