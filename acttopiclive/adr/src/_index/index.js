import 'soap-rem';
// import '../common/debugger.js';
require('../common.scss');

Vue.component( 'imgBlured',require('../components/img-blured.vue') );
Vue.component( 'stack-both',require('../components/StackBoth.vue') );
Vue.component( 'countdown',require('../components/Countdown.vue') );
Vue.component( 'buttonAlarm',require('../components/button-alarm-2.vue') );
Vue.component( 'mask-loading',require('../components/MaskLoading.vue') );
Vue.component( 'debug',require('../components/Debug.vue') );

Vue.component( 'app',require('./App.vue') );

var root = new Vue({
	el: '#root',
	template: '<app></app>'
})