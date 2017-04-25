<template>
	<div class="part3">
			<div class="headline">
				<p v-if="title">{{title}}</p>
				<img v-if="pic" :src="'images/'+pic+'.png'">
				<img v-if="!pic" src="images/part1.png">
			</div>
			<h2><span>5天</span>包月特权免费体验</h2>
			<div class="btn3" v-if="!picked" @tap.prevent="pickmonth">立即领取</div>
			<div class="btn4" v-else @tap.prevent="gomonth">去包月专区在线免费读</div>
			<p class="msg">5天内包月库内10万册书籍在线免费读<br>非包月库内书籍、看书听书8折优惠</p>
		</div>
</template>
<script type="text/javascript">
	export default {
		props:["monthpicked","pic","title"],
		data:function(){
			return{
				picked:this.monthpicked		
			}
		},
		methods:{
			pickmonth:function(){
			 	if(!this.$parent.islogin){
			 		Local.login();
			 		return;
			 	};			 	
			 	var self=this;
			 	Local.reqaObj(server() + "topic/old/open?pagetype="+param("pagetype"), function(data) {				
					if(data.code==0){
						self.picked=true;
					}else{
						Local.showToast(data.msg);
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				forceLog("LYHmonthpick","top","");		 		 							
			},
			gomonth:function(){
				//去包月专区
				Local.goMontharea();
				forceLog("LYHgomonth","top","");	
			}		
		}
	};	
</script>	