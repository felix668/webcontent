var gameQA={
	rightNum:0,            //正确答对数目
	curNum:0,              //当前是第几道题目
	result:[]			   //结果
}
function init() {
	gameQA.result=[{"headpic":"images/pic6.png","desc":"学渣","ticket":"20"},{"headpic":"images/pic6.png","desc":"学渣","ticket":"20"},{"headpic":"images/pic5.png","desc":"学弱","ticket":"30"},{"headpic":"images/pic4.png","desc":"学民","ticket":"50"},{"headpic":"images/pic3.png","desc":"学痞","ticket":"66"},{"headpic":"images/pic2.png","desc":"学神","ticket":"88"},{"headpic":"images/pic1.png","desc":"学霸","ticket":"100"}];
}
var qas=[{"answers":["A、跑步","B、上网聊天","C、泡妞","D、吃霸王餐"],"question":"你觉得锻炼身体最有效的运动是？","right":3},{"answers":["A、喝酒","B、自虐","C、花钱","D、扁人"],"question":"当您心情不舒畅的时候，你觉得那种方法最容易调整心态？  ","right":3},{"answers":["A、吃安眠药","B、看国产电视剧","C、催眠术","D、用大锤打晕他"],"question":"治疗失眠最有效的方法是？  ","right":3},{"answers":["A、挖鼻屎","B、掏耳朵","C、撮泥丸","D、流鼻涕"],"question":"下面最恶心的造型是？   ","right":0},{"answers":["A、癞蛤蟆","B、猪","C、恐龙","D、大便"],"question":"下面哪种物体最具有无厘头形象？","right":3},{"answers":["A、癞蛤蟆","B、猪","C、恐龙","D、大便"],"question":"下面哪种物体最具有无厘头形象？","right":3}];
$(function(){
	forceLog(param("act_f"));
	//适配
	var fSize=($(window).width()/320)*100;
    $('html').css('fontSize',fSize+"px");
    
    $(".knowbtn").click(function() {
    	hideMask();
	});
    
	Local.reqaObj(server()+"pkg9/init", function(data) {
		qas = data.qas;
		init();
		ahfc("wd_open", "openVIP("+data.isLogin+")");
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
	function init(){
		if(lsg("ad")==1){
			gameQA.rightNum = lsg("rt");
			if(gameQA.rightNum>6)
				gameQA.rightNum=6;
			$('#wrap').hide();
			$('#result').addClass('active');
			$('#rightN').text(gameQA.rightNum);
			switch (parseInt(gameQA.rightNum)) {
			case 6:
				$('#rank').text("哇哇哇，你击败了99%的人，智商爆表脱颖而出！太帅了！");
				break;
			case 5:
				$('#rank').text("学神学神！建国之后不许成精，你只能神一般的存在了！");
				break;
			case 4:
				$('#rank').text("这个世界，只有颜值，然并卵，我有知识！");
				break;
			case 3:
				$('#rank').text("终有一天，你将踩在众渣渣之上称霸！");
				break;
			case 2:
				$('#rank').text("考完感觉不错！可是你告诉我为什么全错！");
				break;
			case 1:
				$('#rank').text("亲，你弱爆了！再来一局吧！");
				break;
			case 0:
				$('#rank').text("亲！再来一局吧！");
				break;
			default:
				$('#rank').text("亲！再来一局吧！");
				break;
			}
			$('#name').text(gameQA.result[gameQA.rightNum].desc);
			$('#headpic').attr('src',gameQA.result[gameQA.rightNum].headpic);
			$('#ticket').text(gameQA.result[gameQA.rightNum].ticket);
		}else{
			for(var i=0;i<qas.length;i++){
				var oLis='';
				$('.cont').eq(i).find('.ques').text(qas[i].question);
				for(var j=0;j<qas[i].answers.length;j++){
					oLis+=('<li>'+qas[i].answers[j]+'</li>');			
				}
				$('.cont').eq(i).find('.list').append(oLis);
			}
		}
		
		$('.list li').on('tap',function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.next').attr('class','clicked');
		})
		var indx=$('#indx');
		var restN=$('#num');
		$('.clicked').live('tap',function(){
			if(gameQA.curNum==4){
				$(this).text("完成");
			}
			$(this).addClass('on');
			if($('.cur').index()==qas[gameQA.curNum].right){
				gameQA.rightNum++;
			}
			$('.cur').removeClass('cur');//TODO fixed
			$('.item').eq(gameQA.curNum).removeClass('show').next().addClass('show');
			gameQA.curNum++;
			indx.text(gameQA.curNum+1);
			restN.text(parseInt(5-gameQA.curNum));
			$(this).attr('class','next');
			if(gameQA.curNum==6){
				if(gameQA.rightNum>6)
					gameQA.rightNum=6;
				lss("ad",1);
				lss("rt",gameQA.rightNum|0);
				$('#wrap').hide();
				$('#result').addClass('active');
				$('#rightN').text(gameQA.rightNum);
				switch (parseInt(gameQA.rightNum)) {
				case 6:
					$('#rank').text("哇哇哇，你击败了99%的人，智商爆表脱颖而出！太帅了！");
					break;
				case 5:
					$('#rank').text("学神学神！建国之后不许成精，你只能神一般的存在了！");
					break;
				case 4:
					$('#rank').text("这个世界，只有颜值，然并卵，我有知识！");
					break;
				case 3:
					$('#rank').text("终有一天，你将踩在众渣渣之上称霸！");
					break;
				case 2:
					$('#rank').text("考完感觉不错！可是你告诉我为什么全错！");
					break;
				case 1:
				case 0:
					$('#rank').text("亲，你弱爆了！再来一局吧！");
					break;
				default:
					break;
				}
				$('#name').text(gameQA.result[gameQA.rightNum].desc);
				$('#headpic').attr('src',gameQA.result[gameQA.rightNum].headpic);
				$('#ticket').text(gameQA.result[gameQA.rightNum].ticket);
			}	
		});
		$('.btns a').on('tap',function(){
			$(this).addClass('on');
		})
		//领取书券
		$('#getBtn').on('tap',function(){
			forceLog(param("act_f"),"pick");
			Local.reqaObj(server()+"pkg9/pick?right="+gameQA.rightNum, function(data) {
				if(data.code==1){//领取成功
					forceLog(param("act_f"),"picked");
					showMask("fail","领取成功","书券已发到您的账户");
				}else if(data.code==2){//微信登陆
					showMask("fail","领取失败","微信帐号不能参与活动，退出微信帐号，切换QQ 登录，即可参与活动");
				}else if(data.code==-1){//尚未开通包月
					showOpen();
				}else if(data.code==-2){//已领取过
					showMask("fail","领取失败","已领取过，每人只能领取一次哦。把机会让给其他的小伙伴吧");
				}else if(data.code==-4){//请先登录~
					Local.login();
				}else if(data.code==-8){//活动已经结束
					showMask("fail","领取失败","活动还没开始或者已经结束");
				}else{
					JSToast.showToast("网络不畅，请稍后再试试");
				}
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
		})
	}
	
})

function showMask(cls,title, msg){
		$("."+cls+" strong").text(title);
		$("."+cls+" p").text(msg);
		$("."+cls).show();
		$(".mask").css('display','-webkit-box')
}
function showOpen(){
	$(".kt-month").show();
	$(".mask").css('display','-webkit-box')
}
function hideMask(){
	$(".mask div").hide();
	$(".mask").hide();
}

function openVIP(isLogin) {
	forceLog(param("act_f"),"wd_open");
	Local.openVip(isLogin);
}


function replay(){
	forceLog(param("act_f"),"replay");
	lsr("ad");
	lsr("rt");
	location.reload();
}