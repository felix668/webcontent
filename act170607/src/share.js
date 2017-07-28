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
		app: require('./share.vue')
	},
	template: '<app></app>'
});

