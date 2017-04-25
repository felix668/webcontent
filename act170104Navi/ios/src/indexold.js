import '../js/rem.js';
Vue.component( 'app',require('../src/appold.vue') );
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});
