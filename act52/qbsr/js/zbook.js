/** 公共方法 */
var ZBook={};

ZBook.pageHide=null;
ZBook.loading=null;
ZBook.feedback=null;
ZBook.commentDialog=null;
ZBook.simpleDialog=null;
ZBook.buyTips=null;

ZBook.init=function() { // feedback 有值则初始化蒙板，反馈
	ZBook.loading=create('div',null);  
	scls(ZBook.loading,'mask_up');
	bind(ZBook.loading,'touchmove',epd);
	ih(ZBook.loading,'<div class="tip"><div class="tiparea tip_bor"><p id="loading" class="p_tc"></p></div></div>');
};
ZBook.openLoading2=function() { // 无蒙板
	ih('loading', '精彩内容加载中... ');
	myt(ZBook.loading, py());
	dv(ZBook.loading);
};
ZBook.closeLoading2=function() {  // 无蒙板
	dh(ZBook.loading);
};
//仅显示的一行提示时使用
ZBook.openTips=function(str) {
	ih('loading', str);
	myt(ZBook.loading, py());
	dv(ZBook.loading);
	delay(1500, function(){ZBook.closeLoading2();});
};
ZBook.createPageHdie=function(){
	ZBook.pageHide=create('div',null); // 蒙板
	scls(ZBook.pageHide,'mask');
	bind(ZBook.pageHide,'touchmove',epd);
};
ZBook.openPageHide=function(){
	if(nl(ZBook.pageHide)){
		ZBook.createPageHdie();
	}
	dv(ZBook.pageHide);
};
ZBook.closePageHide=function(){
	dh(ZBook.pageHide);
};
ZBook.createFeedBack=function(){
	ZBook.feedback=create('div',null);
	scls(ZBook.feedback,'tip1');
	bind(ZBook.feedback,'touchmove',epd);
	var feedstr='<div class="tip2"><div class="tiparea1"><div class="sug2"><textarea id="feedback_content" cols="" rows="" placeholder="请输入您的意见或建议"></textarea></div>';
        feedstr +='<div class="tip_btn"><a class="btn1" href="javascript:ZBook.feedbackok();">提交</a><a class="btn2" href="javascript:ZBook.feedback_cancel();">取消</a></div></div></div>';
    ih(ZBook.feedback,feedstr);
};
ZBook.openFeedBack=function(callback){ // 反馈
	if(!Login.isLogin()) {
		BaseIndex.onLogin();
		return ;
	}
	if(nl(ZBook.feedback)){
		ZBook.createFeedBack();
	}
	dv(ZBook.feedback);
	myt(ZBook.feedback, py()+ph()/4); // 定位
	ZBook.openPageHide();
};
ZBook.feedback_cancel=function(){
	dh(ZBook.feedback);
	ZBook.closePageHide();
};
ZBook.feedbackok=function (){ // 提交反馈到后台
	var content = id('feedback_content').value;
	id('feedback_content').value='';
	ZBook.feedback_cancel();
	if(nl(content.trim()) ){
		ZBook.openTips('反馈失败,反馈内容不能为空');
		return ;
	}
	ZBook.openTips('谢谢您的反馈');
	var append = document.body.id=='read'?'?bid='+Read.bid+'&cid='+Read.cid:''; // 用read页面body的id做最简单判断
	Login.postaForm(server()+'/qb/user2/feedback'+append,"content="+content);
};
ZBook.createCommentDialog=function(){ // 创建可评论对话框，公用
	ZBook.commentDialog=create('div',null);
	scls(ZBook.commentDialog,'mask_up');
	bind(ZBook.commentDialog,'touchmove',epd);
	var dialogStr='<div class="tip"><div class="tiparea"><h1 id="dialog_title"></h1><p id="dialog_msg" class="p_text"></p><p>还想和大家说点什么：</p>'
				+'<div class="sug1"><textarea id="dialog_content" maxlength="500" placeholder=""></textarea></div>'
				+'<div class="tip_btn"><a id="dialog_href" class="btn1" href="">提交</a>'
				+'<a class="btn2" href="javascript:ZBook.closeCommentDialog();">取消</a></div></div></div>';
	ih(ZBook.commentDialog,dialogStr);	
};
// 可评论公用弹窗：投月票（推荐票）成功，打赏成功
ZBook.openCommentDialog=function(title, msg, cmt, fcall){
	if(!Login.isLogin()) {
		BaseIndex.onLogin();
		return ;
	}
	if(nl(ZBook.commentDialog)){
		ZBook.createCommentDialog();
	}
	ih('dialog_title',title);
	ih('dialog_msg',msg);
	sa('dialog_content', 'placeholder', cmt);
	ahfc('dialog_href',fcall);
	dv(ZBook.commentDialog);
	myt(ZBook.commentDialog, py()); // 定位
	ZBook.openPageHide();
};
ZBook.closeCommentDialog=function(){
	dh(ZBook.commentDialog);
	ZBook.closePageHide();
};
ZBook.createSimpleDialog=function(){ // 创建简单对话框，公用
	ZBook.simpleDialog=create('div',null);
	scls(ZBook.simpleDialog,'mask_up');
	bind(ZBook.simpleDialog,'touchmove',epd);
	var dialogStr='<div class="tip"><div class="tiparea"><h1 id="dialog_title2"></h1><p id="dialog_msg2" class="p_tc"></p>'
				+'<div class="tip_btn"><a id="dialog_href2" class="btn1" href=""></a>'
				+'<a class="btn2" href="javascript:ZBook.closeSimpleDialog();">取消</a></div></div>';
	ih(ZBook.simpleDialog,dialogStr);	
};
// 简单公用弹窗 ：投月票（推荐票）失败， 打赏失败，使用包月体验卡
ZBook.openSimpleDialog=function(title, msg, btnName, fcall){
	if(!Login.isLogin()) {
		BaseIndex.onLogin();
		return ;
	}
	if(nl(ZBook.simpleDialog)){
		ZBook.createSimpleDialog();
	}
	ih('dialog_title2',title);
	ih('dialog_msg2',msg);
	ih('dialog_href2',btnName);
	ahfc('dialog_href2',fcall);
	dv(ZBook.simpleDialog);
	myt(ZBook.simpleDialog, py()); // 定位
	ZBook.openPageHide();
};
ZBook.closeSimpleDialog=function(){
	dh(ZBook.simpleDialog);
	ZBook.closePageHide();
};
ZBook.donothing=function(){};
//数字显示规则：过万精确到0.1，过10万精确到万
ZBook.numberFormat=function(count){
	if(count<10000){
		return count+' ';
	}else if(count<10000*10){
		return cint(count/1000)/10 + ' 万';
	}else{
		return cint(count/10000) + ' 万';
	}
};
//将文本超出指定长度的多余部分变成...的形式
ZBook.splitText=function(txt, length){
	if(txt.length > length) {
		return 	left(txt,length-1) + "...";
	} else {
		return txt;
	}
};
//是否完结转换成str
ZBook.isFinished=function(fin){ 
	if(fin==1){
		return '完结';
	}else if(fin==2){
		return '节选';
	}else{
		return '连载';
	}
};
ZBook.goMQQ=function() {
	go('http://info.3g.qq.com/g/s?aid=index&g_ut=3');
};
/** --- vip及收费扣费处理 小心点---- */
//跳转到包月开通
ZBook.goVipStep1=function(b_f){
	Login.checkAndInvoke(function() {
		var bf=b_f;
		if(nl(bf)){
			bf = lsg("b_f");
		}
		var url=server()+'lottery/openVIPQB?sid='+lsg('sid')+'&ku='+lsg("ku")+'&ks='+lsg("ks")+'&b_f='+bf+'&g_f='+lsg("g_f")+'&home='+window.location.href;
		go(url);
	});
};
//跳转到包月续费
ZBook.goPreFee=function(b_f){
	Login.checkAndInvoke(function() {
		var bf=b_f;
		if(nl(bf)){
			bf = lsg("b_f");
		}
		var url=server()+'/qb/vip/xufei?sid='+lsg('sid')+'&ku='+lsg("ku")+'&ks='+lsg("ks")+'&b_f=' +bf+'&g_f='+lsg("g_f")+'&home='+window.location.href.split("?")[0];		
		go(url);
	});
};
//跳转到充值中心
ZBook.chongzhi=function(b_f){ // b_f：不空用参数b_f，否则去本地b_f
	Login.checkAndInvoke(function() {
		var bf=b_f;
		if(nl(bf)){
			bf = lsg("b_f");
		}
		var back = encodeURIComponent(window.location.href);
		var url=server()+'lottery/chongzhiQB?sid='+lsg('sid')+'&ku='+lsg("ku")+'&ks='+lsg("ks") + '&b_f='+bf+'&g_f='+lsg("g_f")+'&indexPage='+BaseIndex.page()+'&currUrl='+back+"&lll=1";		
		go(url);
	});
};
ZBook.createBuyTips=function(){
	ZBook.buyTips=create('div',null);
	scls(ZBook.buyTips,'mask_up');
	bind(ZBook.buyTips,'touchmove',epd);
};
ZBook.openBuyTips=function(str){
	if(nl(ZBook.buyTips)){
		ZBook.createBuyTips();
	}
	delay(200,function(){
		ih(ZBook.buyTips,str);
		ZBook.openPageHide();
		myt(ZBook.buyTips, py());
		dv(ZBook.buyTips);
	});
};
ZBook.closeBuyTips=function(){
	dh(ZBook.buyTips);
	ZBook.closePageHide();
};

