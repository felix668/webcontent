import './rem.js';
import './debugger.js';
//import './config.js';
import './common.scss';
import './vue-transition.less';
import './animations/index.less';

Vue.directive('clickable', {
  inserted: function(el, binding, vnode) {
    // console.log(vnode)
    el.addEventListener('touchstart', e => {
      el.classList.add('active');
    })
    el.addEventListener('touchmove', e => {
      el.classList.remove('active');
    })
    el.addEventListener('touchend', e => {
      el.classList.remove('active');
    })
    el.addEventListener('touchcancel', e => {
      el.classList.remove('active');
    })
  }
})