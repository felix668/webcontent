const state = {
  data: {
    coins: 0,
    bills: 0,

    price: 5.99,

    bought_before: false,
    bought: false,
    bills_taken: 0,

    returned_this_time: 0,
    returned_total: 0,

    msg: '--'

  },

};

const getters = {
  enoughMoney({ state }) {
    return state.data.bills + state.data.coins >= state.data.price * 100;
  }
}

const mutators = {
  // CHANGE_CURRENT ({state,dispatch,getters},action) {
  //   state.gods[action.i][current] = action.current;
  // },
  INIT_MAIN({ state, dispatch, getters }, action) {
    function getPrice() {
      if (state.meta.platform === 'adr') {
        Local.reqaObj('http://android.reader.qq.com/v6_5/nativepage/book/detail?bid=812443', function(data) {
          console.log(data);
          var _ = data.introinfo.prices;
          state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
          init();
        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      } else {
        Local.reqaObj('https://newios.reader.qq.com/v6_5_1/queryintro?origin=&bid=812443&sex=0', function(data) {
          console.log(data);
          var _ = data.introInfo.prices;
          state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
          init();
        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }

    function init() {
      Local.reqaObj(common.server() + `pkg170507/init`, function(data) {
        console.log(data);

        if (data.code === -4) {
          state.page = 'over';
        } else {

          if (data.isLogin) {
            state.user.loggedIn = true;

            state.data.coins = data.money;
            state.data.bills = data.z_money;

            if (data.hasBought === false) {

            } else {
              state.data.bought = true;
              if (data.pickState === -1) {
                // 如果活动开始之前购买过《白鹿原》：
                state.data.bought_before = true;
              } else if (data.pickState === 0) {
                // 如果领过书券
                state.data.bills_taken = 100;
              }
            }

          }
          state.page = 'ready';
        }

      }, [], function() {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }


    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      state.page = 'ready';
    } else {
      if (state.dev) {
        state.data.bills = 1000;
        state.page = 'ready';
      } else {
        dispatch({
          type: 'SET_ICON'
        })
        getPrice();
        Local.forceLog(common.param('act_f'), `enter`);

      }
    }
  },
  TO_BOOK_ODE({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      })
    } else {
      dispatch({
        type: 'TO_BOOK',
        bid: 194777
      })
    }
  },
  TO_BUY({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      })
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      })
    } else {
      dispatch({
        type: 'SHOW_MASK',
        case: 'confirm'
      })
    }
  },
  TO_PAY({ state, dispatch, getters }, action) {
    if (state.dev) {
      state.data.bought = true;
    } else {
      Local.forceLog(common.param('act_f'), `buy`);

      Local.reqaObj(
        state.meta.platform === 'adr' ?
        `http://allreader.3g.qq.com/common/dobuybook?bid=812443` :
        `https://allreader.reader.qq.com/common/dobuybook?bid=812443&c_platform=ioswp`,
        function(data) {
          console.log(data);
          if (data.code === 0) {
            state.data.bought = true;
            dispatch({
              type: 'ADD_TO_SHELF',
              book: {
                bid: 812443,
                title: '白鹿原',
                author: '陈忠实',
                intro: ''
              }
            })
            dispatch({
              type: 'SHOW_MASK',
              case: 'success'
            })
            Local.forceLog(common.param('act_f'), `buy_success`);
          } else {
            dispatch({
              type: 'SHOW_MASK',
              case: 'failed'
            })
          }
        }, [],
        function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
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
    } else if (state.data.bought === false) {
      Local.forceLog(common.param('act_f'), `btn_take`);
      dispatch({
        type: 'SHOW_MASK',
        case: 'to_buy'
      })

    } else {

      if (state.dev) {
        state.data.bills_taken = 100;
        dispatch({
          type: 'SHOW_MASK',
          case: 'success_taken'
        })
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'failed_to_take'
        // })
      } else {
        Local.forceLog(common.param('act_f'), `btn_take`);
        Local.reqaObj(common.server() + `pkg170507/pick`, data => {
          console.log(data);
          if (data.code === 1) {
            state.data.bills_taken = data.money;
            dispatch({
              type: 'SHOW_MASK',
              case: 'success_taken'
            })
          } else {
            dispatch({
              type: 'SHOW_MASK',
              case: 'failed_to_take'
            })
            state.data.msg = data.msg;
            // Local.showToast(data.msg)
          }

        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  SHOW_MASK({ state, dispatch, getters }, action) {
    let _ = state.mask_confirm;
    _.state = action.case;
    switch (action.case) {
      case 'to_buy':
        _.hasCross = true;
        break;
      case 'confirm':
        _.hasCross = true;
        break;
      case 'success':
        _.hasCross = false;
        break;
      case 'failed':
        _.hasCross = false;
        break;

      case 'success_taken':
        _.hasCross = false;
        break;
      case 'failed_to_take':
        _.hasCross = false;
        break;
    }
    dispatch({
      type: 'SHOW',
      what: 'mask_confirm'
    })
  }

}

export default { state, mutators, getters };
