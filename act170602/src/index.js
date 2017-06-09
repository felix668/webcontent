import '../adr/js/rem.js';
import css from "../adr/public/css/index.less";
Vue.component( 'app',require('./app.vue') );
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});

