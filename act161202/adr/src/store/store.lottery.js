import {createStore} from './store.js';
import base from './base.js';
import lottery from './lottery.js';

const store = createStore(base.data,base.act).merge(lottery.data,lottery.act);

export default store;