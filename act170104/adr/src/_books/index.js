import '../common.js';

var root = new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})

// if(module.hot) {
// 	module.hot.accept(function(err) {
// 		if(err) {
// 			console.error("Cannot apply hot update", err);
// 		}
// 	});
// }