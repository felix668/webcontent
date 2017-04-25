var vm=new Vue({
	el:"#app",
	data:{
		loading:true,
		total:'',
		list:[],
		obj:[	  
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170404/adr/main.html?act_f=170404":"https://yuedu.reader.qq.com/event/act170404/ios/main.html?act_f=170404",smallpic:"images/pics/p6-small.jpg",bigpic:"images/pics/p6-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170409/adr/index.html?act_f=170409":"https://yuedu.reader.qq.com/event/act170409/ios/index.html?act_f=170409",smallpic:"images/pics/p3-small.jpg",bigpic:"images/pics/p3-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170408/public/main.html?act_f=170408":"https://yuedu.reader.qq.com/event/act170408/public/main_ios.html?act_f=170408",smallpic:"images/pics/p4-small.jpg",bigpic:"images/pics/p4-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170405/index.html?act_f=170405":"https://yuedu.reader.qq.com/event/act170405/index.html?act_f=170405",smallpic:"images/pics/p5-small.jpg",bigpic:"images/pics/p5-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170406/public/main.html?act_f=170406":"https://yuedu.reader.qq.com/event/act170406/public/main_ios.html?act_f=170406",smallpic:"images/pics/p1-small.jpg",bigpic:"images/pics/p1-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170407/adr/index.html?act_f=170407":"https://yuedu.reader.qq.com/event/act170407/ios/index.html?act_f=170407",smallpic:"images/pics/p2-small.jpg",bigpic:"images/pics/p2-big.jpg"},
            {link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170402/index.html?act_f=170402":"https://yuedu.reader.qq.com/event/act170402/index.html?act_f=170402",smallpic:"images/pics/p9-small.jpg",bigpic:"images/pics/p9-big.jpg"},
            {link:window.pt=="adr"?"http://iyuedu.qq.com/event/actcztemplate/adr/index.html?tid=326743":"https://yuedu.reader.qq.com/event/actcztemplate/ios/index.html?tid=326744",smallpic:"images/pics/p7-small.jpg",bigpic:"images/pics/p7-big.jpg"},
			{link:window.pt=="adr"?"http://iyuedu.qq.com/event/act170403/adr/index.html?act_f=170403":"https://yuedu.reader.qq.com/event/act170403/ios/index.html?act_f=170403",smallpic:"images/pics/p8-small.jpg",bigpic:"images/pics/p8-big.jpg"}
		],
		datalists:{list1:[],list2:[],list3:[]}
	},
 	created:function(){
 		this.init();
 	},
 	methods:{
 		init:function(){
			var self=this;		
			Local.reqaObj(common.serverdata(),function(data) {	
				self.list=data.list;
				self.total=data.total+'';
				self.group();
				self.loading=false;
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);			
			Local.forceLog(common.param("act_f"),"pageinit");			
 		},
		group:function(){
			var obj=this.obj,self=this;
			if(self.list){
				self.list.forEach(function(item,i){
					if(item.status==-1){
						item.id=i;
						self.datalists.list2.push(item);
					}else if(item.status==0){
						item.id=i;
						self.datalists.list1.push(item);
					}else if(item.status==1){
						item.id=i;
						self.datalists.list3.push(item);
					}
				});	
			}
		},
		goPage:function(n,event){
			var link=event.target.getAttribute("link");
			if(!link){return;}
			Local.forceLog(common.param("act_f"),"page"+n);
			Local.openInside(link);		
		}
	}
})
