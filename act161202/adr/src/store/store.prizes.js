import {createStore} from './store.js';
import base from './base.js';
import prizes from './prizes.js';

const store = createStore(base.data,base.act).merge(prizes.data,prizes.act);

export default store;