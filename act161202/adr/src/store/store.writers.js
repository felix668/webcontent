import {createStore} from './store.js';
import base from './base.js';
import writers from './writers.js';

const store = createStore(base.data,base.act).merge(writers.data,writers.act);

export default store;