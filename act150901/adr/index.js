var Index = {};
Index.SUM_URL = "";
Index.URL = "";
Index.VOTE_URL = "";
Index.GET_USER_MONTH_TICKET_LEFT_URL = "";
function init() {
	Index.SUM_URL=server()+'sum';
	Index.URL=server()+'act150901/index';
	Index.VOTE_URL=server()+'act150901/vote';
	Index.GET_USER_MONTH_TICKET_LEFT_URL=server()+'act150901/getUserMonthTicketLeft';
	Index.forceLog(param('act_f')||10071,'view');
	Index.fillPage();
};
Index.fillPage=function(){
	Local.reqaObj(Index.URL, function(data) {
		if(!data.isLogin){
			Local.login();
			return;
		}
		vv('monthTicketLeftDiv');
		ih('monthTicketLeft',data.monthTicketLeft+'张');
		if(!nl(data.shelfBooks)&&data.shelfBooks.length>0){
			ih('shelfBooks',shelfBooks(data));
		}
		ih('columnBooks',columnBooks(data));
		if(param('vv')=='0'){
			vh('moreBookBtn');
		}
		bind('moreBookBtn','click',function(){
			Local.openDetailByCode({pagecode:'1016', mActionid:data.columnId, mTitle:'原创文学风云榜', mActiontag:data.mActiontag});
			Index.forceLog(param('act_f')||10071,'goRank');
		});
		
	});
};

Index.refreshUserMonthTicketLeft=function(){
	Local.reqaObj(Index.GET_USER_MONTH_TICKET_LEFT_URL, function(data) {
		if(!data.isLogin){
			Local.login();
			return;
		}
		ih('monthTicketLeft',data.userMonthTicketLeft+'张');
	});
};
Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Local.reqaObj(Index.SUM_URL + "?act_f=" + act_from + "&act_b=" + act_by+"&rr="+new Date().getTime(),
			function() {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
};

Index.openDetail=function(bid){
	var detailobj = {};
    detailobj.pagecode = "1001";
    detailobj.bid = bid;
    detailobj.url = '';
    detailobj.stat_params = {};
    Local.openPageEx(detailobj, false);
    Index.forceLog(param('act_f')||10071,'goDetail_'+bid);
};

Index.vote=function(bid,from){
	Local.reqaObj(Index.VOTE_URL+'?bid='+bid, function(data) {
		if(!data.isLogin){
			Local.login();
			return;
		}
		Index.forceLog(param('act_f')||10071,'monthTicket_'+data.ret+'_'+from+'_'+bid);
		ih('tipContent',tipContent(data));
		vv('tip');
	});
};
