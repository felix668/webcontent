var maskModal = Vue.component('maskmodal', {
    template: '#mask_template',
    props: ['show','islogin','signdays','prize1','prize2','prize3','pagename'],
    data: function(){
        return {
            yuequanNum: '0阅券',
            liuliangNum: '0M',
            flowType: 0,
            phoneNum: ''
        };
    },
    methods: {
        postPick: function (type) {
            var self = this;
            this.flowType = type;

            if(localStorage.getItem('PICK_PHONE_NUM')){
                this.phoneNum = localStorage.getItem('PICK_PHONE_NUM');
            }else{
                this.phoneNum = '';
            }

            Local.reqaObj(server()+'pkg161001/pick?pickType='+type, function(data) {
                if(data.code === 1 || data.code === -3){
                    if(type === 1){
                        self.yuequanNum = data.prizeName;
                        $('.yuequan-picked').addClass('active');
                        self.prize1 = 1;

                        if(self.pagename==='index'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK1'});
                        }else if(self.pagename==='index_a'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK1A'});
                        }else if(self.pagename==='index_b'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK1B'});
                        }

                    }else if(type === 2){
                        $('.liuliang-picking').addClass('active');

                        if(self.pagename==='index'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK2'});
                        }else if(self.pagename==='index_a'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK2A'});
                        }else if(self.pagename==='index_b'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK2B'});
                        }

                    }else{
                        $('.liuliang-picking').addClass('active');

                        if(self.pagename==='index'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK3'});
                        }else if(self.pagename==='index_a'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK3A'});
                        }else if(self.pagename==='index_b'){
                            pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICK3B'});
                        }

                    }
                }else if(data.code === -1){
                    $('.mask-picked.failed').addClass('active');
                }else if(data.code === -4){
                    self.overMask = true;
                }else{
                    self.showMask = false;
                    Local.showToast(data.msg);
                }
            }, [], function() {
                  $('.mask-c.error').addClass('active');
            }, 1);

        },
        closeMask: function () {
            this.show = false;
            $('.mask-c').removeClass('active');
            $('.ll-img').removeClass('active');
            $('.tel-tip').removeClass('tel-picked').html('仅限中国移动、联通、电信用户');
        },
        pickFlow: function () {
            // 先检查手机号
            var self = this;
            if(this.islogin){
                if(this.checkPhoneNum(this.phoneNum)){
                    $('.tel-tip').removeClass('tel-picked').html('仅限中国移动、联通、电信用户');
                    Local.reqaObj(server()+'pkg161001/pick2?pickType='+self.flowType+'&phoneNumber='+self.phoneNum, function(data) {
                        if(data.code===1){
                            $('.mask-c').removeClass('active');
                            $('.mask-picked.suc').addClass('active');
                            if(self.flowType===2){
                                if(self.checkOperator(self.phoneNum)===1){
                                    self.liuliangNum = '30M';
                                }else{
                                    self.liuliangNum = '50M';
                                }
                                self.prize2 = 1;

                                if(self.pagename==='index'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL50'});
                                }else if(self.pagename==='index_a'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL50A'});
                                }else if(self.pagename==='index_b'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL50B'});
                                }

                            }
                            if(self.flowType===3){
                                if(self.checkOperator(self.phoneNum)===1){
                                    self.liuliangNum = '70M';
                                }else{
                                    self.liuliangNum = '100M';
                                }
                                self.prize3 = 1;

                                if(self.pagename==='index'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL100'});
                                }else if(self.pagename==='index_a'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL100A'});
                                }else if(self.pagename==='index_b'){
                                    pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.PICKLL100B'});
                                }

                            }

                            localStorage.setItem('PICK_PHONE_NUM', self.phoneNum);

                        }else if(data.code === -4){
                            self.overMask = true;
                        }else{
                            Local.showToast(data.msg);
                        }
                    }, [], function() {
                        Local.showToast('网络异常，请稍候重试');
                    }, 1);

                }else{
                    $('.tel-tip').addClass('tel-picked').html('手机号码错误，请重新输入');
                }
            }else{
                Local.login();
            }

        },
        checkPhoneNum: function (num) {
            var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/;//移动
            var PATTERN_CHINAUNICOM =/^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/;//联通
            var PATTERN_CHINATELECOM =/^1(3[3]|5[3]|8[019]|7[7])\d{8}$/;//电信
            return (PATTERN_CHINAMOBILE.test(num) || PATTERN_CHINAUNICOM.test(num) || PATTERN_CHINATELECOM.test(num));
        },
        checkOperator: function(num){
            var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/;//移动
            var PATTERN_CHINAUNICOM =/^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/;//联通
            var PATTERN_CHINATELECOM =/^1(3[3]|5[3]|8[019]|7[7])\d{8}$/;//电信
            if(PATTERN_CHINAMOBILE.test(num)){
                return 1;//移动
            }else if(PATTERN_CHINAUNICOM.test(num)){
                return 2;//联通
            }else if(PATTERN_CHINATELECOM.test(num)){
                return 3;//电信
            }else{
                return 0;//其他
            }
        }
    }
});

