import {createStore} from './store.js';
import base from './base.js';
import farm from './farm.js';

const store = createStore(base.data,base.act).merge(farm.data,farm.act);

export default store;