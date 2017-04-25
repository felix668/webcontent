/** 公共方法 */
var ZBook={};

ZBook.pageHide=null;
ZBook.loading=null;
ZBook.feedback=null;
ZBook.commentDialog=null;
ZBook.simpleDialog=null;
ZBook.buyTips=null;
ZBook.buyFull_URL='';
ZBook.buyChapter_URL='';
ZBook.cancelNotice_URL='';
ZBook.checkDefaultNotice=true;
ZBook.EIGHT_HOUR_MILLSSECONDS = 28800000;
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
ZBook.openFeedBack=function(dftmsg){ // 反馈
	if(!Login.isLogin()) {
		BaseIndex.onLogin();
		return ;
	}
	if(nl(ZBook.feedback)){
		ZBook.createFeedBack();
	}
	sa('feedback_content','placeholder',dftmsg?dftmsg:'请输入您的意见或建议');
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
	var fbtime = lsg('feedbacktime');
	if(nl(fbtime) || cint(fbtime)+ZBook.EIGHT_HOUR_MILLSSECONDS<time()){
		var append = document.body.id=='read'?'?bid='+Read.bid+'&cid='+Read.cid:''; // 用read页面body的id做最简单判断
		Login.postaForm(server()+'/8/user/feedback'+append,"content="+content);
		lss('feedbacktime',time()); 
	}
};
ZBook.createCommentDialog=function(){ // 创建可评论对话框，公用
	ZBook.commentDialog=create('div',null);
	scls(ZBook.commentDialog,'mask_up');
	bind(ZBook.commentDialog,'touchmove',epd);
	var dialogStr='<div class="tip"><div class="tiparea"><h1 id="dialog_title"></h1><p id="dialog_msg" class="p_text"></p><p>还想和大家说点什么：</p>'
				+'<div class="sug1"><textarea id="dialog_content" maxlength="3000" placeholder=""></textarea></div>'
				+'<div class="tip_btn"><a id="dialog_href" class="btn1" href="">提交</a>'
				+'<a id="dialog_cancel" class="btn2" href="javascript:ZBook.closeCommentDialog();">取消</a></div></div></div>';
	ih(ZBook.commentDialog,dialogStr);	
};
// 可评论公用弹窗：投月票（推荐票）成功，打赏成功
ZBook.openCommentDialog=function(title, msg, cmt, fcall, fcall2){
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
	if(fcall2) ahfc('dialog_cancel',fcall2);
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
ZBook.goQQBook=function(g_ut){
	if(g_ut==1){
		go('http://ebook.3g.qq.com/index?v=false&g_ut=1');
	}else if(g_ut==2){
		go('http://ebook.3g.qq.com/index?v=false&g_ut=2');
	}else if(g_ut=3){
		go('http://info.3g.qq.com/g/s?aid=index&g_ut=3');
	}
};
/** --- vip及收费扣费处理 小心点---- */
//跳转到包月开通
ZBook.goVipStep1=function(b_f){
	Login.checkAndInvoke(function() {
		var bf=b_f;
		if(nl(bf)){
			bf = lsg("b_f");
		}
		var url=server()+'/8/vip/kaitong?b_f='+bf+'&g_f='+lsg("g_f")+'&indexPage='+BaseIndex.page()+"&tt="+ttag();
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
		var url=server()+'/8/vip/xufei?b_f=' +bf+'&g_f='+lsg("g_f")+'&indexPage='+BaseIndex.page()+"&tt="+ttag();		
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
		var url=server()+'/8/vip/chongzhi?b_f='+bf+'&g_f='+lsg("g_f")+'&indexPage='+BaseIndex.page()+'&currUrl='+back+"&tt="+ttag();		
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
	if(Read.buyInRead==0){   // 非连续阅读时，跳回上一页
		back();
	}
};
ZBook.closeBuyTipsOnly=function(){
	dh(ZBook.buyTips);
	ZBook.closePageHide();
	ZBook.showHelp();// 关闭购买成功时，显示help
};
ZBook.showHelp=function() {
	if(nl(lsg('read5.help'))) {
		delay(280,function(){
			lss('read5.help','1');
			ss('help','display','-webkit-box');
			mxyt('help',0,py());
			mwht('help',pw(),ph());
			vv('help');
		});
	}
};
/*
 * 购买前导提示
 * bid书籍id，cid要购买章节id，free书籍收费类型（0元宝1免费2vip免费），maxfreechapter最大免费章节
 * price书籍价格，unitprice按章价格，feewords有效字数，isvip当前用户是否是vip
 */
ZBook.buyIndex=function(book,chapter,disEx){
	if(!Login.isLogin()){// 到这里理论上一定登录了，这里是防御性判断
		Login.login();
		return ;
	}
	var indexStr='';
	indexStr +='<div class="tip"><div class="tiparea">';
	if(book.unitprice>0){ // 有按章价格时，只显示按章
		indexStr +='<h1>按章购买</h1>';
		indexStr +='<p>本书从第'+(cint(book.maxfreechapter)+1)+'章开始为收费章节</li><br>购买本章<br>';
		if(chapter.price==disEx.chapterPrice){ // 原价
			indexStr +='价格：<em class="tip_red">'+chapter.price+'书币</em></p>';
		}else{
			indexStr +='价格：<em class="tip_del">'+chapter.price+'书币</em><em class="tip_red">'+disEx.chapterPrice+'书币('+disEx.disDesc+')</em></p>';	
		}
		indexStr +='<a class="btn1" href="javascript:ZBook.buyChapter(\''+book.id+'\',\''+chapter.seq+'\')">按章购买</a>';
		if(!disEx.isVip){
			if(book.free==2){
				indexStr +='<p>包月用户免费阅读全文</p>';
				indexStr +='<a class="btn1" href="javascript:ZBook.goVipStep1();">开通包月</a>';
			}
			if(book.free==0 && disEx.discount>80){   // 折扣大于八折，提示开通包月8折
				indexStr +='<p>包月用户尊享八折优惠</p>';
				indexStr +='<a class="btn1" href="javascript:ZBook.goVipStep1();">开通包月</a> ';
			}
		}
	}else if(book.price>0){	// 无按章价格，有按本价格时，显示按本价格
		indexStr +='<h1>按本购买</h1>';
		indexStr +='<p>购买全本<br>';
		if(book.price==disEx.bookPrice){ // 原价
			indexStr +='价格：<em class="tip_red">'+book.price+'书币</em></p>';
		}else{
			indexStr +='价格：<em class="tip_del">'+book.price+'书币</em><em class="tip_red">'+disEx.bookPrice+'书币('+disEx.disDesc+')</em></p>';	
		}
		indexStr +='<a class="btn1" href="javascript:ZBook.buyFull(\''+book.id+'\',\''+chapter.seq+'\')">按本购买</a>';
		if(!disEx.isVip){
			if(book.free==2){
				indexStr +='<p>包月用户免费阅读全文</p>';
				indexStr +='<a class="btn1" href="javascript:ZBook.goVipStep1();">开通包月</a>';
			}
			if(book.free==0 && disEx.discount>80){   // 折扣大于八折，提示开通包月8折
				indexStr +='<p>包月用户尊享八折优惠</p>';
				indexStr +='<a class="btn1" href="javascript:ZBook.goVipStep1();">开通包月</a>';
			}
		}
	}
	indexStr +='<a class="close" href="javascript:ZBook.closeBuyTips();"></a>';
	indexStr +='</div></div>';
	ZBook.openBuyTips(indexStr);
};
//全本购买
ZBook.buyFull=function(bid,cid){  // cid 进入阅读定位章节用
	if(!Login.isLogin()){
		Login.login();
		return ;
	}
	ZBook.buyFull_URL= server()+'/8/buy/buyFull?bid={0}';
	Login.reqaObj(format(ZBook.buyFull_URL,bid),function(dataObj){
		if(nl(dataObj)) {
			ZBook.openTips("购买失败,请稍后再试");
			return;
		}else{
			var indexStr='';
			if(dataObj.code==0){                  // 按本购买成功
				indexStr=ZBook.buyResult_1(bid,cid,dataObj.gold);
			}else if(dataObj.code==7000){         // 书籍不能购买
				indexStr=ZBook.buyResult_2('该书籍不能购买','返回上一页','javascript:back();');
			}else if(dataObj.code==7001 || dataObj.code==100){   // 余额不足
				indexStr=ZBook.buyResult_2('您的书币账户余额不足，请充值','充值','javascript:ZBook.chongzhi();');
			}else if(dataObj.code==7002){         // vip用户不能购买vip书
				indexStr=ZBook.buyResult_2('包月用户不能购买包月书','返回上一页','javascript:back();');
			}else if(dataObj.code==7003 || dataObj.code==10001){  // 已经购买过本书
				indexStr=ZBook.buyResult_2('您已购买过本书','进入阅读','read.html?bid='+bid+'&cid='+cid);
			}else if(dataObj.code=8000){   // 书籍不存在
				indexStr=ZBook.buyResult_2('书籍不存在，请阅读其他书籍','返回上一页','javascript:back();');
			}else if(dataObj.code=8001){     // 章节不存在
				indexStr=ZBook.buyResult_2('章节不存在，请阅读其他书籍','返回上一页','javascript:back();');
			}else if(dataObj.code==10000){   // 未登录
				Login.login();
				return ;
			}else{              // 购买失败，请稍后重试
				indexStr=ZBook.buyResult_2('购买失败，请刷新页面后重试','返回上一页','javascript:back();');
			}
			ZBook.openBuyTips(indexStr);
		}
	});
};
// 按章购买  
ZBook.buyChapter=function(bid,cid){
	if(!Login.isLogin()){ // 到这里理论上一定登录了，这里是防御性判断
		Login.login();
		return ;
	}
	ZBook.buyChapter_URL= server()+'/8/buy/buyChapter?bid={0}&cid={1}';
	Login.reqaObj(format(ZBook.buyChapter_URL,bid,cid),function(dataObj){
		if(nl(dataObj)) {
			ZBook.openTips("购买失败,请稍后再试");
			return;
		}else{
			var indexStr='';
			if(dataObj.code==0){ // 按章购买成功
				Read.view=false;
				Read.showContent(dataObj,cint(cid));
				indexStr=ZBook.buyResult_0(bid,cid,dataObj.gold,dataObj.notice);
			}else if(dataObj.code==7000){            // 书籍不能购买
				indexStr=ZBook.buyResult_2('该书籍不能购买','返回上一页','javascript:back();');
			}else if(dataObj.code==7001 || dataObj.code==100){  // 余额不足
				indexStr=ZBook.buyResult_2('您的书币账户余额不足，请充值','充值','javascript:ZBook.chongzhi()');
			}else if(dataObj.code==7002){            // vip用户不能购买vip书
				indexStr=ZBook.buyResult_2('包月用户不能购买包月书','返回上一页','javascript:back();');
			}else if(dataObj.code==-1001){           // 已经购买过本章 
				indexStr=ZBook.buyResult_2('您已购买过本章','进入阅读','read.html?bid='+bid+'&cid='+cid);
			}else if(dataObj.code=8000){             // 书籍不存在
				indexStr=ZBook.buyResult_2('书籍不存在，请阅读其他书籍','返回上一页','javascript:back();');
			}else if(dataObj.code=8001){             // 章节不存在
				indexStr=ZBook.buyResult_2('章节不存在，请阅读其他书籍','返回上一页','javascript:back();');
			}else if(dataObj.code==10000){           // 未登录
				Login.login();
				return ;
			}else{ // 购买失败，请稍后重试
				indexStr=ZBook.buyResult_2('购买失败，请稍后重试');
			}
			ZBook.openBuyTips(indexStr);
		}
	});
};
//  购买结果各种提示 ---start---
ZBook.buyResult_0=function(bid,cid,cost,notice){ // 按章购买成功
	ZBook.checkDefaultNotice=true;
	var indexStr ='<div class="tip"><div class="tiparea"><h1>购买成功</h1><p class="p_text">购买成功，消费'+cost+'书币</p>';
	if(notice){
		indexStr +='<a id="noticecheck" class="radio_current" href="javascript:ZBook.checknotice();">默认自动购买，将不再弹出此页面</a>';
	}
	indexStr +='<div class="tip_btn"><a class="btn1" href="javascript:ZBook.goRead('+notice+');">进入阅读</a></div></div></div>';
	return indexStr;
};
ZBook.goRead=function(notice){
	if(notice==true && ZBook.checkDefaultNotice){
		Read.showNotice=false;// 关消费提示
		ZBook.cancelNotice_URL = server()+'/8/buy/cancelNotice';
		// 调用后台，24小时内连续阅读不提示购买成功
		Login.reqaObj(ZBook.cancelNotice_URL);
	}	
	ZBook.closeBuyTipsOnly();
};
ZBook.checknotice=function(){ // 消费成功提示：设置
	if(ZBook.checkDefaultNotice){
		scls('noticecheck','radio_normal');
		ZBook.checkDefaultNotice=false;
	}else{
		scls('noticecheck','radio_current');
		ZBook.checkDefaultNotice=true;
	}
};
ZBook.buyResult_1=function(bid,cid,cost){ // 按本购买成功
	var indexStr ='<div class="tip"><div class="tiparea"><h1>购买成功</h1><p class="p_text">购买成功，消费'+cost+'书币</p>';
	indexStr +='<div class="tip_btn"><a class="btn1" href="read.html?bid='+bid+'&cid='+cid+'">进入阅读</a></div></div></div>';
	return indexStr;
};
ZBook.buyResult_2=function(msg, goName, goURL){ // 书籍不能购买, fname:可以是js_函数：javascript:ZBook.chongzhi();，也可以是url链接
	var indexStr ='<div class="tip"><div class="tiparea"><h1>温馨提示</h1>';
	indexStr +='<p class="p_text">'+msg+'</p><div class="tip_btn"><a class="btn1" href="'+goURL+'">'+goName+'</a></div>';
	indexStr +='<a class="close" href="javascript:ZBook.closeBuyTips();"></a></div></div>';
	return indexStr;
};
ZBook.buyResult_3=function(book,chapter,disEx){ // 活动免费提示
	var indexStr ='<div class="tip"><div class="tiparea">';
	if(book.unitprice>0){ // 有按章价格时，只显示按章
		indexStr +='<h1>按章购买</h1>';
		indexStr +='<p>本书从第'+(cint(book.maxfreechapter)+1)+'章开始为收费章节</li><br>购买本章<br>';
		indexStr +='价格：<em class="tip_del">'+chapter.price+'书币</em><em class="tip_red">0书币('+disEx.disDesc+')</em></p>';	
	}else if(book.price>0){	// 无按章价格，有按本价格时，显示按本价格
		indexStr +='<h1>按本购买</h1>';
		indexStr +='<p>购买全本<br>';
		indexStr +='价格：<em class="tip_del">'+book.price+'书币</em><em class="tip_red">0书币('+disEx.disDesc+')</em></p>';	
	}
	indexStr +='<li><a href="javascript:ZBook.closeBuyTipsOnly();" class="btn1">进入阅读</a></li>';
	return indexStr;
};
//  购买结果各种提示 ---end---

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
ZBook.wordSearch=function(word,b_f){     // 搜索框用 ，例： url=search.html?b_f=505100
	lss('search.key5',word);
	lss('search.pid5',1);
	if(b_f){go('search.html?b_f='+b_f);	}else{	go('search.html');}
};
ZBook.authorSearch=function(author,b_f) { //详情页搜作者
	lss('search.key5',author);
	lss('search.pid5',1);
	if(b_f){go('search.html?b_f='+b_f);	}else{	go('search.html');}	
};