var Index = {};
Index.selected=-1;
Index.isLogin= false;
Index.wxLogin= false;
Index.debug = false;
function init() {
//	$("#DEBUG").on("click", function() {
//		Index.debug = true;
//		localStorage.removeItem("act_12_serid");
//	});
	forceLog(param("act_f"));
	Index.fillPage();
}

Index.fillPage = function(from) {
	Index.selected = lsg("act_12_serid") || 0;
	Local.reqaObj(server() + "pkg20151209/init?n=1&pt=" + Index.selected, function(
			data) {
		if (data.isLogin) {
			Index.isLogin = true;
			Index.wxLogin = data.wxLogin;
			if (Index.selected > 0 && data.hasRole) {
				// 已领取礼包1
				if (data.p_qimei_gift1 || data.p_qq_gift1) {
					$(".part1 a").hide();
					$(".part1 .btn3").show();
				}else{
					$(".part1 a").hide();
					$(".part1 .btn1").show();
				}
				// 已领取礼包2
				if (data.p_qimei_gift2 || data.p_qq_gift2) {
					$(".part2 a").hide();
					$(".part2 .btn3").show();
				}else{
					$(".part2 a").hide();
					$(".part2 .btn1").show();
				}
				// 当日已抽奖
				if (data.p_qimei_lottory || data.p_qq_lottory) {
					$(".btn_cj").addClass('active');
					$(".cjbtn_txt").addClass('active');
				}else{
					$(".cjbtn_txt").removeClass('active1');
				}
			} else {
				status(1);
			}
		} else {
			if (Index.selected <= 0)
				status(1);
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}

Index.select = function() {
	if (Index.isLogin){
		if(Index.wxLogin){
			p3(0);// 微信登录
		}else{
			showServer();
		}
	}else{
		Local.login();
	}
}
Index.select1 = function() {
	if (Index.isLogin){
		if(Index.wxLogin){
			p3(0);// 微信登录
		}else{
			$("#submit").attr("href","javascript:Index.submit(1);");
			showServer();
		}
	}else{
		Local.login();
	}
}
// 旋转转盘 ids: 奖品的id
function zhuanpan(ids) {
    var angles = (ids - 1) * 60 + 1080;
    $("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
    $("#zhuanpan").on('webkitTransitionEnd', function () {
        $(".mask").css("display", "-webkit-box");
        $(".resultbox").eq(ids - 1).css("display", "block");
        $(".btn_cj").addClass('active');
        $(".cjbtn_txt").addClass('active');
        //转盘结束再移除点击
        $(".cjbtn_txt").removeClass("lottering");
    });
}

$(".cjbtn_txt").on("click", function() {
	forceLog(param("act_f"), "pick");
	if ($(".cjbtn_txt").hasClass("active")) {
		return;
	}
	if ($(".cjbtn_txt").hasClass("active1")) {
		Index.select1();
		return;
	}
	if ($(".cjbtn_txt").hasClass("lottering")) {
		return;
	}
	$(".cjbtn_txt").addClass("lottering");
	Local.reqaObj(server() + "pkg20151209/pick?pt=" + Index.selected, function(data) {
		if(Index.debug)
			alert(JSON.stringify(data));
		if (data.wxLogin) {
			p3(0);// 微信登录
		} else {
			var ids = data.code;
			if (ids > 0) {
				p3(2, ids);
			} else {
				p3(1);
			}
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
		$(".cjbtn_txt").removeClass("lottering");
	}, 1);
});
Index.tap = "touchend" in document ? "touchend":"click";
$(".close,.hidebtn").on(Index.tap, function () {
    //e.preventDefault();
    Index.maskOut();
});
//按钮点击态
Index.btns = function (obj) {
    $(obj).on("touchstart", function () {
        $(this).addClass("active");
    });
    $(obj).on("touchend", function () {
        $(this).removeClass("active");
    })
};

Index.btns(".btn1,.btn2,.close,.download");

//弹窗隐藏
Index.maskOut = function () {
    //setTimeout(function(){
    	$(".mask").hide();
   	 	$(".mask>div").hide();
    //},320);
};

//弹窗显示
Index.maskIn = function (obj) {
    $(".mask").css("display", "-webkit-box");
    $(obj).show();
};
Index.gift1 = function() {
	forceLog(param("act_f"), "gift1");
	Local.reqaObj(server() + "pkg20151209/gift1?pt=" + Index.selected,
			function(data) {
				if(Index.debug)
					alert(JSON.stringify(data));
				if (data.isLogin) {
					if (data.wxLogin) {
						p1(0);
					} else {
						if (data.code == 1) {
							p1(1);
							$(".part1 a").hide();
							$(".part1 .btn3").show();
						} else if (data.code == -1) {
							p1(2);
						} else if (data.code == -2) {
							Local.showToast("领取失败，首次创建全民超神角色才可领取本礼包");
						} else {
							Local.showToast("出错啦，请稍候重试~");
						}
					}
				} else {
					Local.login();
				}
			}, [], function() {
				Local.showToast("网络不畅，请稍后再试试");
			}, 1);
};

Index.gift2 = function() {
	forceLog(param("act_f"), "gift2");
	Local.reqaObj(server() + "pkg20151209/gift2?pt=" + Index.selected,
			function(data) {
				if(Index.debug)
					alert(JSON.stringify(data));
				if (data.isLogin) {
					if (data.wxLogin) {
						p2(0);
					} else {
						if (data.code == 1) {
							p2(1);
							$(".part2 a").hide();
							$(".part2 .btn3").show();
						} else if (data.code == -1) {
							p2(2);
						} else if (data.code == -2) {
							p2(3);
						} else {
							Local.showToast("出错啦，请稍候重试~");
						}
					}
				} else {
					Local.login();
				}
			}, [], function() {
				Local.showToast("网络不畅，请稍后再试试");
			}, 1);
};

Index.submit = function(from) {
	if (severSel()) {
		Local.reqaObj(server() + "pkg20151209/role?pt=" + severSel() + "&n="
				+ (from || 0), function(data) {
			if(Index.debug)
				alert(from+"-"+JSON.stringify(data));
			if (data.hasRole) {
				lss("act_12_serid", severSel());
				Index.fillPage(1);
			} else {
				if(from){
					Local.showToast("请在你选择的服务器上创建角色");
				}else{
					Local.showToast("领取失败，首次创建全民超神角色才可领取本礼包");
				}
			}
		}, [], function() {
			Local.showToast("网络不畅，请稍后再试试");
		}, 1);
	} else {
		Local.showToast("请选择你的服务器~");
	}
}
// 选择服务器
function severSel(){
	return $("#innerlist .cur").length?($("#innerlist .cur").index()+1):false;
}
//显示服务器
function showServer(){
    Index.maskIn("#tiparea3",1);
    myscroll=new IScroll("#serverlist");
    $("#innerlist li").on("tap",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    })
}
//页面初始化
function status(n){
    if(n==0){
        $(".btn2,.btn3").hide();
        $(".btn1").show();
    }else if(n==1){
        $(".btn1,.btn3").hide();
        $(".btn2").show();
        $(".cjbtn_txt").addClass('active1');
    }else if(n==2){
        $(".btn1,.btn2").hide();
        $(".btn3").show();
        $(".btn_cj").addClass('active');
        $(".cjbtn_txt").addClass('active');
    }
}
//弹窗显示
function p1(data){
    if(data==0){//登录领取
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("需登录QQ号才可领取礼包");
        $("#tiparea1 p").text("此活动只针对QQ 帐号。去设置页面退出当前帐号，切换QQ帐号登录");
    }else if(data==1){//成功领取
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("成功领取礼包");
        $("#tiparea1 p").text("书券和成长值已即时到账，可以去我的账户查看");
    }else if(data==2){//已领取过
    	$("#tiparea2 strong").text("已领取过礼包，不要贪心哦");
        Index.maskIn("#tiparea2");
    }
}
function p2(data){   
    if(data==0){//登录领取
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("需登录QQ号才可领取礼包");
        $("#tiparea1 p").text("此活动只针对QQ 帐号。去设置页面退出当前帐号，切换QQ帐号登录");
    }else if(data==1){//成功领取
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("成功领取礼包");
        $("#tiparea1 p").text("奖品已发放，可以去全民超神查看");
    }else if(data==2){//已领取过
    	$("#tiparea2 strong").text("已领取过礼包，不要贪心哦");
        Index.maskIn("#tiparea2");
    }else if(data==3){//领取失败
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("领取礼包失败");
        $("#tiparea1 p").text("需首次安装QQ阅读才可参与活动，感谢您对QQ阅读的支持");
    }
}
function p3(data,ids){   
    if(data==0){//登录领取
        Index.maskIn("#tiparea1");
        $("#tiparea1 strong").text("需登录QQ号才可领取礼包");
        $("#tiparea1 p").text("此活动只针对QQ 帐号。去设置页面退出当前帐号，切换QQ帐号登录");
    }else if(data==1){//已领取过
    	$("#tiparea2 strong").text("已抽过奖，明日再来");
        Index.maskIn("#tiparea2");
    }else if(data==2){//显示抽奖结果
        zhuanpan(ids);
    }
}