const state = {
  img: '../adr/img/',

  dev: (function(){
    if( common.param('z_dev')==='true' ){
      return true;
    }else{
      return false;
    };
  })(),

  page: 'pending',
  loaded: false,

  conf: {
    id: '170404',
    act_f: '170404',
    share_title: '423全民阅读，1亿红包大派送',
    share_desc: 'QQ阅读发力全民阅读，海量红包，等你来拿',
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    ticket: '',
  },

  meta: {
    inTest: (function(){
      return /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href);
    })(),
    share: (function(){
      var el = document.querySelector('[config]');
      var val = el.getAttribute('config');
      return /share/.test( val )?true:false
    })(),

    name: (function(){
      var el = document.querySelector('html');
      var val = el.getAttribute('name');
      return val;
    })(),
    platform: (function(){
      var el = document.querySelector('html');
      var val = el.getAttribute('platform');
      if( window.env ){
        val = window.env.pt;
      };
      console.log('[platform] '+val)
      return val;
    })(),
    ios: (function(){
      if( window.env!==undefined ){
        return env.pt==='ios'?true:false;
      }else{
        var el = document.querySelector('html');
        var val = el.getAttribute('platform');
        console.log(val)
        return /ios/.test( val )?true:false
      };
    })(),
  },

  share: (function(){
    var el = document.querySelector('[config]');
    var val = el.getAttribute('config');
    return /share/.test( val )?true:false
  })(),

  mask_rules: {
    show: false
  },
  mask_form: {
    show: false
  },
  mask_confirm: {
    show: false
  },
  mask_download: {
    show: false
  },
}

const getters = {
  pre ({state,getters}) {
    if( state.meta.inTest ){
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
    }
  },
  pre_https ({state,getters}) {
    if( state.meta.inTest ){
      return `https://ptsolomo.reader.qq.com/book_res/event`;
    }else{
      return `https://yuedu.reader.qq.com/event`;
    }
  },
  share_href ({state,getters}) {
    return `${getters.pre_https}/act${state.conf.id}/adr/share.html?tf=1&act_f=${state.conf.act_f}&u=${state.user.u}&p=${state.user.p}&lot=${state.user.lot}`;
  },
  share_thumb ({state,getters}) {
    return `${getters.pre_https}/act${state.conf.id}/adr/img/main/thumb.jpg`;
  },

  href_main ({state,getters}) {
    return `${getters.pre}/act${state.conf.id}/${state.meta.platform==='adr'?'adr':'ios'}/main.html?act_f=${state.conf.act_f}`;
  },
  href_total ({state,getters}) {
    return `${getters.pre}/act170410/index.html?act_f=170410`;
  },
}

function pre( mode ){
  var pre = '';
  if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
    // if we are in testing environment
    if( mode==='https' ){
      pre = `https://ptsolomo.reader.qq.com/book_res/event`;
    }else if( (window.env&&window.env.pt==='adr')||state.meta.platform==='adr' ){
      pre = `http://solomotest4.3g.qq.com/book_res/event`;
    }else{
      pre = `https://ptsolomo.reader.qq.com/book_res/event`;
    }
  }else{
    if( mode==='https' ){
      pre = `https://yuedu.reader.qq.com/event`;
    }else if( (window.env&&window.env.pt==='adr')||state.meta.platform==='adr' ){
      pre = `http://iyuedu.qq.com/event`;
    }else{
      pre = `https://yuedu.reader.qq.com/event`;
    }
  }
  return pre;
}
function share_thumb(){
  return `${pre('https')}/act${state.conf.id}/public/img/main/thumb.jpg`;
}

