import Vue from "vue";
import app from "./voteexplain.vue";
import "./js/set.js";
var vm = new Vue({
	render: h => h(app)
}).$mount("#app");

