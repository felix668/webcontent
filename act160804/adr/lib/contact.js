import './rem.js';

var app = new Vue({
	el: 'body',
	data: {
		// isLogin: false,
		// over: false,
		
		ios: /ios/.test(document.title)?true:false,
		testMode: false,

		page: '',

		phone: '',
		qq: '',
		name: '',
		address: '',

		phoneError: '',
		qqError: ''
	},
	computed: {

	},
	ready: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var self = this;
			Local.reqaObj( common.server() + 'getContact', function (data) {
				console.log(data);
				if( self.testMode ){
					data.isLogin = true;
					data.phone = '13011111111';
					data.qq = '111111111';
					data.name = '张飞';
					data.address = '';
				}
				if( data.isLogin ){
					if( data.phone ){
						self.phone = data.phone;
						self.qq = data.qq;
						self.name = data.name;
						self.address = data.address;
						self.page = 'done';
					}else{
						self.page = 'editing';
					}
				};
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		checkPhone: function(){
			if( /^1[3|4|5|8]\d{9}$/.test(this.phone) ){
				this.phoneError = '';
				return true;
			}else{
				this.phoneError = '请输入正确的手机号码';
				return false;
			}
		},
		checkQQ: function(){
			if( /^(\d{5,})$/.test(this.qq) ){
				this.qqError = '';
				return true;
			}else{
				this.qqError = '请输入正确的QQ号码';
				return false;
			}
		},
		edit: function(){
			this.page = 'editing';
		},
		submit: function(){
			var self = this;
			var one = this.checkPhone();
			var two = this.checkQQ();
			if( one&&two ){
				// var info = {
				// 	phone: this.phone,
				// 	qq: this.qq,
				// 	name: this.name,
				// 	address: this.address
				// };
				// console.log( JSON.stringify(info) )
				Local.reqaObj(
					common.server() + 
					`setContact?act_f=${common.param('act_f')}&phone=${self.phone}&qq=${self.qq}&name=${self.name}&address=${self.address}`, function (data) {
						console.log(data)
						if(data.isLogin){
							if (data.code === 0){
								Local.showToast("提交成功");
								self.page = 'done';
							}else{
								Local.showToast("系统繁忙，请稍后再试试");
							}
						}else{
							Local.login();
						}
					}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
		}
	}
})