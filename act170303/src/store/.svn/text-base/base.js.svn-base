const state = {
  img: '../adr/img/',

  dev: (function(){
    // if( common.param('z_dev')==='true' ){
    //   return true;
    // };
    return true;
  })(),

  page: 'pending',
  loaded: false,

  conf: {
    act_f: {
      one: '170330',
    },
    share_title: {
      one: '有声有色，悦读于乐',
    },
    share_desc: {
      one: '听正版有声小说《九州•海上牧云记》尽在QQ阅读',
    }
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    ticket: '',
  },

  meta: {
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
    batch: (function(){
      var el = document.querySelector('html');
      var val = el.getAttribute('batch');
      return val;
    })(),
    platform: (function(){
      var el = document.querySelector('html');
      var val = el.getAttribute('platform');
      return val;
    })(),
  },

  ios: (function(){
    if( window.env!==undefined ){
      return env.pt==='ios'?true:false;
    }else{
      var el = document.querySelector('[config]');
      var val = el.getAttribute('config');
      console.log(val)
      return /ios/.test( val )?true:false
    };
  })(),
  share: (function(){
    var el = document.querySelector('[config]');
    var val = el.getAttribute('config');
    return /share/.test( val )?true:false
  })(),

  loggedIn: false,

  mask_confirm: {
    show: false
  },
  mask_download: {
    show: false
  },
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
  TO_PAGE(){
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

      if( state.meta.batch==='one' ){
        if( state.meta.name==='one' ){
          Local.forceLog( common.param('act_f'),`one_cover_main_${action.bid}` );
        }else{
          Local.forceLog( common.param('act_f'),`one_cover_ques_${action.bid}` );
        }
      }else{
        if( state.books.shared===false ){
          Local.forceLog( common.param('act_f'),`two_cover_before_${action.bid}` );
        }else{
          Local.forceLog( common.param('act_f'),`two_cover_after_${action.bid}` );
        }
      }

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
  SET_ICON ({state,dispatch},action) {
    var pre = (function(){
      // 如果当前环境为测试环境：
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      }else{
        return 'https://yuedu.reader.qq.com/event';
      }
    })();

    var href = pre+`/act170303/adr/share.html?tf=1&act_f=${state.conf.act_f.one}`;

    Local.$setIconForShareing(
      href,
      location.href.replace( /act170303.+/,`act170303/adr/img/thumb.jpg` ),
      state.conf.share_title.one,
      state.conf.share_desc.one
    );
  },
  SHARE ({state,dispatch},action) {
    Local.forceLog( common.param('act_f'),`share` );
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if( !state.meta.share ){

      var pre = (function(){
        // 如果当前环境为测试环境：
        if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        }else{
          return 'https://yuedu.reader.qq.com/event';
        }
      })();
      var act_f = state.conf.act_f.one;
      var href = pre+`/act170303/adr/share.html?tf=1&act_f=${act_f}`;

      // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
      Local.$share(
        href,
        location.href.replace( /act170303.+/,`act170303/adr/img/thumb.jpg` ),
        state.conf.share_title.one,
        state.conf.share_desc.one
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
      cover: `https://ptsolomo.reader.qq.com/book_res/event/act170303/adr/img/thumb.jpg`,
      title: state.conf.share_title.one,
      desc: state.conf.share_desc.one
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
    var act_f = state.conf.act_f.one;
    var href = (function(){
      if( test ){
        if( env.pt==='adr' ){
          return `http://solomotest4.3g.qq.com/book_res/event/act170303/adr/index.html?act_f=${act_f}`;
        }else{
          return `https://ptsolomo.reader.qq.com/book_res/event/act170303/ios/index.html?act_f=${act_f}`;
        }
      }else{
        if( env.pt==='adr' ){
          return `http://iyuedu.qq.com/event/act170303/adr/index.html?act_f=${act_f}`;
        }else{
          return `https://yuedu.reader.qq.com/event/act170303/ios/index.html?act_f=${act_f}`;
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
    bnative.downLoad( '10003531' );
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

export default {state,mutators};