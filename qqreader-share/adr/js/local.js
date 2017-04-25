//本模块依赖于jsbridge.js和common.js。
var Local = (function( JsBridge){
    if (window.init){
        document.addEventListener('DOMContentLoaded', init, false); 
        document.ondragstart = function() {
            return false;
        };
    }  
    var Local = {};
    //android js安全策略，进行注册
    Local.resApis = function () {
        JsBridge.restoreApis({
                'JSContent': ['setWebTitlebarIcon'],
                'JSToast': ['showToast'],
                'JSSns': ['sharePage']    
            },
            '5.0.1');
    }; 
    Local.init=function(){
        Local.resApis();
    };     
    //点击分享页面
    Local.shareTopic = function (url, img, title, intro) {
        if (!url) {
            JSToast.showToast("请设置分享页面链接");
            return;
        }
        JSSns.sharePage(url, img, title, intro,1);
    };
    // 设置右上角的分享图标。
    Local.setIconForShareing = function(url,img,title,intro){
        // 点击右上角的分享图标后触发的回调函数。
        Local._share = function(){
            Local.shareTopic(
                url,
                img,
                title,
                intro
            )
        }
        if( window.JSContent ){
            JSContent.setWebTitlebarIcon(JSON.stringify([{
                title: 'shareTopic',
                callback: 'Local._share'
            }]));
        }else{
            console.warn('JSContent is not defined.');
        }
    }
    Local.init();
    return Local;
})(JsBridge);