import "../src/css/index.scss";
import "../src/css/share.scss";
import maskLoad from "../src/components/load.vue";
import maskOver from "../src/components/over.vue";
import timeTab from "../src/components/timetab.vue";
import appLoad from "./components/appload.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		timeIndx:0,		
 		loading:true,
 		over:false,
 		loadmask:false,
 		page:{},
 		plat:env.pt,
 		weibo:false,
 		flog:false
 	},
 	created:function(){
 		this.init();
 	},
 	mounted:function (){	
 	},
 	methods:{
 		init:function(){
 			var self=this;
 			if(process.env.NODE_ENV=="production"){						
				$.ajax({
					url:server()+"pkg170402/shareInit?uid="+param("uid")+"&lt="+param("lt")+"&gd="+param("gd"),
					type:"GET",
					success:function(data){	
						if(data.code==-4){
							self.loading=false;
							self.over=true;
							return;
						}	
						self.page=JSON.parse(data);
						self.loading=false;	         
						document.body.style.backgroundColor="#1d1523";     	                
					}	
				});
				forceLog("170402","ZKshare"+env.pt);
			}else{
				self.page=require("./data.js");
				self.loading=false;
				if(self.page.code==-4){
					self.over=true;
				}
			}
		},
 		isHasApp:function(event){
 			if(env.vw=="wb"){
 				this.weibo=true;
 				return;
 			}
 			if(event && event.target.id=="btn1"){
 				forceLog("170402","ZKbtn1"+env.pt);
 			}else{
 				forceLog("170402","ZKbtn2"+env.pt);
 			}		
 			//走判断流程
 			var self=this;
			S.open(function(installStat,plat){
				if(installStat == -2){//浏览器
					if(event && event.id=="link"){
						N.openPage(pageurl("act170410/index.html?act_f=170410"));
					}else{						
						N.openPage(pageurl("act170402/index.html?act_f=170402"));
					}			
					self.showmask();
				}else if(installStat){//已安装			
					if(event && event.id=="link"){
						N.openPage(pageurl("act170410/index.html?act_f=170410"));
					}else{						
						N.openPage(pageurl("act170402/index.html?act_f=170402"));
					}	
					if(env.vw=="wx"){
						self.showmask();
					}
				}else{			
					self.showmask();
				}
			})			
 		},
 		showmask:function(){
 			var self=this;
			 setTimeout(function(){
				self.loadmask=true;
			},2000);
 		}
 	},
 	components:{
 		maskLoad,
 		maskOver,
 		appLoad,
 		maskWeibo:require("./components/maskWeibo.vue"),
 		timeTab:timeTab,
 		batchPackage:require("./components/package1.vue"),
 		choosePackage:require("./components/package2.vue"),
 		flashPackage:require("./components/package3.vue")
 	},
 	computed:{
 		booklist(){
 			if(this.page.BookList){
 				return this.page.BookList[this.timeIndx];
 			}
 		},
 		canpick(){
 			return this.timeIndx==0 && this.page.canPick ? true : false;
 		}
 	}
});
window.initSNS=function(){
	var shareobj={
		cover :front()+"act170402/images/cover2.jpg",
		url : window.location.href,
		title: "上百部好书1元秒杀",
		desc: "全民读书邀你来，153小时不间断！"
	};
	S.share(shareobj);
}
