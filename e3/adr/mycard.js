var CardList = {};
CardList.URL = '';
CardList.UIN = '';
CardList.pageNo = 1;
CardList.loading = false;
CardList.hasMore = false;


function init() {

    CardList.URL = server() + 'lottery/cardlist';

    CardList.showPage();
}

/**
 * 页面显示
 */
CardList.showPage = function () {
    Local.reqaObj(CardList.URL, function (data) {
        var str = fillContent(data);
        ih('content', str);
        CardList.setMore(data);
    }, ['content'], function () {
    },1);
};

CardList.getMore = function () {
    if (CardList.hasMore && !CardList.loading) {
        CardList.loading = true;
        ih('getmore', '<span></span>加载中');
        dv('getmore');
        var nextPageNo = CardList.pageNo + 1;
        Local.reqaObj(CardList.URL + '?pageNo=' + nextPageNo, function (data) {
            var str = fillContent(data);
            iha("content", str);
            CardList.setMore(data);
            CardList.pageNo = nextPageNo; //页面渲染完成才能把页码+1
            CardList.hasMore = data.hasNextPage;
            CardList.loading = false;
        },[], function () {
            CardList.loading = false;
        }, 1);
    }
};

CardList.setMore = function (data) {
    CardList.hasMore = data.hasNextPage;
    if (CardList.hasMore) {
        ZBook.unlimitedScroll(function () {
                CardList.getMore();
            },
            null, 80);
        ih('getmore', '显示更多');
        bind('getmore', 'click', CardList.getMore);
        dv('getmore');
    } else {
        id('getmore').innerHTML = "已显示全部";
        ZBook.unlimitedScroll(function () {
            },
            null, 80);
    }
};
