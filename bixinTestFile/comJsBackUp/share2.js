window.get=(function get(url) {
    var reg = /([^?&=]+)=([^?&=]+)/g, obj = {}, res = reg.exec(url);
    while (res) {
        var fir = res[1], tww = res[2];
        obj[fir] = tww;
        res = reg.exec(url);
    }
    return obj;
})(window.location.href);
function initSNS(){
	var shareobj={
		"cover" : front()+"act161101/com/images/share2.jpg",
		"url" : window.location.href,
		"title" : "今年买买买，就在QQ阅读",
		"desc" : "我在QQ阅读参加双十一秒杀狂欢，超值包好书不断，抢到就是赚到。"
	};
	S.share(shareobj);
}
var vm = new Vue({
	el: 'body',
	data: {
		over:false,
		mask:false,
		sk:[],
		timeLeft:"",
		booklist:{}
	},
	created: function(){
		this.initpage();		
	},
	methods:{
		initpage:function(){
			var self=this;
			$.ajax({
				"url":"http://event.book.qq.com/andmain/pkg161101/shareInit?gd="+get.gd,
				type:"GET",
				success:function(data){
					var data=JSON.parse(data);
					if(data.code==-4){
	                   self.over = true;
	                }else if(data.code==1){
	                	if(self.sk){
	                		self.sk=data.sk.split("_");
	                	}	                	
	                	self.timeLeft=data.timeLeft;
	                	self.counter();
	                }	                
	                self.booklist=data.bookList;	                            	
	            }
			});
			forceLog(param("act_f"),"FX2page");
		},
		goactpage:function(){//活动
			var self=this;
		    S.open(function(installStat,plat){
				if(installStat == -2){
					N.openPage("http://iyuedu.qq.com/event/act161101/"+env.pt+"/index.html?act_f=161111");
					self.showmask();
				}else if(installStat){
					N.openPage("http://iyuedu.qq.com/event/act161101/"+env.pt+"/index.html?act_f=161111");
				}
				else{
					self.showmask();
				}
			})
			forceLog(param("act_f"),"openpage");
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
			this.hidemask();
			N.downLoad(null, '10024407');
			forceLog("161102","FX2DLbtn");
		},
		counter:function(){
			var self=this;
			var timer=setInterval(function(){				
				if(self.timeLeft==0){
					clearInterval(timer);
					return;
				}	
				self.timeLeft--;		
			},1000)
		}
	},
	computed:{
		hour:function(){	
			var hh=parseInt(this.timeLeft / 3600000);
			return hh < 10 ? "0" + hh : hh;
		},
		minute:function(){
			var mm=Math.ceil((this.timeLeft - parseInt(this.hour) * 3600000) / 60000);
			return mm < 10? "0" + mm : mm;
		}
	}
})
