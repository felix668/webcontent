var CardList = {};
CardList.URL = '';
CardList.UIN = '';
CardList.pageNo = 1;
CardList.loading = false;
CardList.hasMore = false;
function init() {
	CardList.URL = server() + 'pkg160803/win';
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
	"1" : 2,
	"2" : 1,
	"3" : 3,
	"4" : 4,
	"5" : 8,
	"6" : 6,
	"7" : 7,
	"8" : 5,
	"9" : 5,
	"10":9,
	"11":10
};
CardList.fillContent = function(data) {
	console.log(JSON.stringify(data));
	var _str = '';
	if (!data || data.length == 0) {
		_str += '<div class="nogift"><img src="images/nogift.png"><p>~木有奖品~</p></div>';
	} else {
		_str += '<div class="giftwrap"><p class="tip">获得实物奖的同学，小编会及时和您联系，敬请关注</p><ul class="giftlist">';
		for (card in data) {
			var pi=data[card].prizeId,pn=data[card].prizeName;
			if(pi==7 && pn.indexOf("500阅券")>-1){
				pi=11;
			}else if((pi==8 || pi==9) && pn.indexOf("50阅券")>-1){
				pi=10;
			}
			_str += '<li class="gift"><img src="images/gift'
					+ dict[pi] + '.png"><span>'
					+ pn + '</span></li>';
		}
		_str += '</ul></div>';
	}
	return _str;
}
