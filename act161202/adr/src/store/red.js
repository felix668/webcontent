const data = {
	card0: {
		total: 0,
		qqReader: 0,
		mqq: 0
	},
	card1: {
		DAU: 0,
		ratio: 0,
		count: 0,
		total_growth: 0
	}
};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				self.card0.total = 11111;
				self.card0.qqReader = 112311;
				self.card0.mqq = 111221;
				self.card1.DAU = 555;
				self.card1.ratio = 10;
				self.card1.count = 6665;
				self.card1.total_growth = 777;
				setInterval(()=>{
					self.card0.total += 12345;
					self.card0.qqReader += 12345;
					self.card0.mqq += 12345;

					self.card1.total_growth += 777;
				},5000);
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