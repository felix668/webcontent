const data = {
	dev: true,

	page: 'pending',

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

	loggedIn: false,
	// 秒杀专场
	stageNo: -2,
	timeNext: 100000000,
	killed: [],
	books: (function(){
		var books = [];
		for(let i=0;i<6;i++){
			books[i] = {
				title: '',
				bid: '',
				left: 0,
				killed: false
			}
		};
		return books;
	})(),
	randomBook: {},

	// 想要
	wanted: [],
	books_wanted: (function(){
		var wanted = [];
		for(let i=0;i<4;i++){
			wanted[i] = {
				bid: '--',
				title: '--',
				author: 'author',
				price: '0.05元/千字',
				number: 10,
				wanted: false,
				discount: '5',
				plus: false,
				canBuy: false
			}
		};
		wanted[2].discount = '3';
		wanted[3].discount = '3';
		return wanted;
	})()
};
function act(action){
	var self = this;
	switch(action.type){
		case 'INIT':
			if( self.dev ){
				self.page = 'ready';
			}else{
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
				Local.forceLog( common.param('act_f'),'THXInit' );
				Local.reqaObj( common.server()+`pkg161102/init`, function(data) {
					console.log(data)

					self.loggedIn = data.isLogin;

					// if( data.todaySK ){
					// 	data.todaySK.forEach((a,i)=>{
					// 		self.books[i].title = a.split('_')[0];
					// 		self.books[i].bid = a.split('_')[1];
					// 	});
					// };
					// data.skBookRestNumber.forEach((a,i)=>{
					// 	self.books[i].left = 100 - Number(a);
					// });
					// if( data.randomSk ){
					// 	self.randomBook.title = data.randomSk.split('_')[0];
					// 	self.randomBook.bid = data.randomSk.split('_')[1];
					// };
					// if( data.hasSKSet ){
					// 	self.killed.push(...data.hasSKSet);
					// };
					// self.stageNo = data.timeIdx;
					// self.timeNext = data.restTimeToNext;

					// data.bookingLists.forEach((a,i)=>{
					// 	self.books_wanted[i].title = a.split('_')[0];
					// 	self.books_wanted[i].bid = a.split('_')[1];
					// 	self.books_wanted[i].author = a.split('_')[2];
					// });
					// for(var key in data.bookingMap){
					// 	self.books_wanted.forEach(a=>{
					// 		if(a.bid===key){
					// 			a.number = Number( data.bookingMap[key] );
					// 		};
					// 	});
					// };
					// data.canBuy.forEach(a=>{
					// 	self.books_wanted.forEach(b=>{
					// 		if(b.bid===a){
					// 			b.canBuy = true;
					// 		};
					// 	});
					// });
					// if( data.hasBookSet ){
					// 	self.wanted.push(...data.hasBookSet);
					// };

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
			if(self.dev){
				self.loggedIn = true;
			}else{
				Local.login();
			};
			break;
		case 'KILL':
			if(self.dev){
				self.killed.push(action.bid);
			}else if(!self.loggedIn){
				Local.forceLog( common.param('act_f'),'THXsk_'+action.bid );
				Local.login();
			}else{
				Local.forceLog( common.param('act_f'),'THXsk_'+action.bid );
				Local.reqaObj( common.server()+'pkg161102/pick?pd='+action.bid, function(data) {
					if( data.code===1 ){
						self.killed.push(action.bid);
						Local.showToast('秒杀成功，已为您加入书架');
					}else if( data.code===-99 ){
						Local.showToast('哎呀手慢了，没抢到');
					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
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
		case 'SET_ALARM':
			if( self.loggedIn===false ){
				Local.login();
			}else if( self.alarmState==='unset' ){
				try{
				Local.reqaObj( common.server()+`topic/live/reserve?livetime=`+self.livetime.replace(/\s/g,''), function(data) {
					//console.log( JSON.stringify(data) )
					self.alarmState = 'set';
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				}catch(e){
					console.log(e)
				}
			};
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
		case 'HIDE_MASK':
			self.show_mask = false;
			break;
		case 'TO_BOOK':
			if(!self.share){
				ABook.gotoDetail( action.bid );
			}else{
				self.act({
					type: 'SHOW_MASK'
				})
			}
			break;

		// 分享页：
		case 'SHOW_MASK':
			if(!self.inProcessing){
				self.inProcessing = true;
				var href = location.href;
				href = href.replace(
					/acttopiclive.*/,
					'acttopiclive/'+env.pt+'/index.html?topicid='+common.param('topicid')
				);
				console.log(href);
				N.openPage( href );
				setTimeout(()=>{
					self.show_mask = true;
					self.inProcessing = false;
				},3000)
			}
			break;
		case 'TO_DOWNLOAD':
			N.downLoad(null, '10003531');
			break;
	}
}

export {data,act};