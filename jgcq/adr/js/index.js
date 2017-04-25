$(document).ready(function () {
    forceLog(param('act_f'), 'JGCQinit');
    Local.init();
    Local.reqaObj(server() + "pkgjgcq/init", function (data) {
        console.log(data.code)
        if (data.code == -4) {
            //活动已结束
            //按钮置灰
            $("#over").show();
            $(".wrap").hide();
        }
        $('.issue').html(data.startIssue + '期到' + data.endIssue + '期');
        $('.time1').html('优惠时间：' + data.startTime.split('-')[1] + '月' + data.startTime.split('-')[2] + '日－' + data.endTime.split('-')[1] + '月' + data.endTime.split('-')[2] + '日');
    }, [], function () {
        Local.showToast("网络异常，请稍候重试");
    }, 1);
    console.log("ready!");
    var flag = 1;
    $('.btn-buy').on('tap', function () {
        showmask();

    });


    $('.cancle').on('touchend', function (e) {
        e.preventDefault();
        hidemask();
    })
    $('.certain').on('touchend', function (e) {
        e.preventDefault();
        hidemask();

        if (flag == 1) {
            flag = 0;
            forceLog(param('act_f'), 'JGCQbuy');
            Local.reqaObj(server() + "pkgjgcq/pick", function (data) {
                console.log(JSON.stringify(data));
                switch (data.code) {
                    case -4:
                        Local.showToast("本期活动已结束");
                        break;//活动已结束
                    case -3:
                        Local.showToast("您已购买过，无须重复购买");
                        break;//已购买过
                    case -2:
                        Local.login();
                        break;//未登录
                    case -1:
                        Local.showToast("余额不足");
                        break;//余额不足
                    case 1:
                        Local.showToast("购买成功");
                        break;//购买成功
                    default :
                        Local.showToast("网络异常，请稍候重试");//网络异常
                }


            }, [], function () {
                Local.showToast("网络异常，请稍候重试");
            }, 1);
            flag = 1;
        }
    })

    //显示弹窗
    function showmask() {

        $(".mask").addClass("show");
    }

    //隐藏弹窗
    function hidemask() {

        $(".mask").removeClass("show");

    }



    $('.btn-read').on('tap', function () {

        forceLog(param('act_f'), 'JGCQReadAll');
        location.href = "uniteqqreader://nativepage/authors/mainpage?authorId=4418931404033201&name=武侠精品&iconUrl=http://img1.write.qq.com/writer/p1/contentv2/photo_default.png";
    });
});



