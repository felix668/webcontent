var app = new Vue({
	el: 'body',
	data: {
		isLogin:true,
		banner:'',
		intro:'',
		column1:{},
		c1books:[],
		column2:{},
		c2books:[],
		column3:{},
		c3books:[],
		open:false,
		showLoadMask: true
	},
	ready: function(){
		this.initpage();
	},
	methods:{
		initpage:function(){
			var self=this;
			Local.init();
			var version = location.href.indexOf("index2")>0?"B":"A";
            var act_by = "INDEX";
            var topicid = param("topicid")|| -1;
            Local.reqaObj(server() + "topic/new/sumtopic?act_b=" + act_by+"&page="+version+"&topicid="+topicid,
                function(data) {
                }, [], function() {
                    Local.showToast("网络不畅，请稍后再试试");
                }, 1);
			Local.reqaObj(server() + "topic/new/init?topicid="+param("topicid"), function(data) {
				console.log(data.code);
				if(!data.isLogin){
                   //Local.login();
                   self.isLogin=false;
                }
                if(data.topic){
                	var topic=data.topic;
	            	self.banner=topic.preimage;
	            	self.intro=topic.intro;
	            	self.column1=topic.columntop;
	            	self.c1books=self.column1.books[0];
	            	self.column2=topic.columnmiddle;
	            	self.column3=topic.columnbottom;
	            	self.c3books=self.column3.books;
                }
                self.showLoadMask = false;
                window.scroll(0,0);
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		openintro:function($event){
			$($event.target).removeClass("open");
		},
		goreadpage:function($event){
		    var topicid  = param("topicid") || -1;
		    var bid=$($event.target).attr("bid");
		    var position=$($event.target).attr("position");
		    var version = location.href.indexOf("index2")>0?"B":"A";
		    var act_by = "TOPIC_TOBOOK";
		    Local.reqaObj(server() + "topic/new/sumtopic?act_b=" + act_by + "&page=" + version + "&bid=" + bid+"&topicid="+topicid+"&position="+position,
                function(data) {
                }, [], function() {
                    Local.showToast("网络不畅，请稍后再试试");
                }, 1);

			if(this.isLogin){
				ABook.gotoRead(bid);
			}else{
				Local.showToast("登录免费读");
				Local.login();
			}
		}
	}
})
