/**
 * 广告处理
 */
(function (window) {

    window.adbox = {

        initData: function () {
            return {
                img_sw_obj: {
                    ids: [],
                    ids2: [],
                    ids3: [],
                    touchsbool: false,
                    img_index: 0,
                    img_em_index: 0,
                    nextlfix: -320,
                    nextrfix: 320,
                    changelimit: 60  //这里设置滑动的时间间隔
                },
                adtimer: {},
                timeclick: 0,
                moveboolean: false,
                singleAd: true
            }
        },

        init: function (adObj, fatherid) {
            if (!nl(adObj) && adObj.length >= 1) {
                window.adbox[fatherid] = this.initData();
                this.initDiv(adObj, fatherid);
                this.initWidth(adObj.length, fatherid);
                this.bindImgTouch(fatherid);
            }
        },

        initwithXY: function (adObj, fatherid, X, Y) {
            if (!nl(adObj) && adObj.length >= 1) {
                window.adbox[fatherid] = this.initData();
                this.initDiv(adObj, fatherid);
                this.initWidth(adObj.length, fatherid, X, Y);
                this.bindImgTouch(fatherid);
            }
        },

        bindImgTouch: function (fatherid) {
            var isTouch = 'ontouchstart' in window;
            var start_ev = isTouch ? 'touchstart' : 'mousedown';
            var move_ev = isTouch ? 'touchmove' : 'mousemove';
            var end_ev = isTouch ? 'touchend' : 'mouseup';

            bind(fatherid + '_imgfbox', start_ev, this.touchStart);
            bind(fatherid + '_imgfbox', move_ev, this.touchMove);
            bind(fatherid + '_imgfbox', end_ev, this.touchEnd);
            if (!window.adbox[fatherid].singleAd) {
                window.adbox[fatherid].adtimer = setTimeout(function () {
                    window.adbox.dochange("toleft", fatherid);
                }, 6000);
            }
        },


        initDiv: function (adObj, fatherid) {
            var adStr = "";
            if (!nl(adObj)) {
                var length = adObj.length;
                if (length > 1) {
                    window.adbox[fatherid].singleAd = false;
                    adStr = "<div id='" + fatherid + "_imgfbox' class='fbox' style='z-index: 9999;'>";
                    for (var i = 0; i < adObj.length; i++) {
                        if (i == 0) {
                            adStr = adStr + "<div id='" + fatherid + "_img_" + i + "_1' class='cbox shownow' data-origin='" + adObj[i].origin + "' data-url='" + adObj[i].url + "'><img src='" + adObj[i].image + "' ></div>";
                        } else {
                            var j = length - i;
                            adStr = adStr + "<div id='" + fatherid + "_img_" + i + "_1' class='cbox rightbox' data-origin='" + adObj[j].origin + "' data-url='" + adObj[j].url + "'><img src='" + adObj[j].image + "' ></div>";
                        }

                    }
                    for (var i = 0; i < adObj.length; i++) {
                        var j;
                        if (i == 0) {
                            j = i;
                        } else {
                            j = length - i;
                        }
                        adStr = adStr + "<div id='" + fatherid + "_img_" + i + "_2' class='cbox leftbox' data-origin='" + adObj[j].origin + "' data-url='" + adObj[j].url + "'><img src='" + adObj[j].image + "' ></div>";
                    }
                    adStr = adStr + "<div class='page'>";
                    for (var i = 0; i < adObj.length; i++) {
                        if (i == 0) {
                            adStr = adStr + "<em id='" + fatherid + "_em_" + i + "_1' class='act'></em>";
                        } else {
                            adStr = adStr + "<em id='" + fatherid + "_em_" + i + "_1'></em>";
                        }
                    }
                    adStr = adStr + "</div>";
                } else {
                    adStr = "<div id='" + fatherid + "_imgfbox' class='fbox' style='z-index: 9999;'>";
                    adStr = adStr + "<div id='" + fatherid + "_common_ad' class='cbox shownow' data-origin='" + adObj[0].origin + "' data-url='" + adObj[0].url + "'><img src='" + adObj[0].image + "' ></div>";
                }
            }
            adStr = adStr + "</div>";
            ih(fatherid, adStr);
        },

        initWidth: function (adcount, fatherid, X, Y) {
            document.ondragstart = function () {
                return   false;
            };
            var ex_width = document.documentElement.clientWidth;
            var ex_height = ex_width * 160 / 320;
            window.adbox[fatherid].img_sw_obj.w = pw();
            window.adbox[fatherid].img_sw_obj.h = pw() * 160 / 320;
            if (!nl(X) && !nl(Y)) {
                ex_height = ex_width * Y / X;
                window.adbox[fatherid].img_sw_obj.w = pw();
                window.adbox[fatherid].img_sw_obj.h = pw() * Y / X;
            }
            if (adcount == 1) { //单条广告
                mwt(fatherid + '_imgfbox', ex_width);
                mht(fatherid + '_imgfbox', ex_height);
                mwt(fatherid + "_common_ad", ex_width);
                mht(fatherid + "_common_ad", ex_height);
                window.adbox[fatherid].img_sw_obj.shownow = id(fatherid + '_common_ad');
            } else {
                mwt(fatherid + '_imgfbox', ex_width);
                mht(fatherid + '_imgfbox', ex_height);
                for (var i = 0; i < adcount; i++) { //多条广告
                    mwt((fatherid + '_img_' + i + '_1'), ex_width);
                    mht((fatherid + '_img_' + i + '_1'), ex_height);
                    mwt((fatherid + '_img_' + i + '_2'), ex_width);
                    mht((fatherid + '_img_' + i + '_2'), ex_height);
                    if (i != 0) {
                        ss((fatherid + '_img_' + i + '_1'), '-webkit-transform', ('translate3d(' + ex_width + 'px, 0px, 0px)'));
                    }
                    ss((fatherid + '_img_' + i + '_2'), '-webkit-transform', ('translate3d(' + (-ex_width) + 'px, 0px, 0px)'));
                    window.adbox[fatherid].img_sw_obj.ids[i] = (fatherid + '_img_' + i + '_1');
                    window.adbox[fatherid].img_sw_obj.ids2[i] = (fatherid + '_img_' + i + '_2');
                    window.adbox[fatherid].img_sw_obj.ids3[i] = (fatherid + '_em_' + i + '_1');
                }
                window.adbox[fatherid].img_sw_obj.nextlfix = -ex_width;
                window.adbox[fatherid].img_sw_obj.nextrfix = ex_width;
            }
        },


        reinit: function (fatherid) {
            window.adbox[fatherid].img_sw_obj.xc = 0;
        },

        touchStart: function (event) {
            var fatherid = this.id.substr(0, this.id.indexOf('_'));
            clearTimeout(window.adbox[fatherid].adtimer);
            if (!window.adbox[fatherid].singleAd) {
                window.adbox.setNextObj(fatherid);
                window.adbox[fatherid].img_sw_obj.tmpleft1 = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
                window.adbox[fatherid].img_sw_obj.tmp4 = event.targetTouches ? event.targetTouches[0].clientY : event.clientY;
                window.adbox[fatherid].img_sw_obj.shownowleft = 0;
                window.adbox[fatherid].img_sw_obj.touchsbool = true;
                window.adbox[fatherid].moveboolean = false;
            }
            this.timeclick = new Date().getTime();
            Local.onTouchStart();
        },

        touchMove: function (event) {
            var fatherid = this.id.substr(0, this.id.indexOf('_'));
            if (window.adbox[fatherid].img_sw_obj.touchsbool && !window.adbox[fatherid].singleAd) {
                window.adbox.setNextObj(fatherid);
                window.adbox[fatherid].img_sw_obj.tmpleft2 = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
                window.adbox[fatherid].img_sw_obj.tmp3 = event.targetTouches ? event.targetTouches[0].clientY : event.clientY;
                window.adbox[fatherid].img_sw_obj.xc = window.adbox[fatherid].img_sw_obj.tmpleft2 - window.adbox[fatherid].img_sw_obj.tmpleft1;
                window.adbox[fatherid].img_sw_obj.xbc = window.adbox[fatherid].img_sw_obj.tmp3 - window.adbox[fatherid].img_sw_obj.tmp4;
                window.adbox[fatherid].img_sw_obj.eTmp = window.adbox[fatherid].img_sw_obj.tmpleft2;
                if (Math.abs(window.adbox[fatherid].img_sw_obj.xbc) < Math.abs(window.adbox[fatherid].img_sw_obj.xc) && Math.abs(window.adbox[fatherid].img_sw_obj.xbc) < 300) {
                    event.preventDefault();
                    ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transition', 'all 0s');
                    ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transform', 'translate3d(' + (window.adbox[fatherid].img_sw_obj.shownowleft + window.adbox[fatherid].img_sw_obj.xc) + 'px, 0px, 0px)');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowlo, '-webkit-transition', 'all 0s');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowlo, '-webkit-transform', 'translate3d(' + (window.adbox[fatherid].img_sw_obj.nextlfix + window.adbox[fatherid].img_sw_obj.xc) + 'px, 0px, 0px)');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowro, '-webkit-transition', 'all 0s');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowro, '-webkit-transform', 'translate3d(' + (window.adbox[fatherid].img_sw_obj.nextrfix + window.adbox[fatherid].img_sw_obj.xc) + 'px, 0px, 0px)');
                }
                if (Math.abs(window.adbox[fatherid].img_sw_obj.xc) > window.adbox[fatherid].img_sw_obj.changelimit && Math.abs(window.adbox[fatherid].img_sw_obj.xbc) < 300) {
                    event.preventDefault();
                }
            }
        },

        touchEnd: function (event) {
            var fatherid = this.id.substr(0, this.id.indexOf('_'));
            if (!window.adbox[fatherid].singleAd) {
                window.adbox[fatherid].img_sw_obj.touchsbool = false;
                if (window.adbox[fatherid].img_sw_obj.xc > window.adbox[fatherid].img_sw_obj.changelimit && window.adbox[fatherid].img_sw_obj.xbc < 300) {
                    window.adbox.dochange('toright', fatherid);
                    window.adbox[fatherid].moveboolean = true;
                } else if (window.adbox[fatherid].img_sw_obj.xc < -window.adbox[fatherid].img_sw_obj.changelimit && window.adbox[fatherid].img_sw_obj.xbc < 300) {
                    window.adbox.dochange('toleft', fatherid);
                    window.adbox[fatherid].moveboolean = true;
                } else {
                    ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transition', 'all 0.3s');
                    ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transform', 'translate3d(0px, 0px, 0px)');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowlo, '-webkit-transition', 'all 0.3s');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowlo, '-webkit-transform', 'translate3d(' + (-window.adbox[fatherid].img_sw_obj.w) + 'px, 0px, 0px)');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowro, '-webkit-transition', 'all 0.3s');
                    ss(window.adbox[fatherid].img_sw_obj.nextshowro, '-webkit-transform', 'translate3d(' + window.adbox[fatherid].img_sw_obj.w + 'px, 0px, 0px)');
                    if (!window.adbox[fatherid].singleAd) {
                        window.adbox[fatherid].adtimer = setTimeout(function () {
                            window.adbox.dochange("toleft", fatherid);
                        }, 6000);
                    }
                    window.adbox[fatherid].moveboolean = false;
                }
                window.adbox.reinit(fatherid);
            }
            Local.onTouchEnd();
            var clickmu = new Date().getTime() - this.timeclick;
            var url = window.adbox[fatherid].img_sw_obj.shownow.getAttribute('data-url');
            var origin = window.adbox[fatherid].img_sw_obj.shownow.getAttribute('data-origin');
            if (!window.adbox[fatherid].moveboolean && clickmu < 200) {
                Local.openPage(url, origin);
            }
        },

        setNextObj: function (fatherid) {
            try {
                window.adbox[fatherid].img_sw_obj.nextshowloi = window.adbox[fatherid].img_sw_obj.img_index == window.adbox[fatherid].img_sw_obj.ids.length - 1 ? 0 : window.adbox[fatherid].img_sw_obj.img_index + 1;
                window.adbox[fatherid].img_sw_obj.nextshowroi = window.adbox[fatherid].img_sw_obj.img_index == 0 ? window.adbox[fatherid].img_sw_obj.ids.length - 1 : window.adbox[fatherid].img_sw_obj.img_index - 1;

                window.adbox[fatherid].img_sw_obj.nextshowemloi = window.adbox[fatherid].img_sw_obj.img_em_index == window.adbox[fatherid].img_sw_obj.ids.length - 1 ? 0 : window.adbox[fatherid].img_sw_obj.img_em_index + 1;
                window.adbox[fatherid].img_sw_obj.nextshowemroi = window.adbox[fatherid].img_sw_obj.img_em_index == 0 ? window.adbox[fatherid].img_sw_obj.ids.length - 1 : window.adbox[fatherid].img_sw_obj.img_em_index - 1;

                var w11 = id(window.adbox[fatherid].img_sw_obj.ids[window.adbox[fatherid].img_sw_obj.nextshowloi]);
                var w12 = id(window.adbox[fatherid].img_sw_obj.ids[window.adbox[fatherid].img_sw_obj.nextshowroi]);
                var w21 = id(window.adbox[fatherid].img_sw_obj.ids2[window.adbox[fatherid].img_sw_obj.nextshowloi]);
                var w22 = id(window.adbox[fatherid].img_sw_obj.ids2[window.adbox[fatherid].img_sw_obj.nextshowroi]);

                window.adbox[fatherid].img_sw_obj.nextshowlo = w11;
                if (!(w11.className.indexOf("leftbox") >= 0)) {
                    window.adbox[fatherid].img_sw_obj.nextshowlo = w21;
                }
                window.adbox[fatherid].img_sw_obj.nextshowro = w12;
                if (!(w12.className.indexOf("rightbox") >= 0)) {
                    window.adbox[fatherid].img_sw_obj.nextshowro = w22;
                }

                var s1 = id(window.adbox[fatherid].img_sw_obj.ids[window.adbox[fatherid].img_sw_obj.img_index]);
                var s2 = id(window.adbox[fatherid].img_sw_obj.ids2[window.adbox[fatherid].img_sw_obj.img_index]);
                window.adbox[fatherid].img_sw_obj.shownow = s1;
                window.adbox[fatherid].img_sw_obj.tmp = s2;
                if (!(s1.className.indexOf("shownow") >= 0)) {
                    window.adbox[fatherid].img_sw_obj.shownow = s2;
                    window.adbox[fatherid].img_sw_obj.tmp = s1;
                }
            } catch (e) {
            }
        },

        dochange: function (dp, fatherid) {
            window.adbox.setNextObj(fatherid);
            var nextshow = window.adbox[fatherid].img_sw_obj.nextshowlo;
            var d1 = "leftbox";
            var d2 = "rightbox";
            var nextshowemindex = window.adbox[fatherid].img_sw_obj.nextshowemroi;
            var nextshowindex = window.adbox[fatherid].img_sw_obj.nextshowloi;
            if ('toleft' == dp) {
                d1 = "rightbox";
                d2 = "leftbox";
                nextshow = window.adbox[fatherid].img_sw_obj.nextshowro;
                nextshowindex = window.adbox[fatherid].img_sw_obj.nextshowroi;
                nextshowemindex = window.adbox[fatherid].img_sw_obj.nextshowemloi;
            }

            var emobjNext = id(window.adbox[fatherid].img_sw_obj.ids3[nextshowemindex]);
            var emobjNow = id(window.adbox[fatherid].img_sw_obj.ids3[window.adbox[fatherid].img_sw_obj.img_em_index]);

            scls(emobjNow, "");
            scls(emobjNext, "act");

            ss(window.adbox[fatherid].img_sw_obj.nextshowro, '-webkit-transition', 'all 0.3s');
            ss(window.adbox[fatherid].img_sw_obj.nextshowlo, '-webkit-transition', 'all 0.3s');
            ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transition', 'all 0.3s');


            scls(window.adbox[fatherid].img_sw_obj.shownow, ("cbox " + d2));
            if (d2 == "rightbox") {
                ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transform', 'translate3d(' + window.adbox[fatherid].img_sw_obj.nextrfix + 'px, 0px, 0px)');
            } else {
                ss(window.adbox[fatherid].img_sw_obj.shownow, '-webkit-transform', 'translate3d(' + window.adbox[fatherid].img_sw_obj.nextlfix + 'px, 0px, 0px)');
            }
            scls(nextshow, "cbox shownow");
            ss(nextshow, '-webkit-transform', 'translate3d(0px, 0px, 0px)');
            if ((window.adbox[fatherid].img_sw_obj.tmp.className.indexOf(d2) >= 0)) {
                ss(window.adbox[fatherid].img_sw_obj.tmp, '-webkit-transition', 'all 0s');
                scls(window.adbox[fatherid].img_sw_obj.tmp, "cbox " + d1);
                if (d1 == "rightbox") {
                    ss(window.adbox[fatherid].img_sw_obj.tmp, '-webkit-transform', 'translate3d(' + window.adbox[fatherid].img_sw_obj.nextrfix + 'px, 0px, 0px)');
                } else {
                    ss(window.adbox[fatherid].img_sw_obj.tmp, '-webkit-transform', 'translate3d(' + window.adbox[fatherid].img_sw_obj.nextlfix + 'px, 0px, 0px)');
                }
            }
            window.adbox[fatherid].img_sw_obj.img_index = nextshowindex;
            window.adbox[fatherid].img_sw_obj.img_em_index = nextshowemindex;
            if (!window.adbox[fatherid].singleAd) {
                window.adbox[fatherid].adtimer = setTimeout(function () {
                    window.adbox.dochange("toleft", fatherid);
                }, 6000);
            }
        }
    };


}(this));