const mutators = {
  TO_LOGIN({state},action){
    if( state.dev ){
      state.loggedIn = true;
      state.user.loggedIn = true;
    }else{
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },

  TO_PAGE ({state,dispatch,getters},action) {
    console.log('[TO_PAGE href] '+action.href)
    if( state.meta.share ){
      // if the current env is adr&&wx
      if( env.vw==='wx'&&env.pt==='adr' ){
        sns.open(function(installStat,plat){
          if( installStat === -2 ){//浏览器
            // window.location.href="uniteqqreader://nativepage/client/bookshelf";
          }else if(installStat){
            // if qqreader is installed
            bnative.openPage( action.href );
            state.mask_download.show = true;
          }else{      
            state.mask_download.show = true;
          }
        });
      }else{
        bnative.openPage( action.href );
        setTimeout(()=>{
          state.mask_download.show = true;
        },1000);
      };
    }else{
      if( state.meta.platform==='adr' ){
        Local.openPage( action.href );
      }else{
        Local.openInside( action.href );
      }
    }
  },
  TO_PAGE_MAIN ({state,dispatch,getters},action) {
    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    })
  },
  TO_PAGE_TOTAL ({state,dispatch,getters},action) {
    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    })
  },

  TO_CONTACT ({state,dispatch},action) {
    if( state.meta.share ){
      dispatch({type:'TO_APP'});
    }else{
      if( state.user.loggedIn===false ){
        dispatch({type:'TO_LOGIN'});
      }else{
        Local.openPage( location.href.replace( /(writers|actors|lottery)\.html/g,'contact.html' ) );
      }
    };
  },
  TO_CHARGE(){
    Local.doCharge( 'act',true,action.money*100 );
  },
  TO_BOOK({state,dispatch},action){
    if(!state.share){

      ABook.gotoDetail( action.bid );
    }else{
      dispatch({type:'TO_APP'});
    }
  },
  TO_READ ({state,dispatch},action) {
    Local.$toRead( action.bid );
  },
  TO_LISTEN_BOOK ({state,dispatch},action) {
    if( state.meta.share ){
      dispatch({
        type: 'TO_APP'
      })
    }else{
      Local.forceLog( common.param('act_f'),`toListen` );
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_ACCOUNT ({state,dispatch},action) {
    location.href = state.meta.platform==='adr'
      ?'uniteqqreader://nativepage/getAcctInfo'
      :'uniteqqreader://nativepage/account/index';
  },
  SET_ICON ({state,dispatch},action) {
    var pre = (function(){
      // 如果当前环境为测试环境：
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      }else{
        return 'https://yuedu.reader.qq.com/event';
      }
    })();

    var href = pre+`/act170404/adr/share.html?tf=1&act_f=${state.conf.act_f}`;

    Local.$setIconForShareing(
      href,
      location.href.replace( /act170404.+/,`act170404/adr/img/main/thumb.jpg` ),
      state.conf.share_title,
      state.conf.share_desc
    );
  },
  SHARE ({state,dispatch},action) {
    // Local.forceLog( common.param('act_f'),`share` );
    Local.forceLog( common.param('act_f'),`${state.conf.id}_btnShare` );
    // // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if( !state.meta.share ){

      var pre = (function(){
        // 如果当前环境为测试环境：
        if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        }else{
          return 'https://yuedu.reader.qq.com/event';
        }
      })();
      var act_f = state.conf.act_f;
      var href = pre+`/act170404/adr/share.html?tf=1&act_f=${act_f}`;

      // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
      Local.$share(
        href,
        location.href.replace( /act170404.+/,`act170404/adr/img/main/thumb.jpg` ),
        state.conf.share_title,
        state.conf.share_desc
      )

    }else{
      dispatch({
        type: 'SHOW',
        what: 'mask_share',
      })
    }
  },
  SET_SECOND_SHARING({state,dispatch},action){
    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: `https://ptsolomo.reader.qq.com/book_res/event/act170404/adr/img/main/thumb.jpg`,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    },'111')
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP ({state,dispatch},action) {
    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );
    var test = (function(){
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        return true;
      }else{
        return false;
      }
    })();
    var id = state.conf.id;
    var act_f = state.conf.act_f;
    var href = (function(){
      if( test ){
        if( env.pt==='adr' ){
          return `http://solomotest4.3g.qq.com/book_res/event/act${id}/adr/main.html?act_f=${act_f}`;
        }else{
          return `https://ptsolomo.reader.qq.com/book_res/event/act${id}/ios/main.html?act_f=${act_f}`;
        }
      }else{
        if( env.pt==='adr' ){
          return `http://iyuedu.qq.com/event/act${id}/adr/main.html?act_f=${act_f}`;
        }else{
          return `https://yuedu.reader.qq.com/event/act${id}/ios/main.html?act_f=${act_f}`;
        }
      };
    })();
    // if the current env is adr&&wx
    if( env.vw==='wx'&&env.pt==='adr' ){
      sns.open(function(installStat,plat){
        if( installStat === -2 ){//浏览器
          // window.location.href="uniteqqreader://nativepage/client/bookshelf";
        }else if(installStat){
          // if qqreader is installed
          bnative.openPage( href );
          state.mask_download.show = true;
        }else{      
          state.mask_download.show = true;
        }
      });
    }else{
      bnative.openPage( href );
      setTimeout(()=>{
        state.mask_download.show = true;
      },1000);
    };
  },
  TO_DOWNLOAD({state,dispatch},action){
    bnative.downLoad( '10026765' );
  },
  REPLAY({state,dispatch},action){
    Local.forceLog( common.param('act_f'),`replay` );
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
    if( window.env&&env.vw==='wx' ){
      location.href = (function(){
        if( /\?/.test(location.href) ){
          return location.href+'&zrand='+new Date().getTime();
        }else{
          return location.href+'?zrand='+new Date().getTime();
        }
      })();
    }else{
      location.href = location.href;
    }
  },
  ADD_TO_SHELF ({state,dispatch},action) {

    Local.addToShelfBooks( JSON.stringify([ action.book ]) );
      // Local.$addToShelf( action.book );
    // };
  },
  SHOW ({state,dispatch},action) {
    state[action.what].show = true;
  },
  HIDE ({state,dispatch},action) {
    state[action.what].show = false;
  },
}

export default {state,mutators,getters};