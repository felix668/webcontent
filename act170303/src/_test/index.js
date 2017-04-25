import '../common/common.js';

import store from '../store/store.test.js';

var root = new Vue({
	el: '#root',
  store,
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})