import Vue from "../../js/vue.min";
var vm=new Vue({
	el:"#root",
 	components: {
		app: require('../components/app.vue')
	},
	template: '<app></app>'
});

