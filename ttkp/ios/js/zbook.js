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
}


ZBook.init = function () {
    Local.init();
    init();
    ZBook.doaccesslog();
    document.ondragstart = function () {
        return   false;
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
}

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
}

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

ZBook.finishUnit = function (fin) {
    if (fin == 1) {
        return '共';
    } else if (fin == 2) {
        return '共';
    } else {
        return '至';
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
        return    left(txt, length - 1) + "...";
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
 * @param fOnlyFlag 只处理父节点,默认为false
 */
ZBook.bindActiveCssByTagName = function (eTagname, feid, fOnlyFlag) {
	if(fOnlyFlag){
		 if (feid && id(feid)) {
		       addEvent(id(feid));
		 } 		
	}else{
		var es;
	    if (feid && id(feid)) {
	        es = id(feid).getElementsByTagName(eTagname);
	    } else {
	        es = document.getElementsByTagName(eTagname);
	    }
	
	    for (var i = 0; i < es.length; i++) {
		   //if (es[i].tagName == 'li' || es[i].tagName == 'LI' || es[i].tagName == 'dl' || es[i].href || es[i].onclick) {
			if ((es[i].href || es[i].onclick) && es[i].href != "javascript:void(0);" && es[i].onclick != "javascript:void(0);" && es[i].href != "#"){
				if (es[i].tagName.toLowerCase() == eTagname || es[i].href) {
					es[i].className = es[i].className.replace(" active", "");
					addEvent(es[i]);
				}
			}
	    		
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
        if (!hasEvent(obj, ZBook.start_ev)) {
            obj.addEventListener(ZBook.start_ev, function (e) {
            	cancelBubble(e);
                t1 = setTimeout(function () {
                    obj.className = obj.className + " active";
                }, 200);
            });
        }
        if (!hasEvent(obj, ZBook.move_ev)) {
            obj.addEventListener(ZBook.move_ev, function (e) {
            	cancelBubble(e);
                clearTimeout(t1);
                obj.className = obj.className.replace(" active", "");
            });
        }
        if (!hasEvent(obj, ZBook.end_ev)) {
            obj.addEventListener(ZBook.end_ev, function (e) {
            	cancelBubble(e);
                clearTimeout(t1);
                obj.className = obj.className.replace(" active", "");
            });
        }
     }
    function cancelBubble(evt) {
    	if (evt.stopPropagation) {
			evt.stopPropagation();
		} else {
			if (!evt.cancelBubble) {
				evt.cancelBubble = true;
			}
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
ZBook.formatNum = function(data){
	if(isNaN(data)){ 
		return "--"
	};
	try{
		if(data<1000000){
			return data;
		}
		var cnt =100;
		if(data==1000000){
			return cnt + "万";
		}
		for(var i=1010000;i<100000000;i+=10000){
			if(data==i){
				return (cnt+1) + "万";
			}
			if(data<i){
				return cnt + "万+";
			}
			cnt++;
		}
		return "9999" +"万+";
	}catch(err){
		return "--";
	}
};

/**
 * 适配ipad横屏页面宽度的适配问题(横屏页面高度1024,实际页面宽度被拉伸致1280)
 * 
 * @param eid
 */
ZBook.orientationAdap = function(eid, isIpad) {
	if (eid && isIpad) {
		if (window.orientation == 90 || window.orientation == -90) {
			ss(eid, "width", window.screen.height + "px");
			bind(window, "orientationchange", function() {
				if (window.orientation == 90 || window.orientation == -90) {
					ss(eid, "width", window.screen.height + "px");
				} else {
					ss(eid, "width", window.screen.width + "px");
				}
			});
		}
	}
};

function reportPageEvent(eventname, eventtype,logger) {
    try {
        if (!eventtype) {
            eventtype = "DEF_EVENT";
        }
        if(!logger){
        	logger = "abook_common"
        }
        Local.reqaObj(server() + 'reportPageEvent?eventtype=' + eventtype + '&eventname=' + eventname+'&logger='+logger, function (data) {
        }, [], function () {
        }, 1);
    } catch (e) {
    }
}
