const state = {
  img: '../adr/img/',

  dev: (function(){
    // if( common.param('z_dev')==='true' ){
    //   return true;
    // };
    return false;
  })(),

  page: 'pending',
  loaded: false,

  conf: {
    act_f: {
      one: '170319',
      two: '170321'
    },
    share_title: {
      one: '玄幻王者血红新书来袭',
      two: '玄幻王者血红新书剧透'
    },
    share_desc: {
      one: '测试你的性格与哪位主角相似，赢血红完本书免费阅读！',
      two: '分享新书内容，抢血红经典老书限免！'
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
  TO_READ({state,dispatch},action){
    Local.$toRead( action.bid );
  },
  SET_ICON(){
    var pre = (function(){
      // 如果当前环境为测试环境：
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      }else{
        return 'https://yuedu.reader.qq.com/event';
      }
    })();
    var type = (function(){
      return /writers\.html/.test(location.href)?'writers':'actors';
    })();
    var title = type==='writers'?'大神作家喊你来投票！':'明星爱豆喊你来投票！';
    var desc = type==='writers'?'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】':'多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
    Local.$setIconForShareing(
      pre + '/act161202/com/share_'+type+'.html?tf=1',
      'http'+(self.ios?'s':'')+'://ptsolomo.reader.qq.com/book_res/event/act161202/adr/img/common/thumb.png',
      title,
      desc
    );
  },
  SHARE ({state,dispatch},action) {
    // Local.forceLog( common.param('act_f'),`share` );
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if( !state.meta.share ){
      if( state.user.loggedIn===false ){
        dispatch({
          type: 'TO_LOGIN'
        })
      }else{
        if( state.dev ){
          state.books.shared = true;
        }
        var pre = (function(){
          // 如果当前环境为测试环境：
          if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
            return 'https://ptsolomo.reader.qq.com/book_res/event';
          }else{
            return 'https://yuedu.reader.qq.com/event';
          }
        })();
        var act_f = state.conf.act_f[ state.meta.batch ];
        var href = pre+`/act170301/adr/${state.meta.batch}_share.html?tf=1&act_f=${act_f}`;
        if( state.meta.batch==='one' ){
          href += `&z_score=${state.ques.finalScore}&z_ticket=${state.user.ticket}`;
        };
        // console.log(href)
        Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
        Local.$share(
          href,
          location.href.replace( /act170301.+/,`act170301/adr/img/thumb_${state.meta.batch}.jpg` ),
          state.conf.share_title[ state.meta.batch ],
          state.conf.share_desc[ state.meta.batch ]
        )

        if( state.meta.batch==='two'&&state.user.isGuest ){
          setTimeout(()=>{
            dispatch({
              type: 'COMPLETE_SHARING'
            })
          },2500);
        }

      };
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
      cover: `https://ptsolomo.reader.qq.com/book_res/event/act170301/adr/img/thumb_${state.meta.batch}.jpg`,
      title: state.conf.share_title[ state.meta.batch ],
      desc: state.conf.share_desc[ state.meta.batch ]
    },'111')
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP ({state,dispatch},action) {
    Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );
    var test = (function(){
      if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
        return true;
      }else{
        return false;
      }
    })();
    var act_f = state.conf.act_f[ state.meta.batch ];
    var href = (function(){
      if( test ){
        if( env.pt==='adr' ){
          return `http://solomotest4.3g.qq.com/book_res/event/act170301/adr/${state.meta.batch}.html?act_f=${act_f}`;
        }else{
          return `https://ptsolomo.reader.qq.com/book_res/event/act170301/ios/${state.meta.batch}.html?act_f=${act_f}`;
        }
      }else{
        if( env.pt==='adr' ){
          return `http://iyuedu.qq.com/event/act170301/adr/${state.meta.batch}.html?act_f=${act_f}`;
        }else{
          return `https://yuedu.reader.qq.com/event/act170301/ios/${state.meta.batch}.html?act_f=${act_f}`;
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
    MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
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
    // if( state.meta.platform==='ios' ){
      // Local.addToShelfBooks( JSON.stringify([{
      //   author: "犹似",
      //   unitprice: "5",
      //   title: "豪门重生：恶魔千金归来",
      //   price: "220",
      //   totalWords: "4401310",
      //   bid: "452754"
      // }]) );
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