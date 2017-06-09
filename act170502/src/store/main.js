const state = {
  gender: 99,

  deal: {
    inProcessing: false,
    bought: false
  },
  bills: 0,
  coins: 0,
  priceOriginal: 0,
  price: -1,

  intro: '--',
  books: [],

  book_five: {
    bid: 0,
    cover: '',
    title: '----',
    author: '----',
    intro: '5元钱在今天能买什么？3个鸡蛋，1瓶加多宝，或者也可以买到9位知名作家数百个日夜的心血结晶。3000万字，只需5元即可全部购买。3000万字，只需5元即可全部购买。3000万字，只需5元即可全部购买。'
  },

};

const getters = {
  enoughMoney({state}) {
    return state.bills+state.coins >= state.price*100;
  }
}

const mutators = {
	INIT_TWO ({state,dispatch,getters},action) {
    if( state.meta.share ){
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      // dispatch({
      //   type: 'INIT_SHARE'
      // })
      state.page = 'ready';
    }else{
      if( state.dev ){
        
        state.page = 'ready';
      }else{
        Local.forceLog( common.param('act_f'),`two_enter_gender${state.gender}` );
        Local.reqaObj( common.server()+`pkg170501/batchInit?tpc=${state.conf.topic}`, function(data) {
          console.log(data);

          if( data.code===-4 ){
            state.page = 'over';
          }else{
            state.intro = data.batchPackage.bagName;
            state.books = data.batchPackage.bookInfo;
            state.priceOriginal = Number(data.batchPackage.originalBagMoney);
            state.price = Number(data.batchPackage.discountBagMoney);
            if (data.isLogin) {
              state.user.loggedIn = true;
              state.gender = data.gender;

              state.bills = Number(data.z_money);
              state.coins = Number(data.money);
              if (data.userHasBoughtPackageId.length>0) {
                state.deal.bought = true;
              }
            }
          }

          state.page = 'ready';
        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
	},
  INIT_FIVE ({state,dispatch,getters},action) {
    if( state.meta.share ){
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      })
      // dispatch({
      //   type: 'INIT_SHARE'
      // })
      state.page = 'ready';
    }else{
      if( state.dev ){
        
        state.page = 'ready';
      }else{
        Local.forceLog( common.param('act_f'),`five_enter_topic${state.conf.topic}` );
        Local.reqaObj( common.server()+`pkg170501/buyInit?tpc=${state.conf.topic}`, function(data) {
          console.log(data);

          if( data.code===-4 ){
            state.page = 'over';
          }else{

            if (data.isLogin) {
              state.user.loggedIn = true;

              state.priceOriginal = Number(data.data.oriPrice);
              state.price = Number(data.data.currPrice);

              state.bills = Number(data.data.bookTicket);
              state.coins = Number(data.data.bookCoin);
              if (data.data.isBuy===1) {
                state.deal.bought = true;
              }
              state.book_five.cover = data.data.cover;
              state.book_five.bid = data.data.bid;
              state.book_five.title = data.data.title;
              state.book_five.author = data.data.author;
              state.book_five.intro = data.data.content;

              state.page = 'ready';
            }else {
              state.page = 'unloggedin';
              dispatch({
                type: 'TO_LOGIN'
              })
            }
          }

        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  DO_SOMETHING ({state,dispatch,getters},action) {
    // dispatch({
    //   type: 'SHOW',
    //   what: 'mask_prize'
    // })
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE',
        href: getters.href_two
      })
    } else if (state.user.loggedIn===false) {
      dispatch({
        type: 'TO_LOGIN'
      })
    } else if (state.deal.bought===false) {
      if(state.conf.type==='two') {
        Local.forceLog( common.param('act_f'),`two_buy_gender${state.gender}` );
      }else {
        Local.forceLog( common.param('act_f'),`five_buy_topic${state.conf.topic}` );
      }
      
      dispatch({
        type: 'SHOW',
        what: 'mask_confirm'
      })
    } else {
      if(state.conf.type==='two') {
        dispatch({
          type: 'TO_BOOKSHELF'
        });
      }else {
        dispatch({
          type: 'TO_READ',
          bid: state.book_five.bid
        })
      }
    }
  },
  TO_BUY ({state,dispatch,getters},action) {
    if (getters.enoughMoney===false) {
      dispatch({
        type: 'TO_CHARGE'
      })
    } else {
      if(state.dev) {
        state.deal.bought = true;
        dispatch({
          type: 'SHOW',
          what: 'mask_prize'
        })
      }else {
        if(state.deal.inProcessing===false) {
          state.deal.inProcessing = true;

          if(state.conf.type==='two') {
            Local.reqaObj( common.server()+`pkg170501/batchBuy?pickId=0&tpc=${state.conf.topic}`, function(data) {
              console.log(data);
              if (data.code===1) {
                state.deal.bought = true;
                dispatch({
                  type: 'SHOW',
                  what: 'mask_prize'
                })
                Local.forceLog( common.param('act_f'),`two_success_gender${state.gender}` );
              } else {
                Local.showToast(data.msg);
              }
            }, [], function() {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          }else {
            Local.reqaObj( common.server()+`pkg170501/buy?tpc=${state.conf.topic}`, function(data) {
              console.log(data);
              if (data.code===1) {
                state.deal.bought = true;
                dispatch({
                  type: 'SHOW',
                  what: 'mask_prize'
                })
                Local.forceLog( common.param('act_f'),`five_success_topic${state.conf.topic}` );
              } else {
                Local.showToast(data.msg);
              }
            }, [], function() {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          }

        }
      }
    }
  },
  INIT_TEST_0({state,dispatch},action) {
    window.CLOSE_WINDOW = function(){
      console.log('CLOSE_WINDOW');
      dispatch({
        type: 'CLOSE_WINDOW'
      })
      return true;
    }
    state.page = 'ready';
  },
  INIT_TEST_1({state,dispatch},action) {
    window.CLOSE_WINDOW = function(){
      console.log('CLOSE_WINDOW');
      dispatch({
        type: 'CLOSE_WINDOW'
      })
      return true;
    }
    state.page = 'ready';
  }
  // INIT_SHARE ({state,dispatch},action) {
  //   var share_init_url = common.server()+`pkg${state.conf.id}/shareInit?u=${common.param('u')}&p=${common.param('p')}`+'&lot='+common.param('lot');
  //   console.log( '[share_init_url] '+share_init_url );
  //   Local.reqaObj( share_init_url, function(data) {
  //     console.log(data);

  //     if( data.code===-4 ){
  //       state.page = 'over';
  //     }else{
  //       state.stage.current = 1;

  //       state.donated.minutes = data.totalTime;
  //       if( data.totalTime>=124894590 ){
  //         state.done = true;
  //         state.stage.current = 1;
  //       };
  //       state.donated.books = data.totalDonateBooks;

  //       state.god.id = data.dashenId;
  //       state.god.name = data.dashenName;
  //       state.god.donated = data.dashenDonate;

  //       state.user.loggedIn = true;
  //       state.user.name = data.userNick;
  //       state.user.avatar = data.userAvor;
  //       state.user.time_span = data.readTime;
  //       state.user.donated = data.hasDonate;

  //       if( common.param('lot')==='3' ){
  //         state.user.name = '游客';
  //         state.user.avatar = './img/common/default.jpg';
  //       }

  //       state.page = 'ready';
  //     }
  //   }, [], function() {
  //     Local.showToast("网络异常，请稍候重试");
  //   }, 1);

  // },
  // CHANGE_MAIN ({state,dispatch},action) {
  //   console.log('[CHANGE to] '+action.to)
  //   state.stage.current = action.to;
  // },
  // DONATE ({state,dispatch},action) {
  //   if( state.dev ){
  //     var donated = state.user.time_span - state.user.time_span%30;
  //     state.user.donated = donated;
  //     state.user.title = '捐书成功';
  //     state.mask_donated.show = true;
  //   }else{
  //     Local.forceLog( common.param('act_f'),`${state.conf.id}_btnDonate` );
  //     Local.reqaObj( common.server()+`pkg${state.conf.id}/pick`, function(data) {
  //       console.log('[data pick] '+JSON.stringify(data));
  //       if( data.code===1 ){
  //         var donated = state.user.time_span - state.user.time_span%30;
  //         state.user.donated = donated;
  //         state.user.title = '捐书成功';
  //         state.mask_donated.show = true;
  //       }else{
  //         Local.showToast( data.msg );
  //       }
  //     }, [], function() {
  //       Local.showToast("网络异常，请稍候重试");
  //     }, 1);
  //   }
  // },
  // INVITE ({state,dispatch},action) {
  //   if( !state.user.loggedIn ){
  //     dispatch({
  //       type: 'TO_LOGIN'
  //     })
  //   }else{
  //     Local.forceLog( common.param('act_f'),`${state.conf.id}_btnShare` );
  //     dispatch({
  //       type: 'SHARE'
  //     })
  //   }
  // }

}

export default {state,mutators,getters};