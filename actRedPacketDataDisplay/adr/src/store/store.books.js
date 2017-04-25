import {createStore} from './store.js';
import base from './base.js';
import books from './books.js';

const store = createStore([base,books]);

export default store;