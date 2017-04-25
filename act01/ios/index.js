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
    $(obj).on("touchstart", function () {
        $(this).addClass("active");
    });
    $(obj).on("touchend", function () {
        $(this).removeClass("active");
    })
};
Index.btns(".btn,.hidebtn");
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
$(".hidebtn,.closebtn").on(Index.tap,function(){
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
            $("#btn").attr("href","");
        }else{
            $("#btn").text("购买本章");
            $("#btn").attr("href","");
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
            $("#btn").attr("href","");
        }else{
            $("#btn").text("购买");
            $("#btn").attr("href","");
        }
    }
}
//花阅券
$(".flist .btn").on("tap",function(){
    var data={type:2,code:2,c_n:110,p:15,cp:100,b:10};
    Index.result(data);
})