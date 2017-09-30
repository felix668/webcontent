<template>
	<div>
		<div class="receivebtn" @click="earnIntegral">领取积分开宝箱</div>
	    <div class="mask" v-show="tkmask">
			<div class="teaparea">
				<div class="closetk" @click="closemask" v-show="type!=0"></div>
				<h4>{{ type==0 ? '恭喜你，获得'+scores + '积分':'没有可兑换的积分' }}</h4>
				<p v-if="type==0">阅读时常满{{ time }}分钟，获得{{ scores }}积分</p>
				<p v-else>参与玩一夏活动，赚积分</p>
			    <div class="closebtn" :class="{ bluebtn:type==0 }" @click="earnclose">{{ type==0?'我知道了':'赚积分 >>' }}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['plar','islogin'],
		data(){
			return{
				tkmask:false,
				type:0,//积分类型
				scores:0,//领取积分数
				time:0,
				recevieOk:true
			}
		},
	 	methods:{
	 		closemask(){
	 			this.tkmask=false;
	 			this.recevieOk=true;
	 		},
	 		earnIntegral(){
	 			if(this.islogin){
	 				if(this.recevieOk){
	 					this.recevieOk=false;
	 					this.tkmask=true;
			 			Local.reqaObj(common.server() + "pkg170704/getscore", data=>{
							console.log(data);
							this.type=data.code;
							if(this.type==0){
								this.scores=data.scores;
								this.time=data.time;
							}
						});
						//Local.forceLog(common.param("act_f"),"CQZindex");
	 				}
					
	 			}else{
	 				Local.login();
	 			}
	 			
	 		},
	 		earnclose(){
	 			this.closemask();
	 			if(this.type==1){
	 				this.$parent.initPage();
	 			}else{
	 				Local.openInside();
	 			}
	 		}
	 	}
	}
</script>

