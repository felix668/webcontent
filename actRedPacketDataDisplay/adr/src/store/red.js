const state = {
	img: './img',
	dev: false,
	page: 'pending',

	current: -1,

	times: [
		'--:--',
		'--:--',
		'--:--',
		'--:--'
	],
	card0: {
		total: 0,
		qqReader: 0,
		mqq: 0
	},
	card1: {
		DAU: 0,
		ratio: 0,
		total_growth: 0,
		ratio2: 0
	},
	card2: {
		qqReader: {
			total: 0,
			peak: 0,
			time: '--:--'
		},
		mqq: {
			total: 0,
			peak: 0,
			time: '--:--'
		}
	},
	card3: {
		times_of_opening: 0,
		times_of_downloading: 0
	}
};

function reducer( state,action ){
	var self = state;
	var vm = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				window.addEventListener('load',()=>{

					self.times[0] = (function(){
						var str = 1010+'';
						return str.substr(0,2)+':'+str.substr(2,2);
					})();
					self.card0.total = 11111;
					self.card0.qqReader = 112311;
					self.card0.mqq = 111221;

					self.times[1] = '11'; 
					self.card1.DAU = 555;
					self.card1.ratio = 10;
					self.card1.total_growth = 777;
					self.card1.ratio2 = 1.22;

					self.times[2] = '22';
					self.card2.qqReader.total = 12345;
					self.card2.qqReader.peak = 1111;
					self.card2.qqReader.time = (function(){
						var str = 201701062101+'';
						return str.substr(8,2)+':'+str.substr(10,2);
					})();
					self.card2.mqq.total = 13356;
					self.card2.mqq.peak = 1122;
					self.card2.mqq.time = (function(){
						var str = 201701062122+'';
						return str.substr(8,2)+':'+str.substr(10,2);
					})();

					self.times[3] = '33';
					self.card3.times_of_opening += 3456;
					self.card3.times_of_downloading += 3654;
					setInterval(()=>{
						self.card0.total += 12345;
						self.card0.qqReader += 12345;
						self.card0.mqq += 12345;

						self.card1.DAU += 2356;
						self.card1.ratio += 0.1;
						self.card1.count += 10;
						self.card1.total_growth += 777;

						self.card2.qqReader.total += 345;
						self.card2.qqReader.peak += 11;
						self.card2.mqq.total += 1356;
						self.card2.mqq.peak += 23;

						self.card3.times_of_opening += 3456;
						self.card3.times_of_downloading += 3654;
					},5000);
					self.page = 'ready';
				});

			}else{
				vm.act({type:'REQUEST'});
				window.addEventListener('load',()=>{
					self.page = 'ready';
				});
			};
			break;
		case 'SWITCH':
			self.current = action.i;
			break;
		case 'REQUEST':
			vm.act({type:'CARD_0'});
			vm.act({type:'CARD_1'});
			vm.act({type:'CARD_2'});
			vm.act({type:'CARD_3'});
			break;
		case 'CARD_0':
			common.ajax( location.origin+'/servlet/UserServlet?method=getKpi',function(res){
				self.times[0] = (function(){
					var str = res.time+'';
					return str.substr(0,2)+':'+str.substr(2,2);
				})();
				// 红包总发放量：
				self.card0.total = Number( res.all );
				// QQ阅读发放量：
				self.card0.qqReader = Number( res.qqreader );
				// 手Q阅读发放量：
				self.card0.mqq = Number( res.qq );
				if(self.current===-1){
					self.current = 0;
				};
				setTimeout(()=>{
					vm.act({type:'CARD_0'});
				},5000);
			},null,function(){
				setTimeout(()=>{
					vm.act({type:'CARD_0'});
				},5000);
			})
			break;
		case 'CARD_1':
			common.ajax( location.origin+'/servlet/UserServlet?method=getRealUv',function(res){
				// 数据时段：
				self.times[1] = (function(){
					var str = res.time+'';
					return str.substr(0,2)+':'+str.substr(2,2);
				})();

				// 今日DAU：
				self.card1.DAU = Number( res.dau );
				// 环比昨天涨幅：
				self.card1.ratio = Number( res.growpercent );

				// 今日新增用户：
				self.card1.total_growth = Number( res.realNewUser );
				// 环比昨天涨幅：
				self.card1.ratio2 = Number( res.accNewUser );
				setTimeout(()=>{
					vm.act({type:'CARD_1'});
				},5000);
			},null,function(){
				setTimeout(()=>{
					vm.act({type:'CARD_1'});
				},5000);
			})
			break;
		case 'CARD_2':
			common.ajax( location.origin+'/servlet/UserServlet?method=getPageActUv',function(res){
				self.times[2] = res.statisTime;
				// QQ阅读累计访问量：
				self.card2.qqReader.total = Number( res.QQReaderAccPv );
				// QQ阅读访问量峰值：
				self.card2.qqReader.peak = Number( res.QQReaderMaxPv );
				// QQ阅读访问量峰值时段：
				self.card2.qqReader.time = (function(){
					var str = res.QQReaderMaxPvTime+'';
					return str.substr(8,2)+':'+str.substr(10,2);
				})();

				// 手Q阅读累计访问量：
				self.card2.mqq.total = Number( res.QQAccPv );
				// 手Q阅读访问量峰值：
				self.card2.mqq.peak = Number( res.QQMaxPv );
				// 手Q阅读访问量峰值时段：
				self.card2.mqq.time = (function(){
					var str = res.QQMaxPvTime+'';
					return str.substr(8,2)+':'+str.substr(10,2);
				})();

				setTimeout(()=>{
					vm.act({type:'CARD_2'});
				},30000);
			},null,function(){
				setTimeout(()=>{
					vm.act({type:'CARD_2'});
				},30000);
			})
			break;
		case 'CARD_3':
			common.ajax( location.origin+'/servlet/UserServlet?method=getActiPageUv',function(res){
				self.times[3] = res.statisTime;
				// 累计打开QQ阅读人数：
				self.card3.times_of_opening = Number(res.QQReaderAccPv);
				// 累计下载QQ阅读人数：
				self.card3.times_of_downloading = Number(res.QQReaderMaxPv);
				setTimeout(()=>{
					vm.act({type:'CARD_3'});
				},30000);
			},null,function(){
				setTimeout(()=>{
					vm.act({type:'CARD_3'});
				},30000);
			})
			break;
	}
}

export default {state,reducer};