const data = {
	dev: true,

	page: 'pending',

	img: '../adr/img',

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

	first: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return /first/.test( val )?true:false
	})(),
	charge: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return /charge/.test( val )?true:false
	})(),
	monthly: (function(){
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return /monthly/.test( val )?true:false
	})(),

	page_no: (function(){
		var el = document.querySelector('[page-no]');
		var val = el.getAttribute('page-no');
		return val;
	})(),

	loggedIn: false,
	vip: false,

	charged: {
		f1: false,
		f10: false,
		10: false,
		20: false,
		50: false
	},
	have: {
		f1: false,
		f10: false,
		10: false,
		20: false,
		50: false
	},

	opened: false,
	haveGift: false,

	mask: {
		show: false,
		line1: '',
		line2: '',
		text: '',
		cb: ''
	}
};

function act(action){
	var self = this;
	switch(action.type){
		case 'INIT':
			if( self.dev ){
				self.page = 'ready';
			}else{
				Local.forceLogTemp( self.page_no,'enter',0 );
				//self.page = 'ready';
				// if(self.share){
				// 	window.initSNS = function(){
				// 		S.share({
				// 			url: location.href,
				// 			cover: location.href.replace(/share\.html/,'img/qqreader.png'),
				// 			title: 'QQ阅读大神直播',
				// 			desc: 'QQ阅读大神直播'
				// 		})
				// 	};
				// };
				//Local.forceLog( common.param('act_f'),'THXInit' );
				Local.reqaObj( common.server()+`topic/oldcz/init?pagetype=${self.first?1:2}`, function(data) {
					console.log(data)
					
					self.loggedIn = data.isLogin;
					self.vip = data.isVip;

					if( data.picked===true ){
						self.have.f1 = true;
						self.have.f10 = true;
					};
					if( data.haspickmonth===true ){
						self.haveGift = true;
					}

					if( self.dev ){
						self.act({type:'MOCK'});
					}
					self.page = 'ready';
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


		case 'HIDE_MASK':
			setTimeout(()=>{
				self.mask.show = false;
			},300);			
			break;
		case 'CHARGE':
			Local.forceLogTemp( self.page_no,'charge',action.money );
			// MtaH5.clickStat('charge',{
			// 	'page': self.page_no,
			// 	'money': action.money
			// });
			if( !self.loggedIn ){
				self.act({
					type: 'LOGIN'
				})
			}else{
				if(self.dev){
					if( self.first ){
						self.charged['f'+action.money] = true;
					}else{
						self.charged[action.money] = true;
					}
				}else{
					Local.doCharge( 'act',true,action.money*100 );
				}
			};
			self.act({
				type: 'HIDE_MASK'
			})
			break;
		case 'GET_BILLS':
			if(self.dev){
				if( !self.loggedIn ){
					self.loggedIn = true;
				}else{
					if( !self.charged[(self.first?'f':'')+action.money] ){
						self.mask.line1 = '领取失败';
						self.mask.line2 = '需要先充值才可领取书券哦(如您已充值，系统正在处理，请稍等重试)';
						self.mask.text = '充值'+action.money+'元';
						self.mask.cb = 'CHARGE';
						self.mask.money = action.money;
						self.mask.show = true;
					}else{
						if( self.first ){
							self.have['f1'] = true;
							self.have['f10'] = true;
						}else{
							self.have[action.money] = true;
						}
						self.mask.line1 = '已领取成功';
						self.mask.line2 = '书券已及时到账，可以去我的账户查看';
						self.mask.text = '朕知道了';
						self.mask.cb = 'HIDE_MASK';
						self.mask.show = true;
					}
				}
			}else{
				Local.forceLogTemp( self.page_no,'take',action.money );
				// MtaH5.clickStat('take',{
				// 	'page': self.page_no,
				// 	'money': action.money
				// });
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{
					//console.log( common.server()+`topic/oldcz/pick?pagetype=${self.first?1:2}&count=${action.money*100}` );
					Local.reqaObj( common.server()+`topic/oldcz/pick?pagetype=${self.first?1:2}&count=${action.money*100}&page=${self.page_no}`, function(data) {
						console.log(data);
						if( data.code===0 ){
							if( self.first ){
								self.have['f1'] = true;
								self.have['f10'] = true;
							};
							self.mask.line1 = '已领取成功';
							self.mask.line2 = '书券已及时到账，可以去我的账户查看';
							self.mask.text = '朕知道了';
							self.mask.cb = 'HIDE_MASK';
							self.mask.show = true;
						}else{
							self.mask.line1 = '领取失败';
							self.mask.line2 = '需要先充值才可领取书券哦(如您已充值，系统正在处理，请稍等重试)';
							self.mask.text = '充值'+action.money+'元';
							self.mask.cb = 'CHARGE';
							self.mask.money = action.money;
							self.mask.show = true;
							//Local.showToast( data.msg );
						}
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
			}
			break;

		case 'OPEN':
			if(self.dev){
				if( !self.loggedIn ){
					self.loggedIn = true;
				}else{
					if( !self.opened ){
						self.opened = true;
					}
				}
			}else{
				Local.forceLogTemp( self.page_no,'open_month',0 );
				// MtaH5.clickStat('open_month',{
				// 	'page': self.page_no
				// });
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{
					Local.openVip(true);
				}
			}
			self.act({
				type: 'HIDE_MASK'
			})
			break;
		case 'GET_GIFT':
			if(self.dev){
				if( !self.loggedIn ){
					self.loggedIn = true;
				}else{
					if( !self.opened ){
						self.mask.line1 = '领取失败';
						self.mask.line2 = '需要先开通/续费包月才可领取哦(如您已开通/续费包月，系统正在处理，请稍等重试)';
						self.mask.text = '开通/续费一个月包月';
						self.mask.cb = 'OPEN';
						self.mask.show = true;
					}else{
						self.haveGift = true;
						self.mask.line1 = '已领取成功';
						self.mask.line2 = '包月日期至XX年X月X日';
						self.mask.text = '朕知道了';
						self.mask.cb = 'HIDE_MASK';
						self.mask.show = true;
					}
				}
			}else{
				Local.forceLogTemp( self.page_no,'take_month',0 );
				// MtaH5.clickStat('take_month',{
				// 	'page': self.page_no
				// });
				if( !self.loggedIn ){
					self.act({
						type: 'LOGIN'
					})
				}else{
					console.log('GET_GIFT')
					Local.reqaObj( common.server()+`topic/oldcz/pickmonth?pagetype=${self.first?1:2}`, function(data) {
						console.log(data);
						if( data.code===0 ){
							self.haveGift = true;
							self.mask.line1 = '已领取成功';
							self.mask.line2 = '包月日期至'+data.endtime;
							self.mask.text = '朕知道了';
							self.mask.cb = 'HIDE_MASK';
							self.mask.show = true;
						}else{
							self.mask.line1 = '领取失败';
							self.mask.line2 = '需要先开通/续费包月才可领取哦(如您已开通/续费包月，系统正在处理，请稍等重试)';
							self.mask.text = '开通/续费一个月包月';
							self.mask.cb = 'OPEN';
							self.mask.show = true;
							//Local.showToast( data.msg );
						}
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
			}
			break;


		case 'I_WANT':
			if( !self.loggedIn ){
				Local.forceLog( common.param('act_f'),'THXbook_'+action.bid );
				self.act({
					type: 'LOGIN'
				})
			}else{
				if(self.dev){
					self.wanted.push(action.bid);
					self.books_wanted[action.i].number++;
					self.books_wanted[action.i].plus = true;
				}else{
					Local.forceLog( common.param('act_f'),'THXbook_'+action.bid );
					Local.reqaObj( common.server()+'pkg161102/booking?pd='+action.bid, function(data) {
						if( data.code===1 ){
							self.wanted.push(action.bid);
							self.books_wanted[action.i].number++;
							self.books_wanted[action.i].plus = true;
							Local.addToShelfBooks(action.bid);
							Local.showToast('此书已为您加入书架');
						}else if( data.code===-3 ){
							Local.showToast('');
						};
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
			}
			break;
		case 'TO_BUY':
			Local.forceLog( common.param('act_f'),'THXbuy_'+action.bid );
			break;
		// case 'SET_ALARM':
		// 	if( self.loggedIn===false ){
		// 		Local.login();
		// 	}else if( self.alarmState==='unset' ){
		// 		try{
		// 		Local.reqaObj( common.server()+`topic/live/reserve?livetime=`+self.livetime.replace(/\s/g,''), function(data) {
		// 			//console.log( JSON.stringify(data) )
		// 			self.alarmState = 'set';
		// 		}, [], function() {
		// 			Local.showToast("网络异常，请稍候重试");
		// 		}, 1);
		// 		}catch(e){
		// 			console.log(e)
		// 		}
		// 	};
		// 	break;
		// case 'MINUS':
		// 	if( this.timeleft-60000>0 ){
		// 		this.timeleft -= 60000;
		// 	}else{
		// 		this.timeleft = 0;
		// 	}
		// 	break;
		// case 'TO_PLAY':
		// 	Local.openPage( self.href );
		// 	break;

		case 'TO_JINGXUAN':
			Local.forceLogTemp( self.page_no,'to_shucheng',0 );
			// MtaH5.clickStat('to_shucheng',{
			// 	'page': self.page_no
			// });
			Local.toJingxuan();
			break;
		case 'TO_BAOYUE_ZONE':
			Local.forceLogTemp( self.page_no,'to_baoyuequ',0 );
			// MtaH5.clickStat('to_baoyuequ',{
			// 	'page': self.page_no
			// });
			Local.toBaoyueZone();
			break;
		// case 'TO_BOOK':
		// 	if(!self.share){
		// 		ABook.gotoDetail( action.bid );
		// 	}else{
		// 		self.act({
		// 			type: 'SHOW_MASK'
		// 		})
		// 	}
		// 	break;

		// 分享页：
		// case 'SHOW_MASK':
		// 	if(!self.inProcessing){
		// 		self.inProcessing = true;
		// 		var href = location.href;
		// 		href = href.replace(
		// 			/acttopiclive.*/,
		// 			'acttopiclive/'+env.pt+'/index.html?topicid='+common.param('topicid')
		// 		);
		// 		console.log(href);
		// 		N.openPage( href );
		// 		setTimeout(()=>{
		// 			self.show_mask = true;
		// 			self.inProcessing = false;
		// 		},3000)
		// 	}
		// 	break;
		// case 'TO_DOWNLOAD':
		// 	N.downLoad(null, '10003531');
		// 	break;
	}
}

export {data,act};