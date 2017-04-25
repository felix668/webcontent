var Index = {};
Index.debug = false;
function init() {
	Index.fillPage();

	$(".cjbtn_txt").one("tap", function() {
		if($("#zhuanpan").hasClass("btn_ylg"))
			return;
		Local.showProgress("抽奖中~");
		Local.reqaObj(server() + "pkga1/pickyyb", function(data) {
			Local.cancelProgress();
			if (data.isLogin) {
				if (data.code > 0) {
					zhuanpan(data.code);
				} else if (data.code == -3 || data.code == -5) {
					zhuanpan(5);// 抽奖异常默认200书券
				} else if (data.code == -2) {
					tankOpen("cannot");
				} else {
					tankOpen("cjmore");
				}
			} else {
				Local.login();
			}
		}, [], function() {
			Local.cancelProgress();
			JSToast.showToast("网络不畅，请稍后再试试");
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
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}


// 旋转转盘 ids: 奖品的id
function zhuanpan(ids) {
	var angles = (ids - 1) * 60 + 1800;
	$("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
	$("#zhuanpan").on('webkitTransitionEnd', function() {
		$(".show_mask").css("display", "-webkit-box");
		$(".tankuang_box").eq(ids - 1).css("display", "block");
		$(".btn_cj").addClass('btn_ylg');
		$(".cjbtn_txt").text("已抽奖");
		$(".cjbtn_txt").css({
			"color" : "#fff"
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
$(".btn_zdl").on("touchstart",function(){
         $(this).addClass('active');
})
$(".btn_zdl").on("touchend",function(ev){
		$(this).removeClass('active');
		ev.preventDefault();
})
$(".cjbtn_txt").on("touchstart", function() {
	$(".btn_cj").addClass('active');
})
$(".cjbtn_txt").on("touchend", function(ev) {
	$(".btn_cj").removeClass('active');
	ev.preventDefault();
})