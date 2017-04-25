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
		loadmask:false,
		error:"",
		qq:"",
		booklist:{},
		picksuss:"",
		userinfo:{}
	},
	created: function(){
		this.initpage();
	},
	methods:{
		initpage:function(){
			var self=this;
			$.ajax({
				"url":"http://event.book.qq.com/andmain/pkg161101/pickGiftInit?pd="+get.pd+"&sd="+get.sd+"&gd="+get.gd,
				type:"GET",
				success:function(data){
					var data=JSON.parse(data);
					if(data.code==-4){
                   		self.over = true;
	                }else if(data.code== 1){
	    				self.userinfo={"avor":data.avor,"nickName":data.nickName,"hasPicked":data.hasPicked,"pickNickName":data.pickNickName,"qqid":get.sd};
	    				self.booklist=data.bookList;
	                }
	                forceLog(param("act_f"),"FX1page");
				}	
			});
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
			forceLog(param("act_f"),"TZbtn"+env.pt);
		},
		goshelf:function(){
			var self=this;
			S.open(function(installStat,plat){
				if(installStat == -2){//浏览器
					window.location.href="uniteqqreader://nativepage/client/bookshelf";
					self.showmask();
				}else if(installStat){//已安装
					window.location.href="uniteqqreader://nativepage/client/bookshelf";
				}
				else{
					//window.location.href="uniteqqreader://nativepage/client/bookshelf";
					self.showmask();
				}
			})
			forceLog(param("act_f"),"SJbtn"+env.pt);
		},
		showmask:function(){
			 var self=this;
			 setTimeout(function(){
				self.mask=true;
				self.loadmask=true;
			},2000);
		},
		getmask:function(){
			this.mask=true;
			this.loadmask=false;
		},
		hidemask:function(){
			this.mask=false;
			this.loadmask=false;
		},
		dload:function(){
			this.hidemask();
			forceLog("161102","FX1DLbtn");
			N.downLoad(null, '10024407');
		},
		submit:function() {
			if(this.qq=="" || this.qq==this.userinfo.qqid || this.qq.length>15 || this.qq.length<5){
				this.error="请输入正确的qq号码";
				return;
			}
			var self=this;
			$.ajax({
				"url":"http://event.book.qq.com/andmain/pkg161101/pickGift?pd="+get.pd+"&sd="+get.sd+"&gd="+get.gd+"&td="+self.qq,
				type:"GET",
				success:function(data){
					var data=JSON.parse(data);
					if(data.code==-4){
						self.hidemask();
                   		self.over = true;
	                }else if(data.code == 1){
	    				self.picksuss=!data.hasPicked;
	    				self.userinfo.hasPicked=true;
	    				self.hidemask();
	    				forceLog(param("act_f"),"LQbtn"+env.pt);
	                }else if(data.code==-99){
	                	self.error="请输入正确的qq号码";
	                }	                
				}	
			});
		},
		focus:function(){
			this.error="";
			//this.qq="";
		}
	}
})
