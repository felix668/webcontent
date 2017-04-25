var Index={}
Index.u = 0;
function init(){
	console.log("init....");
	Index.fillPage();
}

//页面初始化
Index.fillPage = function() {
	var app = !param("u");
	if(app){//通过app取用户信息
		Local.reqaObj(server() + "sum?act_f="+param("act_f")+"&act_b=1", function(data) {
			//处理初始化数据
			console.log("APP",data);
			Index.u = data.u;
			initpage(app, Index.u > 10000 ? Index.u : 0);
		}, [], function() {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
	}else{
		setParam("tf",1);
		Index.u = parseInt(param("u") || 0);
		initpage(app,Index.u);
	}
}
//页面初始化
function initpage(app,u) {
	if(app){//app打开
		if(u){//已经登录
			Index.fillHis(app,u);//初始化阅历
		}else{//未登录
			Index.unlogin();
		}
	}else{//外部打开
		Index.fillHis(app,u);//初始化阅历
	}
};
//初始化阅历
Index.fillHis = function(app,u){
	reqa(serverRoot() + "api/his?tf=1&u="+u, function(data) {
		//初始化阅历信息
		console.log("阅历",data);
		Index.logined(data,app);
	});
};

Index.unlogin = function() {
	$(".loginDiv").removeClass("hide");
	
};

var books = {"盗墓笔记":{"count":"200","desc":"休斯敦"},
		"鬼吹灯(盗墓者的经历)":{"count":"50","desc":"华盛顿"},
		"鬼吹灯II":{"count":"20","desc":"辛辛那提"},
		"爵迹":{"count":"10","desc":"辛辛那提"},
		"择天记":{"count":"100","desc":"神户"},
		"琅琊榜":{"count":"60","desc":"华盛顿"},
		"他来了，请闭眼":{"count":"40","desc":"拉斯维加斯"},
		"如果蜗牛有爱情":{"count":"30","desc":"辛辛那提"},
		"美人为馅":{"count":"40","desc":"拉斯维加斯"},
		"国民老公带回家":{"count":"100","desc":"神户"}};
var authors = {"我吃西红柿":"一个故事让我们在QQ阅读相遇，感谢你的支持！",
		"辰东":"你的支持就是我挖坑的动力，我在这等你！",
		"血红":"我用最好的创作感谢你的支持!",
		"跳舞":"一本书就是一个世界，感谢你的支持!",
		"猫腻":"我本微末，心向天空！十年原创，感恩有你！",
		"耳根":"衷心祝福你幸福安康，感谢支持！",
		"打眼":"古玩世界水很深，期待继续与你一起冒险！",
		"风凌天下":"风雨同舟，携手共进，感谢你的支持！",
		"鱼人二代":"感谢小伙伴们，没有你们的支持就没有现在的鱼人二代。",
		"唐家三少":"网文之路先有坎坷才有坦途，庆幸有你同行！",
		"丁墨":"愿你始终有梦想，有快乐。",
		"叶非夜":"QQ阅读你我相遇的桥梁，愿QQ阅读让你的生命更精彩。",
		"柳暗花溟":"有你，有我，有QQ阅读，是文字里最好的相遇。",
		"苏小暖":"最快的更新，最活跃的互动~感恩有你，相遇QQ阅读。",
		"楚韵":"我掐指一算，我命中缺你。",
		"冷青衫":"何其有幸，我在这里遇见你。",
		"辛呓呓":"思学无止，好书尽在QQ阅读，感谢有你！",
		"夜北":"QQ阅读，让我与你们相识相知相爱，今生不悔与你们相遇。",
		"公子衍":"你是我此生最美的遇见。",
		"顾婉音":"一路风雨，幸甚有你。感谢QQ阅读让我们相遇！"}

Index.logined = function(data,app) {
	$(".loginDiv").addClass("hide");
    $(".bgmusic").removeClass('hide');
    $(".load").removeClass('hide');
	Index.amusic();
	if(data!=''){//活跃用户
	   //初始化昵称和头像
	   Local.reqaObj(serverRoot() + "api/user?type=4&u="+Index.u, function(data) {
			console.log("头像+昵称",data);
			if(data.users){
				var me = data.users[0];
				me && $("#username").text(me.name);
				me && $("#userface").attr('src',me.avor);
			}
	   });	
	   var d = data.split("|");	
	   Index.loads('.active_user');
	   Index.Numerical(d[1],'ranking_num');//第N位读者
	   Index.Numerical(d[4],'read_num');//累计阅读了N本书
	   Index.Numerical(d[5],'kechien_num');//与N位作家结缘
	   
	   //page1
	   $("#first_year").text(d[2].substr(0,4));//第一次阅读年
	   $("#firsr_mon").text(d[2].substr(4,2));//第一次阅读月
	   $("#first_day").text(d[2].substr(6,2));//第一次阅读日
	   $(".first_book").text('《'+d[3]+'》');//读的第一本书名
	   //page2
	   $(".sq_metre").text((d[4]*0.06).toFixed(2)+'平米');//铺满N平米的房子
	   $(".yuan").text(parseInt(d[4]*3600));//在北京朝阳这么大的房子值N元
	   //page3
	   if(authors[d[6]]){
		   $(".author_say .author_name").text(d[6]+"：");//给固定书的作者名
		   $(".author_say .author_txt").text(authors[d[6]]);//给固定书的作者说的话
	   }else{
		   $(".author_say").css("text-align","center");
	       $(".author_say .author_txt").text("文字记录了所有的喜怒哀乐");
	   }
	   //page4
	   if(d[7]){
		   $(".read_bookname").text('《'+d[7]+'》');//读过我们给的固定的书
		   Index.Numerical(books[d[7]]&&books[d[7]].count,'friend_num');//有N小伙伴与我一起阅读
		   $(".address").text(books[d[7]]&&books[d[7]].desc);//人数快超过的地名
	   }else{
		   $(".author_say").css('text-align','center');
		   $(".active_user .box .page4").remove();
	   }
	   //page5
	   Index.readTime((d[8]-1)%9);//阅读时间段
	   //page6
	   
	   Local.reqaObj(serverRoot() + "api/gene?version=v2&u=" + Index.u, function(gdata) {
			// 处理初始化数据
			console.log("基因",gdata.tags);
			Index.gene(gdata.tags);
	   });
	   Index.share(app);//分享or查看 app分享，外部非app打开查看
	   Index.pageSild('.active_user .box',app);
	   
	   
	}
	else{//陈旧用户或者新用户
	    Index.loads('.new_user');
	    Index.share(app);//分享or查看 app分享，外部非app打开查看
		Index.pageSild('.new_user .box',app);
	}
	
	
};
//处理基因显示
Index.gene = function(data){
	var lenth=$(".gene_box .classify").length;
	for(var i=0;i<lenth;i++){
	   if(i>=data.length) break;	
	   var num=i+1;
       $('.class'+num+' .classify_name').text(data[i].tagName);//基因名
	   $('.class'+num+' .classify_percentage').text(data[i].wpercent+'%');//百分比
	}
}
//分享和分享出去的状态
Index.share=function(share){
     if(share){//分享
		  $(".page6 .share_box").show();
		  $(".page6 .awaken").hide();
	 }
	 else{
		  $(".page6 .share_box").hide();
		  $(".page6 .awaken").show();
      }
}
//加载进度虚拟
Index.loads=function(boxpage){
  var percent = 0;
    var timer=setInterval(function(){
        percent+=5;
		$(".percent span").text(percent);
        if(percent >= 100) {
            clearInterval(timer);
            setTimeout(function(){
                $('.load').addClass('hide');
				$(boxpage).removeClass('hide');
				$('.page1').addClass('active');
				$(".arrow_up").addClass("upshow");
            },20)
        }
    },120)
}   
//背景音乐
Index.amusic=function(){
	var music=document.getElementById('audio');
	music.play();
	var bplay=0;//播放
	$('#bgmusic').on('tap',function(){
			if(bplay==0){
				$('.pause').show();
				music.pause();
				bplay=1;
			}else{
				$('.pause').hide();
				music.play();
				bplay=0;
			}
	});
	$(document).one("touchstart",function(){
        music.play();
    });
}
 
//滑屏切换
var winW=$(window).width();
var winH=$(window).height();
Index.curPage = 0;
Index.pageSild=function(slidepage,app){
	console.log("第一页");
	// 每一页高度自适应
	var len=$(slidepage+">.page").length;
	$(slidepage+">.page").each(function () {
	         $(this).css({"width":winW,"height":winH});
	});
	$(".box").css("height",winH*$(slidepage+">.page").length);
	var touchStartY;
	var iNow=0;
	$(slidepage).on("touchstart",function(ev){    
			touchStartY=ev.targetTouches[0].pageY;
			$(slidepage).on('touchmove',function(ev){
				ev.preventDefault();
			})
			$(slidepage).on('touchend',function(ev){  
				//ev.preventDefault();
				var offsetY=ev.changedTouches[0].pageY - touchStartY;
				if(offsetY > 30){//向下
					iNow-=1;
					if(iNow<0){iNow=0;}
					swiper(iNow);
					
				}else if(offsetY <- 30){//向上
					iNow+=1;
					if(iNow>parseInt(len-1)){iNow=parseInt(len-1);}
					swiper(iNow);
				}
				if(iNow==parseInt(len-1)){
				    $('.arrow_up').hide();
				}
				else{
					$('.arrow_up').show();
				}
				$(slidepage).off('touchmove touchend');
			})
	});
	function swiper(iNow){
			$(slidepage+'>.page').eq(iNow).addClass('active').siblings().removeClass("active");
			$(slidepage).css('-webkit-transform','translateY('+-winH*iNow+'px)');
			console.log("当前页："+(iNow+1),Index.curPage);
			if(Index.curPage != iNow){
				if(app){
					forceLog(param("act_f"), (iNow+1));
				}
				Index.curPage = iNow;
			}
				
	}
}
//填充数据
Index.Numerical=function(nums,sums){
    var arryimg=['images/0.png','images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png'];
	var len=nums.length;
    var div=$('#'+sums);
    var str=""
   for(var i=0;i<len;i++){
	   str+='<img src='+arryimg[nums.charAt(i)]+' >'
	  div.html(str);
   }
}
//阅读时间段
Index.readTime=function(readtime){
    var arrTimesImg=['images/time1.png','images/time2.png','images/time3.png','images/time4.png','images/time5.png','images/time6.png','images/time7.png','images/time8.png','images/time9.png'];
    $("#read_time img").attr('src',arrTimesImg[readtime]);
}

Index.toShare = function() {
	forceLog(param("act_f"), "share");
	var url = front() + "com/index.html?u=" + Index.u;
	var img = front() + "com/images/sgj.jpg";
	var title = ($("#username").text() == "" ? "" : "我的") + "QQ阅读时光机-记录阅读点滴";
	var intro = ($("#username").text() == "" ? "QQ阅读" : $("#username").text())
			+ "这么牛，他咋不上天呢，速来围观";
	Local.shareEventListen(title, intro, img, url);
	Local.shareControl();
}
//弹窗显示
Index.maskIn = function() {
	$(".mask").css("display", "-webkit-box");
};
$("#btn_quxiao").on('tap',function(){
   $(".mask").hide();
});
Index.toReader = function(){
	alert("打开阅读器~");
}