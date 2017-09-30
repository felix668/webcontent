<template>
	<div :class="['btnbox linkbtn',{'inlinebtn' : mdata.btnCols > 1}]" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="goLink">
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人跳转'}}
		</p>
	</div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{
			url:this.mdata.url,
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
	methods:{
		goLink(){
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(this.mdata.linktype === 1){
				Local.openInside(`${this.url}?moduleid=${this.mdata.id}&actid=${this.$parent.actid}`);
			}else{
				window.location.href=this.url;
			}
		}
	}
}
</script>

