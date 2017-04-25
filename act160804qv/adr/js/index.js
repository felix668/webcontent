$(function(){
	var url = location.href;
	var i = url.indexOf('?');
	$.ajax({"url":"http://test3.wapmusic.qq.com/andmain/pkg160903/init?"+location.href.substring(i+1,url.length),type:"GET",success:function(){}});

	$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=videoindex",type:"GET",success:function(){}});
	$('.qqreader').on('tap',function(){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=toapptop",type:"GET",success:function(){}});
		openapp();
	})
	$('.downloadbottom').on('tap',function(){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=toappbottom",type:"GET",success:function(){}});
		openapp();
	})
	$("#booklist li").on('tap',function(){
		var bid=$(this).attr("bid");
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=tobook"+bid,type:"GET",success:function(){}});
		detailpage(bid);
	})
	$('.cancle').on('touchend',function(e){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=canceldown",type:"GET",success:function(){}});
		e.preventDefault();
		hidemask();
	})
	$('.certain').on('touchend',function(e){
		$.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=160906&act_b=confirmdown",type:"GET",success:function(){}});
		e.preventDefault();
		hidemask();
		alert("to dowm");
		N.downLoad(null, '10003531');
	})
	//唤起app
	function openapp(){
		//N.openApp();
		S.open(function(installStat,plat){
			alert(installStat);
			if(installStat){
				N.openPage("http://iyuedu.qq.com/event/act160804/"+env.pt+"/index.html?act_f=160906&openId=111111");
//				window.location.href = "https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8";
			}else{
				showmask();
			}
		})
//	    N.openPage("http://iyuedu.qq.com/event/act160804/"+env.pt+"/index.html?act_f=160906");
		//唤起失败引导下载
//		showmask();
	}
	//打开书籍详情页
	function detailpage(id) {
		N.toBookDetail(id);
		showmask();
	}
	//显示下载弹窗
	function showmask(){
		setTimeout(function(){
			$(".mask").addClass("show");
		},2000);
	}
	//隐藏弹窗
	function hidemask() {
		//setTimeout(function(){
			$(".mask").removeClass("show");
		//},400)
	}
});
