var Index = {};
//页面初始化
function initpage(data) {
    if(data.isLogin){
        Index.logined(data);
        return;
    }
    Index.unlogin();       
}
Index.unlogin = function() {
	$(".unlogin").show();
	$(".logined").hide();
	$("#ltip").attr("href", "javascript:Local.login();");
};
Index.logined=function(data){
    $(".unlogin").hide();
    $(".logined").show();
    $("#headpic").attr("src",data.icon);
    $("#coupon").text(data.cp);
};
// 按钮点击态
Index.btns = function (obj) {
    $(obj).live("touchstart", function () {
        $(this).addClass("active");
    });
    $(obj).live("touchend", function () {
        $(this).removeClass("active");
    })
};
Index.btns(".btn");
//弹窗隐藏
Index.maskOut = function () {
    $(".mask").hide();
    $(".tiparea").hide();
};
//弹窗显示
Index.maskIn = function (obj) {
    $(".mask").css("display", "-webkit-box");
    $(obj).show();
};
Index.tap = "touchend" in document ? "touchend":"click";
$(".hidebtn,.closebtn").live(Index.tap,function(){
    Index.maskOut();
})
Index.result=function(data){   
    if(data.type==2){//按章购买
        if(data.code==1){
            Index.maskIn("#tiparea1");
            return;
        }
        Index.maskIn("#tiparea2");
        $("#title").text("购买第"+data.c_n+"章");
        $("#price").text(data.p);
        $("#balance").text("余额："+data.cp+"书券+"+data.b+"书币");
        if(parseInt(data.cp+data.b)<parseInt(data.p)){
            $("#btn").text("余额不足，请先充值");
            $("#btn").attr("href","javascript:Local.doCharge('act', true);");
        }else{
            $("#btn").text("购买本章");
            $("#btn").attr("href","javascript:Index.buy("+data.info.bid+","+data.c_n+");");
        } 
    }else{//按本购买
        if(data.code==1){
            Index.maskIn("#tiparea1");
            $("#msg").text("本书已购买");
            return;
        }
        Index.maskIn("#tiparea2");
        $("#title").text(data.c_n);
        $("#price").text(data.p);
        $("#balance").text("余额："+data.cp+"书券+"+data.b+"书币");
        if(parseInt(data.cp+data.b)<parseInt(data.p)){
            $("#btn").text("余额不足，请先充值");
            $("#btn").attr("href","javascript:Local.doCharge('act', true);");
        }else{
            $("#btn").text("购买");
            $("#btn").attr("href","javascript:Index.buy("+data.info.bid+");");
        }   
    }
}
//花阅券
//$(".flist .btn").on("tap",function(){
//    var data={type:2,code:2,c_n:110,p:15,cp:100,b:10};
//    Index.result(data);
//})

function lock(dom){
	dom && $(dom).addClass("clicked");//添加按钮锁定效果
}

function unlock(dom){
	dom && $(dom).removeClass("clicked");//释放按钮锁定效果
}

//页面购买检查
Index.doBuy = function(bid, dom) {
	if ($(dom).hasClass("clicked"))
		return;
	lock(dom);
	Local.reqaObj(server() + "book?bid=" + bid, function(data) {
		console.log("do buy",data);
		if (data.isLogin) {
			// 未购买过且书券充足，直接购买
			if (data.code == 2 && data.cp >= data.p) {
				Index.buy(bid, data.type == 1 ? null : data.c_n, dom);
			} else {
				// 书券不足，提示消耗书币购买
				Index.result(data);
				unlock(dom);
			}
		} else {
			Local.login();
		}
	}, [], function() {
		unlock(dom);
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//真实购买
Index.buy = function(bid, cid, dom) {
	if (cid) {
		Local.reqaObj("http://allreader.3g.qq.com/common/dobuychapter?bid="
				+ bid + "&cid=" + cid, function(data) {
			console.log("buy chapter", data);
			Index.maskOut();// 关闭购买弹窗
			if (data.code == 0) {// 购买成功
				Local.showToast("成功购买第" + cid + "章");
				$("#coupon").text("剩余书券：" + data.balance_free);
				if(dom)
					$(dom).prev().children().last().text(
						"已购买到" + cid + "章，继续购买");
				else
					$("#b"+bid).children().last().text("已购买到" + cid + "章，继续购买");
				forceLog(99999, "bid="+bid+"|cid="+cid+"|c="+data.z_used+"|b="+data.used);
			} else {
				Local.showToast(data.msg);
			}
			unlock(dom);
		}, [], function() {
			unlock(dom);
			Local.showToast("出错啦，请稍候重试");
		}, 1);
	} else {
		Local.reqaObj("http://allreader.3g.qq.com/common/dobuybook?bid=" + bid,
				function(data) {
					console.log("buy book", data);
					if (data.code == 0) {// 购买成功
						Local.showToast("成功购买本书");
						$("#coupon").text("剩余书券：" + data.balance_free);
						if(dom)
							$(dom).prev().children().last().text("已购买整本书");
						else
							$("#b"+bid).children().last().text("已购买整本书");
						forceLog(99999, "bid="+bid+"|cid="+cid+"|c="+data.z_used+"|b="+data.used);
					} else {
						Local.showToast(data.msg);
					}
					unlock(dom);
				}, [], function() {
					unlock(dom);
				}, 1);
	}
}