const state = {
  data: {
    coins: 0,
    bills: 0,

    price: 5.99,

    bought_before: false,

    bought: false,

    out: false,
    takenBefore: false,
    bills_taken: 0,
    canScrape: false,

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
    // function getPrice() {
    //   if (state.meta.platform === 'adr') {
    //     Local.reqaObj('http://android.reader.qq.com/v6_5/nativepage/book/detail?bid=812443', function(data) {
    //       console.log(data);
    //       var _ = data.introinfo.prices;
    //       state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
    //       init();
    //     }, [], function() {
    //       Local.showToast("网络异常，请稍候重试");
    //     }, 1);
    //   } else {
    //     Local.reqaObj('https://newios.reader.qq.com/v6_5_1/queryintro?origin=&bid=812443&sex=0', function(data) {
    //       console.log(data);
    //       var _ = data.introInfo.prices;
    //       state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
    //       init();
    //     }, [], function() {
    //       Local.showToast("网络异常，请稍候重试");
    //     }, 1);
    //   }
    // }

    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      state.page = 'ready';
    } else {
      if (state.dev) {
        // state.data.takenBefore = true;
        // state.data.bills_taken = 123;

        // state.data.out = true;

        state.page = 'ready';
      } else {
        // dispatch({
        //   type: 'SET_ICON'
        // })
        var uin = Login.cmap.uin;
        var skey = Login.cmap.skey;
        var plat = (state.meta.platform === 'adr') ? 1 : 3;
        var url = common.serverRoot() + 'api/pkg170601ex/init?' + "uin=" + uin + "&skey=" + skey + "&plat=" + plat;
        console.log("INIT_MAIN url:" + url);
        Local.reqaObj(url, function(data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {

            if (data.isLogin) {
              state.user.loggedIn = true;
              if (data.picked > 0) {
                state.data.takenBefore = true;
                state.data.bills_taken = data.picked;
              } else if (data.noneleft === true) {
                state.data.out = true;
              } else if (data.canPick === true) {

              }

            }
            state.page = 'ready';
          }

        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);


        // Local.forceLog( common.param('act_f'),`two_enter_gender${state.gender}` );

      }
    }
  },
  // TO_BOOK_ODE({ state, dispatch, getters }, action) {
  //   if (state.meta.share) {
  //     dispatch({
  //       type: 'TO_PAGE_MAIN'
  //     })
  //   } else {
  //     dispatch({
  //       type: 'TO_BOOK',
  //       bid: 194777
  //     })
  //   }
  // },
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
      if (state.dev) {
        state.data.bought = true;
        dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      } else {
        var href = `uniteqqreader://nativepage/vip/openbybookcoin?month=${action.month}`;
        console.log(href)
        location.href = href;
        // dispatch({
        //   type: 'TO_OPEN_VIP'
        // })
      }
    }
  },
  // TO_PAY({ state, dispatch, getters }, action) {
  //   Local.reqaObj('http://allreader.3g.qq.com/common/dobuybook?bid=812443', function(data) {
  //     console.log(data);
  //     state.data.bought = true;
  //     dispatch({
  //       type: 'SHOW_MASK',
  //       case: 'failed'
  //     })
  //   }, [], function() {
  //     Local.showToast("网络异常，请稍候重试");
  //   }, 1);
  // },
  TRY_TAKE({ state, dispatch, getters }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      })
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      })
    } else if (state.data.bought === false) {

      dispatch({
        type: 'SHOW_MASK',
        case: 'failed'
      })

    } else {

      if (state.dev) {
        state.data.canScrape = true;

        state.data.bills_taken = 100;
        state.data.bills_taken = -1;
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'success_taken'
        // })
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'failed_to_take'
        // })
      } else {
        var uin = Login.cmap.uin;
        var skey = Login.cmap.skey;
        var plat = (state.meta.platform === 'adr') ? 1 : 3;
        var url = common.serverRoot() + 'api/pkg170601ex/pick?' + "uin=" + uin + "&skey=" + skey + "&plat=" + plat;
        console.log("store TRY_TAKE:" + url);
        Local.reqaObj(url, data => {
          console.log(data);
          if (data.code === 0) {
            state.data.canScrape = true;
            state.data.bills_taken = data.tokennumber;
          } else if (data.code === -11) {
            state.data.canScrape = true;
            state.data.bills_taken = -1;
          } else if (data.code === -12) {
            dispatch({
              type: 'SHOW_MASK',
              case: 'failed'
            })
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
      case 'out':
        _.hasCross = false;
        break;
      case 'failed':
        _.hasCross = true;
        break;
    }
    dispatch({
      type: 'SHOW',
      what: 'mask_confirm'
    })
  }

}

export default { state, mutators, getters };
