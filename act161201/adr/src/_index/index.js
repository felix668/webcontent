import '../rem.js';
import '../debug.js';
require('../common.scss');

Vue.component( 'app',require('./App.vue') );

var root = new Vue({
	el: '#root',
	template: '<app></app>'
})