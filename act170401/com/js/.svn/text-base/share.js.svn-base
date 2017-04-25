document.body.addEventListener("touchstart",function(){},false);
document.querySelector("#ani").addEventListener("webkitAnimationEnd", function(){
	document.querySelector("#wrap").className="wrap show";
	swiperinit();
	forceLog("170401","HGshare"+env.pt);
})
//图片轮播
function swiperinit(){
	var galleryBig = new Swiper('#swiper-big', {
	    pagination : '.swiper-pagination',
	    normalizeSlideIndex:false,
	    onTap:function(){
	    	document.querySelector("#swiper-big").style.opacity="0";
	    	setTimeout(function(){
	    		document.querySelector("#swiper-big").style.zIndex="-1";
	    		document.body.style.overflow="auto";
	    	},300)
	    },
	    onTransitionEnd:function(swiper){
	    	gallerySmall.slideTo(swiper.activeIndex);
	    }
	});
	var gallerySmall = new Swiper('#swiper-small', {
	    slidesPerView: 'auto',
	    touchRatio: 0.2,
		slideToClickedSlide: true,
		normalizeSlideIndex:false,
	    onTap:function(swiper){	    	
	    	document.querySelector("#swiper-big").style.cssText+="opacity:1;z-index:20";
	    	document.body.style.overflow="hidden";	
	    	galleryBig.slideTo(swiper.activeIndex);	 
	    }
	});
}
//触发下载
document.querySelector("#playv").onclick=function(){
	isInstalled();
}
document.querySelector("#share").onclick=function(){
	isInstalled();
}
document.querySelector("#cancle").onclick=function(){
	hidemask();
} 
document.querySelector("#certain").onclick=function(){
	loadApp();
}
//app判断
function isInstalled(){
	S.open(function(installStat,plat){
		if(env.vw=="wb"){
			$("#wbmask").show();
			return;
		}
		if(installStat == -2){//浏览器		
			N.openPage(pageurl("act170401/index2.html?act_f=170401"));			
			showmask();
		}else if(installStat){//已安装		
			N.openPage(pageurl("act170401/index2.html?act_f=170401"));	
			// if(env.vw=="wx"){
			// 	showmask();
			// }
		}else{			
			showmask();
		}
	})
	forceLog("170401","HGload"+env.pt);
}
$("#wbmask").on('touchend',function(){
	$(this).hide();
})
function loadApp(){
	N.downLoad(null, '10026760');
	hidemask();
}
function showmask(){
	setTimeout(function(){
		document.querySelector("#loadmask").className="loadmask showmask";
	},2000);
}
function hidemask(){
	document.querySelector("#loadmask").className="loadmask";
}
window.initSNS=function(){
	var shareobj={
		cover :front()+"act170401/com/images/cover.jpg",
		url : window.location.href,
		title: "胡歌微电影独家放送",
		desc: "胡歌赴美的第52天，这部片子我就刷了666遍"
	};
	S.share(shareobj);
}
