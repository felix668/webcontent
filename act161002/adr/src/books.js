import 'soap-rem';
import {writers} from './data/writers.js';

require('./common.less');
require('./books.less');

Vue.component( 'mask-confirm',require('./components/MaskDownload.vue') );

var app = new Vue({
	el: '#root',
	data: {
		ios: /ios/.test( document.title )?true:false,

		writers: writers,
		couponUsed: false,

		i: -1,
		show: false
		
	},
	computed: {
		
	},
	created: function(){
		var self = this;
		this.getData();
	},
	methods: {
		toBook: function(i){
			ABook.gotoDetail(this.writers[i].bid);
		},
		use: function(i){
			var self = this;
			this.i = i;
			this.show = true;		
		},
		act: function(action){
			var self = this;
			console.log(action)
			switch(action.type){
				case 'HIDE':
					this.show = false;
					break;
				case 'CONFIRM':
					console.log(self.i)
					Local.reqaObj( common.server()+`pkg161002/getbook?bid=${writers[self.i].bid}`, function(data) {
						Local.showToast('兑换成功！');
						self.couponUsed = true;
						self.show = false;
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
					break;
			}
		},
		getData: function(){
			var self = this;
			Local.reqaObj( common.server()+`pkg161002/init`, function(data) {
				console.log(data)
				if(self.testMode){
					self.writers.forEach((a,i)=>{
						a.votes = data.authorvotes[i];
					})
				}else{
					self.loggedIn = data.isLogin;
					self.writers.forEach((a,i)=>{
						a.votes = data.authorvotes[i];
					})
					if( data.isLogin ){
						self.picked = data.votewho;
						self.drawn = data.drawn;
						self.couponGot = data.havecoupon;
						self.couponUsed = data.usecoupon;
					}
					console.log(self.picked)
				};
			}, [], function() {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}
	}
})