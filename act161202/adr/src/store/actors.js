const data = {

	ballot_0: {
		id: 0,
		voted: -1,
		actors: [{
			uid: 0,
			id: 0,
			votes: 0
		},{
			uid: 1,
			id: 1,
			votes: 0
		},{
			uid: 2,
			id: 2,
			votes: 0
		},{
			uid: 3,
			id: 3,
			votes: 0
		}]	
	},
	ballot_1: {
		id: 1,
		voted: -1,
		actors: [{
			uid: 4,
			id: 0,
			votes: 0
		},{
			uid: 5,
			id: 1,
			votes: 0
		},{
			uid: 6,
			id: 2,
			votes: 0
		},{
			uid: 7,
			id: 3,
			votes: 0
		}]	
	}
};

function act(action){
	var self = this;
	switch(action.type){

		case 'INIT':
			if( self.dev ){

				self.timeleft = 10000;
				self.page = 'ready';
			}else{
				if( !self.share ){

					Local.forceLog( common.param('act_f'),'actors_enter' );
					self.act({type:'SET_ICON'});

					Local.reqaObj( common.server()+`pkg161202/init`, function(data) {
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
								if( b<=3 ){
									self.ballot_0.voted = b;
								}else{
									self.ballot_1.voted = b-4;
								}
							})
						};

						if( data.dashenList ){
							data.dashenList.forEach(a=>{
								var uid = Number( a.element );
								var votes = Number( a.score );
								if( uid<=3 ){
									self.ballot_0.actors[uid].votes = votes;
								}else{
									self.ballot_1.actors[uid-4].votes = votes;
								}
							})
						}

						if( data.code===-4 ){
							self.page = 'over';
						}else{

							self.page = 'ready';

						};
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}else{
					Local.forceLog( common.param('act_f'),'actors_share_'+env.pt );
					self.act({type:'SET_SECOND_SHARING'});
					self.page = 'ready';
				}
			};
			break;
		


		case 'VOTE':
			if( self.dev ){
				console.log(action)
				this['ballot_'+action.ballot_id].voted = action.id;
				if( self.ballot_0.voted>=0&&self.ballot_1.voted>=0 ){
					self.chance_to_draw++;
				}
			}else{
				if( !self.share ){
					if( !self.loggedIn ){
						self.act({type:'TO_LOGIN'});
					}else{

						Local.forceLog( common.param('act_f'),'actors_vote_'+action.uid );

						if(action.uid<=9){
							self.male_state = 'pending';
						}else{
							self.female_state = 'pending';
						}
						Local.reqaObj( common.server()+`pkg161202/pick?id=${action.uid}`, function(data) {
							if( data.code===1 ){

								Local.reqaObj( common.server()+`pkg161202/getSQ`, function(data) {
								}, [], function() {
									Local.showToast("网络异常，请稍候重试");
								}, 1);

								if(action.uid<=3){
									self.ballot_0.voted = action.id;
									self.ballot_0.actors[action.uid].votes++;
								}else{
									self.ballot_1.voted = action.id;
									self.ballot_1.actors[action.uid-4].votes++;
								}
								if( self.ballot_0.voted>=0&&self.ballot_1.voted>=0 ){
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
						if( self.first_vote ){

						}
					};
				}else{
					self.act({type:'TO_APP'});
				};
			};
			break;
	}
}

export default {data,act};