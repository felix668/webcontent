var Contact = {};
Contact.ADD_URL = "";
Contact.ADD_SUB_URL = "";

function init() {
	Contact.ADD_URL = server() + "getContact";
	Contact.ADD_SUB_URL = server() + "setContact";
	Contact.fillPage();
}

Contact.fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(Contact.ADD_URL + "?act_f=" + param("act_f"), function(data) {
		console.log(data);
		if (data.qq || data.phone) {
			showInfo(data.name, data.qq, data.phone, data.address);
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}
// auto adaptation
var calculate_size = function() {
	var BASE_FONT_SIZE = 100;
	var docEl = document.documentElement,
		clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
	docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 320) + 'px';
};

// Abort if browser does not support addEventListener
if (document.addEventListener) {
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	window.addEventListener(resizeEvt, calculate_size, false);
	document.addEventListener('DOMContentLoaded', calculate_size, false);
	calculate_size();
}
//已有信息
function showInfo(name,qq,tel,site){
	$("#infobox").show();
	$("#fillbox").hide();
	$(".qq").text(qq);
	$(".telphone").text(tel);
	if(name===""){
		$(".name").text("未填写");
	}else{
		$(".name").text(name);
	}
	if(site===""){
		$(".address").text("未填写");
	}else{
		$(".address").text(site);
	}
}
//信息验证
function testInfo() {
	if (!$("#usertel").val()){
		$("#error").text("请输入电话号码");
	}else if(!testphone($("#usertel").val())){
		$("#error").text("请输入正确电话号码");
	}else if(!$("#userQQ").val()){
		$("#error").text("请输入QQ");
	}else if(!testqq($("#userQQ").val())){
		$("#error").text("请输入正确的QQ号");
	}else{
		$("#error").text("");
		return true;	
	}
	return false;	
}
$("#submit").on("tap", function() {
	if (testInfo()) {
		Local.reqaObj(Contact.ADD_SUB_URL + "?act_f=" + param("act_f")
				+ "&phone=" + $("#usertel").val() + "&qq="
				+ $("#userQQ").val() + "&name=" + $("#username").val()
				+ "&address=" + $("#usersite").val(), function(data) {
			if(data.isLogin){
				if (data.code == 0)
					Local.showToast("提交成功");
				else
					Local.showToast("系统繁忙，请稍后再试试");
			}else{
				Local.login();
			}
		}, [], function() {
			Local.showToast("网络不畅，请稍后再试试");
		}, 1);
	}
})
//信息修改
function editInfo() {
	$("#infobox").hide();
	$("#fillbox").show();
	$("#usertel").val($(".telphone").text());
	$("#userQQ").val($(".qq").text());
	if($(".name").text()!=="未填写"){
		$("#username").val($(".name").text());
	}
	if($(".address").text()!=="未填写"){
		$("#usersite").val($(".address").text());
	}	
}
$("#edit").on("tap",function(){
	editInfo();
})
function testphone(val){
	var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	if(pattern.test(val)) {
	   return true;
	}else{
	   return false;
	}
}
function testqq(val){
	var pattern=/^[0-9]*$/;
	if(pattern.test(val)) {
	   return true;
	}else{
	   return false;
	}
}
