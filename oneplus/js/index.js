var Index={};

//页面初始化
function init(){
	console.log("init....");
	Index.fillPage();
}

function address(){
    if(window.location.href.indexOf('test')>0){
        return 'http://test3.wapmusic.qq.com/andmain/channelgift/send';
    }else{
        return 'http://event.book.qq.com/andmain/channelgift/send';
    }
}

Index.fillPage=function(){
	Local.reqaObj(address(), function(data) {
		//处理初始化数据
		console.log(data);
        initpage(data);
        $('.mask').hide();
        $('.main').show();
	}, [], function() {
	    console.log("failed");
		Local.showToast("网络异常，请稍候重试");
	}, 1);
};
//页面初始化
function initpage(data){
	if(data.isLogin){
        Index.login();
    }
}
//已登录
Index.login=function(){
	$('#btn').hide();
	$('#logo_btn').show();
	$('.notice').html("<h4>活动规则</h4><p>1.书券会在<span>3个工作日内到账</span>，可前往“个人中心”查看。</p><p>2.书券有效期为180天，请及时使用。</p>");
};
//未登录
Index.noLogin=function(){
    Local.login(window.location.href);
};



//init();

