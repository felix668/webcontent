const books = [
	require( './data/books_0.js' ).default,
	require( './data/books_1.js' ).default,
	require( './data/books_2.js' ).default,
	require( './data/books_3.js' ).default,
];

const pages = [{
	id: 0,
	name: '畅销',
	count: 25,
	days: 5
},{
	id: 1,
	name: '经典',
	count: 50,
	days: 5
},{
	id: 2,
	name: '包月',
	count: 20,
	days: 5
},{
	id: 3,
	name: '影视',
	count: 10,
	days: 5
}];

var z_type = (function(){
	var el = document.querySelector('[z-type]');
	var val = el.getAttribute('z-type');
	return Number(val);
})();

const state = {
	z_type: z_type,
	id: z_type,
	name: pages[z_type].name,
	count: pages[z_type].count,
	days: pages[z_type].days,
	others: (function(){
		var arr = [];
		pages.forEach(a=>{
			if( a.id!==z_type&&a.id!==2 ){
				arr.push(a);
			}
		});
		return arr;
	})(),
	hasDiscount: (function(){
		return /_discount/.test( location.href );
	})(),
	replay: common.param('z_replay')==='true'?true:false,

	sex: '',
	taken: false,
	black: false,

	discount: '限免',

	books: [],

	stage: 0,
	current: 0,
	switching: false
};


function reducer( state,action ){
	var self = this;
	
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				window.addEventListener('load',()=>{
					// self.loggedIn = true;
					// self.black = true;
					// self.mask_black.show = true;

					self.sex = 'female';
					self.books.push( ...books[self.z_type][self.sex] );
					if( self.z_type!==2 ){
						if( self.hasDiscount ){
							self.discount = '7折';
						};
					};
					//console.log(self.books)
					// setTimeout(()=>{
					// 	self.stage = 1;
					// 	self.stage = 2;
					// },50);
					if( self.replay ){
						self.stage = 1;
						self.loggedIn = true;
						setTimeout(()=>{
							//self.stage = 2;
							self.page = 'ready';
						},500)
					}else{
						// self.loggedIn = true;
						// self.stage = 1;
						// self.stage = 2;
						self.page = 'ready';
					}
				});

			}else{
				//Local.forceLog( common.param('act_f'),'writers_toActors' );
				Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_cover` );
				Local.reqaObj( common.server()+`pkg170104/init`, function(data) {
					if( data ){
						console.log(data);
					};
					if( data.code===-4 ){
						self.page = 'over';
					}else{
						self.loggedIn = data.isLogin;
						if( data.isLogin ){
							self.sex = data.gender===1?'male':'female';
							self.books.push( ...books[self.z_type][self.sex] );
							
							// if( data.canPick===1 ){
							// }else if( data.canPick===-3 ){
							// 	self.taken = true;
							// }else{
							// 	self.black = true;
							// 	self.mask_black.show = true;
							// };
							
							// if( self.z_type!==2 ){
							// 	if( self.hasDiscount ){
							// 		if( data.isBlackUser ){
							// 			self.discount = '7折';
							// 		}else{
							// 			self.discount = '3折';
							// 		}
							// 	};
							// };

							if( data.isBlackUser ){
								self.black = true;
							};

							if( self.hasDiscount ){
								if( data.isBlackUser ){
									self.discount = '7折';
								}else{
									self.discount = '3折';
								}
							}else{
								if( data.isBlackUser ){
									self.mask_black.show = true;
								};
								if( self.z_type===2 ){
									if( data.canPick===1 ){
									}else if( data.canPick===-3 ){
										self.taken = true;
									}else{
										// self.black = true;
										// self.mask_black.show = true;
									};
								};
							};
							// if( self.z_type===2 ){
							// 	if( self.black ){
							// 		self.mask_black.show = true;
							// 	};

							// 	if( data.canPick===1 ){
							// 	}else if( data.canPick===-3 ){
							// 		self.taken = true;
							// 	}else{
							// 		// self.black = true;
							// 		// self.mask_black.show = true;
							// 	};
							// }else{
							// 	if( self.hasDiscount ){
							// 		if( self.black ){
							// 			self.discount = '7折';
							// 		}else{
							// 			self.discount = '3折';
							// 		}
							// 	}else{
							// 		self.mask_black.show = true;
							// 	}
							// }

						};
						if( self.replay ){
							self.stage = 1;
							setTimeout(()=>{
								self.page = 'ready';
							},500);	
						}else{
							setTimeout(()=>{
								self.page = 'ready';
							},500)
						}
					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'TAKE':
			if( self.dev ){
				self.taken = true;
				self.mask_info.show = true;
			}else{
				Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_take` );
				Local.reqaObj( common.server()+`pkg170104/pick`, function(data) {
					console.log(data)
					if( data.code===1 ){
						self.taken = true;
						self.mask_info.show = true;
					}else{
						Local.showToast(data.msg);
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;

		// case 'STAGE':
		// 	this.stage = action.i;
		// 	break;

		case 'SWITCH':
			//console.log(self.current)
			//console.log(self.stage+' '+self.current)
			if( !self.switching ){
				if( self.loggedIn ){
					if( !self.hasDiscount&&self.black ){

					}else{
						self.switching = true;
						if( self.stage===0 ){
							if( action.direction==='up' ){
								self.stage = 1;
								Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_card${self.current}` );
							};
							setTimeout(()=>{
								self.switching = false;
							},400);
						}else if(self.stage===1){
							if( action.direction==='up' ){
								if( self.current<self.books.length-1 ){
									self.current++;
									Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_card${self.current}` );
								}else{
									self.stage = 2;
								}
							}else if( action.direction==='down' ){
								if( self.current>0 ){
									self.current--;
									Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_card${self.current}` );
								}else{
									self.stage = 0;
								}
							};
							setTimeout(()=>{
								self.switching = false;
							},800);
						}else{
							if( action.direction==='down' ){
								self.stage = 1;
								Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_card${self.current}` );
							}
							setTimeout(()=>{
								self.switching = false;
							},500);
						}
					};
				};
			};
			break;
		// case 'REPLAY':
		// 	location.href = location.href;
		// 	break;
			
	}
}

export default {state,reducer};