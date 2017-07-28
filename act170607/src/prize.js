import Vue from "./js/vue.min";
import "./js/set.js";
var vm=new Vue({
	el:"#root",
	created(){
		if(process.env.NODE_ENV === 'development'){
			require("./js/debug")
		}
	},
 	components: {
		app: require('./prize.vue')
	},
	template: '<app></app>'
});

