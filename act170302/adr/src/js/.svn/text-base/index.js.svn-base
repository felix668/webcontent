import "../css/reset.scss";
import maskLoad from "../components/load.vue";
import maskOver from "../components/over.vue";
import container from "../components/container.vue";
var vm=new Vue({
	el:"#root",
 	data:{
 		loading:true,
 		over:false,
 		godnessTopList:[]
 	},
 	created:function(){
 		this.init();
 	},
 	mounted:function(){
 		
 	},
 	methods:{
 		init:function(){
			var self=this;
			if(process.env.NODE_ENV=="production"){				
				Local.reqaObj(common.server() + "pkg170302/init", function(data) {  			
					if(data.code==-4){
						self.loading=false;
						self.over=true;
						return;
					}
					self.godnessTopList=data.GodnessTopList;	
					self.loading=false;	
					//Local.forceLog(common.param("act_f"),"");					
				}, [], function() {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
			}else{
				var data={"isLogin":false,"isVip":null,
				"GodnessTopList":[
					{"dashenId":"3004318000884801","num":303803},{"dashenId":"3004892201926401","num":303788},
					{"dashenId":"3004440100459201","num":303783},{"dashenId":"3004554801227801","num":303778},
					{"dashenId":"3004288801828001","num":303768},{"dashenId":"3004735501877501","num":303763},
					{"dashenId":"3100431601701301","num":303758},{"dashenId":"4043569804966001","num":303653}
				],
				"code":1,"msg":"init success"}
				self.loading=false;
				if(data.code==-4){					
					self.over=true;
				}else{
					self.godnessTopList=data.GodnessTopList;
				}
			}																		
 		}
 	},
 	components:{
 		maskLoad,
 		maskOver,
 		container
 	}
});
