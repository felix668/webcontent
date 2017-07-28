require('./css/index');
var Vue = require('vue');
var over = require('./components/over');
var card = require('./components/card');
var rule = require('./components/rule');
var overComp = Vue.component('over', over);
var cardComp = Vue.component('card', card);
var ruleComp = Vue.component('rule', rule);
import retdata from "./js/data";
var app = new Vue({
    el:'#app',
    data:{
        config: {
            name: '',
            banner: '',
            card: {
            },
            rule: {
                bottom_bg: ''
            }
        },
        isLogin:true,
        over: false,
        showPage: true,
        styleObj: {
            content: {}
        }
    },
    created: function() {
        this.initPage();
        this.datainit(); 
    },
    methods: {
        datainit(){
            // let data={code:1,isLogin:false}
            Local.reqaObj(`${common.server()}actintime?actid=1`,data=>{
               if(data.code == -4){
                    this.over=true;
                    return;
                } 
                this.isLogin=data.isLogin;
                console.log(this.isLogin)
            }, [], function() {
               Local.showToast('网络异常，请稍候重试');
            }, 1);
            Local.forceLog(common.param('act_f'),'CZinit');
        },
        initPage(){                            
           this.config = retdata;
            this.showPage = false;
            document.title = this.config.name;
            this.styleObj.content = {
                background: `url(${window.pt=="ios" ? 'img/mainios.png' : "img/mainadr.jpg"}) no-repeat`,
                backgroundSize:"100% 100%"
            }     
        },
        openPage(){
            //跳转到聚合页
            Local.forceLog(common.param('act_f'),'score');
            //打开聚合页
            Local.openInside(`${common.front()}act170705/index.html?act_f=170705`);
        }
    },
    computed: function(){

    }
});