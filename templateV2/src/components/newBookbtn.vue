<template>
	<div :class="['btnbox newBookbtn',{'inlinebtn' : mdata.btnCols > 1}]" :id="mdata.id" :mid="mdata.mid">	
		<img :src="mdata.btnpic0" @click="showmask">
		<!-- <img :src="mdata.btnpic1" v-else>	 -->
		<div class="bookmask" :style="styleobj" v-show="mask">
			<div class="nb-wrap">
				<p class="b-title">{{mdata.title}}</p>
				<p class="b-content" v-for="(item,index) in mdata.content" :key="index">{{item}}</p>
			</div>
			<img src="src/images/closeRead.png" alt="关闭" class="close" @touchend="close">
		</div>	
	</div>
</template>
<style lang="scss" scoped>
.bookmask{position: fixed;top:0;left: 0;width: 100%;height: 100%;overflow: hidden;z-index: 100;}
.close{position: absolute;right:0;top:0;width: .96rem;z-index: 2}
.nb-wrap{padding: .96rem .32rem .32rem;}
.b-title{font-size: .5rem;margin: 0 0 .96rem .2rem;}
.b-content{font-size: .32rem;line-height: .52rem;text-indent: 2em}
</style>
<script>
	import IScroll from "iscroll";
	// var Iscroll=require("iscroll");
	export default {
		props:["mdata"],
		data(){
			return {
				mask:false,
				styleobj:{
					color:this.mdata.fontcolor,
					backgroundColor:this.mdata.bgcolor || this.$parent.bgcolor
				}
			}
		},
		methods: {
			close(){
				this.mask=false;
			},
			showmask(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				this.mask=true;
				requestAnimationFrame(_=>{
					new IScroll(".bookmask");
				});
				Local.forceLog("templateV2","TpNewbook",this.$parent.actid,this.mdata.id);
			}
		}
	}
</script>