// z_dev
// z_debugger

const state = {
  img: './img/',

  dev: (function() {
    if (common.param('z_dev') === 'true') {
      return true;
    } else {
      return false;
    };
  })(),

  page: 'pending',
  loaded: false,
  done: false,

  conf: {
    type: (function() {
      return /two\.html/.test(location.href) ? 'two' : 'five';
    })(),
    id: '170505',
    act_f: '17053100',
    share_title: '423全民阅读，邀你益起阅读！',
    share_desc: '“你读我捐”，与QQ阅读合力为农家书屋捐书',
    topic: common.param('topic') || '302720,302720,302720,302720'
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    avatar: './img/common/default.jpg',
    time_span: 0,
    donated: 0,
    title: '您的已捐时长',

    u: null,
    p: null,
    lot: null,
    god: {
      donated: 0
    }
  },

  meta: {

    inTest: (function() {
      return /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href);
    })(),
    inWechat: (function() {
      return navigator.userAgent.match(/MicroMessenger/) ? true : false;
    })(),
    inWeibo: (function() {
      return navigator.userAgent.match(/Weibo/) ? true : false;
    })(),
    fullPage: (function() {
      return /z_fullPage=true/.test(location.href);
    })(),
    share: (function() {
      var el = document.querySelector('[config]');
      var val = el.getAttribute('config');
      return /share/.test(val) ? true : false
    })(),

    name: (function() {
      var el = document.querySelector('html');
      var val = el.getAttribute('name');
      return val;
    })(),
    platform: (function() {
      var el = document.querySelector('html');
      var val = el.getAttribute('platform');
      if (window.env) {
        val = window.env.pt;
      };
      console.log('[platform] ' + val)
      return val;
    })(),
    vw: (function() {
      if (window.env && window.env.vw) {
        return env.vw;
      };
    })(),
    // ios: (function(){
    //   if( window.env!==undefined ){
    //     return env.pt==='ios'?true:false;
    //   }else{
    //     var el = document.querySelector('html');
    //     var val = el.getAttribute('platform');
    //     console.log(val)
    //     return /ios/.test( val )?true:false
    //   };
    // })(),
  },

  // share: (function(){
  //   var el = document.querySelector('[config]');
  //   var val = el.getAttribute('config');
  //   return /share/.test( val )?true:false
  // })(),

  mask_prize: {
    show: false
  },
  mask_confirm: {
    show: false
  },
  mask_donated: {
    show: false
  },
  mask_download: {
    show: false
  },
  mask_wechat: {
    show: false
  }
}

const getters = {
  name_sliced({ state, getters }) {
    var name = state.user.name;
    if (typeof name === 'string' && name.length > 9) {
      return name.slice(0, 7) + '...';
    } else {
      return name;
    }
  },

  percent({ state, getters }) {
    return Math.floor(state.donated.minutes / 100000000 * 100);
  },

  chars_total({ state, getters }) {
    return Math.floor(Math.floor(state.user.time_span) * (1000 / 30))
  },
  chars_donated({ state, getters }) {
    return Math.floor(Math.floor(state.user.donated) * (1000 / 30))
  },
  time_left({ state, getters }) {
    return state.user.time_span - state.user.donated;
  },

  pre({ state, getters }) {
    if (state.meta.inTest) {
      if (state.meta.platform === 'adr') {
        return `http://solomotest4.3g.qq.com/book_res/event`;
      } else {
        return `https://ptsolomo.reader.qq.com/book_res/event`;
      }
    } else {
      if (state.meta.platform === 'adr') {
        return `http://iyuedu.qq.com/event`;
      } else {
        return `https://yuedu.reader.qq.com/event`;
      }
    }
  },
  pre_https({ state, getters }) {
    if (state.meta.inTest) {
      return `https://ptsolomo.reader.qq.com/book_res/event`;
    } else {
      return `https://yuedu.reader.qq.com/event`;
    }
  },
  share_href({ state, getters }) {
    return `${getters.pre_https}/act${state.conf.id}/public/test_1_share.html?tf=1&act_f=${state.conf.act_f}`;
  },
  share_thumb({ state, getters }) {
    return `${getters.pre_https}/act${state.conf.id}/public/img/main/thumb.jpg`;
  },

  href_main({ state, getters }) {
    return `${getters.pre}/act${state.conf.id}/public/main${state.meta.platform==='adr'?'':'_ios'}.html?act_f=${state.conf.act_f}`;
  },
  href_two({ state, getters }) {
    return `${getters.pre}/act${state.conf.id}/public/two.html?act_f=${state.conf.act_f}`;
  },

  href_test_0({ state, getters }) {
    return `${getters.pre}/act${state.conf.id}/public/test_0_${state.meta.platform}.html?act_f=${state.conf.act_f}`;
  },
  href_test_1({ state, getters }) {
    return `${getters.pre}/act${state.conf.id}/public/test_1_${state.meta.platform}.html?act_f=${state.conf.act_f}`;
  },

  href_total({ state, getters }) {
    return `${getters.pre}/act170410/index.html?act_f=170410`;
  },

}

