//本模块依赖local.js。

var ZBook = (function( Local ){

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

    ZBook.init = function () {
        Local.init();
        init();
        ZBook.doaccesslog();
        document.ondragstart = function () {
            return false;
        };
    };

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

    ZBook.donothing = function () {
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

    ZBook.gohrefwithexparam = function (url) {
        window.location.href = Local.getTransparentParam(url);
    };

    ZBook.bindActiveByClassName = function (cls, feid) {
        var es;
        if (feid) {
            es = id(feid).getElementsByClassName(cls);
        } else {
            es = document.getElementsByClassName(cls);
        }
        for (var i = 0; i < es.length; i++) {
    //    	console.log(es[i].tagName);
            if (es[i].tagName.toLowerCase() == 'div' ||es[i].tagName.toLowerCase() =='li' || es[i].href || es[i].onclick||es[i].tagName.toLowerCase()== 'span' ) {
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

    function genBookPic(bid, prefix) {
    	prefix = prefix || 's';
    	if (bid) {
    		return 'http://wfqqreader.3g.qq.com/cover/' + (bid % 1000) + "/" + bid + "/" + prefix + "_" + bid + ".jpg";
    	}
    	return 'http://wfqqreader.3g.qq.com/cover/' + prefix + "_default.jpg";
    }

    //将ZBook对象暴露给模块外部。
    return ZBook;

})( Local );