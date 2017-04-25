import 'soap-rem';
import {writers} from './data/writers.js';

require('./common.less');
require('./index.less');
require('./portraits.less');

Vue.component( 'mask-download',require('./components/MaskDownload.vue') );
Vue.component( 'mask-loading',require('./components/MaskLoading.vue') );
Vue.component( 'mask-over',require('./components/MaskOver.vue') );
Vue.component( 'focus',require('./components/Focus.vue') );
Vue.component( 'lottery',require('./components/Lottery.vue') );
Vue.component( 'fire',require('./components/Fire.vue') );

Vue.component( 'mask-intro',require('./components/MaskIntro.vue') );
Vue.component( 'mask-prize',require('./components/MaskPrize.vue') );

Vue.component( 'debug',require('./components/Debug.vue') );

var app = new Vue({
	el: '#root',
	data: {
		ios: /ios/.test( document.title )?true:false,
		testMode: false,


		loggedIn: false,

		download: true,
		over: false,

		writers: JSON.parse(JSON.stringify(writers)),
		writerNo: 0,
		votes: [],

		show_intro_mask: false,

		//用户把票投给的作者的号码。
		//未投票状态下值为-1。
		//其他账号已使用该设备投过票的情况下的值为100。
		picked: -1,

		//maskShow: true
		rotateX: 0,
		rotateY: 0,
		recalibrating: false,

		//用户是否已经抽过奖。
		drawn: false,
		voted_on_other_platform: false,
		//drawn_at_another_platform: false,
		couponGot: false,
		couponUsed: false,

		show_prize_mask: false,
		prize: null

	},
	computed: {
		name: function(){
			return this.ios?'阅券':'书券';
		}
	},
	created: function(){
		var self = this;
		//this.listen();
		this.getData();
	},
	mounted: function(){
		//通知服务器用户进入了index.html页面。
		Local.forceLog( common.param('act_f'),'index' );
		//this.over = true;
	},
	watch: {
		picked: function(){
			if(this.picked>=0&&this.picked<=9){
				this.writers[this.picked].picked = true;
			}
		}
	},
	methods: {
		act: function(action){
			var self = this;
			switch (action.type) {
				//投票：
				//vote for a writer
				case 'PICK':
					if(this.loggedIn===false){
						if( this.testMode ){
							this.loggedIn = true;
						}else{
							Local.login();
						};
					}else{
						if( this.testMode ){
							this.picked = action.id;
							self.writers[action.id].vote++;
						}else{
							Local.reqaObj( common.server()+`pkg161002/vote?authornum=${action.id}`, function(data) {
								self.picked = action.id;				
								self.writers[action.id].vote++;
							}, [], function() {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						}
					}
					break;
				case 'OVER':
					this.over = true;
					break;
				case 'HIDE':
					this.download = false;
					break;
				case 'CLOSE_INTRO':
					this.show_intro_mask = false;
					break;
				case 'CLOSE_PRIZE_MASK':
					this.show_prize_mask = false;
					break;
				//抽奖：
				case 'DRAW':
					if(this.testMode){
						this.prize = 2;
						this.couponGot = true;
						this.couponUsed = false;
						this.show_prize_mask = true;
						this.drawn = true;
					}else{
						Local.reqaObj( common.server()+`pkg161002/pick`, function(data) {
							self.prize = data.prizeId;
							//如果用户获得的奖品是兑换券：
							if(data.prizeId===2){
								self.couponGot = true;
								self.couponUsed = false;
							}
							self.show_prize_mask = true;
							self.drawn = true;
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						pgvSendClick({hottag:'ISD.SHOW.INDEX.DRAW'});
					}
					break;
				case 'TO_USE_COUPON':
					var href = location.href;
					var href__ = href.replace('index.html','books.html');
					location.href = href__;
					if(this.ios){
						setTimeout(()=>{
							location.href = href;
						},500);
					};
					break;
				case 'TO_SHUPING':
					Local.forceLog( common.param('act_f'),'write' );
					pgvSendClick({hottag:'ISD.SHOW.INDEX.WRITE'});
					if(!this.ios){
						window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=e000000000021bzyCl000LQI&ctype=4";
					}else{
						Local.gotoQUrl("uniteqqreader://nativepage/comment/detail?bid=2&commentid=e000000000021bzyCl000LQI&ctype=4");
					}
					break;
			}
		},
		//去书评区
		toShupingqu: function(){

		},
		toUseCoupon: function(){
			this.act({
				type: 'TO_USE_COUPON'
			})
		},
		showIntro: function(n){
			this.show_intro_mask = true;
			this.writerNo = n;

			Local.forceLog( common.param('act_f'),'avatar_'+n );
			pgvSendClick({hottag:'ISD.SHOW.INDEX.INTRO'});
		},
		//投票
		pick: function(n){

			Local.forceLog( common.param('act_f'),'vote' );
			pgvSendClick({hottag:'ISD.SHOW.INDEX.VOTE'});
			this.act({
				type: 'PICK',
				id: n
			})
		},
		getData: function(){
			var self = this;
			Local.reqaObj( common.server()+`pkg161002/init`, function(data) {
				console.log(data)
				if(self.testMode){
					self.writers.forEach((a,i)=>{
						a.votes = data.authorvotes[i];
					})

				}else{
					// update the view model
					self.loggedIn = data.isLogin;
					self.writers.forEach((a,i)=>{
						a.votes = data.authorvotes[i];
					})
					if( data.isLogin ){
						self.picked = data.votewho;
						self.drawn = data.drawn;
						self.voted_on_other_platform = data.voteOnOtherPlatform;
						self.couponGot = data.havecoupon;
						self.couponUsed = data.usecoupon;
					}
					self.$forceUpdate();
					console.log(self.picked)
				};
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},


		listen: function(){
			var self = this;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion',self.handler.bind(self), false);
				document.addEventListener('click',self.recalibrate.bind(self));
			}else{ 
			    console.log(''); 
			}
		},
		recalibrate: function(e){
			this.recalibrating = true;
			this.rotateX = 0;
			this.rotateY = 0;
			setTimeout(()=>{
				this.recalibrating = false;
			},1000)

		},
		handler: function(e){
			if( !this.recalibrating ){
				//this.rotationRate.alpha = e.rotationRate.alpha;
				
				var nextX = this.rotateX + e.rotationRate.alpha*3;
				if(nextX>=45){
					nextX = 45;
				}else if(nextX<=-45){
					nextX = -45;
				}
				this.rotateX = nextX;

				var nextY = this.rotateY + e.rotationRate.beta*3;
				if(nextY>=45){
					nextY = 45;
				}else if(nextY<=-45){
					nextY = -45;
				}
				this.rotateY = nextY;
			}

		}
	}
})