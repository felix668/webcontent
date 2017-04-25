//与终端本地js调用相关的都放在这里
// actionCode: 1000 获取书籍列表
//             1001 点击书籍
//             1002 删除书籍
//             1003 丰富状态
//             1004 获取最近阅读
var WebShelf = {};

/**
 * 获取书架信息
 * @param sindex
 * @param eindex
 * @param callback
 */
WebShelf.getShelfInfo = function (sindex, eindex, callback) {
    var webjson = '{"actionCode":"1000","bid":"0","range":"' + sindex + "-" + eindex + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        var tmp = obj(data);
        callback(tmp);
    });
};

/**
 * 点击书籍
 * @param bid
 * @param callback
 */
WebShelf.clickBook = function (bid, callback) {
    var webjson = '{"actionCode":"1001","bid":"' + bid + '","range":"' + 0 + "-" + 99 + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        if (callback) {
            callback(data);
        }
    });
}

/**
 * 点击书籍
 * @param bid
 * @param callback
 */
WebShelf.clicklastreadBook = function (bid, callback) {
    var webjson = '{"actionCode":"1001","bid":"' + bid + '","range":"' + 0 + "-" + 99 + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        if (callback) {
            callback(data);
        }
    });
    //ZBook.doextLog("lastreadclick");
}

/**
 * 删除书籍
 * @param bid
 * @param callback
 */
WebShelf.delBook = function (bid, callback) {
    var webjson = '{"actionCode":"1002","bid":"' + bid + '","range":"' + 0 + "-" + 99 + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        if (callback) {
            callback(data);
        }
    });
};


/**
 * 点击设置丰富状态
 * @param bid
 * @param callback
 */
WebShelf.userState = function (bid, callback) {
    var webjson = '{"actionCode":"1003","bid":"' + bid + '","range":"' + 0 + "-" + 99 + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        if (callback) {
            callback(data);
        }
    });
};

/**
 * 获取最近阅读
 * @param callback
 */
WebShelf.lastread = function (callback) {
    var webjson = '{"actionCode":"1004","bid":"' + 0 + '","range":"' + 0 + "-" + 1 + '"}';
    JSbookshelf.bookAction(webjson, function (data) {
        var tmp = obj(data);
        if (callback) {
            callback(tmp);
        }
    });
};

/**
 * 进入书架的webview
 */
WebShelf.gotoShelf = function () {
    JSbookshelf.gotoshelf();
};