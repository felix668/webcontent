测试链接
安卓
http://solomotest4.3g.qq.com/book_res/event/act170707/index.html?act_f=170707
ios
https://ptsolomo.reader.qq.com/book_res/event/act170707/index.html?act_f=170707

正式ios
https://yuedu.reader.qq.com/event/act170707/index.html?act_f=170707
正式安卓
http://iyuedu.qq.com/event/act170707/index.html?act_f=170707

1、推荐票、月票、打赏 ，安卓平台掉主线接口，ios6.5.2以上版本同处理
//换起投月票弹框
      	Local.monthlyRicket = function (bid) {
          window.location.href="uniteqqreader://nativepage/client/monthlyticket?bid=" + bid;
        }
        //换起推荐票弹框
        Local.reCommend = function (bid) {
          window.location.href="uniteqqreader://nativepage/client/recommend?bid=" + bid;
        }
        //换起打赏弹框
        Local.reWard = function (bid) {
          window.location.href="uniteqqreader://nativepage/client/reward?bid=" + bid;
        }
2、ios6.5.2以下版本
推荐票请求
https://newios.reader.qq.com/v6_5_1/rticket/send?bid="+bid+"&count=1
月票走后台请求
3、由于换起客户端走的是正式环境，推荐票和月票返回的数据是正式环境数据
4、取到月票也只是旧版的可以取到，旧版的推荐票走的是主线请求
而其他的都是通过客户端投的，区分不了来源