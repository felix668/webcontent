var Index = {};
Index.debug = false;
function init() {
	forceLog(param("act_f"));
	$(".btn_tj").on( "tap",
			function() {
				if (!$("#name").val()) {
					$("#name").parent().addClass("noticecol");
					return;
				} else {
					$("#name").parent().removeClass("noticecol");
				}
				if (!$("#phone").val()) {
					$("#phone").parent().addClass("noticecol");
					return;
				} else {
					if(!testphone($("#phone").val())){
						JSToast.showToast("请输入正确的手机号");
						return;
					}
					$("#phone").parent().removeClass("noticecol");
				}
				if (!$("#address").val()) {
					$("#address").parent().addClass("noticecol");
					return;
				} else {
					$("#address").parent().removeClass("noticecol");
				}

				var act_b = "CONTACT:name-" + $("#name").val()
						+ ",phone-" + $("#phone").val() + ",address-"
						+ $("#address").val();

			Local.reqaObj(server() + "sum?act_f=" + (param("act_f") || -110) + "&act_b=" + act_b,
			function(data) {
				JSToast.showToast("提交成功");
				Local.go("index.html");
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
	})
}

// 按钮切换
$(".btn_tj").on("touchstart", function() {
	$(".btn_tj").addClass('active');
})
$(".btn_tj").on("touchend", function() {
	$(".btn_tj").removeClass('active');
})


function testphone(val){
	var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	if(pattern.test(val)) {
	   return true;
	} else {
	   return false;
	}
}
