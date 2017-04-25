import Vix from './Vix.js';
import base from './base.js';
import index from './index.js';

Vue.use( Vix );

const store = Vix.createStore([base,index]);

export default store;