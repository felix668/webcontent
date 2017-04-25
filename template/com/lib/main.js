import './rem.js';
import './zeal.js';

window.addEventListener('DOMContentLoaded',function(){

	$('.btn').on('touchstart',function(){
		$('.btn-img').attr('src','img/btn_active.png');
	})

	$('.btn').on('touchend',function(){
		$('.btn-img').attr('src','img/btn.png');
		$('.mask').show();
	})

	$('.cancel').on('click',function(){
		$('.mask').hide();
	})

	console.log(N);

})


