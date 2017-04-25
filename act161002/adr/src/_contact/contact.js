import 'soap-rem';

require('../common.less');

Vue.component( 'contact',require('./Contact.vue') );

var app = new Vue({
	el: '#root',
	template: '<contact></contact>'
})