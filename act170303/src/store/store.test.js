import Vix from './Vix.js';
import base from './base.js';
import test from './test.js';

Vue.use( Vix );

const store = Vix.createStore([base,test]);

export default store;