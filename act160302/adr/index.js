var Index = {};
var winW=document.documentElement.clientWidth || document.body.clientWidth,
    winH=document.documentElement.clientHeight || document.body.clientHeight;
$(".mask").css({'width':winW,'height':winH});
function init(){
	console.log("init....");
	Index.fillPage();
	forceLog(param("act_f"));
}
//页面初始化
Index.fillPage = function() {
	Local.reqaObj(server() + "pkg160302/init", function(data) {
		//处理初始化数据
		console.log(data);
        initpage(data);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
Index.level = {"btn50":1,"btn500":2,"btn5000":3};
//领取礼包
Index.pick = function(btn) {
	console.log(btn);
	forceLog(param("act_f"), "pick" + btn);
	Local.reqaObj(server() + "pkg160302/pick?lv=" + Index.level[btn], function(
			data) {
		// 处理点击领取返回的数据
		console.log(data);
		Index.result(data, btn);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1); 
}
//页面初始化
function initpage(data) {
	//活动结束
	if (data.code == -9) {
		document.addEventListener('touchmove', function(e) {
		    e.preventDefault();
		});
		$(".mask").css({
			'display' : '-webkit-box',
			'background' : 'rgba(0,0,0,0.86)'
		});
		$(".activity_end").show();
		return;
	}
    if(data.isLogin){
        Index.logined(data);
    }else{
        Index.unlogin();       
    }
	$("#num1").text(data.l1);
	$("#num2").text(data.l2);
	$("#num3").text(data.l3);	
}
Index.unlogin = function() {
	$(".unlogin").show();
	$(".logined").hide();
	$(".normal_btn").attr("href", "javascript:Local.login();");
};

Index.logined = function(data) {
	$(".unlogin").hide();
	$(".logined").show();
	$("#headpic").attr("src", data.icon);
	$("#cosnum").text(data.consumed | 0);
	$(".normal_btn").attr("href", "javascript:void(0);");
	
	//不能参加的用户data.canPick=true可以领取，false不能领取
	if(data.canPick){
		var bookcoin = data.consumed | 0;
		if (data.p1) {
			Index.disables("#btn50");
			$("#btn50").text("已领取");
		} else if (bookcoin < 50) {
			Index.disables(".normal_btn");
			$("#btn50").text("再消耗" + parseInt(50 - bookcoin) + "书币可领取");
		} else {
			$("#btn50").text("立即领取");
		}
		if (data.p2) {
			Index.disables("#btn500");
			$("#btn500").text("已领取");
		} else if (bookcoin < 500) {
			Index.disables("#btn500");
			$("#btn500").text("再消耗" + parseInt(500 - bookcoin) + "书币可领取");
		} else {
			$("#btn500").text("立即领取");
		}
		if (data.p3) {
			Index.disables("#btn5000");
			$("#btn5000").text("已领取");
		} else if (bookcoin < 5000) {
			Index.disables("#btn5000");
			$("#btn5000").text("再消耗" + parseInt(5000 - bookcoin) + "书币可领取");
		} else {
			$("#btn5000").text("立即领取");
		}
	}else{
		//1直接弹窗
		$(".mask").css("display", "-webkit-box");
		$("#user_notice").show();
		//2修改按钮
		$(".normal_btn").addClass("disable");
		$(".normal_btn").text("此活动仅支持QQ登录");
	}	
};
//微信弹框关闭
$("#user_notice a").on("touchend",function(ev){
		ev.preventDefault();
		Index.maskOut();
});
// 已领取，按钮不可点
Index.disables=function(obj){
   $(obj).addClass("disable");
}
//弹窗隐藏
Index.maskOut = function (){
    $(".mask").hide();
    $(".tiparea").hide();
};
//弹窗显示
Index.maskIn = function(obj, btn) {
	$(".mask").css("display", "-webkit-box");
	$("#" + obj).show();
	$("#" + obj).attr("from", btn);
	Index.fillPage();
};
// 弹窗关闭,按钮不可点
$(".btn_close").on("touchend",function(ev){
		ev.preventDefault();
		Index.maskOut();
		var btn=$(this).parent(".tiparea").attr("from");
		Index.disables("#"+btn);
		$("#"+btn).text("已领取");
		
})
//弹窗关闭，按钮可点
$(".tomorrow").on("touchend",function(ev){
		ev.preventDefault();
		Index.maskOut();
		
})
// 点击领取
Index.ontap = function(obj) {
	$(obj).on("tap", function(ev) {
		if ($(obj).hasClass("disable") || $(obj).text() == "登录领取"||$(obj).text() == "此活动仅支持QQ登录")
			return;
		var btn = $(this).attr("id");
		Index.pick(btn);
	})
}
Index.ontap("#btn50");
Index.ontap("#btn500");
Index.ontap("#btn5000");/**/
//弹窗结果
Index.result = function(data,btn) {
	if (data.code == 1) {//领取成功
		Index.maskIn("seccess_result",btn);
		if(btn=="btn50"){
			$(".tiparea .pickname").text("成长值");
			$(".tiparea .where").text("我的等级");
		}
	} else if (data.code == 2) {// 抢光了
		Index.maskIn("no_card",btn);
		$("#no_card a").last().attr("href","javascript:Index.confPick('" + btn + "')");
		if(btn=="btn50"){$("#no_card .other").text("88成长值");}
		else if(btn=="btn500"){$("#no_card .other").text("10书券");}
		else if(btn=="btn5000"){$("#no_card .other").text("188书券");}
	}else{
		Local.showToast(data.msg);
	}
}
//仍然领取，放弃体验卡
Index.confPick = function(btn) {
	forceLog(param("act_f"), "cpick" + btn);
	Local.reqaObj(server() + "pkg160302/cpick?lv=" + Index.level[btn],
			function(data) {
				// 处理点击领取返回的数据
				console.log(data);
				// 隐藏弹窗
				Index.maskOut();
				// 按钮变化
				var from = $("#no_card").attr("from");
				$("#" + from).text("已领取");
				Index.disables("#" + from);
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
}