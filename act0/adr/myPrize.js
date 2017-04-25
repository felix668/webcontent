var MyPrize = {};
MyPrize.URL = "";
MyPrize.LIST = "";
MyPrize.ADDRESS = "";
MyPrize.GETADDRESS = "";

function init() {
	MyPrize.URL = server() + "index";
	MyPrize.LIST = server() + "cardsWin";
	MyPrize.ADDRESS = server() + "setContact";
	MyPrize.GETADDRESS = server() + "getContact";

	MyPrize.fillPage();

	$(".close").on('click', function() {
		$('.zt-tiparea').hide();
		$(".mask_on").hide();
		$(".mask").hide();
	});
	$(".btn.btn0").on('click', function() {
		$('.zt-tiparea').hide();
		$(".mask_on").hide();
		$(".mask").hide();
	});
}

/**
 * 访问日志
 */
MyPrize.pageLog = function() {
	Local.reqaObj(MyPrize.URL, function(data) {
		console.log(data);
	});
};
/**
 * 初始化页面
 */
MyPrize.fillPage = function() {
	Local.reqaObj(MyPrize.LIST, function(data) {
		console.log(data);
		var realPrize = false;
		if (data.cards) {
			console.log(data.cards);
			var html = '';
			for(var k in data.cards){
				if(data.cards[k].prizeId <=4){
					realPrize = true;
				}
				html += '<tr><td>'+MyPrize.levelPrize(data.cards[k].prizeId)+'</td><td>'+data.cards[k].prizeName+'</td><td>'+data.cards[k].createDate+'</td></tr>';
			}
			$("tbody").append(html);
		}
		if(realPrize){
			Local.reqaObj(MyPrize.GETADDRESS, function(data) {
				console.log(data);
				$("#name").val(data.name);
				$("#address").val(data.address);
				$("#contact").val(data.contact);
				$(".adress").show();
			});
		}
	});
};

/**
 * 提交地址
 */
MyPrize.subAddess = function() {
	if(!$(".infoList input")[0].value||!$(".infoList input")[1].value||!$(".infoList input")[2].value){
		MyPrize.maskUp("info","请完整填写你的联系方式~");
	}else{
		Local.reqaObj(MyPrize.ADDRESS + "?name=" + $(".infoList input")[0].value
				+ "&address=" + $(".infoList input")[1].value + "&contact="
				+ $(".infoList input")[2].value, function(data) {
			console.log(data);
			if(data.code==0){
				MyPrize.maskUp("info","提交成功~");
			}else{
				MyPrize.maskUp("info","提交失败，请重试~");
			}
		});
	}
};

/**
 * 奖品等级
 */
MyPrize.levelPrize = function(prize) {
	var level = ""
	switch (prize) {
	case 1:
		level = "一等奖";
		break;
	case 2:
		level = "二等奖";
		break;
	case 3:
		level = "三等奖";
		break;
	case 4:
		level = "四等奖";
		break;
	case 5:
		level = "五等奖";
		break;
	case 6:
		level = "阳光普照奖";
		break;

	default:
		break;
	}
	return level;
}

MyPrize.openVIP = function(isLogin) {
	Local.openVip(isLogin);
}

MyPrize.maskUp = function(id, msg) {
	$(".mask").show();
	$(".mask_on").show();
	$("#" + id + " p").html(msg);
	$("#" + id).show();
	ztTip();
}

/**
 * 登陆信息相关
 */
MyPrize.login = function() {
	MyPrize.showMsg(window.location.href);
	MyPrize.showMsg(document.cookie);
	try {
		Local.login();
	} catch (e) {

	}
}
