import "../css/index.scss";
import maskLoad from "../components/load.vue";
import maskOver from "../components/over.vue";
import rule from "../components/rule.vue";
import tab from "../components/tab.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		plat:window.pt,
 		loading:true,
 		over:false,
 		mask:false,		
 		page:{},
 		buyinfo:{},
 		flog:true
 	},
 	created:function(){
 		this.init();
 	},
 	mounted:function (){	
 		FastClick.attach(document.body);
 	},
 	methods:{
 		init(){
 			var self=this;			
 			if (process.env.NODE_ENV === 'production') {
				Local.reqaObj(common.server() + "pkgTSJ/init?topicIds="+common.param("topicIds"), function(data) {  
					if(data.code==-4){
						self.loading=false;
						self.over=true;
						return;
					}
					self.page=data;	
					document.body.style.backgroundColor=self.page.pictureAndStyle.bodycolor;
					if(self.plat=="ios"){
						self.page.isLogin=true;
					}
					self.loading=false;										
				}, [], function() {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);		
				Local.forceLog(common.param("act_f"),"TSJpageinit");	
			}else{		
				var data = require("./data.js");
				self.page=data;
				self.loading=false;
				document.body.style.backgroundColor=self.page.pictureAndStyle.bodycolor;
			}														
 		},				
		buy(info){
			this.mask=true;
			document.body.style.overflow="hidden";
			this.buyinfo=info;
		},
		hidemask(){
			this.mask=false;
			this.getMoney();
			document.body.style.overflow="auto";
		},	
		sharePage(){
			var info=this.page.pictureAndStyle;
			var shareObj = {
				url: common.sharefront() + "TemplateOfTSJ/com/index.html?gd=" + this.page.gd + "&lt=" + this.page.lt + "&uid=" + this.page.uid+"&topicIds="+common.param("topicIds")+"&act_f="+common.param("act_f"),
				cover: info.sharecover,
				title: info.sharetitle,
				desc: info.sharedesc
			};		
			Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc);								
			Local.forceLog(common.param("act_f"),"TSJshare");
		},
		getMoney(){
			if(this.plat=="ios"){
				var self=this;
				Local.reqaObj(common.server() + "pkgTSJ/recover", function(data) {  								
					self.page.money=data.money;
					self.page.z_money=data.z_money;						
				}, [], function() {				
					//Local.showToast("网络异常，请稍候重试");
				}, 1);	
			}
		}
 	},
 	components:{
 		maskLoad,
 		tab,
 		maskOver,
 		rule,
 		batchPackage:require("../components/package1.vue"),
 		choosePackage:require("../components/package2.vue"),
 		maskBuy:require("../components/buy.vue"),
 	}
});

