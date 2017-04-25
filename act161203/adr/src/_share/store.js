const data = {
	dev: true,
	page: 'pending',

	what: (function(){
		var el = document.querySelector('[what]');
		var val = el.getAttribute('what');
		return val;
	})(),

	uid: '',
	nickname: '游客用户',
	avatar: 'img/default.jpg',
	current: 0,

	co: 0,

	total: 0,

	mask: false,

	writers: require('../_index/writers.js').default
}

function act(action){
	var self = this;
	switch(action.type){
		case 'SWITCH':
			this.co = action.i;
			break;
		case 'INIT_SHARE':
			if( self.dev ){
				self.current = 1;
				//self.nickname = '--';
				self.page = 'ready';
			}else{

				Local.forceLog( common.param('act_f'),self.what+'_enter_'+env.pt );
				// common.ajax(
				// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_enter_'+env.pt,
				// 	function(){},
				// 	function(){}
				// );

				sns.share({
					cover: location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
					url: location.href,
					title: 'QQ阅读6周年，大神请客，经典免费读',
					desc: '我领到免费神作，你也快来吧'
				},'111')

				self.current = Number( common.param('aid') );
				self.co = self.current;

				common.ajax( `https://event.reader.qq.com/andmain/pkg161203/shareInit?uid=${common.param('uid')}&aid=${common.param('aid')}`, function(data) {
					console.log(data)
					self.current = Number( common.param('aid') );
					if( data.userNick ){
						self.nickname = data.userNick;
					};
					if( data.userAvor ){
						self.avatar = data.userAvor;
					};
					self.total = data.totalFreeNumber;
					if( data.code===-4 ){
						self.page = 'over';
					}else{
						self.page = 'ready';
					};
				}, function(){} );
			}
			break;

		case 'PLAY_VIDEO':
			Local.forceLog( common.param('act_f'),self.what+'_play_'+action.i+'_'+env.pt );
			// common.ajax(
			// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_play_'+action.i+'_'+env.pt,
			// 	function(){},
			// 	function(){}
			// );
			break;

		case 'PARTICIPATE':
			Local.forceLog( common.param('act_f'),self.what+'_btn'+'_'+env.pt );
			// common.ajax(
			// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_btn_'+env.pt,
			// 	function(){},
			// 	function(){}
			// );
			var href = (function(){
				if( env.pt==='adr' ){
					return 'http://iyuedu.qq.com/event/act161203/adr/index.html?act_f=161222';
				}else{
					return 'https://yuedu.reader.qq.com/event/act161203/ios/index.html?act_f=161222';
				}
			})();
			bnative.openPage(
				href,
				'111'
			);
			setTimeout(()=>{
				this.mask = true;
			},2000);
			break;
		case 'DOWNLOAD':
			bnative.downLoad('111', '10003531');
			break;
		case 'HIDE':
			this.mask = false;
			break;
		case '_TO_BOOK':
			bnative.toBookDetail( action.bid );
			setTimeout(()=>{
				this.mask = true;
			},2000);
			break;
	}
}

export {data,act};