import Vix from './Vix.js';
import base from './base.js';
import book from './book.js';
import ques from './ques.js';

Vue.use( Vix );

const store = Vix.createStore([base,book,ques]);

export default store;