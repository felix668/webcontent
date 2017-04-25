import '../common.js';

//import Vue from 'vue';

var root = new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})