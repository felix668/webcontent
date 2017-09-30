import Vue from "vue";
import app from "./Prize.vue";
import "./js/set";
var vm=new Vue({
	created(){
		if(process.env.NODE_ENV === 'development'){
			require("./js/debug")
		}
	},
 	render: h => h(app)
}).$mount("#app");