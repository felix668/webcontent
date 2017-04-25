
var isLoginv = false;
var canpick = true;
var pickbtnonline = true
var canaddshelf = false;
var boxon = false;
function init() {
	fillPage();
	//关闭弹框
    $(".btn_zdl").on("click",function(){
    	tankclose();
    })
    $(".btn_close").on("click",function(){
    	tankclose();
    })
	$(".cjbtn_txt").on("click", function() {
		if(canpick && pickbtnonline){
			canpick = false;
			loading();
			Local.reqaObj(server() + "pkg20151105/pick", function(data) {
				if (data.isLogin) {
					canpick = true;
					if (data.code > 0) {
						zhuanpan(data.code);
						canpick = false;
					} else if (data.code == -3 || data.code == -5) {
						JSToast.showToast("网络不畅，请稍后再试试");
						$(".cjbtn_txt").text("抽奖");
					} else if (data.code == -8) {
						JSToast.showToast("不在活动期间内。");
					} else if (data.code == -2) {
						showNoChance();
						var btn = document.getElementById("pickbtn");
						btn.onclick = function(){
							if(!boxon){
								showNoChance();
							}
						}
					} else {
						zhuanpan(8);
						canpick = false;
					}
				} else {
					Local.login();
					$(".cjbtn_txt").text("抽奖");
					canpick = true;
				}
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
				$(".cjbtn_txt").text("抽奖");
				canpick = true;
			}, 1);
		}
		forceLog(param("act_f"),"pick");
	})
}

function showNoChance(){
	$(".show_mask").css("display","-webkit-box");
	$(".tankuang_box").css("display","block");
	$(".btn_close").hide();
	$(".tankuang_box img").hide();
	$(".tankuang_box h4").text("无抽奖机会");
	$(".tankuang_box p").text ("完成加书架并且阅读到第5章才可获得抽奖机会哦");
	$(".btn_zdl").text("知道啦");
	$(".btn_zdl").attr("href","javascript:void(0)");
	$(".cjbtn_txt").text("抽奖");
	pickbtnonline = false;
	boxon = true;
}


fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkg20151105/init", function(data) {
		isLoginv = data.isLogin;
		canaddshelf = true;
		if (data.p_qimei || data.p_uin) {
			var code = data.code;
			var angles = (code - 1) * 60;
			$(".btn_cj").addClass('btn_ylg');
			$(".cjbtn_txt").text("已抽奖");
			$(".cjbtn_txt").css({"color" : "#666"});
			$("#zhuanpan").css('-webkit-transition','-webkit-transform 5ms');
			$("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
			canpick = false;
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}


function loading(){
	$(".cjbtn_txt").text("加载中");
}

//旋转转盘 ids: 奖品的id
function zhuanpan(ids){	
	       var Imgsrc=$(".tankuang_box img");
	       var closebtn = document.getElementById("closebtn");
	       var restaraunts=[["images/jp_iphone.png","iPhone6"],["images/jp_czz.png","100成长值"],["images/jp_fpz.png","作者翻牌子的机会"],["images/jp_qms.png","签名书"],["images/jp_gz.png","公仔"],["images/jp_sq.png","100书券"]];
		   var angles = (ids - 1) * 60 + 1800;
		   $("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
		   $("#zhuanpan").on('webkitTransitionEnd', function() {
					$(".show_mask").css("display","-webkit-box");
				   $(".tankuang_box").css("display","block");

				   if(ids==1||ids==4||ids==5){
					 Imgsrc.attr("src",restaraunts[ids-1][0]);
					 $(".tankuang_box h4 span").text(restaraunts[ids-1][1]);
					 $(".tankuang_box p").text ("新填写正确的联系方式，奖品以快递的形式寄给您");
					 closebtn.onclick = function(){};
					 $(".btn_zdl").text("填写联系方式");
					 $(".btn_zdl").attr("href","javascript:Local.go('contact.html');");
				   }
				   else if(ids==2){
					 Imgsrc.attr("src",restaraunts[ids-1][0]);
					 $(".btn_close").hide();
					 $(".tankuang_box h4 span").text(restaraunts[ids-1][1]);
					 $(".tankuang_box p").text("请到我的等级查询成长值奖励");
					 $(".btn_zdl").text("知道啦");
					 $(".btn_zdl").attr("href","javascript:void(0)");
				   }
				   else if(ids==3){
					 Imgsrc.attr("src",restaraunts[ids-1][0]);
					 $(".tankuang_box h4 span").text(restaraunts[ids-1][1]);
					 $(".tankuang_box p").text("哇~你得到一次和作者互动的机会，前往书评区发帖示爱吧！作者会亲自给你回复哦~");
					 closebtn.onclick = function(){};
					 $(".btn_zdl").text("去书评区");
					 $(".btn_zdl").attr("href","javascript:gotoCommentArea();");
				   }
				   else if(ids==6){
					 Imgsrc.attr("src",restaraunts[ids-1][0]);
					 $(".btn_close").hide();
					 $(".tankuang_box h4 span").text(restaraunts[ids-1][1]);
					 $(".tankuang_box p").text("请到我的账户查询书券奖励");
					 $(".btn_zdl").text("知道啦");
					 $(".btn_zdl").attr("href","javascript:void(0)");
				   }
				   else if(ids==7){
					   $(".btn_close").hide();
					   $(".tankuang_box img").hide();
					   $(".tankuang_box h4").text("无抽奖机会");
					   $(".tankuang_box p").text ("完成加书架并且阅读到第5章才可获得抽奖机会哦");
					   $(".btn_zdl").text("知道啦");
					   $(".btn_zdl").attr("href","javascript:void(0)");
				   }
				   else if(ids==8){
					   $(".btn_close").hide();
					   $(".tankuang_box img").hide();
					   $(".tankuang_box h4").text("您已经抽过啦");
					   $(".btn_zdl").text("知道啦");
					   $(".btn_zdl").attr("href","javascript:void(0)");
				   }
				   if(ids!=7){
				   	$(".btn_cj").addClass('btn_ylg');
					$(".cjbtn_txt").text("已抽奖");
					$(".cjbtn_txt").css({"color" : "#666"});
				   }
				  });
}


function tankclose(){
	$(".show_mask").hide();
	$(".tankuang_box").hide();
	setTimeout(function(){
		pickbtnonline = true;
		boxon = false;
	},1000);
}

//按钮切换函数
$(".btn_zdl").on("touchstart",function(){
	 $(this).addClass('active');
})
$(".btn_zdl").on("touchend",function(){
	$(this).removeClass('active');
})


var readonline = function () {
	if(!canaddshelf){
		return;
	}
	try{
		Local.addAllToShelf('[{"bid":749834,"title":"傲娇男神住我家：99次说爱你","author":"叶非夜","downloadinfo":{"txt":null}}]');
		if(isLoginv){
			var bookinfo = {};
			bookinfo.id = "749834";// bid使用String类型
			bookinfo.title = "傲娇男神住我家：99次说爱你";
			bookinfo.author = "叶非夜";
			bookinfo.coverurl = "http://wfqqreader.3g.qq.com/cover/834/749834/x_749834.jpg";
			bookinfo.version = 1;
			bookinfo.chapterid = -1;
			bookinfo.chaptertitle = "第一章";
			bookinfo.drm = 0;
			bookinfo.finished = 0;
			bookinfo.bookfrom = "QQ阅读";
			bookinfo.format = "txt";
			bookinfo.lastcname = "";
			bookinfo.origin = "0";
			bookinfo.bookprice = 0;//原价
			bookinfo.stat_params={};
			bookinfo.stat_params.origin = bookinfo.origin;
			try {
			   readonline.readbook(json(bookinfo));
			} catch (e) {
			}
		}
	} catch (e) {
	}
	location.reload();
};

var gotoCommentArea = function(){
	var bid = "749834";
	//跳转到书友圈
    var pagetitle = "书评区首页";
    var detailobj = {};
    detailobj.pagecode = "1009";
    detailobj.bid = bid;
    detailobj.pagetitle = pagetitle;
    Local.openPageEx(detailobj);
    forceLog(param("act_f"),"gocomment");
}