import "../css/index.scss";
import maskLoad from "../components/load.vue";
import maskOver from "../components/over.vue";
import loginPage from "../components/loginpage.vue";
import rule from "../components/rule.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		plat:document.body.dataset.plat,
 		loading:true,
 		over:false,
 		mask:false,		
 		page:{},
 		user:{"gd":"","lt":"","uid":""},
 		buyinfo:{},
 		tab:{pos:1,fix:false,tab1:"",tab2:""}
 	},
 	created:function(){
 		this.init();
 	},
 	mounted:function(){
 		FastClick.attach(document.body);
 	},
 	methods:{
 		init:function(){
			var self=this;
			if(process.env.NODE_ENV=="production"){				
				Local.reqaObj(common.server() + "pkg170103/init", function(data) {  			
					if(data.code==-4){
						self.loading=false;
						self.over=true;
						return;
					}
					self.page=data;	
					self.loading=false;	
					if(self.plat=="ios"){
						self.page.isLogin=true;
					}
					if(self.page.isLogin){
						self.user={"gd":data.gd,"lt":data.lt,"uid":data.uid};
						Local.forceLog(common.param("act_f"),"TSJpageinit");									
					}else if(!self.page.isLogin){
						Local.forceLog(common.param("act_f"),"TSJloginpage");
					}						
				}, [], function() {				
				Local.showToast("网络异常，请稍候重试");
			}, 1);	
			}else{
				self.page=require("./data.js");	
				self.loading=false;
				if(self.page.code==-4){					
					self.over=true;
				}
			}																		
 		},				
		buy:function(info){
			this.mask=true;
			document.body.style.overflow="hidden";
			this.buyinfo=info;
		},
		hidemask:function(){
			this.mask=false;
			document.body.style.overflow="auto";
		},	
		sharePage:function(){
			var shareObj = {
				url: common.sharefront() + "act170103/com/index.html?gd=" + this.user.gd + "&lt=" + this.user.lt + "&uid=" + this.user.uid,
				cover: common.sharefront() + "act170103/adr/images/cover.jpg",
				title: "19.99任选三本！",
				desc: "经常书荒不用怕，超低折扣打包囤起来！趁低价就要买买买！"
			};		
			Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc, 1);								
			Local.forceLog(common.param("act_f"),"TSJshare");
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
						Local.forceLog(common.param("act_f"),"TSJtab"+self.tab.pos);
					}
				})(i)
			}	
		}
 	},
 	components:{
 		maskLoad,
 		maskOver,
 		loginPage,
 		rule,
 		batchPackage:require("../components/package1.vue"),
 		choosePackage:require("../components/package2.vue"),
 		maskBuy:require("../components/buy.vue"),
 	}
});
window.afterShare = function(url,success){
	forceLog(param("act_f"),"TSJshareSuccess");
}
