var Index={};
//已登录
Index.login=function(num,arr){
	Index.isLogin = true;
	$("#num").text(num);
	$("#cjbtn").on("tap",function(){
		Index.doLottery();
	});
	if(arr){
		Index.isLoaded(arr);
	}
}
//未登录
Index.noLogin=function(){
	$("#cjbtn").addClass("nologin");
	$("#cjbtn").on("tap",function(){
		Local.login();
	})
}
//处理书籍下载情况
Index.isLoaded=function(arr){
	var blists=$("#blist li,#blist2 li");
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<blists.length;j++){
			if ($(blists[j]).attr("bid")==arr[i]){
				$(blists[j]).find("a").text("已下载");
			};
		}
	}
	localStorage.getLoaded=arr;
}
//活动已结束
Index.over=function(){
	$("#over").show();
	$("#content").hide();
}
initpage();
function initpage() {
	//Local.init();
	Local.reqaObj(server() + "pkg160803/initLottery", function(data) {
		// 处理初始化数据
		if (data.code==1) {
			Index.lotteryRestTimes=data.lotteryRestTimes;
			Index.login(Index.lotteryRestTimes,data.bidList);
		}else if(data.code==-2){
			Index.noLogin();
		}else if(data.code==-4){
			Index.over();
		}	
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
	forceLog(param("act_f"));
}
//按钮点击态
Index.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass("active");
	})
	$(obj).on("touchend",function(){
		$(this).removeClass("active");
	})
}
Index.btns("#blist a,#blist2 a");
//抽奖停止
Index.stop=function(){
	$("#cjbtn").removeClass("ani");
	$(".cur").removeClass("cur");
}
Index.maskIn = function(txt,src) {
	Index.stop();
	$('#mask').addClass("show");
	if(txt!=undefined && src!=undefined){
		$("#tiparea2").show();
		$("#tiparea2").find("#pack").attr("src",src);
		$("#tiparea2").find("#text").text(txt);
		return;
	}
	$("#tiparea1").show();
}
//弹窗填写联系方式
Index.contact=function(){
	$("#msg").html("务必填写正确的联系方式，<br>方便客服与你联系");
	$("#linkbtn,.close").show();
	$("#knowbtn").hide();
}
//弹窗知道了
Index.know=function(txt){
	$("#msg").html(txt);
	$("#knowbtn").show();
	$("#linkbtn,.close").hide();
}
//关闭所有弹窗
Index.maskOut = function() {
	$('#mask').removeClass("show");
	$(".tiparea").hide();
}
//关闭弹窗
$(".knowbtn,.close").on("touchstart",function(ev){
	ev.preventDefault();
	Index.maskOut();
});
//抽奖结果
Index.result=function(data){
	if(data==0){
		Index.maskIn();
		return;
	}
	var text=prizeName;
	var src=$(".gift"+data).find("img").attr("src");
	if(data==4){//券50
		Index.know("阅券已即时到账，15天有效<br>请尽快使用");
	}else if(data==6){//券500
		Index.know("阅券已即时到账，15天有效<br>请尽快使用");
	}else{
		Index.contact();
	}
	Index.maskIn(text,src);
	Index.lotteryRestTimes--;
	$("#num").text(Index.lotteryRestTimes);
}
Index.doLottery = function(){
	if(parseInt(Index.lotteryRestTimes) <= 0){
		Index.result(0);
		return;
	}
	if (!$("#cjbtn").hasClass("ani")) {
		$("#cjbtn").addClass("ani");
		// 发送请求
		Index.startRun();
		Local.reqaObj(server() + "pkg160803/doLottery",function(data) {
			var code=data.code;
			if(code==-2){
				Local.login();
			}else if(code==0){
				prizeName = data.prizename;
				prizeId = data.prize;
			}else{
				Local.showToast("抽奖程序不给力，请稍候再试");
				clearInterval(timer);
				Index.stop();
			}
		 }, [], function() {
		 }, 1);
	}
}
var timer, cycle, speed = 600, index = 1, preIndex = 0, dict = {
	"1" : 2,
	"2" : 1,
	"3" : 3,
	"4" : 8,
	"5" : 5,
	"6" : 7,
	"7" : 6,
	"8" : 4,
	"9" : 4
}, prizeId = 0, prizeName;
// 跑马灯开始
Index.startRun = function() {
	$(".gift1").addClass("cur");
	// prizeId = -1;
	// prizeName = "抽奖失败";
	clearInterval(timer);
	cycle = 0;
	index=1;
	preIndex=0;
	timer = setInterval(function() {
		Index.run();
	}, speed);
}
//跑马灯
Index.run = function() {
	$(".gift" + preIndex).removeClass("cur");
	$(".gift" + index).addClass("cur");
	if (cycle >= 2 && index == dict[prizeId]) {
		clearInterval(timer);
		delay(1000, function() {
			Index.result(dict[prizeId]);
		});
	}
	// 如果转动超过5圈，默认未中奖
	if (cycle >= 5) {
		clearInterval(timer);
		delay(1000, function() {
			Local.showToast("抽奖程序不给力，请稍候再试");
			Index.stop();
		});
	}
	if (cycle == 1 && index == 1) {
		clearInterval(timer);
		timer = setInterval(function() {
			Index.run();
		}, speed / 2)
	}
	if (cycle == 2 && index == 1) {
		clearInterval(timer);
		timer = setInterval(function() {
			Index.run();
		}, speed)
	}
	index++;
	preIndex++;
	if (index > 8) {
		index = 1;
		cycle++;
	}
	if (preIndex > 8) {
		preIndex = 1;
		$(".gift1").addClass("cur");
	}
}