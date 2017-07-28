<template>
	<div id="app">
		<mask-load ref="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<template v-if="!over">
			<div id="banner"></div>
			<div id="content">
				<div class="first">
					<p class="title"><span>1</span> 请选择性别</p>
					<input type="radio" name="gender" id="woman" ref="woman">
					<label class="woman" for="woman">
						<span class="out">
							<span class="in"></span>
						</span>
					</label>
					<input type="radio" name="gender" id="man" ref="man">
					<label class="man" for="man">
						<span class="out">
							<span class="in"></span>
						</span>
					</label>
				</div>
				<div class="second">
					<p class="title"><span>2</span> 请选择生日信息</p>
					<div class="second-bg" ref="dateInput">
						<span class="month">{{month}}</span> 月<span class="day">{{day}}</span> 日
					</div>
				</div>
				<div class="btn" @click="generate"></div>
				<div class="test"></div>
			</div>
		</template>	
	</div>
</template>

<script>

	import "./css/index.scss"
	import './css/style.css'
	import scrollSelect from "./js/scroll-select.js"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	export default {
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				month: 6,
				day: 15,
				gender: 1,
				shareObj:{
					url : common.sharefront() + "act170705/share.html?act_f=170705",
					cover:  common.sharefront() + "act170705/src/images/cover.jpg",
					title: "暑期嘉年华，陪你玩一夏",
					desc: "来QQ阅读，赚积分，开宝箱，抢大神直播嘉宾席位"
				},
			}
		},
		computed:{
		},
		created(){ 
			this.initPage()
			let self = this
			window.afterShare = function(){
		      	Local.reqaObj(common.server() + "pkg170708/pick", data=>{
		      		console.log(data)
		      		if (self.plat == 'ios') {
	      				Local.showToast('分享成功')
	      			}
		      		// if (data.code == 1) {
		      		// }
				}, [], function() {
						Local.showToast("网络异常，请稍候重试")
				}, 1)
		    }
	 	},
	 	mounted(){
	 		let self = this
	 		new Image().src="src/images/woman-sel.png"
	 		new Image().src="src/images/man-sel.png"
	 		this.$refs.dateInput.addEventListener('click',_=>{
	 			console.log(0)
				scrollSelect.go({
				 	level:3,
				   	el:'dateInput',
				   	type:'calendar',
				   	callback(year,month,day){
				   		self.month = month
				   		self.day = day
				   	}
				})
			})
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj('https://ptwapmusic3.reader.qq.com/activity/' + "pkg170708/init", data=>{
					console.log(data)
					if(data.code == -4){
						this.over = true
						return
					}
					this.loading = false
					// console.log(this.$refs.loading)
					this.$refs.loading.$el.style.display = 'none'

					this.gender = data.gd
					if (data.gd == 0) {
						this.gender = 1
					}
					if (this.gender == 1) {
						this.$refs.man.checked = true
					}else{
						this.$refs.woman.checked = true
					}
				})
	 		},
	 		generate(){
	 			let gender = this.$refs.man.checked ? 1 : 2
	 			let result = this.getConstellationByBirthday(this.month,this.day)
	 			location.href = `./result.html?constellation=${result}&gender=${gender}`
	 		},
	 	 	getConstellationByBirthday(month,day) { 
	 			var value = null
	 			var birthMonth = month
	 			var birthDay = day

	 			if (birthMonth == 1 && birthDay >=20 || birthMonth == 2 && birthDay <=18) {value = "sp";} 
	 			if (birthMonth == 1 && birthDay > 31) {value = "Huh?";} 
	 			if (birthMonth == 2 && birthDay >=19 || birthMonth == 3 && birthDay <=20) {value = "sy";} 
	 			if (birthMonth == 2 && birthDay > 29) {value = "Say what?";} 
	 			if (birthMonth == 3 && birthDay >=21 || birthMonth == 4 && birthDay <=19) {value = "by";} 
	 			if (birthMonth == 3 && birthDay > 31) {value = "OK. Whatever.";} 
	 			if (birthMonth == 4 && birthDay >=20 || birthMonth == 5 && birthDay <=20) {value = "jn";} 
	 			if (birthMonth == 4 && birthDay > 30) {value = "I'm soooo sorry!";} 
	 			if (birthMonth == 5 && birthDay >=21 || birthMonth == 6 && birthDay <=21) {value = "szz";} 
	 			if (birthMonth == 5 && birthDay > 31) {value = "Umm ... no.";} 
	 			if (birthMonth == 6 && birthDay >=22 || birthMonth == 7 && birthDay <=22) {value = "jx";} 
	 			if (birthMonth == 6 && birthDay > 30) {value = "Sorry.";} 
	 			if (birthMonth == 7 && birthDay >=23 || birthMonth == 8 && birthDay <=22) {value = "sz";} 
	 			if (birthMonth == 7 && birthDay > 31) {value = "Excuse me?";} 
	 			if (birthMonth == 8 && birthDay >=23 || birthMonth == 9 && birthDay <=22) {value = "cn";} 
	 			if (birthMonth == 8 && birthDay > 31) {value = "Yeah. Right.";} 
	 			if (birthMonth == 9 && birthDay >=23 || birthMonth == 10 && birthDay <=23) {value = "tc";} 
	 			if (birthMonth == 9 && birthDay > 30) {value = "Try Again.";} 
	 			if (birthMonth == 10 && birthDay >=24 || birthMonth == 11 && birthDay <=22) {value = "tx";} 
	 			if (birthMonth == 10 && birthDay > 31) {value = "Forget it!";} 
	 			if (birthMonth == 11 && birthDay >=23 || birthMonth == 12 && birthDay <=21) {value = "ss";} 
	 			if (birthMonth == 11 && birthDay > 30) {value = "Invalid Date";} 
	 			if (birthMonth == 12 && birthDay >=22 || birthMonth == 1 && birthDay <=19) {value = "mj";} 
	 			if (birthMonth == 12 && birthDay > 31) {value = "No way!";} 
	 			return value;
	 		},
	 		hidemask(){
	 			this.$refs.alert.$el.style.display = "none"
	 			this.showAlert = false
	 		}
	 	}, 	
	 	components:{
	 		maskLoad,
	 		maskOver
	 	}
	}
</script>	
