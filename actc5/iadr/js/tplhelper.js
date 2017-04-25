template.helper('imgsizex', function (x, y) {
    return document.documentElement.clientWidth;
});

template.helper('imgsizey', function (x, y) {
    var w = document.documentElement.clientWidth;
    return w * y / x;
});

template.helper('imgsizex28', function () {
    return document.documentElement.clientWidth - 28;
});

template.helper('imgsizey28', function (x, y) {
    var w = document.documentElement.clientWidth - 28;
    if (x && y) {
        return w * y / x;
    } else {
        return w * 200 / 300;
    }
});

template.helper('url', function (url) {
    if (!url || url.length <= 0) {
        return "javascript:void(0);";
    }
    if (url.indexOf('javascript:') >= 0) {
        return url;
    } else {
        return "javascript:Local.openPage('" + url + "')";
    }
});

template.helper('searchurl', function (key) {
    return "javascript:Local.openPage('search.html?key=" + key + "')";
});

template.helper('topicurl', function (tid) {
    return "javascript:Local.openPage('newTopic.html?tid=" + tid + "')";
});

template.helper('detailurl', function (bid) {
    return "javascript:Local.openPage('bookDetail.html?bid=" + bid + "')";
});

template.helper('categoryurl', function (cid, cname) {
    return "javascript:Local.goCategory('" + cid + "',' " + cname + "',1)";
});

template.helper('numberFormat', function (count) {
    if (count < 10000) {
        return count + ' ';
    } else if (count < 10000 * 10) {
        return cint(count / 1000) / 10 + ' 万';
    } else {
        return cint(count / 10000) + ' 万';
    }
});

template.helper('numchange', function (num) {
    return !num || num <= 0 ? "——" : num;
});

template.helper('splitText', function (txt, length) {
    if (txt.length > length) {
        return left(txt, length - 1);
    } else {
        return txt;
    }
});

template.helper('splitTextSuffix', function (txt, arr) {
    var length = arr[0];
    var suffix = arr[1];
    if (txt.length > length) {
        return left(txt, length - 1) + suffix;
    } else {
        return txt;
    }
});

template.helper('isFinished', function (fin) {
    if (fin == 1) {
        return '完结';
    } else if (fin == 2) {
        return '节选';
    } else {
        return '连载';
    }
});

/**
 * 书籍TAG解析
 */
template.helper('tagshow', function (tag) {
    var m = "";
    var tmp = tag.split(',');
    for (var i = 0; i < tmp.length; i++) {
        m = m + "<em>" + tmp[i] + "</em>";
    }
    return m;
});

template.helper('limitTime', function (tmp2, tmp) {
    var limitLeftTime = '';
    if (tmp.first != 0) {
        limitLeftTime += tmp.first + '天'
    }
    if (tmp.second != 0) {
        limitLeftTime += tmp.second + '时'
    }
    if (tmp.third != 0) {
        limitLeftTime += tmp.third + '分'
    }
    return limitLeftTime;
});

template.helper('updatetime', function (updatetime) {
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
});

