(function(){

  if( /(iyuedu\.qq\.com|yuedu\.reader\.qq\.com)/.test(location.href) ){
    // if the current page is formal
    if( !/z_debugger=true/.test(location.href) ){
      return;
    }
  }

	var body = document.querySelector('body');
	var square = document.createElement('div');
	var mask = document.createElement('div');

	square.style.cssText += 
    'position:fixed; right:0; top:0;'+
    'width:0.5rem; height:0.5rem;'+
    'background:black; opacity: 0.8; z-index: 99999;';
	mask.style.cssText += 
		'position:fixed; left:0; top:0;'+
    'box-sizing:border-box; width:100%; height:50%;'+
    'padding:20px; word-break:break-all; overflow:scroll; background:black; opacity:0.8; z-index:99999; color:white; font-size: 16px; display:none;';
	body.appendChild(square);
	body.appendChild(mask);

	var log = console.log.bind(console);
	console.log = function( arg ){
		log(arg);
		if( typeof arg === 'object' ){
			mask.innerHTML += '<p>'+JSON.stringify(arg)+'</p>';
		}else{
			mask.innerHTML += '<p>'+arg+'</p>';
		}
	}
  console.log('[debugger] Debugger initialized.')
	window.onerror = function(msg,uri,line){
		// console.log(arguments)
		mask.innerHTML += '<p style="color:red;">'+msg+'<br/>'+uri+'<br/>'+line+'</p>';
	}

	var btn_refresh = document.createElement('div');
  btn_refresh.style.cssText += 
  	'display: none;'+
    'position: fixed; left: 0; bottom: 0;'+
    'width: 200px; height: 50px;'+
    'background: orange; color: black; font-size: 16px; line-height: 50px; text-align: center;'+
    'z-index:9999;';
  btn_refresh.innerHTML = 'Refresh';
  btn_refresh.addEventListener('click',function(){
    location.href = location.href;
  })
  body.appendChild( btn_refresh );

  var btn_to_dev = document.createElement('div');
  btn_to_dev.style.cssText += 
    'display: none;'+
    'position: fixed; left: 200px; bottom: 0;'+
    'width: 200px; height: 50px;'+
    'background: #0f88eb; color: black; font-size: 16px; line-height: 50px; text-align: center;'+
    'z-index:9999;';
  btn_to_dev.innerHTML = 'DevMode';
  btn_to_dev.addEventListener('click',function(){
    location.href = location.href + (location.href.match(/\?/)?'&':'') + 'z_dev=true';
  })
  body.appendChild( btn_to_dev );

	square.addEventListener('click',function(){
		mask.style.display = '';
    btn_refresh.style.display = '';
    btn_to_dev.style.display = '';
	})
	mask.addEventListener('click',function(){
		mask.style.display = 'none';
    btn_refresh.style.display = 'none';
    btn_to_dev.style.display = 'none';
	})

})();