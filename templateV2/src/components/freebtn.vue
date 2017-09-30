<template>
	<div :class="['btnbox freebtn',{'inlinebtn' : mdata.btnCols > 1}]" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="getFree" v-if="mdata.operStatus === 0">
		<img :src="mdata.btn1" v-else>
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人领取限免'}}
		</p>
	</div>
</template>
<style lang="scss" scoped>
</style>
<script>
import Bus from "./bus";
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
			},
			showAlert:false
		}
	},
	created(){
		Bus.$on(this.mdata.rid,obj =>{
			this.bookinfo = obj;	//数组 包含了书籍信息	
			console.log(obj)	
		})
	},
	methods:{
		getFree(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(!this.$parent.isLogin){
				Local.login();
				return;
			}
			console.log(this.mdata.status)
			if(this.mdata.status === 0){
	 			Bus.$emit("mask",{name:'task',msg:"领取"});
	 			//this.$parent.$refs.tip.show({name:'task',msg:"领取"});
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
			//发送领限免请求
			//let data={code:-1111};
 			Local.reqaObj(`${common.server()}pickFree?moduleid=${this.mdata.id}&actid=${this.$parent.actid}&bid=${bids.join(",")}`,data => {
				if(data.code == 0){
 					Local.showToast("领取成功");
 					Local.addToShelfBooks(this.bookinfo);
					this.mdata.operStatus = 1;
 				}else if(data.code == -101){
 					this.mdata.operStatus = 1;
 					Local.showToast("当前账号或设备已领取过");
 				}else{
 					Local.showToast(data.msg);
 				}
 				this.$parent.init();
 		    },[],()=>{
				Local.showToast("网络异常，请稍候重试");
 			})
		},
		hidemask(){
		 	this.showAlert = false;
		}
	}
}
</script>

