const state = {
  img: '../adr/img/farm',

  dev: (function(){
    if( common.param('z_dev')==='true' ){
      return true;
    };
    return false;
  })(),

  page: 'pending',
  loaded: false,

  meta: {
    name: (function(){
      var el = document.querySelector('html');
      var val = el.getAttribute('name');
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
    console.log(val)
    return /share/.test( val )?true:false
  })(),

  loggedIn: false,

  mask_rules: {
    show: false
  },
  mask_download: {
    show: false
  },
  mask_info: {
    show: false
  },
  mask_black: {
    show: false
  },
  mask_prize: {
    show: false
  }
}

function mutator( {state,dispatch},action ){
  var self = state;
  switch( action.type ){
    case 'TO_LOGIN':
      if( self.dev ){
        self.loggedIn = true;
      }else{
        // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
        Local.login();
      };
      break;

    // case 'TO_PAGE':
    //   var href;
    //   if( self.hasDiscount ){
    //     href = location.href.replace( /books_\d_discount\.html/g,'books_'+action.id+'_discount.html' );
    //   }else{
    //     href = location.href.replace( /books_\d\.html/g,'books_'+action.id+'.html' );
    //   };
    //   if( /\?/.test(location.href) ){
    //     href = href.replace(/\?/,'?z_replay=true&');
    //   }else{
    //     href += '?z_replay=true';
    //   };
    //   if( self.dev ){
    //     location.href = href;
    //   }else{

    //     if( self.id===action.id ){
    //       Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_replay` );
    //     }else{
    //       Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_to${action.id}${self.hasDiscount?'discount':''}` );
    //     }
    //     Local.openPage( href );
        
    //   };
    //   break;

    // case 'TO_CONTACT':
    //   if( self.share ){
    //     self.act({type:'TO_APP'});
    //   }else{
    //     if( !self.loggedIn ){
    //       self.act({type:'TO_LOGIN'});
    //     }else{
    //       Local.openPage( location.href.replace( /(writers|actors|lottery)\.html/g,'contact.html' ) );
    //     }
    //   };
    //   break;

    case 'TO_CHARGE':
      Local.doCharge( 'act',true,action.money*100 );
      break;
    case 'TO_BOOK':
      if(!self.share){
        Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_toBook` );
        ABook.gotoDetail( action.bid );
      }else{
        self.act({type:'TO_APP'});
      }
      break;
    case 'TO_READ':
      Local.$toRead(action.bid);
      break;


    // For sharing:
    case 'SET_ICON':
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
      break;
    case 'SHARE':
      Local.forceLog( common.param('act_f'),`share` );
      MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
      // MtaH5.clickStat('stats',{
      //   stats: `${self.meta.name}_${self.meta.platform}_share`
      // });
      if( !self.share ){
        var pre = (function(){
          // 如果当前环境为测试环境：
          if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
            return 'https://ptsolomo.reader.qq.com/book_res/event';
          }else{
            return 'https://yuedu.reader.qq.com/event';
          }
        })();
        Local.$share(
          pre+'/act170201/adr/share.html?tf=1&act_f=170222',
          location.href.replace( /act170201.+/,'act170201/adr/img/farm/thumb.jpg' ),
          '我可能瞎了',
          '我们对新疆，好像有什么误解……'
        )
      }else{
        console.log('SHOW mask_share')
        dispatch({
          type: 'SHOW',
          what: 'mask_share',
        })
      }
      break;

    // For pages shared out:
    case 'SET_SECOND_SHARING':
      sns.share({
        url: location.href,
        //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
        cover: 'http://solomotest4.3g.qq.com/book_res/event/act170201/adr/img/farm/thumb.jpg',
        title: '我可能瞎了',
        desc: '我们对新疆，好像有什么误解……'
      },'111')
      break;
    case 'TO_APP':
      var test = (function(){
        if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
          return true;
        }else{
          return false;
        }
      })();
      var href = (function(){
        if( test ){
          if( env.pt==='adr' ){
            return 'http://solomotest4.3g.qq.com/book_res/event/act170201/adr/farm.html?act_f=170222';
          }else{
            return 'https://ptsolomo.reader.qq.com/book_res/event/act170201/ios/farm.html?act_f=170222';
          }
        }else{
          if( env.pt==='adr' ){
            return 'http://iyuedu.qq.com/event/act170201/adr/farm.html?act_f=170222';
          }else{
            return 'https://yuedu.reader.qq.com/event/act170201/ios/farm.html?act_f=170222';
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
            self.mask_download.show = true;
          }else{      
            self.mask_download.show = true;
          }
        });
      }else{
        bnative.openPage( href );
        setTimeout(()=>{
          self.mask_download.show = true;
        },1000);
      };
      break;
    case 'TO_DOWNLOAD':
      bnative.downLoad( '10003531' );
      break;
    case 'REPLAY':
      Local.forceLog( common.param('act_f'),`replay` );
      MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
      // MtaH5.clickStat('stats',{
      //   stats: `${self.meta.name}_${self.meta.platform}_replay`
      // });
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
      break;


    case 'SHOW':
      state[action.what].show = true;
      if( action.what==='mask_author' ){
        Local.forceLog( common.param('act_f'),`learn` );
        MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_learn`})
        // MtaH5.clickStat('stats',{
        //   stats: `${self.meta.name}_${self.meta.platform}_learn`
        // });
      }else if( action.what==='mask_comments' ){
        Local.forceLog( common.param('act_f'),`comments` );
        MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_comments`})
        // MtaH5.clickStat('stats',{
        //   stats: `${self.meta.name}_${self.meta.platform}_comments`
        // });
      }
      break;
    case 'HIDE':
      state[action.what].show = false;
      break;
  }
}

export default {state,mutator};