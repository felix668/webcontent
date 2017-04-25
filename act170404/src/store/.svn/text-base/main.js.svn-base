const state = {
  lottery: {
    state: 'ready',
    text: '恭喜您',
    text2: '获得',
    coins: '--',
  }
};

const mutators = {
	INIT_MAIN ({state,dispatch},action) {
    // if( true ){
    //   state.lottery.coins = 300;
    //   state.lottery.state = 'done';
    // };
    if( state.meta.share ){
      Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      state.page = 'ready';
    }else{
      if( state.dev ){
        state.page = 'ready';
      }else{
        Local.forceLog( common.param('act_f'),`${state.conf.id}_enter` );
        Local.reqaObj( common.server()+`pkg${state.conf.id}/init`, function(data) {
          console.log(data);
          if( data.code===-4 ){
            state.page = 'over';
          }else{
            // dispatch({
            //   type: 'SET_ICON'
            // })
            if( data.isLogin ){
              state.user.loggedIn = true;

              if( data.money>0 ){
                if( data.qq===true ){
                  state.lottery.text = '您已经领取过';
                  state.lottery.text2 = '';
                }else if( data.device===true ){
                  state.lottery.text = '该设备已经领取过';
                  state.lottery.text2 = '';
                };
                state.lottery.coins = data.money;
                state.lottery.state = 'done';
              }else{
                if( data.hasRunOut===true ){
                  state.lottery.state = 'out';
                }
              }

              // if( data.device===true ){

              // };
              // if( data.hasRunOut===true ){
              //   state.lottery.state = 'out';
              // }else if( data.money>0 ){
              //   state.lottery.coins = data.money;
              //   state.lottery.state = 'done';
              // }
              
            }
            state.page = 'ready';
          }
          // state.page = 'ready';
          // state.page = 'over';
        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
	},
  DRAW_LOTTERY ({state,dispatch},action) {
    state.lottery.state = 'pending';

    if( state.dev ){
      setTimeout(()=>{
        // state.lottery.coins = 200;
        // state.lottery.state = 'success';
        state.lottery.state = 'out';
      },1000);
    }else{
      Local.forceLog( common.param('act_f'),`${state.conf.id}_btnDraw` );
      Local.reqaObj( common.server()+`pkg${state.conf.id}/pick`, function(data) {
        console.log(data);
        if( data.code===1&&data.money>0 ){
          // 成功获得书券
          state.lottery.coins = data.money;
          state.lottery.state = 'success';
        }else if( data.code===-4||data.hasRunOut===true ){
          // 书券已经被抢光
          state.lottery.state = 'out';
        }else{
          // 其他情况
          Local.showToast( data.msg );
        }
      }, [], function() {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }

  }
}

export default {state,mutators};