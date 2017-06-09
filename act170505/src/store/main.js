const state = {
  data: {
    taken: false,
    taken_platform: null,
    timeleft: 0,
    done: false
  },
  btn_take: {
    state: 'ready'
  },
  gods: [],
  // gods: [{
  //   name: '--',
  //   intro: '--',
  //   current: 0,
  //   books: [{
  //     title: '--',
  //   }]
  // }]

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
      if (state.dev) {
        setTimeout(() => {
          state.data.timeleft = 1000000000;
        }, 1000)
        state.gods.push(...[{
          name: '辰东',
          intro: '登顶百度小说风云榜榜首的网络作家。其作品想象力丰富，爽文写法的开山大家。',
          current: 0,
          books: [{
            title: '芈月传',

          }, {
            title: '三国演义'
          }, {
            title: '水浒传'
          }]
        }, {
          name: '辰东',
          intro: '登顶百度小说风云榜榜首的网络作家。其作品想象力丰富，爽文写法的开山大家。',
          current: 0,
          books: [{
            title: '',
          }, {
            title: ''
          }]
        }, ]);
        setTimeout(() => {
          state.page = 'ready';
        }, 10);
      } else {
        Local.forceLog(common.param('act_f'), `enter`);
        console.log(location.href);
        var href_init = `http${state.meta.platform==='adr'?'':'s'}://${state.meta.inTest?'pt':'new'}common.reader.qq.com/common/newUser/giftListV2?${state.meta.platform==='ios'?'&c_platform=ioswp':''}`;
        console.log(href_init)
        Local.reqaObj(href_init, data => {
          console.log(data)
          if (data.isLogin) {
            data.giftlist.forEach(a => {
              if (a.giftid === 10) {
                console.log('isobtained: ' + a.isobtained);
                // 如果用户已经领取过：
                if (a.isobtained === 1) {
                  // if (a.extParam.platform) {
                  //   // 如果领取的平台 与 当前平台相同：
                  //   state.data.taken_platform = a.extParam.platform === 'ioswp' ? 'ios' : 'adr';
                  //   if (state.data.taken_platform === state.meta.platform) {
                  //     // 如果
                      if (a.extParam.obtainCode === 1 || a.extParam.obtainCode === 3) {
                        state.data.taken = 'qq';
                        console.log(state.data.taken);
                        var timeleft = a.extParam.endTime - data.systemTime;
                        if (timeleft <= 0) {
                          timeleft = 0;
                        }
                        state.data.timeleft = timeleft;
                        console.log('timeleft: ' + timeleft);
                        // 如果当前设备领取过，而当前账号没有领取过：
                      } else if (a.extParam.obtainCode === 2) {
                        state.data.taken = 'device';
                      }
                  //   }
                  // }
                }
              }
            })
          };

          init();

        }, [], function() {
          Local.showToast("网络异常，请稍候重试");
        }, 1);

        function init() {
          Local.reqaObj(common.server() + `pkg170505/init`, function(data) {
            console.log(data);

            if (data.code === -4) {
              state.page = 'over';
            } else {
              data.displayList.forEach(a => {
                state.gods.push({
                  avatar: a.avator,
                  name: a.name,
                  intro: a.intro.length > 400 ? (a.intro.slice(0, 40) + '...') : a.intro,
                  current: 0,
                  books: a.books.map((b, i) => {
                    return {
                      bid: Number(b.id),
                      title: b.title,
                      cover: b.cover,
                      category: b.categoryName,
                      chapters: Number(b.lastChapter),
                      finished: b.finished === "0" ? false : true,
                    }
                  })
                })
              })
              if (data.isLogin) {
                state.user.loggedIn = true;
                // if (data.last > 0) {
                //   state.data.taken = true;
                //   state.data.timeleft = data.last;
                // } else if (data.last < 0) {
                //   state.data.taken = true;
                //   state.data.timeleft = 0;
                // }
              }
            }

            setTimeout(() => {
              state.page = 'ready';
            }, 10);
          }, [], function() {
            Local.showToast("网络异常，请稍候重试");
          }, 1);
        }
      }
    }
  },
  TO_TAKE({ state, dispatch, getters }, action) {
    if (state.btn_take.state !== 'ready') {
      return;
    } else if (state.meta.share) {

    } else {
      if (state.dev) {
        state.data.taken = true;
      } else {
        Local.forceLog(common.param('act_f'), `btn_take`);
        if (state.user.loggedIn === false) {
          dispatch({
            type: 'TO_LOGIN'
          })
        } else {
          // if (state.data.taken_platform === state.meta.platform) {
          //   Local.showToast('该账号已经领取过')
          // }
          if (state.data.taken === 'device') {
            Local.showToast('该设备已经领取过')
          } else {
            state.btn_take.state = 'pending';
            Local.reqaObj(`http${state.meta.platform==='adr'?'':'s'}://${state.meta.inTest?'pt':'new'}common.reader.qq.com/common/newUser/getGift?giftId=10${state.meta.platform==='ios'?'&c_platform=ioswp':''}`, data => {
              console.log(data);
              // success
              if (data.code === 0) {
                Local.showToast('领取成功！');
                setTimeout(() => {
                  location.href = location.href;
                }, 1500);
              } else {
                Local.showToast(data.rookieMsg)
                  // setTimeout(() => {
                  //   location.href = location.href;
                  // }, 2000);
              }
            }, [], function() {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          }
        }
      }
    }
  },

}

export default { state, mutators, getters };
