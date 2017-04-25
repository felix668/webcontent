const books = {
	one: [{
		bid: 462593,
		title: '三界血歌',
		intro: '三界血歌',
		author: '血红'
	},{
		bid: 468921,
		title: '逍行纪',
		intro: '逍行纪',
		author: '血红'
	},{
		bid: 472394,
		title: '邪龙道',
		intro: '邪龙道',
		author: '血红'
	}],
	two: [{
		bid: 486530,
		title: '光明纪元',
		intro: '光明纪元',
		author: '血红'
	},{
		bid: 478487,
		title: '偷天',
		intro: '偷天',
		author: '血红'
	},{
		bid: 463748,
		title: '邪风曲',
		intro: '邪风曲',
		author: '血红'
	}]
}

const state = {
	books: {
		shared: false,
		books: [],
		candidate: 0,
		// the picked book's bid
		picked: 0,
		expired_at: '--'
	},
	boiler: require('./api/boiler.js').default
};

const mutators = {
	INIT ({state,dispatch},action) {
		state.books.books = books[state.meta.batch];
		if( state.meta.share ){
			dispatch({
				type: 'SET_SECOND_SHARING'
			});
			// var score;
			// var query = location.search.replace(/\?/,'').split('&');
			// query.forEach(a=>{
			// 	if( a==='z_score' ){
			// 		score = a.replace(/z_score=/,'');
			// 	}
			// })
			var score = common.param('z_score');
			var ticket = common.param('z_ticket');
			dispatch({
				type: 'FINISH_QUES',
				score: score
			});
			console.log(ticket);
			Local.reqaObj( common.server()+`pkg170301/testshareinit?userticket=${ticket}`, function(data) {
				console.log('success')
				console.log(data)
				if( typeof data.nick==='string' ){
					state.user.name = data.nick;
				};
				state.page = 'ready';
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			console.log('???')
		}else{

			if( state.dev ){
				setTimeout(()=>{
					dispatch({
						type: 'FINISH_QUES',
						score: 100
					});
				},3000);
				state.page = 'ready';
			}else{
				// Local.forceLog( common.param('act_f'),`enter` );
				// window.addEventListener('load',()=>{
				// 	// MtaH5.clickStat('stats',{
				// 	// 	'evt': `${self.meta.name}iii${self.meta.platform}iiienter`
				// 	// });
				// 	MtaH5.clickStat('abc',{'def':`${self.meta.name}iii${self.meta.platform}iiienter`})
				// })
				Local.forceLog( common.param('act_f'),`one_enter` );
				Local.reqaObj( common.server()+`pkg170301/testinit`, function(data) {
					console.log(data)
					if( data.code===-4 ){
						state.page = 'over';
					}else{
						state.loggedIn = data.isLogin;
						state.user.loggedIn = data.isLogin;
						if( data.userticket ){
							state.user.ticket = encodeURIComponent(data.userticket);
							// .replace(/(=+)$/,'');
							console.log(state.user.ticket);
						};

						if( data.tested!==undefined&&data.tested!==false ){
							dispatch({
								type: 'FINISH_QUES',
								score: Number(data.tested)
							});
						};
						if( data.picked!==undefined&&data.picked!==false ){
							dispatch({
								type: 'FINISH_PICK',
								bid: Number(data.picked[0]),
								date: Number(data.picked[1])
							});
						};

						state.page = 'ready';
					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
		}
	},
	INIT_QUES ({state,dispatch},action) {
		state.books.books = books.one;
		if( state.dev ){
			state.page = 'ready';
		}else{
			Local.reqaObj( common.server()+`pkg170301/testinit`, function(data) {
				console.log(data)
				if( data.code===-4 ){
					state.page = 'over';
				}else{
					state.loggedIn = data.isLogin;
					state.user.loggedIn = data.isLogin;
					state.user.ticket = encodeURIComponent(data.userticket);

					if( data.picked!==undefined&&data.picked!==false ){
						dispatch({
							type: 'FINISH_PICK',
							bid: Number(data.picked[0]),
							date: Number(data.picked[1])
						});
					};

					state.page = 'ready';
				};
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		};
	},
	INIT_TWO ({state,dispatch},action) {
		window.afterShare = function(){
			dispatch({
				type: 'COMPLETE_SHARING'
			})
		};
		state.books.books = books[state.meta.batch];
		if( state.dev ){
			state.page = 'ready';
		}else{
			if( state.meta.share ){
				dispatch({
					type: 'SET_SECOND_SHARING'
				});
				state.page = 'ready';
			}else{
				Local.forceLog( common.param('act_f'),`two_enter` );
				Local.reqaObj( common.server()+`pkg170301/shareinit`, function(data) {
					console.log(data)
					if( data.code===-4 ){
						state.page = 'over';
					}else{
						state.loggedIn = data.isLogin;
						state.user.loggedIn = data.isLogin;

						if( data.isLogin===true ){
							if( data.isguest===true ){
								state.user.isGuest = true;
							};
							if( data.shared===true ){
								state.books.shared = true;
							};
							if( data.picked!==undefined&&data.picked!==false ){
								dispatch({
									type: 'FINISH_PICK',
									bid: Number(data.picked[0]),
									date: Number(data.picked[1])
								});
							};
						};

						state.page = 'ready';
					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			}
		};
	},
	COMPLETE_SHARING ({state,dispatch},action) {
		Local.forceLog( common.param('act_f'),`two_shared` );
		Local.reqaObj( common.server()+`pkg170301/sharesuccess`, function(data) {
		}, [], function() {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
		state.books.shared = true;
		// Local.showToast('分享成功');
	},
	INIT_BOILER ({state,dispatch},action) {
		state.page = 'ready';
	},
	TO_BOILER ({state,dispatch},action) {
		if( state.meta.share ){
			var href = location.href.replace( /(one_share|two_share)\.html/g,'boiler.html' );
			location.href = href;
			// dispatch({type:'TO_APP'});
		}else{
			var href = location.href.replace( /(one|two)\.html/g,'boiler.html' );
			if( state.dev ){
				location.href = href;
			}else{
				Local.openInside( href );
			};
			Local.forceLog( common.param('act_f'),`${state.meta.batch}_toBoiler` );
		}
	},
	TO_QUES ({state,dispatch},action) {	
		if( state.share ){
			dispatch({
				type: 'TO_APP'
			});
		}else{
			if( state.user.loggedIn===false ){
				dispatch({
					type: 'TO_LOGIN'
				});
			}else{
				var href = location.href.replace( /one\.html/g,'ques.html' );
				if( state.dev ){
					location.href = href;
				}else{
					Local.openInside( href );
				};
			};
			Local.forceLog( common.param('act_f'),`one_toQues` );
		}
	},
	PICK_BOOK_CONFIRM ({state,dispatch},action) {
		state.books.candidate = action.bid;
		dispatch({
			type: 'SHOW',
			what: 'mask_confirm'
		})
	},	
	PICK_BOOK ({state,dispatch},action) {
		if( state.dev ){
			state.books.picked = action.bid;
			dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			})
		}else{
			Local.reqaObj( common.server()+`pkg170301/${state.meta.batch==='one'?'test':'share'}pick?bid=${action.bid}`, function(data) {
				console.log(data);
				if( data.code===0 ){
					dispatch({
						type: 'FINISH_PICK',
						bid: action.bid,
						date: Number(data.time)
					});
					var book = (function(){
						var book;
						state.books.books.forEach(a=>{
							if( a.bid===action.bid ){
								book = a;
							}
						})
						return book;
					})();
					dispatch({
						type: 'ADD_TO_SHELF',
						book: book
					});
					dispatch({
						type: 'HIDE',
						what: 'mask_confirm'
					})
					// Local.showToast('已加入书架');
				}else{
					Local.showToast(data.msg);
				}
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}
	},
	FINISH_PICK ({state,dispatch},action) {
		state.books.picked = action.bid;
		state.books.expired_at = (function(){
			var date = new Date( action.date );
			var years = date.getFullYear();
			var months = date.getMonth() + 1;
			var days = date.getDate();
			return years+'年'+months+'月'+days+'日';
		})();
	},
	SWITCH ({state,dispatch},action) {
		//console.log(action)
		if( !state.change.changing ){
			self.change.changing = true;
			setTimeout(()=>{
				self.change.changing = false;
			},800)
			if( action.stage||action.stage===0 ){
				if( action.stage===1 ){
					self.music.initialized = true;
					self.music.on = true;
					console.log('music.on===true')
					Local.forceLog( common.param('act_f'),`page1` );
					// MtaH5.clickStat('stats',{
					// 	stats: `${self.meta.name}_${self.meta.platform}_page1`
					// });
					MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_page1`})
				};
				state.change.stage = action.stage;
			}else if( action.page||action.page===0 ){
				state.change.page = action.page;
				Local.forceLog( common.param('act_f'),`page${action.page+1}` );
				MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_page${action.page+1}`})
				// MtaH5.clickStat('stats',{
				// 	stats: `${self.meta.name}_${self.meta.platform}_page${action.page+1}`
				// });
				// if( action.page===3 ){
				// 	self.change.changing = true;
				// 	setTimeout(()=>{
				// 		self.change.changing = false;
				// 	},1500)
				// }
			}
		};
	},
	SWITCH_OVER ({state,dispatch},action) {
		state.change.changing = false;
	},
	CONTINUE ({state,dispatch},action) {
		Local.forceLog( common.param('act_f'),`clickToRead` );
		MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_clickToRead`})
		// MtaH5.clickStat('stats',{
		// 	stats: `${self.meta.name}_${self.meta.platform}_clickToRead`
		// });
		if( !self.share ){
			dispatch({type:'TO_READ',bid:244004});
		}else{
			// if the current env is adr&&wx
      if( env.vw==='wx'&&env.pt==='adr' ){
        sns.open(function(installStat,plat){
          if( installStat === -2 ){//浏览器
            // window.location.href="uniteqqreader://nativepage/client/bookshelf";
          }else if(installStat){
            // if qqreader is installed
            bnative.toReadBook( 244004 );
            setTimeout(()=>{
              self.mask_download.show = true;
            },1000);
          }else{      
            self.mask_download.show = true;
          }
        });
      }else{
        bnative.toReadBook( 244004 );
        setTimeout(()=>{
          self.mask_download.show = true;
        },1000);
      };
		}
	}
}

export default {state,mutators};