var app = new Vue({
    el:'#app',
    data:{
        signArray: [0, 0, 0, 0, 0, 0 ,0],
        showMask: false,
        overMask: false,
        //init
        isLogin: false,
        isVip: false,
        hasSignIn: false,//false 今天未签到， true 今天已签到
        signDays: 0,//签到的天数
        prize1: 0,  //0 表示未领取，1表示已领取
        prize2: 0,
        prize3: 0,
        last50: 999,
        last100: 999,
        pageName: ''
    },
    methods: {
        initPage: function () {
            var self = this;
            self.pageName = self.checkUrl();
            //初始化init,获取数据
            Local.reqaObj(server()+'pkg161001/init', function(data) {
                if(data.code === -4){
                    //活动结束
                    self.overMask = true;
                }else if(data.code === -2){
                    self.isLogin = false;
                }else if(data.code === 1){
                    window.console.log(data);
                    self.isLogin = data.isLogin;
                    self.isVip = data.isVip;
                    self.hasSignIn = data.hasSignIn;
                    self.signDays = data.signDays;
                    self.prize1 = data.prize1;
                    self.prize2 = data.prize2;
                    self.prize3 = data.prize3;
                    self.last50 = data.last50;
                    self.last100 = data.last100;

                    //更新头图进度
                    self.lightWay();
                }
            }, [], function() {
                Local.showToast('网络异常，请稍候重试');
            }, 1);

            forceLog(param('act_f'),'DKinit');
        },
        checkUrl: function(){
            if((window.location.href).indexOf('index.html') > -1){
                return 'index';
            }else if((window.location.href).indexOf('index_a.html') > -1){
                return 'index_a';
            }else if((window.location.href).indexOf('index_b.html') > -1){
                return 'index_b';
            }
        },
        //点亮签到几次的亮点
        lightWay: function () {
            this.signArray = [0, 0, 0, 0, 0, 0 ,0];
            for(var i = 0; i < this.signDays; i++){
                this.signArray[i] = 1;
            }
        },
        //点击打卡按钮
        signHandel: function(e){
            var self = this;
            if(!$(e.currentTarget).hasClass('active')){
                if(this.isLogin){
                    Local.reqaObj(server()+'pkg161001/sign', function(data) {
                        if(data.code===-2){
                            Local.login(); // 再次处理未登录
                        }else if(data.code === -4){
                            self.overMask = true; //不在活动时间
                        }else if(data.code===1){
                            self.signDays++; //签到天数+1
                            self.lightWay(); //更新点亮签到进度way
                            self.hasSignIn = true; //将当天签到状态置为true
                        }
                    }, [], function() {
                        Local.showToast('网络异常，请稍候重试');
                    }, 1);
                    //点击打卡签到 埋点
                    forceLog(param('act_f'),'DKsignbtn');

                    if(self.pageName==='index'){
                        pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.SIGN'});
                    }else if(self.pageName==='index_a'){
                        pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.SIGNA'});
                    }else if(self.pageName==='index_b'){
                        pgvSendClick({hottag:'ISD.SHOW.ACT161001IOS.SIGNB'});
                    }

                }else{
                    Local.login();
                }
            }

        },
        pickHandel: function (e) {
            if(this.isLogin){
                var maskModal = this.$children[0];
                var $cur = $(e.currentTarget);
                if($cur.parent().parent().parent().hasClass('picking')){
                    this.showMask = true;
                    var type = $cur.data('type');

                    //触发一级领取
                    maskModal.postPick(type);
                }
            }else{
                Local.login();
            }

        }

    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
        //页面初始化
        this.initPage();
        if(this.signDays >= 7){
            this.hasSignIn = true;
        }
    }
});



