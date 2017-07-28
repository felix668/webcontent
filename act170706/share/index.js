import "../src/css/index.scss";
import "../src/css/share.scss";
import maskLoad from "../src/components/load.vue";
import maskOver from "../src/components/over.vue";
import appLoad from "./components/appload.vue";
import rule from "../src/components/rule.vue";
import tab from "../src/components/tab.vue";
import maskWb from "./components/weibo.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		loading:true,
 		over:false,
 		loadmask:false,
 		page:{},
 		plat:env.pt,
 		flog:false,
 		wb:false
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
				$.ajax({
					url:server()+"pkgTSJ/shareInit?uid="+param("uid")+"&lt="+param("lt")+"&gd="+param("gd")+"&topicIds="+param("topicIds"),
					type:"GET",
					success:function(data){		
						if(JSON.parse(data).code==-4){
							self.loading=false;
							self.over=true;
							return;
						}	
						self.page=JSON.parse(data);
						document.body.style.backgroundColor=self.page.pictureAndStyle.bodycolor;
						self.loading=false;          	                
					}	
				});
			}else{
				var data=require("./data.js");
				self.loading=false;
				this.page=data;
				document.body.style.backgroundColor=self.page.pictureAndStyle.bodycolor;
			}
			forceLog("tsj","TSJsharepage");		
 		},
 		isHasApp(event){
 			if(event && event.target.id=="btn1"){
 			 	forceLog("tsj","TSJspBtn1");
 			}
 			if(env.vw=="wb"){
 				this.wb=true;
 				return;
 			}
 			//走判断流程
 			var self=this;
			S.open(function(installStat,plat){
				var url="TemplateOfTSJ/index.html?act_f="+param("act_f")+"&topicIds="+param("topicIds");
				if(installStat == -2){//浏览器						
					N.openPage(pageurl(url));			
					self.showmask();
				}else if(installStat){//已安装			
					N.openPage(pageurl(url));	
					// if(env.vw=="wx"){
					// 	self.showmask();
					// }
				}else{			
					self.showmask();
				}
			})			
 		},
 		showmask(){
 			var self=this;
			 setTimeout(function(){
				self.loadmask=true;
			},2000);
 		}
 	},
 	components:{
 		maskLoad,
 		rule,
 		maskOver,
 		appLoad,
 		tab,
 		maskWb,
 		batchPackage:require("./components/package1.vue"),
 		choosePackage:require("./components/package2.vue")
 	}
});
window.initSNS=function(){
	var info=vm.page.pictureAndStyle;
	if(info){
		var shareobj={
			cover :info.sharecover,
			url : window.location.href,
			title: info.sharetitle,
			desc:info.sharedesc
		};
		S.share(shareobj);
	}
}