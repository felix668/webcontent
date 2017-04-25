var app = new Vue({
	el: 'body',
	data: {
		book:null,
		mask:false
	},
	ready: function(){
		this.initpage();
	},
	methods:{
		initpage:function(){
			var self=this;
			$.ajax({
				"url":"http://event.book.qq.com/andmain/pkg161003/share",
				type:"GET",
				success:function(data){
					self.book=JSON.parse(data).bookInfoList;
				}	
			});
		},
		goreadpage:function($event){
			var bid=$($event.target).attr("bid");
			 S.open(function(installStat,plat){
			 	if(installStat){
			 		alert(1)
			 		N.toBookDetail(bid);
				}else{
					showmask();
				}
			})
		},
		goactpage:function(){//活动
		    S.open(function(installStat,plat){
				if(installStat){
					alert(env.pt)
					N.openPage("http://iyuedu.qq.com/event/act161003/"+env.pt+"/index.html?act_f=161102");
				}else{
					showmask();
				}
			})
		},
		showmask:function(){
			var self=this;
			setTimeout(function(){
				self.mask=true;
			},2000);
		},
		hidemask:function(){
			this.mask=false;
		},
		dload:function(){
			this.mask=false;
			N.downLoad(null, '10003531');
		}
	}
})
