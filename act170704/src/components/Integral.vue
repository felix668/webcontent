<template>
	<div>
		<div class="receivebtn" :class="{active:addclss}" @touchstart.stop="anmt($event)" @click="earnIntegral">领取积分开宝箱</div>
	    <div class="mask" v-show="tkmask">
			<div class="teaparea">
				<div class="closetk" @click="closemask" v-show="type!=0"></div>
				<h4>{{ type==0 ? '恭喜你，获得'+scores + '积分':'没有可领取的积分' }}</h4>
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
				type:-1,//积分类型
				scores:0,//领取积分数
				time:0,
				recevieOk:true,
				addclss:false
			}
		},
	 	methods:{
	 		closemask(){
	 			this.tkmask=false;
	 			this.recevieOk=true;
	 			this.addclss=false;
	 		},
	 		earnIntegral(){
	 			Local.forceLog(common.param("act_f"),"JFBXreceviejf");
	 			if(this.islogin){
	 				if(this.recevieOk){
	 					this.recevieOk=false;
			 			Local.reqaObj(common.server() + "pkg170704/getscore", data=>{
							console.log(data);
							this.type=data.code;
							if(this.type==0){
								this.scores=data.scores;
								this.time=data.time;
							}
							this.tkmask=true;
						});
	 				}
					
	 			}else{
	 				Local.login();
	 			}
	 			
	 		},
	 		earnclose(){
	 			this.closemask();
	 			if(this.type==0){
	 				this.$parent.initPage();
	 			}else{
	 				Local.openInside(`${common.front()}act170705/index.html`);
	 			}
	 		},
	 		anmt(e){
                this.addclss=true;
            }
	 	}
	}
</script>

