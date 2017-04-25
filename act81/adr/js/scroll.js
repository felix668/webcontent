$(function(){
	var indx=0,curPos,touchStartX,touchStartY;
	var wid=$('#piclist>li').width();
	var len=$('#piclist>li').length-1;
	$('#picbox').on('touchstart',function(ev){
        touchStartX=ev.targetTouches[0].pageX; 
        touchStartY=ev.targetTouches[0].pageY;
        $('#picbox').on('touchmove',function(ev){
			var disX=ev.targetTouches[0].pageX - touchStartX;
        	var disY=ev.targetTouches[0].pageY - touchStartY;
        	if(Math.abs(disX)>Math.abs(disY)){
        		ev.preventDefault();
        	}          
        })
        $('#picbox').on('touchend',function(ev){  
            var offsetX=ev.changedTouches[0].pageX - touchStartX;
            if(offsetX > 30){
               indx--;	
				if(indx<=0){
					indx=0;
				}  
            }else if(offsetX <- 30){
                indx++;	
				if(indx>=len){
					indx=len;
				}
            }
            scroll();
            $('#picbox').off('touchmove touchend');
        })	
	})
	function scroll(){
		$('#num>li').eq(indx).addClass('cur').siblings().removeClass('cur');
		$('#piclist').css('-webkit-transform','translateX('+-wid*indx+'px)');
	}
})