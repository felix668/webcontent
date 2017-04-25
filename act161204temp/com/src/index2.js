import "../css/common.css";
import Vue from "../js/vue";
Vue.component('page',require('./page.vue'));
var page = new Vue({
	el: 'body',
	data:{
		pagetype:4
	}
})
