import '../rem.js';
//import '../debugger.js';
import '../config.js';
require('../common.scss');

Vue.component( 'app',require('./App.vue') );

var root = new Vue({
	el: '#root',
	template: '<app></app>'
})