import {createStore} from './store.js';
import base from './base.js';
import actors from './actors.js';

const store = createStore(base.data,base.act).merge(actors.data,actors.act);

export default store;