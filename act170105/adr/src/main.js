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
                coin: 100,
                coupon: 100,
                chargeNum: 1,
                mtaId: '0001'
            },
            {
                coin: 1000,
                coupon: 500,
                chargeNum: 10,
                tagText: '推荐',
                mtaId: '0002'
            }
        ],
        moreChargeList: [
            {
                coin: 1000,
                coupon: 58,
                chargeNum: 10,
                mtaId: '0003'
            },
            {
                coin: 50000,
                coupon: 5000,
                chargeNum: 500,
                tagText: '推荐',
                mtaId: '0008'
            }
        ],
        mainList: [
            {
                coin: 2000,
                coupon: 128,
                chargeNum: 20,
                mtaId: '0004'
            },
            {
                coin: 5000,
                coupon: 328,
                chargeNum: 50,
                mtaId: '0005'
            },
            {
                coin: 10000,
                coupon: 888,
                chargeNum: 100,
                mtaId: '0006'
            },
            {
                coin: 20000,
                coupon: 1888,
                chargeNum: 200,
                mtaId: '0007'
            }
        ],
        rule: [
            '活动时间：2017年1月28日10点 - 2月7日0点；',
            '充值赠送：单次(一次性)充值达到指定额度，则赠送对应额度书券，多充多送！',
            '活动所赠书券有效期均为15天并且即时到账，可用于直接购买书籍，起点账号用户首充礼包将于活动结束后发放；',
            '首充优惠活动仅限第一次充值用户参加，其余用户无法参加；',
            '本活动最终解释权归QQ阅读所有。'
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
                Local.forceLog(common.param('act_f'),'CZinit');
            }

            Local.init();
            //初始化init,获取数据
            Local.reqaObj(common.server()+'sum?act_b=index.html&act_f='
            + (common.param('act_f') || -110), function(retdata) {
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
                    Local.forceLog(common.param('act_f'),'FIRSTCZlogin'+count);
                }else{
                    Local.forceLog(common.param('act_f'),'CZlogin'+count);
                }
            }else{
                if(isFirst){
                    Local.forceLog(common.param('act_f'),'FIRSCZlogout'+count);
                }else{
                    Local.forceLog(common.param('act_f'),'CZlogout'+count);
                }
            }
            Local.doCharge('act',self.isLogin,count);
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