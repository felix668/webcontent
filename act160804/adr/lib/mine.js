import './rem.js';

var app = new Vue({
	el: 'body',
	data: {
		isLogin: false,
		over: false,
		
		ios: /ios/.test(document.title)?true:false,

		testMode: false,
		maskShown: false,

		prizes: [
			'iphone6',
			'10成长值',
			'金士顿U盘',
			'5书券',
			'小米手环',
			'小米耳机',
			'100元沪江网校学习卡',
			'50元沪江网校学习卡',
			'200元沪江网校学习卡'
		],
		prizes_ios: [
			'iphone6',
			'未中奖',
			'乐扣乐扣保温杯',
			'5阅券',
			'小米移动电源',
			'小米路由器',
			'100元沪江网校学习卡',
			'50元沪江网校学习卡',
			'200元沪江网校学习卡'
		],
		// 我的奖品列表：
		myPrizes: [
		]
	},
	computed: {

	},
	ready: function(){
		this.fake();
		// 获取数据并更新model：
		this.getData();
	},
	methods: {
		fake: function(){
			var self = this;
			// 供测试用的数据：
			if( self.testMode ){
				var myPrizes = [
					{
						prizename: '金士顿U盘'
					},
					{
						prizename: '小米手环'
					},
					{
						prizename: '100元沪江网校学习卡',
						cardkey: 'Y1008791C0122CD676'
					},
					{
						prizename: '50元沪江网校学习卡',
						cardkey: 'Y1008791C0122CD676'
					}
				];
				// 为数组中的每个奖品添加对应的no，即number：
				myPrizes.forEach((a)=>{
					if( self.ios ){
						self.prizes_ios.forEach((b,i)=>{
							if( b===a.prizename ){
								a.no = i;
							}
						})
					}else{
						self.prizes.forEach((b,i)=>{
							if( b===a.prizename ){
								a.no = i;
							}
						})
					}
					self.myPrizes.push(a);
				});
			};
		},
		getData: function(){
			var self = this;
			Local.reqaObj( common.server()+'pkg160804/cardswin', function(data){
				console.log(data)
				if( data.prizes ){
					// 为数组中的每个奖品添加对应的no，即number：
					data.prizes.forEach((a)=>{
						if( self.ios ){
							self.prizes_ios.forEach((b,i)=>{
								if( b===a.prizename ){
									a.no = i;
								}
							})
						}else{
							self.prizes.forEach((b,i)=>{
								if( b===a.prizename ){
									a.no = i;
								}
							})
						}
						self.myPrizes.push(a);
					});
				};
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		showMask: function(){
			this.maskShown = true;
		},
		closeMask: function(){
			this.maskShown = false;
		}
	}
})