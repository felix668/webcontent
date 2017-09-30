<template>
	<div :class="['btnbox sharebtn',{'inlinebtn' : mdata.btnCols > 1}]" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="share">
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人分享'}}
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
		share(){
			if(this.$parent.sharepage){
				this.$parent.sharemask = true;
				return;
			}
			if(this.mdata.isNeedLogin == 1 && !this.$parent.isLogin){
				Local.login();
				return;
			}
			window.afterShare=()=> {
				Local.reqaObj(`${common.server()}share?actid=${this.$parent.actid}&moduleid=${this.mdata.id}`,data => {
					// Local.showToast("分享回调执行成功");
					this.$parent.init();
	 		    },[],()=>{
					Local.showToast("网络异常，请稍候重试");
	 			})
	 			Local.forceLog("templateV2","TpSharesuccess",this.$parent.actid,this.mdata.id);
			}
			let share = this.$parent.share;
			let sobj= Object.assign(share || {},{url:`${common.sharefront()}templateV2/share.html?act_f=templateV2&actid=${this.$parent.actid}`});
			// let sobj={
			// 	cover:share.cover || `${common.sharefront()}templateV2/src/images/cover.jpg`,
			// 	title:share.title || '分享标题',
			// 	desc:share.desc || '分享描述',
			// 	url:`${common.sharefront()}templateV2/share.html?act_f=templateV2&actid=${this.$parent.actid}`
			// }
			Local.shareTopic(sobj.url,sobj.cover,sobj.title,sobj.desc);
			// Local.forceLog(common.param("act_f"),"LYFshare");
		}
	}
}
</script>

