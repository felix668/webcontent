require('./index.scss');
var Vue = require('vue');

var overComp = Vue.component('over', require('./components/over'));
var firstListComp = Vue.component('first-list', require('./components/first-list'));
var commonListComp = Vue.component('common-list', require('./components/common-list'));
var ruleComp = Vue.component('rule', require('./components/rule'));

var DATA = {
    //所有字段，有就传，没有或空就不传
    name: '新春充赠',                   //页面title
    banner: './img/banner.jpg',        //头部主图banner
    bg_color: '#faedcd',               //背景色
    bg_img: '',            //背景图片
    first_list: [   //首充列表
        {
            card_bg: './img/f-card-bg.png',  //整个卡片背景图片
            btn_bg: './img/f-card-btn.png',  //卡片按钮的背景图片
            desc_color: '#ffffff',           //卡片内描述文字颜色
            btn_color: '#892a32',            //卡片内按钮文字颜色
            coin: 200,  //每个卡片书币数
            coupon: 58,  //每个卡片书券数
            charge: 2   //充值金额

        },
        {
            card_bg: './img/f-card-bg.png',
            btn_bg: './img/f-card-btn.png',
            desc_color: '#ffffff',
            btn_color: '#892a32',
            coin: 1000,
            coupon: 58,
            charge: 10
        }
    ],
    common_list: {   //普通充值列表
        title_bg: './img/common-title.png',  //title图
        short_list: [       //普通充值列表里的短型卡片
            {
                card_bg: './img/cs-card-bg.png',
                btn_bg: './img/cs-card-btn.png',
                desc_color: '#ffffff',
                btn_color: '#892a32',
                coin: 100,
                coupon: 58,
                charge: 1
            },
            {
                card_bg: './img/cs-card-bg.png',
                btn_bg: './img/cs-card-btn-tag.png',
                desc_color: '#ffffff',
                btn_color: '#892a32',
                coin: 1000,
                coupon: 58,
                charge: 10
            }
        ],
        long_list: [      //普通充值列表里的长条卡片
            {
                card_bg: './img/cl-card-bg.png',
                btn_bg: './img/cl-card-btn.png',
                desc_color: '#ffffff',
                btn_color: '#892a32',
                coin: 500,
                coupon: 58,
                charge: 5
            },
            {
                card_bg: './img/cl-card-bg.png',
                btn_bg: './img/cl-card-btn.png',
                desc_color: '#ffffff',
                btn_color: '#892a32',
                coin: 1000,
                coupon: 58,
                charge: 10
            },
            {
                card_bg: './img/cl-card-bg.png',
                btn_bg: './img/cl-card-btn.png',
                desc_color: '#ffffff',
                btn_color: '#892a32',
                coin: 2000,
                coupon: 58,
                charge: 20
            }
        ]
    },
    rule: {
        title: './img/rule-title.png',    //规则title图片
        text: [                            //规则文案，不带序号，前端按索引加序号
            '活动时间：2017年1月27日15点 - 2月3日0点',
            '充值赠送：单次(一次性)充值达到指定额度，则赠送对应额度书券，多充多送！',
            '活动所赠书券有效期均为15天并且即时到账，可用于直接购买书籍；',
            '首充优惠活动仅限第一次充值用户参加，其余用户无法参加；',
            '本活动最终解释权归QQ阅读所有。'
        ],
        color: '#633e3c',                      //规则文字颜色
        bottom_bg: './img/bot-bg.png',     //规则底部背景图
        logo: './img/banner.jpg'    //底部logo
    }
};

var app = new Vue({
    el:'#app',
    data:{
        config: {
            name: '',
            banner: '',
            bg_color: '',
            bg_img: '',
            first_list: [],
            common_list: {
                title_bg: '',
                short_list: [],
                long_list: []
            },
            rule_title: '',
            rule_text: [],
            bottom_bg: '',
            bottom_logo: ''
        },
        isLogin: false,
        over: false,
        showPage: true,
        styleObj: {
            content: {}
        }
    },
    methods: {
        initPage: function () {
            var self = this;
            Local.forceLog(common.param('tid'),'CZinit');
            Local.init();
            //初始化init,获取数据
            // Local.reqaObj(common.server()+'template/reccharge?tid='+common.param('tid'), function(retdata) {
            //     console.log(retdata);



            //  }, [], function() {
            //     Local.showToast('网络异常，请稍候重试');
            //  }, 1);

            self.showPage = false;
            self.config = DATA;
            document.title = self.config.name;


        }
    },
    computed: function(){

    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
        this.initPage();
    }
});