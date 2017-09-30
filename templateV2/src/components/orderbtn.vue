<template>
	<div :class="['btnbox orderbtn',{'inlinebtn' : mdata.btnCols > 1}]" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="order" v-if="mdata.operStatus === 0 && mdata.status === 1">
		<img :src="mdata.btn1" v-else>
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '预约'}}
		</p>
	</div>
</template>
<style lang="scss" scoped>
</style>
<script>
import Bus from "./bus.js";
export default {
	props:["mdata"],
	data(){
		return{
			bookinfo:[],
			styleobj:{
				text:{
					color:this.mdata.fontcolor || ''
				},
				hightext:{
					color:this.mdata.highcolor || ''
				}
			}
		}
	},
	created(){
		Bus.$on(this.mdata.rid,obj =>{
			this.bookinfo = obj;	//数组 包含了书籍信息
		})
	},
	methods:{
		order(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(!this.$parent.isLogin){
				Local.login();
				return;
			}
			if(this.$parent.isGuest){
				Local.showToast("暂不支持游客参与预约，切换QQ或微信登录哦");
				return;
			}
			if(this.bookinfo.length < 1){
				Local.showToast("还未选择");
				return;
			}
			var bids = [];
			this.bookinfo.forEach((value,index,array) => {
				bids.push(value.bid);
			})
			//发送预约请求
			//let data={code:-1111};
			
 			Local.reqaObj(`${common.server()}preOrder?moduleid=${this.mdata.id}&actid=${this.$parent.actid}&bid=${bids.join(",")}`,data => {
 				if(data.code == 0){
 					// Local.addToShelfBooks(this.bookinfo);
 					Local.showToast("已成功预约");
					this.mdata.operStatus = 1;
 				}else if(data.code == -101){
 					this.mdata.operStatus = 1;
 					Local.showToast("已预约过");
 				}else{
 					Local.showToast(data.msg);
 				}
 				this.$parent.init();
 		    },[],()=>{
				Local.showToast("网络异常，请稍候重试");
 			})
		}
	}
}
</script>

