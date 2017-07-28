/**
 * Created by bixin on 2016/9/28.
 */

$(function(){

    $.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=161001&act_b=welcome",type:"GET",success:function(){}});
    $('.btn').on('tap',function(){
        forceLog(param("act_f"),"KBZJYbtn"+env.pt);
        $.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=161001&act_b=toapptop",type:"GET",success:function(){}});
        openapp();
    })
    $('.downloadbottom').on('tap',function(){
        $.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=161001&act_b=toappbottom",type:"GET",success:function(){}});
        openapp();
    })

    $('.cancle').on('touchend',function(e){
        $.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=161001&act_b=canceldown",type:"GET",success:function(){}});
        e.preventDefault();
        hidemask();
    })
    $('.certain').on('touchend',function(e){
        $.ajax({"url":"http://event.book.qq.com/andmain/sum?act_f=161001&act_b=confirmdown",type:"GET",success:function(){}});
        e.preventDefault();
        hidemask();
        //alert("to down");
        N.downLoad(null, '10023704');
    })
    //唤起app
    function openapp(){
        S.open(function(installStat,plat){
            if(installStat){
                N.openPage(front() + "act160903/"+env.pt+"/index.html?act_f=110"+(param("id") ? "&id=" + param("id") : "")+(param("rd") ? "&rd=" + param("rd") : "")+(param("sc") ? "&sc=" + param("sc") : ""));
            }else{
                showmask();
            }
        })
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
    //adr安卓平台

    if(env.pt=="adr"){
        foradr();
    }
    function foradr(){
        $("#ticket").attr("src","images/gift3.png");
        $("#txt").text("200书券");
    }
    forceLog(param("act_f"),"KBZJYInit"+env.pt);
});
 