import "../src/css/index.scss";
import "../src/css/share.scss";
import maskLoad from "../src/components/load.vue";
import appLoad from "./components/appload.vue";
import rule from "../src/components/rule.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		loading:true,
 		loadmask:false,
 		page:{},
 		tab:{pos:1,fix:false,tab1:"",tab2:""},
 		plat:env.pt
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
					url:server()+"pkg170103/shareInit?uid="+param("uid")+"&lt="+param("lt")+"&gd="+param("gd"),
					type:"GET",
					success:function(data){		
						if(data.code==-4){
							self.loading=false;
							self.over=true;
							return;
						}	
						self.page=JSON.parse(data);
						self.loading=false;	              	                
					}	
				});
				forceLog(param("act_f"),"TSJsharepage");
			}else{
				self.page=require("./data.js");
				self.loading=false;
				if(self.page.code==-4){
					self.over=true;
				}
			}
		},
 		isHasApp:function(event){
 			if(event && event.target.id=="btn1"){
 				forceLog(param("act_f"),"TSJspBtn1");
 			}
 			//走判断流程
 			var self=this;
			S.open(function(installStat,plat){
				if(installStat == -2){//浏览器						
					N.openPage(pageurl("act170103"));			
					self.showmask();
				}else if(installStat){//已安装			
					N.openPage(pageurl("act170103"));
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
 		},
		fixscroll:function(){
			var tabPos,scrollTop;		
			tabPos=this.$refs.tab.offsetTop;	
			this.tab.tab1=document.querySelector("#column1").offsetTop;	
			this.tab.tab2=document.querySelector("#column2").offsetTop;
			var self=this;
			window.onscroll=function(){					
				scrollTop=document.body.scrollTop;
				if(scrollTop>tabPos){
					self.$refs.root.style.marginTop="1.7rem";
					self.tab.fix=true;
				}else{
					self.tab.fix=false;
					self.$refs.root.style.marginTop="0";
				}
				if(scrollTop<self.tab.tab2-100){
					self.tab.pos=1;
				}else{
					self.tab.pos=2;
				}
			}
			self.tabClick();			
		},
		tabClick:function(){
			var tablists=this.$refs.tab.querySelectorAll("li");
			var self=this;
			for(var i=0;i<tablists.length;i++){
				(function(index){
					tablists[i].onclick=function() {	
						self.tab.fix=true;
						self.$refs.root.style.marginTop="1.7rem";
						if(index==0){
							window.scrollTo(0,self.tab.tab1);												
						}else if(index==1){
							window.scrollTo(0,self.tab.tab2);
						}
						self.tab.pos=1+index;
						forceLog(param("act_f"),"TSJtab"+self.tab.pos);
					}
				})(i)
			}	
		}
 	},
 	components:{
 		maskLoad,
 		rule,
 		appLoad,
 		batchPackage:require("./components/package1.vue"),
 		choosePackage:require("./components/package2.vue")
 	}
});
window.initSNS=function(){
	var shareobj={
		cover :"https://yuedu.reader.qq.com/event/act170103/adr/images/cover.jpg",
		url : window.location.href,
		title: "19.99任选三本！",
		desc: "经常书荒不用怕，超低折扣打包囤起来！趁低价就要买买买！"
	};
	S.share(shareobj);
}
