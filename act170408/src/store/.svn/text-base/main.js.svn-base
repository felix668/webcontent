const state = {
  stage: {
    current: 0
  },
  donated: {
    minutes: 0,
    books: 0
  },
  god: {
    id: 0,
    name: '--',
    donated: 0
  }
  // gods: {
  //   gods: [{
  //     id: 0,
  //     name: '辰东',
  //   },{
  //     id: 1,
  //     name: '丁墨'
  //   },{
  //     id: 2,
  //     name: '耳根'
  //   },{
  //     id: 3,
  //     name: '孑与2'
  //   },{
  //     id: 4,
  //     name: '苏小暖'
  //   },{
  //     id: 5,
  //     name: '我吃西红柿'
  //   },{
  //     id: 6,
  //     name: '叶非夜'
  //   },{
  //     id: 7,
  //     name: '夜北'
  //   },{
  //     id: 8,
  //     name: '鱼人二代'
  //   },{
  //     id: 9,
  //     name: '吱吱'
  //   }],
  //   chosen: 0,
  //   donated: 0
  // }
};

const getters = {
  // god ({state}) {
  //   return state.gods.gods[ state.gods.chosen ];
  // }
}

const mutators = {
	INIT_MAIN ({state,dispatch,getters},action) {
    if( state.meta.share ){
      Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      dispatch({
        type: 'INIT_SHARE'
      })
    }else{
      if( state.dev ){
        state.user.time_span = 288;
        state.donated.minutes = 1222222555;
        state.page = 'ready';
      }else{

        Local.forceLog( common.param('act_f'),`${state.conf.id}_enter` );
        Local.reqaObj( common.server()+`pkg${state.conf.id}/init`, function(data) {
          console.log(data);

          if( data.code===-4 ){
            state.page = 'over';
          }else{
            state.donated.minutes = data.totalTime;
            if( data.totalTime>=124894590 ){
              state.done = true;
              state.stage.current = 1;
            };
            state.donated.books = data.totalDonateBooks;

            state.god.id = data.dashenId;
            state.god.name = data.dashenName;
            state.god.donated = data.dashenDonate;

            if( data.isLogin ){
              state.user.loggedIn = true;

              state.user.name = data.userNick;
              state.user.avatar = data.userAvor;
              state.user.time_span = data.readTime;
              state.user.donated = data.hasDonate;

              if( data.lot===3 ){
                state.user.name = '游客';
                state.user.avatar = './img/common/default.jpg';
              }

              state.user.u = data.u;
              state.user.p = data.p;
              state.user.lot = data.lot;
            }
            state.page = 'ready';
          }
        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
	},
  INIT_SHARE ({state,dispatch},action) {
    var share_init_url = common.server()+`pkg${state.conf.id}/shareInit?u=${common.param('u')}&p=${common.param('p')}`+'&lot='+common.param('lot');
    console.log( '[share_init_url] '+share_init_url );
    Local.reqaObj( share_init_url, function(data) {
      console.log(data);

      if( data.code===-4 ){
        state.page = 'over';
      }else{
        state.stage.current = 1;

        state.donated.minutes = data.totalTime;
        if( data.totalTime>=124894590 ){
          state.done = true;
          state.stage.current = 1;
        };
        state.donated.books = data.totalDonateBooks;

        state.god.id = data.dashenId;
        state.god.name = data.dashenName;
        state.god.donated = data.dashenDonate;

        state.user.loggedIn = true;
        state.user.name = data.userNick;
        state.user.avatar = data.userAvor;
        state.user.time_span = data.readTime;
        state.user.donated = data.hasDonate;

        if( common.param('lot')==='3' ){
          state.user.name = '游客';
          state.user.avatar = './img/common/default.jpg';
        }

        state.page = 'ready';
      }
    }, [], function() {
      Local.showToast("网络异常，请稍候重试");
    }, 1);

  },
  CHANGE_MAIN ({state,dispatch},action) {
    console.log('[CHANGE to] '+action.to)
    state.stage.current = action.to;
  },
  DONATE ({state,dispatch},action) {
    if( state.dev ){
      var donated = state.user.time_span - state.user.time_span%30;
      state.user.donated = donated;
      state.user.title = '捐书成功';
      state.mask_donated.show = true;
    }else{
      Local.forceLog( common.param('act_f'),`${state.conf.id}_btnDonate` );
      Local.reqaObj( common.server()+`pkg${state.conf.id}/pick`, function(data) {
        console.log('[data pick] '+JSON.stringify(data));
        if( data.code===1 ){
          var donated = state.user.time_span - state.user.time_span%30;
          state.user.donated = donated;
          state.user.title = '捐书成功';
          state.mask_donated.show = true;
        }else{
          Local.showToast( data.msg );
        }
      }, [], function() {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }
  },
  INVITE ({state,dispatch},action) {
    if( !state.user.loggedIn ){
      dispatch({
        type: 'TO_LOGIN'
      })
    }else{
      Local.forceLog( common.param('act_f'),`${state.conf.id}_btnShare` );
      dispatch({
        type: 'SHARE'
      })
    }
  }

}

export default {state,mutators,getters};