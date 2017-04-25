<template>
	<div class="Contact" v-show=" page!=='pending' ">
<!-- 		<div class="mask__" v-show="!loggedIn"
		@click="TO_LOGIN">
			请先登录
		</div> -->

		<div class="form-editing" v-show="page==='editing'">
			<p class="one">
				中奖用户务必正确填写联系方式，方便客服与您联系。
			</p>
			<ul>
				<li>
					<p class="error">{{phoneError}}</p>
					<input name="phone" type="text" placeholder="电话" v-model="phone" v-on:blur="checkPhone"/>
					<p class="necc">必填</p>
				</li>
				<li>
					<p class="error">{{qqError}}</p>
					<input name="qq" type="text" placeholder="QQ" v-model="qq" v-on:blur="checkQQ" />
					<p class="necc">必填</p>
				</li>
				<li>
					<p class="error"></p>
					<input name="name" type="text" placeholder="姓名" v-model="name"/>
				</li>
				<li>
					<p class="error"></p>
					<input name="address" type="text" placeholder="地址" v-model="address"/>
				</li>
			</ul>
			<div class="submit" v-on:click="submit">
				提交
			</div>
		</div>

		<div class="form-done" v-show="page==='done'">
			<p class="one">
				中奖用户务必正确填写联系方式，方便客服与您联系。
			</p>
			<ul>
				<li>
					<p class="text">电话： {{phone}}</p>
				</li>
				<li>
					<p class="text">QQ ： {{qq}}</p>
				</li>
				<li>
					<p class="text">姓名： {{name}}</p>
				</li>
				<li>
					<p class="text">地址： {{address}}</p>
				</li>
			</ul>
			<div class="edit" v-on:click="edit">
				修改
			</div>
		</div>
	</div>
</template>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	:focus {outline: none;}
}
/*
::-webkit-scrollbar {
	display: none;
}
*/

html {
	font-family: 'Microsoft Yahei';
}
body {
}
ul,li {
	list-style: none;
}
img,input {
	display: block;
}

.clearfix669 {
  clear: both;
  transform: scale(2);
}

	.Contact {
		@red: #c40000;
		@blue: #0a79af;
		position: relative;
		.mask__ {
			position: fixed; left: 0; top: 0;
			width: 100%; height: 100%;
			padding: 10px 0;
			background: white;
			font-size: 20px; text-align: center;
			color: grey;
			text-decoration: underline;
		}

		.form-editing {
			padding: 0.32rem;
			.one {
				height: 0.64rem;
				font-size: 0.26rem; line-height: 0.64rem;
				color: #999999;
			}
			li {
				overflow: hidden;
				.error {
					height: 0.3rem; line-height: 0.3rem;
					font-size: 0.26rem;
					color: @red;
				}
				.necc {
					float: left;
					height: 0.84rem; line-height: 0.84rem;
					font-size: 0.26rem; text-indent: 0.26rem;
					color: #999999;
				}
			}
			input {
				box-sizing: border-box; float: left;
				width: 5.76rem; height: 0.84rem;
				border: 1px solid grey;
				font-size: 0.26rem; line-height: 0.26rem; text-indent: 0.26rem;
				&:focus {
					border: 1px solid @blue;
				}
			}
			.submit {
				width: 5.68rem; height: 0.9rem; line-height: 0.9rem;
				border-radius: 0.05rem;
				margin: auto; margin-top: 0.7rem;
				font-size: 0.4rem; text-align: center;
				background: #6699cc; color: white;
			}
		}

		.form-done {
			padding: 0.32rem;
			.one {
				height: 0.64rem;
				font-size: 0.26rem; line-height: 0.64rem;
				color: #999999;
			}
			li {
				overflow: hidden;
				.error {
					height: 0.3rem; line-height: 0.3rem;
					font-size: 0.26rem;
					color: @red;
				}
			}
			.text {
				height: 0.84rem;
				font-size: 0.26rem; line-height: 0.84rem;
			}
			.edit {
				width: 5.68rem; height: 0.9rem; line-height: 0.9rem;
				border-radius: 0.05rem;
				margin: auto; margin-top: 0.7rem;
				font-size: 0.4rem; text-align: center;
				background: #6699cc; color: white;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				dev: false,
				loggedIn: false,
				// over: false,
				
				//ios: (function(){
				//	var el = document.querySelector('[config]');
				//	var val = el.getAttribute('config');
				//	console.log(val)
				//	return /ios/.test( val )?true:false
				//})(),

				page: 'pending',

				phone: '',
				qq: '',
				name: '',
				address: '',

				phoneError: '',
				qqError: ''
			}
		},
		computed: {

		},
		mounted: function(){
			this.act({
				type: 'INIT'
			});
		},
		methods: {
			act: function(action){
				var self = this;
				switch(action.type){
					case 'INIT':
						if( self.dev ){
							self.loggedIn = true;
							self.phone = '13011111111';
							self.qq = '111111111';
							self.name = '张飞';
							self.address = '';
							self.page = 'done';
						}else{
							Local.reqaObj( common.server() + 'getContact', function (data) {
								console.log(data);

								self.loggedIn = data.isLogin;
								self.page = '';

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
								}else{
									Local.login();
								};
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						};
						break;
					case 'TO_LOGIN':
						Local.login();
						break;
				}
			},
			TO_LOGIN: function(){
				this.act({type:'TO_LOGIN'});
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
	}
</script>