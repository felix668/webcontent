/** 公共方法 */
var ZBook = {};
var pageObject;
ZBook.loading = null;

ZBook.hasTouch = 'ontouchstart' in window;
ZBook.start_ev = ZBook.hasTouch ? 'touchstart' : 'mousedown';
ZBook.move_ev = ZBook.hasTouch ? 'touchmove' : 'mousemove';
ZBook.end_ev = ZBook.hasTouch ? 'touchend' : 'mouseup';
ZBook.cancel_ev = ZBook.hasTouch ? 'touchcancel' : 'mouseup';
ZBook.clientWindth = document.documentElement.clientWidth;

ZBook.EventType = {
    "DEFAULT": 0,//默认
    "BOOK": 1,//书籍详情
    "VIP": 2,//跳VIP
    "VOTE": 3,//投票
    "SHARE": 4,//分享
    "COMMENT": 5,//评论
    "TOPIC": 6,//跳专题
    "URL": 7,//打开URL
    "SHELF": 8,//加书架
    "REPLY": 9,//回复
    "READ": 10,//本地阅读
    "CHARGE": 11,//充值页
    "COMMENT_AREA": 12,//书评
    "SEARCH": 13,//搜索
    "FREE": 14,//免费专区
    "RANK": 15,//排行
    "HALL": 16,//名人堂
    "COMMENT_DETAIL": 17,//评论详情
    "CHATALL": 18,//访谈
    "FAVOR": 19,//收藏
    "MONTHV2": 20,//包月特权页二期
};
ZBook.EventName = {
    "TOPIC": "TOPIC_EVENT",
    "BOOK": "READER_ACCESS_EVENT",
}
/**
 * 统计子事件，对应A17
 * @type {{1: string, 6: string}}
 */
ZBook.ChildEventName = {
    0: "ABOOK_ACCESS_EVENT",
    1: "READER_ACCESS_EVENT",
    2: "ABOOK_DOWNLOAD_EVENT",
    6: "TOPIC_EVENT"
};

ZBook.doaccesslog = function () {
    if (!Local.iOS) {//ios不打印这个日志
        var id = param("id");
        id = nl(id) ? param("bid") : id;// 书籍ID
        id = nl(id) ? param("cid") : id;// 栏目ID
        id = nl(id) ? param("tid") : id;// 专题书单ID
        id = nl(id) ? param("rid") : id;// 排行ID
        id = nl(id) ? param("pid") : id;// 插件ID

        id = nl(id) ? param("up") : id;// 区分男女出版综合 1 男 2 女 3 出版 0 综合

        if (!id) {
            id = 0;
        }

//      try { //load页面之先进行访问日志的打印,强制刷新请求
//          Local.reqaObj(logserver() + "/accesslog?page=" + getPageName() + '&id=' + id, function () {
//          }, [], function () {
//          }, 1);
//      } catch (e) {
//      }
    }
};


ZBook.init = function () {
    Local.init();
    init();
    ZBook.doaccesslog();
    document.ondragstart = function () {
        return false;
    };
};

ZBook.donothing = function () {
};

/**
 * 在恢复数据渲染页面完成之后需要调用的方法
 */
ZBook.afterLoad = function (callbackSections) {
    //统一做loading的样式处理
    if (callbackSections && callbackSections.length && callbackSections.length > 0) {
        for (var section in callbackSections) {
            ZBook.bindActiveCssByTagName('li', callbackSections[section]);
            ZBook.bindActiveCssByTagName('span', callbackSections[section]);
            ZBook.bindActiveCssByTagName('div', callbackSections[section]);
            ZBook.bindActiveCssByTagName('a', callbackSections[section]);
            ZBook.bindActiveCssByTagName('em', callbackSections[section]);
        }
    }
};

/**
 * 在恢复数据渲染页面完成之后需要调用的方法
 */
ZBook.bindtouchall = function () {
    //统一做loading的样式处理
    ZBook.bindActiveCssByTagName('li');
    ZBook.bindActiveCssByTagName('span');
    ZBook.bindActiveCssByTagName('div');
    ZBook.bindActiveCssByTagName('a');
    ZBook.bindActiveCssByTagName('em');
    ZBook.bindActiveCssByTagName('img');
};

//是否完结转换成str
ZBook.isFinished = function (fin) {
    if (fin == 1) {
        return '完结';
    } else if (fin == 2) {
        return '节选';
    } else {
        return '连载';
    }
};

//数字显示规则：过万精确到0.1，过10万精确到万
ZBook.numberFormat = function (count) {
    if (count < 10000) {
        return count + ' ';
    } else if (count < 10000 * 10) {
        return cint(count / 1000) / 10 + ' 万';
    } else {
        return cint(count / 10000) + ' 万';
    }
};

//将文本超出指定长度的多余部分变成...的形式
ZBook.splitText = function (txt, length) {
    if (txt.length > length) {
        return left(txt, length - 1) + "...";
    } else {
        return txt;
    }
};

