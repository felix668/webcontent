<template>
	<div :class="['btnbox readbtn',{'inlinebtn' : mdata.btnCols > 1}]" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="goRead">
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人阅读'}}
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
			bookinfo:{},
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
		Bus.$on(this.mdata.rid,obj => {
			this.bookinfo = obj[0];
		})
	},
	methods:{
		goRead(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(this.bookinfo.publish == 1){
				Local.forceLog("templateV2","TpReadbtn",this.$parent.actid,this.mdata.id);
				Local.goRead(this.bookinfo.bid);
			}
		}	
	}
}
</script>

