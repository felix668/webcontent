const data = {

	prizes: require('./data/prizes.js').default,

	items: []

};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				self.items.push( ...self.prizes );
				self.page = 'ready';
			}else{
				console.log(self.z_type)
				Local.reqaObj( common.server()+`pkg161202/prize${self.z_type==='writers'?'2':''}`, function(data) {
					console.log(data)

					if( data.code===-4 ){
						self.page = 'over';
					}else{
						if( data.prizeList ){
							// for( var key in data.prizeList ){
							// 	self.items.push({
							// 		id: Number( key ),
							// 		name: data.prizeList[key]
							// 	});
							// };
							data.prizeList.forEach(a=>{
								self.items.push({
									id: Number( a.prizeId ),
									name: a.prizeName
								})
							})
						};
						self.page = 'ready';

					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
	}
}

export default {data,act};