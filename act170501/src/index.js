import '../adr/js/rem.js';
Vue.component( 'app',require('./app.vue') );
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});
// $('.thumbs-cotnainer').each(function(){
// 		$(this).swiper({
// 			speed:200,
// 			slidesPerView:'auto',
// 			calculateHeight: true
// 		})
// 	});

