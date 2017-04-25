const data = {

	chance: (function(){
		console.log( location.href )
		return 0;
	})(),
	result: {
		i: 0,
		res: 0
	},

	prizes: require('./data/prizes.js').default

};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				self.chance = 5;
				self.show_mask_prize = true;
				self.page = 'ready';
			}else{
				console.log( self.z_type );

				Local.reqaObj( common.server()+`pkg161202/lotteryTimes${self.z_type==='writers'?'2':''}`, function(data) {
					console.log(data)
					if( data.code===-4 ){
						self.page = 'over';
					}else{
						self.loggedIn = data.isLogin;
						self.chance = Number( data.lotteryTimes );
						self.page = 'ready';
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				
			};
			break;

		case 'DRAW':
			if(self.dev){
				self.result = {
					i: self.result.i++,
					res: 4
				}
			}else{
				if( self.z_type==='writers' ){
					Local.forceLog( common.param('act_f'),'writers_draw' );
				}else{
					Local.forceLog( common.param('act_f'),'actors_draw' );
				};
				Local.reqaObj( common.server()+`pkg161202/doLottery${self.z_type==='writers'?'2':''}`, function(data) {
					console.log(data)
					if( data.code===1 ){
						self.result = {
							i: self.result.i++,
							res: Number( data.prizeId )
						}
					}else{
						Local.showToast('抽奖未成功')
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			}
			break;
		case 'SHOW_MASK':
			self.show_mask_prize = true;
			self.chance--;
			break;
		case 'BACK':
			if( self.z_type==='writers' ){
				Local.forceLog( common.param('act_f'),'writers_return' );
			}else{
				Local.forceLog( common.param('act_f'),'actors_return' );
			};
			history.go(-1);
			break;

	}
}

export default {data,act};