const mutators = {
  TO_LOGIN({ state }, action) {
    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },

  TO_PAGE({ state, dispatch, getters }, action) {
    console.log('[TO_PAGE href] ' + action.href)
    if (state.meta.share) {
      // if the current env is adr&&wx
      if (env.vw === 'wx' && env.pt === 'adr') {
        sns.open(function(installStat, plat) {
          if (installStat === -2) { //浏览器
            // window.location.href="uniteqqreader://nativepage/client/bookshelf";
          } else if (installStat) {
            // if qqreader is installed
            bnative.openPage(action.href);
            state.mask_download.show = true;
          } else {
            state.mask_download.show = true;
          }
        });
      } else {
        bnative.openPage(action.href);
        setTimeout(() => {
          state.mask_download.show = true;
        }, 1000);
      };
    } else {
      if (state.meta.platform === 'adr') {
        Local.openPage(action.href);
      } else {
        Local.openInside(action.href);
      }
    }
  },
  TO_ROOKIE_ZONE({ state, dispatch, getters }, action) {
    Local.forceLog(common.param('act_f'), `to_rookie_zone`);
    location.href = 'uniteqqreader://nativepage/client/rookiezone?tab=0';
  },
  TO_PAGE_MAIN({ state, dispatch, getters }, action) {
    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    })
  },
  TO_PAGE_TOTAL({ state, dispatch, getters }, action) {
    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    })
  },

  TO_CONTACT({ state, dispatch }, action) {
    if (state.meta.share) {
      dispatch({ type: 'TO_APP' });
    } else {
      if (state.user.loggedIn === false) {
        dispatch({ type: 'TO_LOGIN' });
      } else {
        Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'contact.html'));
      }
    };
  },
  TO_CHARGE({ state, dispatch, getters }, action) {
    Local.doCharge('act', true, '');
  },
  TO_BOOK({ state, dispatch }, action) {
    if (!state.share) {
      Local.forceLog(common.param('act_f'), `to_book_${action.bid}`);
      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ({ state, dispatch }, action) {
    Local.$toRead(action.bid);
  },

  TO_ZHUAN_TI({ state, dispatch }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      })
    } else {
      Local.forceLog(common.param('act_f'), `learn_${action.id}`);
      if (state.meta.platform === 'adr') {
        Local.openPage(`http://iyuedu.qq.com/android/5_3/topicV2.html?tid=${action.zid.adr}`);
      } else {
        Local.openInside(`https://yuedu.reader.qq.com/common/common/topicV2.html?tid=${action.zid.ios}`);
      }
    }
  },
  TO_LISTEN_BOOK({ state, dispatch }, action) {
    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      })
    } else {
      Local.forceLog(common.param('act_f'), `toListen`);
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },

  TO_BOOKSHELF({ state, dispatch }, action) {
    location.href = 'uniteqqreader://nativepage/client/bookshelf';
  },
  TO_ACCOUNT({ state, dispatch }, action) {
    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },

  CLOSE_WINDOW({ state, dispatch }, action) {
    Local.closePage();
  },

  SET_ICON({ state, dispatch, getters }, action) {
    Local.$setIconForShareing(
      getters.share_href,
      getters.share_thumb,
      state.conf.share_title,
      state.conf.share_desc
    );
  },
  SHARE({ state, dispatch, getters }, action) {
    if (!state.meta.share) {

      // Local.forceLog( common.param('act_f'),`${state.conf.id}_share` );
      console.log('[SHARE share_href] ' + getters.share_href)
      Local.$share(
        getters.share_href,
        getters.share_thumb,
        state.conf.share_title,
        state.conf.share_desc
      )

    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share',
      })
    }
  },
  SET_SECOND_SHARING({ state, dispatch, getters }, action) {
    sns.share({
        url: location.href,
        cover: getters.share_thumb,
        title: state.conf.share_title,
        desc: state.conf.share_desc
      }, '111')
      // the second argument '111' is essential or an error would be thrown
  },
  TO_APP({ state, dispatch, getters }, action) {
    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );

    var href = getters.href_main;
    // if the current env is adr&&wx
    if (env.vw === 'wx' && env.pt === 'adr') {
      sns.open(function(installStat, plat) {
        if (installStat === -2) { //浏览器
          // window.location.href="uniteqqreader://nativepage/client/bookshelf";
        } else if (installStat) {
          // if qqreader is installed
          bnative.openPage(href);
          state.mask_download.show = true;
        } else {
          state.mask_download.show = true;
        }
      });
    } else {
      bnative.openPage(href);
      setTimeout(() => {
        state.mask_download.show = true;
      }, 1000);
    };
  },
  TO_DOWNLOAD({ state, dispatch }, action) {
    bnative.downLoad('10003531');
  },
  REPLAY({ state, dispatch }, action) {
    Local.forceLog(common.param('act_f'), `replay`);
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
    if (window.env && env.vw === 'wx') {
      location.href = (function() {
        if (/\?/.test(location.href)) {
          return location.href + '&zrand=' + new Date().getTime();
        } else {
          return location.href + '?zrand=' + new Date().getTime();
        }
      })();
    } else {
      location.href = location.href;
    }
  },
  ADD_TO_SHELF({ state, dispatch }, action) {

    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW({ state, dispatch }, action) {
    state[action.what].show = true;
  },
  HIDE({ state, dispatch }, action) {
    state[action.what].show = false;
  },
}

export default { state, mutators, getters };
