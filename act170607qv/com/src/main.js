import Vue from "vue";
import app from "./App.vue";
import "../js/set.js";
var vm = new Vue({
	render: h => h(app)
}).$mount("#app");