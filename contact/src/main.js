import "../js/set.js"
import Vue from 'vue'
require('./common.less')

Vue.component( 'contact',require('./Contact.vue') );

var app = new Vue({
	el: '#root',
	render: h=> h('contact')
})