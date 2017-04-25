import '../js/rem.js';
Vue.component( 'app',require('../src/app.vue') );
var root = new Vue({
	el: '#root',
	template: '<app></app>'
});

