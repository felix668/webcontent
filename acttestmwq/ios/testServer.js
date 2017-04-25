/**
 * Created by bixin on 2016/9/23.
 */
var Index = {};
function init(){
    console.log("init....");
    Index.fillPage();
}
Index.fillPage = function () {

    $('.qqreader').on('tap',function(){

            Local.reqaObj(server() + "pkg160903/doLottery", function(data) {
                // 处理初始化数据
                document.getElementById('content').innerHTML = JSON.stringify(data);

            }, [], function() {
                Local.showToast("网络异常，请稍候重试");
            }, 1);



    })

}