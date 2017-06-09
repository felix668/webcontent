<template>
<transition name="slide-up">
	<div class="MaskForm" v-show="mask.show">
		<div class="cell">
			<div class="mask-panel">
				<img class="close" :src=" img+'/main/close.png' " 
				@click="$store.dispatch({type:'HIDE',what:'mask_form'})"/>
				<div class="title">
					亲爱的同学，和胡歌一起自由阅读并分享到朋友圈提升中奖概率哦
				</div>
				<div class="info">
					<span class="left_">{{error?'信息未填写或格式有误':''}}</span>
					<span class="right_">(所有项均为必填项)</span>
				</div>

				<div class="before" v-show="done===false">
					<input name="city" placeholder="城市" type="text" 
					:class=" form.city.state "
					v-model=" form.city.val "
					@blur=" check('city') "/>

					<input name="school" placeholder="学校" type="text"
					:class=" form.school.state "
					v-model=" form.school.val "
					@blur=" check('school') "/>
					
					<input name="name" placeholder="姓名" type="text"
					:class=" form.name.state "
					v-model=" form.name.val "
					@blur=" check('name') "/>

					<input name="qq" placeholder="QQ号" type="text"
					:class=" form.qq.state "
					v-model=" form.qq.val "
					@blur=" checkQQ() "/>

					<input name="mobile" placeholder="手机" type="text"
					:class=" form.mobile.state "
					v-model=" form.mobile.val "
					@blur=" checkMobile() "/>

					<div class="submit"
					@click="submit">
						提 交
					</div>
				</div>

				<div class="after" v-show="done===true">
					<div class="field">
						<span class="key_part">城市：</span>{{form.city.val}}
					</div>
					<div class="field">
						<span class="key_part">学校：</span>{{form.school.val}}
					</div>
					<div class="field">
						<span class="key_part">姓名：</span>{{form.name.val}}
					</div>
					<div class="field">
						<span class="key_part">QQ号：</span>{{form.qq.val}}
					</div>
					<div class="field">
						<span class="key_part">手机：</span>{{form.mobile.val}}
					</div>
					<div class="edit"
					@click="edit">
						修 改
					</div>
				</div>

			</div>
		</div>
	</div>
</transition>
</template>

<style lang="less" scoped>
.MaskForm {
	@grey: #d8d8d8;
	display: table;
	z-index: 9999;
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: rgba(0,0,0,0.5);
	.cell {
		display: table-cell;
		width: 100%; height: 100%;
		vertical-align: middle;
		.mask-panel {
			position: relative;
			width: 6.28rem;
			margin: auto;
			padding-top: 0.64rem; padding-bottom: 0.45rem;
			border-radius: 0.1rem; background: white;
			.close {
				position: absolute; right: 0.15rem; top: 0.15rem;
				width: 0.5rem;
			}
			.title {
				box-sizing: border-box;
				width: 100%;
				padding: 0 0.68rem;
				margin-bottom: 0.35rem;
				font-size: 0.32rem; line-height: 0.46rem;
				color: #ad6a47; font-weight: 600;
				text-align: center;
			}
			.info {
				margin-bottom: 0.18rem;
				padding: 0 0.68rem;
				font-size: 0.24rem;
				overflow: hidden;
				.left_ {
					float: left;
					color: #f14646;
				}
				.right_ {
					float: right;
					color: #999999;
				}
			}
			.before {
				input {
					box-sizing: border-box;
					width: 5.04rem; height: 0.85rem;
					margin: auto; margin-bottom: 0.15rem;
					border-radius: 0.08rem;
					border: 2px solid #d39f76;
					font-size: 0.28rem;
					text-indent: 0.28rem;
					outline: none;
					color: #ad6a47;
					&.error {
						border: 2px solid #f14646;
					}
				}
				.submit {
					width: 3.46rem; height: 0.84rem;
					margin: auto; margin-top: 0.22rem;
					line-height: 0.84rem;
					border-radius: 0.08rem;
					background: #bc865c;
					font-size: 0.29rem;
					text-align: center;
					color: white;
				}
			}
			.after {
				.field {
					width: 5.04rem; height: 0.85rem;
					margin: auto; margin-bottom: 0.15rem;
					line-height: 0.85rem;
					font-size: 0.28rem;
					text-indent: 0.28rem;
					color: #ad6a47;
					.key_part {
						display: inline-block;
						width: 1.5rem;
					}
				}
				.edit {
					width: 3.46rem; height: 0.84rem;
					margin: auto; margin-top: 0.22rem;
					line-height: 0.84rem;
					border-radius: 0.08rem;
					background: #bc865c;
					font-size: 0.29rem;
					text-align: center;
					color: white;
				}
			}
	
		}
	}
}
</style>

<script>
export default {
	data: function(){
		return {
			form: {
				city: {
					val: '',
					state: ''
				},
				school: {
					val: '',
					state: ''
				},
				name: {
					val: '',
					state: ''
				},
				qq: {
					val: '',
					state: ''
				},
				mobile: {
					val: '',
					state: ''
				}
			},
			done: false
		}
	},
	computed: {
		img(){
			return this.$store.state.img;
		},
		mask(){
			return this.$store.state.mask_form;
		},
		error(){
			var error = false;
			for( let key in this.form ){
				if( this.form[key].state==='error' ){
					error = true;
				}
			}
			return error;
		},
		// form_(){
		// 	return this.$store.state.form;
		// }
	},
	created: function(){
		if( localStorage.form ){
    	var form = JSON.parse(localStorage.form);
    	for( let key in form ){
    		this.form[key].val = form[key].val;
    	}
    	this.done = true;
    };
	},
	mounted: function(){
	},
	methods: {
		fill(e,key){
			this.form[key].val = e.target.value;
			console.log(this.form[key].val)
		},
		check(key){
			if( this.form[key].val==='' ){
				this.form[key].state = 'error';
			}else{
				this.form[key].state = '';
				return true;
			}
		},
		checkQQ(){
			if( /^(\d{5,})$/.test(this.form.qq.val) ){
				this.form.qq.state = '';
				return true;
			}else{
				this.form.qq.state = 'error';
			}
		},
		checkMobile(){
			if( /^1[3|4|5|8]\d{9}$/.test(this.form.mobile.val) ){
				this.form.mobile.state = '';
				return true;
			}else{
				this.form.mobile.state = 'error';
			}
		},

		submit(){
			if(
				this.check('city')&&
				this.check('school')&&
				this.check('name')&&
				this.checkQQ()&&
				this.checkMobile()
				){
				this.done = true;
				this.$store.dispatch({
					type: 'SUBMIT_FORM',
					form: this.form
				})
			};
		},
		edit(){
			this.done = false;
		}
	}
};
</script>