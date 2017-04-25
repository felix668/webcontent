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

export default {
  state: {
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
      platform: (function(){
        var el = document.querySelector('html');
        var val = el.getAttribute('platform');
        if( window.env ){
          val = window.env.pt;
        };
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
  },
  mutators: {
    TO_PAGE ({state,dispatch},action) {
      var href = `${pre()}/act170410/index.html?act_f=170410`;
      if( state.meta.platform==='adr' ){
        Local.openPage( href );
      }else{
        Local.openInside( href );
      }
    },
    TO_ZHUAN_TI ({state,dispatch},action) {
      if( state.meta.share ){
        dispatch({
          type: 'TO_APP'
        })
      }else{
        Local.forceLog( common.param('act_f'),`learn_${action.id}` );
        if( state.meta.platform==='adr' ){
          // location.href = `uniteqqreader://webpage/http://iyuedu.qq.com/android/5_3/topicV2.html?tid=${action.zid.adr}`;
          Local.openPage( `http://iyuedu.qq.com/android/5_3/topicV2.html?tid=${action.zid.adr}` );
        }else{
          // location.href = `uniteqqreader://webpage/https://iyuedu.qq.com/ios/6_1/topicV2.html?tid=${action.zid.ios}`;
          // location.href = `uniteqqreader://webpage/https://yuedu.reader.qq.com/common/common/topicV2.html?tid=${action.zid.ios}`;
          Local.openInside( `https://yuedu.reader.qq.com/common/common/topicV2.html?tid=${action.zid.ios}` );
        }
      }
    },
  }
}