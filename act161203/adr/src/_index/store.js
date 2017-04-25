const data = {
	dev: false,

	page: 'pending',

	what: (function(){
		var el = document.querySelector('[what]');
		var val = el.getAttribute('what');
		return val;
	})(),

	adr: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		console.log(val)
		return /adr/.test( val )?true:false
	})(), 

	ios: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		console.log(val)
		return /ios/.test( val )?true:false
	})(),

	share: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return /share/.test( val )?true:false
	})(),
	entry: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return /entry/.test( val )?true:false
	})(),

	loggedIn: false,
	vip: false,
	uid: '',
	avatar: './img/default.jpg',

	stage: -1,
	mask_books: false,

	day: 0,
	current: 0,

	total: 0,

	writers: require('./writers.js').default,

	info: {
		time: 0,
		billsAvailable: 0,
		billsReceived: 0
	},

	tl: ''
};

function act(action){
	var self = this;
	switch(action.type){
		case 'CHANGE_STAGE':
			this.stage = action.n;
			break;
		case 'SWITCH':
			this.current = action.n;
			Local.forceLog( common.param('act_f'),self.what+'_switch' );
			break;
		case 'CHANGE_STATE':
			this.writers[action.i].state = action.state;
			break;
		case 'SET_LOADED':
			this.writers[action.i].loaded = true;
			break;

		case 'EXCHANGE':
			if( self.dev ){

			}else{
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{
					if( !self.ios ){
						Local.reqaObj("http://adr.reader.qq.com/6_2/weekReadTime/presentBilling", function(data) {
							if( data.code===0 ){
								Local.showToast("领取成功");
								location.href = location.href;
							}else{
								Local.showToast( data.msg );
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}else{
						Local.reqaObj("https://ptbookios.reader.qq.com/v6_3_7/weekReadTime/presentBilling", function(data) {
							if( data.code===0 ){
								Local.showToast("领取成功");
								location.href = location.href;
							}else{
								Local.showToast( data.msg );
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				}
			}
			break;

		case 'PLAY_VIDEO':
			Local.forceLog( common.param('act_f'),self.what+'_play_'+action.i );
			break;

		case 'INIT':
			if( self.dev ){
				self.day = 2;
				self.writers[6].unlocked = true;
				self.stage = 0;
				self.page = 'ready';
			}else{

				if( self.entry&&self.ios ){
					var client = common.param('client');
					if( client===2&&client===3 ){
						if( window.iOSNative ){
							//iOSNative.customUI('红包','000000');
						};
					}
				};

				// 每次分享操作完成后，客户端将会自动调用的回调函数：
				// url：分享出去的链接，success:是否分享成功
				window.afterShare = function(url,success){
					//Local.showToast('分享成功！');
				    Local.reqaObj( common.server()+`pkg161203/pick?idx=${self.current}`, function(data) {
				    	if( data.code===1 ){
				    		self.writers[self.current].unlocked = true;
				    		self.total++;
				    	};
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}

				Local.forceLog( common.param('act_f'),self.what+'_enter' );

				Local.reqaObj( common.server()+`pkg161203/init`, function(data) {
					console.log(data)
					
					self.loggedIn = data.isLogin;

					// self.day = data.index;
					// self.total = Number( data.totalFreeNumber );

					// if( data.isLogin ){
					// 	if( data.hasFreeList ){
					// 		data.hasFreeList.forEach(a=>{
					// 			self.writers[Number(a)].unlocked = true;
					// 		})
					// 	};

					// 	if( data.uid ){
					// 		self.uid = data.uid;
					// 	};
					// 	if( data.userAvor ){
					// 		self.avatar = data.userAvor;
					// 	};
					// };

					// if( data.tl ){
					// 	self.tl = data.tl;
					// };
				
					// if( data.code===-4 ){
					// 	self.page = 'over';
					// }else{

						if( self.entry ){
							if( !self.ios ){
								Local.reqaObj( 'http://adr.reader.qq.com/6_2/getWeekReadTime' , function(data) {
									console.log(data);
									self.info.time = data.weekExchangeInfo.weekReadTime;
									self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
									self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;

									self.page = 'ready';
									self.stage = 1;
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}else{
								Local.reqaObj( 'https://ptbookios.reader.qq.com/v6_3_7/getWeekReadTime' , function(data) {
									console.log(data);
									if( data.isLogin ){
										self.info.time = data.weekExchangeInfo.weekReadTime;
										self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
										self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;
									};

									self.page = 'ready';
									self.stage = 1;
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}
						}else{
							// var href = location.href
							// .replace( /http:\/\/solomotest4\.3g\.qq\.com/,'https://ptsolomo.reader.qq.com' )
							// .replace( /http:\/\/iyuedu\.qq\.com/,'https://yuedu.reader.qq.com' )
							// .replace( /act161203.+/,`act161203/com/share.html?uid=${self.uid}&aid=${self.current}&act_f=act_f=161222` );
							// Local.setIconForShareing(
							// 	self.href,
				   //              location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
				   //              '大神送祝福',
				   //              'QQ阅读大神送祝福'
							// );

							// self.page = 'ready';
							// self.stage = 0;
						};
					//};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'MOCK':
			break;
		case 'LOGIN':
			if( self.dev ){
				self.loggedIn = true;
			}else{
				Local.login();
			};
			break;

		case 'PICK':
			Local.reqaObj( common.server()+`pkg161203/pick?idx=${self.current}`, function(data) {
				console.log(data);
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			break;

		case 'TO_BUY':
			Local.forceLog( common.param('act_f'),'THXbuy_'+action.bid );
			break;
		case 'MINUS':
			if( this.timeleft-60000>0 ){
				this.timeleft -= 60000;
			}else{
				this.timeleft = 0;
			}
			break;
		case 'TO_PLAY':
			Local.openPage( self.href );
			break;

		case 'TO_JINGXUAN':
			Local.forceLogTemp( self.page_no,'to_shucheng',0 );
			MtaH5.clickStat('to_shucheng',{
				'page': self.page_no
			});
			Local.toJingxuan();
			break;
		case 'TO_BAOYUE_ZONE':
			Local.forceLogTemp( self.page_no,'to_baoyuequ',0 );
			MtaH5.clickStat('to_baoyuequ',{
				'page': self.page_no
			});
			Local.toBaoyueZone();
			break;

		case 'SHOW_MASK':
			this.mask_books = true;
			Local.forceLog( common.param('act_f'),self.what+'_check' );
			break;
		case 'HIDE_MASK':
			setTimeout(()=>{
				self.mask_books = false;
			},300);			
			break;
		case 'TO_DOWNLOAD':
			N.downLoad(null, '10003531');
			break;

		




		case '_TO_BOOK':
			if(!self.share){
				ABook.gotoDetail( action.bid );
			}else{
				self.act({
					type: 'SHOW_MASK'
				})
			}
			break;
		case '_SHARE':
			//console.log(location.href.replace(/svn/,''))
			if( self.dev ){
				if( !self.loggedIn ){
					self.loggedIn = true;
				}else{
					self.writers[self.current].unlocked = true;
				}
			}else{
				Local.forceLog( common.param('act_f'),self.what+'_share_'+self.current );
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{

					Local.$share(
		                self.href,
		                location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
		                'QQ阅读6周年，大神请客，经典免费读',
		                '我领到免费神作，你也快来吧'
		            )
				}
			}
			break;
	}
}

export {data,act};