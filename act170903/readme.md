测试链接
安卓
http://solomotest4.3g.qq.com/book_res/event/act170903/index.html?act_f=170903
ios
https://ptsolomo.reader.qq.com/book_res/event/act170903/index.html?act_f=170903

正式ios
https://yuedu.reader.qq.com/event/act170903/index.html?act_f=170903
正式安卓
http://iyuedu.qq.com/event/act170903/index.html?act_f=170903

1、跳充值页，左上角返回不刷新
2、关闭右上角分享按钮
3、用户抽完奖、领取完碎片刷新数据
4、安卓加书架没有totast提示,手动加提示,弹框里炒作太多，去掉了加书架的操作
5、跳充值，ios不刷新页面
6.沉浸式导航 跳转webview页面，
8.书籍抵扣券增加跳转,由于版本问题，ios655挑转，比版本不跳转，安卓652及以上版本跳转，低版本不跳转
注意：低版本不需要返回书籍抵扣券和漫画抵扣券
安卓
//QURL跳转,开启webview页面
        Local.gotoQUrl = function (url) {
          window.location.href = 'uniteqqreader://webpage/'+url
        } 
IOS
//QURL跳转,开启webview页面
        Local.gotoQUrl = function (url) {
            C.callCocoa({
                "method": "gotoQUrl",
                "url": 'uniteqqreader://webpage/'+url,
            });
        };

7、开启沉浸式导航，ios设置标题
        Local.setPagetitle = function (title){
            C.callCocoa({
                method: "custom_ui",
                title: title,
                showsharebutton: "0",
            });
        }