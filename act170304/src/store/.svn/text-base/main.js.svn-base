const state = {
	share_btn: {
		show: false
	},
	pic: {
		bg: 0,
		playing: false,
		slogan: 0,
    done: false
	},
	change_main: {
		stage: 'fall'
	},
  // form: {
  //   inited: false,
  //   done: false
  // }
	// audio: {
	// 	on: false
	// },
	// change: {
	// 	stage: 0
	// }
};

const mutators = {
	INIT_MAIN ({state,dispatch},action) {

    Local.forceLog( common.param('act_f'),`enter` );
		
    var pre = (function(){
      // 如果当前环境为测试环境：
      // if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
      //   return 'https://ptsolomo.reader.qq.com/book_res/event';
      // }else{
      //   return 'https://yuedu.reader.qq.com/event';
      // }
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        if( state.meta.platform==='adr' ){
          return `http://solomotest4.3g.qq.com/book_res/event`;
        }else{
          return `https://ptsolomo.reader.qq.com/book_res/event`;
        }
      }else{
        if( state.meta.platform==='adr' ){
          return `http://iyuedu.qq.com/event`;
        }else{
          return `https://yuedu.reader.qq.com/event`;
        }
      };
    })();
    var bg = pre+'/act170304/adr/img/main/cards/0.jpg';
    for( let i=0;i<6;i++ ){
    	let bg = `${pre}/act170304/adr/img/main/cards/${i}.jpg`;
    	Local.cacheImage( bg );
    }

    window.CLOSE_WINDOW = function(){
      console.log('CLOSE_WINDOW');
      dispatch({
        type: 'CLOSE_WINDOW'
      })
      return true;
    }

		// if( state.meta.share ){
		// 	dispatch({
		// 		type: 'SET_SECOND_SHARING'
		// 	});
		// 	state.page = 'ready';
		// }else{
		// 	// Local.forceLog( common.param('act_f'),`enter` );
		// 	dispatch({
		// 		type: 'SET_ICON'
		// 	});
		// 	state.page = 'ready';

		// }
		state.page = 'ready';
	},
	CLOSE_WINDOW ({state,dispatch},action) {
    if( state.pic.done===true ){
      state.pic.done = false;
    }else{
		  Local.closePage();
    }
	},
	// TURN_AUDIO ({state,dispatch},action) {
	// 	Local.forceLog( common.param('act_f'),`play` );
	// 	state.audio.on = !state.audio.on;
	// },
	TO_FACTORY ({state,dispatch},action) {
    Local.forceLog( common.param('act_f'),`toFactory` );
		state.change_main.stage = 'factory';
	},

	PICK_BG ({state,dispatch},action) {
		state.pic.bg = action.i;
	},
	NEXT_SLOGAN ({state,dispatch},action) {
		if( state.pic.playing===true ){
			if( state.pic.slogan<11 ){
				state.pic.slogan++;
			}else{
				state.pic.slogan = 0;
			}
			setTimeout(()=>{
				dispatch({
					type: 'NEXT_SLOGAN' 
				})
			},200);
		};
	},
	PLAY_SLOGAN ({state,dispatch},action) {
		state.pic.playing = true;
		dispatch({
			type: 'NEXT_SLOGAN' 
		})
    Local.forceLog( common.param('act_f'),`fingerprint` );
	},
	STOP_SLOGAN ({state,dispatch},action) {
		state.share_btn.show = true;
		state.pic.playing = false;
	},
	CHANGE_MAIN ({state,dispatch},action) {
		console.log(action)
		state.change_main.stage = action.to;
	},
	SHARE_PIC ({state,dispatch},action) {
    Local.forceLog( common.param('act_f'),`share_bg${state.pic.bg}_slogan${state.pic.slogan}` );
    state.pic.done = true;
    var pre = (function(){
      // 如果当前环境为测试环境：
      // if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
      //   return 'https://ptsolomo.reader.qq.com/book_res/event';
      // }else{
      //   return 'https://yuedu.reader.qq.com/event';
      // }
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        if( state.meta.platform==='adr' ){
          return `http://solomotest4.3g.qq.com/book_res/event`;
        }else{
          return `https://ptsolomo.reader.qq.com/book_res/event`;
        }
      }else{
        if( state.meta.platform==='adr' ){
          return `http://iyuedu.qq.com/event`;
        }else{
          return `https://yuedu.reader.qq.com/event`;
        }
      };
    })();
    var bg = pre+`/act170304/adr/img/main/cards/${state.pic.bg}.jpg`;
    var slogan = pre+`/act170304/adr/img/main/slogan/${state.pic.slogan}.png`;
    console.log( bg );
    console.log( slogan );

    Local.shareStyleImage( bg,slogan );
  },
  SUBMIT_FORM ({state,dispatch},action) {
    var pl = action.form;
    localStorage.form = JSON.stringify(action.form);
    Local.forceLog(88888,`${pl.city.val}|${pl.school.val}|${pl.name.val}|${pl.qq.val}|${pl.mobile.val}`)
  }
	// CLICK_BTN ({state,dispatch},action) {
	// 	if( state.meta.share ){
	// 		dispatch({
	// 			type: 'TO_APP'
	// 		})
	// 	}else{
	// 		dispatch({
	// 			type: 'SHARE'
	// 		})
	// 	}
	// }
}

export default {state,mutators};