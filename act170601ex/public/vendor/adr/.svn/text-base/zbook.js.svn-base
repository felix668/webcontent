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


ZBook.doaccesslog = function () {
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

    try { //load页面之先进行访问日志的打印,强制刷新请求
        Local.reqaObj(servercommon() + "/accesslog?page=" + getPageName() + '&id=' + id, function () {
        }, [], function () {
        }, 1);
    } catch (e) {
//        console.log(e);
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
    if (this.onclick != null) {
        var args = ["click", function () {
        }, false];
        this.eventMarks.push(args);
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
            for (var args in obj.eventMarks) {
                if (args[0] == eventName) {
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
            obj.addEventListener(ZBook.start_ev, function () {
                t1 = setTimeout(function () {
                    obj.className = obj.className + " active";
                    t2 = setTimeout(function () {
                        obj.className = obj.className.replace(" active", "");
                    }, 2000)
                }, 20);
            });
        }
        if (!hasEvent(obj, ZBook.move_ev)) {
            obj.addEventListener(ZBook.move_ev, function () {
                clearTimeout(t1);
                clearTimeout(t2);
                obj.className = obj.className.replace(" active", "");
            });
        }
        if (!hasEvent(obj, ZBook.end_ev)) {
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
    ;
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

ZBook.gohrefwithexparam = function (url) {
    window.location.href = Local.getTransparentParam(url);
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
 * 上报页面事件
 * @param eventname
 * @param eventtype
 */
function reportPageEvent(eventname, eventtype) {
    try {
        Local.reqaObj(servercommon() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname, function (data) {
        }, [], function () {
        }, 1);
    } catch (e) {
    }
}

/**
 * 上报页面事件
 * @param eventname
 * @param eventtype
 */
function reportPageEventEx(callback, eventname, eventtype) {
    try {
        Local.reqaObj(servercommon() + '/reportPageEvent?eventtype=' + (eventtype ? eventtype : '') + '&eventname=' + eventname, function (data) {
            callback();
        }, [], function () {
            callback();
        }, 1);
    } catch (e) {
    }
}

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


function getFloatVersion(version) {
    try{
        var strs = version.split(".");
        if (strs.length >= 2) {
            return parseFloat(strs[0] + "." + strs[1]);
        }
    }catch(e){
        return 0;
    }
    return 0;
}