var MyPrize = {};
MyPrize.URL = "";
MyPrize.LIST = "";
MyPrize.ADDRESS = "";
MyPrize.GETADDRESS = "";

function init() {
	MyPrize.URL = server() + "lottery/index";
	MyPrize.LIST = server() + "lottery/cardsWin";
	MyPrize.ADDRESS = server() + "lottery/setContact";
	MyPrize.GETADDRESS = server() + "lottery/getContact";

	MyPrize.fillPage();

	$(".close").on('click', function() {
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
				if(data.cards[k].prizeId == 2 || data.cards[k].prizeId == 5 ){
					realPrize = true;
				}
				html += '<tr><td>'+data.cards[k].prizeName+'</td><td>'+data.cards[k].createDate+'</td></tr>';
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
	},[],function(){},1);
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


MyPrize.openVIP = function(isLogin) {
	Local.openVip(isLogin);
}

MyPrize.maskUp = function(id, msg) {
	$(".mask").show();
	$(".mask_on").show();
	$("#" + id + " p").html(msg);
	$("#" + id).show();
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
