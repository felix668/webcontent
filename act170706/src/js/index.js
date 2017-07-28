import "../css/index.scss";
import maskLoad from "../components/load.vue";
import maskOver from "../components/over.vue";
import bottomBtn from "../components/bottomBtn.vue";
import rule from "../components/rule.vue";
import tab from "../components/tab.vue";
import tip from "../components/tip.vue";
import notLogin from "../components/notLogin.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		plat:window.pt,
 		loading:true,
 		over:false,
 		mask:false,		
 		page:{},
 		isPub: 0,
 		worthData:[],
 		worthData1: [
	        {"author":"舒静庐","bid":223001,"cover":"https:\/\/static.reader.qq.com\/cover\/1\/223001\/b_223001.jpg","price":"1.00","title":"儿女的孝心：把幸福与健康送给老爸老妈"},
	        {"author":"吉米","bid":222999,"cover":"https:\/\/static.reader.qq.com\/cover\/999\/222999\/b_222999.jpg","price":"1.00","title":"月光下的迷情女孩：帅哥真坏，美眉真野"},
	        {"author":"侯书森 邱卫东","bid":223000,"cover":"https:\/\/static.reader.qq.com\/cover\/0\/223000\/b_223000.jpg","price":"1.00","title":"猪八戒是个好男人"},
	        {"author":"曹金洪","bid":223048,"cover":"https:\/\/static.reader.qq.com\/cover\/48\/223048\/b_223048.jpg","price":"1.00","title":"人是自身幸福的设计师（经典智慧系列）"},
	        {"author":"椰海","bid":223049,"cover":"https:\/\/static.reader.qq.com\/cover\/49\/223049\/b_223049.jpg","price":"1.00","title":"梦惑"},
	        {"author":"曹金洪","bid":223050,"cover":"https:\/\/static.reader.qq.com\/cover\/50\/223050\/b_223050.jpg","price":"1.00","title":"容易走的都是下坡路（经典智慧系列）"},
	    ],
 		flog:true
 	},
 	created:function(){
 		if (common.param('pub') == 1) {
 			// console.log(common.param('pub'))
 			this.isPub = 1
 		}
 		this.init();
 	},
 	mounted:function (){	
 		// FastClick.attach(document.body);
 	},
 	methods:{
 		init(){		
 			if (process.env.NODE_ENV === 'production') {
 				Local.reqaObj(common.server()+`pkg170706/init?pub=${this.isPub==1?1:0}`,data=>{
 					// console.log(data)
 					if(data.code==-4){
						this.over=true;
						return;
					}
					this.worthData = data.bookList
 				});
 				let url = 'https://event.reader.qq.com/activity/pkgTSJ/init?topicIds=329526,329536'
 				if (this.isPub == 1) {
 					url = 'https://event.reader.qq.com/activity/pkgTSJ/init?topicIds=329564,329564'
 				}
				Local.reqaObj(url,data=>{
					if(data.code==-4){
						this.over=true;
						return;
					}
					this.page=data;	
					document.body.style.backgroundColor=this.page.pictureAndStyle.bodycolor;
					if(this.plat=="ios"){
						this.page.isLogin=true;
					}
					this.loading=false;										
				}, [], function() {					
					Local.showToast("网络异常，请稍候重试");
				}, 1);		
				Local.forceLog(common.param("act_f"),"TSJpageinit");	
			}else{		
				var data = require("./data.js");
				this.page=data;
				this.loading=false;
				document.body.style.backgroundColor=this.page.pictureAndStyle.bodycolor;
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
				url: `${common.sharefront()}TemplateOfTSJ/com/index.html?gd=${this.page.gd}&lt=${this.page.lt}&uid=${this.page.uid}&topicIds=${common.param("topicIds")}&act_f=${common.param("act_f")}`,
				cover: info.sharecover,
				title: info.sharetitle,
				desc: info.sharedesc
			};		
			Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc);								
			Local.forceLog(common.param("act_f"),"TSJshare");
		},
		getMoney(){
			if(this.plat=="ios"){
				Local.reqaObj(`${common.server()}pkgTSJ/recover`, data =>{  								
					this.page.money=data.money;
					this.page.z_money=data.z_money;						
				}, [], function() {				
					//Local.showToast("网络异常，请稍候重试");
				}, 1);	
			}
		}
 	},
 	components:{
 		maskLoad,
 		tab,
 		tip,
 		maskOver,
 		rule,
 		bottomBtn,
 		notLogin,
 		worthPackage:require("../components/package0.vue"),
 		batchPackage:require("../components/package1.vue"),
 		choosePackage:require("../components/package2.vue"),
 		maskBuy:require("../components/buy.vue"),
 	}
});

