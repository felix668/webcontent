import {createStore} from './store.js';
import base from './base.js';
import red from './red.js';

const store = createStore(base.data,base.act).merge(red.data,red.act);

export default store;