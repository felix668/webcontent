(function(){
	var body = document.querySelector('body');
	var square = document.createElement('div');
	var mask = document.createElement('div');

	square.style.cssText += 'position:fixed; left:0; top:0; width:0.2rem; height:0.2rem; background:black; opacity: 0.8;';
	mask.style.cssText += 
		'position:fixed; left:0; top:0; width:100%; height:50%; padding:20px; overflow:scroll; background:black; opacity:0.8; z-index:999; color:white; font-size: 16px; display:none;';
	body.appendChild(square);
	body.appendChild(mask);

	var log = console.log.bind(console);
	console.log = function( arg ){
		log(arg);
		if( typeof arg === 'object' ){
			mask.innerHTML += JSON.stringify(arg)+'<br/>';
		}else{
			mask.innerHTML += arg+'<br/>';
		}
	}
	window.onerror = function(msg){
		//console.log(arguments)
		mask.innerHTML += '<span style="color:red;">'+msg+arguments[1]+arguments[2]+'</span><br/>';
	}

	square.addEventListener('click',function(){
		mask.style.display = 'block';
	})
	mask.addEventListener('click',function(){
		mask.style.display = 'none';
	})
})();