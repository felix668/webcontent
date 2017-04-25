import 'soap-rem';

require('../common.less');
//require('./index.less');

Vue.component( 'results',require('./Results.vue') );

var app = new Vue({
	el: '#root',
	template: '<results></results>'
})