/**
 * 为了判断是否存在某一个事件，使用evnetMarks来对事件监听进行处理
 * @type {Function}
 * @private
 */
Element.prototype._addEventListener = Element.prototype.addEventListener;
Element.prototype.addEventListener = function (type, callBackFN, flag) {
    if (typeof this.eventMarks === 'undefined') {
        this.eventMarks = [];
    }
    this.eventMarks.push(arguments);
    this._addEventListener(type, callBackFN, flag);
    return arguments;
};

/**
 * 添加触摸样式
 * @param eTagname
 * @param feid 父级ID,默认为body
 */
ZBook.bindActiveCssByTagName = function (eTagname, feid) {

    var es;
    if (feid && id(feid)) {
        es = id(feid).getElementsByTagName(eTagname);
    } else {
        es = document.getElementsByTagName(eTagname);
    }

    for (var i = 0; i < es.length; i++) {
        if ((es[i].href || es[i].onclick) && es[i].href != "javascript:void(0);" && es[i].onclick != "javascript:void(0);" && es[i].href != "#") {
            es[i].className = es[i].className.replace(" active", "");
            addEvent(es[i]);
        }
    }

    function hasEvent(obj, eventName) {
        if (obj.eventMarks) {
            for (var m = 0; m < obj.eventMarks.length; m++) {
                if (obj.eventMarks[m][0] == eventName) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    function addEvent(obj) {
        var t1;
        var t2;
        if (!hasEvent(obj, ZBook.start_ev)) {
            obj.addEventListener(ZBook.start_ev, function (event) {
                esp(event);
                t1 = setTimeout(function () {
                    obj.className = obj.className + " active";
                    t2 = setTimeout(function () {
                        obj.className = obj.className.replace(" active", "");
                    }, 2000)
                }, 100);
            });
        }
        if (!hasEvent(obj, ZBook.move_ev)) {
            esp(event);
            obj.addEventListener(ZBook.move_ev, function () {
                clearTimeout(t1);
                clearTimeout(t2);
                obj.className = obj.className.replace(" active", "");
            });
        }
        if (!hasEvent(obj, ZBook.end_ev)) {
            esp(event);
            obj.addEventListener(ZBook.end_ev, function () {
                clearTimeout(t1);
                clearTimeout(t2);
                obj.className = obj.className.replace(" active", "");
            });
        }
    }
};

/**
 * 绑定一个页面滚动加载下一页数据的事件
 * @param callback
 * @param data
 * @param threshold
 */
ZBook.unlimitedScroll = function (callback, data, threshold) {
    if (!threshold) threshold = 0;
    window.onscroll = function () {
        if (document.body.scrollHeight - document.body.scrollTop - threshold <= document.documentElement.clientHeight) {
            callback(data);
        }
    }
};

ZBook.showUpdateTime = function (updatetime) {
    var updateStr = "";
    try {
        var time2 = cint(updatetime);
        if (time2 < 0) {
            return "31天前";
        }
        var tt = cint((time() - time2) / 60 / 1000);   // 转换成分钟
        if (tt < 1) {
            updateStr = "1分钟内";
        } else if (tt < 60) {
            updateStr = tt + "分钟前";
        } else {
            tt = cint(tt / 60);    // 转换成小时
            if (tt < 24) {
                updateStr = tt + "小时前";
            } else {
                tt = cint(tt / 24);    // 转换成天
                if (tt < 30) {
                    updateStr = tt + "天前";
                } else {
                    updateStr = "30天前";
                }
            }
        }
    } catch (err) {
        updateStr = "31天前";
    }
    return updateStr;
};
ZBook.formatNum = function (data) {
    if (isNaN(data)) {
        return "--"
    }
    try {
        if (data < 1000000) {
            return data;
        }
        var cnt = 100;
        if (data == 1000000) {
            return cnt + "万";
        }
        for (var i = 1010000; i < 100000000; i += 10000) {
            if (data == i) {
                return (cnt + 1) + "万";
            }
            if (data < i) {
                return cnt + "万+";
            }
            cnt++;
        }
        return "9999" + "万+";
    } catch (err) {
        return "--";
    }
};

/**
 * 检查活动
 * @returns {boolean}
 */
ZBook.checkDateTime = function () {
    var s1 = new Date('2014-09-26 15:00:00');
    var s2 = new Date('2014-10-07 23:59:59');
    var n = new Date();
    return s1.getTime() < n.getTime() && s2.getTime() > n.getTime();
};

/**
 * 单位分转换成元
 * @param fen
 * @returns {*}
 */
ZBook.toYuan = function (fen) {
    fen = pint(fen, 0);
    if (fen % 100 == 0) return fen / 100;
    else {
        return pint(fen / 100, 0) + "." + pint(fen % 100 / 10, 0) + (fen % 10);
    }
};

var BOOKPIC_PREFIX = "http://wfqqreader.3g.qq.com/cover/";
function genBookPic(bid, prefix) {
    //		  o_${bookid}.[jpg|gif|png]   原图
    //        b_${bookid}.jpg    大图  140x200
    //        m_${bookid}.jpg    中图  84x120
    //        s_${bookid}.jpg    小图  70x100
    //这里统一用小图
    bid = pint(bid, 0);
    return BOOKPIC_PREFIX + bid % 1000 + "/" + bid + "/" + prefix + "_" + bid + ".jpg";
}


/**
 * 上报页面事件
 * @param eventname
 * @param eventtype
 */
function reportPageEvent(eventname, eventtype) {
    try {
        if (!eventtype) {
            eventtype = "TOPIC_EVENT";
        }
        // Local.reqaObj(logserver() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname, function (data) {
        // }, [], function () {
        // }, 1);
    } catch (e) {
    }
}

/**
 * 上报页面事件(直播的)
 * @param eventname
 * @param eventtype
 */
function reportPageEventLve(eventname, eventtype) {
    try {
        if (!eventtype) {
            eventtype = "TOPIC_EVENT";
        }
        //     Local.reqaObj(servercommon() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname + '&tf=1', function (data) {
        //     }, [], function () {
        //     }, 1);
    } catch (e) {
    }
}

/**
 * 上报页面事件(带qq)
 * @param eventname
 * @param eventtype
 */
function reportPageEvent(eventname, eventtype, qq, bid) {

    if (Local.iOS) {
        var ename = eventname;
        var etype = eventtype;
        var childname = "TOPIC_EVENT";
        try {
            //事件类型
            if (!eventtype) {
                etype = ZBook.EventType.DEFAULT;
            } else {
                childname = !nl(ZBook.ChildEventName[etype]) ? ZBook.ChildEventName[etype] : "TOPIC_EVENT";
            }
            //事件类型
            if (!eventname) {
                ename = "TOPIC_EVENT";
            }
            var url = logserver() + '/reportPageEvent?page=' + window.location.pathname + '&eventtype=' + etype + '&eventname=' + ename + "&ceventname=" + childname;
            if (param('pos')) {
                url += '&pos=' + param('pos');
            }
            if (param('adId')) {
                url += '&adId=' + param('adId');
            }
            if (bid) {
                url += '&bid=' + bid;
            }
            if (param('tid')) {
                url += '&tid=' + param('tid');
            }
            Local.reqaObj(url, function (data) {
            }, [], function () {
            }, 1);
        } catch (e) {
        }
    } else {
        try {
            if (!eventtype) {
                eventtype = "TOPIC_EVENT";
            }
            // Local.reqaObj(logserver() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname + '&qq=' + qq, function (data) {
            // }, [], function () {
            // }, 1);
        } catch (e) {
        }
    }
}

/**
 * 上报页面事件
 * @param eventname
 * @param eventtype
 */
function reportPageEventEx(callback, eventname, eventtype) {
    if (Local.iOS) {
        try {
            //事件子类型
            if (!eventname) {
                eventname = ZBook.EventType.DEFAULT;
            }
            //事件类型
            if (!eventtype) {
                eventtype = "TOPIC_EVENT";
            }
            var url = logserver() + '/reportPageEvent?page=' + window.location.pathname + '&eventtype=' + eventtype + '&eventname=' + eventname;
            if (param('pos')) {
                url += '&pos=' + param('pos');
            }
            if (param('adId')) {
                url += '&adId=' + param('adId');
            }
            Local.reqaObj(url, function (data) {
                callback();
            }, [], function () {
                callback();
            }, 1);
        } catch (e) {
        }
    } else {
        try {
            // Local.reqaObj(logserver() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname, function (data) {
            //     callback();
            // }, [], function () {
            //     callback();
            // }, 1);
        } catch (e) {
        }
    }

}

//日期格式化的函数
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};


//shily add
function isWX() {
    var ua = navigator.userAgent.toLowerCase();
    return /micromessenger(\/[\d\.]+)*/.test(ua);
}

function isMqq() {
    var ua = navigator.userAgent.toLowerCase();
    return (/qq\/(\/[\d\.]+)*/.test(ua) || /qzone\//.test(ua));
}

function isWeibo() {
    var ua = navigator.userAgent.toLowerCase();
    return /weibo(\/[\d\.]+)*/.test(ua);
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function getWXVersion() {
    var UA = navigator.userAgent;
    var reg = /MicroMessenger\/([\d\.]+)/;
    var ua_version = reg.exec(UA);
    var version = 0;
    if (ua_version) {
        var vs = ua_version[0].match(/\d+/g);
        if (vs[2] && vs[2] > 9)//微信小版本问题 如6.3.15
            vs[2] = 9;
        version = vs.join("");
    }
    return version;
}


function getFloatVersion(version) {
    try {
        var strs = version.split(".");
        if (strs.length >= 2) {
            return parseFloat(strs[0] + "." + strs[1]);
        }
    } catch (e) {
        return 0;
    }
    return 0;
}


