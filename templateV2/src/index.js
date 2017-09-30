import Vue from 'vue';
import app from "./app";
// import store from "../store/store";
import "./js/set";
var vm=new Vue({
	created(){
		if(process.env.NODE_ENV === 'development'){
			require("./js/debug")
		}
	},
	// store,
	render:h=>h(app)
}).$mount("#app");

