import '../js/rem.js';
Vue.component( 'app',require('../src/Contact.vue') );
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
});
