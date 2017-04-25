const books = [
	require( './data/books_0.js' ).default,
	require( './data/books_1.js' ).default,
	require( './data/books_2.js' ).default,
	require( './data/books_3.js' ).default,
];

const pages = [{
	id: 0,
	name: '畅销'
},{
	id: 1,
	name: '经典'
},{
	id: 2,
	name: '包月'
},{
	id: 3,
	name: '出版'
}];

const state = {
	z_type: (function(){
		var el = document.querySelector('[z-type]');
		var val = el.getAttribute('z-type');
		return Number(val);
	})(),

	sex: '',
	books: [],

	others: [],

	stage: 0,

	current: 0
};

pages.forEach(a=>{
	if( a.id!==state.z_type ){
		state.others.push(a);
	}
});

function reducer( state,action ){
	var self = this;
	
	switch(action.type){

		case 'INIT':
			if( self.dev ){
				window.addEventListener('load',()=>{
					self.sex = 'male';
					self.books.push( ...books[self.z_type][self.sex] );
					console.log(self.books)
					self.page = 'ready';
				});

			}else{
				Local.reqaObj( common.server()+`pkg170104/init`, function(data) {
					console.log(data)
					if( data.code===-4 ){
						self.page = 'over';
					}else{
						self.loggedIn = data.isLogin;

						self.page = 'ready';
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'TAKE':
			Local.reqaObj( common.server()+`pkg170104/pick`, function(data) {
				console.log(data)
				if( data.code===-4 ){
					self.page = 'over';
				}else{
					self.loggedIn = data.isLogin;

					self.page = 'ready';
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			break;

		// case 'STAGE':
		// 	this.stage = action.i;
		// 	break;

		case 'SWITCH':
			console.log(self.current)
			if( self.stage===0 ){
				if( action.direction==='up' ){
					self.stage = 1;
				};
			}else if(self.stage===1){
				if( action.direction==='up' ){
					if( self.current<self.books.length-1 ){
						self.current++;
					}else{
						self.stage = 2;
					}
				}else if( action.direction==='down' ){
					if( self.current>0 ){
						self.current--;
					};
				}
			}else{
				if( action.direction==='down' ){
					self.stage = 1;
				}
			}
			break;
			
	}
}

export default {state,reducer};