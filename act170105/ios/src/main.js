require('./index.scss');
var Vue = require('vue');
var over = require('./components/over.vue');
var overComp = Vue.component('over', over);

var app = new Vue({
    el:'#app',
    data:{
        isLogin: false,
        endTime: '2017-2-7 00:00:00',
        over: false,
        showPage: true,
        firstChargeList: [
            {
                coin: 600,
                coupon: 200,
                chargeNum: 6,
                mtaId: '1001'
            },
            {
                coin: 1200,
                coupon: 600,
                chargeNum: 12,
                tagText: '推荐',
                mtaId: '1002'
            }
        ],
        moreChargeList: [
            {
                coin: 1200,
                coupon: 68,
                chargeNum: 12,
                mtaId: '1003'
            },
            {
                coin: 61800,
                coupon: 6180,
                chargeNum: 618,
                tagText: '推荐',
                mtaId: '1006'
            }
        ],
        mainList: [
            {
                coin: 3000,
                coupon: 188,
                chargeNum: 30,
                mtaId: '1004'
            },
            {
                coin: 9800,
                coupon: 888,
                chargeNum: 98,
                mtaId: '1005'
            }
        ],
        rule: [
            '时间： 2017年1月28日10点 -  2月7日0点；',
            '充值赠送：单次(一次性)充值达到指定额度，则赠送对应额度阅券，多充多送！',
            '活动所赠阅券有效期均为15天并且即时到账，可用于直接购买书籍，起点账号用户首充礼包将于活动结束后发放；',
            '首充优惠活动仅限第一次充值用户参加，其余用户无法参加；',
            '本活动与苹果公司无关，最终解释权归QQ阅读所有。'
        ]
    },
    methods: {
        initPage: function () {
            var self = this;
            //判断是否过期
            var day = new Date();
            var nowTimeLine = day.getTime();
            var endDay = new Date(self.endTime);
            var endTimeLine = endDay.getTime();
            if(nowTimeLine > endTimeLine){
                self.over = true;
            }else{
                forceLog(param('act_f'),'CZinit');
            }

            //初始化init,获取数据
            Local.reqaObj(server()+'sum?act_b=index.html&act_f='
            + (param('act_f') || -110), function(retdata) {
                console.log(retdata);
                self.showPage = false;
                self.isLogin = retdata.isLogin;

             }, [], function() {
                Local.showToast('网络异常，请稍候重试');
             }, 1);

        },
        doCharge: function (count, mtaid, isFirst) {
            var self = this;
            if(self.isLogin){
                if(isFirst){
                    forceLog(param('act_f'),'FIRSTCZlogin'+count);
                }else{
                    forceLog(param('act_f'),'CZlogin'+count);
                }
            }else{
                if(isFirst){
                    forceLog(param('act_f'),'FIRSTCZlogout'+count);
                }else{
                    forceLog(param('act_f'),'CZlogout'+count);
                }
            }
            Local.openrecharge('act','');
            MtaH5.clickStat(mtaid);
        }
    },
    computed: function(){

    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
        this.initPage();
    }
});