<template>
	<div id="app">
		<load v-if="loading"></load>
		<over v-if="over"></over>
		<template v-if="!over">
			<img id="banner" src="src/images/banner.png"></img>
			<p class="wel">{{nick}}这是你来QQ阅读第<i class="leaf">{{days}}</i>天</p>
			<div id="content">
				<div v-for="(item,index) in picklist" :key="index" class="day">
					<span>第{{item.day}}天</span><span class="date">({{item.date}})</span>
					<div class="reward" v-if="index != 4">
						<div class="item">
							<strong class="item-title">{{plat=="ios"?"阅":"书"}}券</strong>
							<strong class="item-num" v-if="!item.picked">{{item.coin}}</strong>
							<strong class="item-num" v-else>{{item.picked}}</strong>
						</div>

						<strong class="reward-already reward-expired" v-if="partexpired">已过期</strong>
						<template v-else>
							<strong class="reward-btn" v-if="!item.canpick && !item.picked">即将解锁</strong>
							<strong class="reward-btn reward-complete" v-if="item.canpick && !item.picked" @click="reward(index)">立即领取</strong>
							<strong class="reward-already" v-if="item.picked">已领取</strong>
						</template>	
					</div>
				</div>
				<span class="car" :style="styleObj"></span>
			</div>
			<div class="prize">
				<strong class="prize-num">{{picklist[4].coin}}{{plat=="ios"?"阅":"书"}}券</strong>
				<strong class="prize-desc">{{lastMonth}}月{{lastDay}}日进入活动页面获得领取资格</strong>
				<strong class="prize-btn locked" v-if="!picklist[4].canpick && !picklist[4].picked && !allexpired">即将解锁</strong>
				<strong class="prize-btn" v-else>
					<template v-if="!allexpired">
						<span v-if="!picklist[4].picked" @click="reward(4)">立即领取</span>
						<span class="prize-already" v-else></span>
					</template>
					<span class="prize-expired" v-else></span>
				</strong>
			</div>
		</template>
	</div>
</template>
<style src="./css/app.scss" lang="sass"></style>
<script>
	import load from "./components/load"
	import over from "./components/over"
	import data from "./js/data"

	export default {
		data: function () {
			return {
				plat: window.pt,
				loading: true,
				over: false,
				isLogin: true,
				isguest: false,
				ut: common.param("ut"),
				nick: "",
				picklist: [{date: "9.24",picked: false,day: 25,canpick:true,coin:"10-30"},{date: "9.24",picked: false,day: 25,canpick:true,coin:"10-30"},{date: "9.24",picked: false,day: 25,canpick:true,coin:"10-30"},{date: "9.24",picked: false,day: 25,canpick:true,coin:"10-30"},{date: "9.24",picked: false,day: 25,canpick:true,coin:"10-30"}],
				days: 1,
				lastMonth: 1,
				lastDay: 1,
				partexpired: false,
				allexpired: false
			}
		},
		created() {
			this.initPage()
		},
		computed:{
			styleObj(){
				let obj = {}
				if(this.days < 15){
					obj = {
						"left": ".6rem",
      			"top": ".8rem"
					}
				}else if(this.days < 25){
					obj = {
						"left": "2.8rem",
      			"top": ".6rem"
					}
				}else if(this.days < 29){
					obj = {
						"left": "6.3rem",
						"top": "1.8rem",
						"webkitTransform": "rotateZ(78deg)"
					}
				}else if(this.days < 30){
					obj = {
						"left": "4.2rem",
						"top": "3.5rem",
						"transform": "rotate(166deg)"
					}
				}else{
					obj = {
						"left": "2rem",
      			"top": "4.7rem",
     				"transform": "rotate(130deg)"
					}
				}
				return obj	
			}
		},
		methods: {
			initPage() {
				Local.forceLog(common.param('ut'),"initPage",);
				if (process.env.NODE_ENV == 'local') {
					this.loading = false
					if (data.nick){
						this.nick = data.nick+","
						if(data.nick.length>5){
							this.nick = data.nick.slice(0,4)+"...,"
						}
					}
					this.isLogin = data.isLogin
					this.picklist = data.picklist
					this.days = data.days
					this.allexpired = data.allexpired
					let lastDate = data.picklist[4].date
					let pointIndex = lastDate.indexOf(".")
					this.lastMonth = lastDate.slice(0,pointIndex)
					this.lastDay = parseInt(lastDate.slice(pointIndex+1))
					this.partexpired = data.partexpired
				} else {
					Local.reqaObj(`${common.server()}newuser/day30init?ut=${this.ut}`, data => {
						console.log(data)
						this.loading = false
						if (data.code == -4) {
							this.over = true
							return
						}
						if (data.nick){
							this.nick = data.nick+","
							if(data.nick.length>5){
								this.nick = data.nick.slice(0,4)+"...,"
							}
						}
						this.isLogin = data.isLogin
						this.picklist = data.picklist
						this.days = data.days
						this.allexpired = data.allexpired
						let lastDate = data.picklist[4].date
						let pointIndex = lastDate.indexOf(".")
						this.lastMonth = lastDate.slice(0,pointIndex)
						this.lastDay = parseInt(lastDate.slice(pointIndex+1))
						this.partexpired = data.partexpired
					})
				}
			},
			reward(index) {
				if(index == 4){
					Local.forceLog(common.param('ut'),"clickGrowing",this.ut);
				}else{
					Local.forceLog(common.param('ut'),"clickGraduation",this.ut);
				}

				if(!this.isLogin){
					Local.login()
				}else{
					Local.reqaObj(`${common.server()}newuser/day30pick?pid=${index}&ut=${this.ut}`, data => {
						console.log(data)
						if (data.code>0){
							if(index == 4){
								Local.forceLog(common.param('ut'),"receiveGrowing",this.ut);
							}else{
								Local.forceLog(common.param('ut'),"receiveGraduation",this.ut);
							}
							if(this.plat == "adr"){
								Local.showToast("书券领取成功,7日有效期")
							}else{
								Local.showToast("阅券领取成功,7日有效期")
							}
							this.initPage()
						}else if(data.code == -11){
							Local.showToast("亲,第31天没来哦");
						}else if(data.code == -12){
							Local.showToast("亲,您已经领取过哦");
						}else if(data.code == -11){
							Local.showToast("亲,该奖励已过期哦");
						}
					}, [], () => {				
						Local.showToast("网络异常，请稍候重试");
					}, 1)
					
				}
			}
		},
		components: {
			load,
			over
		}
	}
</script>