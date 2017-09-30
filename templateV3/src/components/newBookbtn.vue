<template>
	<div :class="['btnbox newBookbtn',{'inlinebtn' : mdata.btnCols > 1}]" :mid="mdata.mid">	
		<img :src="mdata.btnpic0" @click="openBook">
	</div>
</template>
<script>
	export default {
		props:["mdata"],
		data(){
			return {
			}
		},
		methods: {
			openBook(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				Local.forceLog("templateV2","TpNewbook",this.$parent.actid,this.mdata.id);
				//打开新书试看页面 加参数 actid moduleid  bgcolor
				let url=`${common.front()}templateV2/newbook.html?act_f=templateV2&actid={this.$parent.actid}&moduleid={this.mdata.id}&bgcolor=${this.$parent.bgcolor}`;
	 			Local.openInside(url);			
			}
		}
	}
</script>