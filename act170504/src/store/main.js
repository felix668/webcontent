const state = {
  data: {
    out: false,

    subscribed: 0,
    returned_this_time: 0,
    returned_total: 0,

  },

};

const getters = {
  enoughMoney({ state }) {
    return state.bills + state.coins >= state.price * 100;
  }
}

const mutators = {
  // CHANGE_CURRENT ({state,dispatch,getters},action) {
  //   state.gods[action.i][current] = action.current;
  // },
  INIT_MAIN({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
        // dispatch({
        //   type: 'INIT_SHARE'
        // })
      state.page = 'ready';
    } else {
      dispatch({
        type: 'SET_ICON'
      })
      if (state.dev) {
        state.page = 'ready';
      } else {
        Local.forceLog(common.param('act_f'), `enter`);
        Local.reqaObj(common.server() + `pkg170504/init`, function(data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {
            if (data.hasRunOut === true) {
              state.data.out = true;
            }
            if (data.isLogin) {
              state.user.loggedIn = true;

            }
            state.page = 'ready';
          }

        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);

      }
    }
  },
  PLAY() {
    Local.forceLog(common.param('act_f'), `play`);
  },
  TO_BOOK_ODE({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      })
    } else {
      Local.forceLog(common.param('act_f'), `toBook`);
      dispatch({
        type: 'TO_BOOK',
        bid: 194777
      })
    }
  },
  TO_TAKE({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      })
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      })
    } else if (state.mask_info.state === 'resolved') {

      Local.forceLog(common.param('act_f'), `take`);

      state.mask_info.state = 'pending';
      Local.reqaObj(common.server() + `pkg170504/pick`, data => {
        console.log(data);
        if (data.code === -10) {
          dispatch({
            type: 'RESOLVE',
            case: 'out'
          })
        } else if (data.code === 1) {
          state.data.returned_this_time = data.thisPick;
          state.data.returned_total = data.hasPick;
          dispatch({
            type: 'RESOLVE',
            case: 'success'
          })
        } else if (data.code === -3) {
          if (data.hasPick === 0) {
            dispatch({
              type: 'RESOLVE',
              case: 'unsubscribed'
            })
          } else {
            state.data.returned_total = data.hasPick;
            dispatch({
              type: 'RESOLVE',
              case: 'not_enough'
            })
          }

        } else {
          Local.showToast(data.msg)
        }

        state.mask_info.state = 'resolved';
      }, [], function() {
        Local.showToast("网络异常，请稍候重试");
      }, 1);

    }
  },
  RESOLVE({ state, dispatch, getters }, action) {
    let _ = state.mask_info;
    _.case = action.case;
    switch (action.case) {
      case 'out':
        _.title = `${getters.name_bill}被领完`;
        _.info = `来晚一步，300万${getters.name_bill}已被领完，期待下次活动`;
        _.hasCross = false;
        _.btn = 'got_it';
        break;
      case 'success':
        _.title = '恭喜你，领取成功';
        _.info = `您已订阅消费${state.data.returned_this_time}，返您${state.data.returned_this_time}${getters.name_bill}，累计领取${state.data.returned_total}${getters.name_bill}，可去“我的账户”查看`;
        _.hasCross = false;
        _.btn = 'got_it';
        break;
      case 'unsubscribed':
        _.title = '很遗憾，领取失败';
        _.info = `您在活动期间订阅消费为0，不支持返券，活动期间读《欢乐颂2》消费多少，返多少，去书籍详情页点击下载即可订阅`;
        _.hasCross = true;
        _.btn = '';
        break;
      case 'not_enough':
        _.title = '很遗憾，领取失败';
        _.info = `您已领取${state.data.returned_total}${getters.name_bill}，继续订阅《欢乐颂2》，还可返券`;
        _.hasCross = true;
        _.btn = '';
        break;
    }
    dispatch({
      type: 'SHOW',
      what: 'mask_info'
    })
  }

}

export default { state, mutators, getters };
