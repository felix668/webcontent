<template>
	<div class="mask" v-if="showAlert">
		<div class="tiparea">
			<template v-if="info.name == 'task'">
				<p class="tip ptop">任务未完成，{{info.msg}}失败，去完成任务吧</p>
			</template>
			<template v-if="info.name == 'guest'">
				<h4 class="title f32">{{info.msg}}</h4>
				<p class="tip">
					暂时不支持游客账号参与活动，切换QQ或微信登录哦
				</p>
			</template>
			<div class="btn" @click="hidemask" :style="$parent.btncolor">我知道了</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.tip{text-align: left;padding-bottom: .2rem;}
.ptop{padding-top: .4rem;}
</style>
<script>
	import Bus from "./bus";
	export default {
		data(){
			return {
				info:{},
				showAlert:false
			}
		},
		created(){
      		Bus.$on("mask",obj => {
      			this.info = obj;
      			this.showAlert = true;
      		});
		},
		methods: {
		 	hidemask(){
		 		this.showAlert = false;
		 	},
		 	show(obj){
		 		this.info = obj;
      			this.showAlert = true;
		 	}
		}
	}
</script>