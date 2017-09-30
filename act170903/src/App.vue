<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<template v-if="!over">
			<div class="wrap">
				<div class="adtime">9月27日至10月8日，集碎片，抽iPhone 8大奖</div>
				<mask-alert :log="isLogin" :userin="userinfo" :verok="verok"></mask-alert>
				<receive-debris :log="isLogin" :systim="systemtime" :freceived="freeReceived" :debrisNum="RedebrisNum" :balance="balance"></receive-debris>
				<a class="moread" @click="gourl" v-if="moread"><h4>其他活动入口</h4></a>
				<rules></rules>
			</div>
		</template>
	</div>
</template>

<script type="text/javascript">
	import "./css/index.less"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import rules from "./components/Rules.vue"
	import maskAlert from "./components/maskAlert.vue"
	import receiveDebris from './components/receiveDebris.vue'
	export default {
		components:{
			maskLoad,
	 		maskOver,
	 		rules,
	 		maskAlert,
	 		receiveDebris
	 	},
		data:function(){
			return{
				plat: window.pt,
				pageTitle:'千万豪礼等你来',
		 		loading: true,
		 		over: false,
				isLogin: true,
				verok:false,
				userinfo:{
					avor:'src/images/defaultface.png',//用户头像
					debris:0,//用户碎片
					openedNum:0,//
					chanceNum:0
				},
				freeReceived:false,
				RedebrisNum:15,
				balance:0,
				systemtime: 0,
				endTime: 1507132800000,
				moread:false
			}
		},
		computed:{
            moread(){
                let moreday = 1506592800000;
                let lastday = 1507392000000;
	 			if(this.systemtime > moreday && this.systemtime < lastday ){
	 				return true;
	 			}else{
	 				return false;
	 			}
            }
        },
		created(){
			this.initPage();
			Local.forceLog(common.param("act_f"),"GQJSPindex");
			if(this.plat=='ios'){
				Local.setPagetitle(this.pageTitle);
			}
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj(common.server() + "pkg170903/init", data=>{
					console.log(data);
					if(data.code==-4){
						this.over = true;
					}
					this.isLogin = data.isLogin;
					this.verok = data.verok;
					this.userinfo.avor = data.avor?data.avor:'src/images/defaultface.png';
					this.userinfo.debris=data.score;
					this.userinfo.openedNum=data.drawedtimes;
					this.userinfo.chanceNum=data.drawleft;
					this.RedebrisNum=data.pickprize;
					this.freeReceived=data.picktoday;
					this.balance=data.money;
					this.systemtime=data.systemtime;
					this.loading=false;
				},[],_=>{
                    Local.showToast('网络异常，请稍候重试');
                });
				
	 		},
	 		gourl(){
	 			Local.forceLog(common.param("act_f"),"GQJSPgootherad");
	 			if(this.systemtime>this.endTime){
	 				Local.openInside(common.front()+"act170905/index.html");
	 				console.log('双倍月票')
	 				//Local.openInside()
	 			}else{
	 				Local.openInside(common.front()+"act170906/index.html");
	 				console.log('充增');
	 			}
	 		}
	 		
	 	}
	}

</script>	
<style>
	
</style>
