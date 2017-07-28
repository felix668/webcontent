var CardList = {};
CardList.URL = '';
CardList.UIN = '';
CardList.pageNo = 1;
CardList.loading = false;
CardList.hasMore = false;
function init() {
	CardList.URL = server() + 'pkg160903/myPrize';
	CardList.showPage();
}
/**
 * 页面显示
 */
CardList.showPage = function() {
	Local.reqaObj(CardList.URL, function(data) {	
		var str = CardList.fillContent(data.prizeList);
		ih('content', str);
	}, [ 'content' ], function() {
	}, 1);
};
CardList.fillContent = function(data) {
	//console.log(JSON.stringify(data));
	var _str = '';
	if (!data || data.length == 0) {
		_str += '<div class="nogift"><img src="images/nogift.png"><p>木有奖品</p></div>';
	} else {
		$("body").css("background-color","#1b1a1f");
		_str += '<div class="giftwrap"><ul class="giftlist">';
		for (card in data) {
			var cur=data[card];
			if(cur.prizeId==2){
				_str += '<li><div class="gift"><img src="images/gift'
					+ cur.prizeId + '.png"></div><div class="pinfo"><p>'
					+ cur.prizeName + '</p><p>账号：'
					+ cur.ticketId + '</p><p>密码：'
					+ cur.ticketPwd + '</p></div><a href="javascript:CardList.showmask()">使用规则》</a></li>';
			}else{
				_str += '<li><div class="gift"><img src="images/gift'
				+ cur.prizeId + '.png"></div><div class="pinfo"><p>'
				+ cur.prizeName + '</p></div></li>';
			}
		}
		_str += '</ul></div>';
		_str +='<div class="mask"><div class="tiparea movierule"><h3>电影票领取规则：</h3>'+
		'<p>1. 请登录格瓦拉官网或APP，选定场次<br>2. 在“确认订单并支付”环节输入票券密码<br>'+
		'3. 凭取票短信至影院自助取票机取票<br>'+
		'4. 本券仅限兑换不高于90元的《爵迹》3D电影票一张（特殊场次除外），不可兑换现金,不提供发票<br>'+
		'5. 请在有效期内使用本券，有效期至：2016年10月20日<br>6. 使用过程中,如有任何疑问,可私信QQ阅读新浪微博官方帐号</p>'+
		'<a href="javascript:CardList.hidemask()" class="knowbtn" id="knowbtn">我知道了</a></div></div>';
	}
	return _str;
}
CardList.showmask=function(){
	$(".mask").addClass("show");
}
CardList.hidemask=function(){
	$(".mask").removeClass("show");
}
