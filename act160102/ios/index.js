//获取元素的偏移
function offset(ele){
    var l=ele.offsetLeft;
    var t=ele.offsetTop;
    var p=ele.offsetParent;    
    while(1){
        if(!p||p==document.body)break;         
        l+=p.offsetLeft+p.clientLeft;
        t+=p.offsetTop+p.clientTop;
        p=p.offsetParent;
    }
    return {l:l,t:t}
}
//保存每张图片的位置
var oImgs=document.querySelectorAll("#lists img");
for(var i=0;i<oImgs.length;i++){
    var oImg=oImgs[i];
    console.log(offset(oImg));
    oImg.posi=offset(oImg).t+oImg.offsetHeight;
}
var winH = document.documentElement.clientHeight || document.body.clientHeight;
//图片延迟加载的方法
var lazyload = function () {  
    for(var i=0;i<oImgs.length;i++){
        var oImg=oImgs[i];
        if(oImg.loaded)continue;
        var wBottom=(document.documentElement.scrollTop||document.body.scrollTop)+winH;
        if(oImg.posi<wBottom){
        	console.log(oImg.posi);
            loadImg(oImg);
        }
    }              
};
function loadImg(oImg){
    var tempImg=new Image;
    var src=oImg.getAttribute("realImg");
    tempImg.src=src;
    tempImg.onload=function(){
        oImg.src=src;
        oImg.style.opacity="1";
        oImg.loaded=true;
    }
}

function init(){
	//进入页面,加载完成数据后,1s后在加载真实图片或者滚动的时候加载真实的图片
	lazyload();
	window.onscroll = lazyload;
}