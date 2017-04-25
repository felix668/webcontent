const state = {

	change: {
		changing: false,
		stage: 0,
		page: 0,
	},
	mask_author: {
		show: false
	},
	mask_comments: {
		show: false
	},
	mask_share: {
		show: false
	},
	music: {
		initialized: false,
		on: false
	}
};

function mutator({state,dispatch},action){
	var self = state;
	switch(action.type){

		case 'INIT':
			Local.forceLog( common.param('act_f'),`enter` );
			window.addEventListener('load',()=>{
				// MtaH5.clickStat('stats',{
				// 	'evt': `${self.meta.name}iii${self.meta.platform}iiienter`
				// });
				MtaH5.clickStat('abc',{'def':`${self.meta.name}iii${self.meta.platform}iiienter`})
			})
			if( self.share ){
				dispatch({
					type: 'SET_SECOND_SHARING'
				})
			};
			// window.addEventListener('load',()=>{
			// 	self.page = 'ready';
			// })
			if( state.dev ){
				state.page = 'ready';
			}else{
				state.page = 'ready';
			};
			console.log(state.page);
			break;
		case 'TURN_MUSIC':
			self.music.on = !self.music.on;
			break;
		case 'SWITCH':
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
			break;
		case 'SWITCH_OVER':
			state.change.changing = false;
			break;
		case 'CONTINUE':
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
			break;
		
	}
}

export default {state,mutator};