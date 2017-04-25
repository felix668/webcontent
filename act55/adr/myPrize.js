var CardList = {};
CardList.URL = '';
CardList.UIN = '';
CardList.pageNo = 1;
CardList.loading = false;
CardList.hasMore = false;

function init() {

	CardList.INDEX = server() + 'sum';
	CardList.URL = server() + 'pkg5/cardsWin';

	CardList.showPage();
}

/**
 * 页面显示
 */
CardList.showPage = function() {
	Local.reqaObj(CardList.URL, function(data) {
		var str = CardList.fillContent(data.cards);
		ih('content', str);
	}, [ 'content' ], function() {
	}, 1);
};

var dict = {
		"2" : 2,
		"3" : 6,
		"4" : 8,
		"5" : 2,
		"6" : 4,
		"7" : 2
	};
CardList.fillContent = function(data) {
	var _str = '';
	if (!data || data.length == 0) {
		_str += '<div class="nogift"><img src="images/nogift.png"><p>还木有奖品~</p></div>';
	} else {
		_str += '<div class="giftwrap"><ul class="giftlist">';
		for (card in data) {
			_str += '<li class="gift"><img src="images/gift'
					+ dict[data[card].prizeId] + '.png"><span>'
					+ data[card].prizeName + '</span></li>';
		}
		_str += '</ul><p class="sendg">奖品将于7个工作日内安排发放，请您保持QQ阅读<br>正常使用，以便奖品如期送达</p><a href="javascript:Local.go(\'linkfill.html\')" class="contact">填写联系方式</a></div>';
	}
	return _str;
}

CardList.addContact = function(){
	Local.reqaObj(CardList.INDEX+"?act_b="+$(".bgqq").val()+"--"+$(".bgtel").val()+"&act_f=99999", function(data) {
		if($(".bgqq").val().length>0){
			JSToast.showToast("提交成功");
		}else{
			JSToast.showToast("请填写QQ");
		}
		delay(2000, CardList.hideContactForm());
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}
