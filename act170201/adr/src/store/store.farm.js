import Vix from './Vix.js';
import base from './base.js';
import farm from './farm.js';

Vue.use( Vix );

const store = Vix.createStore([base,farm]);

export default store;