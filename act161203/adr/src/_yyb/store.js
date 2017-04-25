const data = {
	dev: false,
	yyb: true,

	page: 'pending',

	what: (function(){
		var el = document.querySelector('[what]');
		var val = el.getAttribute('what');
		return val;
	})(),

	current: 0,

	day: 0,
	stage: 0,

	total: 0,

	writers: require('./writers.js').default

};

function act(action){
	var self = this;
	switch(action.type){
		case 'INIT':
			// window.addEventListener('load',()=>{
			// 	self.page = 'ready';
			// });
			//Local.forceLog( common.param('act_f'),self.what+'_enter' );
			common.ajax(
				'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_enter',
				function(){},
				function(){}
			);

			common.ajax( `https://event.reader.qq.com/andmain/pkg161203/init`, function(data) {
				console.log(data)
				self.total = data.totalFreeNumber;
				self.page = 'ready';
			}, function(){} );
			break;
		case 'SWITCH':
			this.current = action.n;
			break;
		case 'PARTICIPATE':
			//Local.forceLog( common.param('act_f'),self.what+'_btn' );
			common.ajax(
				'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_btn',
				function(){},
				function(){}
			);
			var href = (function(){
				if( env.pt==='adr' ){
					return 'http://iyuedu.qq.com/event/act161203/adr/index.html?act_f=161222';
				}else{
					return 'https://yuedu.reader.qq.com/event/act161203/ios/index.html?act_f=161222';
				}
			})();
			// bnative.openPage(
			// 	href,
			// 	'111'
			// );
			// JsBridge.call("getAppInfo", { packagenames:"com.tencent.mm" }, function(ret) {
			// 	if( ret.install ){

			// 	}else{
			// 		setTimeout(()=>{
			// 			location.href = 'tmast://appdetails?pname=com.qq.reader&scene=20040102&oplist=1;2&via=ANDROIDZT.YYB.CAMPAIGN.$1_10254&iphoneid=487608658';
			// 		},2000);
			// 	}
			// });
			
			JsBridge.call("getAppInfo", { packagenames:"com.qq.reader" }, function(ret) {
				var data = JSON.parse(ret.data||"{}");
				if (data["com.qq.reader"] && data["com.qq.reader"].install) {
					//console.log('installed');
					bnative.openPage(
						href,
						'111'
					);
				}else{
					setTimeout(()=>{
						location.href = 'tmast://appdetails?pname=com.qq.reader&scene=20040102&oplist=1;2&via=ANDROIDZT.YYB.CAMPAIGN.$1_10254&iphoneid=487608658';
					},300);
				}	
			});
			break;
	}
}

export {data,act};