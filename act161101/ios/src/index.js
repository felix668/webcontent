let overBox=require("./over.vue");
Vue.component( 'over-box',overBox);
let vm = new Vue({
	el: 'body',
	data: {
		isLogin:false,
		over:false,
		mask:false,
		sk:[],
		timeLeft:"",
		booklist:{},
		buyinfo:[],
		package:[],
		userinfo:{}
	},
	created(){
		this.initpage();
	},
	methods:{
		initpage(){
			let self=this;
			Local.reqaObj(server() + "pkg161101/init", function(data) {
				if(data.code == -4){
                   self.over = true;
                }
                else if(data.code == -2){
                	self.isLogin=false;
                }
                else if(data.code == 1){
                	self.isLogin=true;
    				self.userinfo={"gender":data.gender,"qqId":data.qqId,"nickName":data.nickName,"money":data.money,"zmoney":data.z_money,"isPayUser":data.isPayUser};
    				self.package.push(data.package0,data.package1,data.package2,data.package3);   				
                }
                if(data.code!==-4){
                	if(self.sk){
                		self.sk=data.sk.split("_");
                	}  
                	self.timeLeft=data.timeLeft;
                	self.counter();
                } 
                self.booklist=data.bookList;            
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"),"SSYinit");
		},
		buybook(index){
			if(!this.isLogin){
				Local.login();
				return;
			}
			this.buyinfo=this.booklist[index];
			if(!this.userinfo.isPayUser && index==1){
				this.buyinfo.push("111",index);
			}else{
				this.buyinfo.push("1111",index);
			}
			this.mask="buyMask";
			forceLog(param("act_f"),"QGbtn"+index);
		},
		sharepk(index){
			let shareObj = {
				url : prefix()
						+ "act161101/com/share.html?pd="+index+"&sd="+this.userinfo.qqId+"&gd="+this.userinfo.gender,
				cover : prefix()+"act161101/com/images/share2.jpg",
				title : this.userinfo.nickName+"送了三本书给你",
				desc : "三本图书永久免费阅读，随时领取"
			};
			Local.shareEventListen(shareObj.title, shareObj.desc, shareObj.cover,shareObj.url);
			Local.shareControl();
			forceLog(param("act_f"),"ZSbtn"+index);
		},
		share(){
			let shareObj = {
				url : prefix()
						+ "act161101/com/share2.html?gd="+this.userinfo.gender,
				cover : prefix()+"act161101/com/images/share2.jpg",
				title : "今年买买买，就在QQ阅读",
				desc : "我在QQ阅读参加双十一秒杀狂欢，超值包好书不断，抢到就是赚到。"
			};
			Local.shareEventListen(shareObj.title, shareObj.desc, shareObj.cover,shareObj.url);
			Local.shareControl();
			forceLog(param("act_f"),"FXbtn");
		},
		counter(){
			let self=this;
			let timer=setInterval(function(){				
				if(self.timeLeft==0){
					clearInterval(timer);
					return;
				}	
				self.timeLeft--;		
			},1000)
		},
		ms(){
			forceLog(param("act_f"),"MSbtn");
		}
	},
	computed:{
		hour(){	
			let hh=parseInt(this.timeLeft / 3600000);
			return hh < 10 ? "0" + hh : hh;
		},
		minute(){
			let mm=Math.ceil((this.timeLeft - parseInt(this.hour) * 3600000) / 60000);
			return mm < 10? "0" + mm : mm;
		}
	},
	components:{
		buyMask:{
			props:["buyinfo","zmoney","money"],
			template:'<div class="mask"><div class="tiparea"><h2>确认购买？</h2><p class="bor"><span v-for="n in 3">《{{buyinfo[n+2].split("_")[1]}}》</span></p><div class="money"><p class="bookp">价格：<strong>{{buyinfo[5]}}阅点</strong><span>原价{{parseInt(buyinfo[1])*100}}阅点</span></p>'
			+'<p class="account"><span>余额：</span><strong>{{money}}</strong>阅点+<strong>{{zmoney}}</strong>阅券</p></div><div class="submit" @click.prevent="submit" v-if="isEnough">购买</div><a href="uniteqqreader://nativepage/coin/recharge" class="submit" v-else>余额不足，充值购买</a><i class="close" @click.prevent="hidemask"></i></div></div>',
			computed:{
				isEnough(){
					return parseInt(this.zmoney + this.money) >= parseInt(this.buyinfo[5]) ? true : false;
				}
			},
			methods:{
				hidemask(){
					this.$parent.mask=false;
				},
				submit(){
					let self=this;
					Local.reqaObj(server() + "pkg161101/pick?pickId="+self.buyinfo[6], function(data) {
						if(data.code==-4){
							self.$parent.over=true;
							self.hidemask();
						}else if(data.code==-2){
		                    Local.login();
		          		}else if(data.code== 1){
		          			window.location.reload();
		              	}else if(data.code==-1){
		              		self.zmoney=data.z_money;
		              		self.money=data.money; 
						}
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}

			},

		}
	}
})