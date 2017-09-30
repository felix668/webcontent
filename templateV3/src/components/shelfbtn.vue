<template>
	<div :class="['btnbox shelfbtn',{'inlinebtn' : mdata.btnCols > 1}]" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="addToshelf" v-if="status">
		<img :src="mdata.btn1" v-else>
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人加书架'}}
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
					color:this.mdata.fontcolor
				},
				hightext:{
					color:this.mdata.highcolor
				}
			}
		}
	},
	created(){
		Bus.$on(this.mdata.rid,obj =>{
			this.bookinfo = obj;	//数组 包含了书籍信息		
		})
	},
	computed:{
		status(){
			return this.mdata.operStatus === 0 && this.mdata.status === 1;
		}
	},
	methods:{
		addToshelf(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(!this.$parent.isLogin){
				Local.login();
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
			//发送加书架请求
			//let data={code:0};
 			Local.reqaObj(`${common.server()}addShelf?moduleid=${this.mdata.id}&actid=${this.$parent.actid}&bid=${bids.join(",")}`,data => {
 				if(data.code == 0){
 					Local.addToShelfBooks(this.bookinfo);
 					Local.showToast("已成功加入书架");
					this.mdata.operStatus = 1;
 				}else if(data.code == -101){
 					this.mdata.operStatus = 1;
 					Local.showToast("已加入过书架");
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

