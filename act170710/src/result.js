import Vue from "vue";
import "./js/set";
var vm=new Vue({
	el:"#app",
	created(){
		if(process.env.NODE_ENV === 'development'){
			require("./js/debug")
		}
	},
 	components: {
		app: require('./result')
	},
	template: '<app></app>'
});

