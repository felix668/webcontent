var app = new Vue({
	el: 'body',
	data: {
		isLogin:true,
		over:false,
		avor:"images/default.png",
		nickname:"",
		qurl:"",
		booklist:[]
	},
	ready: function(){
		this.initpage();
	},
	methods:{
		initpage:function(){
            var self=this;
			Local.init();
			Local.reqaObj(server() + "pkg160902/init", function(data) {
				if(data.code==1){
                    self.isLogin=true;
                    self.avor=data.avor;
                    self.nickname=data.nickName;
                    self.qurl=data.qurl;
                    self.booklist=data.shelf;
                }else if(data.code==-2){
                    self.isLogin=false;
                }else if(data.code==-4){
                    //活动已结束
                    self.over=true;
                }
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"init");
		},
		clicknum:function() {
			forceLog(param("act_f"),"rewardbtn");
			MtaH5.clickStat("reward1");
		}
	}
})
var mySwiper = new Swiper('.swiper-container', {
	autoplay:2000,
	speed:600,
	loop:true,
	autoplayDisableOnInteraction:false
}); 	
$('.arrow-left').on('tap', function(e){
     e.preventDefault();
     mySwiper.swipePrev();
})
$('.arrow-right').on('tap', function(e){
     e.preventDefault();
     mySwiper.swipeNext();
})