$(function() {	
	//获取当前选中图书的编号
	function getbook(){
		return $("#booklist .cur").attr("datanum");
	}
	//点击当前书封
	$("#booklist .cur").on("tap",function() {
		console.log(getbook());
	});
	(function(){	
		var lists=$("#booklist>li");
		var len=lists.length;
		var fsize=parseFloat($("html").css("fontSize"));
		var dis=5.28*fsize;
		var first=4.34*fsize;
		var last=(len-2)*dis+first;	
		lists.on('touchstart',start);
		function start(e) {	
		    this.touchX=e.targetTouches[0].pageX;
		    this.touchY=e.targetTouches[0].pageY;
		    lists.on('touchmove',move);
		    lists.on('touchend',end); 
		}
		function move(e) {
			this.moveX=e.changedTouches[0].pageX-this.touchX;
			this.moveY=e.changedTouches[0].pageY-this.touchY;
			if(Math.abs(this.moveX)>Math.abs(this.moveY)){
				e.preventDefault();
			}
		}
		function end(e) {
		    this.change=e.changedTouches[0].pageX - this.touchX;
		    this.indx=$(this).index();
		    if(this.change > 20){
		        this.indx--;    
		        if(this.indx<1){  		
		    		$('#booklist').css("transform","translate3d("+-last+"px,0,0)");
		    		this.indx=len-2;
		    	}
		    }else if(this.change < -20){
		    	this.indx++;    
		    	if(this.indx==len-1){  		
		    		$('#booklist').css("transform","translate3d(0,0,0)");
		    		this.indx=1;
		    	}		                        	                      
		    } 
		    swiper(this.indx);
		}
		function swiper(indx){	
			lists.eq(indx).addClass("cur").siblings().removeClass("cur");
			var step=-(indx-1)*dis-first+"px";
			$('#booklist').animate({translate3d:""+step+",0,0"},600);
		}
	})();
	//验证qq
	$("#qqinfo").on("input",function(){
		testqq();
	})
	function testqq(){
		if(!$("#qqinfo")[0].checkValidity()){
			$("#qqinfo").attr("placeholder","请输入正确的QQ号");
			return;
		}
		return true;
	}
})
