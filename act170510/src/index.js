import Vue from 'vue';
import app from "./app.vue";
import "../js/set.js";
var vm=new Vue({
	created(){
		if(process.env.NODE_ENV === 'development'){
			require("../js/debug")
		}
	},
	render:h=>h(app)
}).$mount("#app");