template.helper('timeFormat', function (timestamp) {
    var time = "";
    var datetime = new Date(parseInt(timestamp));
    try {
        time = datetime.format("yyyy-MM-dd hh:mm:ss");
    } catch (err) {
    }
    return time;
});
template.helper('nl', function (obj) {
    return obj == undefined || obj == null || obj == '';
});
template.helper('val', function (val, def) {
    if (val == undefined || val == null || val == '') {
        return def;
    } else {
        return val;
    }
});
template.helper('postread', function (curpos, lastpos) {
    if (lastpos == 0) {
        if (curpos > lastpos) return "";
    }
    if (curpos == 0) {
        if (lastpos > curpos) return "down";
    }
    if (curpos < lastpos) {
        return "";
    } else if (curpos > lastpos) {
        return "down";
    } else {
        return "negative";
    }
});
template.helper('formatNum', function (data) {
    if (isNaN(data)) {
        return "--";
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
});

template.helper('formatNumV2', function (data) {
    if (isNaN(data)) {
        return "--";
    }
    try {
        if (data < 10000) {
            return data;
        } else if (data < 1000000) {
            return (data / 10000).toFixed(1) * 1 + "万";
        } else if (data < 100000000) {
            return (data / 10000).toFixed(0) + "万";
        } else {
            return (data / 100000000).toFixed(1) * 1 + "亿";
        }
    } catch (err) {
        return "--";
    }
});

//四合五入输入万，小数长度为len
template.helper('mathRound', function (str, len) {
    if (str < 10000) {
        return str;
    }
    return Math.round(str / 10000 * Math.pow(10, len)) / Math.pow(10, len) + "万";
});


//文字格式转换
template.helper('textformat', function (str, pstyle) {

    str = template.changeEnter(str, pstyle, false);

    str = str.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&#62;/g, '>')
        .replace(/&lt;/g, '<').replace(/&#60;/g, '<').replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

    //去除前部的空白字符
    while (str.charAt(0).match(/\s+/g)) {
        str = str.slice(1);
    }

    if (str.charAt(0) == '<') {
        return str;
    }

    var x = str.charAt(0);
    var tmp = str.slice(1);

    return "<b>" + x + "</b>" + tmp;
});


//文字格式转换
template.changeEnter = function (str, pstyle, needLenghtContorl) {
    var splitstr = str.split(/\n+/g);
    var strnew = '';
    var x = needLenghtContorl ? 3 : splitstr.length;

    if (pstyle == 'checkEnterTimes') {
        pstyle = checkEnterTimes(str);
    }

    for (var i = 0; i < splitstr.length && i < x; i++) {
        if (pstyle) {
            strnew = strnew + splitstr[i] + '</p><p class="' + pstyle + '">';
        } else {
            strnew = strnew + splitstr[i] + '</p><p>';
        }
    }
    str = strnew;
    return str;
};


template.helper('splittxt', function (str, pstyle) {
    str = template.changeEnter(str, pstyle);
    str = str.replace(/&#60;br\/&#62;/g, '<br/>').replace(/&lt;br\/&gt;/g, '<br/>');
    return str;
});

/**
 * 处理评论中的html代码
 * @returns {string}
 */
template.helper('escapeHTML', function (str) {
    return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, "&#39;");
});

/**
 * 将escape过的HTML再反解回来
 * @private
 */
template.helper('unEscapeHTML', function (str) {
    return str.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&#62;/g, '>')
        .replace(/&lt;/g, '<').replace(/&#60;/g, '<').replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
});

/**
 * 将escape过的HTML再反解回来
 * @private
 */
template.helper('unEscapebr', function (str) {
    return str.replace(/&#60;br\/&#62;/g, '<br/>').replace(/&lt;br\/&gt;/g, '<br/>');
});


/**
 * 过滤空格
 * @private
 */
template.helper('filterspace', function (str) {
    return str.replace(/\s+/g, '');
});

/**
 * 设置详情页书籍评星
 */
template.helper('bookstar', function (mark) {
	if (mark > 50) {
		mark = (mark / 100); //为了兼容以前单书(Element27)将书籍分数*100
	}
	mark = Math.round(mark*100)/100; //四舍五入保留2位小数
    var m = "";
    for (var i = 0; i < 5; i++) {
        if ((i + 1) * 1 > mark && mark > i * 1) {
            m += '<em class="start_2"></em>';
        } else if ((i + 1) * 1 < mark) {
            m += '<em class="start_1"></em>';
        } else if ((i + 1) * 1 > mark) {
            m += '<em class="start_3"></em>';
        } else {
            m += '<em class="start_1"></em>';
        }
    }
    m += '<i>' + mark / 1 + '分</i>';
    return m;
});

/**
 * 设置书封大小
 */
template.helper('resizecover', function (src, size) {
    if (!src || src.length <= 0) {
        return src;
    }
    try {
        var index = src.lastIndexOf("/");
        var pre = src.substring(0, index + 1);
        var sur = src.substring(index + 2, src.length);
        return pre + size + sur;
    } catch (e) {
        return src;
    }
});

function checkEnterTimes(str) {
    return (str.match(/\n+/g) != null && str.match(/\n+/g).length >= 2) ? "limit1" : "limit3";
}
/**
 * 判断回车换行数量
 * 大于等于2个则返回limit1
 * 否则limit3
 * @private
 */
template.helper('checkEnterTimes', function (str) {
    return checkEnterTimes(str);
});
