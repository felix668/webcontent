var Index = {};
Index.debug = false;
function init() {
	Index.fillPage();
	$(".cjbtn_txt").one("click", function() {
		if($("#zhuanpan").hasClass("btn_ylg"))
			return;
		Local.reqaObj(server() + "pkga1/pick", function(data) {
			if (data.isLogin) {
				if (data.code > 0) {
					zhuanpan(data.code);
				} else if (data.code == -3 || data.code == -5) {
					zhuanpan(5);// 抽奖异常默认200书券
				} else if (data.code == -2) {
					tankOpen("cannot");
				}else if (data.code == -40) {
					tankOpen("ykcannot");//游客不参与
				}else {
					tankOpen("cjmore");
				}
			} else {
				if(data.code == -100){
					Local.showToast("网络不畅，请稍后再试试");
				}else if (data.code == -40) {
					tankOpen("ykcannot");//游客不参与
				}else{
					Local.login();
				}
			}
			
		}, [], function() {
			Local.showToast("网络不畅，请稍后再试试");
		}, 1);
		forceLog(param("act_f"),"pick");
	})
}

Index.fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkga1/init", function(data) {
		if (data.p_qimei || data.p_uin) {
			$("#zhuanpan").addClass("btn_ylg");
			$(".cjbtn_txt").text("已抽奖");
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}

// 旋转转盘 ids: 奖品的id
function zhuanpan(ids) {
	var angles = (ids - 1) * 60 + 1080;
	$("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
	$("#zhuanpan").on('webkitTransitionEnd', function() {
		$(".show_mask").css("display", "-webkit-box");
		$(".tankuang_box").eq(ids - 1).css("display", "block");
		$(".btn_cj").addClass('btn_ylg');
		$(".cjbtn_txt").text("已抽奖");
		$(".cjbtn_txt").css({
			"color" : "#fff",
			"margin-left" : "-0.42rem"
		});
	});
}
// 显示指定弹窗
function tankOpen(obj) {
	$(".show_mask").css("display", "-webkit-box");
	$("#" + obj).css("display", "block");
}
// 关闭弹框
$(".btn_zdl").on("tap", function() {
	tankclose();
})
$(".btn_close").on("tap", function() {
	tankclose();
})

function tankclose() {
	$(".show_mask").hide();
	$(".tankuang_box").hide();
}
// 按钮切换
$(".cjbtn_txt").on("touchstart", function() {
	$(".btn_cj").addClass('active');
})
$(".cjbtn_txt").on("touchend", function() {
	$(".btn_cj").removeClass('active');
})