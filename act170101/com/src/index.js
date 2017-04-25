import '../js/rem.js';
Vue.component( 'app',require('../src/app.vue') );
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});
	$('.thumbs-cotnainer').each(function(){
		$(this).swiper({
			speed:200,
			slidesPerView:'auto',
			calculateHeight: true
		})
	});
	$('.pp-cotnainer').each(function(){
		$(this).swiper({
			speed:300,
			slidesPerView:'auto',
			calculateHeight: true
		})
	});

