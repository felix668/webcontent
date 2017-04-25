var maskModal = Vue.component('maskmodal', {
    template: '#mask_template',
    props: ['show','isvip','islogin','isopen','votesnum','prize','isover'],
    data: function(){
        return {
			closeicon:true
        };
    },
    methods: {
		closeMask: function () {
			// if(this.$parent.isopen==1){
			// 	console.log("quxufei");
			// 	Local.openVip(true);				
			// }else{
				
			// }
				this.show = false;
				$('.mask-bg').removeClass('active');
        },
        tobaoyue:function(){
        	console.log("qukaitongbaoyue");
        	Local.openVip(true);
        	$(".kt_repalce").show();
			//window.location.href="http://www.baidu.com";
        },
        toxufei:function(){
        	console.log("xufeigbaoyue");
        	Local.openVip(true);
        	$(".xf_repalce").show();
			//window.location.href="http://www.baidu.com";
        }
    }
});
var app=new Vue({
	el:'#app',
	data:{
		loading:true,
		noclick:false,//活动结束，不能投票不能领书券
		showMask: false,//投票弹框
		isOver:false,
		isLogin:false,
		isVip:false,
		votesNum:0,
		votesState:[0,0,0],
		prize:2,//投票结果
		isopen:0,//0活动期间没用做包月操作，1活动期间有包月操作，2已领取
		maskshow:false,
		quanmk:false,//书券说明弹框
		receiveok:false,//领取是否成功
		resultArray:[],
		freebook:[{
			bid:'123',
			title:'书名',
			cover:'images/freebook.jpg'
		},{
			bid:'1234',
			title:'书名',
			cover:'images/freebook.jpg'
		},{
			bid:'1235',
			title:'书名',
			cover:'images/freebook.jpg'
		}],
		books:[
			[{
				id:1,
				bid:747867,
				bookname:'最强修炼系统',
				bookface:'images/book0.jpg',
				bookclass:'科幻',
				votes:20
			},{
				id:2,
				bid:830788,
				bookname:'英雄联盟之绝世无双',
				bookface:'images/book1.jpg',
				bookclass:'游戏',
				votes:10
			}],

			[{
				id:3,
				bid:838744,
				bookname:'御膳房的小娘子',
				bookface:'images/book2.jpg',
				bookclass:'古言',
				votes:30
			},{
				id:4,
				bid:838243,
				bookname:'总裁的秘密爱人',
				bookface:'images/book3.jpg',
				bookclass:'现言',
				votes:40
			}],

			[{
				id:5,
				bid:790275,
				bookname:'追我女朋友的那家伙',
				bookface:'images/book4.jpg',
				bookclass:'社会',
				votes:50
			},{
				id:6,
				bid:405005,
				bookname:'康熙大帝：夺宫初政',
				bookface:'images/book5.jpg',
				bookclass:'历史',
				votes:60
			}]
		]
	},
	computed:{
		resultArray:function(){
			//票数高的前三本书
			var resultbooks=[{bid:'',bookface:''},{bid:'',bookface:''},{bid:'',bookface:''}];
			for(var i=0;i<this.books.length;i++){
				var resultbook=(this.books[i][0].votes>this.books[i][1].votes)?this.books[i][0].bookface:this.books[i][1].bookface;
				var bid=(this.books[i][0].votes>this.books[i][1].votes)?this.books[i][0].bid:this.books[i][1].bid;
				//this.resultArray.$set(i,{bookface:resultbook});
				resultbooks[i].bookface=resultbook;
				resultbooks[i].bid=bid;
			};
			return 	resultbooks;
		},
	},
	methods: {
		initPage: function () {
			var self = this;
			Local.init();
			//初始化init,获取数据
			Local.reqaObj(server()+"vip/init", function(data) {
				console.log(data);
				self.loading=false;
				self.books[0][0].votes=data.counts[0]?data.counts[0]:0;
				self.books[0][1].votes=data.counts[1]?data.counts[1]:0;
				self.books[1][0].votes=data.counts[2]?data.counts[2]:0;
				self.books[1][1].votes=data.counts[3]?data.counts[3]:0;
				self.books[2][0].votes=data.counts[4]?data.counts[4]:0;
				self.books[2][1].votes=data.counts[5]?data.counts[5]:0;
				self.isOver = data.isOver;
				self.isLogin = data.isLogin;
				self.isVip = data.isVip;
				self.votesState=data.voted;
				self.isopen=data.code;
				//self.prize=data.prize;
				self.votesNum=data.num;
				var books = [];
				for(b in data.books){
					books.push({"bid":data.books[b],"cover":genBookPic(data.books[b],"b")})
				}
				self.freebook = books;
				
			},[], function(){
				Local.showToast('网络异常，请稍候重试');
			},1);
			forceLog(param("act_f"));
			
		},
		//mainfeitiao
		toread:function(e){
			var self=this;
			var $cur = $(e.currentTarget);
			var ind=$cur.parent().index();
			var bid=self.freebook[ind].bid;
			console.log(bid);
			ABook.gotoDetail(bid);
		},
		todetail:function(e){
			var self=this;
			var $cur = $(e.currentTarget);
			var ind=$cur.parent().index();
			var bid=self.resultArray[ind].bid;
			console.log(bid);
			ABook.gotoDetail(bid);
		},
		//baifenbi
		propro:function(num1,num2){
			return (num1/(parseInt(num1)+parseInt(num2)))*100;
		},
		//开通包月
		tovip:function(){
			if(this.isLogin){//去开通包月
				console.log('去开通包月');
				Local.openVip(true);
				$(".kt_repalce").show();
			}else{
				Local.login();
				//console.log('请登录');
			}
		},
		xfbaoyue:function(){
			Local.openVip(true);
			$(".xf_repalce").show();
		},
		//领书券
		toreceive:function(){
			var self=this;
			Local.reqaObj(server()+"vip/pick", function(data) {
				self.isLogin=data.isLogin;
				self.isVip=data.isVip;
				self.votesNum=data.num;
				if(self.isLogin){
					if(data.code==1){
						self.maskshow=true;
						self.receiveok=true;
						self.isopen = 2;
						$('.mask-bg').addClass('active');
					}else if(data.code==-2){
						Local.showToast(data.msg);
					}else if(data.code==-8){
						self.maskshow=true;
						self.noclick=true;
						$('.mask-bg').addClass('active');
					}
				}else{
					Local.login();
				}
			},[], function(){
				Local.showToast('网络异常，请稍候重试');
			},1);
			forceLog(param("act_f"),"rec_quan");	
		},
		quantk:function(){
			this.maskshow=true;
			this.quanmk=true;
			$('.mask-bg').addClass('active');
		},
		colsequan:function(){
			this.maskshow=false;
			this.quanmk=false;
			$('.mask-bg').removeClass('active');
		},
		repalce:function(){
			location.replace(location);
			$(".xf_repalce").hide();
		},
		//投票
		votes:function(e){
			var self=this;
			var maskModal = this.$children[0];
			var $cur = $(e.currentTarget);
			var type=$cur.data('type');
			var ind=$cur.parent().parent().index();
			var bookid=self.books[type][ind].id;
			Local.reqaObj(server()+"vip/vote?bi="+bookid, function(data) {
				self.isLogin=data.isLogin;
				self.isVip=data.isVip;
				self.votesState=data.voted;
				self.votesNum=data.num;
				//self.prize=data.code;//4、2、0、－8
				if(self.isLogin){
					if(data.code>=0){
						self.votesState.$set(type,1);	
						self.books[0][0].votes=data.counts[0]?data.counts[0]:0;
						self.books[0][1].votes=data.counts[1]?data.counts[1]:0;
						self.books[1][0].votes=data.counts[2]?data.counts[2]:0;
						self.books[1][1].votes=data.counts[3]?data.counts[3]:0;
						self.books[2][0].votes=data.counts[4]?data.counts[4]:0;
						self.books[2][1].votes=data.counts[5]?data.counts[5]:0;
						console.log(self.votesNum);
						if(self.votesNum==1 || self.votesNum==3){
							self.prize=data.code;
							self.showMask=true;
							$('.mask-bg').addClass('active');
						};
					}else if(data.code<0){
						if(data.code==-8){
							self.noclick=true;
							self.maskshow=true;
							$('.mask-bg').addClass('active');
						}else{
							Local.showToast(data.msg);
						}
					}
				}else{
					Local.login();
				}
			},[], function(){
				Local.showToast('网络异常，请稍候重试');
			},1);
		}
	},
	created:function(){
		//页面初始化
        this.initPage();

	},
});