ZBook.goCateList2=function(prm,caid,scaid) {
	lss('cate.caid',caid);
	lss('cate.scaid',scaid?scaid:caid);
	lss('cate.fee',-1);
	lss('cate.finish',-1);
	lss('cate.sort',8);
	lss('cate.pnum',1);
	go('catelist.html?'+prm);
};
/*
 * 普通排行
 * @param RankType{READ,FAVOR,BUY,COMMENT,UPDATE,VOTE,UPLOAD,PUBLISH};
 *                 积分,收藏,收入,评论,更新时间,评分,上传,发布时间
 * @param datetype {all=-1,day=0,week=1,month=2};   
 * @param sex      {ALL=-1,NOMAL=0,MALE=1,FEMALE=2};
 * @param finish   {ALL=-1,NO=0,YE=1S,NEW=2};
 * @param feeType     RankFree{ALL=-1,YUANBAO,FREE,VIP,CHARGE=7（元宝和vip）,CHAPTER=8,FULL=9};
 * @param form     形式：PortalRankForm{ALL=-1,ORIGINAL,PUBLISH};
 */
ZBook.goSortList5=function(url,rankType,dateType,sex,finish,feeType,form){
	lss('sort5.rankType',rankType);
	lss('sort5.dateType',dateType);
	lss('sort5.sex',sex);
	lss('sort5.finish',finish);
	lss('sort5.feeType',feeType);
	lss('sort5.form',form);
	lss('sort5.page',1);
	go(url);
};
ZBook.goSortList52=function(prm,rankType,dateType,sex,finish,feeType,form){
	lss('sort5.rankType2',rankType);
	lss('sort5.dateType2',dateType);
	lss('sort5.sex2',sex);
	lss('sort5.finish2',finish);
	lss('sort5.feeType2',feeType);
	lss('sort5.form2',form);
	lss('sort5.page2',1);
	go('sortlist2.html?'+prm);
};
ZBook.goFinish=function(prm,channel,finish,feeType,sortType){  // 例： url=finish.html?b_f=100100
	lss('finish.channel',channel);
	lss('finish.finish',finish);
	lss('finish.feeType',feeType);
	lss('finish.sortType',sortType);
	lss('finish.page',1);
	go('finish.html?'+prm);
};
ZBook.goSearch=function(b_f){
	lss('search.key5','');
	if(b_f){go('search.html?b_f='+b_f);	}else{	go('search.html');}
};
ZBook.gotoSearch=function(b_f){     // 搜索框用 ，例： url=search.html?b_f=505100
	var key = id('searchkey').value;
	if(nl(key) || key.length<1){
		ZBook.openTips('搜索内容不能为空');
		return;
	}
	lss('search.key5',key);
	lss('search.pid5',1);
	if(b_f){go('search.html?b_f='+b_f);	}else{	go('search.html');}
};
ZBook.authorSearch=function(author,b_f) { //详情页搜作者
	lss('search.key5',author);
	lss('search.pid5',1);
	if(b_f){go('search.html?b_f='+b_f);	}else{	go('search.html');}	
};


ZBook.bindActiveByClassName = function (cls, feid) {
    var es;
    if (feid) {
        es = id(feid).getElementsByClassName(cls);
    } else {
        es = document.getElementsByClassName(cls);
    }
    for (var i = 0; i < es.length; i++) {
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