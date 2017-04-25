var CardList = {};
CardList.URL = '';
CardList.UIN = '';
CardList.pageNo = 1;
CardList.loading = false;
CardList.hasMore = false;

function init() {

	CardList.URL = server() + 'pkgb2/win';

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
	"1" : 1,
	"2" : 6,
	"3" : 2,
	"4" : 3,
	"5" : 7,
	"6" : 5,
	"7" : 8,
	"-1" : 4
};
CardList.fillContent = function(data) {
	var _str = '';
	if (!data || data.length == 0) {
		_str += '<div class="nogift"><img src="images/nogift.png"><p>还木有奖品~</p></div>';
	} else {
		_str += '<div class="giftwrap"><p class="tip">获得实物奖的同学，小编会及时和您联系，敬请关注</p><ul class="giftlist">';
		for (card in data) {
			_str += '<li class="gift"><img src="images/gift'
					+ dict[data[card].prizeId] + '.png"><span>'
					+ data[card].prizeName + '</span></li>';
		}
		_str += '</ul></div>';
	}
	return _str;
}
