var Game={
	tsecond:7,//游戏时间
	timer:null,//计时器
	isOn:true,//游戏是否结束
	num:0,//游戏分数
	headpic:["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png"]//结果头像
}
var img1=new Image();
img1.src="images/boss2.png";
$(function(){
	//适配
	var fSize=($(document).width() / 320) * 100;
    $('html').css('fontSize',fSize+"px");    
    //气球
    var ballsC=['#ffae00','#a64339','#fd7c59','#9a6360','#fedc60','#f57783','#edc0a9','#fe7d57','#3f99a8','#e2a48f','#584a59','#94b6b5'];
    var ballsI=["images/ball.png","images/ball2.png"]; 
    var newballs='';
	for(var j=0;j<34;j++){
		newballs+='<div class="balls"></div>';		
	}
	$('#balloons').append(newballs); 
	for(var j=0;j<34;j++){
		var num1=parseInt(Math.random()*11);
		var num3=parseInt(Math.random()*2);
		var num2=Math.random()*6;
		$('.balls').eq(j).css('background',ballsC[num1]+' url('+ballsI[num3] +') 0 0 no-repeat');
		$('.balls').eq(j).css('backgroundSize','0.32rem auto');
		$('.balls').eq(j).css('-webkit-animation-delay',num2+'s');	
	}
	$(document).on('touchmove',function(ev){
        ev.preventDefault();
    });
    $('.game').css('height',$(window).height());
    var cleft;
    for(var i=0;i<$('.coupon').length;i++){
		cleft=2.55*Math.random()+'rem';
		$('.coupon').eq(i).css('left',cleft);
	}
})
//动画效果
var coup6=0;
function aniEnd(){
	$('.coupon').eq(coup6).addClass('coupon1');
	$('.star').eq(coup6).addClass('star1');
	$('.add').eq(coup6).addClass('add1');
	coup6+=1;
	if(coup6>=11){
		coup6=0;
	}    
	$('.coupon1').on('webkitAnimationEnd',function(){
    	$(this).removeClass('coupon1');
	})
	$('.star1').on('webkitAnimationEnd',function(){
    	$(this).removeClass('star1');
	})
	$('.add1').on('webkitAnimationEnd',function(){
    	$(this).removeClass('add1');
	})	
}
//游戏倒计时
Game.countdown=function(){
	var tW=$('.probar').width(),dW;
    Game.timer=setInterval(function(){
    	//进度条和时间
        Game.tsecond=(Game.tsecond-0.1).toFixed(1);
        $('#timetxt').text(Game.tsecond+'”');
        dW=parseInt((Game.tsecond/7)*tW);
        $('#progress').css('width',dW+'px');
        //游戏结束
        if(Game.tsecond<=0){
        	 Game.over(Game.num);       
        }
    },100)      
}
//游戏开始
Game.play=function(){
	Game.tsecond=7;
	Game.num=0;
	Game.isOn=true;
	$('#timetxt').text(Game.tsecond+'”');
	$('#headpic').attr('src','');
	$('#bookt').text(Game.num);
	$('#num').on('webkitAnimationEnd',function(){ 	
		$('.guide').hide();
		Game.countdown();		
	})	
	$('#wrap').on('touchstart',function(ev){
		touchStartY=ev.targetTouches[0].pageY;          
        $('#wrap').on('touchmove',function(ev){
            ev.preventDefault();
        })
        $('#wrap').on('touchend',function(ev){  
            var offsetY=ev.changedTouches[0].pageY - touchStartY;    
            if(offsetY < -5 && Game.isOn){
            	if(Game.num==0){
            		setTimeout(function(){
            			$('.person').addClass('change');	
            		},300)
            	}           	     	
            	aniEnd();
            	Game.num+=6;   
            	if(Game.num>=498){
            		Game.num=498;
            	}      		            	
                $('#total').text(Game.num); 
            }
            $('#wrap').off('touchmove touchend');
        })			       
    }) 
}   
//游戏结束
Game.over=function(resnum){
	resnum = resnum > 498 ? 498 : resnum;
	if(resnum==0){
		$("#getBtn").attr("class","agBtn");
		$("#agBtn").attr("class","getBtn");
	}	
	clearInterval(Game.timer);
	Game.isOn=false;          	            
    $('.game').hide();
    $('#bookt').text(resnum);
    $('.result').show();  
	//根据不同结果显示不同的头像
	if(resnum>=0 && resnum<=96){
		$('#headpic').attr('src',Game.headpic[0]);
	}else if(resnum>=102 && resnum<=198){
		$('#headpic').attr('src',Game.headpic[1]);
	}else if(resnum>=204 && resnum<300){
		$('#headpic').attr('src',Game.headpic[2]);
	}else if(resnum>=300 && resnum<=396){
		$('#headpic').attr('src',Game.headpic[3]);
	}else if(resnum>=402 && resnum<=498){
		$('#headpic').attr('src',Game.headpic[4]);
	} 
	Detail.saveRecard(resnum);
}
var Detail={};
Detail.RecardKey = "a92_total";
Detail.LastWin = "a92_last";
//初始化页面
function init(){
	Detail.btns('.rBtns a');
	//关闭弹窗
	$(".hide").on("tap",function(){
		Detail.maskOut("mask","ktMonth");
	})
	//初始化业务
	var last = lsg(Detail.LastWin);
	if(last){
		Game.over(last|0);
	}else{
		Game.play();
		forceLog(param("act_f"));//再玩一次不记录pv，uv	
	}
	$("#points").text(lsg(Detail.RecardKey)|0);
	Local.reqaObj(server() + "pkg10/init", function(data) {
		if (data.picked) {// 已领取过
			$(".score").text("已领取" + data.picked + "书券求饶金");
			$("#getBtn").hide();
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}
//记下本次记录
Detail.saveRecard = function(lastWin){
	var recard = lsg(Detail.RecardKey)|0;
	if(recard<lastWin){
		var realWin = total > 498 ? 498 : lastWin;
		lss(Detail.RecardKey, realWin);
		$("#points").text(realWin);
	}
	lss(Detail.LastWin,lastWin);
}
Detail.pick = function(){
	if ((lsg(Detail.RecardKey) | 0) == 0)
		return;
	forceLog(param("act_f"),"pick2");
	
	Local.reqaObj(server()+"pkg10/pick?right="+(lsg(Detail.RecardKey)|0), function(data) {
		if(data.code==1){//领取成功
			forceLog(param("act_f"),"picked");
			$("#booktn").text((lsg(Detail.RecardKey)|0));
			Detail.maskIn("mask", "sucsTake");
		}else if(data.code==2){//微信登陆不能参与活动
			Detail.maskIn("mask", "qqLogin");
		}else if(data.code==-1){//尚未开通包月
			Detail.maskIn("mask", "ktMonth");
		}else if(data.code==-2){//已领取过
			Detail.maskIn("mask", "pickFail");
		}else if(data.code==-4){//请先登录~
			Local.login();
		}else if(data.code==-8){//活动已经结束
			Detail.maskIn("mask", "pickFail");
		}else{
			JSToast.showToast("网络不畅，请稍后再试试");
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}
Detail.replay = function(){
	forceLog(param("act_f"),"again");
	lsr(Detail.LastWin);
	location.reload();
}
Detail.maskIn=function(obj1,obj2){
	$('.'+obj1).css('display','-webkit-box');
	$('#'+obj2).show();
}
Detail.maskOut=function(obj1,obj2){
	setTimeout(function(){
		$("."+obj1).hide();
		$(".notice").hide();
		$("#"+obj2).hide();
	},320)
}
Detail.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass('on');
	})
	$(obj).on("touchend",function(){
		$(this).removeClass('on');
	})
}

