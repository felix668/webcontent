const data = {
	male: [{
		uid: 0,
		id: 0,
		name: '鱼人二代',
		bid: 479232,
		title: '校花的贴身高手'
	},{
		uid: 1,
		id: 1,
		name: '辰东',
		bid: 462521,
		title: '完美世界'
	},{
		uid: 2,
		id: 2,
		name: '猫腻',
		bid: 357735,
		title: '择天记'
	},{
		uid: 3,
		id: 3,
		name: '丛林狼',
		bid: 295037,
		title: '最强兵王'
	},{
		uid: 4,
		id: 4,
		name: '净无痕',
		bid: 561940,
		title: '太古神王'
	},{
		uid: 5,
		id: 5,
		name: '明日复明日',
		bid: 216428,
		title: '超级兵王在都市'
	},{
		uid: 6,
		id: 6,
		name: '飞天鱼',
		bid: 648963,
		title: '万古神帝'
	},{
		uid: 7,
		id: 7,
		name: '秋晨',
		bid: 385158,
		title: '九仙图'
	},{
		uid: 8,
		id: 8,
		name: '秋风123',
		bid: 450559,
		title: '终极高手'
	},{
		uid: 9,
		id: 9,
		name: '天蚕土豆',
		bid: 462523,
		title: '大主宰'
	}],
	male_state: 'green',
	male_voted: -1,

	female: [{
		uid: 10,
		id: 0,
		name: '夜北',
		bid: 626275,
		title: '腹黑大小姐'
	},{
		uid: 11,
		id: 1,
		name: '叶非夜',
		bid: 13700974,
		title: '隔墙有男神'
	},{
		uid: 12,
		id: 2,
		name: '苏小暖',
		bid: 185422,
		title: '废柴逆天小姐'
	},{
		uid: 13,
		id: 3,
		name: '冷青衫',
		bid: 421015,
		title: '一世倾城'
	},{
		uid: 14,
		id: 4,
		name: '沐依依',
		bid: 13311966,
		title: '闪婚娇妻'
	},{
		uid: 15,
		id: 5,
		name: '默小水',
		bid: 13430981,
		title: '丫头，你好甜'
	},{
		uid: 16,
		id: 6,
		name: 'MS芙子',
		bid: 607991,
		title: '神医弃女'
	},{
		uid: 17,
		id: 7,
		name: '密云不雨',
		bid: 11365829,
		title: '萌宝快递'
	},{
		uid: 18,
		id: 8,
		name: '夏青衫',
		bid: 704545,
		title: '豪门隐婚'
	},{
		uid: 19,
		id: 9,
		name: '南音音',
		bid: 629856,
		title: '早安，总统大人'
	}],
	female_state: 'green',
	female_voted: -1

};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				//self.first_vote = true;
				//self.chance_to_draw = 1;
				//self.male_voted = 1;
				//self.female_voted = 0;
				//self.timeleft = 20000;
				self.page = 'ready';
			}else{
				if( !self.share ){

					Local.forceLog( common.param('act_f'),'writers_enter' );
					self.act({type:'SET_ICON'});

					Local.reqaObj( common.server()+`pkg161202/init2`, function(data) {
						console.log(data)
						
						self.loggedIn = data.isLogin;

						if( data.isLogin ){
							self.chance_to_draw = Number( data.lotteryTimes );
							self.first_vote = data.firstVote;
						};


						if( data.CountDown ){
							if( data.CountDown>0 ){
								//self.timeleft = 3600*1000;
							}else{
								self.timeleft = (3600 + data.CountDown)*1000;
							};
						};
						if( data.voteSet ){
							data.voteSet.forEach(a=>{
								var b = Number(a);
								if( b<10 ){
									self.male_voted = b
								}else{
									self.female_voted = b-10;
								}
							})
						};

						if( data.code===-4 ){
							self.page = 'over';
						}else{

							self.page = 'ready';

						};
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}else{
					Local.forceLog( common.param('act_f'),'writers_share_'+env.pt );
					self.act({type:'SET_SECOND_SHARING'});
					self.page = 'ready';
				}
			};
			break;
		


		case 'VOTE':
			if( self.dev ){
				//console.log(1111)
				if( action.type_==='male' ){
					this.male_voted = action.id;
				}else{
					this.female_voted = action.id;
				};
				if( this.male_voted>=0&&this.female_voted>=0 ){
					self.timeleft = 3599*1000;
					self.chance_to_draw++;
				};
				if( self.first_vote ){
					self.show_mask_first = true;
				};
			}else{
				if( !self.share ){
					if( !self.loggedIn ){
						self.act({type:'TO_LOGIN'});
					}else{

						Local.forceLog( common.param('act_f'),'writers_vote_'+action.uid );

						if(action.uid<=9){
							self.male_state = 'pending';
						}else{
							self.female_state = 'pending';
						}
						Local.reqaObj( common.server()+`pkg161202/pick2?id=${action.uid}`, function(data) {
							if( data.code===1 ){

								Local.reqaObj( common.server()+`pkg161202/getSQ2`, function(data) {
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
								
								if(action.uid<=9){
									self.male_voted = action.id;
								}else{
									self.female_voted = action.id;
								}
								if( self.male_voted>=0&&self.female_voted>=0 ){
									self.timeleft = 3599*1000;
									self.chance_to_draw++;
								};
								if( self.first_vote ){
									self.first_vote = false;
									self.show_mask_prize = true;
								};
								Local.showToast('投票成功！');
							}else{
								Local.showToast(data.msg);
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					};
				}else{
					console.log('toapp')
					self.act({type:'TO_APP'});
				};
			};
			break;
	}
}

export default {data,act};