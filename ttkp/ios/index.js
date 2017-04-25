var index = {};
index.initUrl = "";
index.getGiftUrl = "";
index.isLogin = false;
index.qimei="";
function init() {
	index.initUrl = server() + "init";
	index.getGiftUrl = server() + "ttkp";
	index.qimei= param("qimei");
	index.init();
}
index.init = function(){
	Local.reqaObj(index.initUrl+"?qimei="+index.qimei, function(data) {
		if(data.code==1 || data.code==2){
			index.exchangeBt();
		}
		if(data.code==-1000){
			index.over();
		}
	});
};
index.getGift = function(){
	Local.reqaObj(index.getGiftUrl+"?qimei="+index.qimei, function(data) {
		Local.showToast('抽奖中');
		if(data.code==0){
			ih("gift","恭喜您获得<span>"+data.gift+"</span>");
			ss("tipno", "display","none");
			ss("tipyes", "display","block");
			ss("tips", "visibility","visible");
			index.init();
		}else{
			if(data.code==-99){
				Local.login();
			}else if(data.code==-98){
				ih("tiptitle","需要登录QQ号才可抽奖");
				ih("tipcont","此活动只针对QQ用户，请退出游客身份，切换QQ账号登录");
				ss("tipyes", "display","none");
				ss("tipno", "display","block");
				ss("tips", "visibility","visible");
			}else if(data.code==-97){
				ih("tiptitle","需要当前QQ号是天天酷跑用户才可抽奖");
				ih("tipcont","此活动只针对天天酷跑的用户，请下载并激活");
				ss("tipyes", "display","none");
				ss("tipno", "display","block");
				ss("tips", "visibility","visible");
			}else if(data.code==1 || data.code==2 || data.code==-2){
				ih("tiptitle","抽奖失败");
				ih("tipcont","别贪心，今天已抽取过奖品，活动期间（11.02-11.08）每日都可抽奖");
				ss("tipyes", "display","none");
				ss("tipno", "display","block");
				ss("tips", "visibility","visible");
				index.init();
			}else if(data.code==-1000){
				index.over();
			}else if(data.code<0){
				ih("tiptitle","系统繁忙中");
				ih("tipcont","没关系，请稍后再试，活动期间（11.02-11.08）每日都可抽奖");
				ss("tipyes", "display","none");
				ss("tipno", "display","block");
				ss("tips", "visibility","visible");
			}
		}
	},[], function () {
        //如果没有数据，需要提示回馈用户
		Local.showToast('网络异常，请稍后重试');
		Local.cancelProgress();
    }, 1);
};
index.exchangeBt = function(){
	dh("choose");
	dv("over");
	ss("over","display","");
};
index.over = function(){
	dh("choose");
	dv("over");
	ih("over","已结束");
	ss("over","display","");
};