var Index = {};
var winW = document.documentElement.clientWidth || document.body.clientWidth, winH = document.documentElement.clientHeight|| document.body.clientHeight;
$(".mask").css({
	'width' : winW,
	'height' : winH
});
function init() {
	setParam("tf", 1);
	if (pageName == "xyw") {
		setParam("aid", 1);
		Index.author = "辛夷坞";
	} else if (pageName == "th") {
		setParam("aid", 2);
		Index.author = "桐华";
	} else {
		setParam("aid", 3);
		Index.author = "周德东";
	}
	Index.app = false;// 是否在app打开的页面
	Index.fillPage();
	forceLog(param("act_f"), "h5");
}

// code ： -9：活动已过期,-1：已经力挺，1：力挺成功
// isLogin:是否登录（true false）
// team组队详情

// 页面初始化
Index.fillPage = function(full) {
	if (navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/) && !param("u")) {
		window.location.href = front() + "com/wxoauth.html?team="
				+ param("team") + "X" + pageName;
	} else {
		mqq && mqq.QQVersion !="0" && ckg("uin") && setParam("timi", ckg("uin").substr(1));
		Local.reqaObj(server() + "pkg160404/init?team=" + param("team"), function(obj) {
			// 处理初始化数据
			console.log("组队详情",obj);
			Index.u = obj.u;
			initpage(obj);
		}, [], function() {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
		!full && forceLog(param("act_f"), "authed-h5-" + (param("u") | 0));
	}
	Index.toShare(param("team"));
}
// 页面初始化
function initpage(data) {
   if (data.code == -9) {//活动结束
       Index.activityEnd(1);
       $("#loadtk p").text("去QQ阅读，阅读更多正版好书");
   }else{
	   Index.activity(data);
   }
   
}
//页面初始化
Index.activity=function(data){
   $("#activityend").hide();
   if(Index.app){
      $("#app").show();
	  $("#noapp").hide(); 
   }else{
      $("#app").hide();
	  $("#noapp").show();
	  if (data.team) {
		    var teamChecker = {};
		    teamChecker.isFull = data.team.length == 3;
		    teamChecker.isLeader = data.team[0].uin == data.u;
			for (var i = 0; i < data.team.length; i++) {
				if (!teamChecker.isMem && i > 0)
					teamChecker.isMem = data.team[i].uin == data.u;
				if(i>0){
					$("#teams img").eq(i+1).attr('src',data.team[i].avor? data.team[i].avor: "images/q_logo.png");
					$("#teams h4").eq(i+1).text(data.team[i].name?data.team[i].name: "队友");
					$("#teams li").eq(i+1).find('.ting').show();
				}else{
					$("#teams img").eq(i).attr('src',data.team[i].avor? data.team[i].avor: "images/q_logo.png");
					$("#teams h4").eq(i).text(data.team[i].name?data.team[i].name: "队长");
					$("#teams li").eq(i).find('.ting').show();
				}
			}
			console.log("组队详情",teamChecker);
			if (teamChecker.isLeader){//发起人
				if(teamChecker.isFull){//组队已满
					 $("#myself a").attr('class','btn');
					 $("#myself .inviteTipsuc").text("用组队成功账号登录可免费阅读");
					 $("#myself a").text('组队成功，免费领书');
					 $("#myself a").attr("href","javascript:Index.toReader();");
				 }else{
					 $("#myself a").attr('class','btn_fail');
					 $("#myself .inviteTipsuc").text("");
					 $("#myself a").text('组队尚未成功');
				 }
		         $("#others").hide();
				 $("#myself").show();
			}else{//其他
			    $("#others").show();
   		        $("#myself").hide(); 
				if(teamChecker.isMem){//已挺
				    if(teamChecker.isFull){//已挺组队已满
						 $("#others a").text('组队成功，免费领书');
						 $("#others .inviteTipsuc").text("用组队成功账号登录可免费阅读");
					 }else{//已挺组队未满
						 $("#others a").text('已参与组队，阅读更多精彩');
						 $("#others .inviteTipsuc").text("组队成功后,可免费领取作家推荐的书");
					 }
				     $("#others a").attr("href","javascript:Index.toReader();");
				}else{//未挺
				     if(teamChecker.isFull){//未挺组队已满
						 $("#others a").text('创建组队，免费领书');
						 $("#others .inviteTipsuc").text("本队已满员，赶快创建新的组队");
						 $("#others a").attr('href',"javascript:Index.createTeam();");
					 }else{//未挺组队未满,力挺
						 $("#others .inviteTipsuc").text("");
						 $("#others a").text('力挺好友，免费领书');
						 $("#others a").attr("href","javascript:Index.ting();")
					 } 
				}
			}
	  }else{
		  //组队不合法
		  Index.activityEnd(2); 
	  }
   }
};
//活动结束
Index.activityEnd=function(code){
	$("#app").hide();
	$("#noapp").hide();
	$("#activityend").show();
	if(Index.app){//app打开按钮不显示
		$("#more_activity").hide();   
	}else{//h4文案变化
		if(code==2){
			$("#activityend h4").text("请在QQ阅读客户端重新组队");
		}
		$("#more_activity").show();
	}
};
//力挺添加头像和昵称
Index.addmem=function(avor,name,full){
	var i=0;
	$('#teams li').each(function(){
		var img=$(this).find('img').attr('src');
		if(img=='images/facebg.png'){
			if(i>0){	
			}else{
				$(this).find('img').attr('src',avor);
				$(this).find('h4').text(name);
				$(this).find(".ting").show();
			}
			i = i+1;
		}
	})
	//按钮文案变化
	if(full){
		$("#others a").text("组队成功，免费领书");
		$("#others .inviteTipsuc").text("用组队成功账号登录可免费阅读");

	}else{
		$("#others a").text("已参与组队，阅读更多精彩");
		$("#others .inviteTipsuc").text("组队成功后,可免费领取作家推荐的书");
	}
	$("#others a").attr("href","javascript:Index.toReader();");
}
//弹窗隐藏
Index.maskOut = function (btn){
	$(btn).on('touchend',function(ev){
		ev.preventDefault();
		$(".mask").hide();
		$(".tiparea").hide();
	})
};
Index.maskOut('.btn_zdl');
Index.maskOut('.btn_quxiao');
//显示弹窗
Index.maskShow = function(obj) {
	$(".mask").css("display", "-webkit-box");
	$("#" + obj).show();
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//创建组队
Index.createTeam = function(){
	Index.toShare(Index.u);
	Index.maskShow('sharetk');
}
//力挺
Index.ting = function() {
	Local.reqaObj(server() + "pkg160404/pick?team=" + param("team"), function(data) {
		// 处理初始化数据
		console.log("力挺",data);
		if (data.code == 1) {
			Index.addmem(data.avor?data.avor:"images/q_logo.png",data.name?data.name:"队友", data.isFull);
			//Index.addmem(data.avor, data.name, data.isFull);
		} else {
			Index.maskShow('failtk');
			if (data.code != -1) {
				$("#failtk p").text(data.msg);
			}
			Index.fillPage(true);
		}
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//组队成功，领书
Index.toReader = function() {
	console.log("检查安装");
	Appinstalledcheck.checkDownloadApp(function(isAppInstalled) {
		if (isAppInstalled) {// 安装了app
			window.nativechecker.doGoToApp();
			forceLog(param("act_f"), "open");
		} else {
			Index.maskShow('loadtk');// 下载弹框
			forceLog(param("act_f"), "down");
		}
	});
}
Index.toShare = function(team) {
	console.log("分享-组队", team, param("team"));
	var shareObj = {
		url : front() + "com/"+pageName+".html?team=" + team,
		cover : front() + "com/images/"+pageName+".jpg",
		title : "有人@你，来免费领取作家"+Index.author+"推荐的书",
		intro : "赶快加入我的小队，一起免费看书"
	};
	try {
		mqq.data.setShareInfo({
			"share_url" : shareObj.url,
			"title" : shareObj.title,
			"desc" : shareObj.intro,
			"image_url" : shareObj.cover
		});
	} catch (e) {
	}
	try {
		WX.share(shareObj);
	} catch (e) {
	}
	forceLog(param("act_f"), "share-h5");
};