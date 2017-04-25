var $html = document.querySelector('html');
var $body = document.querySelector('body');
var $screen = document.createElement('div');

$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
$body.insertBefore($screen,$body.firstChild);

var rem = {
  isSet: false,
  designWidth: 750,
  val: null,
  h: null,

  init: function(designWidth){
    rem.set( designWidth );
    window.addEventListener( 'resize',rem.set );
  },
  set: function(){
    $screen.style.display = 'block';
    var w = Number( document.defaultView.getComputedStyle( $screen ).width.replace(/px/,'') );
    var h = Number( document.defaultView.getComputedStyle( $screen ).height.replace(/px/,'') );
    $screen.style.display = 'none';
    $html.style.fontSize = 100*w/rem.designWidth+'px';
    rem.val = 100*w/750;
    rem.h = h;
    //document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug( 'rem: Rem reset. Size of the viewport is '+w+'*'+h+'.' );
    rem.isSet = true;
    var $rem_height = document.querySelectorAll('.rem_height');
    [].forEach.call($rem_height,(a)=>{
      a.style.height = h+'px';
    })
  }
}

document.addEventListener('DOMContentLoaded',function(){
  
  if( !rem.isSet ){
    rem.init(750);
  }

})

window.rem = rem;